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

import org.apache.axiom.om.OMElement;
import org.apache.axis2.AxisFault;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.synapse.MessageContext;
import org.apache.synapse.commons.json.JsonUtil;
import org.apache.synapse.core.axis2.Axis2MessageContext;
import org.apache.synapse.mediators.AbstractMediator;
import org.everit.json.schema.Schema;
import org.everit.json.schema.ValidationException;
import org.everit.json.schema.loader.SchemaLoader;
import org.json.JSONArray;
import org.json.JSONObject;
import org.wso2.carbon.apimgt.gateway.APIMgtGatewayConstants;
import org.wso2.carbon.apimgt.gateway.threatprotection.utils.ThreatProtectorConstants;
import org.wso2.carbon.apimgt.gateway.utils.GatewayUtils;
import org.wso2.carbon.apimgt.impl.APIConstants;

import java.util.Iterator;


/**
 * This mediator validate the JSON request and response messages against json schema which is defined in the swagger
 * file.
 */
public class SwaggerSchemaValidator extends AbstractMediator {

    private String swagger = null;
    private JSONObject paths;
    private JSONObject definition = null;
    private JSONObject jsonSchemaSetter;

    private static final Log logger = LogFactory.getLog(SwaggerSchemaValidator.class);

    @Override
    public boolean mediate(MessageContext messageContext) {

        if (logger.isDebugEnabled()) {
            logger.debug("Swagger SchemaValidator mediator is activated...");
        }
        Object localEntry = messageContext.getProperty(APIMgtGatewayConstants.LOCAL_ENTRY);

        if (localEntry != null) {
            swagger = localEntry.toString();
        }
        jsonSchemaSetter = new JSONObject(swagger);
        paths = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.SWAGGER_PATH);
        definition = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.DEFINITIONS);
        if (messageContext.isResponse()) {
            validateResponse(messageContext);
        } else {
            validateRequest(messageContext);
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
            logger.debug("Validating API Response message:add api name");
        }
        String electedResource = messageContext.getProperty(APIMgtGatewayConstants.API_ELECTED_RESOURCE).toString();
        String reqMethod = messageContext.getProperty(APIMgtGatewayConstants.ELECTED_REQUEST_METHOD).toString();

        JSONObject responsePayload = getMessageContent(messageContext);

        Iterator swaggerPaths = null;
        JSONObject response = null;
        if (paths != null) {
            swaggerPaths = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.SWAGGER_PATH).keys();
        }
        String resourceKey;
        String schema = null;
        String schemaReference = null;

        if (swaggerPaths != null) {
            while (swaggerPaths.hasNext()) {
                resourceKey = (String) swaggerPaths.next();
                if (resourceKey.matches(electedResource)) {
                    JSONObject resource = paths.getJSONObject(resourceKey);
                    if (resource != null) {
                        response = resource.getJSONObject(
                                reqMethod.toLowerCase()).getJSONObject(APIMgtGatewayConstants.RESPONSE);
                    }
                    if (response != null) {
                        schemaReference = response.getJSONObject(
                                APIMgtGatewayConstants.SUCCESS_RESPONSE).get(APIMgtGatewayConstants.SCHEMA).
                                toString();
                    }
                    JSONObject rev = new JSONObject(schemaReference);
                    schema = rev.get(APIMgtGatewayConstants.SCHEMA_REFERENCE).toString();
                }
            }
        }

        int referenceSchemaObject = schema != null ? schema.lastIndexOf(APIMgtGatewayConstants.LAST_INDEX) : 0;
        String schemaObject = schema != null ? schema.substring(referenceSchemaObject + 1) : null;

        JSONObject defString = null;
        String allOfStr = null;
        String schemaObj = null;
        JSONArray schemaDefinitions = null;

        definition = jsonSchemaSetter.getJSONObject(APIMgtGatewayConstants.DEFINITIONS);
        if (definition != null) {
            schemaDefinitions = definition.names();
        }
        if (schemaDefinitions != null) {
            for (int i = 0; i < schemaDefinitions.length(); i++) {
                String definitionObject = schemaDefinitions.get(i).toString();

                if (schemaObject != null && schemaObject.matches(definitionObject)) {
                    JSONArray definitionArray = definition.getJSONObject(definitionObject).names();

                    for (int x = 0; x <= definitionArray.length(); x++) {

                        String subDefinitions = definitionArray.get(x).toString();
                        // here only support allOf
                        if (subDefinitions.matches(APIMgtGatewayConstants.KEY_WORD_ALLOF)) {
                            JSONArray allOfKeys = definition.getJSONObject(definitionObject).getJSONArray
                                    (APIMgtGatewayConstants.KEY_WORD_ALLOF);

                            for (int y = 0; y <= allOfKeys.length(); y++) {

                                String allOfSchema = allOfKeys.get(x).toString();

                                if (allOfSchema.contains(APIMgtGatewayConstants.SCHEMA_REFERENCE)) {
                                    JSONObject allOfObject = new JSONObject(allOfSchema);
                                    allOfStr = allOfObject.get(APIMgtGatewayConstants.SCHEMA_REFERENCE).toString();
                                }
                            }
                            int index = 0;
                            if (allOfStr != null) {
                                index = allOfStr.lastIndexOf(APIMgtGatewayConstants.LAST_INDEX);
                            }
                            if (allOfStr != null) {
                                schemaObj = allOfStr.substring(index + 1);
                            }

                            for (int k = 0; k < schemaDefinitions.length(); k++) {
                                String schemaDef = schemaDefinitions.get(k).toString();
                                if (schemaObj != null && schemaObj.matches(schemaDef)) {
                                    defString = definition.getJSONObject(schemaObj);
                                }
                            }
                            String SchemaString = defString != null ? defString.toString() : null;
                            validateContent(responsePayload, SchemaString, messageContext);


                        } else {
                            for (int m = 0; m < definitionArray.length(); m++) {
                                String obj = definitionArray.get(m).toString();
                                if (schemaObject.matches(obj)) {
                                    defString = definition.getJSONObject(obj);
                                }
                            }
                            JSONObject payloadObject = getMessageContent(messageContext);
                            String schemaString = defString != null ? defString.toString() : null;
                            validateContent(payloadObject, schemaString, messageContext);
                        }
                    }
                }
            }
        }

    }

    /**
     * Validate the Request/response content.
     *
     * @param payloadObject  Request/response payload
     * @param schemaString   Schema which is uesed to validate request/response messages
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

        org.apache.axis2.context.MessageContext axis2MC = ((Axis2MessageContext)
                messageContext).getAxis2MessageContext();

        String path = axis2MC.getProperty(APIMgtGatewayConstants.REST_URL).toString();
        String requestMethod = axis2MC.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD).toString();
        String schemaReference = null;

        String pathKey;
        JSONArray parameters = null;
        Iterator resourcePaths = paths.keys();
        while (resourcePaths.hasNext()) {
            pathKey = (String) resourcePaths.next();
            if (pathKey.matches(path)) {
                JSONObject parameterObject = paths.getJSONObject(pathKey).getJSONObject(requestMethod.toLowerCase());
                if (parameterObject != null) {
                    parameters = parameterObject.getJSONArray(APIMgtGatewayConstants.PARAMETERS);
                }
                if (parameters != null) {
                    for (int i = 0; i < parameters.length(); i++) {
                        JSONObject jsonobject = parameters.getJSONObject(i);
                        schemaReference = jsonobject.getJSONObject(APIMgtGatewayConstants.SCHEMA
                        ).get(APIMgtGatewayConstants.SCHEMA_REFERENCE).toString();
                    }
                }
            }

        }
        int index = schemaReference != null ? schemaReference.lastIndexOf(APIMgtGatewayConstants.LAST_INDEX) : 0;
        String schemaObject = schemaReference != null ? schemaReference.substring(index + 1) : null;
        JSONObject defString = null;
        JSONArray jsonSchemal = definition.names();
        for (int i = 0; i < jsonSchemal.length(); i++) {
            String obj = jsonSchemal.get(i).toString();
            if (obj.matches(schemaObject)) {
                defString = definition.getJSONObject(obj);
            }
        }
        JSONObject payloadObject = getMessageContent(messageContext);
        String refSchema = defString != null ? defString.toString() : null;
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
        String requestMethod = axis2MC.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD).toString();

        JSONObject payloadObject = null;
        if (!APIConstants.SupportedHTTPVerbs.GET.name().equalsIgnoreCase(requestMethod) && messageContext.getEnvelope().
                getBody().getFirstElement() != null) {
            OMElement xmlResponse = messageContext.getEnvelope().getBody().getFirstElement();
            try {
                payloadObject = new JSONObject(JsonUtil.toJsonString(xmlResponse).toString());
            } catch (AxisFault axisFault) {
                logger.error(" Error occurred while converting the String payload to Json");
            }
        }
        return payloadObject;
    }
}
