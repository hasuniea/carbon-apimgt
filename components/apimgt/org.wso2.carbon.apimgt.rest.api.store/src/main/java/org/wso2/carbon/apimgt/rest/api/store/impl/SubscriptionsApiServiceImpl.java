package org.wso2.carbon.apimgt.rest.api.store.impl;

import org.apache.commons.lang3.StringUtils;
<<<<<<< HEAD
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.apimgt.core.api.APIStore;
import org.wso2.carbon.apimgt.core.dao.ApiType;
import org.wso2.carbon.apimgt.core.exception.APIManagementException;
import org.wso2.carbon.apimgt.core.exception.APIMgtResourceNotFoundException;
import org.wso2.carbon.apimgt.core.exception.ErrorHandler;
import org.wso2.carbon.apimgt.core.exception.ExceptionCodes;
import org.wso2.carbon.apimgt.core.exception.GatewayException;
import org.wso2.carbon.apimgt.core.models.API;
import org.wso2.carbon.apimgt.core.models.Application;
import org.wso2.carbon.apimgt.core.models.Subscription;
import org.wso2.carbon.apimgt.core.models.SubscriptionResponse;
import org.wso2.carbon.apimgt.core.util.APIMgtConstants;
import org.wso2.carbon.apimgt.core.util.APIMgtConstants.ApplicationStatus;
import org.wso2.carbon.apimgt.core.util.APIMgtConstants.SubscriptionStatus;
import org.wso2.carbon.apimgt.core.util.ETagUtils;
import org.wso2.carbon.apimgt.rest.api.common.RestApiConstants;
import org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.common.util.RestApiUtil;
import org.wso2.carbon.apimgt.rest.api.store.NotFoundException;
import org.wso2.carbon.apimgt.rest.api.store.SubscriptionsApiService;
import org.wso2.carbon.apimgt.rest.api.store.dto.SubscriptionDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.SubscriptionListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.WorkflowResponseDTO;
import org.wso2.carbon.apimgt.rest.api.store.mappings.MiscMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.mappings.SubscriptionMappingUtil;
import org.wso2.msf4j.Request;

import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
=======
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.wso2.carbon.apimgt.api.APIConsumer;
import org.wso2.carbon.apimgt.api.APIManagementException;
import org.wso2.carbon.apimgt.api.APIMgtAuthorizationFailedException;
import org.wso2.carbon.apimgt.api.SubscriptionAlreadyExistingException;
import org.wso2.carbon.apimgt.api.model.APIIdentifier;
import org.wso2.carbon.apimgt.api.model.Application;
import org.wso2.carbon.apimgt.api.model.SubscribedAPI;
import org.wso2.carbon.apimgt.api.model.Subscriber;
import org.wso2.carbon.apimgt.api.model.SubscriptionResponse;
import org.wso2.carbon.apimgt.rest.api.store.SubscriptionsApiService;
import org.wso2.carbon.apimgt.rest.api.store.dto.SubscriptionDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.SubscriptionListDTO;
import org.wso2.carbon.apimgt.rest.api.store.utils.mappings.APIMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.utils.mappings.SubscriptionMappingUtil;
import org.wso2.carbon.apimgt.rest.api.util.RestApiConstants;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestApiUtil;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestAPIStoreUtils;

import java.io.UnsupportedEncodingException;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
<<<<<<< HEAD
import java.util.Map;
=======
import java.util.Set;
import javax.ws.rs.core.Response;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

/**
 * Implementation of Subscriptions resource
 */
public class SubscriptionsApiServiceImpl extends SubscriptionsApiService {

    private static final Logger log = LoggerFactory.getLogger(SubscriptionsApiServiceImpl.class);

