package org.wso2.carbon.apimgt.gateway.handlers.security.validator;

import org.apache.synapse.Mediator;
import org.apache.synapse.MessageContext;
import org.apache.synapse.rest.AbstractHandler;
import org.wso2.carbon.apimgt.gateway.APIMgtGatewayConstants;

/**
 * Schema validator to validate Json request/response.
 */
public class SchemaValidator extends AbstractHandler {

    private String localentry;

    public String getLocalentry() {
        return localentry;
    }

    public void setLocalentry(String localentry) {
        this.localentry = localentry;
    }

    public boolean mediate(MessageContext messageContext) {

        String apiId = getLocalentry();
        messageContext.setProperty("LocalEntryId", apiId);

        Mediator sequence = messageContext.getSequence(APIMgtGatewayConstants.SCHEMA_HANDLER);
        ///messageContext.getProperty(messag)
        // Invoke the custom error handler specified by the user
        if (sequence != null ) {
            sequence.mediate(messageContext);
        }

        return true;
    }
    @Override
    public boolean handleRequest(MessageContext messageContext) {
       return mediate(messageContext);
    }

    @Override
    public boolean handleResponse(MessageContext messageContext) {
        return mediate(messageContext);
    }

}
