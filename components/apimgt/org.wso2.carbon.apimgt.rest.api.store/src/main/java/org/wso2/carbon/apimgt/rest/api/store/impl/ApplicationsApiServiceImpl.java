package org.wso2.carbon.apimgt.rest.api.store.impl;

<<<<<<< HEAD
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.apimgt.core.api.APIStore;
import org.wso2.carbon.apimgt.core.api.WorkflowResponse;
import org.wso2.carbon.apimgt.core.exception.APIManagementException;
import org.wso2.carbon.apimgt.core.exception.APIMgtResourceNotFoundException;
import org.wso2.carbon.apimgt.core.exception.ErrorHandler;
import org.wso2.carbon.apimgt.core.exception.ExceptionCodes;
import org.wso2.carbon.apimgt.core.models.Application;
import org.wso2.carbon.apimgt.core.models.ApplicationToken;
import org.wso2.carbon.apimgt.core.models.OAuthApplicationInfo;
import org.wso2.carbon.apimgt.core.models.WorkflowStatus;
import org.wso2.carbon.apimgt.core.util.APIMgtConstants;
import org.wso2.carbon.apimgt.core.util.APIMgtConstants.ApplicationStatus;
import org.wso2.carbon.apimgt.core.util.ETagUtils;
import org.wso2.carbon.apimgt.core.workflow.ApplicationCreationResponse;
import org.wso2.carbon.apimgt.rest.api.common.RestApiConstants;
import org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.common.util.RestApiUtil;
=======
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.wso2.carbon.apimgt.api.APIConsumer;
import org.wso2.carbon.apimgt.api.APIManagementException;
import org.wso2.carbon.apimgt.api.model.APIKey;
import org.wso2.carbon.apimgt.api.model.Application;
import org.wso2.carbon.apimgt.api.model.ApplicationConstants;
import org.wso2.carbon.apimgt.api.model.OAuthApplicationInfo;
import org.wso2.carbon.apimgt.api.model.Subscriber;
import org.wso2.carbon.apimgt.api.model.Tier;
import org.wso2.carbon.apimgt.impl.APIConstants;
import org.wso2.carbon.apimgt.impl.APIManagerFactory;
import org.wso2.carbon.apimgt.impl.utils.APIUtil;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import org.wso2.carbon.apimgt.rest.api.store.ApplicationsApiService;
import org.wso2.carbon.apimgt.rest.api.store.NotFoundException;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyGenerateRequestDTO;
<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyMappingRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeysDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationTokenDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationTokenGenerateRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.WorkflowResponseDTO;
import org.wso2.carbon.apimgt.rest.api.store.mappings.ApplicationKeyMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.mappings.ApplicationMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.mappings.MiscMappingUtil;
import org.wso2.msf4j.Request;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.HttpHeaders;
=======
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyReGenerateRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ScopeListDTO;
import org.wso2.carbon.apimgt.rest.api.store.utils.mappings.ApplicationKeyMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.utils.mappings.ApplicationMappingUtil;
import org.wso2.carbon.apimgt.rest.api.util.RestApiConstants;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestApiUtil;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestAPIStoreUtils;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import javax.ws.rs.core.Response;

/**
 * Implementation of Applications resource
 */
public class ApplicationsApiServiceImpl extends ApplicationsApiService {

    private static final Logger log = LoggerFactory.getLogger(ApplicationsApiServiceImpl.class);

