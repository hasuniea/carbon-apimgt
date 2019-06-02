package org.wso2.carbon.apimgt.rest.api.store.impl;

<<<<<<< HEAD
import java.io.File;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.apimgt.core.api.APIStore;
import org.wso2.carbon.apimgt.core.exception.APIManagementException;
import org.wso2.carbon.apimgt.core.exception.ApiStoreSdkGenerationException;
import org.wso2.carbon.apimgt.core.exception.ErrorHandler;
import org.wso2.carbon.apimgt.core.exception.ExceptionCodes;
import org.wso2.carbon.apimgt.core.impl.ApiStoreSdkGenerationManager;
import org.wso2.carbon.apimgt.core.models.API;
import org.wso2.carbon.apimgt.core.models.Comment;
import org.wso2.carbon.apimgt.core.models.DocumentContent;
import org.wso2.carbon.apimgt.core.models.DocumentInfo;
import org.wso2.carbon.apimgt.core.models.Rating;
import org.wso2.carbon.apimgt.core.models.WSDLArchiveInfo;
import org.wso2.carbon.apimgt.core.util.APIMgtConstants;
import org.wso2.carbon.apimgt.core.util.ETagUtils;
import org.wso2.carbon.apimgt.rest.api.common.RestApiConstants;
import org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.common.util.RestApiUtil;
=======
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.wso2.carbon.apimgt.api.APIConsumer;
import org.wso2.carbon.apimgt.api.APIManagementException;
import org.wso2.carbon.apimgt.api.model.API;
import org.wso2.carbon.apimgt.api.model.APIIdentifier;
import org.wso2.carbon.apimgt.api.model.Documentation;
import org.wso2.carbon.apimgt.api.model.ResourceFile;
import org.wso2.carbon.apimgt.impl.APIClientGenerationException;
import org.wso2.carbon.apimgt.impl.APIClientGenerationManager;
import org.wso2.carbon.apimgt.impl.APIConstants;
import org.wso2.carbon.apimgt.impl.utils.APIUtil;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import org.wso2.carbon.apimgt.rest.api.store.ApisApiService;
import org.wso2.carbon.apimgt.rest.api.store.NotFoundException;
import org.wso2.carbon.apimgt.rest.api.store.dto.APIDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.APIListDTO;
<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.store.dto.CommentDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.CommentListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.DocumentDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.DocumentListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.RatingDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.RatingListDTO;
import org.wso2.carbon.apimgt.rest.api.store.mappings.APIMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.mappings.CommentMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.mappings.DocumentationMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.mappings.RatingMappingUtil;
import org.wso2.msf4j.Request;
=======
import org.wso2.carbon.apimgt.rest.api.store.dto.APIListPaginationDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.DocumentDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.DocumentListDTO;
import org.wso2.carbon.apimgt.rest.api.store.utils.mappings.APIMappingUtil;
import org.wso2.carbon.apimgt.rest.api.store.utils.mappings.DocumentationMappingUtil;
import org.wso2.carbon.apimgt.rest.api.util.RestApiConstants;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestApiUtil;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestAPIStoreUtils;
import org.wso2.carbon.user.api.UserStoreException;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

/**
 * Implementation of APIs resource
 */
public class ApisApiServiceImpl extends ApisApiService {

    private static final Logger log = LoggerFactory.getLogger(ApisApiServiceImpl.class);

    /**
     * Deletes a comment
     *
     * @param commentId         Comment ID
     * @param apiId             API ID
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return 200 response if the deletion was successful
     * @throws NotFoundException if this method is not defined in ApisApiServiceImpl
     */
    @Override
    public Response apisApiIdCommentsCommentIdDelete(String commentId, String apiId, String ifMatch,
                                                     String ifUnmodifiedSince, Request request)
            throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = apisApiIdCommentsCommentIdDeleteFingerprint(commentId, apiId, ifMatch,
                    ifUnmodifiedSince, request);
            if (!StringUtils.isEmpty(ifMatch) && !StringUtils.isEmpty(existingFingerprint) && !ifMatch
                    .contains(existingFingerprint)) {
                return Response.status(Response.Status.PRECONDITION_FAILED).build();
            }
<<<<<<< HEAD
            apiStore.deleteComment(commentId, apiId, username);
=======
            String newSearchQuery = APIUtil.constructNewSearchQuery(query);

            //revert content search back to normal search by name to avoid doc result complexity and to comply with REST api practices
            if (newSearchQuery.startsWith(APIConstants.CONTENT_SEARCH_TYPE_PREFIX + "=")) {
                newSearchQuery = newSearchQuery
                        .replace(APIConstants.CONTENT_SEARCH_TYPE_PREFIX + "=", APIConstants.NAME_TYPE_PREFIX + "=");
            }
            // Append LC state query criteria if the search is not doc or subcontext
            // based
            if (!APIConstants.DOCUMENTATION_SEARCH_TYPE_PREFIX_WITH_EQUALS.startsWith(newSearchQuery) &&
                    !APIConstants.SUBCONTEXT_SEARCH_TYPE_PREFIX.startsWith(newSearchQuery)) {
                boolean displayAPIsWithMultipleStatus = APIUtil.isAllowDisplayAPIsWithMultipleStatus();

                String [] statusList = {APIConstants.PUBLISHED, APIConstants.PROTOTYPED};
                if (displayAPIsWithMultipleStatus) {
                    statusList = new String[]{APIConstants.PUBLISHED, APIConstants.PROTOTYPED, APIConstants.DEPRECATED};
                }

                String lcCriteria = APIConstants.LCSTATE_SEARCH_TYPE_KEY;
                lcCriteria = lcCriteria + APIUtil.getORBasedSearchCriteria(statusList);

                newSearchQuery = newSearchQuery + APIConstants.SEARCH_AND_TAG + lcCriteria;
            }

