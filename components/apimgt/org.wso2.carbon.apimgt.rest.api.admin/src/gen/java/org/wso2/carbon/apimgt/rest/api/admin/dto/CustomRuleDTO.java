package org.wso2.carbon.apimgt.rest.api.admin.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.wso2.carbon.apimgt.rest.api.admin.dto.ThrottlePolicyDTO;
import java.util.Objects;

/**
 * CustomRuleDTO
 */
public class CustomRuleDTO extends ThrottlePolicyDTO  {
  @SerializedName("siddhiQuery")
  private String siddhiQuery = null;

  @SerializedName("keyTemplate")
  private String keyTemplate = null;

<<<<<<< HEAD
  public CustomRuleDTO siddhiQuery(String siddhiQuery) {
    this.siddhiQuery = siddhiQuery;
    return this;
  }

   /**
   * Get siddhiQuery
   * @return siddhiQuery
  **/
  @ApiModelProperty(value = "")
=======
  
  /**
   * Siddhi query which represents the custom throttling policy
   **/
  @ApiModelProperty(value = "Siddhi query which represents the custom throttling policy")
  @JsonProperty("siddhiQuery")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getSiddhiQuery() {
    return siddhiQuery;
  }

  public void setSiddhiQuery(String siddhiQuery) {
    this.siddhiQuery = siddhiQuery;
  }

<<<<<<< HEAD
  public CustomRuleDTO keyTemplate(String keyTemplate) {
    this.keyTemplate = keyTemplate;
    return this;
  }

   /**
   * Get keyTemplate
   * @return keyTemplate
  **/
  @ApiModelProperty(value = "")
=======
  
  /**
   * The specific combination of attributes that are checked in the policy.
   **/
  @ApiModelProperty(value = "The specific combination of attributes that are checked in the policy.")
  @JsonProperty("keyTemplate")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getKeyTemplate() {
    return keyTemplate;
  }

  public void setKeyTemplate(String keyTemplate) {
    this.keyTemplate = keyTemplate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CustomRuleDTO customRule = (CustomRuleDTO) o;
    return Objects.equals(this.siddhiQuery, customRule.siddhiQuery) &&
        Objects.equals(this.keyTemplate, customRule.keyTemplate) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(siddhiQuery, keyTemplate, super.hashCode());
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CustomRuleDTO {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    siddhiQuery: ").append(toIndentedString(siddhiQuery)).append("\n");
    sb.append("    keyTemplate: ").append(toIndentedString(keyTemplate)).append("\n");
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