    /**
     * Deletes an existing application
     *
     * @param applicationId     ID of the application
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return 200 response if the deletion was successful
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsApplicationIdDelete(String applicationId, String ifMatch, String ifUnmodifiedSince,
                                                    Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
<<<<<<< HEAD
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            String existingFingerprint = applicationsApplicationIdGetFingerprint(applicationId, null, null, request);
            if (!StringUtils.isEmpty(ifMatch) && !StringUtils.isEmpty(existingFingerprint) && !ifMatch
                    .contains(existingFingerprint)) {
                return Response.status(Response.Status.PRECONDITION_FAILED).build();
=======
            APIConsumer apiConsumer = APIManagerFactory.getInstance().getAPIConsumer(username);
            Application[] allMatchedApps = new Application[0];
            if (StringUtils.isBlank(query)) {
                allMatchedApps = apiConsumer.getLightWeightApplications(new Subscriber(username), groupId);
            } else {
                Application application = apiConsumer.getApplicationsByName(username, query, groupId);
                if (application != null) {
                    allMatchedApps = new Application[1];
                    allMatchedApps[0] = application;
                }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
            }
            apiConsumer.deleteApplication(applicationId);
        } catch (APIManagementException e) {
            String errorMessage = "Error while deleting application: " + applicationId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
        return Response.ok().build();
    }

    /**
     * Retrives an existing application
     *
     * @param applicationId   application Id
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Requested application detials as the response
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsApplicationIdGet(String applicationId, String ifNoneMatch,
            String ifModifiedSince, Request request) throws NotFoundException {
        ApplicationDTO applicationDTO = null;
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            String existingFingerprint = applicationsApplicationIdGetFingerprint(applicationId, ifNoneMatch,
                    ifModifiedSince, request);
            if (!StringUtils.isEmpty(ifNoneMatch) && !StringUtils.isEmpty(existingFingerprint) && ifNoneMatch
                    .contains(existingFingerprint)) {
                return Response.notModified().build();
            }

<<<<<<< HEAD
            Application application = apiConsumer.getApplication(applicationId, username);
            if (application != null) {
                applicationDTO = ApplicationMappingUtil.fromApplicationToDTO(application);
                return Response.ok().entity(applicationDTO).header(HttpHeaders.ETAG,
                        "\"" + existingFingerprint + "\"").build();
=======
            Object applicationAttributesFromUser = body.getAttributes();
            Map<String, String> applicationAttributes =
                    new ObjectMapper().convertValue(applicationAttributesFromUser, Map.class);

            if (applicationAttributes != null) {
                body.setAttributes(applicationAttributes);
            }

            //subscriber field of the body is not honored. It is taken from the context
            Application application = ApplicationMappingUtil.fromDTOtoApplication(body, username);

            int applicationId = apiConsumer.addApplication(application, username);

            //retrieves the created application and send as the response
            Application createdApplication = apiConsumer.getApplicationById(applicationId);
            ApplicationDTO createdApplicationDTO = ApplicationMappingUtil.fromApplicationtoDTO(createdApplication);

            //to be set as the Location header
            URI location = new URI(RestApiConstants.RESOURCE_PATH_APPLICATIONS + "/" +
                    createdApplicationDTO.getApplicationId());
            return Response.created(location).entity(createdApplicationDTO).build();
        } catch (APIManagementException | URISyntaxException e) {
            if (RestApiUtil.isDueToResourceAlreadyExists(e)) {
                RestApiUtil.handleResourceAlreadyExistsError(
                        "An application already exists with name " + body.getName(), e,
                        log);
            } else if (RestApiUtil.isDueToApplicationNameWhiteSpaceValidation(e)) {
                RestApiUtil.handleBadRequest("Application name cannot contain leading or trailing white spaces", log);
            } else if (RestApiUtil.isDueToApplicationNameWithInvalidCharacters(e)) {
                RestApiUtil.handleBadRequest("Application name cannot contain invalid characters", log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
            } else {
                String errorMessage = "Application not found: " + applicationId;
                APIMgtResourceNotFoundException e = new APIMgtResourceNotFoundException(errorMessage,
                        ExceptionCodes.APPLICATION_NOT_FOUND);
                HashMap<String, String> paramList = new HashMap<String, String>();
                paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
            }
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving application: " + applicationId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
<<<<<<< HEAD
     * Generate application keys
=======
     * Re generate consumer secret.
     *
     * @param body Request body containing application details.
     * @param contentType Content-Type header value.
     * @return A response object containing application keys.
     */
    @Override
    public Response applicationsRegenerateConsumersecretPost(ApplicationKeyReGenerateRequestDTO body,
                                                             String contentType) {

        String username = RestApiUtil.getLoggedInUsername();
        String clientId = body.getConsumerKey();
        try {
            APIConsumer apiConsumer = APIManagerFactory.getInstance().getAPIConsumer(username);
            String clientSecret = apiConsumer.renewConsumerSecret(clientId);

            ApplicationKeyDTO applicationKeyDTO = new ApplicationKeyDTO();
            applicationKeyDTO.setConsumerKey(clientId);
            applicationKeyDTO.setConsumerSecret(clientSecret);

            return Response.ok().entity(applicationKeyDTO).build();
        } catch (APIManagementException e) {
            RestApiUtil.handleInternalServerError("Error while re generating the consumer secret ", e, log);
        }
        return null;
    }

