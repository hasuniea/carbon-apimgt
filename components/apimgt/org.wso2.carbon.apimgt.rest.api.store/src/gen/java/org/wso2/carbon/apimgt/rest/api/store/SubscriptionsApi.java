package org.wso2.carbon.apimgt.rest.api.store;

<<<<<<< HEAD
=======
import org.wso2.carbon.apimgt.rest.api.store.dto.*;
import org.wso2.carbon.apimgt.rest.api.store.SubscriptionsApiService;
import org.wso2.carbon.apimgt.rest.api.store.factories.SubscriptionsApiServiceFactory;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

import io.swagger.annotations.ApiParam;

import org.wso2.carbon.apimgt.rest.api.store.dto.ErrorDTO;
<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.store.dto.SubscriptionDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.SubscriptionListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.WorkflowResponseDTO;
import org.wso2.carbon.apimgt.rest.api.store.factories.SubscriptionsApiServiceFactory;

import org.wso2.msf4j.Microservice;
import org.wso2.msf4j.Request;
import org.wso2.msf4j.formparam.FileInfo;
import org.wso2.msf4j.formparam.FormDataParam;
import org.osgi.service.component.annotations.Component;

import java.io.InputStream;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.HEAD;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
=======
import org.wso2.carbon.apimgt.rest.api.store.dto.SubscriptionListDTO;
import java.util.List;
import org.wso2.carbon.apimgt.rest.api.store.dto.SubscriptionDTO;

import java.util.List;

import java.io.InputStream;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.apache.cxf.jaxrs.ext.multipart.Multipart;

import javax.validation.constraints.NotNull;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import javax.ws.rs.core.Response;
import javax.ws.rs.*;

@Component(
    name = "org.wso2.carbon.apimgt.rest.api.store.SubscriptionsApi",
    service = Microservice.class,
    immediate = true
)
@Path("/api/am/store/v1.[\\d]+/subscriptions")
@Consumes({ "application/json" })
@Produces({ "application/json" })
@ApplicationPath("/subscriptions")
@io.swagger.annotations.Api(description = "the subscriptions API")
public class SubscriptionsApi implements Microservice  {
   private final SubscriptionsApiService delegate = SubscriptionsApiServiceFactory.getSubscriptionsApi();

    @OPTIONS
    @GET
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get all subscriptions", notes = "Get subscription list. The API Identifier or Application Identifier the subscriptions of which are to be returned are passed as parameters. ", response = SubscriptionListDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Retrieve", })
=======
    @io.swagger.annotations.ApiOperation(value = "Get all subscriptions\n", notes = "This operation can be used to retrieve a list of subscriptions of the user associated with the provided access token. This operation is capable of\n\n1. Retrieving applications which are subscibed to a specific API.\n`GET https://localhost:9443/api/am/store/v0.14/subscriptions?apiId=c43a325c-260b-4302-81cb-768eafaa3aed`\n\n2. Retrieving APIs which are subscribed by a specific application.\n`GET https://localhost:9443/api/am/store/v0.14/subscriptions?applicationId=c43a325c-260b-4302-81cb-768eafaa3aed`\n\n**IMPORTANT:**\n* It is mandatory to provide either **apiId** or **applicationId**.\n", response = SubscriptionListDTO.class)
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Subscription list returned. ", response = SubscriptionListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource. ", response = SubscriptionListDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = SubscriptionListDTO.class) })
    public Response subscriptionsGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API I. Should be formatted as **provider-name-version**. ",required=true) @QueryParam("apiId") String apiId
