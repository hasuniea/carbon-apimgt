package org.wso2.carbon.apimgt.gateway.handlers.security.validator;

import org.apache.synapse.Mediator;
import org.apache.synapse.MessageContext;
import org.apache.synapse.rest.AbstractHandler;
import org.apache.synapse.rest.RESTConstants;
import org.wso2.carbon.apimgt.gateway.APIMgtGatewayConstants;

import java.util.Map;

/**
 * Created by hasunie on 6/20/18.
 */
public class SchemaValidator extends AbstractHandler {

    public boolean mediate(MessageContext messageContext, String direction) {

        Mediator sequence = messageContext.getSequence(APIMgtGatewayConstants.SCHEMA_HANDLER);
        // Invoke the custom error handler specified by the user
        if (sequence != null ) {
            sequence.mediate(messageContext);
        }

        return true;
    }
    @Override
    public boolean handleRequest(MessageContext messageContext) {
        return false;
    }

    @Override
    public boolean handleResponse(MessageContext messageContext) {
        return false;
    }
}
