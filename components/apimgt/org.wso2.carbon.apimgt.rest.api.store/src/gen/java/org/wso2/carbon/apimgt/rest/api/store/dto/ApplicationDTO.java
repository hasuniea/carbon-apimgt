package org.wso2.carbon.apimgt.rest.api.store.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationKeysDTO;
import org.wso2.carbon.apimgt.rest.api.store.dto.ApplicationTokenDTO;
import java.util.Objects;

<<<<<<< HEAD
/**
 * ApplicationDTO
 */
public class ApplicationDTO   {
  @SerializedName("applicationId")
  private String applicationId = null;
=======
import io.swagger.annotations.*;
import com.fasterxml.jackson.annotation.*;

import javax.validation.constraints.NotNull;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  @SerializedName("name")
  private String name = null;

  @SerializedName("subscriber")
  private String subscriber = null;

  @SerializedName("throttlingTier")
  private String throttlingTier = null;

  @SerializedName("permission")
  private String permission = null;

  @SerializedName("description")
  private String description = null;
<<<<<<< HEAD

  @SerializedName("lifeCycleStatus")
  private String lifeCycleStatus = null;
=======
  
  public enum TokenTypeEnum {
     OAUTH,  JWT, 
  };
  
  private TokenTypeEnum tokenType = TokenTypeEnum.OAUTH;
  
  
  private String status = "";
  
  
  private String groupId = null;
  
  
  private String owner = null;
  
  private List<ApplicationKeyDTO> keys = new ArrayList<ApplicationKeyDTO>();
  
  
  private Object attributes = null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  @SerializedName("token")
  private ApplicationTokenDTO token = null;

  @SerializedName("keys")
  private List<ApplicationKeysDTO> keys = new ArrayList<ApplicationKeysDTO>();

  public ApplicationDTO applicationId(String applicationId) {
    this.applicationId = applicationId;
    return this;
  }

   /**
   * Get applicationId
   * @return applicationId
  **/
<<<<<<< HEAD
=======

  @JsonIgnore
  public String getCreatedTime(){
    return createdTime;
  }
  public void setCreatedTime(String createdTime){
    this.createdTime=createdTime;
  }


  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public String getApplicationId() {
    return applicationId;
  }

