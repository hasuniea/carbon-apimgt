package org.wso2.carbon.apimgt.rest.api.publisher.impl;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.apimgt.core.api.APIPublisher;
import org.wso2.carbon.apimgt.core.exception.APIManagementException;
import org.wso2.carbon.apimgt.core.exception.APIMgtResourceNotFoundException;
import org.wso2.carbon.apimgt.core.exception.ExceptionCodes;
import org.wso2.carbon.apimgt.core.exception.GatewayException;
import org.wso2.carbon.apimgt.core.models.Subscription;
import org.wso2.carbon.apimgt.core.util.APIMgtConstants;
import org.wso2.carbon.apimgt.core.util.ETagUtils;
import org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.common.util.RestApiUtil;
import org.wso2.carbon.apimgt.rest.api.publisher.NotFoundException;
import org.wso2.carbon.apimgt.rest.api.publisher.SubscriptionsApiService;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.ExtendedSubscriptionDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.SubscriptionDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.SubscriptionListDTO;
<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.publisher.utils.MappingUtil;
import org.wso2.carbon.apimgt.rest.api.publisher.utils.RestAPIPublisherUtil;
import org.wso2.msf4j.Request;

import javax.ws.rs.core.HttpHeaders;
=======
import org.wso2.carbon.apimgt.rest.api.publisher.utils.mappings.APIMappingUtil;
import org.wso2.carbon.apimgt.rest.api.publisher.utils.mappings.SubscriptionMappingUtil;
import org.wso2.carbon.apimgt.rest.api.util.RestApiConstants;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestApiUtil;

import java.io.UnsupportedEncodingException;
import java.util.List;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;

@javax.annotation.Generated(value = "class org.wso2.maven.plugins.JavaMSF4JServerCodegen", date =
        "2016-11-01T13:47:43.416+05:30")
public class SubscriptionsApiServiceImpl extends SubscriptionsApiService {
    private static final Logger log = LoggerFactory.getLogger(SubscriptionsApiService.class);