            Map allMatchedApisMap = apiConsumer
                    .searchPaginatedAPIs(newSearchQuery, requestedTenantDomain, offset, limit, false);
            Set<API> sortedSet = (Set<API>) allMatchedApisMap.get("apis"); // This is a SortedSet
            ArrayList<API> allMatchedApis = new ArrayList<>(sortedSet);

            apiListDTO = APIMappingUtil.fromAPIListToDTO(allMatchedApis);
            APIMappingUtil.setPaginationParams(apiListDTO, query, offset, limit, allMatchedApis.size());

            //Add pagination section in the response
            Object totalLength = allMatchedApisMap.get("length");
            Integer length = 0;
            if(totalLength != null) {
                length = (Integer) totalLength;
            }
            APIListPaginationDTO paginationDTO = new APIListPaginationDTO();
            paginationDTO.setOffset(offset);
            paginationDTO.setLimit(limit);
            paginationDTO.setTotal(length);
            apiListDTO.setPagination(paginationDTO);

            return Response.ok().entity(apiListDTO).build();
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        } catch (APIManagementException e) {
            String errorMessage = "Error while deleting comment with commentId: " + commentId + " of apiID :" + apiId;
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            paramList.put(APIMgtConstants.ExceptionsConstants.COMMENT_ID, commentId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
        return Response.ok().build();
    }

    /**
     * Retrives comments for a given API ID and comment ID
     *
     * @param commentId       Comment ID
     * @param apiId           API ID
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return CommentDTO object
     * @throws NotFoundException if this method is not defined in ApisApiServiceImpl
     */
    @Override
    public Response apisApiIdCommentsCommentIdGet(String commentId, String apiId, String ifNoneMatch,
                                                  String ifModifiedSince, Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = apisApiIdCommentsCommentIdGetFingerprint(commentId, apiId, ifNoneMatch,
                    ifModifiedSince, request);
            if (!StringUtils.isEmpty(ifNoneMatch) && !StringUtils.isEmpty(existingFingerprint) && ifNoneMatch
                    .contains(existingFingerprint)) {
                return Response.notModified().build();
            }
<<<<<<< HEAD
            Comment comment = apiStore.getCommentByUUID(commentId, apiId);
            CommentDTO commentDTO = CommentMappingUtil.fromCommentToDTO(comment);
            return Response.ok().header(HttpHeaders.ETAG,
                    "\"" + existingFingerprint + "\"").entity(commentDTO).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving comment with commentId: " + commentId + " of apiID :" + apiId;
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            paramList.put(APIMgtConstants.ExceptionsConstants.COMMENT_ID, commentId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======

            API api;
            if (RestApiUtil.isUUID(apiId)) {
                api = apiConsumer.getAPIbyUUID(apiId, requestedTenantDomain);
            } else {
                APIIdentifier apiIdentifier = APIMappingUtil.getAPIIdentifierFromApiId(apiId);
                api = apiConsumer.getAPI(apiIdentifier);
            }
            apiToReturn = APIMappingUtil.fromAPItoDTO(api, requestedTenantDomain);
            return Response.ok().entity(apiToReturn).build();
        } catch (APIManagementException e) {
            if (RestApiUtil.isDueToAuthorizationFailure(e)) {
                RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else if (RestApiUtil.isDueToResourceNotFound(e)) {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else {
                String errorMessage = "Error while retrieving API : " + apiId;
                RestApiUtil.handleInternalServerError(errorMessage, e, log);
            }
        } catch (UserStoreException e) {
            String errorMessage = "Error while checking availability of tenant " + requestedTenantDomain;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        } catch (UnsupportedEncodingException e) {
            String errorMessage = "Error while Decoding apiId" + apiId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }

    /**
     * Retrieves the fingerprint of a comment for commentGet
     *
     * @param commentId       Comment ID
     * @param apiId           API ID
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Fingerprint of the comment
     */
    public String apisApiIdCommentsCommentIdGetFingerprint(String commentId, String apiId, String ifNoneMatch,
                                                           String ifModifiedSince, Request request) {
        return getEtag(commentId, request.getProperty("LOGGED_IN_USER").toString());
    }

    /**
     * Retrieves the fingerprint of a comment for commentPut
     *
     * @param commentId         Comment ID
     * @param apiId             API ID
     * @param body              body of the request
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Fingerprint of the comment
     */
    public String apisApiIdCommentsCommentIdPutFingerprint(String commentId, String apiId, CommentDTO body,
                                                           String ifMatch, String ifUnmodifiedSince, Request request) {
        return getEtag(commentId, request.getProperty("LOGGED_IN_USER").toString());
    }

    /**
     * Retrieves the fingerprint of a comment for commentDelete
     *
     * @param commentId         Comment ID
     * @param apiId             API ID
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Fingerprint of the comment
     */
    public String apisApiIdCommentsCommentIdDeleteFingerprint(String commentId, String apiId, String ifMatch,
                                                              String ifUnmodifiedSince, Request request) {
        return getEtag(commentId, request.getProperty("LOGGED_IN_USER").toString());
    }

    /**
     * Retrieves last updatedtime for a comment given the comment id
     *
     * @param commentId    Comment ID
     * @param loggedInUser
     * @return Last updated time
     */
    private String getEtag(String commentId, String loggedInUser) {
        String username = loggedInUser;
        try {
            String lastUpdatedTime = RestApiUtil.getConsumer(username).getLastUpdatedTimeOfComment(commentId);
            return ETagUtils.generateETag(lastUpdatedTime);
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving last updated time of comment " + commentId;
            log.error(errorMessage, e);
            return null;
        }
    }


    /**
     * Retrives A list of comments for a given API ID
     *
     * @param apiId   API ID
     * @param limit   Max number of comments to return
     * @param offset  Starting point of pagination
     * @param request msf4j request object
     * @return CommentListDTO object
     * @throws NotFoundException if this method is not defined in ApisApiServiceImpl
     */
    @Override
    public Response apisApiIdCommentsGet(String apiId, Integer limit, Integer offset, Request request)
            throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            List<Comment> commentList = apiStore.getCommentsForApi(apiId);
            CommentListDTO commentListDTO = CommentMappingUtil.fromCommentListToDTO(commentList, limit, offset);
            return Response.ok().entity(commentListDTO).build();
        } catch (APIManagementException e) {
<<<<<<< HEAD
            String errorMessage = "Error while retrieving comments for api : " + apiId;
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            if (RestApiUtil.isDueToAuthorizationFailure(e)) {
                RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else if (RestApiUtil.isDueToResourceNotFound(e)) {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else {
                RestApiUtil.handleInternalServerError("Error while getting API " + apiId, e, log);
            }
        } catch (UserStoreException e) {
            String errorMessage = "Error while checking availability of tenant " + requestedTenantDomain;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        } catch (UnsupportedEncodingException e) {
            String errorMessage = "Error while Decoding apiId" + apiId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }


    /**
     * Update a comment
     *
     * @param apiId   API ID
     * @param body    comment body
     * @param request msf4j request object
     * @return comment update response
     * @throws NotFoundException if this method is not defined in ApisApiServiceImpl
     */
    @Override
    public Response apisApiIdCommentsPost(String apiId, CommentDTO body, Request request)
            throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            Comment comment = CommentMappingUtil.fromDTOToComment(body, username);
            String createdCommentId = apiStore.addComment(comment, apiId);

            Comment createdComment = apiStore.getCommentByUUID(createdCommentId, apiId);
            CommentDTO createdCommentDTO = CommentMappingUtil.fromCommentToDTO(createdComment);
            URI location = new URI(
                    RestApiConstants.RESOURCE_PATH_APIS + "/" + apiId + RestApiConstants.SUBRESOURCE_PATH_COMMENTS
                            + "/" + createdCommentId);

            String fingerprint = getEtag(comment.getUuid(), request.getProperty("LOGGED_IN_USER").toString());
            return Response.status(Response.Status.CREATED).header(RestApiConstants.LOCATION_HEADER, location).header(HttpHeaders.ETAG,
                    "\"" + fingerprint + "\"").entity(createdCommentDTO)
                    .build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while adding comment to api : " + apiId;
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, body.getApiId());
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        } catch (URISyntaxException e) {
            String errorMessage = "Error while adding location header in response for comment";
            ErrorHandler errorHandler = ExceptionCodes.LOCATION_HEADER_INCORRECT;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler);
            log.error(errorMessage, e);
            return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
        }

    }

<<<<<<< HEAD
    /**
     * @param commentId         Comment ID
     * @param apiId             API ID
     * @param body              comment body
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return comment update response
     * @throws NotFoundException if this method is not defined in ApisApiServiceImpl
     */
    @Override
    public Response apisApiIdCommentsCommentIdPut(String commentId, String apiId, CommentDTO body,
                                                  String ifMatch, String ifUnmodifiedSince, Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = apisApiIdCommentsCommentIdPutFingerprint(commentId, apiId, body, ifMatch,
                    ifUnmodifiedSince, request);
            if (!StringUtils.isEmpty(ifMatch) && !StringUtils.isEmpty(existingFingerprint) && !ifMatch
                    .contains(existingFingerprint)) {
                return Response.status(Response.Status.PRECONDITION_FAILED).build();
=======
            if (!org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                    .isUserAccessAllowedForAPI(apiId, requestedTenantDomain)) {
                RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_API, apiId, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
            }
            Comment comment = CommentMappingUtil.fromDTOToComment(body, username);
            apiStore.updateComment(comment, commentId, apiId, username);

            Comment updatedComment = apiStore.getCommentByUUID(commentId, apiId);
            CommentDTO updatedCommentDTO = CommentMappingUtil.fromCommentToDTO(updatedComment);

            String newFingerprint = getEtag(commentId, request.getProperty("LOGGED_IN_USER").toString());
            return Response.ok().header(HttpHeaders.ETAG,
                    "\"" + newFingerprint + "\"").entity(updatedCommentDTO).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while updating comment : " + commentId;
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, body.getApiId());
            paramList.put(APIMgtConstants.ExceptionsConstants.COMMENT_ID, commentId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }


    /**
     * Retrieves the content of the document
     *
     * @param apiId           API ID
     * @param documentId      Document ID
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return content of the document
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response apisApiIdDocumentsDocumentIdContentGet(String apiId, String documentId,
                                                           String ifNoneMatch, String ifModifiedSince, Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = apisApiIdDocumentsDocumentIdContentGetFingerprint(apiId, documentId,
                    ifNoneMatch, ifModifiedSince, request);
            if (!StringUtils.isEmpty(ifNoneMatch) && !StringUtils.isEmpty(existingFingerprint) && ifNoneMatch
                    .contains(existingFingerprint)) {
                return Response.notModified().build();
            }

            DocumentContent documentationContent = apiStore.getDocumentationContent(documentId);
            DocumentInfo documentInfo = documentationContent.getDocumentInfo();
            if (DocumentInfo.SourceType.FILE.equals(documentInfo.getSourceType())) {
                String filename = documentInfo.getFileName();
                return Response.ok(documentationContent.getFileContent())
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_OCTET_STREAM_TYPE)
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                        .header(HttpHeaders.ETAG, "\"" + existingFingerprint + "\"")
                        .build();
<<<<<<< HEAD
            } else if (DocumentInfo.SourceType.INLINE.equals(documentInfo.getSourceType())) {
                String content = documentationContent.getInlineContent();
=======
            } else if (documentation.getSourceType().equals(Documentation.DocumentSourceType.INLINE) || documentation.getSourceType().equals(Documentation.DocumentSourceType.MARKDOWN)) {
                String content = apiConsumer.getDocumentationContent(apiIdentifier, documentation.getName());
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
                return Response.ok(content)
                        .header(RestApiConstants.HEADER_CONTENT_TYPE, MediaType.TEXT_PLAIN)
                        .header(HttpHeaders.ETAG, "\"" + existingFingerprint + "\"")
                        .build();
            } else if (DocumentInfo.SourceType.URL.equals(documentInfo.getSourceType())) {
                String sourceUrl = documentInfo.getSourceURL();
                return Response.seeOther(new URI(sourceUrl))
                        .header(HttpHeaders.ETAG, "\"" + existingFingerprint + "\"")
                        .build();
            }
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving document " + documentId + " of the API " + apiId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        } catch (URISyntaxException e) {
            String errorMessage = "Error while retrieving source URI location of " + documentId;
<<<<<<< HEAD
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorMessage, 900313L, errorMessage);
            log.error(errorMessage, e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errorDTO).build();
=======
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        } catch (UserStoreException e) {
            String errorMessage = "Error while checking availability of tenant " + requestedTenantDomain;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        }catch (UnsupportedEncodingException e) {
            String errorMessage = "Error while Decoding apiId" + apiId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
        return null;
    }

    /**
     * Retrieves the fingerprint of a document content given its UUID
     *
     * @param apiId           API ID
     * @param documentId      Document ID
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Fingerprint of the document content
     */
    public String apisApiIdDocumentsDocumentIdContentGetFingerprint(String apiId, String documentId, String ifNoneMatch,
                                                                    String ifModifiedSince, Request request) {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
<<<<<<< HEAD
            String lastUpdatedTime = RestApiUtil.getConsumer(username)
                    .getLastUpdatedTimeOfDocumentContent(apiId, documentId);
            return ETagUtils.generateETag(lastUpdatedTime);
        } catch (APIManagementException e) {
            //gives a warning and let it continue the execution
            String errorMessage =
                    "Error while retrieving last updated time of content of document " + documentId + " of API "
                            + apiId;
            log.error(errorMessage, e);
            return null;
=======
            APIConsumer apiConsumer = RestApiUtil.getLoggedInUserConsumer();

            if (!RestApiUtil.isTenantAvailable(requestedTenantDomain)) {
                RestApiUtil.handleBadRequest("Provided tenant domain '" + xWSO2Tenant + "' is invalid", log);
            }

            //this will fail if user does not have access to the API or the API does not exist
            APIIdentifier apiIdentifier = APIMappingUtil.getAPIIdentifierFromApiIdOrUUID(apiId, requestedTenantDomain);

            String apiSwagger = apiConsumer.getOpenAPIDefinition(apiIdentifier);
            apiSwagger = APIUtil.removeXMediationScriptsFromSwagger(apiSwagger);
            return Response.ok().entity(apiSwagger).build();
        } catch (APIManagementException e) {
            if (RestApiUtil.isDueToAuthorizationFailure(e)) {
                RestApiUtil.handleAuthorizationFailure(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else if (RestApiUtil.isDueToResourceNotFound(e)) {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else {
                String errorMessage = "Error while retrieving API : " + apiId;
                RestApiUtil.handleInternalServerError(errorMessage, e, log);
            }
        } catch (UserStoreException e) {
            String errorMessage = "Error while checking availability of tenant " + requestedTenantDomain;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        }catch (UnsupportedEncodingException e) {
            String errorMessage = "Error while Decoding apiId" + apiId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }

    /**
     * Retrives the document identified by the API's ID and the document's ID
     *
<<<<<<< HEAD
     * @param apiId           UUID of API
     * @param documentId      UUID of the document
=======
     * @param apiId           API Id
     * @param xWSO2Tenant     requested tenant domain for cross tenant invocations
     * @param accept          Accept header value
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         minor version header
     * @return the document qualifying for the provided IDs
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
<<<<<<< HEAD
    public Response apisApiIdDocumentsDocumentIdGet(String apiId, String documentId, String ifNoneMatch,
                                                    String ifModifiedSince, Request request) throws NotFoundException {
        DocumentDTO documentDTO = null;
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = apisApiIdDocumentsDocumentIdGetFingerprint(apiId, documentId, ifNoneMatch,
                    ifModifiedSince, request);
            if (!StringUtils.isEmpty(ifNoneMatch) && !StringUtils.isEmpty(existingFingerprint) && ifNoneMatch
                    .contains(existingFingerprint)) {
                return Response.notModified().build();
=======
    public Response apisApiIdThumbnailGet(String apiId, String xWSO2Tenant, String accept, String ifNoneMatch,
            String ifModifiedSince) {
        String requestedTenantDomain = RestApiUtil.getRequestedTenantDomain(xWSO2Tenant);
        try {
            APIConsumer apiConsumer = RestApiUtil.getLoggedInUserConsumer();
            if (!RestApiUtil.isTenantAvailable(requestedTenantDomain)) {
                RestApiUtil.handleBadRequest("Provided tenant domain '" + xWSO2Tenant + "' is invalid", log);
            }
            //this will fail if user does not have access to the API or the API does not exist
            APIIdentifier apiIdentifier = APIMappingUtil.getAPIIdentifierFromApiIdOrUUID(apiId, requestedTenantDomain);
            ResourceFile thumbnailResource = apiConsumer.getIcon(apiIdentifier);

            if (thumbnailResource != null) {
                return Response
                        .ok(thumbnailResource.getContent(), MediaType.valueOf(thumbnailResource.getContentType()))
                        .build();
            } else {
                return Response.noContent().build();
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
            }

            DocumentInfo documentInfo = apiStore.getDocumentationSummary(documentId);
            documentDTO = DocumentationMappingUtil.fromDocumentationToDTO(documentInfo);
            return Response.ok().entity(documentDTO)
                    .header(HttpHeaders.ETAG, "\"" + existingFingerprint + "\"").build();
        } catch (APIManagementException e) {
<<<<<<< HEAD
            String errorMessage =
                    "Error while retrieving documentation for given apiId " + apiId + "with docId " + documentId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            paramList.put(APIMgtConstants.ExceptionsConstants.DOC_ID, documentId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
=======
            //Auth failure occurs when cross tenant accessing APIs. Sends 404, since we don't need to expose the
            // existence of the resource
            if (RestApiUtil.isDueToResourceNotFound(e) || RestApiUtil.isDueToAuthorizationFailure(e)) {
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_API, apiId, e, log);
            } else {
                String errorMessage = "Error while retrieving thumbnail of API : " + apiId;
                RestApiUtil.handleInternalServerError(errorMessage, e, log);
            }
        } catch (UserStoreException e) {
            String errorMessage = "Error while checking availability of tenant " + requestedTenantDomain;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        }catch (UnsupportedEncodingException e) {
            String errorMessage = "Error while Decoding apiId" + apiId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }

    /**
     * Retrieves the fingerprint of the document given its UUID
     *
     * @param apiId           API ID
     * @param documentId      Document ID
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Fingerprint of the document
     */

    public String apisApiIdDocumentsDocumentIdGetFingerprint(String apiId, String documentId, String ifNoneMatch,
                                                             String ifModifiedSince, Request request) {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            String lastUpdatedTime = RestApiUtil.getConsumer(username)
                    .getLastUpdatedTimeOfDocument(documentId);
            return ETagUtils.generateETag(lastUpdatedTime);
        } catch (APIManagementException e) {
<<<<<<< HEAD
            //gives a warning and let it continue the execution
            String errorMessage =
                    "Error while retrieving last updated time of document " + documentId + " of API " + apiId;
            log.error(errorMessage, e);
            return null;
=======
            RestApiUtil.handleResourceNotFoundInTenantError(RestApiConstants.RESOURCE_API, apiId, log, xWSO2Tenant);
        } catch (UnsupportedEncodingException e) {
            String errorMessage = "Error while Decoding apiId" + apiId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        }
        if (apiIdentifier == null) {
            RestApiUtil.handleResourceNotFoundInTenantError(RestApiConstants.RESOURCE_API, apiId, log, xWSO2Tenant);
        }
        APIClientGenerationManager apiClientGenerationManager = new APIClientGenerationManager();
        String supportedSDKLanguages = apiClientGenerationManager.getSupportedSDKLanguages();
        //this condition is to evaluate if the supported language list is non empty
        if (StringUtils.isNotBlank(supportedSDKLanguages)) {
            //this boolean checks if the required language is in the supported language list for SDK generation
            boolean isLanguageSupported = Arrays.asList(supportedSDKLanguages.split(",")).contains(language);
            if (!isLanguageSupported) {
                String errorMessage = "SDK generation is not supported for language : " + language;
                RestApiUtil.handleBadRequest(errorMessage, log);
            }
        } else {
            String errorMessage = "No supported languages for SDK generation.";
            RestApiUtil.handleInternalServerError(errorMessage, log);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        }
    }

    /**
     * Retrieves a list of documents of an API
     *
     * @param apiId       UUID of API
     * @param limit       maximum documents to return
     * @param offset      starting position of the pagination
     * @param ifNoneMatch If-None-Match header value
     * @param request     minor version header
     * @return a list of document DTOs
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response apisApiIdDocumentsGet(String apiId, Integer limit, Integer offset, String ifNoneMatch,
                                          Request request) throws NotFoundException {

        DocumentListDTO documentListDTO = null;
        limit = limit != null ? limit : RestApiConstants.PAGINATION_LIMIT_DEFAULT;
        offset = offset != null ? offset : RestApiConstants.PAGINATION_OFFSET_DEFAULT;
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            List<DocumentInfo> documentInfoResults = apiStore.getAllDocumentation(apiId, offset, limit);
            documentListDTO = DocumentationMappingUtil
                    .fromDocumentationListToDTO(documentInfoResults, offset, limit);
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving documentation for given apiId " + apiId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }

        return Response.ok().entity(documentListDTO).build();
    }

    /**
     * Get API of given ID
     *
     * @param apiId           API ID
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return API of the given ID
     * @throws NotFoundException If failed to get the API
     */
    @Override
<<<<<<< HEAD
    public Response apisApiIdGet(String apiId, String ifNoneMatch, String ifModifiedSince, Request request)
            throws NotFoundException {

        APIDTO apiToReturn = null;
        try {
            String username = RestApiUtil.getLoggedInUsername(request);
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = apisApiIdGetFingerprint(apiId, ifNoneMatch, ifModifiedSince, request);
            if (!StringUtils.isEmpty(ifNoneMatch) && !StringUtils.isEmpty(existingFingerprint) && ifNoneMatch
                    .contains(existingFingerprint)) {
                return Response.notModified().build();
            }

            API api = apiStore.getAPIbyUUID(apiId);
            boolean isWSDLExists = apiStore.isWSDLExists(apiId);
            apiToReturn = APIMappingUtil.toAPIDTO(api);
            if (isWSDLExists) {
                String wsdlUri = RestApiConstants.WSDL_URI_TEMPLATE.replace(RestApiConstants.APIID_PARAM, api.getId());
                apiToReturn.setWsdlUri(wsdlUri);
            }
            return Response.ok().entity(apiToReturn)
                    .header(HttpHeaders.ETAG, "\"" + existingFingerprint + "\"")
                    .build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving API : " + apiId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
=======
    public String apisApiIdDocumentsDocumentIdContentGetGetLastUpdatedTime(String apiId, String documentId,
            String xWSO2Tenant, String accept, String ifNoneMatch, String ifModifiedSince) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .apisApiIdDocumentIdGetLastUpdated(documentId, xWSO2Tenant);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }

    /**
     * Retrieves a list of ratings for given API ID
     *
     * @param apiId   API ID
     * @param limit   response limit
     * @param offset  response offset
     * @param request msf4j request object
     * @return List of Ratings for API
     * @throws NotFoundException if failed to find method implementation
     */
    @Override
<<<<<<< HEAD
    public Response apisApiIdRatingsGet(String apiId, Integer limit, Integer offset, Request request)
            throws NotFoundException {
        double avgRating;
        String username = RestApiUtil.getLoggedInUsername(request);
        int userRatingValue = 0;
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            Rating userRating = apiStore.getRatingForApiFromUser(apiId, username);
            if (userRating != null) {
                userRatingValue = userRating.getRating();
            }
            avgRating = apiStore.getAvgRating(apiId);
            List<Rating> ratingListForApi = apiStore.getRatingsListForApi(apiId);
            List<RatingDTO> ratingDTOList = RatingMappingUtil.fromRatingListToDTOList(ratingListForApi);
            RatingListDTO ratingListDTO = RatingMappingUtil.fromRatingDTOListToRatingListDTO(avgRating, userRatingValue, offset, limit, ratingDTOList);

            return Response.ok().entity(ratingListDTO).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving rating for given API " + apiId;
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
=======
    public String apisApiIdDocumentsDocumentIdGetGetLastUpdatedTime(String apiId, String documentId, String xWSO2Tenant,
            String accept, String ifNoneMatch, String ifModifiedSince) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .apisApiIdDocumentIdGetLastUpdated(documentId, xWSO2Tenant);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }

    @Override
    public Response apisApiIdRatingsRatingIdGet(String apiId, String ratingId, String ifNoneMatch,
                                                String ifModifiedSince, Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            Rating rating = apiStore.getRatingByUUID(apiId, ratingId);
            RatingDTO ratingDTO = RatingMappingUtil.fromRatingToDTO(rating);

            return Response.ok().entity(ratingDTO).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving rating for given API " + apiId;
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            paramList.put(APIMgtConstants.ExceptionsConstants.RATING_ID, ratingId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }
    /**
     * Generates an SDK for a API with provided ID and language
     *
     * @param apiId   API ID
     * @param language   SDK language
     * @param request msf4j request object
     * @return ZIP file for the generated SDK
     * @throws NotFoundException if failed to find method implementation
     */
    @Override
    public Response apisApiIdSdksLanguageGet(String apiId, String language, Request request) throws NotFoundException {
        if (StringUtils.isBlank(apiId) || StringUtils.isBlank(language)) {
            String errorMessage = "API ID or language is not valid";
            log.error(errorMessage);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorMessage, 400L,errorMessage);
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(errorDTO)
                    .build();
        }
        String userName = RestApiUtil.getLoggedInUsername(request);
        ApiStoreSdkGenerationManager sdkGenerationManager = new ApiStoreSdkGenerationManager();
        if (!sdkGenerationManager.getSdkGenLanguages().containsKey(language)) {
            String errorMessage = "Specified language parameter doesn't exist";
            log.error(errorMessage);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorMessage, 400L, errorMessage);
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(errorDTO)
                    .build();
        }
        String tempZipFilePath;
        try {
            tempZipFilePath = sdkGenerationManager.generateSdkForApi(apiId, language, userName);
        } catch (ApiStoreSdkGenerationException e) {
            String errorMessage = "Error while generating SDK for requested language";
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving API for SDK generation " + apiId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
        File sdkZipFile = new File(tempZipFilePath);

        return Response.ok()
                .entity(sdkZipFile)
                .header("Content-Disposition", "attachment; filename=\"" + sdkZipFile.getName() + "\"")
                .build();
    }

    /**
     * Add or update raating to an API
     *
     * @param apiId   APIID
     * @param body    RatingDTO object
     * @param request msf4j request
     * @return 201 response if successful
     * @throws NotFoundException if failed to find method implementation
     */
    @Override
    public Response apisApiIdUserRatingPut(String apiId, RatingDTO body, Request request)
            throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        String ratingId;
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            Rating ratingFromPayload = RatingMappingUtil.fromDTOToRating(username, apiId, body);
            Rating existingRating = apiStore.getRatingForApiFromUser(apiId, username);

            if (existingRating != null) {
                String existingRatingUUID = existingRating.getUuid();
                apiStore.updateRating(apiId, existingRatingUUID, ratingFromPayload);
                Rating updatedRating = apiStore.getRatingByUUID(apiId, existingRatingUUID);
                RatingDTO updatedRatingDTO = RatingMappingUtil.fromRatingToDTO(updatedRating);
                return Response.ok().entity(updatedRatingDTO)
                        .build();
            } else {
                ratingId = apiStore.addRating(apiId, ratingFromPayload);
                Rating createdRating = apiStore.getRatingByUUID(apiId, ratingId);
                RatingDTO createdRatingDTO = RatingMappingUtil.fromRatingToDTO(createdRating);
                URI location = new URI(
                        RestApiConstants.RESOURCE_PATH_APIS + "/" + apiId + RestApiConstants.SUBRESOURCE_PATH_RATINGS
                                + "/" + ratingId);
                return Response.status(Response.Status.CREATED).header(RestApiConstants.LOCATION_HEADER, location)
                        .entity(createdRatingDTO).build();
            }
        } catch (APIManagementException e) {
            String errorMessage =
                    "Error while adding/updating rating for user " + username + " for given API " + apiId;
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        } catch (URISyntaxException e) {
            String errorMessage = "Error while adding location header in response for comment";
            ErrorHandler errorHandler = ExceptionCodes.LOCATION_HEADER_INCORRECT;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler);
            log.error(errorMessage, e);
            return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Retrieves the WSDL of the particular API. If the WSDL is added as a single file/URL, the text content of the WSDL
     * will be retrived. If the WSDL is added as an archive, the binary content of the archive will be retrieved.
     *
     * @param apiId           UUID of API
     * @param labelName       Name of the label
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request
     * @return WSDL archive/file content
     * @throws NotFoundException
     */
    @Override
<<<<<<< HEAD
    public Response apisApiIdWsdlGet(String apiId, String labelName, String ifNoneMatch,
                                     String ifModifiedSince, Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        WSDLArchiveInfo wsdlArchiveInfo = null;
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String wsdlString;
            if (!apiStore.isWSDLExists(apiId)) {
                if (log.isDebugEnabled()) {
                    log.debug("WSDL has no content for API: " + apiId);
                }
                return Response.noContent().build();
            }
            if (StringUtils.isBlank(labelName)) {
                if (log.isDebugEnabled()) {
                    log.debug("Label not provided since retrieving WSDL archive for default label. API: " + apiId);
                }
                labelName = APIMgtConstants.LabelConstants.DEFAULT;
            }

            boolean isWSDLArchiveExists = apiStore.isWSDLArchiveExists(apiId);
            if (log.isDebugEnabled()) {
                log.debug("API has WSDL archive?: " + isWSDLArchiveExists);
            }
            if (isWSDLArchiveExists) {
                wsdlArchiveInfo = apiStore.getAPIWSDLArchive(apiId, labelName);
                if (log.isDebugEnabled()) {
                    log.debug("Successfully retrieved WSDL archive for API: " + apiId);
                }
                //wsdlArchiveInfo will not be null all the time so no need null check
                File archive = new File(wsdlArchiveInfo.getAbsoluteFilePath());
                return Response.ok(archive)
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_OCTET_STREAM_TYPE)
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""
                                + wsdlArchiveInfo.getFileName() + "\"")
                        .build();
            } else {
                wsdlString = apiStore.getAPIWSDL(apiId, labelName);
                if (log.isDebugEnabled()) {
                    log.debug("Successfully retrieved WSDL for API: " + apiId);
                }
                return Response.ok(wsdlString)
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN)
                        .build();
            }
        } catch (APIManagementException e) {
            Map<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error("Error while getting WSDL for API:" + apiId + " and label:" + labelName, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        } finally {
            //Commented below since MSFJ fails to reply when the files are already deleted. Need to fix this properly
            /*
            if (wsdlArchiveInfo != null) {
                try {
                    APIFileUtils.deleteDirectory(wsdlArchiveInfo.getLocation());
                } catch (APIMgtDAOException e) {
                    //This is not a blocker. Give a warning and continue
                    log.warn("Error occured while deleting processed WSDL artifacts folder : " + wsdlArchiveInfo
                            .getLocation());
                }
            }*/
        }
=======
    public String apisApiIdGetGetLastUpdatedTime(String apiId, String accept, String ifNoneMatch,
            String ifModifiedSince, String xWSO2Tenant) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .apisApiIdGetLastUpdated(apiId, xWSO2Tenant);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }

    /**
     * Retrieves the fingerprint of the API given its ID
     *
     * @param apiId           API ID
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Fingerprint of the API
     */
<<<<<<< HEAD
    public String apisApiIdGetFingerprint(String apiId, String ifNoneMatch, String ifModifiedSince,
                                          Request request) {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            String lastUpdatedTime = RestApiUtil.getConsumer(username).getLastUpdatedTimeOfAPI(apiId);
            return ETagUtils.generateETag(lastUpdatedTime);
        } catch (APIManagementException e) {
            //gives a warning and let it continue the execution
            String errorMessage = "Error while retrieving last updated time of API " + apiId;
            log.error(errorMessage, e);
            return null;
        }
=======
    @Override
    public String apisApiIdSwaggerGetGetLastUpdatedTime(String apiId, String accept, String ifNoneMatch,
            String ifModifiedSince, String xWSO2Tenant) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils
                .apisApiIdSwaggerGetLastUpdated(xWSO2Tenant, apiId);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }


    /**
     * Retrieves the swagger definition of an API
     *
     * @param apiId           UUID of API
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         minor version header
     * @return swagger definition of an API
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
<<<<<<< HEAD
    public Response apisApiIdSwaggerGet(String apiId, String ifNoneMatch, String ifModifiedSince,
                                        Request request) throws NotFoundException {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            APIStore apiStore = RestApiUtil.getConsumer(username);
            String existingFingerprint = apisApiIdSwaggerGetFingerprint(apiId, ifNoneMatch, ifModifiedSince, request);
            if (!StringUtils.isEmpty(ifNoneMatch) && !StringUtils.isEmpty(existingFingerprint) && ifNoneMatch
                    .contains(existingFingerprint)) {
                return Response.notModified().build();
            }

            String swagger = apiStore.getApiSwaggerDefinition(apiId);
            return Response.ok().header(HttpHeaders.ETAG, "\"" + existingFingerprint + "\"").entity(swagger).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving swagger definition of API : " + apiId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_ID, apiId);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
=======
    public String apisApiIdThumbnailGetGetLastUpdatedTime(String apiId, String xWSO2Tenant, String accept,
            String ifNoneMatch, String ifModifiedSince) {
        return org.wso2.carbon.apimgt.rest.api.store.utils.RestAPIStoreUtils.apisApiIdThumbnailGetLastUpdated(apiId);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }


    /**
     * Retrieves the fingerprint of the swagger given its API's ID
     *
     * @param apiId           API ID
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Retrieves the fingerprint String of the swagger
     */
    public String apisApiIdSwaggerGetFingerprint(String apiId, String ifNoneMatch, String ifModifiedSince,
                                                 Request request) {
        String username = RestApiUtil.getLoggedInUsername(request);
        try {
            String lastUpdatedTime = RestApiUtil.getConsumer(username).getLastUpdatedTimeOfAPI(apiId);
            return ETagUtils.generateETag(lastUpdatedTime);
        } catch (APIManagementException e) {
            //gives a warning and let it continue the execution
            String errorMessage = "Error while retrieving last updated time of Swagger definition of API :" + apiId;
            log.error(errorMessage, e);
            return null;
        }
    }

    /**
     * Retrieves APIs qualifying under given search condition
     *
     * @param limit       maximum number of APIs returns
     * @param offset      starting index
     * @param labels      Labels of the store for which the apis need to be retrieved
     * @param query       search condition
     * @param ifNoneMatch If-None-Match header value
     * @param request     msf4j request object
     * @return matched APIs for the given search condition
     */

    @Override
    public Response apisGet(Integer limit, Integer offset, String labels, String query, String
            ifNoneMatch, Request request) throws NotFoundException {

        List<API> apisResult = null;
        APIListDTO apiListDTO = null;
        try {
            String username = RestApiUtil.getLoggedInUsername(request);
            APIStore apiStore = RestApiUtil.getConsumer(username);
            Set<String> labelList = new HashSet<>();
            if (labels != null){
                labelList.addAll(Arrays.asList(labels.split(",")));
            }
            apisResult = apiStore.searchAPIsByStoreLabels(query, offset, limit, labelList);
            // convert API
            apiListDTO = APIMappingUtil.toAPIListDTO(apisResult);
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving APIs ";
            HashMap<String, String> paramList = new HashMap<String, String>();
            paramList.put(APIMgtConstants.ExceptionsConstants.API_NAME, query);
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
        return Response.ok().entity(apiListDTO).build();
    }

}
