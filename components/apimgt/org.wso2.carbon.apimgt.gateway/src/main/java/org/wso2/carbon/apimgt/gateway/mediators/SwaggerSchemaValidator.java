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
import com.jayway.jsonpath.JsonPath;
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
import java.util.*;

/**
 * This mediator validate the JSON request and response messages against JSON schema which is defined in the swagger
 * file.
 */
public class SwaggerSchemaValidator extends AbstractMediator {

    private String swagger = null;

    private JSONObject definition = null;
    private JSONObject jsonSchemaSetter;
    private String apiId;
    private JsonNode rootNode;

    private static final Log logger = LogFactory.getLog(SwaggerSchemaValidator.class);

    @Override
    public boolean mediate(MessageContext messageContext) {
        org.apache.axis2.context.MessageContext axis2MC = ((Axis2MessageContext)
                messageContext).getAxis2MessageContext();

        String contentType = (String) axis2MC.getProperty(ThreatProtectorConstants.REST_CONTENT_TYPE);

        if ( contentType != null && ThreatProtectorConstants.APPLICATION_JSON.equals(contentType) ) {
            initialize(messageContext);
            if ( swagger != null ) {
                String requestMethod;
                if ( messageContext.isResponse() ) {
                    requestMethod = messageContext.getProperty(
                            APIMgtGatewayConstants.ELECTED_REQUEST_METHOD).toString();
                    if ( !APIConstants.SupportedHTTPVerbs.GET.name().equals(requestMethod) ) {
                        validateResponse(messageContext);
                    }
                } else {
                    requestMethod = messageContext.getProperty(
                            APIMgtGatewayConstants.ELECTED_REQUEST_METHOD).toString();
                    if ( !APIConstants.SupportedHTTPVerbs.GET.name().equals(requestMethod) ) {
                        validateRequest(messageContext);
                    }
                }
            }
        }
        return true;
    }


    /**
     * @param messageContext
     */
    private void initialize(MessageContext messageContext) {
        Entry localEntryObj;
        ObjectMapper objectMapper = new ObjectMapper();
        apiId = messageContext.getProperty(ThreatProtectorConstants.LOCALENTRY_ID).toString();
        if ( apiId != null ) {
            localEntryObj = (Entry) messageContext.getConfiguration().getLocalRegistry().get(apiId);
            if ( (!messageContext.isResponse()) && (localEntryObj != null) ) {
                swagger = localEntryObj.getValue().toString();
                try {
                    rootNode = objectMapper.readTree(swagger.getBytes());
                } catch (IOException e) {
                    logger.error("Error Occurred while converting the Swagger into JsonNode", e);
                }
                    jsonSchemaSetter = new JSONObject(swagger);
                    if ( jsonSchemaSetter.has(ThreatProtectorConstants.DEFINITIONS) ) {
                        definition = jsonSchemaSetter.getJSONObject(ThreatProtectorConstants.DEFINITIONS);
                    }
                    Map<String, String> map;
                    map = getSchemaKey(messageContext);
                    String cacheKey = null;
                    for (Map.Entry<String, String> entry : map.entrySet()) {
                        if ( entry.getKey().equals(ThreatProtectorConstants.KEY) ) {
                            String keyValue = entry.getValue();
                            cacheKey = generateCacheKey(keyValue, messageContext);

                        }
                    }
                    if ( (cacheKey != null) && (SchemaCacheUtils.getCacheSchema(cacheKey) == null) ) {
                        try {
                            cacheSchemas();
                        } catch (APIManagementException e) {
                            logger.error("");
                        }
                    }
                }
            }

    }

    @Override
    /**
     *
     */
    public boolean isContentAware() {
        return true;
    }

