package org.wso2.carbon.apimgt.rest.api.admin;

<<<<<<< HEAD

import io.swagger.annotations.ApiParam;

import org.wso2.carbon.apimgt.rest.api.admin.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.admin.dto.LabelDTO;
import org.wso2.carbon.apimgt.rest.api.admin.dto.LabelListDTO;
import org.wso2.carbon.apimgt.rest.api.admin.factories.LabelsApiServiceFactory;

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

@Component(
    name = "org.wso2.carbon.apimgt.rest.api.admin.LabelsApi",
    service = Microservice.class,
    immediate = true
)
@Path("/api/am/admin/v1.[\\d]+/labels")
@Consumes({ "application/json" })
@Produces({ "application/json" })
@ApplicationPath("/labels")
@io.swagger.annotations.Api(description = "the labels API")
public class LabelsApi implements Microservice  {
   private final LabelsApiService delegate = LabelsApiServiceFactory.getLabelsApi();

    @OPTIONS
=======
import org.wso2.carbon.apimgt.rest.api.admin.dto.*;
import org.wso2.carbon.apimgt.rest.api.admin.LabelsApiService;
import org.wso2.carbon.apimgt.rest.api.admin.factories.LabelsApiServiceFactory;

import io.swagger.annotations.ApiParam;

import org.wso2.carbon.apimgt.rest.api.admin.dto.LabelListDTO;
import org.wso2.carbon.apimgt.rest.api.admin.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.admin.dto.LabelDTO;

import java.util.List;

import java.io.InputStream;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.apache.cxf.jaxrs.ext.multipart.Multipart;

import javax.ws.rs.core.Response;
import javax.ws.rs.*;

@Path("/labels")
@Consumes({ "application/json" })
@Produces({ "application/json" })
@io.swagger.annotations.Api(value = "/labels", description = "the labels API")
public class LabelsApi  {

   private final LabelsApiService delegate = LabelsApiServiceFactory.getLabelsApi();

>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    @GET
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Get all registered Labels", notes = "Get all registered Labels ", response = LabelListDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:label_manage", description = "Label manage")
        })
    }, tags={ "Label Collection", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Labels returned ", response = LabelListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource. ", response = LabelListDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported. ", response = LabelListDTO.class) })
    public Response labelsGet( @Context Request request)
    throws NotFoundException {
        
        return delegate.labelsGet(request);
    }
    @OPTIONS
=======
    @io.swagger.annotations.ApiOperation(value = "Get all registered Labels", notes = "Get all registered Labels\n", response = LabelListDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nLabels returned\n") })

    public Response labelsGet()
    {
    return delegate.labelsGet();
    }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    @DELETE
    @Path("/{labelId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Delete a Label", notes = "Delete a Label by label Id ", response = void.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:label_manage", description = "Label manage")
        })
    }, tags={ "Label", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Label successfully deleted. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Label to be deleted does not exist. ", response = void.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = void.class) })
    public Response labelsLabelIdDelete(@ApiParam(value = "Label identifier ",required=true) @PathParam("labelId") String labelId
,@ApiParam(value = "Validator for conditional requests; based on ETag. " )@HeaderParam("If-Match") String ifMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header. " )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.labelsLabelIdDelete(labelId,ifMatch,ifUnmodifiedSince,request);
    }
    @OPTIONS
    @GET
    @Path("/{labelId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    @io.swagger.annotations.ApiOperation(value = "Retrieve a Label", notes = "Retrieve a Label for labelId ", response = LabelDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:label_view", description = "Label view")
        })
    }, tags={ "Label", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Label returned ", response = LabelDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 304, message = "Not Modified. Empty body because the client has already the latest version of the requested resource. ", response = LabelDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. Requested Label does not exist. ", response = LabelDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 406, message = "Not Acceptable. The requested media type is not supported. ", response = LabelDTO.class) })
    public Response labelsLabelIdGet(@ApiParam(value = "Label identifier ",required=true) @PathParam("labelId") String labelId
,@ApiParam(value = "Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resourec. " )@HeaderParam("If-None-Match") String ifNoneMatch
,@ApiParam(value = "Validator for conditional requests; based on Last Modified header of the formerly retrieved variant of the resource. " )@HeaderParam("If-Modified-Since") String ifModifiedSince
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.labelsLabelIdGet(labelId,ifNoneMatch,ifModifiedSince,request);
    }
    @OPTIONS
