package org.wso2.carbon.apimgt.rest.api.store.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

<<<<<<< HEAD
/**
 * ApplicationKeyGenerateRequestDTO
 */
public class ApplicationKeyGenerateRequestDTO   {
  /**
   * Gets or Sets keyType
   */
  public enum KeyTypeEnum {
    @SerializedName("PRODUCTION")
    PRODUCTION("PRODUCTION"),
    
    @SerializedName("SANDBOX")
    SANDBOX("SANDBOX");

    private String value;

    KeyTypeEnum(String value) {
      this.value = value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static KeyTypeEnum fromValue(String text) {
      for (KeyTypeEnum b : KeyTypeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @SerializedName("keyType")
  private KeyTypeEnum keyType = null;
=======
import io.swagger.annotations.*;
import com.fasterxml.jackson.annotation.*;

import javax.validation.constraints.NotNull;





@ApiModel(description = "")
public class ApplicationKeyGenerateRequestDTO  {
  
  
  public enum KeyTypeEnum {
     PRODUCTION,  SANDBOX, 
  };
  @NotNull
  private KeyTypeEnum keyType = null;
  
  @NotNull
  private String validityTime = null;
  
  
  private List<String> supportedGrantTypes = new ArrayList<String>();
  
  
  private String callbackUrl = null;
  
  @NotNull
  private List<String> accessAllowDomains = new ArrayList<String>();
  
  
  private List<String> scopes = new ArrayList<String>();
  
  
  private String clientId = null;
  
  
  private String clientSecret = null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  @SerializedName("grantTypesToBeSupported")
  private List<String> grantTypesToBeSupported = new ArrayList<String>();

  @SerializedName("callbackUrl")
  private String callbackUrl = null;

  public ApplicationKeyGenerateRequestDTO keyType(KeyTypeEnum keyType) {
    this.keyType = keyType;
    return this;
  }

   /**
   * Get keyType
   * @return keyType
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
  @ApiModelProperty(required = true, value = "")
  public KeyTypeEnum getKeyType() {
    return keyType;
  }

  public void setKeyType(KeyTypeEnum keyType) {
    this.keyType = keyType;
  }

<<<<<<< HEAD
  public ApplicationKeyGenerateRequestDTO grantTypesToBeSupported(List<String> grantTypesToBeSupported) {
    this.grantTypesToBeSupported = grantTypesToBeSupported;
    return this;
  }

  public ApplicationKeyGenerateRequestDTO addGrantTypesToBeSupportedItem(String grantTypesToBeSupportedItem) {
    this.grantTypesToBeSupported.add(grantTypesToBeSupportedItem);
    return this;
  }

   /**
   * Grant types that should be supported by the application
   * @return grantTypesToBeSupported
  **/
  @ApiModelProperty(required = true, value = "Grant types that should be supported by the application")
  public List<String> getGrantTypesToBeSupported() {
    return grantTypesToBeSupported;
  }

  public void setGrantTypesToBeSupported(List<String> grantTypesToBeSupported) {
    this.grantTypesToBeSupported = grantTypesToBeSupported;
=======
  
  /**
   **/
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("validityTime")
  public String getValidityTime() {
    return validityTime;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  }

  public ApplicationKeyGenerateRequestDTO callbackUrl(String callbackUrl) {
    this.callbackUrl = callbackUrl;
    return this;
  }

<<<<<<< HEAD
   /**
=======
  
  /**
   * The grant types that are supported by the application
   **/
  @ApiModelProperty(value = "The grant types that are supported by the application")
  @JsonProperty("supportedGrantTypes")
  public List<String> getSupportedGrantTypes() {
    return supportedGrantTypes;
  }
  public void setSupportedGrantTypes(List<String> supportedGrantTypes) {
    this.supportedGrantTypes = supportedGrantTypes;
  }

  
  /**
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
   * Callback URL
   * @return callbackUrl
  **/
  @ApiModelProperty(value = "Callback URL")
  public String getCallbackUrl() {
    return callbackUrl;
  }

  public void setCallbackUrl(String callbackUrl) {
    this.callbackUrl = callbackUrl;
  }

<<<<<<< HEAD

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationKeyGenerateRequestDTO applicationKeyGenerateRequest = (ApplicationKeyGenerateRequestDTO) o;
    return Objects.equals(this.keyType, applicationKeyGenerateRequest.keyType) &&
        Objects.equals(this.grantTypesToBeSupported, applicationKeyGenerateRequest.grantTypesToBeSupported) &&
        Objects.equals(this.callbackUrl, applicationKeyGenerateRequest.callbackUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(keyType, grantTypesToBeSupported, callbackUrl);
  }
=======
  
  /**
   * Allowed domains for the access token
   **/
  @ApiModelProperty(required = true, value = "Allowed domains for the access token")
  @JsonProperty("accessAllowDomains")
  public List<String> getAccessAllowDomains() {
    return accessAllowDomains;
  }
  public void setAccessAllowDomains(List<String> accessAllowDomains) {
    this.accessAllowDomains = accessAllowDomains;
  }

  
  /**
   * Allowed scopes for the access token
   **/
  @ApiModelProperty(value = "Allowed scopes for the access token")
  @JsonProperty("scopes")
  public List<String> getScopes() {
    return scopes;
  }
  public void setScopes(List<String> scopes) {
    this.scopes = scopes;
  }

  
  /**
   * Client ID for generating access token.
   **/
  @ApiModelProperty(value = "Client ID for generating access token.")
  @JsonProperty("clientId")
  public String getClientId() {
    return clientId;
  }
  public void setClientId(String clientId) {
    this.clientId = clientId;
  }

  
  /**
   * Client secret for generating access token. This is given together with the client Id.
   **/
  @ApiModelProperty(value = "Client secret for generating access token. This is given together with the client Id.")
  @JsonProperty("clientSecret")
  public String getClientSecret() {
    return clientSecret;
  }
  public void setClientSecret(String clientSecret) {
    this.clientSecret = clientSecret;
  }

  
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationKeyGenerateRequestDTO {\n");
    
<<<<<<< HEAD
    sb.append("    keyType: ").append(toIndentedString(keyType)).append("\n");
    sb.append("    grantTypesToBeSupported: ").append(toIndentedString(grantTypesToBeSupported)).append("\n");
    sb.append("    callbackUrl: ").append(toIndentedString(callbackUrl)).append("\n");
    sb.append("}");
=======
    sb.append("  keyType: ").append(keyType).append("\n");
    sb.append("  validityTime: ").append(validityTime).append("\n");
    sb.append("  supportedGrantTypes: ").append(supportedGrantTypes).append("\n");
    sb.append("  callbackUrl: ").append(callbackUrl).append("\n");
    sb.append("  accessAllowDomains: ").append(accessAllowDomains).append("\n");
    sb.append("  scopes: ").append(scopes).append("\n");
    sb.append("  clientId: ").append(clientId).append("\n");
    sb.append("  clientSecret: ").append(clientSecret).append("\n");
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