    /**
     * Get all subscriptions.
     * {@code <p/>}
     * If apiId is specified this will return the subscribed applications of that api
     * If application id is specified this will return the api subscriptions of that application
     *
     * @param apiId         ID of the API
     * @param applicationId ID of the Application
     * @param offset        offset value
     * @param limit         limit value
     * @param ifNoneMatch   If-None-Match header value
     * @param request       msf4j request object
     * @return Subscription List
     * @throws NotFoundException If failed to get the subscription
     */
    @Override
    public Response subscriptionsGet(String apiId, String applicationId, String apiType, Integer offset,
            Integer limit, String ifNoneMatch, Request request) throws NotFoundException {

        List<Subscription> subscribedApiList = null;
        SubscriptionListDTO subscriptionListDTO = null;
        String username = RestApiUtil.getLoggedInUsername(request);
        limit = limit != null ? limit : RestApiConstants.PAGINATION_LIMIT_DEFAULT;
        offset = offset != null ? offset : RestApiConstants.PAGINATION_OFFSET_DEFAULT;

        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            if (!StringUtils.isEmpty(apiId)) {
                subscribedApiList = apiStore.getSubscriptionsByAPI(apiId);
                subscriptionListDTO = SubscriptionMappingUtil.fromSubscriptionListToDTO(subscribedApiList, limit,
                        offset);
            } else if (!StringUtils.isEmpty(applicationId)) {
                Application application = apiStore.getApplicationByUuid(applicationId);
                if (application != null) {
                    if (!StringUtils.isEmpty(apiType)) {
                        ApiType apiTypeEnum = ApiType.fromString(apiType);

                        if (apiTypeEnum == null) {
                            throw new APIManagementException("API Type specified is invalid",
                                    ExceptionCodes.API_TYPE_INVALID);
                        }
                        subscribedApiList = apiStore.getAPISubscriptionsByApplication(application, apiTypeEnum);
                    } else {
                        subscribedApiList = apiStore.getAPISubscriptionsByApplication(application);
                    }
                    subscriptionListDTO = SubscriptionMappingUtil.fromSubscriptionListToDTO(subscribedApiList, limit,
                            offset);
                } else {
                    String errorMessage = "Application not found: " + applicationId;
                    APIMgtResourceNotFoundException e = new APIMgtResourceNotFoundException(
                            errorMessage, ExceptionCodes.APPLICATION_NOT_FOUND);
                    HashMap<String, String> paramList = new HashMap<String, String>();
                    paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
                    ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                    log.error(errorMessage, e);
                    return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
                }
            } else {
                //mandatory parameters not provided
                String errorMessage = "Either applicationId or apiId should be provided";
                ErrorHandler errorHandler = ExceptionCodes.PARAMETER_NOT_PROVIDED;
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler);
                log.error(errorMessage);
                return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
            }
        } catch (APIManagementException e) {
<<<<<<< HEAD
            String errorMessage = "Error while retrieving subscriptions";
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, applicationId);
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, applicationId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            if (RestApiUtil.isDueToAuthorizationFailure(e)) {
                RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_API, apiId, log);
            } else if (RestApiUtil.isDueToResourceNotFound(e)) {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else {
                RestApiUtil.handleInternalServerError("Error while getting subscriptions of the user " + username, e,
                        log);
            }
        } catch (UnsupportedEncodingException e) {
            String errorMessage = "Error while Decoding apiId" + apiId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }

        return Response.ok().entity(subscriptionListDTO).build();
    }

    /**
     * Adds a new subscription
     *
     * @param body        Subscription details to be added
     * @param request     msf4j request object
     * @return Newly added subscription as the response
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
<<<<<<< HEAD
    public Response subscriptionsPost(SubscriptionDTO body, Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        SubscriptionDTO subscriptionDTO = null;
        URI location = null;
=======
    public Response subscriptionsMultiplePost(List<SubscriptionDTO> body, String contentType) {
        String username = RestApiUtil.getLoggedInUsername();
        String tenantDomain = RestApiUtil.getLoggedInUserTenantDomain();
        List<SubscriptionDTO> subscriptions = new ArrayList<>();
        for (SubscriptionDTO subscriptionDTO : body) {
            APIConsumer apiConsumer;
            try {
                apiConsumer = RestApiUtil.getConsumer(username);
                String applicationId = subscriptionDTO.getApplicationId();

                //check whether user is permitted to access the API. If the API does not exist,
                // this will throw a APIMgtResourceNotFoundException
                if (!org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                        .isUserAccessAllowedForAPI(subscriptionDTO.getApiIdentifier(), tenantDomain)) {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_API,
                            subscriptionDTO.getApiIdentifier(), log);
                }
                APIIdentifier apiIdentifier = APIMappingUtil
                        .getAPIIdentifierFromApiIdOrUUID(subscriptionDTO.getApiIdentifier(), tenantDomain);

                Application application = apiConsumer.getApplicationByUUID(applicationId);
                if (application == null) {
                    //required application not found
                    RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }

                if (!RestAPIStoreUtils.isUserAccessAllowedForApplication(application)) {
                    //application access failure occurred
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                }

                //Validation for allowed throttling tiers and Tenant based validation for subscription. If failed this will
                //  throw an APIMgtAuthorizationFailedException with the reason as the message
                RestAPIStoreUtils.checkSubscriptionAllowed(apiIdentifier, subscriptionDTO.getTier());

                apiIdentifier.setTier(subscriptionDTO.getTier());
                SubscriptionResponse subscriptionResponse = apiConsumer
                        .addSubscription(apiIdentifier, username, application.getId());
                SubscribedAPI addedSubscribedAPI = apiConsumer
                        .getSubscriptionByUUID(subscriptionResponse.getSubscriptionUUID());
                SubscriptionDTO addedSubscriptionDTO = SubscriptionMappingUtil.fromSubscriptionToDTO(addedSubscribedAPI);
                subscriptions.add(addedSubscriptionDTO);

            } catch (APIMgtAuthorizationFailedException e) {
                //this occurs when the api:application:tier mapping is not allowed. The reason for the message is taken from
                // the message of the exception e
                RestApiUtil.handleAuthorizationFailure(e.getMessage(), e, log);
            } catch (SubscriptionAlreadyExistingException e) {
                RestApiUtil.handleResourceAlreadyExistsError(
                        "Specified subscription already exists for API " + subscriptionDTO.getApiIdentifier() + " for application "
                                + subscriptionDTO.getApplicationId(), e, log);
            } catch (APIManagementException e) {
                if (RestApiUtil.isDueToResourceNotFound(e)) {
                    //this happens when the specified API identifier does not exist
                    RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_API, subscriptionDTO.getApiIdentifier(), e, log);
                } else {
                    //unhandled exception
                    RestApiUtil.handleInternalServerError(
                            "Error while adding the subscription API:" + subscriptionDTO.getApiIdentifier() + ", application:" + subscriptionDTO
                                    .getApplicationId() + ", tier:" + subscriptionDTO.getTier(), e, log);
                }
            } catch (UnsupportedEncodingException e) {
                String errorMessage = "Error while Decoding apiId" + subscriptionDTO.getApiIdentifier();
                RestApiUtil.handleInternalServerError(errorMessage, e, log);
            }
        }
        return Response.ok().entity(subscriptions).build();
    }

    /**
     * Creates a new subscriptions with the details specified in the body parameter
     *
     * @param body        new subscription details
     * @param contentType Content-Type header
     * @return newly added subscription as a SubscriptionDTO if successful
     */
    @Override
    public Response subscriptionsPost(SubscriptionDTO body, String contentType) {
        String username = RestApiUtil.getLoggedInUsername();
        String tenantDomain = RestApiUtil.getLoggedInUserTenantDomain();
        APIConsumer apiConsumer;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String applicationId = body.getApplicationId();
            String apiId = body.getApiIdentifier();
            String tier = body.getPolicy();

<<<<<<< HEAD
            Application application = apiStore.getApplicationByUuid(applicationId);
            if (application != null && !ApplicationStatus.APPLICATION_APPROVED.equals(application.getStatus())) {
                String errorMessage = "Application " + applicationId + " is not active";
                ExceptionCodes exceptionCode = ExceptionCodes.APPLICATION_INACTIVE;
                APIManagementException e = new APIManagementException(errorMessage, exceptionCode);
                Map<String, String> paramList = new HashMap<>();
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
                
=======
            //check whether user is permitted to access the API. If the API does not exist, 
            // this will throw a APIMgtResourceNotFoundException
            if (!org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                    .isUserAccessAllowedForAPI(body.getApiIdentifier(), tenantDomain)) {
                RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_API, body.getApiIdentifier(), log);
            }
            APIIdentifier apiIdentifier = APIMappingUtil
                    .getAPIIdentifierFromApiIdOrUUID(body.getApiIdentifier(), tenantDomain);

            Application application = apiConsumer.getApplicationByUUID(applicationId);
            if (application == null) {
                //required application not found
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
                return null;
            }

            if (!RestAPIStoreUtils.isUserAccessAllowedForApplication(application)) {
                //application access failure occurred
                RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_APPLICATION, applicationId, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
            }
            
            if (application != null) {
                SubscriptionResponse addSubResponse = apiStore.addApiSubscription(apiId, applicationId, tier);
                String subscriptionId = addSubResponse.getSubscriptionUUID();
                Subscription subscription = apiStore.getSubscriptionByUUID(subscriptionId);
                location = new URI(RestApiConstants.RESOURCE_PATH_SUBSCRIPTION + "/" + subscriptionId);
                subscriptionDTO = SubscriptionMappingUtil.fromSubscriptionToDTO(subscription);
                
                //if workflow is in pending state or if the executor sends any httpworklfowresponse (workflow state can 
                //be in either pending or approved state) send back the workflow response 
                if (SubscriptionStatus.ON_HOLD == subscription.getStatus()) {
                    WorkflowResponseDTO workflowResponse = MiscMappingUtil
                            .fromWorkflowResponseToDTO(addSubResponse.getWorkflowResponse());
                    return Response.status(Response.Status.ACCEPTED).header(RestApiConstants.LOCATION_HEADER, location)
                            .entity(workflowResponse).build();
                }               

            } else {
                String errorMessage = null;
                ExceptionCodes exceptionCode = null;

                exceptionCode = ExceptionCodes.APPLICATION_NOT_FOUND;
                errorMessage = "Application not found";

<<<<<<< HEAD
                APIMgtResourceNotFoundException e = new APIMgtResourceNotFoundException(errorMessage,
                        exceptionCode);
                Map<String, String> paramList = new HashMap<>();
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
        } catch (APIMgtAuthorizationFailedException e) {
            //this occurs when the api:application:tier mapping is not allowed. The reason for the message is taken from
            // the message of the exception e
            RestApiUtil.handleAuthorizationFailure(e.getMessage(), e, log);
        } catch (SubscriptionAlreadyExistingException e) {
            RestApiUtil.handleResourceAlreadyExistsError(
                    "Specified subscription already exists for API " + body.getApiIdentifier() + " for application "
                            + body.getApplicationId(), e, log);
        } catch (APIManagementException | URISyntaxException | UnsupportedEncodingException e) {
            if (RestApiUtil.isDueToResourceNotFound(e)) {
                //this happens when the specified API identifier does not exist
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_API, body.getApiIdentifier(), e, log);
            } else {
                //unhandled exception
                RestApiUtil.handleInternalServerError(
                        "Error while adding the subscription API:" + body.getApiIdentifier() + ", application:" + body
                                .getApplicationId() + ", tier:" + body.getTier(), e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
            }

<<<<<<< HEAD
        } catch (GatewayException e) {
            String errorMessage = "Failed to add subscription of API : " + body.getApiIdentifier() + " to gateway";
            log.error(errorMessage, e);
            return Response.status(Response.Status.ACCEPTED).build();
=======
    /**
     * Gets a subscription by identifier
     *
     * @param subscriptionId  subscription identifier
     * @param accept          Accept header value
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @return matched subscription as a SubscriptionDTO
     */
    @Override
    public Response subscriptionsSubscriptionIdGet(String subscriptionId, String accept, String ifNoneMatch,
                                                   String ifModifiedSince) {
        String username = RestApiUtil.getLoggedInUsername();
        APIConsumer apiConsumer;
        try {
            apiConsumer = RestApiUtil.getConsumer(username);
            SubscribedAPI subscribedAPI = apiConsumer.getSubscriptionByUUID(subscriptionId);
            if (subscribedAPI != null) {
                if (RestAPIStoreUtils.isUserAccessAllowedForSubscription(subscribedAPI)) {
                    SubscriptionDTO subscriptionDTO = SubscriptionMappingUtil.fromSubscriptionToDTO(subscribedAPI);
                    return Response.ok().entity(subscriptionDTO).build();
                } else {
                    RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_SUBSCRIPTION, subscriptionId, log);
                }
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_SUBSCRIPTION, subscriptionId, log);
            }
        } catch (APIManagementException | UnsupportedEncodingException e) {
            RestApiUtil.handleInternalServerError("Error while getting subscription with id " + subscriptionId, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
        catch (APIManagementException e) {
            String errorMessage = "Error while adding subscriptions";
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, body.getApiIdentifier());
            paramList.put(APIMgtConstants.ExceptionsConstants.APPLICATION_ID, body.getApplicationId());
            paramList.put(APIMgtConstants.ExceptionsConstants.TIER, body.getPolicy());
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }  catch (URISyntaxException e) {
            String errorMessage = "Error while adding location header in response for subscription : "
                    + body.getSubscriptionId();
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, body.getSubscriptionId());
            ErrorHandler errorHandler = ExceptionCodes.LOCATION_HEADER_INCORRECT;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler, paramList);
            log.error(errorMessage, e);
            return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
        }

        return Response.status(Response.Status.CREATED).header(RestApiConstants.LOCATION_HEADER, location)
                .entity(subscriptionDTO).build();
    }

    /**
     * Delete a subscription
     *
     * @param subscriptionId    Id of the subscription
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return 200 OK response if the deletion was successful
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response subscriptionsSubscriptionIdDelete(String subscriptionId, String ifMatch,
                                                      String ifUnmodifiedSince, Request request) throws
            NotFoundException {

        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = subscriptionsSubscriptionIdGetFingerprint(subscriptionId, null, null,
                    request);
            if (!StringUtils.isEmpty(ifMatch) && !StringUtils.isEmpty(existingFingerprint) && !ifMatch
                    .contains(existingFingerprint)) {
                return Response.status(Response.Status.PRECONDITION_FAILED).build();
            }

            apiStore.deleteAPISubscription(subscriptionId);
        } catch (GatewayException e) {
            String errorMessage = "Failed to remove subscription :" + subscriptionId + " from gateway";
            log.error(errorMessage, e);
            return Response.status(Response.Status.ACCEPTED).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while deleting subscription";
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, subscriptionId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
        return Response.ok().build();
    }

    /**
     * Retrieves a single subscription
     *
<<<<<<< HEAD
     * @param subscriptionId  Id of the subscription
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Requested subscription DTO as the payload
     * @throws NotFoundException When the particular resource does not exist in the system
=======
     * @param apiId         api identifier
     * @param applicationId application identifier
     * @param groupId       group id
     * @param offset        starting index of the subscription list
     * @param limit         max num of subscriptions returned
     * @param accept        Accept header value
     * @param ifNoneMatch   If-None-Match header value
     * @return LastUpdated time for the resource in UNIX time as a {@link String}
     */
    @Override
    public String subscriptionsGetGetLastUpdatedTime(String apiId, String applicationId, String groupId, Integer offset, Integer limit, String accept, String ifNoneMatch) {
        return null;
    }

    @Override
    public String subscriptionsMultiplePostGetLastUpdatedTime(List<SubscriptionDTO> body, String contentType) {
        return null;
    }

    /**
     * placeholder method
     *
     * @param body        new subscription details
     * @param contentType Content-Type header
     * @return LastUpdated time for the resource in UNIX time as a {@link String}
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
     */
    @Override
    public Response subscriptionsSubscriptionIdGet(String subscriptionId, String ifNoneMatch,
                                                   String ifModifiedSince, Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        SubscriptionDTO subscriptionDTO = null;
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = subscriptionsSubscriptionIdGetFingerprint(subscriptionId, ifNoneMatch,
                    ifModifiedSince, request);
            if (!StringUtils.isEmpty(ifNoneMatch) && !StringUtils.isEmpty(existingFingerprint) && ifNoneMatch
                    .contains(existingFingerprint)) {
                return Response.notModified().build();
            }

<<<<<<< HEAD
            Subscription subscription = apiStore.getSubscriptionByUUID(subscriptionId);
            if (subscription == null) {
                String errorMessage = "Subscription not found : " + subscriptionId;
                APIMgtResourceNotFoundException e = new APIMgtResourceNotFoundException(errorMessage,
                        ExceptionCodes.SUBSCRIPTION_NOT_FOUND);
                HashMap<String, String> paramList = new HashMap<String, String>();
                paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, subscriptionId);
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
            }
            subscriptionDTO = SubscriptionMappingUtil.fromSubscriptionToDTO(subscription);
            return Response.ok().entity(subscriptionDTO)
                    .header(HttpHeaders.ETAG, "\"" + existingFingerprint + "\"")
                    .build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving subscription information - " + subscriptionId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, subscriptionId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
