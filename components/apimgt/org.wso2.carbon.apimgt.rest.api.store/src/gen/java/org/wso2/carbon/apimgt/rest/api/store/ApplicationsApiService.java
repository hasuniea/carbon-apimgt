package org.wso2.carbon.apimgt.rest.api.store;

import org.wso2.carbon.apimgt.rest.api.store.*;
import org.wso2.carbon.apimgt.rest.api.store.dto.*;

<<<<<<< HEAD
import org.wso2.msf4j.formparam.FormDataParam;
import org.wso2.msf4j.formparam.FileInfo;
import org.wso2.msf4j.Request;

=======
import org.wso2.carbon.apimgt.rest.api.store.dto.ErrorDTO;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ScopeListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyGenerateRequestDTO;
<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyMappingRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeysDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeysListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationTokenDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationTokenGenerateRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.WorkflowResponseDTO;

import java.util.List;
import org.wso2.carbon.apimgt.rest.api.store.NotFoundException;

import java.io.InputStream;
=======
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyReGenerateRequestDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeyReGenerateResponseDTO;

import java.util.List;

import java.io.InputStream;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

public abstract class ApplicationsApiService {
<<<<<<< HEAD
    public abstract Response applicationsApplicationIdDelete(String applicationId
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response applicationsApplicationIdGenerateKeysPost(String applicationId
 ,ApplicationKeyGenerateRequestDTO body
  ,Request request) throws NotFoundException;
    public abstract Response applicationsApplicationIdGenerateTokenPost(String applicationId
 ,ApplicationTokenGenerateRequestDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response applicationsApplicationIdGet(String applicationId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response applicationsApplicationIdKeysGet(String applicationId
  ,Request request) throws NotFoundException;
    public abstract Response applicationsApplicationIdKeysKeyTypeGet(String applicationId
 ,String keyType
  ,Request request) throws NotFoundException;
    public abstract Response applicationsApplicationIdKeysKeyTypePut(String applicationId
 ,String keyType
 ,ApplicationKeysDTO body
  ,Request request) throws NotFoundException;
    public abstract Response applicationsApplicationIdMapKeysPost(String applicationId
 ,ApplicationKeyMappingRequestDTO body
  ,Request request) throws NotFoundException;
    public abstract Response applicationsApplicationIdPut(String applicationId
 ,ApplicationDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response applicationsGet(String query
 ,Integer limit
 ,Integer offset
 ,String ifNoneMatch
  ,Request request) throws NotFoundException;
    public abstract Response applicationsPost(ApplicationDTO body
  ,Request request) throws NotFoundException;
=======
    public abstract Response applicationsApplicationIdDelete(String applicationId,String ifMatch,String ifUnmodifiedSince);
    public abstract Response applicationsApplicationIdGet(String applicationId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response applicationsApplicationIdKeysKeyTypeGet(String applicationId,String keyType,String groupId,String accept);
    public abstract Response applicationsApplicationIdKeysKeyTypePut(String applicationId,String keyType,ApplicationKeyDTO body);
    public abstract Response applicationsApplicationIdPut(String applicationId,ApplicationDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response applicationsApplicationIdScopesGet(String applicationId,Boolean filterByUserRoles,String ifNoneMatch,String ifModifiedSince);
    public abstract Response applicationsGenerateKeysPost(String applicationId,ApplicationKeyGenerateRequestDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response applicationsGet(String groupId,String query,Integer limit,Integer offset,String accept,String ifNoneMatch);
    public abstract Response applicationsPost(ApplicationDTO body,String contentType);
    public abstract Response applicationsRegenerateConsumersecretPost(ApplicationKeyReGenerateRequestDTO body,String contentType);
    public abstract Response applicationsScopesApplicationIdGet(String applicationId,Boolean filterByUserRoles,String ifNoneMatch,String ifModifiedSince);

    public abstract String applicationsApplicationIdDeleteGetLastUpdatedTime(String applicationId,String ifMatch,String ifUnmodifiedSince);
    public abstract String applicationsApplicationIdGetGetLastUpdatedTime(String applicationId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract String applicationsApplicationIdKeysKeyTypeGetGetLastUpdatedTime(String applicationId,String keyType,String groupId,String accept);
    public abstract String applicationsApplicationIdKeysKeyTypePutGetLastUpdatedTime(String applicationId,String keyType,ApplicationKeyDTO body);
    public abstract String applicationsApplicationIdPutGetLastUpdatedTime(String applicationId,ApplicationDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract String applicationsApplicationIdScopesGetGetLastUpdatedTime(String applicationId,Boolean filterByUserRoles,String ifNoneMatch,String ifModifiedSince);
    public abstract String applicationsGenerateKeysPostGetLastUpdatedTime(String applicationId,ApplicationKeyGenerateRequestDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract String applicationsGetGetLastUpdatedTime(String groupId,String query,Integer limit,Integer offset,String accept,String ifNoneMatch);
    public abstract String applicationsPostGetLastUpdatedTime(ApplicationDTO body,String contentType);
    public abstract String applicationsRegenerateConsumersecretPostGetLastUpdatedTime(ApplicationKeyReGenerateRequestDTO body,String contentType);
    public abstract String applicationsScopesApplicationIdGetGetLastUpdatedTime(String applicationId,Boolean filterByUserRoles,String ifNoneMatch,String ifModifiedSince);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
}