    /**
     * Block an existing subscription
     *
     * @param subscriptionId    ID of the subscription
     * @param blockState        Subscription block state
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           ms4j request object
     * @return Updated subscription DTO as the response
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response subscriptionsBlockSubscriptionPost(String subscriptionId, String blockState, String ifMatch,
                                                       String ifUnmodifiedSince, Request request) throws
            NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
<<<<<<< HEAD
            APIPublisher apiPublisher = RestAPIPublisherUtil.getApiPublisher(username);
            Subscription subscription = apiPublisher.getSubscriptionByUUID(subscriptionId);
            if (subscription == null) {
                String errorMessage = "Subscription not found : " + subscriptionId;
                APIMgtResourceNotFoundException e = new APIMgtResourceNotFoundException(errorMessage,
                        ExceptionCodes.SUBSCRIPTION_NOT_FOUND);
                HashMap<String, String> paramList = new HashMap<String, String>();
                paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, subscriptionId);
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
            } else if (subscription.getStatus().equals(APIMgtConstants.SubscriptionStatus.REJECTED)
                    || subscription.getStatus().equals(APIMgtConstants.SubscriptionStatus.ON_HOLD)) {
                String errorMessage = "Cannot update subcription from " + subscription.getStatus() + "to " +
                        blockState;
                APIMgtResourceNotFoundException e = new APIMgtResourceNotFoundException(errorMessage,
                        ExceptionCodes.SUBSCRIPTION_STATE_INVALID);
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            APIProvider apiProvider = RestApiUtil.getProvider(username);
            SubscriptionListDTO subscriptionListDTO;
            if (apiId != null) {
                APIIdentifier apiIdentifier = APIMappingUtil.getAPIIdentifierFromApiIdOrUUID(apiId, tenantDomain);
                List<SubscribedAPI> apiUsages = apiProvider.getAPIUsageByAPIId(apiIdentifier);
                subscriptionListDTO = SubscriptionMappingUtil.fromSubscriptionListToDTO(apiUsages, limit, offset);
                SubscriptionMappingUtil.setPaginationParams(subscriptionListDTO, apiId, "", limit, offset,
                        apiUsages.size());
            } else {
                UserApplicationAPIUsage[] allApiUsage = apiProvider.getAllAPIUsageByProvider(username);
                subscriptionListDTO = SubscriptionMappingUtil.fromUserApplicationAPIUsageArrayToDTO(allApiUsage, limit,
                        offset);
                SubscriptionMappingUtil.setPaginationParams(subscriptionListDTO, "", "", limit, offset,
                        allApiUsage.length);
            }
            return Response.ok().entity(subscriptionListDTO).build();
        } catch (APIManagementException | UnsupportedEncodingException e) {
            //Auth failure occurs when cross tenant accessing APIs. Sends 404, since we don't need to expose the
            // existence of the resource
            if (RestApiUtil.isDueToResourceNotFound(e) || RestApiUtil.isDueToAuthorizationFailure(e)) {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else {
                String msg = "Error while retrieving subscriptions of API " + apiId;
                RestApiUtil.handleInternalServerError(msg, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
            }
            apiPublisher.updateSubscriptionStatus(subscriptionId, APIMgtConstants.SubscriptionStatus.valueOf
                    (blockState));
            Subscription newSubscription = apiPublisher.getSubscriptionByUUID(subscriptionId);
            SubscriptionDTO subscriptionDTO = MappingUtil.fromSubscription(newSubscription);
            return Response.ok().entity(subscriptionDTO).build();
        } catch (GatewayException e) {
            String errorMessage = "Failed to block subscription :" + subscriptionId + " in gateway";
            log.error(errorMessage, e);
            return Response.status(Response.Status.ACCEPTED).build();
        }
        catch (APIManagementException e) {
            String errorMessage = "Error while blocking the subscription " + subscriptionId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, subscriptionId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Retrieve all subscriptions for a particular API
     *
     * @param apiId       ID of the API
     * @param limit       Maximum subscriptions to return
     * @param offset      Starting position of the pagination
     * @param ifNoneMatch If-Match header value
     * @param request     ms4j request object
     * @return List of qualifying subscriptions DTOs as the response
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response subscriptionsGet(String apiId, Integer limit, Integer offset, String ifNoneMatch,
            Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        List<Subscription> subscriptionList;
        try {
            APIPublisher apiPublisher = RestAPIPublisherUtil.getApiPublisher(username);
            if (StringUtils.isNotEmpty(apiId)) {
                subscriptionList = apiPublisher.getSubscriptionsByAPI(apiId);
                SubscriptionListDTO subscriptionListDTO = MappingUtil.fromSubscriptionListToDTO(subscriptionList, limit,
                        offset);
                return Response.ok().entity(subscriptionListDTO).build();
            } else {
                RestApiUtil.handleBadRequest("API ID can not be null", log);
            }

<<<<<<< HEAD
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving subscriptions of API " + apiId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            SubscribedAPI subscribedAPI = new SubscribedAPI(subscriptionId);
            subscribedAPI.setSubStatus(blockState);
            apiProvider.updateSubscription(subscribedAPI);

            SubscribedAPI updatedSubscription = apiProvider.getSubscriptionByUUID(subscriptionId);
            SubscriptionDTO subscriptionDTO = SubscriptionMappingUtil.fromSubscriptionToDTO(updatedSubscription);
            return Response.ok().entity(subscriptionDTO).build();
        } catch (APIManagementException | UnsupportedEncodingException e) {
            String msg = "Error while blocking the subscription " + subscriptionId;
            RestApiUtil.handleInternalServerError(msg, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
        return null;
    }

    /**
     * Retrieves a single subscription
     *
     * @param subscriptionId  ID of the subscription
     * @param ifNoneMatch     If-Match header value
     * @param ifModifiedSince If-Modified-Since value
     * @param request         ms4j request object
     * @return Requested subscription details
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response subscriptionsSubscriptionIdGet(String subscriptionId, String ifNoneMatch,
            String ifModifiedSince, Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIPublisher apiPublisher = RestAPIPublisherUtil.getApiPublisher(username);
            String existingFingerprint = subscriptionsSubscriptionIdGetFingerprint(subscriptionId, ifNoneMatch,
                    ifModifiedSince, request);
            if (!StringUtils.isEmpty(ifNoneMatch) && !StringUtils.isEmpty(existingFingerprint) && ifNoneMatch
                    .contains(existingFingerprint)) {
                return Response.notModified().build();
            }

<<<<<<< HEAD
            Subscription subscription = apiPublisher.getSubscriptionByUUID(subscriptionId);
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
            SubscriptionDTO subscriptionDTO = MappingUtil.fromSubscription(subscription);
            return Response.ok().header(HttpHeaders.ETAG, "\"" + existingFingerprint + "\"").entity(subscriptionDTO)
                    .build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while getting the subscription " + subscriptionId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, subscriptionId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            SubscribedAPI subscribedAPI = new SubscribedAPI(subscriptionId);
            subscribedAPI.setSubStatus(APIConstants.SubscriptionStatus.UNBLOCKED);
            apiProvider.updateSubscription(subscribedAPI);

            SubscribedAPI updatedSubscribedAPI = apiProvider.getSubscriptionByUUID(subscriptionId);
            SubscriptionDTO subscriptionDTO = SubscriptionMappingUtil.fromSubscriptionToDTO(updatedSubscribedAPI);
            return Response.ok().entity(subscriptionDTO).build();
        } catch (APIManagementException | UnsupportedEncodingException e) {
            String msg = "Error while unblocking the subscription " + subscriptionId;
            RestApiUtil.handleInternalServerError(msg, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }

    /**
     * Retrieve the fingerprint of the subscription
     *
     * @param subscriptionId  ID of the subscription
     * @param ifNoneMatch     If-Match header value
     * @param ifModifiedSince If-Modified-Since value
     * @param request         ms4j request object
     * @return Fingerprint of the subscription
     */
    public String subscriptionsSubscriptionIdGetFingerprint(String subscriptionId, String ifNoneMatch,
            String ifModifiedSince, Request request) {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            String lastUpdatedTime = RestAPIPublisherUtil.getApiPublisher(username)
                    .getLastUpdatedTimeOfSubscription(subscriptionId);
            return ETagUtils.generateETag(lastUpdatedTime);
        } catch (APIManagementException e) {
            //gives a warning and let it continue the execution
            String errorMessage = "Error while retrieving last updated time of subscription " + subscriptionId;
            log.error(errorMessage, e);
            return null;
        }
    }

    /**
     * @param subscriptionId    ID of the subscription
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Modified-Since value
     * @param request           ms4j request object
     * @return ms4j request object
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response subscriptionsUnblockSubscriptionPost(String subscriptionId, String ifMatch, String
            ifUnmodifiedSince, Request request) throws
            NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
<<<<<<< HEAD
            APIPublisher apiPublisher = RestAPIPublisherUtil.getApiPublisher(username);
            Subscription subscription = apiPublisher.getSubscriptionByUUID(subscriptionId);
            if (subscription == null) {
                String errorMessage = "Subscription not found : " + subscriptionId;
                APIMgtResourceNotFoundException e = new APIMgtResourceNotFoundException(errorMessage,
                        ExceptionCodes.SUBSCRIPTION_NOT_FOUND);
                HashMap<String, String> paramList = new HashMap<String, String>();
                paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, subscriptionId);
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
            } else if (subscription.getStatus().equals(APIMgtConstants.SubscriptionStatus.REJECTED)
                    || subscription.getStatus().equals(APIMgtConstants.SubscriptionStatus.ON_HOLD)) {
                String errorMessage = "Cannot update subcription from " + subscription.getStatus() + "to " +
                        APIMgtConstants.SubscriptionStatus.ACTIVE;
                APIMgtResourceNotFoundException e = new APIMgtResourceNotFoundException(errorMessage,
                        ExceptionCodes.SUBSCRIPTION_STATE_INVALID);
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
                log.error(errorMessage, e);
                return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
            }
            apiPublisher.updateSubscriptionStatus(subscriptionId, APIMgtConstants.SubscriptionStatus.ACTIVE);
            Subscription newSubscription = apiPublisher.getSubscriptionByUUID(subscriptionId);
            SubscriptionDTO subscriptionDTO = MappingUtil.fromSubscription(newSubscription);
            return Response.ok().entity(subscriptionDTO).build();
        } catch (GatewayException e) {
            String errorMessage = "Failed to unblock subscription :" + subscriptionId + " in gateway";
            log.error(errorMessage, e);
            return Response.status(Response.Status.ACCEPTED).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while unblocking the subscription " + subscriptionId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.SUBSCRIPTION_ID, subscriptionId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            apiProvider = RestApiUtil.getProvider(username);
            SubscribedAPI subscribedAPI = apiProvider.getSubscriptionByUUID(subscriptionId);
            if (subscribedAPI != null) {
                String externalWorkflowRefId = null;
                try {
                    externalWorkflowRefId = apiProvider.getExternalWorkflowReferenceId(subscribedAPI.getSubscriptionId());
                } catch (APIManagementException e) {
                    // need not fail if querying workflow reference id throws and error; log and continue
                    log.error("Error while retrieving external workflow reference for subscription id: " +
                            subscriptionId, e);
                }
                ExtendedSubscriptionDTO subscriptionDTO = SubscriptionMappingUtil.
                        fromSubscriptionToExtendedSubscriptionDTO(subscribedAPI, externalWorkflowRefId);
                return Response.ok().entity(subscriptionDTO).build();
            } else {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_SUBSCRIPTION, subscriptionId, log);
            }
        } catch (APIManagementException | UnsupportedEncodingException e) {
            String msg = "Error while getting the subscription " + subscriptionId;
            RestApiUtil.handleInternalServerError(msg, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }
}