=======
    /**
     * placeholder method
     *
     * @param subscriptionId    subscription identifier
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @return LastUpdated time for the resource in UNIX time as a {@link String}
     */
    @Override
    public String subscriptionsSubscriptionIdDeleteGetLastUpdatedTime(String subscriptionId, String ifMatch,
            String ifUnmodifiedSince) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .getLastUpdatedTimeBySubscriptionId(subscriptionId);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }

    /**
     * Retrieves the fingerprint of a subscription given its UUID
     *
     * @param subscriptionId  Id of the subscription
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return the fingerprint of the subscription
     */
<<<<<<< HEAD
    public String subscriptionsSubscriptionIdGetFingerprint(String subscriptionId, String ifNoneMatch,
            String ifModifiedSince, Request request) {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            String lastUpdatedTime = RestApiUtil.getConsumer(username).getLastUpdatedTimeOfSubscription(subscriptionId);
            return ETagUtils.generateETag(lastUpdatedTime);
        } catch (APIManagementException e) {
            //gives a warning and let it continue the execution
            String errorMessage = "Error while retrieving last updated time of subscription " + subscriptionId;
            log.error(errorMessage, e);
            return null;
        }
=======
    @Override
    public String subscriptionsSubscriptionIdGetGetLastUpdatedTime(String subscriptionId, String accept,
            String ifNoneMatch, String ifModifiedSince) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .getLastUpdatedTimeBySubscriptionId(subscriptionId);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
}
