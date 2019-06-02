package org.wso2.carbon.apimgt.rest.api.admin.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.wso2.carbon.apimgt.rest.api.admin.dto.CustomAttributeDTO;
import org.wso2.carbon.apimgt.rest.api.admin.dto.ThrottleLimitDTO;
import org.wso2.carbon.apimgt.rest.api.admin.dto.ThrottlePolicyDTO;
import java.util.Objects;

/**
 * SubscriptionThrottlePolicyDTO
 */
public class SubscriptionThrottlePolicyDTO extends ThrottlePolicyDTO  {
  @SerializedName("defaultLimit")
  private ThrottleLimitDTO defaultLimit = null;

  @SerializedName("rateLimitCount")
  private Integer rateLimitCount = null;

  @SerializedName("rateLimitTimeUnit")
  private String rateLimitTimeUnit = null;

  @SerializedName("customAttributes")
  private List<CustomAttributeDTO> customAttributes = new ArrayList<CustomAttributeDTO>();

  @SerializedName("stopOnQuotaReach")
  private Boolean stopOnQuotaReach = false;

  @SerializedName("billingPlan")
  private String billingPlan = null;

  public SubscriptionThrottlePolicyDTO defaultLimit(ThrottleLimitDTO defaultLimit) {
    this.defaultLimit = defaultLimit;
    return this;
  }

   /**
   * Get defaultLimit
   * @return defaultLimit
  **/
  @ApiModelProperty(value = "")
  public ThrottleLimitDTO getDefaultLimit() {
    return defaultLimit;
  }

  public void setDefaultLimit(ThrottleLimitDTO defaultLimit) {
    this.defaultLimit = defaultLimit;
  }

<<<<<<< HEAD
  public SubscriptionThrottlePolicyDTO rateLimitCount(Integer rateLimitCount) {
    this.rateLimitCount = rateLimitCount;
    return this;
  }

   /**
   * Get rateLimitCount
   * @return rateLimitCount
  **/
  @ApiModelProperty(value = "")
=======
  
  /**
   * Burst control request count
   **/
  @ApiModelProperty(value = "Burst control request count")
  @JsonProperty("rateLimitCount")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public Integer getRateLimitCount() {
    return rateLimitCount;
  }

  public void setRateLimitCount(Integer rateLimitCount) {
    this.rateLimitCount = rateLimitCount;
  }

<<<<<<< HEAD
  public SubscriptionThrottlePolicyDTO rateLimitTimeUnit(String rateLimitTimeUnit) {
    this.rateLimitTimeUnit = rateLimitTimeUnit;
    return this;
  }

   /**
   * Get rateLimitTimeUnit
   * @return rateLimitTimeUnit
  **/
  @ApiModelProperty(value = "")
=======
  
  /**
   * Burst control time unit
   **/
  @ApiModelProperty(value = "Burst control time unit")
  @JsonProperty("rateLimitTimeUnit")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getRateLimitTimeUnit() {
    return rateLimitTimeUnit;
  }

  public void setRateLimitTimeUnit(String rateLimitTimeUnit) {
    this.rateLimitTimeUnit = rateLimitTimeUnit;
  }

<<<<<<< HEAD
  public SubscriptionThrottlePolicyDTO customAttributes(List<CustomAttributeDTO> customAttributes) {
    this.customAttributes = customAttributes;
    return this;
  }

  public SubscriptionThrottlePolicyDTO addCustomAttributesItem(CustomAttributeDTO customAttributesItem) {
    this.customAttributes.add(customAttributesItem);
    return this;
  }

   /**
   * Custom attributes added to the Subscription Throttle policy 
   * @return customAttributes
  **/
  @ApiModelProperty(example = "{}", value = "Custom attributes added to the Subscription Throttle policy ")
=======
  
  /**
   * Custom attributes added to the Subscription Throttling Policy\n
   **/
  @ApiModelProperty(value = "Custom attributes added to the Subscription Throttling Policy\n")
  @JsonProperty("customAttributes")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public List<CustomAttributeDTO> getCustomAttributes() {
    return customAttributes;
  }

  public void setCustomAttributes(List<CustomAttributeDTO> customAttributes) {
    this.customAttributes = customAttributes;
  }

<<<<<<< HEAD
  public SubscriptionThrottlePolicyDTO stopOnQuotaReach(Boolean stopOnQuotaReach) {
    this.stopOnQuotaReach = stopOnQuotaReach;
    return this;
  }

   /**
   * Get stopOnQuotaReach
   * @return stopOnQuotaReach
  **/
  @ApiModelProperty(value = "")
=======
  
  /**
   * This indicates the action to be taken when a user goes beyond the allocated quota. If checked, the user's requests will be dropped. If unchecked, the requests will be allowed to pass through.\n
   **/
  @ApiModelProperty(value = "This indicates the action to be taken when a user goes beyond the allocated quota. If checked, the user's requests will be dropped. If unchecked, the requests will be allowed to pass through.\n")
  @JsonProperty("stopOnQuotaReach")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public Boolean getStopOnQuotaReach() {
    return stopOnQuotaReach;
  }

  public void setStopOnQuotaReach(Boolean stopOnQuotaReach) {
    this.stopOnQuotaReach = stopOnQuotaReach;
  }

<<<<<<< HEAD
  public SubscriptionThrottlePolicyDTO billingPlan(String billingPlan) {
    this.billingPlan = billingPlan;
    return this;
  }

   /**
   * Get billingPlan
   * @return billingPlan
  **/
  @ApiModelProperty(value = "")
=======
  
  /**
   * define whether this is Paid or a Free plan. Allowed values are FREE or COMMERCIAL.\n
   **/
  @ApiModelProperty(value = "define whether this is Paid or a Free plan. Allowed values are FREE or COMMERCIAL.\n")
  @JsonProperty("billingPlan")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getBillingPlan() {
    return billingPlan;
  }

  public void setBillingPlan(String billingPlan) {
    this.billingPlan = billingPlan;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SubscriptionThrottlePolicyDTO subscriptionThrottlePolicy = (SubscriptionThrottlePolicyDTO) o;
    return Objects.equals(this.defaultLimit, subscriptionThrottlePolicy.defaultLimit) &&
        Objects.equals(this.rateLimitCount, subscriptionThrottlePolicy.rateLimitCount) &&
        Objects.equals(this.rateLimitTimeUnit, subscriptionThrottlePolicy.rateLimitTimeUnit) &&
        Objects.equals(this.customAttributes, subscriptionThrottlePolicy.customAttributes) &&
        Objects.equals(this.stopOnQuotaReach, subscriptionThrottlePolicy.stopOnQuotaReach) &&
        Objects.equals(this.billingPlan, subscriptionThrottlePolicy.billingPlan) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(defaultLimit, rateLimitCount, rateLimitTimeUnit, customAttributes, stopOnQuotaReach, billingPlan, super.hashCode());
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubscriptionThrottlePolicyDTO {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    defaultLimit: ").append(toIndentedString(defaultLimit)).append("\n");
    sb.append("    rateLimitCount: ").append(toIndentedString(rateLimitCount)).append("\n");
    sb.append("    rateLimitTimeUnit: ").append(toIndentedString(rateLimitTimeUnit)).append("\n");
    sb.append("    customAttributes: ").append(toIndentedString(customAttributes)).append("\n");
    sb.append("    stopOnQuotaReach: ").append(toIndentedString(stopOnQuotaReach)).append("\n");
    sb.append("    billingPlan: ").append(toIndentedString(billingPlan)).append("\n");
    sb.append("}");
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

