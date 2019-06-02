/*
<<<<<<< HEAD
 *
 *  Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 *
 */

package org.wso2.carbon.apimgt.rest.api.admin.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.apimgt.core.api.APIMgtAdminService;
import org.wso2.carbon.apimgt.core.exception.APIManagementException;
import org.wso2.carbon.apimgt.core.exception.ErrorHandler;
import org.wso2.carbon.apimgt.core.exception.ExceptionCodes;
import org.wso2.carbon.apimgt.core.models.Label;
import org.wso2.carbon.apimgt.rest.api.admin.LabelsApiService;
import org.wso2.carbon.apimgt.rest.api.admin.NotFoundException;
import org.wso2.carbon.apimgt.rest.api.admin.dto.LabelDTO;
import org.wso2.carbon.apimgt.rest.api.admin.mappings.LabelMappingUtil;
import org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.common.util.RestApiUtil;
import org.wso2.msf4j.Request;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
=======
*  Copyright (c) WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
*  WSO2 Inc. licenses this file to you under the Apache License,
*  Version 2.0 (the "License"); you may not use this file except
*  in compliance with the License.
*  You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

package org.wso2.carbon.apimgt.rest.api.admin.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.wso2.carbon.apimgt.api.APIAdmin;
import org.wso2.carbon.apimgt.api.APIManagementException;
import org.wso2.carbon.apimgt.api.model.Label;
import org.wso2.carbon.apimgt.impl.APIAdminImpl;
import org.wso2.carbon.apimgt.rest.api.admin.*;
import org.wso2.carbon.apimgt.rest.api.admin.dto.LabelListDTO;
import org.wso2.carbon.apimgt.rest.api.admin.dto.LabelDTO;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import org.wso2.carbon.apimgt.rest.api.admin.utils.mappings.LabelMappingUtil;
import org.wso2.carbon.apimgt.rest.api.util.RestApiConstants;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestApiUtil;

>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import javax.ws.rs.core.Response;

public class LabelsApiServiceImpl extends LabelsApiService {

<<<<<<< HEAD
    private static final Logger log = LoggerFactory.getLogger(LabelsApiServiceImpl.class);

    /**
     * Gets all labels
     *
     * @param request ms4j request object
     * @return a list of label objects
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response labelsGet(Request request) throws NotFoundException {
        List<Label> labels;
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            labels = apiMgtAdminService.getLabels();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while retrieving all labels";
            ErrorHandler errorHandler = ExceptionCodes.LABEL_EXCEPTION;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler);
            log.error(errorMessage, e);
            return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
        }
        return Response.status(Response.Status.OK).entity(LabelMappingUtil.fromLabelArrayToListDTO(labels)).build();
    }

    /**
     * Delete label by label id
     *
     * @param labelId Id of the label
     * @param request msf4j request object
     * @return 200 OK if the operation is successful
     * @throws NotFoundException If failed to find the particular resource
     */
    @Override
    public Response labelsLabelIdDelete(String labelId, String ifMatch, String ifUnmodifiedSince, Request request)
            throws NotFoundException {

        try {
            if (labelId != null) {
                APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
                apiMgtAdminService.deleteLabel(labelId);
            } else {
                //mandatory parameters not provided
                String errorMessage = "Label Id parameter should be provided";
                ErrorHandler errorHandler = ExceptionCodes.PARAMETER_NOT_PROVIDED;
                ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler);
                log.error(errorMessage);
                return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
            }
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while deleting the label [labelId] " + labelId;
            HashMap<String, String> paramList = new HashMap<String, String>();
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }

        return Response.status(Response.Status.NO_CONTENT).build();
    }

    /**
     * Update the label
     *
     * @param body    The body of the label with fields to be modified
     * @param request The ms4j request object
     * @return 200 OK response.
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response labelsLabelIdPut(String labelId, LabelDTO body, Request request) throws NotFoundException {
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            body.labelUUID(labelId);
            Label updatedLabel = apiMgtAdminService.updateLabel(LabelMappingUtil.fromDTOTLabel(body));
            return Response.status(Response.Status.OK).entity(LabelMappingUtil.fromLabelToDTO(updatedLabel)).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while adding label, label name: " + body.getName();
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    public Response labelsLabelIdGet(String labelId, String ifNoneMatch, String ifModifiedSince, Request request)
            throws NotFoundException {
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            Label label = apiMgtAdminService.getLabelByID(labelId);
            return Response.status(Response.Status.OK).entity(LabelMappingUtil.fromLabelToDTO(label)).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while retrieving label with id " + labelId;
            ErrorHandler errorHandler = ExceptionCodes.LABEL_EXCEPTION;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(errorHandler);
            log.error(errorMessage, e);
            return Response.status(errorHandler.getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Adds a label
     *
     * @param body    The label details of the label to be added
     * @param request ms4j request obect
     * @return the label object that was added, with the label ID and label name.
     * @throws NotFoundException When the particular resource does not exist in the system
     */
    @Override
    public Response labelsPost(LabelDTO body, Request request) throws NotFoundException {

        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            if (body != null && body.getName() != null) {
                if (body.getName().equalsIgnoreCase("STORE")) {
                    body.setAccessUrls(new ArrayList<>());
                }
                Label labelAdded = apiMgtAdminService.addLabel(LabelMappingUtil.fromDTOTLabel(body));
                return Response.status(Response.Status.CREATED).
                        entity(LabelMappingUtil.fromLabelToDTO(labelAdded)).build();

            } else {
                return Response.status(Response.Status.BAD_REQUEST).build();
            }

        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while adding label, label name: " + body.getName();
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

=======
    private static final Log log = LogFactory.getLog(PoliciesApiServiceImpl.class);

    /**
     * Delete label
     *
     * @param labelId         Label identifier
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @return Status of label Deletion
     */
    @Override
    public Response labelsLabelIdDelete(String labelId, String ifMatch, String ifUnmodifiedSince) {
        try {
            APIAdmin apiAdmin = new APIAdminImpl();
            apiAdmin.deleteLabel(labelId);
            return Response.ok().build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while deleting API : " + labelId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        }
        return null;
    }

    /**
     * Returns list of labels
     *
     * @return Matched labels for given search condition
     */
    @Override
    public Response labelsGet() {
        try {
            APIAdmin apiAdmin = new APIAdminImpl();
            String tenantDomain = RestApiUtil.getLoggedInUserTenantDomain();
            List<Label> labelList = apiAdmin.getAllLabels(tenantDomain);
            LabelListDTO labelListDTO =
                    LabelMappingUtil.fromLabelListToLabelListDTO(labelList);
            return Response.ok().entity(labelListDTO).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error while retrieving labels";
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        }
        return null;
    }

    /**
     * Add a label
     *
     * @param body          Label DTO as request body
     * @return 200 response if successful
     */
    @Override
    public Response labelsPost(LabelDTO body) {
        Label label = null;
        try {
            APIAdmin apiAdmin = new APIAdminImpl();
            String tenantDomain = RestApiUtil.getLoggedInUserTenantDomain();
            label = LabelMappingUtil.labelDTOToLabel(body);
            LabelDTO labelDTO = LabelMappingUtil.
                    fromLabelToLabelDTO(apiAdmin.addLabel(tenantDomain, label));
            URI location = new URI(RestApiConstants.RESOURCE_PATH_LABEL + "/" +
                    labelDTO.getId());
            return Response.created(location).entity(labelDTO).build();
        } catch (APIManagementException | URISyntaxException e) {
            String errorMessage = "Error while adding new Label for API : "
                    + body.getName() + "-" + e.getMessage() ;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        }
        return null;
    }

    /**
     * Updates an existing label
     *
     * @param body              content to update
     * @return 200 response if successful
     */
    @Override
    public Response labelsLabelIdPut(String labelId, LabelDTO body) {
        Label label = null;
        try {
            APIAdmin apiAdmin = new APIAdminImpl();
            label = LabelMappingUtil.labelDTOToLabelPut(labelId, body);
            LabelDTO labelDTO = LabelMappingUtil.
                    fromLabelToLabelDTO(apiAdmin.updateLabel(label));
            URI location = new URI(RestApiConstants.RESOURCE_PATH_LABEL + "/" +
                    labelDTO.getId());
            return Response.ok(location).entity(labelDTO).build();
        } catch (APIManagementException | URISyntaxException e) {
            String errorMessage = "Error while updating Label : " + labelId;
            RestApiUtil.handleInternalServerError(errorMessage, e, log);
        }
        return null;
    }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
}