    /**
     * Validate the Response Message which comes from the BE.
     *
     * @param messageContext Message context
     */
    private void validateResponse(MessageContext messageContext) {

        if ( logger.isDebugEnabled() ) {
            logger.debug("Validating API Response message of API: " + apiId);
        }
        JSONObject payloadObject = getMessageContent(messageContext);
        Map<String, String> map;
        map = getSchemaKey(messageContext);
        String key = null;
        for (Map.Entry<String, String> entry : map.entrySet()) {
            if ( entry.getKey().equals(ThreatProtectorConstants.KEY) ) {
                String keyValue = entry.getValue();
                key = generateCacheKey(keyValue, messageContext);

            }
        }
        if ( key != null ) {
            String responseSchema = SchemaCacheUtils.getCacheSchema(key);
            if ( responseSchema != null ) {
                validateContent(payloadObject, responseSchema, messageContext);
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
            if ( messageContext.isResponse() ) {
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
        Map<String, String> map;
        map = getSchemaKey(messageContext);
        String schema = null;
        String key;
        for (Map.Entry<String, String> entry : map.entrySet()) {
            if ( entry.getKey().equals(ThreatProtectorConstants.KEY) ) {
                String keyValue = entry.getValue();
                key = generateCacheKey(keyValue, messageContext);
                schema = SchemaCacheUtils.getCacheSchema(key);

            } else {
                schema = entry.getValue();
            }
        }

        if ( logger.isDebugEnabled() ) {
            logger.debug("Validating API Request message of API: " + apiId);
        }

        JSONObject payloadObject = getMessageContent(messageContext);
        String refSchema = schema != null ? schema : null;
        if ( refSchema != null )
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
        if ( messageContext.isResponse() ) {
            requestMethod = messageContext.getProperty(ThreatProtectorConstants.HTTP_RESPONSE_METHOD).toString();
        } else {
            requestMethod = axis2MC.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD).toString();

        }
        JSONObject payloadObject = null;
        if ( !APIConstants.SupportedHTTPVerbs.GET.name().equalsIgnoreCase(requestMethod) && messageContext.getEnvelope().
                getBody() != null ) {
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
        if ( jsonSchemaSetter.has(ThreatProtectorConstants.DEFINITIONS) ) {
            JSONArray definitionNames = definition.names();
            if ( definitionNames != null ) {
                JsonNode definitionNode = rootNode.at("/definitions");
                pushToCache(definitionNames, definitionNode);
            }
        }
    }

    private void pushToCache(JSONArray jsonSchemaSetter, JsonNode schemas) throws APIManagementException {
        JsonNode schemaValue;
        for (int y = 0; y < jsonSchemaSetter.length(); y++) {
            String schemaName = jsonSchemaSetter.get(y).toString();
            schemaValue = schemas.at(ThreatProtectorConstants.LAST_INDEX + schemaName);
            generateSchema(schemaValue);
            if ( SchemaCacheUtils.getCacheSchema(schemaName) == null ) {
                SchemaCacheUtils.putCache(schemaName + "-" + apiId, schemaValue.toString());
            }
        }
    }

    private void generateSchema(JsonNode parent) throws APIManagementException {
        JsonNode schemaProperty;
        Iterator<Map.Entry<String, JsonNode>> schemaNode = parent.fields();
        while (schemaNode.hasNext()) {
            Map.Entry<String, JsonNode> entry = schemaNode.next();
            if ( entry.getValue().has(ThreatProtectorConstants.SCHEMA_REFERENCE) ) {
                JsonNode refNode = entry.getValue();
                Iterator<Map.Entry<String, JsonNode>> refItems = refNode.fields();
                while (refItems.hasNext()) {
                    Map.Entry<String, JsonNode> entryRef = refItems.next();
                    if ( entryRef.getKey().equals(ThreatProtectorConstants.SCHEMA_REFERENCE) ) {
                        JsonNode schemaObject = extractSchemaObject(entryRef.getValue());
                        entry.setValue(schemaObject);
                    }
                }
            }
            schemaProperty = entry.getValue();
            if ( JsonNodeType.OBJECT == schemaProperty.getNodeType() ) {
                generateSchema(schemaProperty);
            }
            if ( JsonNodeType.ARRAY == schemaProperty.getNodeType() ) {
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
     *
     * @param messageContext Request/Response message context
     * @return key to be store in the cache. Ex(Pet-admin-PetStore-1.0)
     */
    private Map getSchemaKey(MessageContext messageContext) {
        Map<String, String> map;
        Map<String, String> schemaMap = new HashMap<>();
        String schemaKey;
        String schema;
        if ( !messageContext.isResponse() ) {
            map = extractSchemaFromRequest(messageContext);
            for (Map.Entry<String, String> entry : map.entrySet()) {
                if ( entry.getKey().equals(ThreatProtectorConstants.KEY) ) {
                    schemaKey = entry.getValue();
                    schemaMap.put(ThreatProtectorConstants.KEY, schemaKey);
                    return schemaMap;
                } else {
                    schema = entry.getValue();
                    schemaMap.put(ThreatProtectorConstants.SCHEMA, schema);
                    return schemaMap;
                }
            }
        } else {
            schemaKey = extractResponse(messageContext);
            schemaMap.put(ThreatProtectorConstants.KEY, schemaKey);
            return schemaMap;
        }
        return schemaMap;
    }

    private String generateCacheKey(String schemaKey, MessageContext messageContext) {
        if ( schemaKey != null ) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(schemaKey);
            stringBuilder.append("-");
            stringBuilder.append(messageContext.getProperty(
                    ThreatProtectorConstants.LOCALENTRY_ID).toString());
            return  stringBuilder.toString();
        } else {
            return null;
        }
    }

    private Map<String, String> extractSchemaFromRequest(MessageContext messageContext) {

        org.apache.axis2.context.MessageContext axis2MC = ((Axis2MessageContext)
                messageContext).getAxis2MessageContext();

        String resourcePath = messageContext.getProperty(APIMgtGatewayConstants.API_ELECTED_RESOURCE).toString();
        String requestMethod = axis2MC.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD).toString();
        Map<String, String> refferences = new HashMap<>();

        String Swagger = swagger;

        String schema = JsonPath.read(Swagger, ThreatProtectorConstants.JSONPATH_PATHS + resourcePath +
                ThreatProtectorConstants.JSONPATH_SEPRATER + requestMethod.toLowerCase() + ".parameters..schema").toString();
        if ( schema.contains(ThreatProtectorConstants.SCHEMA_REFERENCE) ) {
            byte[] bytes = schema.getBytes();
            ObjectMapper mapper = new ObjectMapper();
            try {
                JsonNode node = mapper.readTree(bytes);
                Iterator<JsonNode> schemaNode = node.findParent(ThreatProtectorConstants.SCHEMA_REFERENCE).elements();
                while (schemaNode.hasNext()) {
                    String nodeVal = schemaNode.next().toString();
                    String[] val = nodeVal.split("#");
                    String pathx = val[1].replaceAll("^\"|\"$", "");
                    int c = pathx.lastIndexOf('/');
                    refferences.put(ThreatProtectorConstants.KEY, pathx.substring(c + 1));
                    return refferences;
                }

            } catch (IOException e) {
               log.error("", e);
            }
        } else {
            // remove open and ending square brackets
            refferences.put("schema", schema.substring(1, schema.length()-1));
            return refferences;

        }
        return refferences;
    }

    private String extractResponse(MessageContext messageContext) {

        String nonSchema = "NonSchema";
        String electedResource = messageContext.getProperty(APIMgtGatewayConstants.API_ELECTED_RESOURCE).toString();
        String reqMethod = messageContext.getProperty(APIMgtGatewayConstants.ELECTED_REQUEST_METHOD).toString();
        org.apache.axis2.context.MessageContext axis2MC = ((Axis2MessageContext)
                messageContext).getAxis2MessageContext();
        String responseStatus = axis2MC.getProperty(APIMgtGatewayConstants.HTTP_SC).toString();
        String Swagger = swagger;
        String resSchema;
        String defaultSchema;

        resSchema = JsonPath.read(Swagger, ThreatProtectorConstants.JSONPATH_PATHS +
                electedResource + ThreatProtectorConstants.JSONPATH_SEPRATER + reqMethod.toLowerCase() +
                ThreatProtectorConstants.JSONPATH_RESPONSES + responseStatus).toString();
        if ( resSchema != null ) {
            defaultSchema = JsonPath.read(Swagger, ThreatProtectorConstants.JSONPATH_PATHS + electedResource +
                    ThreatProtectorConstants.JSONPATH_SEPRATER + reqMethod.toLowerCase() + ThreatProtectorConstants.JSONPATH_RESPONSES +
                    responseStatus + ".schema").toString();
            if ( defaultSchema != null ) {
                if ( defaultSchema.contains(ThreatProtectorConstants.SCHEMA_REFERENCE) ) {
                    byte[] bytes = defaultSchema.getBytes();
                    ObjectMapper mapper = new ObjectMapper();
                    try {
                        JsonNode node = mapper.readTree(bytes);
                        Iterator<JsonNode> schemaNode = node.findParent(
                                ThreatProtectorConstants.SCHEMA_REFERENCE).elements();
                        return extractRef(schemaNode);

                    } catch (IOException e) {
                        log.error("Error occured while ===", e);
                    }
                } else {
                    return defaultSchema;
                }

            } else {
                resSchema = JsonPath.read(Swagger, ThreatProtectorConstants.JSONPATH_PATHS + electedResource +
                        ThreatProtectorConstants.JSONPATH_SEPRATER + reqMethod.toLowerCase() + ".responses.default").toString();
                if ( resSchema != null ) {
                    if ( resSchema.contains(ThreatProtectorConstants.SCHEMA_REFERENCE) ) {
                        byte[] bytes = resSchema.getBytes();
                        ObjectMapper mapper = new ObjectMapper();
                        try {
                            JsonNode node = mapper.readTree(bytes);
                            Iterator<JsonNode> schemaNode = node.findParent(
                                    ThreatProtectorConstants.SCHEMA_REFERENCE).elements();
                            return extractRef(schemaNode);

                        } catch (IOException e) {
                            log.error("", e);
                        }
                    } else {
                        return resSchema;
                    }
                } else {
                    return defaultSchema;
                }
            }
        }
        return nonSchema;
    }

    private void generateArraySchemas(Map.Entry<String, JsonNode> entry) throws APIManagementException {
        JsonNode entryRef;
        entry.getValue();
        JsonNode schemaProperty;
        if ( entry.getValue() != null ) {
            schemaProperty = entry.getValue();
            Iterator<JsonNode> arrayElements = schemaProperty.elements();
            while (arrayElements.hasNext()) {
                entryRef = arrayElements.next();
                if ( entryRef.has(ThreatProtectorConstants.SCHEMA_REFERENCE) ) {
                    entryRef = extractSchemaObject(entryRef);
                    ObjectMapper mapper = new ObjectMapper();
                    String str[] = schemaProperty.toString().split(",");
                    if ( str != null ) {
                        List<String> schemaItems = Arrays.asList(str);
                        ArrayList<String> convertedSchemaItems = new ArrayList(schemaItems);
                        for (int x = 0; x < convertedSchemaItems.size(); x++) {
                            String refItem = convertedSchemaItems.get(x);
                            if ( refItem.contains(ThreatProtectorConstants.SCHEMA_REFERENCE) ) {
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

    private String extractRef(Iterator<JsonNode> schemaNode) {
        while (schemaNode.hasNext()) {
            String nodeVal = schemaNode.next().toString();
            String[] val = nodeVal.split("#");
            String pathx = val[1].replaceAll("^\"|\"$", "");
            int c = pathx.lastIndexOf('/');
            return pathx.substring(c + 1);
        }
        return null;
    }
}

