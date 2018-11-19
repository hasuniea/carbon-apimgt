/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package org.wso2.carbon.apimgt.gateway.mediators;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.JsonNodeType;
import org.apache.axiom.om.OMElement;
import org.apache.axis2.AxisFault;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.synapse.MessageContext;
import org.apache.synapse.commons.json.JsonUtil;
import org.apache.synapse.config.Entry;
import org.apache.synapse.core.axis2.Axis2MessageContext;
import org.apache.synapse.mediators.AbstractMediator;
import org.everit.json.schema.Schema;
import org.everit.json.schema.ValidationException;
import org.everit.json.schema.loader.SchemaLoader;
import org.json.JSONArray;
import org.json.JSONObject;
import org.wso2.carbon.apimgt.api.APIManagementException;
import org.wso2.carbon.apimgt.gateway.APIMgtGatewayConstants;
import org.wso2.carbon.apimgt.gateway.threatprotection.utils.ThreatProtectorConstants;
import org.wso2.carbon.apimgt.gateway.utils.GatewayUtils;
import org.wso2.carbon.apimgt.gateway.utils.SchemaCacheUtils;
import org.wso2.carbon.apimgt.impl.APIConstants;

import java.io.IOException;
import java.util.ArrayList;
import java.util.EnumMap;
import java.util.Map;
import java.util.Iterator;
import java.util.List;
import java.util.Arrays;

/**
 * This mediator validate the JSON request and response messages against JSON schema which is defined in the swagger
 * file.
 */
public class SwaggerSchemaValidator extends AbstractMediator {

    private String swagger = null;
    private JSONObject paths;
    private JSONObject definition = null;
    private JSONObject schemas = null;
    private JSONObject jsonSchemaSetter;
    private String apiId;
    private JsonNode rootNode;

    private static final Log logger = LogFactory.getLog(SwaggerSchemaValidator.class);

