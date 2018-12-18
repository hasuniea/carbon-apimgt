/*
 *   Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *   WSO2 Inc. licenses this file to you under the Apache License,
 *   Version 2.0 (the "License"); you may not use this file except
 *   in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

package org.wso2.carbon.apimgt.gateway.handlers.security.validator;

import org.apache.synapse.Mediator;
import org.apache.synapse.MessageContext;
import org.apache.synapse.rest.AbstractHandler;
import org.wso2.carbon.apimgt.gateway.threatprotection.utils.ThreatProtectorConstants;

/**
 * This handler is to validate Json request/response message content against specified schemas.
 */
public class SchemaValidator extends AbstractHandler {

    private String localentry;

    /**
     *
     * @return
     */
    public String getLocalentry() {
        return localentry;
    }

    /**
     *
     * @param localentry
     */
    public void setLocalentry(String localentry) {
        this.localentry = localentry;
    }

    /**
     *
     * @param messageContext
     * @return
     */
    public boolean mediate(MessageContext messageContext) {
        String apiId = getLocalentry();
        messageContext.setProperty(ThreatProtectorConstants.LOCALENTRY_ID, apiId);

        Mediator sequence = messageContext.getSequence(ThreatProtectorConstants.SCHEMA_HANDLER);
        if ( sequence != null ) {
            sequence.mediate(messageContext);
        }
        return true;
    }

    @Override
    /**
     *
     */
    public boolean handleRequest(MessageContext messageContext) {
        return mediate(messageContext);
    }

    @Override
    /**
     *
     */
    public boolean handleResponse(MessageContext messageContext) {
        return mediate(messageContext);
    }

}
