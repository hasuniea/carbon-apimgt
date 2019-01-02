package org.wso2.carbon.apimgt.gateway.mediators;


import org.apache.axiom.om.OMAbstractFactory;
import org.apache.axiom.om.OMElement;
import org.apache.axiom.om.util.AXIOMUtil;
import org.apache.axiom.soap.SOAPEnvelope;
import org.apache.axiom.soap.SOAPFactory;
import org.apache.commons.io.FileUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.synapse.MessageContext;
import org.apache.synapse.config.SynapseConfiguration;
import org.apache.synapse.core.axis2.Axis2MessageContext;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import org.wso2.carbon.apimgt.gateway.APIMgtGatewayConstants;
import org.wso2.carbon.apimgt.gateway.threatprotection.utils.ThreatProtectorConstants;
import org.apache.synapse.config.Entry;
import org.wso2.carbon.apimgt.gateway.utils.SchemaCacheUtils;
import org.wso2.carbon.apimgt.impl.APIConstants;
import javax.cache.Cache;
import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.xml.stream.XMLStreamException;
import java.io.File;
import java.util.Map;

/**
 * This is the test case for {@link SwaggerSchemaValidator}
 */
@RunWith(PowerMockRunner.class)
@PrepareForTest({Caching.class})
public class SwaggerSchemaValidatorTest {

    private static final Log log = LogFactory.getLog(SwaggerSchemaValidatorTest.class);
    private MessageContext messageContext;
    private org.apache.axis2.context.MessageContext axis2MsgContext;
    private SwaggerSchemaValidator swaggerSchemaValidator;
    private CacheManager cacheManager;
    private Cache cache;

    @Before
    public void init() {
        messageContext = Mockito.mock(Axis2MessageContext.class);
        axis2MsgContext = Mockito.mock(org.apache.axis2.context.MessageContext
                .class);
    }

    /**
     * This is the test case to check the return value of the isContentAware method.
     */
    @Test
    public void testIsContentAware() {
        log.info("Running the test case to check the return status of the isContentAware method.");

        SOAPFactory fac = OMAbstractFactory.getSOAP12Factory();
        SOAPEnvelope env = fac.createSOAPEnvelope();
        fac.createSOAPBody(env);
        env.getBody().addChild(fac.createOMElement("test", "Content aware", "MessageBody"));
        Mockito.when(((Axis2MessageContext) messageContext).getAxis2MessageContext()).thenReturn(axis2MsgContext);
        Mockito.doReturn(env).when(axis2MsgContext).getEnvelope();
        log.info("Successfully completed testIsContentAware test case.");
    }

    @Test
    public void testValidRequest() throws Exception{
        SOAPFactory fac = OMAbstractFactory.getSOAP12Factory();
        SOAPEnvelope env = fac.createSOAPEnvelope();
        fac.createSOAPBody(env);
        OMElement messageStore = AXIOMUtil.stringToOM("<jsonObject><id>0</id><category><id>0</id><name>string</name></category><name>doggie</name><photoUrls>string</photoUrls><tags><id>0</id><name>string</name></tags><status>available</status></jsonObject>" );
        env.getBody().addChild(messageStore);
        log.info(" Running the test case to validate the request content against the defined schemas.");
        String contentType = "application/json";
        String ApiId = "admin-SwaggerPetstore-1.0.0";
        File swaggerJsonFile = new File(Thread.currentThread().getContextClassLoader().
                getResource("swaggerEntry/swagger.json").getFile());
        String swaggerValue = FileUtils.readFileToString(swaggerJsonFile);

        cacheManager = Mockito.mock(CacheManager.class);
        PowerMockito.mockStatic(Caching.class);
        PowerMockito.when(Caching.getCacheManager(APIConstants.API_MANAGER_CACHE_MANAGER)).thenReturn(cacheManager);
        cache = Mockito.mock(Cache.class);
        Mockito.when(cacheManager.getCache(ThreatProtectorConstants.API_SWAGGER_SCHEMA)).thenReturn(cache);

        Mockito.doReturn(env).when(messageContext).getEnvelope();
       // Mockito.when()

        Mockito.when(((Axis2MessageContext) messageContext).getAxis2MessageContext()).thenReturn(axis2MsgContext);
        Mockito.when((String) axis2MsgContext.getProperty(ThreatProtectorConstants.REST_CONTENT_TYPE))
                .thenReturn(contentType);
        Mockito.when((String) axis2MsgContext.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD)).
                thenReturn("POST");
        Mockito.when(messageContext.getProperty(ThreatProtectorConstants.LOCALENTRY_ID)).thenReturn(ApiId);
        // Mock Entry
        Entry entry = Mockito.mock(Entry.class);
        SynapseConfiguration synapseConfiguration = Mockito.mock(SynapseConfiguration.class);
        Map map = Mockito.mock(Map.class);