=======
    @io.swagger.annotations.ApiOperation(value = "Delete a Label", notes = "Delete a Label by label Id\n", response = void.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nLabel successfully deleted.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nLabel to be deleted does not exist.\n") })

    public Response labelsLabelIdDelete(@ApiParam(value = "Label UUID\n",required=true ) @PathParam("labelId")  String labelId,
    @ApiParam(value = "Validator for conditional requests; based on ETag (Will be supported in future).\n"  )@HeaderParam("If-Match") String ifMatch,
    @ApiParam(value = "Validator for conditional requests; based on Last Modified header (Will be supported in future).\n"  )@HeaderParam("If-Unmodified-Since") String ifUnmodifiedSince)
    {
    return delegate.labelsLabelIdDelete(labelId,ifMatch,ifUnmodifiedSince);
    }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    @PUT
    @Path("/{labelId}")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Update a Label", notes = "Update a Label by label Id ", response = LabelDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:label_manage", description = "Label manage")
        })
    }, tags={ "Label", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK. Label updated. ", response = LabelDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error. ", response = LabelDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found. The resource to be updated does not exist. ", response = LabelDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 412, message = "Precondition Failed. The request has not been performed because one of the preconditions is not met. ", response = LabelDTO.class) })
    public Response labelsLabelIdPut(@ApiParam(value = "Label identifier ",required=true) @PathParam("labelId") String labelId
,@ApiParam(value = "Label object with updated information " ,required=true) LabelDTO body
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.labelsLabelIdPut(labelId,body,request);
    }
    @OPTIONS
=======
    @io.swagger.annotations.ApiOperation(value = "Update a Label", notes = "Update a Label by label Id\n", response = LabelDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "OK.\nLabel updated.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 404, message = "Not Found.\nThe resource to be updated does not exist.\n") })

    public Response labelsLabelIdPut(@ApiParam(value = "Label UUID\n",required=true ) @PathParam("labelId")  String labelId,
    @ApiParam(value = "Label object with updated information\n" ,required=true ) LabelDTO body)
    {
    return delegate.labelsLabelIdPut(labelId,body);
    }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    @POST
    
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
<<<<<<< HEAD
    @io.swagger.annotations.ApiOperation(value = "Add a Label", notes = "Add a new gateway/store Label ", response = LabelDTO.class, authorizations = {
        @io.swagger.annotations.Authorization(value = "OAuth2Security", scopes = {
            @io.swagger.annotations.AuthorizationScope(scope = "apim:label_manage", description = "Label manage")
        })
    }, tags={ "Label Collection", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created. Successful response with the newly created object as entity in the body. Location header contains URL of newly created entity. ", response = LabelDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request. Invalid request or validation error ", response = LabelDTO.class),
        
        @io.swagger.annotations.ApiResponse(code = 415, message = "Unsupported media type. The entity of the request was in a not supported format. ", response = LabelDTO.class) })
    public Response labelsPost(@ApiParam(value = "Label object that should to be added " ,required=true) LabelDTO body
 ,@Context Request request)
    throws NotFoundException {
        
        return delegate.labelsPost(body,request);
    }
}
=======
    @io.swagger.annotations.ApiOperation(value = "Add a Label", notes = "Add a new gateway Label\n", response = LabelDTO.class)
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 201, message = "Created.\nSuccessful response with the newly created object as entity in the body.\n"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Bad Request.\nInvalid request or validation error\n") })

    public Response labelsPost(@ApiParam(value = "Label object that should to be added\n" ,required=true ) LabelDTO body)
    {
    return delegate.labelsPost(body);
    }
}

>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