    /**
     * Generate keys for a application
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
     *
     * @param applicationId   Application ID
     * @param body            Application information which are required to generate keys
     * @param request         msf4j request object
     * @return Generated application key detials
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsApplicationIdGenerateKeysPost(String applicationId,
            ApplicationKeyGenerateRequestDTO body, Request request) throws NotFoundException {
        try {
<<<<<<< HEAD
            String username = RestApiUtil.getLoggedInUsername(request);
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            OAuthApplicationInfo oAuthApp = apiConsumer.generateApplicationKeys(applicationId,
                    body.getKeyType().name(), body.getCallbackUrl(), body.getGrantTypesToBeSupported());
            ApplicationKeysDTO appKeys = ApplicationKeyMappingUtil.fromApplicationKeysToDTO(oAuthApp);
            return Response.ok().entity(appKeys).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while generating application keys for application: " + applicationId;
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            APIConsumer apiConsumer = APIManagerFactory.getInstance().getAPIConsumer(username);
            Application application = apiConsumer.getApplicationByUUID(applicationId);
            if (application != null) {
                if (RestAPIStoreUtils.isUserOwnerOfApplication(application)) {
                    String[] accessAllowDomainsArray = body.getAccessAllowDomains().toArray(new String[1]);
                    JSONObject jsonParamObj = new JSONObject();
                    jsonParamObj.put(ApplicationConstants.OAUTH_CLIENT_USERNAME, username);
                    String grantTypes = StringUtils.join(body.getSupportedGrantTypes(), ',');
                    if (!StringUtils.isEmpty(grantTypes)) {
                        jsonParamObj.put(APIConstants.JSON_GRANT_TYPES, grantTypes);
                    }
                    /* Read clientId & clientSecret from ApplicationKeyGenerateRequestDTO object.
                       User can provide clientId only or both clientId and clientSecret
                       User cannot provide clientSecret only */
                    if (!StringUtils.isEmpty(body.getClientId())) {
                        jsonParamObj.put(APIConstants.JSON_CLIENT_ID, body.getClientId());
                        if (!StringUtils.isEmpty(body.getClientSecret())) {
                            jsonParamObj.put(APIConstants.JSON_CLIENT_SECRET, body.getClientSecret());
                        }
                    }
                    String jsonParams = jsonParamObj.toString();
                    String tokenScopes = StringUtils.join(body.getScopes(), " ");

                    Map<String, Object> keyDetails = apiConsumer.requestApprovalForApplicationRegistration(
                            username, application.getName(), body.getKeyType().toString(), body.getCallbackUrl(),
                            accessAllowDomainsArray, body.getValidityTime(), tokenScopes, application.getGroupId(),
                            jsonParams);
                    ApplicationKeyDTO applicationKeyDTO =
                            ApplicationKeyMappingUtil.fromApplicationKeyToDTO(keyDetails, body.getKeyType().toString());

