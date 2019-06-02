package org.wso2.carbon.apimgt.rest.api.publisher;

<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.publisher.dto.APIDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.DedicatedGatewayDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.DocumentDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.ScopeDTO;
import org.wso2.msf4j.Request;
import org.wso2.msf4j.formparam.FileInfo;

import java.io.InputStream;
import javax.ws.rs.core.Response;

public abstract class ApisApiService {
    public abstract Response apisApiIdDedicatedGatewayGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDedicatedGatewayPut(String apiId
 ,DedicatedGatewayDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDelete(String apiId
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsDocumentIdContentGet(String apiId
 ,String documentId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsDocumentIdContentPost(String apiId
 ,String documentId
 ,InputStream fileInputStream, FileInfo fileDetail
 ,String inlineContent
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsDocumentIdDelete(String apiId
 ,String documentId
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsDocumentIdGet(String apiId
 ,String documentId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsDocumentIdPut(String apiId
 ,String documentId
 ,DocumentDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsGet(String apiId
 ,Integer limit
 ,Integer offset
 ,String ifNoneMatch
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsPost(String apiId
 ,DocumentDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdGatewayConfigGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdGatewayConfigPut(String apiId
 ,String gatewayConfig
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdLifecycleGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdLifecycleHistoryGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdLifecycleLifecyclePendingTaskDelete(String apiId
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdPut(String apiId
 ,APIDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdScopesGet(String apiId
 ,String ifNoneMatch
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdScopesNameDelete(String apiId
 ,String name
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdScopesNameGet(String apiId
 ,String name
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdScopesNamePut(String apiId
 ,String name
 ,ScopeDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdScopesPost(String apiId
 ,ScopeDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdSwaggerGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdSwaggerPut(String apiId
 ,String endpointId
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdThreatProtectionPoliciesDelete(String apiId
 ,String policyId
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdThreatProtectionPoliciesGet(String apiId
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdThreatProtectionPoliciesPost(String apiId
 ,String policyId
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdThumbnailGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdThumbnailPost(String apiId
 ,InputStream fileInputStream, FileInfo fileDetail
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdWsdlGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdWsdlPut(String apiId
 ,InputStream fileInputStream, FileInfo fileDetail
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisChangeLifecyclePost(String action
 ,String apiId
 ,String lifecycleChecklist
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisCopyApiPost(String newVersion
 ,String apiId
  ,Request request) throws NotFoundException;
    public abstract Response apisGet(Integer limit
 ,Integer offset
 ,String query
 ,String ifNoneMatch
  ,Request request) throws NotFoundException;
    public abstract Response apisHead(String query
 ,String ifNoneMatch
  ,Request request) throws NotFoundException;
    public abstract Response apisImportDefinitionPost(String type
 ,InputStream fileInputStream, FileInfo fileDetail
 ,String url
 ,String additionalProperties
 ,String implementationType
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisPost(APIDTO body
  ,Request request) throws NotFoundException;
    public abstract Response apisValidateDefinitionPost(String type
 ,InputStream fileInputStream, FileInfo fileDetail
 ,String url
  ,Request request) throws NotFoundException;
=======
import org.wso2.carbon.apimgt.rest.api.publisher.*;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.*;

import org.wso2.carbon.apimgt.rest.api.publisher.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.DocumentDTO;
import java.io.File;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.DocumentListDTO;
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

import javax.ws.rs.core.Response;

public abstract class ApisApiService {
    public abstract Response apisApiIdDelete(String apiId,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdDocumentsDocumentIdContentGet(String apiId,String documentId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdDocumentsDocumentIdContentPost(String apiId,String documentId,String contentType,InputStream fileInputStream,Attachment fileDetail,String inlineContent,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdDocumentsDocumentIdDelete(String apiId,String documentId,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdDocumentsDocumentIdGet(String apiId,String documentId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdDocumentsDocumentIdPut(String apiId,String documentId,DocumentDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdDocumentsGet(String apiId,Integer limit,Integer offset,String accept,String ifNoneMatch);
    public abstract Response apisApiIdDocumentsPost(String apiId,DocumentDTO body,String contentType);
    public abstract Response apisApiIdGet(String apiId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdPoliciesMediationGet(String apiId,Integer limit,Integer offset,String query,String accept,String ifNoneMatch);
    public abstract Response apisApiIdPoliciesMediationMediationPolicyIdDelete(String apiId,String mediationPolicyId,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdPoliciesMediationMediationPolicyIdGet(String apiId,String mediationPolicyId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdPoliciesMediationMediationPolicyIdPut(String apiId,String mediationPolicyId,MediationDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdPoliciesMediationPost(MediationDTO body,String apiId,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdPut(String apiId,APIDetailedDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdResourcePoliciesGet(String apiId,String sequenceType,String resourcePath,String verb,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdResourcePoliciesResourceIdGet(String apiId,String resourceId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdResourcePoliciesResourceIdPut(String apiId,String resourceId,ResourcePolicyInfoDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdSwaggerGet(String apiId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdSwaggerPut(String apiId,String apiDefinition,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdThumbnailGet(String apiId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdThumbnailPost(String apiId,InputStream fileInputStream,Attachment fileDetail,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisApiIdWsdlGet(String apiId,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdWsdlPost(String apiId,WsdlDTO body,String contentType,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisChangeLifecyclePost(String action,String apiId,String lifecycleChecklist,String ifMatch,String ifUnmodifiedSince);
    public abstract Response apisCopyApiPost(String newVersion,String apiId);
    public abstract Response apisGet(Integer limit,Integer offset,String query,String accept,String ifNoneMatch,Boolean expand,String tenantDomain);
    public abstract Response apisPost(APIDetailedDTO body,String contentType);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
}
