package org.wso2.carbon.apimgt.rest.api.publisher;

<<<<<<< HEAD

import io.swagger.annotations.ApiParam;

import org.wso2.carbon.apimgt.rest.api.publisher.dto.APIDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.APIDefinitionValidationResponseDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.APIListDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.DedicatedGatewayDTO;
=======
import org.wso2.carbon.apimgt.rest.api.publisher.dto.*;
import org.wso2.carbon.apimgt.rest.api.publisher.ApisApiService;
import org.wso2.carbon.apimgt.rest.api.publisher.factories.ApisApiServiceFactory;

import io.swagger.annotations.ApiParam;

import org.wso2.carbon.apimgt.rest.api.publisher.dto.ErrorDTO;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import org.wso2.carbon.apimgt.rest.api.publisher.dto.DocumentDTO;
import java.io.File;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.DocumentListDTO;
<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.publisher.dto.ErrorDTO;
import java.io.File;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.FileInfoDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.LifecycleStateDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.ScopeDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.ScopeListDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.WorkflowResponseDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.factories.ApisApiServiceFactory;

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
import javax.ws.rs.core.Response;
=======
import org.wso2.carbon.apimgt.rest.api.publisher.dto.APIDetailedDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.MediationListDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.MediationDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.ResourcePolicyListDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.ResourcePolicyInfoDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.FileInfoDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.WsdlDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.APIListDTO;

import java.util.List;

import java.io.InputStream;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.apache.cxf.jaxrs.ext.multipart.Multipart;

import javax.ws.rs.core.Response;
import javax.ws.rs.*;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

@Component(
    name = "org.wso2.carbon.apimgt.rest.api.publisher.ApisApi",
    service = Microservice.class,
    immediate = true
)
@Path("/api/am/publisher/v1.[\\d]+/apis")
@Consumes({ "application/json" })
@Produces({ "application/json" })
<<<<<<< HEAD
@ApplicationPath("/apis")
@io.swagger.annotations.Api(description = "the apis API")
public class ApisApi implements Microservice  {
=======
@io.swagger.annotations.Api(value = "/apis", description = "the apis API")
public class ApisApi  {

>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
   private final ApisApiService delegate = ApisApiServiceFactory.getApisApi();

