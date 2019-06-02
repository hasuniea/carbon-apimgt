package org.wso2.carbon.apimgt.rest.api.store;

<<<<<<< HEAD
import org.wso2.carbon.apimgt.rest.api.store.dto.CommentDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.RatingDTO;
import org.wso2.msf4j.Request;
=======
import org.wso2.carbon.apimgt.rest.api.store.*;
import org.wso2.carbon.apimgt.rest.api.store.dto.*;

import org.wso2.carbon.apimgt.rest.api.store.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.DocumentDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.DocumentListDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.APIDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.APIListDTO;

import java.util.List;

import java.io.InputStream;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

import javax.ws.rs.core.Response;

public abstract class ApisApiService {
<<<<<<< HEAD
    public abstract Response apisApiIdCommentsCommentIdDelete(String commentId
 ,String apiId
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdCommentsCommentIdGet(String commentId
 ,String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdCommentsCommentIdPut(String commentId
 ,String apiId
 ,CommentDTO body
 ,String ifMatch
 ,String ifUnmodifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdCommentsGet(String apiId
 ,Integer limit
 ,Integer offset
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdCommentsPost(String apiId
 ,CommentDTO body
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsDocumentIdContentGet(String apiId
 ,String documentId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsDocumentIdGet(String apiId
 ,String documentId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdDocumentsGet(String apiId
 ,Integer limit
 ,Integer offset
 ,String ifNoneMatch
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdRatingsGet(String apiId
 ,Integer limit
 ,Integer offset
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdRatingsRatingIdGet(String apiId
 ,String ratingId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdSdksLanguageGet(String apiId
 ,String language
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdSwaggerGet(String apiId
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdUserRatingPut(String apiId
 ,RatingDTO body
  ,Request request) throws NotFoundException;
    public abstract Response apisApiIdWsdlGet(String apiId
 ,String label
 ,String ifNoneMatch
 ,String ifModifiedSince
  ,Request request) throws NotFoundException;
    public abstract Response apisGet(Integer limit
 ,Integer offset
 ,String labels
 ,String query
 ,String ifNoneMatch
  ,Request request) throws NotFoundException;
=======
    public abstract Response apisApiIdDocumentsDocumentIdContentGet(String apiId,String documentId,String xWSO2Tenant,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdDocumentsDocumentIdGet(String apiId,String documentId,String xWSO2Tenant,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisApiIdDocumentsGet(String apiId,Integer limit,Integer offset,String xWSO2Tenant,String accept,String ifNoneMatch);
    public abstract Response apisApiIdGet(String apiId,String accept,String ifNoneMatch,String ifModifiedSince,String xWSO2Tenant);
    public abstract Response apisApiIdSwaggerGet(String apiId,String accept,String ifNoneMatch,String ifModifiedSince,String xWSO2Tenant);
    public abstract Response apisApiIdThumbnailGet(String apiId,String xWSO2Tenant,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract Response apisGenerateSdkPost(String apiId,String language,String xWSO2Tenant);
    public abstract Response apisGet(Integer limit,Integer offset,String xWSO2Tenant,String query,String accept,String ifNoneMatch);

    public abstract String apisApiIdDocumentsDocumentIdContentGetGetLastUpdatedTime(String apiId,String documentId,String xWSO2Tenant,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract String apisApiIdDocumentsDocumentIdGetGetLastUpdatedTime(String apiId,String documentId,String xWSO2Tenant,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract String apisApiIdDocumentsGetGetLastUpdatedTime(String apiId,Integer limit,Integer offset,String xWSO2Tenant,String accept,String ifNoneMatch);
    public abstract String apisApiIdGetGetLastUpdatedTime(String apiId,String accept,String ifNoneMatch,String ifModifiedSince,String xWSO2Tenant);
    public abstract String apisApiIdSwaggerGetGetLastUpdatedTime(String apiId,String accept,String ifNoneMatch,String ifModifiedSince,String xWSO2Tenant);
    public abstract String apisApiIdThumbnailGetGetLastUpdatedTime(String apiId,String xWSO2Tenant,String accept,String ifNoneMatch,String ifModifiedSince);
    public abstract String apisGenerateSdkPostGetLastUpdatedTime(String apiId,String language,String xWSO2Tenant);
    public abstract String apisGetGetLastUpdatedTime(Integer limit,Integer offset,String xWSO2Tenant,String query,String accept,String ifNoneMatch);
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
}
