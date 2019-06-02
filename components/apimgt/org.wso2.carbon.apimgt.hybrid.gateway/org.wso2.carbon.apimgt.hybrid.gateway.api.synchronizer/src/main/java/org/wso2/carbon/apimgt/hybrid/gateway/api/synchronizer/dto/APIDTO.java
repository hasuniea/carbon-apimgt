/*
 *  Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

package org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
=======
import javax.validation.constraints.NotNull;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
import org.wso2.carbon.apimgt.rest.api.publisher.dto.API_businessInformationDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.API_corsConfigurationDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.API_endpointDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.API_operationsDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.API_threatProtectionPoliciesDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.dto.SequenceDTO;
import java.util.Objects;

/**
 * APIDTO
 */
public class APIDTO   {
  @SerializedName("id")
  private String id = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("context")
  private String context = null;

  @SerializedName("version")
  private String version = null;

  @SerializedName("provider")
  private String provider = null;

  @SerializedName("wsdlUri")
  private String wsdlUri = null;

  @SerializedName("lifeCycleStatus")
  private String lifeCycleStatus = null;

  @SerializedName("workflowStatus")
  private String workflowStatus = null;

  @SerializedName("createdTime")
  private String createdTime = null;

  @SerializedName("apiPolicy")
  private String apiPolicy = null;

  @SerializedName("lastUpdatedTime")
  private String lastUpdatedTime = null;

  @SerializedName("responseCaching")
  private String responseCaching = null;

  @SerializedName("cacheTimeout")
  private Integer cacheTimeout = null;

  @SerializedName("destinationStatsEnabled")
  private String destinationStatsEnabled = null;

  @SerializedName("isDefaultVersion")
  private Boolean isDefaultVersion = null;

  @SerializedName("transport")
  private List<String> transport = new ArrayList<String>();

  @SerializedName("tags")
  private List<String> tags = new ArrayList<String>();

  @SerializedName("hasOwnGateway")
  private Boolean hasOwnGateway = null;

  @SerializedName("labels")
  private List<String> labels = new ArrayList<String>();

  @SerializedName("policies")
  private List<String> policies = new ArrayList<String>();

  /**
   * Gets or Sets visibility
   */
  public enum VisibilityEnum {
    @SerializedName("PUBLIC")
    PUBLIC("PUBLIC"),
    
    @SerializedName("PRIVATE")
    PRIVATE("PRIVATE"),
    
    @SerializedName("RESTRICTED")
    RESTRICTED("RESTRICTED");

    private String value;