    @OPTIONS
    @GET
    @Path("/{apiId}/dedicated-gateway")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get enability of dedicatedGateway", notes = "This operation can be used to retrieve whether the dedicated gateway is enabled in a certain API. ", response = DedicatedGatewayDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "DedicatedGateway (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. isEnabled of dedicated Gateway returned ", response = DedicatedGatewayDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = DedicatedGatewayDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested Dedicated Gateway does not exist. ", response = DedicatedGatewayDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported. ", response = DedicatedGatewayDTO.class) })
    public Response apisApiIdDedicatedGatewayGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDedicatedGatewayGet(apiId,ifNoneMatch,ifModifiedSince,request);
    }
    @OPTIONS
    @PUT
    @Path("/{apiId}/dedicated-gateway")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Update enabling of dedicated Gateway of API", notes = "This operation can be used to update metadata of an API's dedicatedGateway. ", response = DedicatedGatewayDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:dedicated_gateway", description = "Update Dedicated Gateway")
        })
    }, tags={ "DedicatedGateway (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Dedicated Gateway of API updated ", response = DedicatedGatewayDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = DedicatedGatewayDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = DedicatedGatewayDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = DedicatedGatewayDTO.class) })
    public Response apisApiIdDedicatedGatewayPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "dedicated Gateway object that needs to be added " ,required=true) DedicatedGatewayDTO body
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDedicatedGatewayPut(apiId,body,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @DELETE
    @Path("/{apiId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Delete an API", notes = "This operation can be used to delete an existing API proving the Id of the API. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_delete", description = "Delete API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Resource successfully deleted. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden. The request must be conditional but no condition has been specified. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Resource to be deleted does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response apisApiIdDelete(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDelete(apiId,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Delete an API", notes = "This operation can be used to delete an existing API proving the Id of the API.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nResource successfully deleted.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden.\nThe request must be conditional but no condition has been specified.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nResource to be deleted does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdDelete(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdDelete(apiId,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/documents/{documentId}/content")
    @Consumes({ "application/json" })
<<<<<<< HEAD
    @Produces({ "application/octet-stream" })
    @io.swagger.annotations.ApiOperation(value = "Get the content of an API document", notes = "This operation can be used to retrive the content of an API's document.  The document can be of 3 types. In each cases responses are different.  1. **Inline type**:    The content of the document will be retrieved in `text/plain` content type 2. **FILE type**:    The file will be downloaded with the related content type (eg. `application/pdf`) 3. **URL type**:     The client will recieve the URL of the document as the Location header with the response with - `303 See Other` ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "Document (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. File or inline content returned. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 303, message = "See Other. Source can be retrived from the URL specified at the Location header. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested Document does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = void.class) })
    public Response apisApiIdDocumentsDocumentIdContentGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Document Identifier ",required=true) @PathParam("documentId") String documentId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDocumentsDocumentIdContentGet(apiId,documentId,ifNoneMatch,ifModifiedSince,request);
=======
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get the content of an API document", notes = "This operation can be used to retrive the content of an API's document.\n\nThe document can be of 3 types. In each cases responses are different.\n\n1. **Inline type**:\n   The content of the document will be retrieved in `text/plain` content type\n\n   _Sample cURL_ : `curl -k -H \"Authorization:Bearer 579f0af4-37be-35c7-81a4-f1f1e9ee7c51\" -F inlineContent=@\"docs.txt\" -X POST \"https://localhost:9443/api/am/publisher/v0.14/apis/995a4972-3178-4b17-a374-756e0e19127c/documents/43c2bcce-60e7-405f-bc36-e39c0c5e189e/content`\n2. **FILE type**:\n   The file will be downloaded with the related content type (eg. `application/pdf`)\n3. **URL type**:\n    The client will recieve the URL of the document as the Location header with the response with - `303 See Other`\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nFile or inline content returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 303, message = "See Other.\nSource can be retrived from the URL specified at the Location header.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested Document does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdDocumentsDocumentIdContentGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Document Identifier\n",required=true ) @PathParam("documentId")  String documentId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdDocumentsDocumentIdContentGet(apiId,documentId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
    @Path("/{apiId}/documents/{documentId}/content")
    @Consumes({ "multipart/form-data" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Upload the content of an API document", notes = "Thid operation can be used to upload a file or add inline content to an API document.  **IMPORTANT:** * Either **file** or **inlineContent** form data parameters should be specified at one time. * Document's source type should be **FILE** in order to upload a file to the document using **file** parameter. * Document's source type should be **INLINE** in order to add inline content to the document using **inlineContent** parameter. ", response = DocumentDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_create", description = "Create API")
        })
    }, tags={ "Document (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Document updated ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = DocumentDTO.class) })
    public Response apisApiIdDocumentsDocumentIdContentPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Document Identifier ",required=true) @PathParam("documentId") String documentId
,
            @FormDataParam("file") InputStream fileInputStream,
            @FormDataParam("file") FileInfo fileDetail
,@ApiParam(value = "Inline content of the document")@FormDataParam("inlineContent")  String inlineContent
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDocumentsDocumentIdContentPost(apiId,documentId,fileInputStream, fileDetail,inlineContent,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Upload the content of an API document", notes = "Thid operation can be used to upload a file or add inline content to an API document.\n\n**IMPORTANT:**\n* Either **file** or **inlineContent** form data parameters should be specified at one time.\n* Document's source type should be **FILE** in order to upload a file to the document using **file** parameter.\n* Document's source type should be **INLINE** in order to add inline content to the document using **inlineContent** parameter.\n", response = DocumentDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nDocument updated\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdDocumentsDocumentIdContentPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Document Identifier\n",required=true ) @PathParam("documentId")  String documentId,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Document to upload") @Multipart(value = "file", required = false) InputStream fileInputStream,
    @ApiParam(value = "Document to upload : details") @Multipart(value = "file" , required = false) Attachment fileDetail,
    @ApiParam(value = "Inline content of the document" )@Multipart(value = "inlineContent", required = false)  String inlineContent,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdDocumentsDocumentIdContentPost(apiId,documentId,contentType,fileInputStream,fileDetail,inlineContent,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @DELETE
    @Path("/{apiId}/documents/{documentId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Delete a document of an API", notes = "This operation can be used to delete a document associated with an API. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_delete", description = "Delete API")
        })
    }, tags={ "Document (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Resource successfully deleted. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Resource to be deleted does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response apisApiIdDocumentsDocumentIdDelete(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Document Identifier ",required=true) @PathParam("documentId") String documentId
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDocumentsDocumentIdDelete(apiId,documentId,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Delete a document of an API", notes = "This operation can be used to delete a document associated with an API.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nResource successfully deleted.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nResource to be deleted does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdDocumentsDocumentIdDelete(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Document Identifier\n",required=true ) @PathParam("documentId")  String documentId,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdDocumentsDocumentIdDelete(apiId,documentId,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/documents/{documentId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get a document of an API", notes = "This operation can be used to retrieve a particular document's metadata associated with an API. ", response = DocumentDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "Document (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Document returned. ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested Document does not exist. ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = DocumentDTO.class) })
    public Response apisApiIdDocumentsDocumentIdGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Document Identifier ",required=true) @PathParam("documentId") String documentId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDocumentsDocumentIdGet(apiId,documentId,ifNoneMatch,ifModifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Get a document of an API", notes = "This operation can be used to retrieve a particular document's metadata associated with an API.\n", response = DocumentDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nDocument returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested Document does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdDocumentsDocumentIdGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Document Identifier\n",required=true ) @PathParam("documentId")  String documentId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdDocumentsDocumentIdGet(apiId,documentId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @PUT
    @Path("/{apiId}/documents/{documentId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Update a document of an API", notes = "This operation can be used to update metadata of an API's document. ", response = DocumentDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_update", description = "Update API")
        })
    }, tags={ "Document (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Document updated ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = DocumentDTO.class) })
    public Response apisApiIdDocumentsDocumentIdPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Document Identifier ",required=true) @PathParam("documentId") String documentId
,@ApiParam(value = "Document object that needs to be added " ,required=true) DocumentDTO body
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDocumentsDocumentIdPut(apiId,documentId,body,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Update a document of an API", notes = "This operation can be used to update metadata of an API's document.\n", response = DocumentDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nDocument updated\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdDocumentsDocumentIdPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Document Identifier\n",required=true ) @PathParam("documentId")  String documentId,
    @ApiParam(value = "Document object that needs to be added\n" ,required=true ) DocumentDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdDocumentsDocumentIdPut(apiId,documentId,body,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/documents")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get a list of documents of an API", notes = "This operation can be used to retrieve a list of documents belonging to an API by providing the id of the API. ", response = DocumentListDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "Document (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Document list is returned. ", response = DocumentListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = DocumentListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = DocumentListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = DocumentListDTO.class) })
    public Response apisApiIdDocumentsGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Maximum size of resource array to return. ", defaultValue="25") @DefaultValue("25") @QueryParam("limit") Integer limit
