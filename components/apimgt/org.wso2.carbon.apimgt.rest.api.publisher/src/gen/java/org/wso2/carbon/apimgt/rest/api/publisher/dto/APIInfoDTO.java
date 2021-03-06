package org.wso2.carbon.apimgt.rest.api.publisher.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * APIInfoDTO
 */
public class APIInfoDTO   {
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
<<<<<<< HEAD

  @SerializedName("lifeCycleStatus")
  private String lifeCycleStatus = null;

  @SerializedName("workflowStatus")
  private String workflowStatus = null;

  @SerializedName("securityScheme")
  private List<String> securityScheme = new ArrayList<String>();

  public APIInfoDTO id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "01234567-0123-0123-0123-012345678901", value = "")
=======
  
  
  private String status = null;
  
  
  private String thumbnailUri = null;

  
  /**
   * UUID of the api registry artifact\n
   **/
  @ApiModelProperty(value = "UUID of the api registry artifact\n")
  @JsonProperty("id")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

<<<<<<< HEAD
  public APIInfoDTO name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(example = "CalculatorAPI", value = "")
=======
  
  /**
   * Name of the API
   **/
  @ApiModelProperty(value = "Name of the API")
  @JsonProperty("name")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

<<<<<<< HEAD
  public APIInfoDTO description(String description) {
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
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

<<<<<<< HEAD
  public APIInfoDTO context(String context) {
    this.context = context;
    return this;
  }

   /**
   * Get context
   * @return context
  **/
  @ApiModelProperty(example = "CalculatorAPI", value = "")
=======
  
  /**
   * A string that represents the context of the user's request
   **/
  @ApiModelProperty(value = "A string that represents the context of the user's request")
  @JsonProperty("context")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getContext() {
    return context;
  }

  public void setContext(String context) {
    this.context = context;
  }

<<<<<<< HEAD
  public APIInfoDTO version(String version) {
    this.version = version;
    return this;
  }

   /**
   * Get version
   * @return version
  **/
  @ApiModelProperty(example = "1.0.0", value = "")
=======
  
  /**
   * The version of the API
   **/
  @ApiModelProperty(value = "The version of the API")
  @JsonProperty("version")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getVersion() {
    return version;
  }

  public void setVersion(String version) {
    this.version = version;
  }

  public APIInfoDTO provider(String provider) {
    this.provider = provider;
    return this;
  }

   /**
   * If the provider value is not given, the user invoking the API will be used as the provider. 
   * @return provider
  **/
  @ApiModelProperty(example = "admin", value = "If the provider value is not given, the user invoking the API will be used as the provider. ")
  public String getProvider() {
    return provider;
  }

  public void setProvider(String provider) {
    this.provider = provider;
  }

<<<<<<< HEAD
  public APIInfoDTO lifeCycleStatus(String lifeCycleStatus) {
    this.lifeCycleStatus = lifeCycleStatus;
    return this;
  }

   /**
   * Get lifeCycleStatus
   * @return lifeCycleStatus
  **/
  @ApiModelProperty(example = "CREATED", value = "")
  public String getLifeCycleStatus() {
    return lifeCycleStatus;
  }

  public void setLifeCycleStatus(String lifeCycleStatus) {
    this.lifeCycleStatus = lifeCycleStatus;
  }

  public APIInfoDTO workflowStatus(String workflowStatus) {
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

  public APIInfoDTO securityScheme(List<String> securityScheme) {
    this.securityScheme = securityScheme;
    return this;
  }

  public APIInfoDTO addSecuritySchemeItem(String securitySchemeItem) {
    this.securityScheme.add(securitySchemeItem);
    return this;
  }

   /**
   * Get securityScheme
   * @return securityScheme
  **/
  @ApiModelProperty(value = "")
  public List<String> getSecurityScheme() {
    return securityScheme;
=======
  
  /**
   * This describes in which status of the lifecycle the API is
   **/
  @ApiModelProperty(value = "This describes in which status of the lifecycle the API is")
  @JsonProperty("status")
  public String getStatus() {
    return status;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  }

  public void setSecurityScheme(List<String> securityScheme) {
    this.securityScheme = securityScheme;
  }

<<<<<<< HEAD
=======
  
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("thumbnailUri")
  public String getThumbnailUri() {
    return thumbnailUri;
  }
  public void setThumbnailUri(String thumbnailUri) {
    this.thumbnailUri = thumbnailUri;
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
    APIInfoDTO apIInfo = (APIInfoDTO) o;
    return Objects.equals(this.id, apIInfo.id) &&
        Objects.equals(this.name, apIInfo.name) &&
        Objects.equals(this.description, apIInfo.description) &&
        Objects.equals(this.context, apIInfo.context) &&
        Objects.equals(this.version, apIInfo.version) &&
        Objects.equals(this.provider, apIInfo.provider) &&
        Objects.equals(this.lifeCycleStatus, apIInfo.lifeCycleStatus) &&
        Objects.equals(this.workflowStatus, apIInfo.workflowStatus) &&
        Objects.equals(this.securityScheme, apIInfo.securityScheme);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, description, context, version, provider, lifeCycleStatus, workflowStatus, securityScheme);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class APIInfoDTO {\n");
    
<<<<<<< HEAD
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    context: ").append(toIndentedString(context)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    provider: ").append(toIndentedString(provider)).append("\n");
    sb.append("    lifeCycleStatus: ").append(toIndentedString(lifeCycleStatus)).append("\n");
    sb.append("    workflowStatus: ").append(toIndentedString(workflowStatus)).append("\n");
    sb.append("    securityScheme: ").append(toIndentedString(securityScheme)).append("\n");
    sb.append("}");
=======
    sb.append("  id: ").append(id).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("  description: ").append(description).append("\n");
    sb.append("  context: ").append(context).append("\n");
    sb.append("  version: ").append(version).append("\n");
    sb.append("  provider: ").append(provider).append("\n");
    sb.append("  status: ").append(status).append("\n");
    sb.append("  thumbnailUri: ").append(thumbnailUri).append("\n");
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

