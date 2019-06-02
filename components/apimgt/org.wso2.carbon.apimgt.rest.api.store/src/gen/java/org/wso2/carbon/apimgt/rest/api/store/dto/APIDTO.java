package org.wso2.carbon.apimgt.rest.api.store.dto;

<<<<<<< HEAD

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;

=======
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
<<<<<<< HEAD
import java.util.Objects;
=======
import java.util.Map;
import org.wso2.carbon.apimgt.rest.api.store.dto.APIBusinessInformationDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.APIEndpointURLsDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.LabelDTO;

import io.swagger.annotations.*;
import com.fasterxml.jackson.annotation.*;

import javax.validation.constraints.NotNull;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

/**
 * APIDTO
 */
public class APIDTO extends BaseAPIDTO  {
  @SerializedName("lifeCycleStatus")
  private String lifeCycleStatus = null;

  @SerializedName("isDefaultVersion")
  private Boolean isDefaultVersion = null;
<<<<<<< HEAD

  @SerializedName("tags")
  private List<String> tags = new ArrayList<String>();

  @SerializedName("policies")
  private List<String> policies = new ArrayList<String>();
=======
  
  
  private List<String> transport = new ArrayList<String>();
  
  
  private String authorizationHeader = null;
  
  
  private String apiSecurity = null;
  
  
  private List<String> tags = new ArrayList<String>();
  
  
  private List<String> tiers = new ArrayList<String>();
  
  
  private String thumbnailUrl = null;
  
  
  private Map<String, String> additionalProperties = new HashMap<String, String>();
  
  
  private List<APIEndpointURLsDTO> endpointURLs = new ArrayList<APIEndpointURLsDTO>();
  
  
  private APIBusinessInformationDTO businessInformation = null;
  
  
  private List<LabelDTO> labels = new ArrayList<LabelDTO>();
  
  
  private List<String> environmentList = new ArrayList<String>();
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  @SerializedName("wsdlUri")
  private String wsdlUri = null;

  @SerializedName("businessInformation")
  private API_businessInformationDTO businessInformation = null;

  public APIDTO lifeCycleStatus(String lifeCycleStatus) {
    this.lifeCycleStatus = lifeCycleStatus;
    return this;
  }

   /**
   * Get lifeCycleStatus
   * @return lifeCycleStatus
  **/
<<<<<<< HEAD
  @ApiModelProperty(value = "")
  public String getLifeCycleStatus() {
    return lifeCycleStatus;
  }

  public void setLifeCycleStatus(String lifeCycleStatus) {
    this.lifeCycleStatus = lifeCycleStatus;
  }

  public APIDTO isDefaultVersion(Boolean isDefaultVersion) {
    this.isDefaultVersion = isDefaultVersion;
    return this;
  }

   /**
   * Get isDefaultVersion
   * @return isDefaultVersion
  **/
=======

  @JsonIgnore
  public String getCreatedTime(){
    return createdTime;
  }
  public void setCreatedTime(String createdTime){
    this.createdTime=createdTime;
  }

  
  /**
   * UUID of the api registry artifact\n
   **/
  @ApiModelProperty(value = "UUID of the api registry artifact\n")
  @JsonProperty("id")
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }

  
  /**
   * Name of the API
   **/
  @ApiModelProperty(required = true, value = "Name of the API")
  @JsonProperty("name")
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  
  /**
   * A brief description about the API
   **/
  @ApiModelProperty(value = "A brief description about the API")
  @JsonProperty("description")
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }

  
  /**
   * A string that represents thecontext of the user's request
   **/
  @ApiModelProperty(required = true, value = "A string that represents thecontext of the user's request")
  @JsonProperty("context")
  public String getContext() {
    return context;
  }
  public void setContext(String context) {
    this.context = context;
  }

  
  /**
   * The version of the API
   **/
  @ApiModelProperty(required = true, value = "The version of the API")
  @JsonProperty("version")
  public String getVersion() {
    return version;
  }
  public void setVersion(String version) {
    this.version = version;
  }

  
  /**
   * If the provider value is not given user invoking the api will be used as the provider.\n
   **/
  @ApiModelProperty(required = true, value = "If the provider value is not given user invoking the api will be used as the provider.\n")
  @JsonProperty("provider")
  public String getProvider() {
    return provider;
  }
  public void setProvider(String provider) {
    this.provider = provider;
  }

  
  /**
   * Swagger definition of the API which contains details about URI templates and scopes\n
   **/
  @ApiModelProperty(required = true, value = "Swagger definition of the API which contains details about URI templates and scopes\n")
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
  public String getWsdlUri() {
    return wsdlUri;
  }
  public void setWsdlUri(String wsdlUri) {
    this.wsdlUri = wsdlUri;
  }

  
  /**
   * This describes in which status of the lifecycle the API is.
   **/
  @ApiModelProperty(required = true, value = "This describes in which status of the lifecycle the API is.")
  @JsonProperty("status")
  public String getStatus() {
    return status;
  }
  public void setStatus(String status) {
    this.status = status;
  }

  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public Boolean getIsDefaultVersion() {
    return isDefaultVersion;
  }

  public void setIsDefaultVersion(Boolean isDefaultVersion) {
    this.isDefaultVersion = isDefaultVersion;
  }