,@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @QueryParam("applicationId") String applicationId
,@ApiParam(value = "**API Type** filters information pertaining to a specific type of API ", allowableValues="STANDARD, COMPOSITE") @QueryParam("apiType") String apiType
,@ApiParam(value = "Starting point within the complete list of items qualified. ", defaultValue="0") @DefaultValue("0") @QueryParam("offset") Integer offset
,@ApiParam(value = "Maximum size of resource array to return. ", defaultValue="25") @DefaultValue("25") @QueryParam("limit") Integer limit
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
 ,@Context Request request)
    throws NotFoundException {
        offset=offset==null?Integer.valueOf("0"):offset;
        limit=limit==null?Integer.valueOf("25"):limit;
        
        return delegate.subscriptionsGet(apiId,applicationId,apiType,offset,limit,ifNoneMatch,request);
=======
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported\n") })

    public Response subscriptionsGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API I.\nShould be formatted as **provider-name-version**.\n",required=true) @QueryParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true) @QueryParam("applicationId")  String applicationId,
    @ApiParam(value = "Application Group Id\n") @QueryParam("groupId")  String groupId,
    @ApiParam(value = "Starting point within the complete list of items qualified.\n", defaultValue="0") @QueryParam("offset")  Integer offset,
    @ApiParam(value = "Maximum size of resource array to return.\n", defaultValue="25") @QueryParam("limit")  Integer limit,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource.\n"  )@HeaderParam("If-None-Match") String ifNoneMatch)
    {
    return delegate.subscriptionsGet(apiId,applicationId,groupId,offset,limit,accept,ifNoneMatch);
    }

    public String subscriptionsGetGetLastUpdatedTime(String apiId,String applicationId,String groupId,Integer offset,Integer limit,String accept,String ifNoneMatch)
    {
        return delegate.subscriptionsGetGetLastUpdatedTime(apiId,applicationId,groupId,offset,limit,accept,ifNoneMatch);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
    @Path("/multiple")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Add new subscriptions\n", notes = "This operation can be used to add a new subscriptions providing the ids of the APIs and the applications.\n", response = SubscriptionDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nSuccessful response with the newly created objects as entity in the body.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type.\nThe entity of the request was in a not supported format.\n") })

    public Response subscriptionsMultiplePost(@ApiParam(value = "Subscription objects that should to be added\n" ,required=true ) @NotNull List<SubscriptionDTO> body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType)
    {
    return delegate.subscriptionsMultiplePost(body,contentType);
    }

    public String subscriptionsMultiplePostGetLastUpdatedTime(List<SubscriptionDTO> body,String contentType)
    {
        return delegate.subscriptionsMultiplePostGetLastUpdatedTime(body,contentType);
    }
    @POST
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Add a new subscription", notes = "Add a new subscription ", response = SubscriptionDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Create", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created. Successful response with the newly created object as entity in the body. Location header contains URL of newly created entity. ", response = SubscriptionDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 202, message = "Accepted. The request has been accepted. ", response = SubscriptionDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = SubscriptionDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type. The entity of the request was in a not supported format. ", response = SubscriptionDTO.class) })
    public Response subscriptionsPost(@ApiParam(value = "Subscription object that should to be added " ,required=true) SubscriptionDTO body
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.subscriptionsPost(body,request);
=======
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type.\nThe entity of the request was in a not supported format.\n") })

    public Response subscriptionsPost(@ApiParam(value = "Subscription object that should to be added\n" ,required=true ) @NotNull SubscriptionDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType)
    {
    return delegate.subscriptionsPost(body,contentType);
    }

    public String subscriptionsPostGetLastUpdatedTime(SubscriptionDTO body,String contentType)
    {
        return delegate.subscriptionsPostGetLastUpdatedTime(body,contentType);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @DELETE
    @Path("/{subscriptionId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Remove a subscription", notes = "Remove subscription ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Delete", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Resource successfully deleted. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 202, message = "Accepted. The request has been accepted. ", response = void.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Resource to be deleted does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response subscriptionsSubscriptionIdDelete(@ApiParam(value = "Subscription Id ",required=true) @PathParam("subscriptionId") String subscriptionId
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.subscriptionsSubscriptionIdDelete(subscriptionId,ifMatch,ifUnmodifiedSince,request);
=======
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response subscriptionsSubscriptionIdDelete(@ApiParam(value = "Subscription Id\n",required=true ) @PathParam("subscriptionId")  String subscriptionId,
    @ApiParam(value = "Validator for conditional requests; based on ETag.\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.subscriptionsSubscriptionIdDelete(subscriptionId,ifMatch,ifUnmodifiedSince);
    }

    public String subscriptionsSubscriptionIdDeleteGetLastUpdatedTime(String subscriptionId,String ifMatch,String ifUnmodifiedSince)
    {
        return delegate.subscriptionsSubscriptionIdDeleteGetLastUpdatedTime(subscriptionId,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{subscriptionId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get details of a subscription", notes = "Get subscription details ", response = SubscriptionDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Retrieve", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Subscription returned ", response = SubscriptionDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource. ", response = SubscriptionDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested Subscription does not exist. ", response = SubscriptionDTO.class) })
    public Response subscriptionsSubscriptionIdGet(@ApiParam(value = "Subscription Id ",required=true) @PathParam("subscriptionId") String subscriptionId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.subscriptionsSubscriptionIdGet(subscriptionId,ifNoneMatch,ifModifiedSince,request);
=======
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested Subscription does not exist.\n") })

    public Response subscriptionsSubscriptionIdGet(@ApiParam(value = "Subscription Id\n",required=true ) @PathParam("subscriptionId")  String subscriptionId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource.\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.subscriptionsSubscriptionIdGet(subscriptionId,accept,ifNoneMatch,ifModifiedSince);
    }

    public String subscriptionsSubscriptionIdGetGetLastUpdatedTime(String subscriptionId,String accept,String ifNoneMatch,String ifModifiedSince)
    {
        return delegate.subscriptionsSubscriptionIdGetGetLastUpdatedTime(subscriptionId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
}
