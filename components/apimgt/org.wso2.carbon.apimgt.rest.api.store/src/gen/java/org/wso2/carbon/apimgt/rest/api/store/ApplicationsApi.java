package org.wso2.carbon.apimgt.rest.api.store;

<<<<<<< HEAD

import io.swagger.annotations.ApiParam;

import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationDTO;
=======
import org.wso2.carbon.apimgt.rest.api.store.dto.*;
import org.wso2.carbon.apimgt.rest.api.store.ApplicationsApiService;
import org.wso2.carbon.apimgt.rest.api.store.factories.ApplicationsApiServiceFactory;

import io.swagger.annotations.ApiParam;

import org.wso2.carbon.apimgt.rest.api.store.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ScopeListDTO;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyGenerateRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyMappingRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeysDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeysListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationListDTO;
<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationTokenDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationTokenGenerateRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.WorkflowResponseDTO;
import org.wso2.carbon.apimgt.rest.api.store.factories.ApplicationsApiServiceFactory;

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
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyReGenerateRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyReGenerateResponseDTO;

import java.util.List;

import java.io.InputStream;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.apache.cxf.jaxrs.ext.multipart.Multipart;

import javax.validation.constraints.NotNull;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import javax.ws.rs.core.Response;
import javax.ws.rs.*;

@Component(
    name = "org.wso2.carbon.apimgt.rest.api.store.ApplicationsApi",
    service = Microservice.class,
    immediate = true
)
@Path("/api/am/store/v1.[\\d]+/applications")
@Consumes({ "application/json" })
@Produces({ "application/json" })
@ApplicationPath("/applications")
@io.swagger.annotations.Api(description = "the applications API")
public class ApplicationsApi implements Microservice  {
   private final ApplicationsApiService delegate = ApplicationsApiServiceFactory.getApplicationsApi();

