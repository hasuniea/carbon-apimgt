package org.wso2.carbon.apimgt.rest.api.store.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
<<<<<<< HEAD
import java.util.Objects;

/**
 * TierDTO
 */
public class TierDTO   {
  @SerializedName("name")
  private String name = null;
=======
import org.wso2.carbon.apimgt.rest.api.store.dto.TierPermissionInfoDTO;

import io.swagger.annotations.*;
import com.fasterxml.jackson.annotation.*;

import javax.validation.constraints.NotNull;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  @SerializedName("description")
  private String description = null;

  /**
   * Gets or Sets tierLevel
   */
  public enum TierLevelEnum {
    @SerializedName("api")
    API("api"),
    
    @SerializedName("application")
    APPLICATION("application"),
    
    @SerializedName("subscription")
    SUBSCRIPTION("subscription");

    private String value;

    TierLevelEnum(String value) {
      this.value = value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static TierLevelEnum fromValue(String text) {
      for (TierLevelEnum b : TierLevelEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @SerializedName("tierLevel")
  private TierLevelEnum tierLevel = null;

  @SerializedName("attributes")
  private Map<String, String> attributes = new HashMap<String, String>();

  @SerializedName("requestCount")
  private Long requestCount = null;

  @SerializedName("unitTime")
  private Long unitTime = null;
<<<<<<< HEAD

  /**
   * This attribute declares whether this policy is available under commercial or free 
   */
  public enum TierPlanEnum {
    @SerializedName("FREE")
    FREE("FREE"),
    
    @SerializedName("COMMERCIAL")
    COMMERCIAL("COMMERCIAL");
=======
  
  public enum TierPlanEnum {
     FREE,  COMMERCIAL, 
  };
  @NotNull
  private TierPlanEnum tierPlan = null;
  
  @NotNull
  private Boolean stopOnQuotaReach = null;
  
  
  private TierPermissionInfoDTO tierPermissions = null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

    private String value;

    TierPlanEnum(String value) {
      this.value = value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static TierPlanEnum fromValue(String text) {
      for (TierPlanEnum b : TierPlanEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @SerializedName("tierPlan")
  private TierPlanEnum tierPlan = null;

  @SerializedName("stopOnQuotaReach")
  private Boolean stopOnQuotaReach = null;

  public TierDTO name(String name) {
    this.name = name;
    return this;
  }

<<<<<<< HEAD
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
  public TierDTO description(String description) {
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
  public TierDTO tierLevel(TierLevelEnum tierLevel) {
    this.tierLevel = tierLevel;
    return this;
  }

   /**
   * Get tierLevel
   * @return tierLevel
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public TierLevelEnum getTierLevel() {
    return tierLevel;
  }

  public void setTierLevel(TierLevelEnum tierLevel) {
    this.tierLevel = tierLevel;
  }

<<<<<<< HEAD
  public TierDTO attributes(Map<String, String> attributes) {
    this.attributes = attributes;
    return this;
  }

  public TierDTO putAttributesItem(String key, String attributesItem) {
    this.attributes.put(key, attributesItem);
    return this;
  }

   /**
   * Custom attributes added to the policy policy 
   * @return attributes
  **/
  @ApiModelProperty(value = "Custom attributes added to the policy policy ")
=======
  
  /**
   * Custom attributes added to the tier policy\n
   **/
  @ApiModelProperty(value = "Custom attributes added to the tier policy\n")
  @JsonProperty("attributes")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public Map<String, String> getAttributes() {
    return attributes;
  }

  public void setAttributes(Map<String, String> attributes) {
    this.attributes = attributes;
  }

<<<<<<< HEAD
  public TierDTO requestCount(Long requestCount) {
    this.requestCount = requestCount;
    return this;
  }

   /**
   * Maximum number of requests which can be sent within a provided unit time 
   * @return requestCount
  **/
  @ApiModelProperty(required = true, value = "Maximum number of requests which can be sent within a provided unit time ")
=======
  
  /**
   * Maximum number of requests which can be sent within a provided unit time\n
   **/
  @ApiModelProperty(required = true, value = "Maximum number of requests which can be sent within a provided unit time\n")
  @JsonProperty("requestCount")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public Long getRequestCount() {
    return requestCount;
  }

  public void setRequestCount(Long requestCount) {
    this.requestCount = requestCount;
  }

<<<<<<< HEAD
  public TierDTO unitTime(Long unitTime) {
    this.unitTime = unitTime;
    return this;
  }

   /**
   * Get unitTime
   * @return unitTime
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(required = true, value = "")
  public Long getUnitTime() {
    return unitTime;
  }

  public void setUnitTime(Long unitTime) {
    this.unitTime = unitTime;
  }

<<<<<<< HEAD
  public TierDTO tierPlan(TierPlanEnum tierPlan) {
    this.tierPlan = tierPlan;
    return this;
  }

   /**
   * This attribute declares whether this policy is available under commercial or free 
   * @return tierPlan
  **/
  @ApiModelProperty(required = true, value = "This attribute declares whether this policy is available under commercial or free ")
=======
  
  /**
   * This attribute declares whether this tier is available under commercial or free\n
   **/
  @ApiModelProperty(required = true, value = "This attribute declares whether this tier is available under commercial or free\n")
  @JsonProperty("tierPlan")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public TierPlanEnum getTierPlan() {
    return tierPlan;
  }

  public void setTierPlan(TierPlanEnum tierPlan) {
    this.tierPlan = tierPlan;
  }

<<<<<<< HEAD
  public TierDTO stopOnQuotaReach(Boolean stopOnQuotaReach) {
    this.stopOnQuotaReach = stopOnQuotaReach;
    return this;
  }

   /**
   * If this attribute is set to false, you are capabale of sending requests even if the request count exceeded within a unit time 
   * @return stopOnQuotaReach
  **/
  @ApiModelProperty(required = true, value = "If this attribute is set to false, you are capabale of sending requests even if the request count exceeded within a unit time ")
=======
  
  /**
   * If this attribute is set to false, you are capabale of sending requests\neven if the request count exceeded within a unit time\n
   **/
  @ApiModelProperty(required = true, value = "If this attribute is set to false, you are capabale of sending requests\neven if the request count exceeded within a unit time\n")
  @JsonProperty("stopOnQuotaReach")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public Boolean getStopOnQuotaReach() {
    return stopOnQuotaReach;
  }

  public void setStopOnQuotaReach(Boolean stopOnQuotaReach) {
    this.stopOnQuotaReach = stopOnQuotaReach;
  }

<<<<<<< HEAD
=======
  
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("tierPermissions")
  public TierPermissionInfoDTO getTierPermissions() {
    return tierPermissions;
  }
  public void setTierPermissions(TierPermissionInfoDTO tierPermissions) {
    this.tierPermissions = tierPermissions;
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
    TierDTO tier = (TierDTO) o;
    return Objects.equals(this.name, tier.name) &&
        Objects.equals(this.description, tier.description) &&
        Objects.equals(this.tierLevel, tier.tierLevel) &&
        Objects.equals(this.attributes, tier.attributes) &&
        Objects.equals(this.requestCount, tier.requestCount) &&
        Objects.equals(this.unitTime, tier.unitTime) &&
        Objects.equals(this.tierPlan, tier.tierPlan) &&
        Objects.equals(this.stopOnQuotaReach, tier.stopOnQuotaReach);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, description, tierLevel, attributes, requestCount, unitTime, tierPlan, stopOnQuotaReach);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TierDTO {\n");
    
<<<<<<< HEAD
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tierLevel: ").append(toIndentedString(tierLevel)).append("\n");
    sb.append("    attributes: ").append(toIndentedString(attributes)).append("\n");
    sb.append("    requestCount: ").append(toIndentedString(requestCount)).append("\n");
    sb.append("    unitTime: ").append(toIndentedString(unitTime)).append("\n");
    sb.append("    tierPlan: ").append(toIndentedString(tierPlan)).append("\n");
    sb.append("    stopOnQuotaReach: ").append(toIndentedString(stopOnQuotaReach)).append("\n");
    sb.append("}");
=======
    sb.append("  name: ").append(name).append("\n");
    sb.append("  description: ").append(description).append("\n");
    sb.append("  tierLevel: ").append(tierLevel).append("\n");
    sb.append("  attributes: ").append(attributes).append("\n");
    sb.append("  requestCount: ").append(requestCount).append("\n");
    sb.append("  unitTime: ").append(unitTime).append("\n");
    sb.append("  tierPlan: ").append(tierPlan).append("\n");
    sb.append("  stopOnQuotaReach: ").append(stopOnQuotaReach).append("\n");
    sb.append("  tierPermissions: ").append(tierPermissions).append("\n");
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