<<<<<<< HEAD
  public APIDTO tags(List<String> tags) {
    this.tags = tags;
    return this;
=======
  
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("transport")
  public List<String> getTransport() {
    return transport;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  }

  public APIDTO addTagsItem(String tagsItem) {
    this.tags.add(tagsItem);
    return this;
  }

<<<<<<< HEAD
   /**
   * Get tags
   * @return tags
  **/
  @ApiModelProperty(value = "")
=======
  
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

  
  /**
   * Search keywords related to the API
   **/
  @ApiModelProperty(value = "Search keywords related to the API")
  @JsonProperty("tags")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public List<String> getTags() {
    return tags;
  }

  public void setTags(List<String> tags) {
    this.tags = tags;
  }

<<<<<<< HEAD
  public APIDTO policies(List<String> policies) {
    this.policies = policies;
    return this;
=======
  
  /**
   * The subscription tiers selected for the particular API
   **/
  @ApiModelProperty(value = "The subscription tiers selected for the particular API")
  @JsonProperty("tiers")
  public List<String> getTiers() {
    return tiers;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  }

  public APIDTO addPoliciesItem(String policiesItem) {
    this.policies.add(policiesItem);
    return this;
  }

<<<<<<< HEAD
   /**
   * Get policies
   * @return policies
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public List<String> getPolicies() {
    return policies;
  }

  public void setPolicies(List<String> policies) {
    this.policies = policies;
  }

<<<<<<< HEAD
  public APIDTO wsdlUri(String wsdlUri) {
    this.wsdlUri = wsdlUri;
    return this;
  }

   /**
   * Get wsdlUri
   * @return wsdlUri
  **/
=======
  
  /**
   * Custom(user defined) properties of API\n
   **/
  @ApiModelProperty(value = "Custom(user defined) properties of API\n")
  @JsonProperty("additionalProperties")
  public Map<String, String> getAdditionalProperties() {
    return additionalProperties;
  }
  public void setAdditionalProperties(Map<String, String> additionalProperties) {
    this.additionalProperties = additionalProperties;
  }

  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public String getWsdlUri() {
    return wsdlUri;
  }

  public void setWsdlUri(String wsdlUri) {
    this.wsdlUri = wsdlUri;
  }

  public APIDTO businessInformation(API_businessInformationDTO businessInformation) {
    this.businessInformation = businessInformation;
    return this;
  }

<<<<<<< HEAD
   /**
   * Get businessInformation
   * @return businessInformation
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public API_businessInformationDTO getBusinessInformation() {
    return businessInformation;
  }

  public void setBusinessInformation(API_businessInformationDTO businessInformation) {
    this.businessInformation = businessInformation;
  }

<<<<<<< HEAD
=======
  
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
   * The environment list configured with non empty endpoint URLs for the particular API.
   **/
  @ApiModelProperty(value = "The environment list configured with non empty endpoint URLs for the particular API.")
  @JsonProperty("environmentList")
  public List<String> getEnvironmentList() {
    return environmentList;
  }
  public void setEnvironmentList(List<String> environmentList) {
    this.environmentList = environmentList;
  }

  
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    APIDTO API = (APIDTO) o;
    return Objects.equals(this.lifeCycleStatus, API.lifeCycleStatus) &&
        Objects.equals(this.isDefaultVersion, API.isDefaultVersion) &&
        Objects.equals(this.tags, API.tags) &&
        Objects.equals(this.policies, API.policies) &&
        Objects.equals(this.wsdlUri, API.wsdlUri) &&
        Objects.equals(this.businessInformation, API.businessInformation) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(lifeCycleStatus, isDefaultVersion, tags, policies, wsdlUri, businessInformation, super.hashCode());
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class APIDTO {\n");
<<<<<<< HEAD
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    lifeCycleStatus: ").append(toIndentedString(lifeCycleStatus)).append("\n");
    sb.append("    isDefaultVersion: ").append(toIndentedString(isDefaultVersion)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    policies: ").append(toIndentedString(policies)).append("\n");
    sb.append("    wsdlUri: ").append(toIndentedString(wsdlUri)).append("\n");
    sb.append("    businessInformation: ").append(toIndentedString(businessInformation)).append("\n");
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
    sb.append("  isDefaultVersion: ").append(isDefaultVersion).append("\n");
    sb.append("  transport: ").append(transport).append("\n");
    sb.append("  authorizationHeader: ").append(authorizationHeader).append("\n");
    sb.append("  apiSecurity: ").append(apiSecurity).append("\n");
    sb.append("  tags: ").append(tags).append("\n");
    sb.append("  tiers: ").append(tiers).append("\n");
    sb.append("  thumbnailUrl: ").append(thumbnailUrl).append("\n");
    sb.append("  additionalProperties: ").append(additionalProperties).append("\n");
    sb.append("  endpointURLs: ").append(endpointURLs).append("\n");
    sb.append("  businessInformation: ").append(businessInformation).append("\n");
    sb.append("  labels: ").append(labels).append("\n");
    sb.append("  environmentList: ").append(environmentList).append("\n");
    sb.append("}\n");
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
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