,@ApiParam(value = "Starting point within the complete list of items qualified. ", defaultValue="0") @DefaultValue("0") @QueryParam("offset") Integer offset
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
 ,@Context Request request)
    throws NotFoundException {
        limit=limit==null?Integer.valueOf("25"):limit;
        offset=offset==null?Integer.valueOf("0"):offset;
        
        return delegate.apisApiIdDocumentsGet(apiId,limit,offset,ifNoneMatch,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Get a list of documents of an API", notes = "This operation can be used to retrive a list of documents belonging to an API by providing the id of the API.\n", response = DocumentListDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nDocument list is returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested API does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdDocumentsGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Maximum size of resource array to return.\n", defaultValue="25") @QueryParam("limit")  Integer limit,
    @ApiParam(value = "Starting point within the complete list of items qualified.\n", defaultValue="0") @QueryParam("offset")  Integer offset,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch)
    {
    return delegate.apisApiIdDocumentsGet(apiId,limit,offset,accept,ifNoneMatch);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
    @Path("/{apiId}/documents")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Add a new document to an API", notes = "This operation can be used to add a new documentation to an API. This operation only adds the metadata of a document. To add the actual content we need to use **Upload the content of an API document ** API once we obtain a document Id by this operation. ", response = DocumentDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_create", description = "Create API")
        })
    }, tags={ "Document (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created. Successful response with the newly created Document object as entity in the body. Location header contains URL of newly added document. ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = DocumentDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type. The entity of the request was in a not supported format. ", response = DocumentDTO.class) })
    public Response apisApiIdDocumentsPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Document object that needs to be added " ,required=true) DocumentDTO body
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdDocumentsPost(apiId,body,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Add a new document to an API", notes = "This operation can be used to add a new documentation to an API. This operation only adds the metadata of a document. To add the actual content we need to use **Upload the content of an API document ** API once we obtain a document Id by this operation.\n", response = DocumentDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created.\nSuccessful response with the newly created Document object as entity in the body.\nLocation header contains URL of newly added document.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type.\nThe entity of the request was in a not supported format.\n") })

    public Response apisApiIdDocumentsPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Document object that needs to be added\n" ,required=true ) DocumentDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType)
    {
    return delegate.apisApiIdDocumentsPost(apiId,body,contentType);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/gateway-config")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get gateway definition", notes = "This operation can be used to retrieve the gateway configuration of an API. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Requested gateway configuration of the API is returned ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = void.class) })
    public Response apisApiIdGatewayConfigGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdGatewayConfigGet(apiId,ifNoneMatch,ifModifiedSince,request);
    }
    @OPTIONS
    @PUT
    @Path("/{apiId}/gateway-config")
    @Consumes({ "multipart/form-data" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Update gateway configuration", notes = "This operation can be used to update the gateway configuration of an existing API. gateway configuration to be updated is passed as a form data parameter `gatewayConfig`. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:apidef_update", description = "Update API Definition")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Successful response with updated gateway configuration ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden. The request must be conditional but no condition has been specified. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response apisApiIdGatewayConfigPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "gateway configuration of the API", required=true)@FormDataParam("gatewayConfig")  String gatewayConfig
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdGatewayConfigPut(apiId,gatewayConfig,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @GET
    @Path("/{apiId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get details of an API", notes = "Using this operation, you can retrieve complete details of a single API. You need to provide the Id of the API to retrive it. ", response = APIDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Requested API is returned ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = APIDTO.class) })
    public Response apisApiIdGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdGet(apiId,ifNoneMatch,ifModifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Get details of an API", notes = "Using this operation, you can retrieve complete details of a single API. You need to provide the Id of the API to retrive it.\n", response = APIDetailedDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nRequested API is returned\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested API does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdGet(apiId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/lifecycle")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get Lifecycle state data of the API.", notes = "This operation can be used to retrieve Lifecycle state data of the API. ", response = LifecycleStateDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_publish", description = "Publish API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Lifecycle state data returned successfully. ", response = LifecycleStateDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = LifecycleStateDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = LifecycleStateDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = LifecycleStateDTO.class) })
    public Response apisApiIdLifecycleGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdLifecycleGet(apiId,ifNoneMatch,ifModifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Get all mediation policies of an API\n", notes = "This operation provides you a list of available mediation policies of an API.\n", response = MediationListDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nList of qualifying APIs is returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdPoliciesMediationGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Maximum size of resource array to return.\n", defaultValue="25") @QueryParam("limit")  Integer limit,
    @ApiParam(value = "Starting point within the complete list of items qualified.\n", defaultValue="0") @QueryParam("offset")  Integer offset,
    @ApiParam(value = "-Not supported yet-") @QueryParam("query")  String query,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch)
    {
    return delegate.apisApiIdPoliciesMediationGet(apiId,limit,offset,query,accept,ifNoneMatch);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/lifecycle-history")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get Lifecycle state change history of the API.", notes = "This operation can be used to retrieve Lifecycle state change history of the API. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_publish", description = "Publish API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Lifecycle state change history returned successfully. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response apisApiIdLifecycleHistoryGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdLifecycleHistoryGet(apiId,ifNoneMatch,ifModifiedSince,request);
    }
    @OPTIONS
    @DELETE
    @Path("/{apiId}/lifecycle/lifecycle-pending-task")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Delete pending lifecycle state change tasks.", notes = "This operation can be used to remove pending lifecycle state change requests that are in pending state ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_publish", description = "Publish API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Lifecycle state change pending task removed successfully. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response apisApiIdLifecycleLifecyclePendingTaskDelete(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdLifecycleLifecyclePendingTaskDelete(apiId,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Delete an API specific mediation policy", notes = "This operation can be used to delete an existing API specific mediation policy providing the Id of the API and the Id of the mediation policy.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nResource successfully deleted.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden.\nThe request must be conditional but no condition has been specified.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nResource to be deleted does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdPoliciesMediationMediationPolicyIdDelete(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Mediation policy Id\n",required=true ) @PathParam("mediationPolicyId")  String mediationPolicyId,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdPoliciesMediationMediationPolicyIdDelete(apiId,mediationPolicyId,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @PUT
    @Path("/{apiId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Update an API", notes = "This operation can be used to update an existing API. But the properties `name`, `version`, `context`, `provider`, `state` will not be changed by this operation. ", response = APIDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_update", description = "Update API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Successful response with updated API object ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden. The request must be conditional but no condition has been specified. ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = APIDTO.class) })
    public Response apisApiIdPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "API object that needs to be added " ,required=true) APIDTO body
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdPut(apiId,body,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/scopes")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get a list of scopes of an API", notes = "This operation can be used to retrieve a list of scopes belonging to an API by providing the id of the API. ", response = ScopeListDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "Scope (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Scope list is returned. ", response = ScopeListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = ScopeListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = ScopeListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = ScopeListDTO.class) })
    public Response apisApiIdScopesGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdScopesGet(apiId,ifNoneMatch,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Get an API specific mediation policy", notes = "This operation can be used to retrieve a particular API specific mediation policy.\n", response = MediationDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nMediation policy returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested Document does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdPoliciesMediationMediationPolicyIdGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Mediation policy Id\n",required=true ) @PathParam("mediationPolicyId")  String mediationPolicyId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdPoliciesMediationMediationPolicyIdGet(apiId,mediationPolicyId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @DELETE
    @Path("/{apiId}/scopes/{name}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Delete a scope of an API", notes = "This operation can be used to delete a scope associated with an API. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_delete", description = "Delete API")
        })
    }, tags={ "Scope (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Resource successfully deleted. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Resource to be deleted does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response apisApiIdScopesNameDelete(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Scope name ",required=true) @PathParam("name") String name
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdScopesNameDelete(apiId,name,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Update an API specific mediation policy", notes = "This operation can be used to update an existing mediation policy of an API.\n", response = MediationDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nSuccessful response with updated API object\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden.\nThe request must be conditional but no condition has been specified.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdPoliciesMediationMediationPolicyIdPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Mediation policy Id\n",required=true ) @PathParam("mediationPolicyId")  String mediationPolicyId,
    @ApiParam(value = "Mediation policy object that needs to be updated\n" ,required=true ) MediationDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdPoliciesMediationMediationPolicyIdPut(apiId,mediationPolicyId,body,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/scopes/{name}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get a scope of an API", notes = "This operation can be used to retrieve a particular scope's metadata associated with an API. ", response = ScopeDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "Scope (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Scope returned. ", response = ScopeDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = ScopeDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested Scope does not exist. ", response = ScopeDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = ScopeDTO.class) })
    public Response apisApiIdScopesNameGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Scope name ",required=true) @PathParam("name") String name
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdScopesNameGet(apiId,name,ifNoneMatch,ifModifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Add an API specific mediation policy", notes = "This operation can be used to add an API specifc mediation policy.\n", response = MediationDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nmediation policy uploaded\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdPoliciesMediationPost(@ApiParam(value = "mediation policy to upload" ,required=true ) MediationDTO body,
    @ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdPoliciesMediationPost(body,apiId,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @PUT
    @Path("/{apiId}/scopes/{name}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Update a Scope of an API", notes = "This operation can be used to update scope of an API ", response = ScopeDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_update", description = "Update API")
        })
    }, tags={ "Scope (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Scope updated ", response = ScopeDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = ScopeDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = ScopeDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = ScopeDTO.class) })
    public Response apisApiIdScopesNamePut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Scope name ",required=true) @PathParam("name") String name