                    return Response.ok().entity(applicationKeyDTO).build();
                } else {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
            }
        } catch (APIManagementException e) {
            if (RestApiUtil.rootCauseMessageMatches(e, "is already registered")) {
                RestApiUtil
                        .handleResourceAlreadyExistsError("Keys already generated for the application " + applicationId,
                                e,
                                log);
            } else {
                RestApiUtil.handleInternalServerError("Error while generating keys for application " + applicationId, e,
                        log);
            }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }

    /**
     * Retrieve Keys of an application
     *
     * @param applicationId Application Id
     * @param request       msf4j request object
     * @return Application Key Information
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsApplicationIdKeysGet(String applicationId, Request request) throws NotFoundException {
        try {
            String username = RestApiUtil.getLoggedInUsername(request);
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            List<OAuthApplicationInfo> oAuthApps = apiConsumer.getApplicationKeys(applicationId);
            List<ApplicationKeysDTO> appKeys = ApplicationKeyMappingUtil.fromApplicationKeyListToDTOList(oAuthApps);
            return Response.ok().entity(appKeys).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while retrieving application keys of application: "
                    + applicationId;
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Retrieve Keys of an application by key type
<<<<<<< HEAD
=======
     *
     * @param applicationId Application Id
     * @param keyType       Key Type (Production | Sandbox)
     * @param groupId       Group id of application (if any)
     * @param accept       Accept header
     * @return Application Key Information
     */
    @Override
    public Response applicationsApplicationIdKeysKeyTypeGet(String applicationId, String keyType, String groupId,
                                                            String accept) {
        String username = RestApiUtil.getLoggedInUsername();
        try {
            APIConsumer apiConsumer = APIManagerFactory.getInstance().getAPIConsumer(username);
            Application application = apiConsumer.getApplicationByUUID(applicationId);
            if (application != null) {
                if (RestAPIStoreUtils.isUserAccessAllowedForApplication(application)) {
                    for (APIKey apiKey : application.getKeys()) {
                        if (keyType != null && keyType.equals(apiKey.getType())) {
                            ApplicationKeyDTO appKeyDTO = ApplicationKeyMappingUtil.fromApplicationKeyToDTO(apiKey);
                            return Response.ok().entity(appKeyDTO).build();
                        }
                    }
                } else {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
            }
        } catch (APIManagementException e) {
            RestApiUtil.handleInternalServerError("Error while retrieving application " + applicationId, e, log);
        }
        return null;
    }

    /**
     * Update grant types/callback URL
     *
     * @param applicationId Application Id
     * @param keyType       Key Type (Production | Sandbox)
     * @param body          Grant type and callback URL information
     * @return Updated Key Information
     */
    @Override
    public Response applicationsApplicationIdKeysKeyTypePut(String applicationId, String keyType, ApplicationKeyDTO body) {
        String username = RestApiUtil.getLoggedInUsername();
        try {
            APIConsumer apiConsumer = APIManagerFactory.getInstance().getAPIConsumer(username);
            Application application = apiConsumer.getApplicationByUUID(applicationId);
            if (application != null) {
                if (RestAPIStoreUtils.isUserOwnerOfApplication(application)) {
                    String grantTypes = StringUtils.join(body.getSupportedGrantTypes(), ',');
                    JsonObject jsonParams = new JsonObject();
                    jsonParams.addProperty(APIConstants.JSON_GRANT_TYPES, grantTypes);
                    jsonParams.addProperty(APIConstants.JSON_USERNAME, username);
                    OAuthApplicationInfo updatedData = apiConsumer.updateAuthClient(username, application.getName(),
                            keyType, body.getCallbackUrl(), null, null, null, body.getGroupId(),
                            new Gson().toJson(jsonParams));
                    ApplicationKeyDTO applicationKeyDTO = new ApplicationKeyDTO();
                    applicationKeyDTO.setCallbackUrl(updatedData.getCallBackURL());
                    JsonObject json = new Gson().fromJson(updatedData.getJsonString(), JsonObject.class);
                    if (json.get(APIConstants.JSON_GRANT_TYPES) != null) {
                        String[] updatedGrantTypes = json.get(APIConstants.JSON_GRANT_TYPES).getAsString().split(" ");
                        applicationKeyDTO.setSupportedGrantTypes(Arrays.asList(updatedGrantTypes));
                    }
                    applicationKeyDTO.setConsumerKey(updatedData.getClientId());
                    applicationKeyDTO.setConsumerSecret(updatedData.getClientSecret());
                    applicationKeyDTO.setKeyType(ApplicationKeyDTO.KeyTypeEnum.valueOf(keyType));
                    return Response.ok().entity(applicationKeyDTO).build();
                } else {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
            }
        } catch (APIManagementException e) {
            RestApiUtil.handleInternalServerError("Error while updating application " + applicationId, e, log);
        }
        return null;
    }

    /**
     * Update an application by Id
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
     *
     * @param applicationId Application Id
     * @param keyType       Key Type (Production | Sandbox)
     * @param request       msf4j request object
     * @return Application Key Information
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsApplicationIdKeysKeyTypeGet(String applicationId, String keyType,
            Request request) throws NotFoundException {
        try {
<<<<<<< HEAD
            String username = RestApiUtil.getLoggedInUsername(request);
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            OAuthApplicationInfo oAuthApp = apiConsumer.getApplicationKeys(applicationId, keyType);
            ApplicationKeysDTO appKeys = ApplicationKeyMappingUtil.fromApplicationKeysToDTO(oAuthApp);
            return Response.ok().entity(appKeys).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while retrieving '" + keyType + "' application keys of application: "
                    + applicationId;
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            paramList.put(APIMgtConstants.ExceptionsConstants.KEY_TYPE, keyType);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            APIConsumer apiConsumer = APIManagerFactory.getInstance().getAPIConsumer(username);
            Application oldApplication = apiConsumer.getApplicationByUUID(applicationId);
            if (oldApplication != null) {
                if (RestAPIStoreUtils.isUserOwnerOfApplication(oldApplication)) {
                    Object applicationAttributesFromUser = body.getAttributes();
                    Map<String, String> applicationAttributes = new ObjectMapper().convertValue(applicationAttributesFromUser, Map.class);

                    if (applicationAttributes != null) {
                        body.setAttributes(applicationAttributes);
                    }
                    //we do not honor the subscriber coming from the request body as we can't change the subscriber of the application
                    Application application = ApplicationMappingUtil.fromDTOtoApplication(body, username);
                    //groupId of the request body is not honored for now.
                    // Later we can improve by checking admin privileges of the user.
                    application.setGroupId(oldApplication.getGroupId());
                    //we do not honor the application id which is sent via the request body
                    application.setUUID(oldApplication.getUUID());

                    apiConsumer.updateApplication(application);

                    //retrieves the updated application and send as the response
                    Application updatedApplication = apiConsumer.getApplicationByUUID(applicationId);
                    ApplicationDTO updatedApplicationDTO = ApplicationMappingUtil
                            .fromApplicationtoDTO(updatedApplication);
                    return Response.ok().entity(updatedApplicationDTO).build();
                } else {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
            }
        } catch (APIManagementException e) {
            if (RestApiUtil.isDueToApplicationNameWhiteSpaceValidation(e)) {
                RestApiUtil.handleBadRequest("Application name cannot contains leading or trailing white spaces", log);
            } else if (RestApiUtil.isDueToApplicationNameWithInvalidCharacters(e)) {
                RestApiUtil.handleBadRequest("Application name cannot contain invalid characters", log);
            } else {
                RestApiUtil.handleInternalServerError("Error while updating application " + applicationId, e, log);
            }
        }
        return null;
    }

    @Override
    public Response applicationsApplicationIdScopesGet(String applicationId, Boolean filterByUserRoles,
            String ifNoneMatch, String ifModifiedSince) {
        String userName = RestApiUtil.getLoggedInUsername();
        try {
            APIConsumer apiConsumer = RestApiUtil.getConsumer(userName);
            if (log.isDebugEnabled()) {
                log.debug("Scope retrieval request received from the " + userName + " for the application id "
                        + applicationId + " with the query parameter('filterByUserRoles) value " + filterByUserRoles);
            }
            Application application = apiConsumer.getApplicationByUUID(applicationId);
            if (application != null) {
                if (RestAPIStoreUtils.isUserAccessAllowedForApplication(application)) {
                    ScopeListDTO filteredScopes = org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                            .getScopesForApplication(userName, application,
                                    ((filterByUserRoles != null) ? filterByUserRoles : false));

                    return Response.ok().entity(filteredScopes).build();
                } else {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
            }
        } catch (APIManagementException e) {
            RestApiUtil.handleInternalServerError(
                    "Error while getting scopes related with application " + applicationId, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }

    /**
     * Update grant types/callback URL
     *
     * @param applicationId Application Id
     * @param keyType       Key Type (Production | Sandbox)
     * @param body          Grant type and callback URL information
     * @param request       msf4j request object
     * @return Updated Key Information
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsApplicationIdKeysKeyTypePut(String applicationId, String keyType,
            ApplicationKeysDTO body, Request request) throws NotFoundException {
        try {
<<<<<<< HEAD
            String username = RestApiUtil.getLoggedInUsername(request);
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            OAuthApplicationInfo oAuthApp = apiConsumer.updateGrantTypesAndCallbackURL(applicationId, keyType,
                    body.getSupportedGrantTypes(), body.getCallbackUrl());
            ApplicationKeysDTO appKeys = ApplicationKeyMappingUtil.fromApplicationKeysToDTO(oAuthApp);
            return Response.ok().entity(appKeys).build();
=======
            APIConsumer apiConsumer = APIManagerFactory.getInstance().getAPIConsumer(username);
            Application application = apiConsumer.getApplicationByUUID(applicationId);
            if (application != null) {
                if (RestAPIStoreUtils.isUserOwnerOfApplication(application)) {
                    apiConsumer.removeApplication(application, username);
                    return Response.ok().build();
                } else {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
            }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while updating '" + keyType + "'-type grant types/callback url of " +
                    "application: " + applicationId;
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            paramList.put(APIMgtConstants.ExceptionsConstants.KEY_TYPE, keyType);
            paramList.put(APIMgtConstants.ExceptionsConstants.CALLBACK_URL, body.getCallbackUrl());
            String grantTypes = null;
            if (body.getSupportedGrantTypes() != null) {
                grantTypes = String.join(",", body.getSupportedGrantTypes());
            }
            paramList.put(APIMgtConstants.ExceptionsConstants.GRANT_TYPES, grantTypes);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }


    /**
     * Map application keys
     *
     * @param applicationId   Application ID
     * @param body            Application key mapping information
     * @param request         msf4j request object
     * @return Generated application key detials
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
<<<<<<< HEAD
    public Response applicationsApplicationIdMapKeysPost(String applicationId,
            ApplicationKeyMappingRequestDTO body, Request request) throws NotFoundException {
        try {
            String username = RestApiUtil.getLoggedInUsername(request);
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            OAuthApplicationInfo oAuthApp = apiConsumer.mapApplicationKeys(applicationId,
                    body.getKeyType().name(), body.getConsumerKey(), body.getConsumerSecret());
            ApplicationKeysDTO appKeys = ApplicationKeyMappingUtil.fromApplicationKeysToDTO(oAuthApp);
            return Response.ok().entity(appKeys).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while mapping application keys with application: " + applicationId;
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
=======
    public String applicationsApplicationIdDeleteGetLastUpdatedTime(String applicationId, String ifMatch,
            String ifUnmodifiedSince) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .getLastUpdatedTimeByApplicationId(applicationId);
    }

    /**
     * Retrieves the scopes related with particular applications based on subscribed APIs.
     *
     * @param applicationId     Application Identifier.
     * @param filterByUserRoles Whether to filter scope by user roles.
     * @param ifNoneMatch       If-None-Match header value
     * @param ifModifiedSince   If-Modified-Since header value.
     * @deprecated
     * @return the scopes
     */
    @Override
    @Deprecated
    public Response applicationsScopesApplicationIdGet(String applicationId, Boolean filterByUserRoles,
            String ifNoneMatch, String ifModifiedSince) {
        String userName = RestApiUtil.getLoggedInUsername();
        try {
            APIConsumer apiConsumer = RestApiUtil.getConsumer(userName);
            if (log.isDebugEnabled()) {
                log.debug("Scope retrieval request received from the " + userName + " for the application id "
                        + applicationId + " with the query parameter('filterByUserRoles) value " + filterByUserRoles);
            }
            Application application = apiConsumer.getApplicationByUUID(applicationId);
            if (application != null) {
                if (RestAPIStoreUtils.isUserAccessAllowedForApplication(application)) {
                    ScopeListDTO filteredScopes = org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                            .getScopesForApplication(userName, application,
                                    ((filterByUserRoles != null) ? filterByUserRoles : false));

                    return Response.ok().entity(filteredScopes).build();
                } else {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
            }
        } catch (APIManagementException e) {
            RestApiUtil.handleInternalServerError(
                        "Error while getting scopes related with application " + applicationId, e, log);

        }
        return null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }

    /**
     * Generate an application token
     *
     * @param applicationId   Application ID
     * @param body            Application information which are required to generate tokens
     * @param ifMatch         If-Match header value
     * @param ifUnmodifiedSince If-UnModified-Since header value
     * @param request         msf4j request object
     * @return Generated application key detials
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
<<<<<<< HEAD
    public Response applicationsApplicationIdGenerateTokenPost(String applicationId,
            ApplicationTokenGenerateRequestDTO body, String ifMatch, String ifUnmodifiedSince, Request request)
            throws NotFoundException {
        try {
            String username = RestApiUtil.getLoggedInUsername(request);
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            ApplicationToken token = apiConsumer.generateApplicationToken(body.getConsumerKey(),
                    body.getConsumerSecret(), body.getScopes(), body.getValidityPeriod(), body.getRevokeToken());
            ApplicationTokenDTO appToken = ApplicationKeyMappingUtil.fromApplicationTokenToDTO(token);
            return Response.ok().entity(appToken).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while generating application tokens for application: "
                    + applicationId;
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
=======
    public String applicationsApplicationIdGetGetLastUpdatedTime(String applicationId, String accept,
            String ifNoneMatch, String ifModifiedSince) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .getLastUpdatedTimeByApplicationId(applicationId);
    }

    @Override
    public String applicationsApplicationIdKeysKeyTypeGetGetLastUpdatedTime(String applicationId, String keyType,
                                                                            String groupId, String accept) {
        return null;
    }

    @Override
    public String applicationsApplicationIdKeysKeyTypePutGetLastUpdatedTime(String applicationId, String keyType,
                                                                            ApplicationKeyDTO body) {
        return null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }

    /**
     * Retrieves the fingerprint of a application given its UUID
     *
     * @param applicationId   application Id
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Retrieves the fingerprint of a application
     */
<<<<<<< HEAD
    public String applicationsApplicationIdGetFingerprint(String applicationId, String ifNoneMatch,
            String ifModifiedSince, Request request) {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            String lastUpdatedTime = RestApiUtil.getConsumer(username).getLastUpdatedTimeOfApplication(applicationId);
            return ETagUtils.generateETag(lastUpdatedTime);
        } catch (APIManagementException e) {
            //gives a warning and let it continue the execution
            String errorMessage = "Error while retrieving last updated time of application " + applicationId;
            log.error(errorMessage, e);
            return null;
        }
=======
    @Override
    public String applicationsApplicationIdPutGetLastUpdatedTime(String applicationId, ApplicationDTO body,
            String contentType, String ifMatch, String ifUnmodifiedSince) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .getLastUpdatedTimeByApplicationId(applicationId);
    }

    @Override
    public String applicationsApplicationIdScopesGetGetLastUpdatedTime(String applicationId, Boolean filterByUserRoles, String ifNoneMatch, String ifModifiedSince) {
        return null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }

    /**
     * Updates an existing application
     *
     * @param applicationId     application Id
     * @param body              Application details to be updated
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Updated application details as the response
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsApplicationIdPut(String applicationId, ApplicationDTO body, String ifMatch,
            String ifUnmodifiedSince, Request request) throws NotFoundException {
        ApplicationDTO updatedApplicationDTO = null;
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            String existingFingerprint = applicationsApplicationIdGetFingerprint(applicationId, null, null, request);
            if (!StringUtils.isEmpty(ifMatch) && !StringUtils.isEmpty(existingFingerprint) && !ifMatch
                    .contains(existingFingerprint)) {
                return Response.status(Response.Status.PRECONDITION_FAILED).build();
            }

            Application application = ApplicationMappingUtil.fromDTOtoApplication(body, username);
            if (!ApplicationStatus.APPLICATION_APPROVED.equals(application.getStatus())) {
                String errorMessage = "Application " + applicationId + " is not active";
                ExceptionCodes exceptionCode = ExceptionCodes.APPLICATION_INACTIVE;
                APIManagementException e = new APIManagementException(errorMessage, exceptionCode);
                Map<String, String> paramList = new HashMap<>();
                paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();

            }
            WorkflowResponse updateResponse = apiConsumer.updateApplication(applicationId, application);
            if (WorkflowStatus.REJECTED == updateResponse.getWorkflowStatus()) {
                String errorMessage = "Update request for application " + applicationId + " is rejected";
                ExceptionCodes exceptionCode = ExceptionCodes.WORKFLOW_REJCECTED;
                APIManagementException e = new APIManagementException(errorMessage, exceptionCode);
                Map<String, String> paramList = new HashMap<>();
                paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
            }

            //retrieves the updated application and send as the response
            Application updatedApplication = apiConsumer.getApplication(applicationId, username);
            updatedApplicationDTO = ApplicationMappingUtil.fromApplicationToDTO(updatedApplication);
            String newFingerprint = applicationsApplicationIdGetFingerprint(applicationId, null, null, request);


            //if workflow is in pending state or if the executor sends any httpworklfowresponse (workflow state can
            //be in either pending or approved state) send back the workflow response
            if (ApplicationStatus.APPLICATION_ONHOLD.equals(updatedApplication.getStatus())) {

                WorkflowResponseDTO workflowResponse = MiscMappingUtil
                        .fromWorkflowResponseToDTO(updateResponse);
                URI location = new URI(RestApiConstants.RESOURCE_PATH_APPLICATIONS + "/" + applicationId);
                return Response.status(Response.Status.ACCEPTED).header(RestApiConstants.LOCATION_HEADER, location)
                        .entity(workflowResponse).build();
            }
            return Response.ok().entity(updatedApplicationDTO).header(HttpHeaders.ETAG, "\"" + newFingerprint + "\"")
                    .build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while updating application: " + body.getName();
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_NAME, body.getName());
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        } catch (URISyntaxException e) {
            String errorMessage = "Error while adding location header in response for application : " + body.getName();
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_NAME, body.getName());
            ErrorHandler errorHandler = ExceptionCodes.LOCATION_HEADER_INCORRECT;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler, paramList);
            log.error(errorMessage, e);
            return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Retrieves all applications that qualifies for the search query
     *
     * @param query       Search query
     * @param limit       Max number of applications to return
     * @param offset      Starting position of pagination
     * @param ifNoneMatch If-None-Match header value
     * @param request     msf4j request object
     * @return A list of qualifying application DTOs as the response
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsGet(String query, Integer limit, Integer offset, String ifNoneMatch,
            Request request) throws NotFoundException {

        ApplicationListDTO applicationListDTO = null;
        String username = RestApiUtil.getLoggedInUsername(request);

        limit = limit != null ? limit : RestApiConstants.PAGINATION_LIMIT_DEFAULT;
        offset = offset != null ? offset : RestApiConstants.PAGINATION_OFFSET_DEFAULT;
        try {
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            List<Application> allMatchedApps = new ArrayList<>();
            if (StringUtils.isBlank(query)) {
                allMatchedApps = apiConsumer.getApplications(username);
            } else {
                Application application = apiConsumer.getApplicationByName(username, query);
                if (application != null) {
                    allMatchedApps = new ArrayList<>();
                    allMatchedApps.add(application);
                }
            }

            //allMatchedApps are already sorted to application name
            applicationListDTO = ApplicationMappingUtil.fromApplicationsToDTO(allMatchedApps, limit, offset);
            ApplicationMappingUtil
                    .setPaginationParams(applicationListDTO, limit, offset, allMatchedApps.size());
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving applications";
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_NAME, query);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
        return Response.ok().entity(applicationListDTO).build();
    }

    /**
     * Adds a new application
     *
     * @param body        Application details to be added
     * @param request     msf4j request object
     * @return 201 Response if successful
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response applicationsPost(ApplicationDTO body, Request request) throws NotFoundException {
        URI location = null;
        ApplicationDTO createdApplicationDTO = null;
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiConsumer = RestApiUtil.getConsumer(username);
            Application application = ApplicationMappingUtil.fromDTOtoApplication(body, username);
            ApplicationCreationResponse applicationResponse = apiConsumer.addApplication(application);
            String applicationUUID = applicationResponse.getApplicationUUID();
            Application createdApplication = apiConsumer.getApplication(applicationUUID, username);
            createdApplicationDTO = ApplicationMappingUtil.fromApplicationToDTO(createdApplication);

<<<<<<< HEAD
            location = new URI(RestApiConstants.RESOURCE_PATH_APPLICATIONS + "/" +
                    createdApplicationDTO.getApplicationId());

            //if workflow is in pending state or if the executor sends any httpworklfowresponse (workflow state can
            //be in either pending or approved state) send back the workflow response
            if (ApplicationStatus.APPLICATION_ONHOLD.equals(createdApplication.getStatus())) {

                WorkflowResponseDTO workflowResponse = MiscMappingUtil
                        .fromWorkflowResponseToDTO(applicationResponse.getWorkflowResponse());
                return Response.status(Response.Status.ACCEPTED).header(RestApiConstants.LOCATION_HEADER, location)
                        .entity(workflowResponse).build();
            }

        } catch (APIManagementException e) {
            String errorMessage = "Error while adding new application : " + body.getName();
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_NAME, body.getName());
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        } catch (URISyntaxException e) {
            String errorMessage = "Error while adding location header in response for application : " + body.getName();
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_NAME, body.getName());
            ErrorHandler errorHandler = ExceptionCodes.LOCATION_HEADER_INCORRECT;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler, paramList);
            log.error(errorMessage, e);
            return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
        }
        // TODO: set location header once msf4j is updates : Response.created(location).entity(createdApplicationDTO)
        // .build()
        return Response.status(Response.Status.CREATED).header(RestApiConstants.LOCATION_HEADER, location)
                .entity(createdApplicationDTO).build();
=======
    @Override
    public String applicationsRegenerateConsumersecretPostGetLastUpdatedTime(ApplicationKeyReGenerateRequestDTO body,
                                                                             String contentType) {
        /* The generated oauth keys are stored in the Key Manager side, implementing this method will be different
         from Key Manager to Key Manager. */
        return null;
    }

    @Override
    public String applicationsScopesApplicationIdGetGetLastUpdatedTime(String applicationId,
            Boolean filterByUserRoles, String ifNoneMatch, String ifModifiedSince) {
        return null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
}