    @Override
    public boolean mediate(MessageContext messageContext) {

        Entry localEntryObj;
        org.apache.axis2.context.MessageContext axis2MC = ((Axis2MessageContext)
                messageContext).getAxis2MessageContext();
        ObjectMapper objectMapper = new ObjectMapper();
        String contentType = (String) axis2MC.getProperty(ThreatProtectorConstants.REST_CONTENT_TYPE);

        if (contentType != null && ThreatProtectorConstants.APPLICATION_JSON.equals(contentType)) {
            apiId = messageContext.getProperty(ThreatProtectorConstants.LOCALENTRY_ID).toString();
            if (apiId != null) {
                localEntryObj = (Entry) messageContext.getConfiguration().getLocalRegistry().get(apiId);
                if ((!messageContext.isResponse()) && (localEntryObj != null)) {
                    swagger = localEntryObj.getValue().toString();
                    try {
                        rootNode = objectMapper.readTree(swagger.getBytes());
                    } catch (IOException e) {
                        logger.error("Error Occurred while converting the Swagger into JsonNode", e);
                    }
                    if (swagger != null) {
                        jsonSchemaSetter = new JSONObject(swagger);
                        paths = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.SWAGGER_PATH);

                        if (jsonSchemaSetter.has(APIMgtGatewayConstants.DEFINITIONS)) {
                            definition = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.DEFINITIONS);
                        } else if (jsonSchemaSetter.has(APIMgtGatewayConstants.COMPONENTS)) {
                            JSONObject component = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.COMPONENTS);
                            if (component != null) {
                                schemas = component.getJSONObject(APIMgtGatewayConstants.SCHEMAS);
                            }
                        }
                        String cacheKey = createCacheEntryKey(messageContext);
                        if ((cacheKey != null) && (SchemaCacheUtils.getCacheSchema(cacheKey) == null)) {
                            try {
                                cacheSchemas();
                            } catch (APIManagementException e) {
                                logger.error("");
                            }
                        }
                    }
                }
            }
            if (swagger != null) {
                String requestMethod;
                if (messageContext.isResponse()) {
                    requestMethod = messageContext.getProperty(
                            APIMgtGatewayConstants.ELECTED_REQUEST_METHOD).toString();
                    if (!APIConstants.SupportedHTTPVerbs.GET.name().equals(requestMethod)) {
                        validateResponse(messageContext);
                    }
                } else {
                    requestMethod = messageContext.getProperty(
                            APIMgtGatewayConstants.ELECTED_REQUEST_METHOD).toString();
                    if (!APIConstants.SupportedHTTPVerbs.GET.name().equals(requestMethod)) {
                        validateRequest(messageContext);
                    }
                }
            }
        }

        return true;
    }

    @Override
    public boolean isContentAware() {
        return true;
    }

    /**
     * Validate the Response Message which comes from the BE.
     *
     * @param messageContext Message context
     */
    private void validateResponse(MessageContext messageContext) {

        if (logger.isDebugEnabled()) {
            logger.debug("Validating API Response message of API: " + apiId);
        }
        String key;
        JSONObject payloadObject = getMessageContent(messageContext);
        key = createCacheEntryKey(messageContext);
        if (key != null) {
            String responseSchema = SchemaCacheUtils.getCacheSchema(key);
            if (responseSchema != null) {
                validateContent(payloadObject, responseSchema , messageContext);
            }
        }

    }

    /**
     * Validate the Request/response content.
     *
     * @param payloadObject  Request/response payload
     * @param schemaString   Schema which is uses to validate request/response messages
     * @param messageContext Message context.
     */
    private void validateContent(JSONObject payloadObject, String schemaString, MessageContext messageContext) {

        JSONObject jsonSchema = new JSONObject(schemaString);
        Schema schema = SchemaLoader.load(jsonSchema);
        try {
            schema.validate(payloadObject);
        } catch (ValidationException e) {
            if (messageContext.isResponse()) {
                logger.error("Schema validation failed in Response :" + e.getMessage(), e);
            } else {
                logger.error("Schema validation failed in Request :" + e.getMessage(), e);
            }
            GatewayUtils.handleThreat(messageContext, APIMgtGatewayConstants.HTTP_SC_CODE, e.getMessage());
        }
    }

    /**
     * Validate the Request Message.
     *
     * @param messageContext Message context.
     */
    private void validateRequest(MessageContext messageContext) {

        if (logger.isDebugEnabled()) {
            logger.debug("Validating API Request message of API: " + apiId);
        }
        // Create the Caching key
        String key = createCacheEntryKey(messageContext);
        String schema = SchemaCacheUtils.getCacheSchema(key);
        JSONObject payloadObject = getMessageContent(messageContext);
        String refSchema = schema != null ? schema : null;
        if (refSchema != null)
            validateContent(payloadObject, refSchema, messageContext);

    }

    /**
     * Get the Request/Response messageContent as a JsonObject
     *
     * @param messageContext Message context
     * @return JsonObject which contains the request/response message content
     */
    private JSONObject getMessageContent(MessageContext messageContext) {

        org.apache.axis2.context.MessageContext axis2MC = ((Axis2MessageContext)
                messageContext).getAxis2MessageContext();
        String requestMethod;
        if (messageContext.isResponse()) {
            requestMethod = messageContext.getProperty(ThreatProtectorConstants.HTTP_RESPONSE_METHOD).toString();
        } else {
            requestMethod = axis2MC.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD).toString();

        }
        JSONObject payloadObject = null;
        if (!APIConstants.SupportedHTTPVerbs.GET.name().equalsIgnoreCase(requestMethod) && messageContext.getEnvelope().
                getBody() != null) {
            OMElement xmlResponse = messageContext.getEnvelope().getBody().getFirstElement();
            try {
                payloadObject = new JSONObject(JsonUtil.toJsonString(xmlResponse).toString());
            } catch (AxisFault axisFault) {
                logger.error(" Error occurred while converting the String payload to Json");
            }
        }
        return payloadObject;
    }

    private void cacheSchemas() throws APIManagementException {
        if (jsonSchemaSetter.has(APIMgtGatewayConstants.DEFINITIONS)) {
            JSONArray definitionNames = definition.names();
            if (definitionNames != null) {
                JsonNode definitionNode = rootNode.at("/definitions");
                pushToCache(definitionNames, definitionNode);
            }
        } else if (jsonSchemaSetter.has(APIMgtGatewayConstants.COMPONENTS)) {
            JSONObject jsonSchemaSetterComp = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.COMPONENTS);
            if (jsonSchemaSetterComp.getJSONObject(APIMgtGatewayConstants.SCHEMAS) != null) {
                schemas = jsonSchemaSetterComp.getJSONObject(APIMgtGatewayConstants.SCHEMAS);
                JSONArray schemaNames = schemas.names();
                if (schemaNames != null) {
                }
            }
        }
    }

    private EnumMap<APIMgtGatewayConstants.HttpStatusCode, String> generateHTTPStatuses() {
        EnumMap<APIMgtGatewayConstants.HttpStatusCode, String> enumMap =
                new EnumMap<>(APIMgtGatewayConstants.HttpStatusCode.class);

        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.OK, "200");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.ACCEPTED, "202 ");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.CREATED, "201");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.NON_AUTHORITATIVE_INFORMATION, "203");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.NO_CONTENT, "204");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.RESET_CONTENT, "205");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.PARTIAL_CONTENT, "206");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.MULTI_STATUS, "207");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.ALREADY_REPORTED, "208");
        enumMap.put(APIMgtGatewayConstants.HttpStatusCode.IM_USED, "226");
        return enumMap;
    }

    private void pushToCache(JSONArray jsonSchemaSetter, JsonNode schemas) throws APIManagementException {
        JsonNode schemaValue;
        for (int y = 0; y < jsonSchemaSetter.length(); y++) {
            String schemaName = jsonSchemaSetter.get(y).toString();
            schemaValue = schemas.at(APIMgtGatewayConstants.LAST_INDEX + schemaName);
            generateSchema(schemaValue);
            if (SchemaCacheUtils.getCacheSchema(schemaName) == null) {
                SchemaCacheUtils.putCache(schemaName + "-" + apiId, schemaValue.toString());
            }
        }
    }

    private void generateSchema(JsonNode parent) throws APIManagementException {
        JsonNode schemaProperty;
        Iterator<Map.Entry<String, JsonNode>> schemaNode = parent.fields();
        while (schemaNode.hasNext()) {
            Map.Entry<String, JsonNode> entry = schemaNode.next();
            if (entry.getValue().has(APIMgtGatewayConstants.SCHEMA_REFERENCE)) {
                JsonNode refNode = entry.getValue();
                Iterator<Map.Entry<String, JsonNode>> refItems = refNode.fields();
                while (refItems.hasNext()) {
                    Map.Entry<String, JsonNode> entryRef = refItems.next();
                    if (entryRef.getKey().equals(APIMgtGatewayConstants.SCHEMA_REFERENCE)) {
                        JsonNode schemaObject = extractSchemaObject(entryRef.getValue());
                        entry.setValue(schemaObject);
                    }
                }
            }
            schemaProperty = entry.getValue();
            if (JsonNodeType.OBJECT == schemaProperty.getNodeType()) {
                generateSchema(schemaProperty);
            }
            if (JsonNodeType.ARRAY == schemaProperty.getNodeType()) {
                generateArraySchemas(entry);
            }
        }
    }

    private JsonNode extractSchemaObject(JsonNode refNode) {
        String[] val = refNode.toString().split("#");
        String path = val[1].replace("\\{^\"|\"}", "").replaceAll("\"", "");
        return rootNode.at(path);
    }

    /**
     * Create Cache entry key by appending request/response schema + api ID
     * @param messageContext Request/Response message context
     * @return key to be store in the cache. Ex(Pet-admin-PetStore-1.0)
     */
    private String createCacheEntryKey(MessageContext messageContext) {
        String schemaKey;
        if (!messageContext.isResponse())
            schemaKey = extractSchemaFromRequest(messageContext);
        else {
            schemaKey = extractResponse(messageContext);
        }
        if (schemaKey !=null) {
            String cacheKey = new StringBuilder().append(schemaKey).append("-").append(messageContext.getProperty(
                    ThreatProtectorConstants.LOCALENTRY_ID).toString()).toString();
            return cacheKey;
        }
        return null;
    }

    private String extractSchemaFromRequest(MessageContext messageContext) {

        org.apache.axis2.context.MessageContext axis2MC = ((Axis2MessageContext)
                messageContext).getAxis2MessageContext();

        String resourcePath = messageContext.getProperty(APIMgtGatewayConstants.API_ELECTED_RESOURCE).toString();
        String requestMethod = axis2MC.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD).toString();
        String schemaReference;

        String pathKey;
        JSONArray parameters;
        JSONObject requestBody;
        Iterator swaggerResourcePaths = paths.keys();
        while (swaggerResourcePaths.hasNext()) {
            pathKey = (String) swaggerResourcePaths.next();
            if (pathKey.equals(resourcePath)) {
                JSONArray jsonArray = paths.getJSONObject(pathKey).names();
                for (int i = 0; i < jsonArray.length(); i++) {
                    if (jsonArray.get(i).equals(requestMethod.toLowerCase())) {
                        JSONObject parameterObject = paths.getJSONObject(pathKey).getJSONObject(
                                requestMethod.toLowerCase());
                        if (parameterObject != null) {
                            if (parameterObject.has(APIMgtGatewayConstants.PARAMETERS)) {
                                parameters = parameterObject.getJSONArray(APIMgtGatewayConstants.PARAMETERS);
                                if (parameters != null) {
                                    for (int x = 0; x < parameters.length(); x++) {
                                        JSONObject jsonobject = parameters.getJSONObject(x);
                                        if (jsonobject.has(APIMgtGatewayConstants.SCHEMA)) {
                                            if (jsonobject.getJSONObject(APIMgtGatewayConstants.SCHEMA).
                                                    has(APIMgtGatewayConstants.SCHEMA_REFERENCE)) {
                                                schemaReference = jsonobject.getJSONObject(APIMgtGatewayConstants.SCHEMA
                                                ).get(APIMgtGatewayConstants.SCHEMA_REFERENCE).toString();
                                                int index = schemaReference != null ? schemaReference.
                                                        lastIndexOf(APIMgtGatewayConstants.LAST_INDEX) : 0;
                                                return schemaReference != null ? schemaReference.
                                                        substring(index + 1) : null;

                                            } else {
                                                String refSchema = jsonobject.getJSONObject(
                                                        APIMgtGatewayConstants.SCHEMA).toString();
                                                byte[] bytes = refSchema.getBytes();
                                                ObjectMapper mapper = new ObjectMapper();
                                                try {
                                                    JsonNode node = mapper.readTree(bytes);
                                                    Iterator<Map.Entry<String, JsonNode>> schemaNode = node.fields();
                                                    while (schemaNode.hasNext()) {
                                                        Map.Entry<String, JsonNode> entry = schemaNode.next();

                                                        if (entry.getValue().has(APIMgtGatewayConstants.SCHEMA_REFERENCE)) {
                                                            String value = entry.getValue().fields().next().getValue().toString();
                                                            String[] val = value.split("#");
                                                            String pathx = val[1].replaceAll("^\"|\"$", "");
                                                            int c = pathx.lastIndexOf("/");
                                                            return pathx.substring(c + 1);
                                                        }
                                                    }

                                                } catch (IOException e) {
                                                    e.printStackTrace();
                                                }

                                            }
                                        }

                                    }
                                }
                            } else if (parameterObject.has(APIMgtGatewayConstants.REQUEST_BODY)) {
                                JSONObject schema = null;
                                requestBody = parameterObject.getJSONObject(APIMgtGatewayConstants.REQUEST_BODY);

                                if (requestBody != null) {
                                    JSONObject schemaReferenceObject = (JSONObject) requestBody.getJSONObject(
                                            APIMgtGatewayConstants.CONTENT).get(APIMgtGatewayConstants.JSON_CONTENT_TYPE);
                                    if (schemaReferenceObject != null) {
                                        schema = (JSONObject) schemaReferenceObject.get(APIMgtGatewayConstants.SCHEMA);

                                    }
                                    if (schema != null) {
                                        if (schema.has(APIMgtGatewayConstants.SCHEMA_REFERENCE)) {
                                            schemaReference = schema.get(APIMgtGatewayConstants.
                                                    SCHEMA_REFERENCE).toString();
                                            int index = schemaReference != null ? schemaReference.lastIndexOf
                                                    (APIMgtGatewayConstants.LAST_INDEX) : 0;
                                            return schemaReference != null ? schemaReference.
                                                    substring(index + 1) : null;

                                        }
                                    }
                                }

                            }

                        }
                    }
                }

            }

        }
        return resourcePath;
    }

    private String extractResponse(MessageContext messageContext) {

        String nonSchema = "NonSchema";
        Iterator swaggerPaths;
        JSONObject response;
        String resourceKey;
        String schema;
        String schemaReference;
        String electedResource = messageContext.getProperty(APIMgtGatewayConstants.API_ELECTED_RESOURCE).toString();
        String reqMethod = messageContext.getProperty(APIMgtGatewayConstants.ELECTED_REQUEST_METHOD).toString();

        if (paths != null) {
            swaggerPaths = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.SWAGGER_PATH).keys();

            if (swaggerPaths != null) {
                while (swaggerPaths.hasNext()) {
                    resourceKey = (String) swaggerPaths.next();
                    if (resourceKey.equals(electedResource)) {
                        JSONObject resource = paths.getJSONObject(resourceKey);
                        if (resource != null) {
                            response = resource.getJSONObject(
                                    reqMethod.toLowerCase()).getJSONObject(APIMgtGatewayConstants.RESPONSES);
                            if (response != null) {
                                JSONObject schemaValue = null;
                                EnumMap<APIMgtGatewayConstants.HttpStatusCode, String> httpStatuses = generateHTTPStatuses();
                                for (int z = 0; z < response.names().length(); z++) {
                                   Object responseName = response.names().get(z);
                                    if (httpStatuses.containsValue(responseName)) {
                                        if (response.getJSONObject(responseName.toString()).
                                                has(APIMgtGatewayConstants.SCHEMA)) {
                                            schemaReference = response.getJSONObject(responseName.toString()).
                                                    get(APIMgtGatewayConstants.SCHEMA).toString();
                                            JSONObject refSchema = new JSONObject(schemaReference);
                                            Object responseSchema = refSchema.get(APIMgtGatewayConstants.SCHEMA_REFERENCE);
                                            if (responseSchema!= null) {
                                                schema = refSchema.toString();
                                                int referenceSchemaObject = schema.lastIndexOf(APIMgtGatewayConstants.LAST_INDEX);
                                                String schemaObject = schema.substring(referenceSchemaObject + 1);
                                                return schemaObject;
                                            }
                                        } else if (response.getJSONObject(responseName.toString()).
                                                has(APIMgtGatewayConstants.CONTENT)) {
                                            JSONObject content = response.getJSONObject((String) responseName).
                                                    getJSONObject(APIMgtGatewayConstants.CONTENT);
                                            if (content != null) {
                                                if (content.has(APIMgtGatewayConstants.JSON_CONTENT_TYPE)) {
                                                    JSONObject jsonObject = content.getJSONObject(
                                                            APIMgtGatewayConstants.JSON_CONTENT_TYPE);
                                                    if (jsonObject != null) {
                                                        schemaValue = jsonObject.getJSONObject(APIMgtGatewayConstants.SCHEMA);
                                                    }
                                                    if (schemaValue != null) {
                                                        JSONObject scObject = jsonObject.getJSONObject(APIMgtGatewayConstants.SCHEMA);
                                                        if (scObject != null) {
                                                            schema = jsonObject.getJSONObject(APIMgtGatewayConstants.SCHEMA).
                                                                    get(APIMgtGatewayConstants.SCHEMA_REFERENCE).toString();
                                                            int referenceSchemaObject = schema.lastIndexOf(APIMgtGatewayConstants.LAST_INDEX);
                                                            String schemaObject = schema.substring(referenceSchemaObject + 1);
                                                            return schemaObject;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
        return nonSchema;
    }

    private void generateArraySchemas(Map.Entry<String, JsonNode> entry) throws APIManagementException {
        JsonNode entryRef;
        entry.getValue();
        JsonNode schemaProperty;
        if (entry.getValue() != null) {
            schemaProperty = entry.getValue();


            Iterator<JsonNode> arrayElements = schemaProperty.elements();
            while (arrayElements.hasNext()) {
                entryRef = arrayElements.next();
                if (entryRef.has(APIMgtGatewayConstants.SCHEMA_REFERENCE)) {
                    entryRef = extractSchemaObject(entryRef);
                    ObjectMapper mapper = new ObjectMapper();
                    String str[] = schemaProperty.toString().split(",");
                    if (str != null) {
                        List<String> schemaItems = Arrays.asList(str);
                        ArrayList<String> convertedSchemaItems = new ArrayList(schemaItems);
                        for (int x = 0; x < convertedSchemaItems.size(); x++) {
                            String refItem = convertedSchemaItems.get(x);
                            if (refItem.contains(APIMgtGatewayConstants.SCHEMA_REFERENCE)) {
                                convertedSchemaItems.remove(refItem);
                                convertedSchemaItems.add(entryRef.toString());
                            }
                        }
                        try {
                            JsonNode actualObj = mapper.readTree(convertedSchemaItems.toString());
                            entry.setValue(actualObj);
                        } catch (IOException e) {
                            throw new APIManagementException(e);
                        }
                    }
                }

            }
        }
    }
}