,@ApiParam(value = "Scope object that needs to be added " ,required=true) ScopeDTO body
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdScopesNamePut(apiId,name,body,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @POST
    @Path("/{apiId}/scopes")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Add a new scope to an API", notes = "This operation can be used to add a new scope to an API. ", response = ScopeDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_create", description = "Create API")
        })
    }, tags={ "Scope (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created. Successful response with the newly created Scope object as entity in the body. Location header contains URL of newly added scope. ", response = ScopeDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = ScopeDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type. The entity of the request was in a not supported format. ", response = ScopeDTO.class) })
    public Response apisApiIdScopesPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Scope object that needs to be added " ,required=true) ScopeDTO body
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdScopesPost(apiId,body,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Update an API", notes = "This operation can be used to update an existing API.\nBut the properties `name`, `version`, `context`, `provider`, `state` will not be changed by this operation.\n", response = APIDetailedDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nSuccessful response with updated API object\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden.\nThe request must be conditional but no condition has been specified.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "API object that needs to be added\n" ,required=true ) APIDetailedDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdPut(apiId,body,contentType,ifMatch,ifUnmodifiedSince);
    }
    @GET
    @Path("/{apiId}/resource-policies")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get the resource policy (inflow/outflow) definitions", notes = "This operation can be used to retrieve conversion policy resource definitions of an API.\n", response = ResourcePolicyListDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nList of resource policy definitions of the API is returned\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested API does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdResourcePoliciesGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "sequence type of the resource policy resource definition",required=true) @QueryParam("sequenceType")  String sequenceType,
    @ApiParam(value = "Resource path of the resource policy definition") @QueryParam("resourcePath")  String resourcePath,
    @ApiParam(value = "HTTP verb of the resource path of the resource policy definition") @QueryParam("verb")  String verb,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdResourcePoliciesGet(apiId,sequenceType,resourcePath,verb,accept,ifNoneMatch,ifModifiedSince);
    }
    @GET
    @Path("/{apiId}/resource-policies/{resourceId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Get the resource policy (inflow/outflow) definition for a given resource identifier.", notes = "This operation can be used to retrieve conversion policy resource definitions of an API given the resource identifier.\n", response = ResourcePolicyInfoDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nRequested resource policy definition of the API is returned for the given resource identifier.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested API does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdResourcePoliciesResourceIdGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "registry resource Id\n",required=true ) @PathParam("resourceId")  String resourceId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdResourcePoliciesResourceIdGet(apiId,resourceId,accept,ifNoneMatch,ifModifiedSince);
    }
    @PUT
    @Path("/{apiId}/resource-policies/{resourceId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Update the resource policy(inflow/outflow) definition for the given resource identifier", notes = "This operation can be used to update the resource policy(inflow/outflow) definition for the given resource identifier of an existing API. resource policy definition to be updated is passed as a body parameter `content`.\n", response = ResourcePolicyInfoDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nSuccessful response with updated the resource policy definition\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden.\nThe request must be conditional but no condition has been specified.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdResourcePoliciesResourceIdPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "registry resource Id\n",required=true ) @PathParam("resourceId")  String resourceId,
    @ApiParam(value = "Content of the resource policy definition that needs to be updated" ,required=true ) ResourcePolicyInfoDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdResourcePoliciesResourceIdPut(apiId,resourceId,body,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/swagger")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get swagger definition", notes = "This operation can be used to retrieve the swagger definition of an API. ", response = String.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Requested swagger document of the API is returned ", response = String.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = String.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = String.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = String.class) })
    public Response apisApiIdSwaggerGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdSwaggerGet(apiId,ifNoneMatch,ifModifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Get swagger definition", notes = "This operation can be used to retrieve the swagger definition of an API.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nRequested swagger document of the API is returned\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested API does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdSwaggerGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdSwaggerGet(apiId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @PUT
    @Path("/{apiId}/swagger")
    @Consumes({ "multipart/form-data" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Update swagger definition", notes = "This operation can be used to update the swagger definition of an existing API. Swagger definition to be updated is passed as a form data parameter `apiDefinition`. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:apidef_update", description = "Update API Definition")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Successful response with updated Swagger definition ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden. The request must be conditional but no condition has been specified. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response apisApiIdSwaggerPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Swagger definition of the API", required=true)@FormDataParam("endpointId")  String endpointId
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdSwaggerPut(apiId,endpointId,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Update swagger definition", notes = "This operation can be used to update the swagger definition of an existing API. Swagger definition to be updated is passed as a form data parameter `apiDefinition`.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nSuccessful response with updated Swagger definition\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden.\nThe request must be conditional but no condition has been specified.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdSwaggerPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Swagger definition of the API", required=true )@Multipart(value = "apiDefinition")  String apiDefinition,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdSwaggerPut(apiId,apiDefinition,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @DELETE
    @Path("/{apiId}/threat-protection-policies")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Delete a threat protection policy from an API", notes = "", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "Ok. Policy deleted successfully.", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Specified API or Policy not found", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 500, message = "Error while deleting the policy", response = void.class) })
    public Response apisApiIdThreatProtectionPoliciesDelete(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Threat protection policy id",required=true) @QueryParam("policyId") String policyId
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdThreatProtectionPoliciesDelete(apiId,policyId,request);
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/threat-protection-policies")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get all threat protection policies associated with an API", notes = "", response = String.class, responseContainer = "List", authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "Ok. List of policy ids is returned", response = String.class, responseContainer = "List"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Specified API was not found.", response = String.class, responseContainer = "List"),
        
        @io.swagger.annotations.ApiResponse(code = 500, message = "Error retrieving threat protection policies", response = String.class, responseContainer = "List") })
    public Response apisApiIdThreatProtectionPoliciesGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdThreatProtectionPoliciesGet(apiId,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Get thumbnail image", notes = "This operation can be used to download a thumbnail image of an API.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nThumbnail image returned\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested Document does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdThumbnailGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdThumbnailGet(apiId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
    @Path("/{apiId}/threat-protection-policies")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Add a threat protection policy to an API", notes = "", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_update", description = "Update API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "Ok. Policy added succesfuly.", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Specified API or Policy not found", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 500, message = "Internal server error while adding policy", response = void.class) })
    public Response apisApiIdThreatProtectionPoliciesPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Threat protection policy id",required=true) @QueryParam("policyId") String policyId
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdThreatProtectionPoliciesPost(apiId,policyId,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Upload a thumbnail image", notes = "This operation can be used to upload a thumbnail image of an API. The thumbnail to be uploaded should be given as a form data parameter `file`.\n", response = FileInfoDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nImage updated\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdThumbnailPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Image to upload") @Multipart(value = "file") InputStream fileInputStream,
    @ApiParam(value = "Image to upload : details") @Multipart(value = "file" ) Attachment fileDetail,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdThumbnailPost(apiId,fileInputStream,fileDetail,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/thumbnail")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get thumbnail image", notes = "This operation can be used to download a thumbnail image of an API. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Thumbnail image returned ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested Document does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = void.class) })
    public Response apisApiIdThumbnailGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdThumbnailGet(apiId,ifNoneMatch,ifModifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Get the WSDL of an API", notes = "This operation can be used to retrieve the WSDL definition of an API.\n", response = WsdlDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nRequested WSDL DTO object belongs to the API\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested API does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisApiIdWsdlGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header of the\nformerly retrieved variant of the resource (Will be supported in future).\n"  )@HeaderParam("If-Modified-Since") String ifModifiedSince)
    {
    return delegate.apisApiIdWsdlGet(apiId,accept,ifNoneMatch,ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
<<<<<<< HEAD
    @Path("/{apiId}/thumbnail")
    @Consumes({ "multipart/form-data" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Upload a thumbnail image", notes = "This operation can be used to upload a thumbnail image of an API. The thumbnail to be uploaded should be given as a form data parameter `file`. ", response = FileInfoDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_update", description = "Update API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Image updated ", response = FileInfoDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = FileInfoDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = FileInfoDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = FileInfoDTO.class) })
    public Response apisApiIdThumbnailPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,
            @FormDataParam("file") InputStream fileInputStream,
            @FormDataParam("file") FileInfo fileDetail
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdThumbnailPost(apiId,fileInputStream, fileDetail,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @GET
    @Path("/{apiId}/wsdl")
    @Consumes({ "application/json" })
    @Produces({ "application/octet-stream" })
    @io.swagger.annotations.ApiOperation(value = "Get swagger definition", notes = "This operation can be used to retrieve the swagger definition of an API. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Requested WSDL document of the API is returned ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = void.class) })
    public Response apisApiIdWsdlGet(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdWsdlGet(apiId,ifNoneMatch,ifModifiedSince,request);
    }
    @OPTIONS
    @PUT
    @Path("/{apiId}/wsdl")
    @Consumes({ "multipart/form-ldata" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Update WSDL definition", notes = "This operation can be used to update the WSDL definition of an existing API. WSDL to be updated is passed as a form data parameter `inlineContent`. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_create", description = "Create API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Successful response with updated WSDL definition ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden. The request must be conditional but no condition has been specified. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response apisApiIdWsdlPut(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API ID. Should be formatted as **provider-name-version**. ",required=true) @PathParam("apiId") String apiId
,
            @FormDataParam("file") InputStream fileInputStream,
            @FormDataParam("file") FileInfo fileDetail
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisApiIdWsdlPut(apiId,fileInputStream, fileDetail,ifMatch,ifUnmodifiedSince,request);
=======
    @Path("/{apiId}/wsdl")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Add a WSDL to an API", notes = "This operation can be used to add a WSDL definition to an existing API.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nSuccessful response with updated wsdl definition\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 403, message = "Forbidden.\nThe request must be conditional but no condition has been specified.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisApiIdWsdlPost(@ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API ID.\nShould be formatted as **provider-name-version**.\n",required=true ) @PathParam("apiId") @Encoded String apiId,
    @ApiParam(value = "JSON payload including WSDL definition that needs to be added\n" ,required=true ) WsdlDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisApiIdWsdlPost(apiId,body,contentType,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
    @Path("/change-lifecycle")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Change API Status", notes = "This operation is used to change the lifecycle of an API. Eg: Publish an API which is in `CREATED` state. In order to change the lifecycle, we need to provide the lifecycle `action` as a query parameter.  For example, to Publish an API, `action` should be `Publish`.  Some actions supports providing additional paramters which should be provided as `lifecycleChecklist` parameter. Please see parameters table for more information. ", response = WorkflowResponseDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_publish", description = "Publish API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Lifecycle changed successfully. ", response = WorkflowResponseDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 202, message = "Accepted. The request has been accepted. ", response = WorkflowResponseDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = WorkflowResponseDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API does not exist. ", response = WorkflowResponseDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 409, message = "Conflict. Pending workflow task exists. ", response = WorkflowResponseDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = WorkflowResponseDTO.class) })
    public Response apisChangeLifecyclePost(@ApiParam(value = "The action to demote or promote the state of the API.  Supported actions are [ **Publish, Deploy as a Prototype, Demote to Created, Demote to Prototyped, Move to Maintenance, Deprecate, Re-Publish, Retire **] ",required=true, allowableValues="Publish, Deploy as a Prototype, Demote to Created, Demote to Prototyped, Move to Maintenance, Deprecate, Re-Publish, Retire") @QueryParam("action") String action
,@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API I. Should be formatted as **provider-name-version**. ",required=true) @QueryParam("apiId") String apiId
,@ApiParam(value = " You can specify additional checklist items by using an **\"attribute:\"** modifier.  Eg: \"Deprecate Old Versions:true\" will deprecate older versions of a particular API when it is promoted to Published state from Created state. Multiple checklist items can be given in \"attribute1:true, attribute2:false\" format.  Supported checklist items are as follows. 1. **Deprecate Old Versions**: Setting this to true will deprecate older versions of a particular API when it is promoted to Published state from Created state. 2. **Require Re-Subscription**: If you set this to true, users need to re subscribe to the API although they may have subscribed to an older version. ") @QueryParam("lifecycleChecklist") String lifecycleChecklist
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisChangeLifecyclePost(action,apiId,lifecycleChecklist,ifMatch,ifUnmodifiedSince,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Change API Status", notes = "This operation is used to change the lifecycle of an API. Eg: Publish an API which is in `CREATED` state. In order to change the lifecycle, we need to provide the lifecycle `action` as a query parameter.\n\nFor example, to Publish an API, `action` should be `Publish`. Note that the `Re-publish` action is available only after calling `Block`.\n\nSome actions supports providing additional paramters which should be provided as `lifecycleChecklist` parameter. Please see parameters table for more information.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nLifecycle changed successfully.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nRequested API does not exist.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed.\nThe request has not been performed because one of the preconditions is not met.\n") })

    public Response apisChangeLifecyclePost(@ApiParam(value = "The action to demote or promote the state of the API.\n\nSupported actions are [ **Publish, Deploy as a Prototype, Demote to Created, Demote to Prototyped, Block, Deprecate, Re-Publish, Retire **]\n",required=true, allowableValues="{values=[Publish, Deploy as a Prototype, Demote to Created, Demote to Prototyped, Block, Deprecate, Re-Publish, Retire]}") @QueryParam("action")  String action,
    @ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API I.\nShould be formatted as **provider-name-version**.\n",required=true) @QueryParam("apiId") @Encoded String apiId,
    @ApiParam(value = "\nSupported checklist items are as follows.\n1. **Deprecate Old Versions**: Setting this to true will deprecate older versions of a particular API when it is promoted to Published state from Created state.\n2. **Require Re-Subscription**: If you set this to true, users need to re subscribe to the API although they may have subscribed to an older version.\n\nYou can specify additional checklist items by using an **\"attribute:\"** modifier.\n\nEg: \"Deprecate Old Versions:true\" will deprecate older versions of a particular API when it is promoted to Published state from Created state. Multiple checklist items can be given in \"attribute1:true, attribute2:false\" format.\n\n**Sample CURL :**  curl -k -H \"Authorization: Bearer ae4eae22-3f65-387b-a171-d37eaa366fa8\" -X POST \"https://localhost:9443/api/am/publisher/v0.14/apis/change-lifecycle?apiId=890a4f4d-09eb-4877-a323-57f6ce2ed79b&action=Publish&lifecycleChecklist=Deprecate Old Versions:true,Require Re-Subscription:true\"\n") @QueryParam("lifecycleChecklist")  String lifecycleChecklist,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.apisChangeLifecyclePost(action,apiId,lifecycleChecklist,ifMatch,ifUnmodifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @POST
    @Path("/copy-api")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Create a new API version", notes = "This operation can be used to create a new version of an existing API. The new version is specified as `newVersion` query parameter. New API will be in `CREATED` state. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_create", description = "Create API")
        })
    }, tags={ "API (Individual)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created. Successful response with the newly created API as entity in the body. Location header contains URL of newly created API. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. API to copy does not exist. ", response = void.class) })
    public Response apisCopyApiPost(@ApiParam(value = "Version of the new API.",required=true) @QueryParam("newVersion") String newVersion
,@ApiParam(value = "**API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API I. Should be formatted as **provider-name-version**. ",required=true) @QueryParam("apiId") String apiId
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisCopyApiPost(newVersion,apiId,request);
=======
    @io.swagger.annotations.ApiOperation(value = "Create a new API version", notes = "This operation can be used to create a new version of an existing API. The new version is specified as `newVersion` query parameter. New API will be in `CREATED` state.\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created.\nSuccessful response with the newly created API as entity in the body. Location header contains URL of newly created API.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n"),
        
        @io.swagger.annotations.ApiResponse(code = 401, message = "Unauthenticated request.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nAPI to copy does not exist.\n") })

    public Response apisCopyApiPost(@ApiParam(value = "Version of the new API.",required=true) @QueryParam("newVersion")  String newVersion,
    @ApiParam(value = "**API ID** consisting of the **UUID** of the API. Using the **UUID** in the API call is recommended.\nThe combination of the provider of the API, name of the API and the version is also accepted as a valid API I.\nShould be formatted as **provider-name-version**.\n",required=true) @QueryParam("apiId") @Encoded String apiId)
    {
    return delegate.apisCopyApiPost(newVersion,apiId);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @GET
    
    @Consumes({ "application/json" })
<<<<<<< HEAD
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Retrieve/Search APIs ", notes = "This operation provides you a list of available APIs qualifying under a given search condition.  Each retrieved API is represented with a minimal amount of attributes. If you want to get complete details of an API, you need to use **Get details of an API** operation. ", response = APIListDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. List of qualifying APIs is returned. ", response = APIListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource (Will be supported in future). ", response = APIListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = APIListDTO.class) })
    public Response apisGet(@ApiParam(value = "Maximum size of resource array to return. ", defaultValue="25") @DefaultValue("25") @QueryParam("limit") Integer limit
,@ApiParam(value = "Starting point within the complete list of items qualified. ", defaultValue="0") @DefaultValue("0") @QueryParam("offset") Integer offset
,@ApiParam(value = "**Search condition**.  You can search in attributes by using an **\"<attribute>:\"** modifier.  Eg. \"provider:wso2\" will match an API if the provider of the API is exactly \"wso2\".  Additionally you can use wildcards.  Eg. \"provider:wso2*\" will match an API if the provider of the API starts with \"wso2\".  Supported attribute modifiers are [**version, context, lifeCycleStatus, description, subcontext, doc, provider**]  If no advanced attribute modifier has been specified, search will match the given query string against API Name. ") @QueryParam("query") String query
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
 ,@Context Request request)
    throws NotFoundException {
        limit=limit==null?Integer.valueOf("25"):limit;
        offset=offset==null?Integer.valueOf("0"):offset;
        
        return delegate.apisGet(limit,offset,query,ifNoneMatch,request);
=======
    @Produces({ "application/json", "application/gzip" })
    @io.swagger.annotations.ApiOperation(value = "Retrieve/Search APIs\n", notes = "This operation provides you a list of available APIs qualifying under a given search condition.\n\nEach retrieved API is represented with a minimal amount of attributes. If you want to get complete details of an API, you need to use **Get details of an API** operation.\n", response = APIListDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nList of qualifying APIs is returned.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified.\nEmpty body because the client has already the latest version of the requested resource (Will be supported in future).\n"),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable.\nThe requested media type is not supported\n") })

    public Response apisGet(@ApiParam(value = "Maximum size of resource array to return.\n", defaultValue="25") @QueryParam("limit")  Integer limit,
    @ApiParam(value = "Starting point within the complete list of items qualified.\n", defaultValue="0") @QueryParam("offset")  Integer offset,
    @ApiParam(value = "**Search condition**.\n\nYou can search in attributes by using an **\"<attribute>:\"** modifier.\n\nEg.\n\"provider:wso2\" will match an API if the provider of the API is exactly \"wso2\".\n\"status:PUBLISHED\" will match an API if the API is in PUBLISHED state.\n\"label:external\" will match an API if it contains a Microgateway label called \"external\".\n\nAdditionally you can use wildcards.\n\nEg.\n\"provider:wso2*\" will match an API if the provider of the API starts with \"wso2\".\n\nSupported attribute modifiers are [**version, context, status,\ndescription, subcontext, doc, provider, label**]\n\nIf no advanced attribute modifier has been specified,  the API names containing\nthe search term will be returned as a result.\n") @QueryParam("query")  String query,
    @ApiParam(value = "Media types acceptable for the response. Default is application/json.\n"  , defaultValue="application/json")@HeaderParam("Accept") String accept,
    @ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved\nvariant of the resource (Will be supported in future).\n"  )@HeaderParam("If-None-Match") String ifNoneMatch,
    @ApiParam(value = "Defines whether the returned response should contain full details of API\n") @QueryParam("expand")  Boolean expand,
    @ApiParam(value = "Tenant domain, whose APIs should be retrieved. If not specified, the logged in user's tenant domain will\nbe considered for this.\n") @QueryParam("tenantDomain")  String tenantDomain)
    {
    return delegate.apisGet(limit,offset,query,accept,ifNoneMatch,expand,tenantDomain);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
    @OPTIONS
    @HEAD
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Check given API attibute name is already exist ", notes = "Using this operation, you can check a given API context is already used. You need to provide the context name you want to check. ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_view", description = "View API")
        })
    }, tags={ "API (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Requested API attibute status is returned ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Requested API attribute does not meet requiremnts. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested API attribute does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported ", response = void.class) })
    public Response apisHead(@ApiParam(value = "**Search condition**.  You can search in attributes by using an **\"<attribute>:\"** modifier.  Eg. \"provider:wso2\" will match an API if the provider of the API is exactly \"wso2\".  Additionally you can use wildcards.  Eg. \"provider:wso2*\" will match an API if the provider of the API starts with \"wso2\".  Supported attribute modifiers are [**version, context, lifeCycleStatus, description, subcontext, doc, provider**]  If no advanced attribute modifier has been specified, search will match the given query string against API Name. ") @QueryParam("query") String query
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisHead(query,ifNoneMatch,request);
    }
    @OPTIONS
    @POST
