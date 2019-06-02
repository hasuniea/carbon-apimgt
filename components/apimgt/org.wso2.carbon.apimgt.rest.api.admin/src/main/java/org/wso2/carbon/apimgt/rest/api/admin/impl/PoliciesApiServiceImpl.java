/*
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

<<<<<<< HEAD
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.apimgt.core.api.APIMgtAdminService;
import org.wso2.carbon.apimgt.core.exception.APIManagementException;
import org.wso2.carbon.apimgt.core.models.policy.APIPolicy;
import org.wso2.carbon.apimgt.core.models.policy.ApplicationPolicy;
import org.wso2.carbon.apimgt.core.models.policy.Policy;
import org.wso2.carbon.apimgt.core.models.policy.CustomPolicy;
import org.wso2.carbon.apimgt.core.models.policy.SubscriptionPolicy;
import org.wso2.carbon.apimgt.core.util.APIMgtConstants;
import org.wso2.carbon.apimgt.rest.api.admin.NotFoundException;
=======
import org.apache.axiom.om.OMAttribute;
import org.apache.axiom.om.OMElement;
import org.apache.axiom.om.util.AXIOMUtil;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.JSONException;
import org.json.XML;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.wso2.carbon.apimgt.api.APIManagementException;
import org.wso2.carbon.apimgt.api.APIProvider;
import org.wso2.carbon.apimgt.api.model.Mediation;
import org.wso2.carbon.apimgt.api.model.ResourceFile;
import org.wso2.carbon.apimgt.api.model.policy.PolicyConstants;
import org.wso2.carbon.apimgt.impl.APIConstants;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import org.wso2.carbon.apimgt.rest.api.admin.PoliciesApiService;
import org.wso2.carbon.apimgt.rest.api.admin.dto.*;
import org.wso2.carbon.apimgt.rest.api.admin.mappings.AdvancedThrottlePolicyMappingUtil;
import org.wso2.carbon.apimgt.rest.api.admin.mappings.ApplicationThrottlePolicyMappingUtil;
import org.wso2.carbon.apimgt.rest.api.admin.mappings.CustomPolicyMappingUtil;
import org.wso2.carbon.apimgt.rest.api.admin.mappings.SubscriptionThrottlePolicyMappingUtil;
import org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.common.util.RestApiUtil;
import org.wso2.msf4j.Request;

import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PoliciesApiServiceImpl extends PoliciesApiService {

    private static final Logger log = LoggerFactory.getLogger(PoliciesApiServiceImpl.class);

    /**
     * Get policies 
     * 
     * @param ifNoneMatch       If-None-Match header value
     * @param ifModifiedSince   If-Modified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingAdvancedGet(String ifNoneMatch, String ifModifiedSince, Request request)
            throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.debug("Received Advance Throttle Policy GET request");
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            List<APIPolicy> policies = apiMgtAdminService.getApiPolicies();
            AdvancedThrottlePolicyListDTO advancedThrottlePolicyListDTO = AdvancedThrottlePolicyMappingUtil
                    .fromAPIPolicyArrayToListDTO(policies);
            return Response.ok().entity(advancedThrottlePolicyListDTO).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while retrieving Advance Policies";
            org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Delete policy
     * 
     * @param id          Uuid of the Advanced policy.
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingAdvancedIdDelete(String id, String ifMatch, String ifUnmodifiedSince,
            Request request) throws NotFoundException {
        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.api;
        if (log.isDebugEnabled()) {
            log.info("Received Advance Policy DELETE request with uuid: " + id);
        }
        return deletePolicy(id, tierLevel);
    }

    /**
     * Get policy by id
     * @param Id          Uuid of the Advanced policy.
     * @param ifNoneMatch       If-None-Match header value
     * @param ifModifiedSince   If-Modified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override public Response policiesThrottlingAdvancedIdGet(String Id, String ifNoneMatch,
            String ifModifiedSince, Request request) throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.info("Received Advanced Policy Get request. Policy uuid: " + Id);
        }
        try {
<<<<<<< HEAD
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            APIPolicy policy = apiMgtAdminService.getApiPolicyByUuid(Id);
            return Response.status(Response.Status.OK).entity(AdvancedThrottlePolicyMappingUtil.
                    fromAdvancedPolicyToDTO(policy)).build();

=======
            APIProvider apiProvider = RestApiUtil.getLoggedInUserProvider();
            //Delete given global mediation policy
            boolean deleteState = apiProvider.deleteGlobalMediationPolicy(mediationPolicyId);
            if (deleteState) {
                return Response.ok().build();
            } else {
                //If registry resource not found
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_POLICY, mediationPolicyId, log);
            }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while getting Advanced Policy. policy uuid: " + Id;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Update policy by Id
     * @param id          Uuid of the Advanced policy.
     * @param body              DTO object including the Policy meta information
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingAdvancedIdPut(String id, AdvancedThrottlePolicyDTO body,
            String ifMatch, String ifUnmodifiedSince, Request request) throws NotFoundException {
        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.api;
        if (log.isDebugEnabled()) {
            log.info("Received Advance Policy PUT request " + body + " with tierLevel = " + tierLevel);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            APIPolicy apiPolicy = AdvancedThrottlePolicyMappingUtil.fromAdvancedPolicyDTOToPolicy(body);
            apiPolicy.setUuid(id);
            apiMgtAdminService.updateApiPolicy(apiPolicy);
            return Response.status(Response.Status.CREATED).entity(AdvancedThrottlePolicyMappingUtil
                    .fromAdvancedPolicyToDTO(apiMgtAdminService.getApiPolicyByUuid(id))).build();

        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while updating Advanced Policy. policy uuid: " + id;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();

        }
    }

    /**
     * Create Policy
     * 
     * @param body              DTO object including the Policy meta information
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingAdvancedPost(AdvancedThrottlePolicyDTO body, Request request)
            throws NotFoundException {
        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.api;
        if (log.isDebugEnabled()) {
            log.info("Received Advance Policy POST request " + body + " with tierLevel = " + tierLevel);
        }

        if (log.isDebugEnabled()) {
            log.info("Received Advance Policy PUT request " + body + " with tierLevel = " + tierLevel);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            APIPolicy apiPolicy = AdvancedThrottlePolicyMappingUtil.fromAdvancedPolicyDTOToPolicy(body);
            String policyId = apiMgtAdminService.addApiPolicy(apiPolicy);
            return Response.status(Response.Status.CREATED).entity(AdvancedThrottlePolicyMappingUtil
                    .fromAdvancedPolicyToDTO(apiMgtAdminService.getApiPolicyByUuid(policyId)))
                    .build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while adding Advanced Throttle Policy, policy name: " + body
                    .getPolicyName();
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Returns all Application Policies deployed in the system
     *
     * @param ifNoneMatch       If-None-Match header value
     * @param ifModifiedSince   If-Modified-Since header value
     * @param request           msf4j request object
     * @return Response object  Response containing the Application Policy list {@link ApplicationThrottlePolicyListDTO}
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingApplicationGet(String ifNoneMatch, String ifModifiedSince, Request request)
            throws NotFoundException {

        if (log.isDebugEnabled()) {
            log.debug("Received Application Throttle Policy GET request");
        }
        try {
<<<<<<< HEAD
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            List<ApplicationPolicy> policies = apiMgtAdminService.getApplicationPolicies();
            ApplicationThrottlePolicyListDTO applicationThrottlePolicyListDTO = ApplicationThrottlePolicyMappingUtil
                    .fromApplicationPolicyArrayToListDTO(policies);
            return Response.ok().entity(applicationThrottlePolicyListDTO).build();

=======
            APIProvider apiProvider = RestApiUtil.getLoggedInUserProvider();
            //Get given global mediation policy
            Mediation mediation = apiProvider.getGlobalMediationPolicy(mediationPolicyId);
            if (mediation != null) {
                MediationDTO mediationDTO =
                        MediationMappingUtil.fromMediationToDTO(mediation);
                return Response.ok().entity(mediationDTO).build();
            } else {
                //If global mediation policy not exists
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_POLICY, mediationPolicyId, log);
            }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while retrieving Application Policies";
            org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Deletes an Application throttle policy
     *
     * @param id          Uuid of the Application policy.
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingApplicationIdDelete(String id, String ifMatch, String ifUnmodifiedSince,
            Request request) throws NotFoundException {

        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.application;
        if (log.isDebugEnabled()) {
            log.info("Received Advance Policy DELETE request with uuid: " + id);
        }
        return deletePolicy(id, tierLevel);
    }

    /**
     * Returns a matching Application policy for the given policy id @{policyId}
     *
     * @param id          Uuid of the Application policy
     * @param ifNoneMatch       If-None-Match header value
     * @param ifModifiedSince   If-Modified-Since header value
     * @param request           msf4j request object
     * @return Response object  Response with matching {@link ApplicationThrottlePolicyDTO} object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingApplicationIdGet(String id, String ifNoneMatch, String ifModifiedSince,
            Request request) throws NotFoundException {

        if (log.isDebugEnabled()) {
            log.info("Received Application Policy Get request. Policy uuid: " + id);
        }
        try {
<<<<<<< HEAD
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            Policy applicationPolicy = apiMgtAdminService.getApplicationPolicyByUuid(id);
            return Response.status(Response.Status.OK).entity(ApplicationThrottlePolicyMappingUtil.
                    fromApplicationThrottlePolicyToDTO(applicationPolicy)).build();

=======
            APIProvider apiProvider = RestApiUtil.getLoggedInUserProvider();
            //Get registry resource correspond to given uuid
            Resource mediationResource = apiProvider.getCustomMediationResourceFromUuid(mediationPolicyId);
            if (mediationResource != null) {

                //extracting already existing name of the mediation policy
                String contentString = IOUtils.toString(mediationResource.getContentStream(),
                        RegistryConstants.DEFAULT_CHARSET_ENCODING);
                //Get policy name from the mediation config
                OMElement omElement = AXIOMUtil.stringToOM(contentString);
                OMAttribute attribute = omElement.getAttribute(new QName
                        (PolicyConstants.MEDIATION_NAME_ATTRIBUTE));
                String existingMediationPolicyName = attribute.getAttributeValue();

                //replacing the name of the body with existing name
                body.setName(existingMediationPolicyName);

                //Getting mediation config to be update from the body
                contentStream = new ByteArrayInputStream(body.getConfig().getBytes
                        (StandardCharsets.UTF_8));
                //Creating new resource file
                ResourceFile contentFile = new ResourceFile(contentStream, contentType);
                //Getting registry path of the existing resource
                String resourcePath = mediationResource.getPath();
                //Updating the existing global mediation policy
                String updatedPolicyUrl = apiProvider.addResourceFile(resourcePath, contentFile);
                if (StringUtils.isNotBlank(updatedPolicyUrl)) {
                    //Getting uuid of updated global mediation policy
                    String uuid = apiProvider.getCreatedResourceUuid(resourcePath);
                    //Getting updated mediation
                    Mediation updatedMediation = apiProvider.getGlobalMediationPolicy(uuid);
                    MediationDTO updatedMediationDTO =
                            MediationMappingUtil.fromMediationToDTO(updatedMediation);
                    URI uploadedMediationUri = new URI(updatedPolicyUrl);
                    return Response.ok(uploadedMediationUri).entity(updatedMediationDTO).build();
                }
            } else {
                //If resource not exists
                RestApiUtil.handleResourceNotFoundError(RestApiConstants.RESOURCE_POLICY, mediationPolicyId, log);
            }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while getting Application Policy. policy uuid: " + id;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Updates/adds a new Application throttle policy to the system
     *
     * @param id          Uuid of the policy.
     * @param body              DTO object including the Policy meta information
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Response object  response object with the updated application throttle policy resource
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingApplicationIdPut(String id, ApplicationThrottlePolicyDTO body, String ifMatch,
            String ifUnmodifiedSince, Request request) throws NotFoundException {

        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.application;
        if (log.isDebugEnabled()) {
            log.info("Received Application Policy PUT request " + body + " with tierLevel = " + tierLevel);
        }

        try {
<<<<<<< HEAD
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            ApplicationPolicy applicationPolicy = ApplicationThrottlePolicyMappingUtil
                    .fromApplicationThrottlePolicyDTOToModel(body);
            applicationPolicy.setUuid(id);
            apiMgtAdminService.updateApplicationPolicy(applicationPolicy);
            return Response.status(Response.Status.OK).entity(ApplicationThrottlePolicyMappingUtil.
                    fromApplicationThrottlePolicyToDTO(apiMgtAdminService.getApplicationPolicyByUuid(id))).
                    build();

=======
            APIProvider apiProvider = RestApiUtil.getLoggedInUserProvider();
            String content = body.getConfig();
            contentStream = new ByteArrayInputStream(content.getBytes
                    (StandardCharsets.UTF_8));
            ResourceFile contentFile = new ResourceFile(contentStream, contentType);
            //Extracting mediation policy name from the mediation config
            String fileName = this.getMediationNameFromConfig(content);
            //constructing the registry resource path
            String mediationPolicyPath = APIConstants.API_CUSTOM_SEQUENCE_LOCATION +
                    RegistryConstants.PATH_SEPARATOR + body.getType() +
                    RegistryConstants.PATH_SEPARATOR + fileName;
            if (apiProvider.checkIfResourceExists(mediationPolicyPath)) {
                RestApiUtil.handleConflict("Mediation policy already exists", log);
            }
            //Adding new global mediation sequence
            String mediationPolicyUrl =
                    apiProvider.addResourceFile(mediationPolicyPath, contentFile);
            if (StringUtils.isNotBlank(mediationPolicyUrl)) {
                //Getting the uuid of the created global mediation policy
                String uuid = apiProvider.getCreatedResourceUuid(mediationPolicyPath);
                //Getting created mediation policy
                Mediation createdMediation = apiProvider.getGlobalMediationPolicy(uuid);
                MediationDTO createdPolicy =
                        MediationMappingUtil.fromMediationToDTO(createdMediation);
                URI uploadedMediationUri = new URI(mediationPolicyUrl);
                return Response.created(uploadedMediationUri).entity(createdPolicy).build();
            }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while updating Application Policy. policy uuid: " + id;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Retrieves all custom policies.
     *
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return All matched Global Throttle policies to the given request
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingCustomGet(String ifNoneMatch, String ifModifiedSince, Request request)
            throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.debug("Received Custom Policy GET request.");
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            List<CustomPolicy> policies = apiMgtAdminService.getCustomRules();
            CustomRuleListDTO customRuleListDTO = CustomPolicyMappingUtil.fromCustomPolicyArrayToListDTO(policies);
            return Response.ok().entity(customRuleListDTO).build();

        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while retrieving custom policies";
            org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Add a Custom Policy.
     *
     * @param body        DTO of new policy to be created
     * @param request     msf4j request object
     * @return Created policy along with the location of it with Location header
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingCustomPost(CustomRuleDTO body, Request request)
            throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.debug("Received Custom Policy POST request " + body);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            CustomPolicy customPolicy = CustomPolicyMappingUtil.fromCustomPolicyDTOToModel(body);
            String uuid = apiMgtAdminService.addCustomRule(customPolicy);
            return Response.status(Response.Status.CREATED)
                    .entity(CustomPolicyMappingUtil.fromCustomPolicyToDTO(apiMgtAdminService.getCustomRuleByUUID(uuid)))
                    .build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while adding custom policy, policy name: " + body.getPolicyName();
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Delete a custom rule specified by uuid.
     *
     * @param ruleId            uuid of the policy
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return 200 OK response if successfully deleted the policy
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingCustomRuleIdDelete(String ruleId, String ifMatch, String ifUnmodifiedSince,
            Request request) throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.debug("Received Custom Policy DELETE request with rule ID = " + ruleId);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            apiMgtAdminService.deleteCustomRule(ruleId);
            return Response.ok().build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while deleting a custom policy uuid : " + ruleId;
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.TIER, ruleId);
            org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO errorDTO = RestApiUtil
                    .getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Get a specific custom rule by its id.
     *
     * @param ruleId          uuid of the policy
     * @param ifNoneMatch     If-None-Match header value
     * @param ifModifiedSince If-Modified-Since header value
     * @param request         msf4j request object
     * @return Matched Global Throttle Policy by the given name
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingCustomRuleIdGet(String ruleId, String ifNoneMatch, String ifModifiedSince,
            Request request) throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.debug("Received Custom Policy GET request with rule ID = " + ruleId);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            CustomPolicy customPolicy = apiMgtAdminService.getCustomRuleByUUID(ruleId);
            CustomRuleDTO dto = CustomPolicyMappingUtil.fromCustomPolicyToDTO(customPolicy);
            return Response.status(Response.Status.OK).entity(dto).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while getting custom policy. policy uuid: " + ruleId;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Updates a given Global level policy/custom rule specified by uuid.
     *
     * @param ruleId            uuid of the policy
     * @param body              DTO of policy to be updated
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Updated policy
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingCustomRuleIdPut(String ruleId, CustomRuleDTO body, String ifMatch,
            String ifUnmodifiedSince, Request request) throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.debug("Received Custom Policy PUT request " + body + " with rule ID = " + ruleId);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            CustomPolicy customPolicy = CustomPolicyMappingUtil.fromCustomPolicyDTOToModel(body);
            customPolicy.setUuid(ruleId);
            apiMgtAdminService.updateCustomRule(customPolicy);
            return Response.status(Response.Status.OK).entity(CustomPolicyMappingUtil
                    .fromCustomPolicyToDTO(apiMgtAdminService.getCustomRuleByUUID(ruleId))).build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while updating Custom Policy. policy ID: " + ruleId;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Adds a new Application throttle policy to the system
     *
     * @param body              DTO object including the Policy meta information
     * @param request           msf4j request object
     * @return Response object  response object with the created application throttle policy resource
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingApplicationPost(ApplicationThrottlePolicyDTO body, Request request)
            throws NotFoundException {

        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.application;
        if (log.isDebugEnabled()) {
            log.info("Received Application Policy PUT request " + body + " with tierLevel = " + tierLevel);
        }

        String policyName = null;
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            ApplicationPolicy applicationPolicy = ApplicationThrottlePolicyMappingUtil.
                    fromApplicationThrottlePolicyDTOToModel(body);
            policyName = applicationPolicy.getPolicyName();
            String applicationPolicyUuid = apiMgtAdminService.addApplicationPolicy(applicationPolicy);
            return Response.status(Response.Status.CREATED).entity(ApplicationThrottlePolicyMappingUtil
                    .fromApplicationThrottlePolicyToDTO(apiMgtAdminService
                            .getApplicationPolicyByUuid(applicationPolicyUuid))).build();

        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while adding Application Policy. policy name: " + policyName;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Get subscription level policies
     * 
     * @param ifNoneMatch       If-None-Match header value
     * @param ifModifiedSince   If-Modified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingSubscriptionGet(String ifNoneMatch, String ifModifiedSince, Request request)
            throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.debug("Received Application Throttle Policy GET request");
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            List<SubscriptionPolicy> policies = apiMgtAdminService.getSubscriptionPolicies();
            SubscriptionThrottlePolicyListDTO subscriptionThrottlePolicyListDTO = SubscriptionThrottlePolicyMappingUtil
                    .fromSubscriptionPolicyArrayToListDTO(policies);
            return Response.ok().entity(subscriptionThrottlePolicyListDTO).build();

        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while retrieving Application Policies";
            org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Delete subscription level policy
     * 
     * @param id          Uuid of the Subscription policy.
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingSubscriptionIdDelete(String id, String ifMatch, String ifUnmodifiedSince,
            Request request) throws NotFoundException {
        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.subscription;
        if (log.isDebugEnabled()) {
            log.info("Received Advance Policy DELETE request with uuid: " + id);
        }
        return deletePolicy(id, tierLevel);
    }

    /**
     * Get subscription level policy by ID
     * 
     * @param id          Uuid of the Subscription policy
     * @param ifNoneMatch       If-None-Match header value
     * @param ifModifiedSince   If-Modified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingSubscriptionIdGet(String id, String ifNoneMatch, String ifModifiedSince,
            Request request) throws NotFoundException {
        if (log.isDebugEnabled()) {
            log.info("Received Subscription Policy Get request. Policy uuid: " + id);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            SubscriptionPolicy subscriptionPolicy = apiMgtAdminService.getSubscriptionPolicyByUuid(id);
            SubscriptionThrottlePolicyDTO subscriptionThrottlePolicyDTO = SubscriptionThrottlePolicyMappingUtil
                    .fromSubscriptionThrottlePolicyToDTO(subscriptionPolicy);
            return Response.status(Response.Status.OK).entity(subscriptionThrottlePolicyDTO).build();

        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while getting Subscription Policy. policy uuid: " + id;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    /**
     * Update subscription level policy
     * 
     * @param id          Uuid of the Subscription policy.
     * @param body              DTO object including the Policy meta information
     * @param ifMatch           If-Match header value
     * @param ifUnmodifiedSince If-Unmodified-Since header value
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingSubscriptionIdPut(String id, SubscriptionThrottlePolicyDTO body, String ifMatch,
            String ifUnmodifiedSince, Request request) throws NotFoundException {
        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.subscription;
        if (log.isDebugEnabled()) {
            log.info("Received Subscription Policy PUT request " + body + " with tierLevel = " + tierLevel);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            SubscriptionPolicy subscriptionPolicy = SubscriptionThrottlePolicyMappingUtil
                    .fromSubscriptionThrottlePolicyDTOToModel(body);
            subscriptionPolicy.setUuid(id);
            apiMgtAdminService.updateSubscriptionPolicy(subscriptionPolicy);
            return Response.status(Response.Status.CREATED).entity(SubscriptionThrottlePolicyMappingUtil
                    .fromSubscriptionThrottlePolicyToDTO(apiMgtAdminService.
                            getSubscriptionPolicyByUuid(subscriptionPolicy.getUuid()))).build();

        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while updating Application Policy. policy uuid: " + id;
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();

        }
    }

    /**
     * Add subscription level policy
     * 
     * @param body              DTO object including the Policy meta information
     * @param request           msf4j request object
     * @return Response object
     * @throws NotFoundException if an error occurred when particular resource does not exits in the system.
     */
    @Override
    public Response policiesThrottlingSubscriptionPost(SubscriptionThrottlePolicyDTO body, Request request)
            throws NotFoundException {
        APIMgtAdminService.PolicyLevel tierLevel = APIMgtAdminService.PolicyLevel.subscription;
        if (log.isDebugEnabled()) {
            log.info("Received Subscription Policy POST request " + body + " with tierLevel = " + tierLevel);
        }
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            SubscriptionPolicy subscriptionPolicy = SubscriptionThrottlePolicyMappingUtil
                    .fromSubscriptionThrottlePolicyDTOToModel(body);
            String policyId = apiMgtAdminService.addSubscriptionPolicy(subscriptionPolicy);
            return Response.status(Response.Status.CREATED).entity(SubscriptionThrottlePolicyMappingUtil
                    .fromSubscriptionThrottlePolicyToDTO(apiMgtAdminService.getSubscriptionPolicyByUuid(policyId)))
                    .build();

        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while adding Subscription Policy. policy name: "
                    + body.getPolicyName();
            ErrorDTO errorDTO = RestApiUtil.getErrorDTO(e.getErrorHandler());
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

    private Response deletePolicy(String policyId, APIMgtAdminService.PolicyLevel tierLevel) {
        try {
            APIMgtAdminService apiMgtAdminService = RestApiUtil.getAPIMgtAdminService();
            apiMgtAdminService.deletePolicyByUuid(policyId, tierLevel);
            return Response.ok().build();
        } catch (APIManagementException e) {
            String errorMessage = "Error occurred while deleting a Policy uuid : " + policyId;
            Map<String, String> paramList = new HashMap<>();
            paramList.put(APIMgtConstants.ExceptionsConstants.TIER, policyId);
            org.wso2.carbon.apimgt.rest.api.common.dto.ErrorDTO errorDTO = RestApiUtil
                    .getErrorDTO(e.getErrorHandler(), paramList);
            log.error(errorMessage, e);
            return Response.status(e.getErrorHandler().getHttpStatusCode()).entity(errorDTO).build();
        }
    }

}