    VisibilityEnum(String value) {
      this.value = value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static VisibilityEnum fromValue(String text) {
      for (VisibilityEnum b : VisibilityEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @SerializedName("visibility")
  private VisibilityEnum visibility = null;

  @SerializedName("visibleRoles")
  private List<String> visibleRoles = new ArrayList<String>();

  @SerializedName("permission")
  private String permission = null;

  @SerializedName("userPermissionsForApi")
  private List<String> userPermissionsForApi = new ArrayList<String>();

  @SerializedName("visibleTenants")
  private List<String> visibleTenants = new ArrayList<String>();

  @SerializedName("gatewayEnvironments")
  private String gatewayEnvironments = null;

  @SerializedName("sequences")
  private List<SequenceDTO> sequences = new ArrayList<SequenceDTO>();

  @SerializedName("businessInformation")
  private API_businessInformationDTO businessInformation = null;

  @SerializedName("corsConfiguration")
  private API_corsConfigurationDTO corsConfiguration = null;

  @SerializedName("endpoint")
  private List<API_endpointDTO> endpoint = new ArrayList<API_endpointDTO>();

  @SerializedName("securityScheme")
  private List<String> securityScheme = new ArrayList<String>();

  @SerializedName("scopes")
  private List<String> scopes = new ArrayList<String>();

  @SerializedName("operations")
  private List<API_operationsDTO> operations = new ArrayList<API_operationsDTO>();

  @SerializedName("threatProtectionPolicies")
  private API_threatProtectionPoliciesDTO threatProtectionPolicies = null;

  public APIDTO id(String id) {
    this.id = id;
    return this;
  }

   /**
   * UUID of the api registry artifact 
   * @return id
  **/
  @ApiModelProperty(example = "01234567-0123-0123-0123-012345678901", value = "UUID of the api registry artifact ")
=======
import java.util.Map;

@ApiModel(description = "")
public class APIDTO  {

  private String id = null;

  @NotNull
  private String name = null;

  private String description = null;

  @NotNull
  private String context = null;

  @NotNull
  private String version = null;

  private String provider = null;

  private String apiDefinition = null;

  private String wsdlUri = null;

  private String status = null;

  private String responseCaching = null;

  private Integer cacheTimeout = null;

  private String destinationStatsEnabled = null;

  @NotNull
  private Boolean isDefaultVersion = null;

  public enum TypeEnum {
     HTTP,  WS,
  };

  @NotNull
  private TypeEnum type = TypeEnum.HTTP;

  @NotNull
  private List<String> transport = new ArrayList<String>();

  private List<String> tags = new ArrayList<String>();

  @NotNull
  private List<String> tiers = new ArrayList<String>();

  private String apiLevelPolicy = null;

  private APIMaxTpsDTO maxTps = null;

  private String thumbnailUri = null;

  public enum VisibilityEnum {
     PUBLIC,  PRIVATE,  RESTRICTED,  CONTROLLED,
  };

  @NotNull
  private VisibilityEnum visibility = null;

  private List<String> visibleRoles = new ArrayList<String>();

  public enum AccessControlEnum {
    NONE,  RESTRICTED
  };

  private AccessControlEnum accessControl = null;

  private List<String> accessControlRoles = new ArrayList<String>();

  private List<String> visibleTenants = new ArrayList<String>();

  @NotNull
  private String endpointConfig = null;

  private APIEndpointSecurityDTO endpointSecurity = null;

  private String gatewayEnvironments = null;

  private List<SequenceDTO> sequences = new ArrayList<SequenceDTO>();

  public enum SubscriptionAvailabilityEnum {
     current_tenant,  all_tenants,  specific_tenants,
  };

  private SubscriptionAvailabilityEnum subscriptionAvailability = null;

  private List<String> subscriptionAvailableTenants = new ArrayList<String>();

  private APIBusinessInformationDTO businessInformation = null;

  private APICorsConfigurationDTO corsConfiguration = null;

  private Map<String, String> additionalProperties = new HashMap<>();

  private String authorizationHeader = null;

  private String apiSecurity = null;

  private List<LabelDTO> labels = new ArrayList<LabelDTO>();

  /**
   * UUID of the api registry artifact\n
   **/
  @ApiModelProperty(value = "UUID of the api registry artifact\n")
  @JsonProperty("id")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(example = "CalculatorAPI", required = true, value = "")
=======
  /**
   * Name of the API
   **/
  @ApiModelProperty(required = true, value = "Name of the API")
  @JsonProperty("name")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @ApiModelProperty(example = "A calculator API that supports basic operations", value = "")
=======
  /**
   * A brief description about the API
   **/
  @ApiModelProperty(value = "A brief description about the API")
  @JsonProperty("description")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO context(String context) {
    this.context = context;
    return this;
  }

   /**
   * Get context
   * @return context
  **/
  @ApiModelProperty(example = "CalculatorAPI", required = true, value = "")
=======
  /**
   * A string that represents the context of the user's request
   **/
  @ApiModelProperty(required = true, value = "A string that represents the context of the user's request")
  @JsonProperty("context")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getContext() {
    return context;
  }

  public void setContext(String context) {
    this.context = context;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO version(String version) {
    this.version = version;
    return this;
  }

   /**
   * Get version
   * @return version
  **/
  @ApiModelProperty(example = "1.0.0", required = true, value = "")
=======
  /**
   * The version of the API
   **/
  @ApiModelProperty(required = true, value = "The version of the API")
  @JsonProperty("version")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getVersion() {
    return version;
  }

  public void setVersion(String version) {
    this.version = version;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO provider(String provider) {
    this.provider = provider;
    return this;
  }

   /**
   * If the provider value is not given user invoking the api will be used as the provider. 
   * @return provider
  **/
  @ApiModelProperty(example = "admin", value = "If the provider value is not given user invoking the api will be used as the provider. ")
=======
  /**
   * If the provider value is not given user invoking the api will be used as the provider.\n
   **/
  @ApiModelProperty(value = "If the provider value is not given user invoking the api will be used as the provider.\n")
  @JsonProperty("provider")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getProvider() {
    return provider;
  }

  public void setProvider(String provider) {
    this.provider = provider;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO wsdlUri(String wsdlUri) {
    this.wsdlUri = wsdlUri;
    return this;
  }

   /**
   * WSDL URL if the API is based on a WSDL endpoint 
   * @return wsdlUri
  **/
  @ApiModelProperty(example = "http://www.webservicex.com/globalweather.asmx?wsdl", value = "WSDL URL if the API is based on a WSDL endpoint ")
=======
  /**
   * Swagger definition of the API which contains details about URI templates and scopes\n
   **/
  @ApiModelProperty(value = "Swagger definition of the API which contains details about URI templates and scopes\n")
  @JsonProperty("apiDefinition")
  public String getApiDefinition() {
    return apiDefinition;
  }
  public void setApiDefinition(String apiDefinition) {
    this.apiDefinition = apiDefinition;
  }

  /**
   * WSDL URL if the API is based on a WSDL endpoint\n
   **/
  @ApiModelProperty(value = "WSDL URL if the API is based on a WSDL endpoint\n")
  @JsonProperty("wsdlUri")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getWsdlUri() {
    return wsdlUri;
  }

  public void setWsdlUri(String wsdlUri) {
    this.wsdlUri = wsdlUri;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO lifeCycleStatus(String lifeCycleStatus) {
    this.lifeCycleStatus = lifeCycleStatus;
    return this;
=======
  /**
   * This describes in which status of the lifecycle the API is
   **/
  @ApiModelProperty(value = "This describes in which status of the lifecycle the API is")
  @JsonProperty("status")
  public String getStatus() {
    return status;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  }

   /**
   * Get lifeCycleStatus
   * @return lifeCycleStatus
  **/
  @ApiModelProperty(example = "CREATED", value = "")
  public String getLifeCycleStatus() {
    return lifeCycleStatus;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public void setLifeCycleStatus(String lifeCycleStatus) {
    this.lifeCycleStatus = lifeCycleStatus;
  }

  public APIDTO workflowStatus(String workflowStatus) {
    this.workflowStatus = workflowStatus;
    return this;
  }

   /**
   * Get workflowStatus
   * @return workflowStatus
  **/
  @ApiModelProperty(example = "APPROVED", value = "")
  public String getWorkflowStatus() {
    return workflowStatus;
  }

  public void setWorkflowStatus(String workflowStatus) {
    this.workflowStatus = workflowStatus;
  }

  public APIDTO createdTime(String createdTime) {
    this.createdTime = createdTime;
    return this;
  }

   /**
   * Get createdTime
   * @return createdTime
  **/
  @ApiModelProperty(example = "2017-02-20T13:57:16.229+0000", value = "")
  public String getCreatedTime() {
    return createdTime;
  }

  public void setCreatedTime(String createdTime) {
    this.createdTime = createdTime;
  }

  public APIDTO apiPolicy(String apiPolicy) {
    this.apiPolicy = apiPolicy;
    return this;
  }

   /**
   * Get apiPolicy
   * @return apiPolicy
  **/
  @ApiModelProperty(example = "UNLIMITED", value = "")
  public String getApiPolicy() {
    return apiPolicy;
  }

  public void setApiPolicy(String apiPolicy) {
    this.apiPolicy = apiPolicy;
  }

  public APIDTO lastUpdatedTime(String lastUpdatedTime) {
    this.lastUpdatedTime = lastUpdatedTime;
    return this;
  }

   /**
   * Get lastUpdatedTime
   * @return lastUpdatedTime
  **/
  @ApiModelProperty(example = "2017-02-20T13:57:16.229+0000", value = "")
  public String getLastUpdatedTime() {
    return lastUpdatedTime;
  }

  public void setLastUpdatedTime(String lastUpdatedTime) {
    this.lastUpdatedTime = lastUpdatedTime;
  }

  public APIDTO responseCaching(String responseCaching) {
    this.responseCaching = responseCaching;
    return this;
  }

   /**
   * Get responseCaching
   * @return responseCaching
  **/
  @ApiModelProperty(example = "Disabled", value = "")
=======
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("responseCaching")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getResponseCaching() {
    return responseCaching;
  }

  public void setResponseCaching(String responseCaching) {
    this.responseCaching = responseCaching;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO cacheTimeout(Integer cacheTimeout) {
    this.cacheTimeout = cacheTimeout;
    return this;
  }

   /**
   * Get cacheTimeout
   * @return cacheTimeout
  **/
  @ApiModelProperty(example = "300", value = "")
=======
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("cacheTimeout")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public Integer getCacheTimeout() {
    return cacheTimeout;
  }

  public void setCacheTimeout(Integer cacheTimeout) {
    this.cacheTimeout = cacheTimeout;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO destinationStatsEnabled(String destinationStatsEnabled) {
    this.destinationStatsEnabled = destinationStatsEnabled;
    return this;
  }

   /**
   * Get destinationStatsEnabled
   * @return destinationStatsEnabled
  **/
  @ApiModelProperty(example = "Disabled", value = "")
=======
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("destinationStatsEnabled")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getDestinationStatsEnabled() {
    return destinationStatsEnabled;
  }

  public void setDestinationStatsEnabled(String destinationStatsEnabled) {
    this.destinationStatsEnabled = destinationStatsEnabled;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO isDefaultVersion(Boolean isDefaultVersion) {
    this.isDefaultVersion = isDefaultVersion;
    return this;
  }

   /**
   * Get isDefaultVersion
   * @return isDefaultVersion
  **/
  @ApiModelProperty(example = "false", required = true, value = "")
=======
  /**
   **/
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("isDefaultVersion")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public Boolean getIsDefaultVersion() {
    return isDefaultVersion;
  }

  public void setIsDefaultVersion(Boolean isDefaultVersion) {
    this.isDefaultVersion = isDefaultVersion;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO transport(List<String> transport) {
    this.transport = transport;
    return this;
=======
  /**
   **/
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("type")
  public TypeEnum getType() {
    return type;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  }

  public APIDTO addTransportItem(String transportItem) {
    this.transport.add(transportItem);
    return this;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
   /**
   * Supported transports for the API (http and/or https). 
   * @return transport
  **/
  @ApiModelProperty(example = "[\"http\",\"https\"]", required = true, value = "Supported transports for the API (http and/or https). ")
=======
  /**
   * Supported transports for the API (http and/or https).\n
   **/
  @ApiModelProperty(required = true, value = "Supported transports for the API (http and/or https).\n")
  @JsonProperty("transport")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public List<String> getTransport() {
    return transport;
  }

  public void setTransport(List<String> transport) {
    this.transport = transport;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO tags(List<String> tags) {
    this.tags = tags;
    return this;
  }

  public APIDTO addTagsItem(String tagsItem) {
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @ApiModelProperty(example = "[\"substract\",\"add\"]", value = "")
=======
  /**
   * Search keywords related to the API
   **/
  @ApiModelProperty(value = "Search keywords related to the API")
  @JsonProperty("tags")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public List<String> getTags() {
    return tags;
  }

  public void setTags(List<String> tags) {
    this.tags = tags;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO hasOwnGateway(Boolean hasOwnGateway) {
    this.hasOwnGateway = hasOwnGateway;
    return this;
=======
  /**
   * The subscription tiers selected for the particular API
   **/
  @ApiModelProperty(required = true, value = "The subscription tiers selected for the particular API")
  @JsonProperty("tiers")
  public List<String> getTiers() {
    return tiers;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  }

   /**
   * Get hasOwnGateway
   * @return hasOwnGateway
  **/
  @ApiModelProperty(example = "false", value = "")
  public Boolean getHasOwnGateway() {
    return hasOwnGateway;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public void setHasOwnGateway(Boolean hasOwnGateway) {
    this.hasOwnGateway = hasOwnGateway;
=======
  /**
   * The policy selected for the particular API
   **/
  @ApiModelProperty(value = "The policy selected for the particular API")
  @JsonProperty("apiLevelPolicy")
  public String getApiLevelPolicy() {
    return apiLevelPolicy;
  }
  public void setApiLevelPolicy(String apiLevelPolicy) {
    this.apiLevelPolicy = apiLevelPolicy;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("maxTps")
  public APIMaxTpsDTO getMaxTps() {
    return maxTps;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  }

  public APIDTO labels(List<String> labels) {
    this.labels = labels;
    return this;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO addLabelsItem(String labelsItem) {
    this.labels.add(labelsItem);
    return this;
=======
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("thumbnailUri")
  public String getThumbnailUri() {
    return thumbnailUri;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  }

   /**
   * Get labels
   * @return labels
  **/
  @ApiModelProperty(example = "[\"public\",\"private\"]", value = "")
  public List<String> getLabels() {
    return labels;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public void setLabels(List<String> labels) {
    this.labels = labels;
  }

  public APIDTO policies(List<String> policies) {
    this.policies = policies;
    return this;
  }

  public APIDTO addPoliciesItem(String policiesItem) {
    this.policies.add(policiesItem);
    return this;
  }

   /**
   * Get policies
   * @return policies
  **/
  @ApiModelProperty(example = "[\"Unlimited\"]", required = true, value = "")
  public List<String> getPolicies() {
    return policies;
  }

  public void setPolicies(List<String> policies) {
    this.policies = policies;
  }

  public APIDTO visibility(VisibilityEnum visibility) {
    this.visibility = visibility;
    return this;
  }

   /**
   * Get visibility
   * @return visibility
  **/
  @ApiModelProperty(example = "PUBLIC", required = true, value = "")
=======
  /**
   **/
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("visibility")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public VisibilityEnum getVisibility() {
    return visibility;
  }

  public void setVisibility(VisibilityEnum visibility) {
    this.visibility = visibility;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO visibleRoles(List<String> visibleRoles) {
    this.visibleRoles = visibleRoles;
    return this;
  }

  public APIDTO addVisibleRolesItem(String visibleRolesItem) {
    this.visibleRoles.add(visibleRolesItem);
    return this;
  }

   /**
   * Get visibleRoles
   * @return visibleRoles
  **/
  @ApiModelProperty(example = "[]", value = "")
=======
  /**
   * The user roles that are able to access the API
   **/
  @ApiModelProperty(value = "The user roles that are able to access the API")
  @JsonProperty("visibleRoles")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public List<String> getVisibleRoles() {
    return visibleRoles;
  }

  public void setVisibleRoles(List<String> visibleRoles) {
    this.visibleRoles = visibleRoles;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO permission(String permission) {
    this.permission = permission;
    return this;
=======
  /**
   * Publisher access control related parameters getters and setters.
   *
   */
  @ApiModelProperty(value = "AccessControl")
  @JsonProperty("accessControl")
  public AccessControlEnum getAccessControl() {
    return accessControl;
  }
  public void setAccessControl(AccessControlEnum accessControl) {
    this.accessControl = accessControl;
  }

  @ApiModelProperty(value = "The user roles that are able to access the API in publisher")
  @JsonProperty("accessControlRoles")
  public List<String> getAccessControlRoles() {
    return accessControlRoles;
  }
  public void setAccessControlRoles(List<String> accessControlRoles) {
    this.accessControlRoles = accessControlRoles;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("visibleTenants")
  public List<String> getVisibleTenants() {
    return visibleTenants;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  }

   /**
   * Get permission
   * @return permission
  **/
  @ApiModelProperty(example = "[{\"groupId\" : 1000, \"permission\" : [\"READ\",\"UPDATE\"]},{\"groupId\" : 1001, \"permission\" : [\"READ\",\"UPDATE\"]}]", value = "")
  public String getPermission() {
    return permission;
  }

  public void setPermission(String permission) {
    this.permission = permission;
  }

  public APIDTO userPermissionsForApi(List<String> userPermissionsForApi) {
    this.userPermissionsForApi = userPermissionsForApi;
    return this;
  }

  public APIDTO addUserPermissionsForApiItem(String userPermissionsForApiItem) {
    this.userPermissionsForApi.add(userPermissionsForApiItem);
    return this;
  }

   /**
   * LoggedIn user permissions for the API 
   * @return userPermissionsForApi
  **/
  @ApiModelProperty(example = "[\"READ\",\"UPDATE\"]", value = "LoggedIn user permissions for the API ")
  public List<String> getUserPermissionsForApi() {
    return userPermissionsForApi;
  }

  public void setUserPermissionsForApi(List<String> userPermissionsForApi) {
    this.userPermissionsForApi = userPermissionsForApi;
  }

  public APIDTO visibleTenants(List<String> visibleTenants) {
    this.visibleTenants = visibleTenants;
    return this;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO addVisibleTenantsItem(String visibleTenantsItem) {
    this.visibleTenants.add(visibleTenantsItem);
    return this;
=======
  /**
   **/
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("endpointConfig")
  public String getEndpointConfig() {
    return endpointConfig;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  }

   /**
   * Get visibleTenants
   * @return visibleTenants
  **/
  @ApiModelProperty(example = "[]", value = "")
  public List<String> getVisibleTenants() {
    return visibleTenants;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public void setVisibleTenants(List<String> visibleTenants) {
    this.visibleTenants = visibleTenants;
=======
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("endpointSecurity")
  public APIEndpointSecurityDTO getEndpointSecurity() {
    return endpointSecurity;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  }

  public APIDTO gatewayEnvironments(String gatewayEnvironments) {
    this.gatewayEnvironments = gatewayEnvironments;
    return this;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
   /**
   * Comma separated list of gateway environments. 
   * @return gatewayEnvironments
  **/
  @ApiModelProperty(example = "Production and Sandbox", value = "Comma separated list of gateway environments. ")
=======
  /**
   * Comma separated list of gateway environments.\n
   **/
  @ApiModelProperty(value = "Comma separated list of gateway environments.\n")
  @JsonProperty("gatewayEnvironments")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public String getGatewayEnvironments() {
    return gatewayEnvironments;
  }

  public void setGatewayEnvironments(String gatewayEnvironments) {
    this.gatewayEnvironments = gatewayEnvironments;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO sequences(List<SequenceDTO> sequences) {
    this.sequences = sequences;
    return this;
  }

  public APIDTO addSequencesItem(SequenceDTO sequencesItem) {
    this.sequences.add(sequencesItem);
    return this;
  }

   /**
   * Get sequences
   * @return sequences
  **/
  @ApiModelProperty(example = "[]", value = "")
=======
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("sequences")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  public List<SequenceDTO> getSequences() {
    return sequences;
  }

  public void setSequences(List<SequenceDTO> sequences) {
    this.sequences = sequences;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO businessInformation(API_businessInformationDTO businessInformation) {
    this.businessInformation = businessInformation;
    return this;
  }

   /**
   * Get businessInformation
   * @return businessInformation
  **/
=======
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  @ApiModelProperty(value = "")
  public API_businessInformationDTO getBusinessInformation() {
    return businessInformation;
  }

  public void setBusinessInformation(API_businessInformationDTO businessInformation) {
    this.businessInformation = businessInformation;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO corsConfiguration(API_corsConfigurationDTO corsConfiguration) {
    this.corsConfiguration = corsConfiguration;
    return this;
  }

   /**
   * Get corsConfiguration
   * @return corsConfiguration
  **/
=======
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  @ApiModelProperty(value = "")
  public API_corsConfigurationDTO getCorsConfiguration() {
    return corsConfiguration;
  }

  public void setCorsConfiguration(API_corsConfigurationDTO corsConfiguration) {
    this.corsConfiguration = corsConfiguration;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO endpoint(List<API_endpointDTO> endpoint) {
    this.endpoint = endpoint;
    return this;
  }

  public APIDTO addEndpointItem(API_endpointDTO endpointItem) {
    this.endpoint.add(endpointItem);
    return this;
  }

   /**
   * Get endpoint
   * @return endpoint
  **/
=======
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  @ApiModelProperty(value = "")
  public List<API_endpointDTO> getEndpoint() {
    return endpoint;
  }

  public void setEndpoint(List<API_endpointDTO> endpoint) {
    this.endpoint = endpoint;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
  public APIDTO securityScheme(List<String> securityScheme) {
    this.securityScheme = securityScheme;
    return this;
  }

  public APIDTO addSecuritySchemeItem(String securitySchemeItem) {
    this.securityScheme.add(securitySchemeItem);
    return this;
  }

   /**
   * Get securityScheme
   * @return securityScheme
  **/
=======
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
  @ApiModelProperty(value = "")
  public List<String> getSecurityScheme() {
    return securityScheme;
  }

  public void setSecurityScheme(List<String> securityScheme) {
    this.securityScheme = securityScheme;
  }

  public APIDTO scopes(List<String> scopes) {
    this.scopes = scopes;
    return this;
  }

  public APIDTO addScopesItem(String scopesItem) {
    this.scopes.add(scopesItem);
    return this;
  }

   /**
   * Get scopes
   * @return scopes
  **/
  @ApiModelProperty(value = "")
  public List<String> getScopes() {
    return scopes;
  }

  public void setScopes(List<String> scopes) {
    this.scopes = scopes;
  }

  public APIDTO operations(List<API_operationsDTO> operations) {
    this.operations = operations;
    return this;
  }

  public APIDTO addOperationsItem(API_operationsDTO operationsItem) {
    this.operations.add(operationsItem);
    return this;
  }

   /**
   * Get operations
   * @return operations
  **/
  @ApiModelProperty(value = "")
  public List<API_operationsDTO> getOperations() {
    return operations;
  }

  public void setOperations(List<API_operationsDTO> operations) {
    this.operations = operations;
  }

  public APIDTO threatProtectionPolicies(API_threatProtectionPoliciesDTO threatProtectionPolicies) {
    this.threatProtectionPolicies = threatProtectionPolicies;
    return this;
  }

   /**
   * Get threatProtectionPolicies
   * @return threatProtectionPolicies
  **/
  @ApiModelProperty(value = "")
  public API_threatProtectionPoliciesDTO getThreatProtectionPolicies() {
    return threatProtectionPolicies;
  }

  public void setThreatProtectionPolicies(API_threatProtectionPoliciesDTO threatProtectionPolicies) {
    this.threatProtectionPolicies = threatProtectionPolicies;
  }

<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
=======
  /**
   * Custom properties for the API
   **/
  @ApiModelProperty(value = "Custom properties for the API")
  @JsonProperty("additionalProperties")
  public Map<String, String> getAdditionalProperties() {
    return additionalProperties;
  }
  public void setAdditionalProperties(Map<String, String> additionalProperties) {
    this.additionalProperties = additionalProperties;
  }

  /**
   * Name of the Authorization header used for invoking the API. If it is not set, Authorization header name specified\nin tenant or system level will be used.\n
   **/
  @ApiModelProperty(value = "Name of the Authorization header used for invoking the API. If it is not set, Authorization header name specified\nin tenant or system level will be used.\n")
  @JsonProperty("authorizationHeader")
  public String getAuthorizationHeader() {
    return authorizationHeader;
  }
  public void setAuthorizationHeader(String authorizationHeader) {
    this.authorizationHeader = authorizationHeader;
  }

  /**
   * Labels of micro-gateway environments attached to the API.\n
   **/
  @ApiModelProperty(value = "Labels of micro-gateway environments attached to the API.\n")
  @JsonProperty("labels")
  public List<LabelDTO> getLabels() {
    return labels;
  }
  public void setLabels(List<LabelDTO> labels) {
    this.labels = labels;
  }

  /**
   * Supported API security for the API ( mutualssl and/or oauth2)\n
   **/
  @ApiModelProperty(value = "Supported API security for the API ( mutualssl and/or oauth2)\n")
  @JsonProperty("apiSecurity")
  public String getApiSecurity() {
    return apiSecurity;
  }
  public void setApiSecurity(String apiSecurity) {
    this.apiSecurity = apiSecurity;
  }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    APIDTO API = (APIDTO) o;
    return Objects.equals(this.id, API.id) &&
        Objects.equals(this.name, API.name) &&
        Objects.equals(this.description, API.description) &&
        Objects.equals(this.context, API.context) &&
        Objects.equals(this.version, API.version) &&
        Objects.equals(this.provider, API.provider) &&
        Objects.equals(this.wsdlUri, API.wsdlUri) &&
        Objects.equals(this.lifeCycleStatus, API.lifeCycleStatus) &&
        Objects.equals(this.workflowStatus, API.workflowStatus) &&
        Objects.equals(this.createdTime, API.createdTime) &&
        Objects.equals(this.apiPolicy, API.apiPolicy) &&
        Objects.equals(this.lastUpdatedTime, API.lastUpdatedTime) &&
        Objects.equals(this.responseCaching, API.responseCaching) &&
        Objects.equals(this.cacheTimeout, API.cacheTimeout) &&
        Objects.equals(this.destinationStatsEnabled, API.destinationStatsEnabled) &&
        Objects.equals(this.isDefaultVersion, API.isDefaultVersion) &&
        Objects.equals(this.transport, API.transport) &&
        Objects.equals(this.tags, API.tags) &&
        Objects.equals(this.hasOwnGateway, API.hasOwnGateway) &&
        Objects.equals(this.labels, API.labels) &&
        Objects.equals(this.policies, API.policies) &&
        Objects.equals(this.visibility, API.visibility) &&
        Objects.equals(this.visibleRoles, API.visibleRoles) &&
        Objects.equals(this.permission, API.permission) &&
        Objects.equals(this.userPermissionsForApi, API.userPermissionsForApi) &&
        Objects.equals(this.visibleTenants, API.visibleTenants) &&
        Objects.equals(this.gatewayEnvironments, API.gatewayEnvironments) &&
        Objects.equals(this.sequences, API.sequences) &&
        Objects.equals(this.businessInformation, API.businessInformation) &&
        Objects.equals(this.corsConfiguration, API.corsConfiguration) &&
        Objects.equals(this.endpoint, API.endpoint) &&
        Objects.equals(this.securityScheme, API.securityScheme) &&
        Objects.equals(this.scopes, API.scopes) &&
        Objects.equals(this.operations, API.operations) &&
        Objects.equals(this.threatProtectionPolicies, API.threatProtectionPolicies);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, description, context, version, provider, wsdlUri, lifeCycleStatus, workflowStatus, createdTime, apiPolicy, lastUpdatedTime, responseCaching, cacheTimeout, destinationStatsEnabled, isDefaultVersion, transport, tags, hasOwnGateway, labels, policies, visibility, visibleRoles, permission, userPermissionsForApi, visibleTenants, gatewayEnvironments, sequences, businessInformation, corsConfiguration, endpoint, securityScheme, scopes, operations, threatProtectionPolicies);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class APIDTO {\n");
<<<<<<< HEAD:components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher/src/gen/java/org/wso2/carbon/apimgt/rest/api/publisher/dto/APIDTO.java
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    context: ").append(toIndentedString(context)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    provider: ").append(toIndentedString(provider)).append("\n");
    sb.append("    wsdlUri: ").append(toIndentedString(wsdlUri)).append("\n");
    sb.append("    lifeCycleStatus: ").append(toIndentedString(lifeCycleStatus)).append("\n");
    sb.append("    workflowStatus: ").append(toIndentedString(workflowStatus)).append("\n");
    sb.append("    createdTime: ").append(toIndentedString(createdTime)).append("\n");
    sb.append("    apiPolicy: ").append(toIndentedString(apiPolicy)).append("\n");
    sb.append("    lastUpdatedTime: ").append(toIndentedString(lastUpdatedTime)).append("\n");
    sb.append("    responseCaching: ").append(toIndentedString(responseCaching)).append("\n");
    sb.append("    cacheTimeout: ").append(toIndentedString(cacheTimeout)).append("\n");
    sb.append("    destinationStatsEnabled: ").append(toIndentedString(destinationStatsEnabled)).append("\n");
    sb.append("    isDefaultVersion: ").append(toIndentedString(isDefaultVersion)).append("\n");
    sb.append("    transport: ").append(toIndentedString(transport)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    hasOwnGateway: ").append(toIndentedString(hasOwnGateway)).append("\n");
    sb.append("    labels: ").append(toIndentedString(labels)).append("\n");
    sb.append("    policies: ").append(toIndentedString(policies)).append("\n");
    sb.append("    visibility: ").append(toIndentedString(visibility)).append("\n");
    sb.append("    visibleRoles: ").append(toIndentedString(visibleRoles)).append("\n");
    sb.append("    permission: ").append(toIndentedString(permission)).append("\n");
    sb.append("    userPermissionsForApi: ").append(toIndentedString(userPermissionsForApi)).append("\n");
    sb.append("    visibleTenants: ").append(toIndentedString(visibleTenants)).append("\n");
    sb.append("    gatewayEnvironments: ").append(toIndentedString(gatewayEnvironments)).append("\n");
    sb.append("    sequences: ").append(toIndentedString(sequences)).append("\n");
    sb.append("    businessInformation: ").append(toIndentedString(businessInformation)).append("\n");
    sb.append("    corsConfiguration: ").append(toIndentedString(corsConfiguration)).append("\n");
    sb.append("    endpoint: ").append(toIndentedString(endpoint)).append("\n");
    sb.append("    securityScheme: ").append(toIndentedString(securityScheme)).append("\n");
    sb.append("    scopes: ").append(toIndentedString(scopes)).append("\n");
    sb.append("    operations: ").append(toIndentedString(operations)).append("\n");
    sb.append("    threatProtectionPolicies: ").append(toIndentedString(threatProtectionPolicies)).append("\n");
    sb.append("}");
=======
    sb.append("  id: ").append(id).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("  description: ").append(description).append("\n");
    sb.append("  context: ").append(context).append("\n");
    sb.append("  version: ").append(version).append("\n");
    sb.append("  provider: ").append(provider).append("\n");
    sb.append("  apiDefinition: ").append(apiDefinition).append("\n");
    sb.append("  wsdlUri: ").append(wsdlUri).append("\n");
    sb.append("  status: ").append(status).append("\n");
    sb.append("  responseCaching: ").append(responseCaching).append("\n");
    sb.append("  cacheTimeout: ").append(cacheTimeout).append("\n");
    sb.append("  destinationStatsEnabled: ").append(destinationStatsEnabled).append("\n");
    sb.append("  isDefaultVersion: ").append(isDefaultVersion).append("\n");
    sb.append("  type: ").append(type).append("\n");
    sb.append("  transport: ").append(transport).append("\n");
    sb.append("  tags: ").append(tags).append("\n");
    sb.append("  tiers: ").append(tiers).append("\n");
    sb.append("  apiLevelPolicy: ").append(apiLevelPolicy).append("\n");
    sb.append("  authorizationHeader: ").append(authorizationHeader).append("\n");
    sb.append("  apiSecurity: ").append(apiSecurity).append("\n");
    sb.append("  maxTps: ").append(maxTps).append("\n");
    sb.append("  thumbnailUri: ").append(thumbnailUri).append("\n");
    sb.append("  visibility: ").append(visibility).append("\n");
    sb.append("  visibleRoles: ").append(visibleRoles).append("\n");
    sb.append("  visibleTenants: ").append(visibleTenants).append("\n");
    sb.append("  endpointConfig: ").append(endpointConfig).append("\n");
    sb.append("  endpointSecurity: ").append(endpointSecurity).append("\n");
    sb.append("  labels: ").append(labels).append("\n");
    sb.append("  gatewayEnvironments: ").append(gatewayEnvironments).append("\n");
    sb.append("  sequences: ").append(sequences).append("\n");
    sb.append("  subscriptionAvailability: ").append(subscriptionAvailability).append("\n");
    sb.append("  subscriptionAvailableTenants: ").append(subscriptionAvailableTenants).append("\n");
    sb.append("  businessInformation: ").append(businessInformation).append("\n");
    sb.append("  corsConfiguration: ").append(corsConfiguration).append("\n");
    sb.append("}\n");
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7:components/apimgt/org.wso2.carbon.apimgt.hybrid.gateway/org.wso2.carbon.apimgt.hybrid.gateway.api.synchronizer/src/main/java/org/wso2/carbon/apimgt/hybrid/gateway/api/synchronizer/dto/APIDTO.java
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