        Mockito.when(messageContext.getConfiguration()).thenReturn(synapseConfiguration);
        Mockito.when((String)messageContext.getProperty((APIMgtGatewayConstants.API_ELECTED_RESOURCE))).
                thenReturn("/pet");
        Mockito.when(synapseConfiguration.getLocalRegistry()).thenReturn(map);
        Mockito.when(map.get(ApiId)).thenReturn(entry);
        Mockito.when((String)entry.getValue()).thenReturn(swaggerValue);
        Mockito.when((String)messageContext.getProperty(APIMgtGatewayConstants.ELECTED_REQUEST_METHOD)).
                thenReturn("POST");
        Mockito.when((String) axis2MsgContext.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD)).
                thenReturn("POST");

        swaggerSchemaValidator = new SwaggerSchemaValidator();
        swaggerSchemaValidator.mediate(messageContext);

    }

    @Test
    public void testBadRequest() throws Exception {
        SOAPFactory fac = OMAbstractFactory.getSOAP12Factory();
        SOAPEnvelope env = fac.createSOAPEnvelope();
        fac.createSOAPBody(env);
        OMElement messageStore = AXIOMUtil.stringToOM("<jsonObject><id>0</id><category><id>dededededededed</id><name>string</name></category><name>doggie</name><photoUrls>string</photoUrls><tags><id>0</id><name>string</name></tags><status>available</status></jsonObject>" );
        env.getBody().addChild(messageStore);
        log.info(" Running the test case to validate the request content against the defined schemas.");
        String contentType = "application/json";
        String ApiId = "admin-SwaggerPetstore-1.0.0";
        File swaggerJsonFile = new File(Thread.currentThread().getContextClassLoader().
                getResource("swaggerEntry/swagger.json").getFile());
        String swaggerValue = FileUtils.readFileToString(swaggerJsonFile);

        cacheManager = Mockito.mock(CacheManager.class);
        PowerMockito.mockStatic(Caching.class);
        PowerMockito.when(Caching.getCacheManager(APIConstants.API_MANAGER_CACHE_MANAGER)).thenReturn(cacheManager);
        cache = Mockito.mock(Cache.class);
        Mockito.when(cacheManager.getCache(ThreatProtectorConstants.API_SWAGGER_SCHEMA)).thenReturn(cache);

        Mockito.doReturn(env).when(messageContext).getEnvelope();
        // Mockito.when()

        Mockito.when(((Axis2MessageContext) messageContext).getAxis2MessageContext()).thenReturn(axis2MsgContext);
        Mockito.when((String) axis2MsgContext.getProperty(ThreatProtectorConstants.REST_CONTENT_TYPE))
                .thenReturn(contentType);
        Mockito.when((String) axis2MsgContext.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD)).
                thenReturn("POST");
        Mockito.when(messageContext.getProperty(ThreatProtectorConstants.LOCALENTRY_ID)).thenReturn(ApiId);
        // Mock Entry
        Entry entry = Mockito.mock(Entry.class);
        SynapseConfiguration synapseConfiguration = Mockito.mock(SynapseConfiguration.class);
        Map map = Mockito.mock(Map.class);

        Mockito.when(messageContext.getConfiguration()).thenReturn(synapseConfiguration);
        Mockito.when((String)messageContext.getProperty((APIMgtGatewayConstants.API_ELECTED_RESOURCE))).
                thenReturn("/pet");
        Mockito.when(synapseConfiguration.getLocalRegistry()).thenReturn(map);
        Mockito.when(map.get(ApiId)).thenReturn(entry);
        Mockito.when((String)entry.getValue()).thenReturn(swaggerValue);
        Mockito.when((String)messageContext.getProperty(APIMgtGatewayConstants.ELECTED_REQUEST_METHOD)).
                thenReturn("POST");
        Mockito.when((String) axis2MsgContext.getProperty(ThreatProtectorConstants.HTTP_REQUEST_METHOD)).
                thenReturn("POST");

        swaggerSchemaValidator = new SwaggerSchemaValidator();
        swaggerSchemaValidator.mediate(messageContext);


    }

//    @Test
//    public void testGetCacheSchema() {
//        cacheManager = Mockito.mock(CacheManager.class);
//        PowerMockito.mockStatic(Caching.class);
//        PowerMockito.when(Caching.getCacheManager(APIConstants.API_MANAGER_CACHE_MANAGER)).thenReturn(cacheManager);
//        cache = Mockito.mock(Cache.class);
//        Mockito.when(cacheManager.getCache(ThreatProtectorConstants.API_SWAGGER_SCHEMA)).thenReturn(cache);
//       // SchemaCacheUtils.getCacheSchema("")
//
//    }
}