<<<<<<< HEAD
    @Path("/import-definition")
    @Consumes({ "multipart/form-data" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Import API Definition", notes = "This operation can be used to create api from api definition.  API definition can be either Swagger or a WSDL  WSDL can be speficied as a single file or a ZIP archive with WSDLs and reference XSDs etc. When the type is WSDL, it is a **must** to specify additionalProperties with API's name, version, context and endpoints. See the example for additionalProperties. ", response = APIDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_create", description = "Create API")
        })
    }, tags={ "API (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created. Successful response with the newly created object as entity in the body. Location header contains URL of newly created entity. ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported Media Type. The entity of the request was in a not supported format. ", response = APIDTO.class) })
    public Response apisImportDefinitionPost(@ApiParam(value = "Definition type to upload", allowableValues="SWAGGER, WSDL", defaultValue="SWAGGER")@FormDataParam("type")  String type
,
            @FormDataParam("file") InputStream fileInputStream,
            @FormDataParam("file") FileInfo fileDetail
,@ApiParam(value = "Definition url")@FormDataParam("url")  String url
,@ApiParam(value = "Additional attributes specified as a stringified JSON with API's schema")@FormDataParam("additionalProperties")  String additionalProperties
,@ApiParam(value = "Currently this is only used when creating an API using a WSDL.  If 'SOAP' is specified, the API will be created with only one resource 'POST /' which is to be used for SOAP operations.  If 'HTTP_BINDING' is specified, the API will be created with resources using HTTP binding operations which are extracted from the WSDL. ", allowableValues="soap, httpBinding", defaultValue="SOAP")@FormDataParam("implementationType")  String implementationType
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        type=type==null?String.valueOf("SWAGGER"):type;
        implementationType=implementationType==null?String.valueOf("SOAP"):implementationType;
        
        return delegate.apisImportDefinitionPost(type,fileInputStream, fileDetail,url,additionalProperties,implementationType,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @POST
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Create a new API", notes = "This operation can be used to create a new API specifying the details of the API in the payload. The new API will be in `CREATED` state.  There is a special capability for a user who has `APIM Admin` permission such that he can create APIs on behalf of other users. For that he can to specify `\"provider\" : \"some_other_user\"` in the payload so that the API's creator will be shown as `some_other_user` in the UI. ", response = APIDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_create", description = "Create API")
        })
    }, tags={ "API (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created. Successful response with the newly created object as entity in the body. Location header contains URL of newly created entity. ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = APIDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported Media Type. The entity of the request was in a not supported format. ", response = APIDTO.class) })
    public Response apisPost(@ApiParam(value = "API object that needs to be added " ,required=true) APIDTO body
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.apisPost(body,request);
    }
    @OPTIONS
    @POST
    @Path("/validate-definition")
    @Consumes({ "multipart/form-data" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Validate API definition and retrieve a summary", notes = "This operation can be used to validate a swagger or WSDL definition and retrieve a summary. ", response = APIDefinitionValidationResponseDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:api_create", description = "Create API")
        })
    }, tags={ "API (Collection)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. API definition validation information is returned ", response = APIDefinitionValidationResponseDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = APIDefinitionValidationResponseDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Workflow for the given reference in not found. ", response = APIDefinitionValidationResponseDTO.class) })
    public Response apisValidateDefinitionPost(@ApiParam(value = "Definition type to upload", required=true, allowableValues="SWAGGER, WSDL", defaultValue="SWAGGER")@FormDataParam("type")  String type
,
            @FormDataParam("file") InputStream fileInputStream,
            @FormDataParam("file") FileInfo fileDetail
,@ApiParam(value = "Definition url")@FormDataParam("url")  String url
 ,@Context Request request)
    throws NotFoundException {
        type=type==null?String.valueOf("SWAGGER"):type;
        
        return delegate.apisValidateDefinitionPost(type,fileInputStream, fileDetail,url,request);
=======
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Create a new API", notes = "This operation can be used to create a new API specifying the details of the API in the payload. The new API will be in `CREATED` state.\n\nThere is a special capability for a user who has `APIM Admin` permission such that he can create APIs on behalf of other users. For that he can to specify `\"provider\" : \"some_other_user\"` in the payload so that the API's creator will be shown as `some_other_user` in the UI.\n", response = APIDetailedDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created.\nSuccessful response with the newly created object as entity in the body.\nLocation header contains URL of newly created entity.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported Media Type.\nThe entity of the request was in a not supported format.\n") })

    public Response apisPost(@ApiParam(value = "API object that needs to be added\n" ,required=true ) APIDetailedDTO body,
    @ApiParam(value = "Media type of the entity in the body. Default is application/json.\n" ,required=true , defaultValue="application/json")@HeaderParam("Content-Type") String contentType)
    {
    return delegate.apisPost(body,contentType);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    }
}
