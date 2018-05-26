package org.wso2.carbon.apimgt.impl.utils;

import org.apache.axiom.om.OMElement;
import org.apache.axiom.om.util.AXIOMUtil;
import org.apache.axis2.AxisFault;
import org.apache.axis2.client.Options;
import org.apache.axis2.client.ServiceClient;
import org.apache.axis2.transport.http.HTTPConstants;
import org.apache.axis2.util.URL;
import org.wso2.carbon.apimgt.api.model.APIIdentifier;
import org.wso2.carbon.apimgt.impl.dto.Environment;
import org.wso2.carbon.apimgt.localentry.stub.APILocalEntryAdminStub;
import org.wso2.carbon.authenticator.stub.AuthenticationAdminStub;
import org.wso2.carbon.authenticator.stub.LoginAuthenticationExceptionException;
import org.apache.axis2.client.Stub;
import org.apache.axis2.context.ServiceContext;
import org.wso2.carbon.utils.CarbonUtils;


import javax.xml.stream.XMLStreamException;
import java.rmi.RemoteException;


public class LocalEntryAdminClient {

    private APILocalEntryAdminStub apiLocalEntryAdminStub;
    private Environment environment;

    public LocalEntryAdminClient(APIIdentifier apiIdentifier, Environment environment) throws AxisFault {
        apiLocalEntryAdminStub = new APILocalEntryAdminStub(null, environment.getServerURL()+ "APILocalEntryAdmin");
        setup(apiLocalEntryAdminStub, environment);
        this.environment = environment;

        CarbonUtils.setBasicAccessSecurityHeaders(environment.getUserName(), environment.getPassword(),
                apiLocalEntryAdminStub._getServiceClient());
    }

    protected final void setup(Stub stub, Environment environment) throws AxisFault {
        String cookie = gatewayLogin(environment);
        ServiceClient serviceClient = stub._getServiceClient();
        Options options = serviceClient.getOptions();
        options.setTimeOutInMilliSeconds(15 * 60 * 1000);
        options.setProperty(HTTPConstants.SO_TIMEOUT, 15 * 60 * 1000);
        options.setProperty(HTTPConstants.CONNECTION_TIMEOUT, 15 * 60 * 1000);
        options.setManageSession(true);
        options.setProperty(HTTPConstants.COOKIE_STRING, cookie);

    }

    private String gatewayLogin(Environment environment) throws AxisFault {
        String userName = environment.getUserName();
        String password = environment.getPassword();
        String serverURL = environment.getServerURL();

        if (serverURL == null || userName == null || password == null) {
            throw new AxisFault("Required API gateway admin configuration unspecified");
        }

        String host;

            host = new URL(serverURL).getHost();

        AuthenticationAdminStub authAdminStub = new AuthenticationAdminStub(null, serverURL + "AuthenticationAdmin");
        ServiceClient client = authAdminStub._getServiceClient();
        Options options = client.getOptions();
        options.setManageSession(true);
        try {
            authAdminStub.login(userName, password, host);
            ServiceContext serviceContext = authAdminStub.
                    _getServiceClient().getLastOperationContext().getServiceContext();
            return (String) serviceContext.getProperty(HTTPConstants.COOKIE_STRING);
        } catch (RemoteException e) {
            throw new AxisFault("Error while contacting the authentication admin services", e);
        } catch (LoginAuthenticationExceptionException e) {
            throw new AxisFault("Error while authenticating against the API gateway admin", e);
        }

    }

    public void addLocalEntry(String content) throws AxisFault {

        try {
            apiLocalEntryAdminStub.addLocalEntry(content);
        } catch (RemoteException e) {
            throw new AxisFault("Error occurred while generating the response ", e.getMessage(), e);
        }
    }

    public Boolean getEntry(String key) throws AxisFault {
        try {
            //OMElement omkey = AXIOMUtil.stringToOM(key);

            Object object = apiLocalEntryAdminStub.getEntry(key);
            if (object != null) {
                return true;
            } else {
                return false;
            }
        } catch (RemoteException e) {
            return false;
        }
    }

    public boolean deleteEntry(String key) throws AxisFault {
        try {
           return apiLocalEntryAdminStub.deleteLocalEntry(key);
        } catch (RemoteException e) {
            return false;
        }
    }
}