    @OPTIONS
    @DELETE
    @Path("/{applicationId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Delete an application", notes = "Delete an application ", response = void.class, authorizations = {
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
    public Response applicationsApplicationIdDelete(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdDelete(applicationId,ifMatch,ifUnmodifiedSince,request);
=======
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response applicationsApplicationIdDelete(@ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true ) @PathParam("applicationId")  String applicationId,
    @ApiParam(value = "Validator for conditional requests; based on ETag.\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.applicationsApplicationIdDelete(applicationId,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
    @Path("/{applicationId}/generate-keys")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Generate application keys", notes = "Generate keys (Consumer key/secret) for application ", response = ApplicationKeysDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Application (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Keys are generated. ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = ApplicationKeysDTO.class) })
    public Response applicationsApplicationIdGenerateKeysPost(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
,@ApiParam(value = "Application key generation request object " ,required=true) ApplicationKeyGenerateRequestDTO body
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdGenerateKeysPost(applicationId,body,request);
    }
    @OPTIONS
    @POST
    @Path("/{applicationId}/generate-token")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Generate application token", notes = "Generate an access token for application by client_credentials grant type ", response = ApplicationTokenDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Application (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Token is generated. ", response = ApplicationTokenDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ApplicationTokenDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = ApplicationTokenDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = ApplicationTokenDTO.class) })
    public Response applicationsApplicationIdGenerateTokenPost(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
,@ApiParam(value = "Application token generation request object " ,required=true) ApplicationTokenGenerateRequestDTO body
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdGenerateTokenPost(applicationId,body,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @GET
    @Path("/{applicationId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get details of an application", notes = "Get application details ", response = ApplicationDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Retrieve", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Application returned. ", response = ApplicationDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource. ", response = ApplicationDTO.class),
=======
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource.\n"),
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested application does not exist. ", response = ApplicationDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = ApplicationDTO.class) })
    public Response applicationsApplicationIdGet(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdGet(applicationId,ifNoneMatch,ifModifiedSince,request);
=======
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response applicationsApplicationIdGet(@ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true ) @PathParam("applicationId")  String applicationId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource.\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.applicationsApplicationIdGet(applicationId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{applicationId}/keys")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Retrieve all application keys", notes = "Retrieve keys (Consumer key/secret) of application ", response = ApplicationKeysListDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Application (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Keys are returned. ", response = ApplicationKeysListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ApplicationKeysListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource does not exist. ", response = ApplicationKeysListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = ApplicationKeysListDTO.class) })
    public Response applicationsApplicationIdKeysGet(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdKeysGet(applicationId,request);
    }
<<<<<<< HEAD
    @OPTIONS
    @GET
    @Path("/{applicationId}/keys/{keyType}")
=======
    @GET
    @Path("/{applicationId}/keys/{keyType}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get key details of a given type\n", notes = "This operation can be used to retrieve key details of an individual application specifying the key type in the URI.\n", response = ApplicationKeyDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nApplication key details returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested application does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response applicationsApplicationIdKeysKeyTypeGet(@ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true ) @PathParam("applicationId")  String applicationId,
    @ApiParam(value = "**Application Key Type** standing for the type of the keys (i.e. Production or Sandbox).\n",required=true, allowableValues="{values=[PRODUCTION, SANDBOX]}" ) @PathParam("keyType")  String keyType,
    @ApiParam(value = "Application Group Id\n") @QueryParam("groupId")  String groupId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept)
    {
    return delegate.applicationsApplicationIdKeysKeyTypeGet(applicationId,keyType,groupId,accept);
    }

    public String applicationsApplicationIdKeysKeyTypeGetGetLastUpdatedTime(String applicationId,String keyType,String groupId,String accept)
    {
        return delegate.applicationsApplicationIdKeysKeyTypeGetGetLastUpdatedTime(applicationId,keyType,groupId,accept);
    }
    @PUT
    @Path("/{applicationId}/keys/{keyType}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Update grant types and callback url of an application\n", notes = "This operation can be used to update grant types and callback url of an application. (Consumer Key and Consumer Secret are ignored) Upon succesfull you will retrieve the updated key details as the response.\n", response = ApplicationKeyDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "Ok.\nGrant types or/and callback url is/are updated.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response applicationsApplicationIdKeysKeyTypePut(@ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true ) @PathParam("applicationId")  String applicationId,
    @ApiParam(value = "**Application Key Type** standing for the type of the keys (i.e. Production or Sandbox).\n",required=true, allowableValues="{values=[PRODUCTION, SANDBOX]}" ) @PathParam("keyType")  String keyType,
    @ApiParam(value = "Grant types/Callback URL update request object\n" ,required=true ) @NotNull ApplicationKeyDTO body)
    {
    return delegate.applicationsApplicationIdKeysKeyTypePut(applicationId,keyType,body);
    }

    public String applicationsApplicationIdKeysKeyTypePutGetLastUpdatedTime(String applicationId,String keyType,ApplicationKeyDTO body)
    {
        return delegate.applicationsApplicationIdKeysKeyTypePutGetLastUpdatedTime(applicationId,keyType,body);
    }
    @PUT
    @Path("/{applicationId}")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Retrieve application keys for a provided type", notes = "Retrieve keys (Consumer key/secret) of application by a given type ", response = ApplicationKeysDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Application (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Keys of given type are returned. ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource does not exist. ", response = ApplicationKeysDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = ApplicationKeysDTO.class) })
    public Response applicationsApplicationIdKeysKeyTypeGet(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
,@ApiParam(value = "**Application Key Type** standing for the type of the keys (i.e. Production or Sandbox). ",required=true, allowableValues="PRODUCTION, SANDBOX") @PathParam("keyType") String keyType
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdKeysKeyTypeGet(applicationId,keyType,request);
=======
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response applicationsApplicationIdPut(@ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true ) @PathParam("applicationId")  String applicationId,
    @ApiParam(value = "Application object that needs to be updated\n" ,required=true ) @NotNull ApplicationDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag.\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.applicationsApplicationIdPut(applicationId,body,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @PUT
    @Path("/{applicationId}/keys/{keyType}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Update an application key", notes = "Update grant types and callback url (Consumer Key and Consumer Secret are ignored) ", response = ApplicationKeysDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Application (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "Ok. Grant types or/and callback url is/are updated. ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = ApplicationKeysDTO.class) })
    public Response applicationsApplicationIdKeysKeyTypePut(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
,@ApiParam(value = "**Application Key Type** standing for the type of the keys (i.e. Production or Sandbox). ",required=true, allowableValues="PRODUCTION, SANDBOX") @PathParam("keyType") String keyType
,@ApiParam(value = "Grant types/Callback URL update request object " ,required=true) ApplicationKeysDTO body
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdKeysKeyTypePut(applicationId,keyType,body,request);
    }
<<<<<<< HEAD
    @OPTIONS
=======
    @GET
    @Path("/{applicationId}/scopes")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get scopes associated with a particular application based on subscribed APIs\n", notes = "Get scopes associated with a particular application based on subscribed APIs\n", response = ScopeListDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nScope returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 401, message = "Un authorized.\nThe user is not authorized to view the application .\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested application does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response applicationsApplicationIdScopesGet(@ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true ) @PathParam("applicationId")  String applicationId,
    @ApiParam(value = "Filter user by roles.\n") @QueryParam("filterByUserRoles")  Boolean filterByUserRoles,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource.\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.applicationsApplicationIdScopesGet(applicationId,filterByUserRoles,ifNoneMatch,ifModifiedSince);
    }

    public String applicationsApplicationIdScopesGetGetLastUpdatedTime(String applicationId,Boolean filterByUserRoles,String ifNoneMatch,String ifModifiedSince)
    {
        return delegate.applicationsApplicationIdScopesGetGetLastUpdatedTime(applicationId,filterByUserRoles,ifNoneMatch,ifModifiedSince);
    }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    @POST
    @Path("/{applicationId}/map-keys")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Map application keys", notes = "Map keys (Consumer key/secret) to an application ", response = ApplicationKeysDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Application (Individual)", })
=======
    @io.swagger.annotations.ApiOperation(value = "Generate keys for application\n", notes = "This operation can be used to generate client ID and client secret for an application\n\n**NOTE**\n\n* This operation does not require the client ID and the client secret by default.\n* When using credentials from a third party key manager, you can generate access tokens by providing only the client ID or both the client ID and the client secret.\n", response = ApplicationKeyDTO.class)
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Keys are mapped. ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ApplicationKeysDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = ApplicationKeysDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = ApplicationKeysDTO.class) })
    public Response applicationsApplicationIdMapKeysPost(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
,@ApiParam(value = "Application key mapping request object " ,required=true) ApplicationKeyMappingRequestDTO body
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdMapKeysPost(applicationId,body,request);
=======
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met (Will be supported in future).\n") })

    public Response applicationsGenerateKeysPost(@ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true) @QueryParam("applicationId")  String applicationId,
    @ApiParam(value = "Application object the keys of which are to be generated\n" ,required=true ) @NotNull ApplicationKeyGenerateRequestDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag.\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.applicationsGenerateKeysPost(applicationId,body,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @PUT
    @Path("/{applicationId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Update an application", notes = "Update application details ", response = ApplicationDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Update", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Application updated. ", response = ApplicationDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ApplicationDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = ApplicationDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = ApplicationDTO.class) })
    public Response applicationsApplicationIdPut(@ApiParam(value = "**Application Identifier** consisting of the UUID of the Application. ",required=true) @PathParam("applicationId") String applicationId
,@ApiParam(value = "Application object that needs to be updated " ,required=true) ApplicationDTO body
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsApplicationIdPut(applicationId,body,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @GET
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get all applications", notes = "Get a list of applications ", response = ApplicationListDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Application (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Application list returned. ", response = ApplicationListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource. ", response = ApplicationListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = ApplicationListDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported. ", response = ApplicationListDTO.class) })
    public Response applicationsGet(@ApiParam(value = "**Search condition**.  You can search for an application by specifying the name as \"query\" attribute.  Eg. \"app1\" will match an application if the name is exactly \"app1\".  Currently this does not support wildcards. Given name must exactly match the application name. ") @QueryParam("query") String query
,@ApiParam(value = "Maximum size of resource array to return. ", defaultValue="25") @DefaultValue("25") @QueryParam("limit") Integer limit
,@ApiParam(value = "Starting point within the complete list of items qualified. ", defaultValue="0") @DefaultValue("0") @QueryParam("offset") Integer offset
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
 ,@Context Request request)
    throws NotFoundException {
        limit=limit==null?Integer.valueOf("25"):limit;
        offset=offset==null?Integer.valueOf("0"):offset;
        
        return delegate.applicationsGet(query,limit,offset,ifNoneMatch,request);
=======
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported.\n") })

    public Response applicationsGet(@ApiParam(value = "Application Group Id\n") @QueryParam("groupId")  String groupId,
    @ApiParam(value = "**Search condition**.\n\nYou can search for an application by specifying the name as \"query\" attribute.\n\nEg.\n\"app1\" will match an application if the name is exactly \"app1\".\n\nCurrently this does not support wildcards. Given name must exactly match the application name.\n") @QueryParam("query")  String query,
    @ApiParam(value = "Maximum size of resource array to return.\n", defaultValue="25") @QueryParam("limit")  Integer limit,
    @ApiParam(value = "Starting point within the complete list of items qualified.\n", defaultValue="0") @QueryParam("offset")  Integer offset,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource.\n"  )@HeaderParam("If-None-Match") String ifNoneMatch)
    {
    return delegate.applicationsGet(groupId,query,limit,offset,accept,ifNoneMatch);
    }

    public String applicationsGetGetLastUpdatedTime(String groupId,String query,Integer limit,Integer offset,String accept,String ifNoneMatch)
    {
        return delegate.applicationsGetGetLastUpdatedTime(groupId,query,limit,offset,accept,ifNoneMatch);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Create a new application", notes = "Create a new application. ", response = ApplicationDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:subscribe", description = "Subscribe API")
        })
    }, tags={ "Create", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created. Successful response with the newly created object as entity in the body. Location header contains URL of newly created entity. ", response = ApplicationDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 202, message = "Accepted. The request has been accepted. ", response = ApplicationDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ApplicationDTO.class),
        
<<<<<<< HEAD
        @io.swagger.annotations.ApiResponse(code = 409, message = "Conflict. Application already exists. ", response = ApplicationDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type. The entity of the request was in a not supported format. ", response = ApplicationDTO.class) })
    public Response applicationsPost(@ApiParam(value = "Application object that is to be created. " ,required=true) ApplicationDTO body
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.applicationsPost(body,request);
=======
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type.\nThe entity of the request was in a not supported format.\n") })

    public Response applicationsPost(@ApiParam(value = "Application object that is to be created.\n" ,required=true ) @NotNull ApplicationDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType)
    {
    return delegate.applicationsPost(body,contentType);
    }

    public String applicationsPostGetLastUpdatedTime(ApplicationDTO body,String contentType)
    {
        return delegate.applicationsPostGetLastUpdatedTime(body,contentType);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @POST
    @Path("/regenerate-consumersecret")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Re generate consumer secret for an application\n", notes = "This operation can be used to re generate consumer secret for an application\n", response = ApplicationKeyReGenerateResponseDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nKeys are re generated.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met (Will be supported in future).\n") })

    public Response applicationsRegenerateConsumersecretPost(@ApiParam(value = "The consumer key associated with the application\n" ,required=true ) @NotNull ApplicationKeyReGenerateRequestDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType)
    {
    return delegate.applicationsRegenerateConsumersecretPost(body,contentType);
    }

    public String applicationsRegenerateConsumersecretPostGetLastUpdatedTime(ApplicationKeyReGenerateRequestDTO body,String contentType)
    {
        return delegate.applicationsRegenerateConsumersecretPostGetLastUpdatedTime(body,contentType);
    }
    @GET
    @Path("/scopes/{applicationId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get scopes associated with a particular application based on subscribed APIs\n", notes = "Get scopes associated with a particular application based on subscribed APIs\n", response = ScopeListDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nScope returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 401, message = "Un authorized.\nThe user is not authorized to view the application .\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested application does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response applicationsScopesApplicationIdGet(@ApiParam(value = "Application Identifier consisting of the UUID of the Application.\n",required=true ) @PathParam("applicationId")  String applicationId,
    @ApiParam(value = "Filter user by roles.\n") @QueryParam("filterByUserRoles")  Boolean filterByUserRoles,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource.\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.applicationsScopesApplicationIdGet(applicationId,filterByUserRoles,ifNoneMatch,ifModifiedSince);
    }

    public String applicationsScopesApplicationIdGetGetLastUpdatedTime(String applicationId,Boolean filterByUserRoles,String ifNoneMatch,String ifModifiedSince)
    {
        return delegate.applicationsScopesApplicationIdGetGetLastUpdatedTime(applicationId,filterByUserRoles,ifNoneMatch,ifModifiedSince);
    }
}