  public void setApplicationId(String applicationId) {
    this.applicationId = applicationId;
  }

<<<<<<< HEAD
  public ApplicationDTO name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(required = true, value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

<<<<<<< HEAD
  public ApplicationDTO subscriber(String subscriber) {
    this.subscriber = subscriber;
    return this;
  }

   /**
   * If subscriber is not given user invoking the API will be taken as the subscriber. 
   * @return subscriber
  **/
  @ApiModelProperty(value = "If subscriber is not given user invoking the API will be taken as the subscriber. ")
=======
  
  /**
   * If subscriber is not given user invoking the API will be taken as the subscriber.\n
   **/
  @ApiModelProperty(value = "If subscriber is not given user invoking the API will be taken as the subscriber.\n")
  @JsonProperty("subscriber")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getSubscriber() {
    return subscriber;
  }

  public void setSubscriber(String subscriber) {
    this.subscriber = subscriber;
  }

<<<<<<< HEAD
  public ApplicationDTO throttlingTier(String throttlingTier) {
    this.throttlingTier = throttlingTier;
    return this;
  }

   /**
   * Get throttlingTier
   * @return throttlingTier
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(required = true, value = "")
  public String getThrottlingTier() {
    return throttlingTier;
  }

  public void setThrottlingTier(String throttlingTier) {
    this.throttlingTier = throttlingTier;
  }

<<<<<<< HEAD
  public ApplicationDTO permission(String permission) {
    this.permission = permission;
    return this;
=======
  
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("callbackUrl")
  public String getCallbackUrl() {
    return callbackUrl;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
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

<<<<<<< HEAD
  public ApplicationDTO description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

<<<<<<< HEAD
  public ApplicationDTO lifeCycleStatus(String lifeCycleStatus) {
    this.lifeCycleStatus = lifeCycleStatus;
    return this;
  }

   /**
   * Get lifeCycleStatus
   * @return lifeCycleStatus
  **/
=======
  
  /**
   * Type of the access token generated for this application.\n\n**OAUTH:** A UUID based access token which is issued by default.\n**JWT:** A self-contained, signed JWT based access token. **Note:** This can be only used in Microgateway environments.\n
   **/
  @ApiModelProperty(value = "Type of the access token generated for this application.\n\n**OAUTH:** A UUID based access token which is issued by default.\n**JWT:** A self-contained, signed JWT based access token. **Note:** This can be only used in Microgateway environments.\n")
  @JsonProperty("tokenType")
  public TokenTypeEnum getTokenType() {
    return tokenType;
  }
  public void setTokenType(TokenTypeEnum tokenType) {
    this.tokenType = tokenType;
  }

  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public String getLifeCycleStatus() {
    return lifeCycleStatus;
  }

  public void setLifeCycleStatus(String lifeCycleStatus) {
    this.lifeCycleStatus = lifeCycleStatus;
  }

<<<<<<< HEAD
  public ApplicationDTO token(ApplicationTokenDTO token) {
    this.token = token;
    return this;
  }

   /**
   * Get token
   * @return token
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public ApplicationTokenDTO getToken() {
    return token;
  }

  public void setToken(ApplicationTokenDTO token) {
    this.token = token;
  }

<<<<<<< HEAD
  public ApplicationDTO keys(List<ApplicationKeysDTO> keys) {
    this.keys = keys;
    return this;
  }

  public ApplicationDTO addKeysItem(ApplicationKeysDTO keysItem) {
    this.keys.add(keysItem);
    return this;
  }

   /**
   * Get keys
   * @return keys
  **/
=======
  
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("owner")
  public String getOwner() {
    return owner;
  }
  public void setOwner(String owner) {
    this.owner = owner;
  }

  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public List<ApplicationKeysDTO> getKeys() {
    return keys;
  }

  public void setKeys(List<ApplicationKeysDTO> keys) {
    this.keys = keys;
  }

<<<<<<< HEAD
=======
  
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("attributes")
  public Object getAttributes() {
    return attributes;
  }
  public void setAttributes(Object attributes) {
    this.attributes = attributes;
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
    ApplicationDTO application = (ApplicationDTO) o;
    return Objects.equals(this.applicationId, application.applicationId) &&
        Objects.equals(this.name, application.name) &&
        Objects.equals(this.subscriber, application.subscriber) &&
        Objects.equals(this.throttlingTier, application.throttlingTier) &&
        Objects.equals(this.permission, application.permission) &&
        Objects.equals(this.description, application.description) &&
        Objects.equals(this.lifeCycleStatus, application.lifeCycleStatus) &&
        Objects.equals(this.token, application.token) &&
        Objects.equals(this.keys, application.keys);
  }

  @Override
  public int hashCode() {
    return Objects.hash(applicationId, name, subscriber, throttlingTier, permission, description, lifeCycleStatus, token, keys);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationDTO {\n");
    
<<<<<<< HEAD
    sb.append("    applicationId: ").append(toIndentedString(applicationId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    subscriber: ").append(toIndentedString(subscriber)).append("\n");
    sb.append("    throttlingTier: ").append(toIndentedString(throttlingTier)).append("\n");
    sb.append("    permission: ").append(toIndentedString(permission)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    lifeCycleStatus: ").append(toIndentedString(lifeCycleStatus)).append("\n");
    sb.append("    token: ").append(toIndentedString(token)).append("\n");
    sb.append("    keys: ").append(toIndentedString(keys)).append("\n");
    sb.append("}");
=======
    sb.append("  applicationId: ").append(applicationId).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("  subscriber: ").append(subscriber).append("\n");
    sb.append("  throttlingTier: ").append(throttlingTier).append("\n");
    sb.append("  callbackUrl: ").append(callbackUrl).append("\n");
    sb.append("  description: ").append(description).append("\n");
    sb.append("  tokenType: ").append(tokenType).append("\n");
    sb.append("  status: ").append(status).append("\n");
    sb.append("  groupId: ").append(groupId).append("\n");
    sb.append("  owner: ").append(owner).append("\n");
    sb.append("  keys: ").append(keys).append("\n");
    sb.append("  attributes: ").append(attributes).append("\n");
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

