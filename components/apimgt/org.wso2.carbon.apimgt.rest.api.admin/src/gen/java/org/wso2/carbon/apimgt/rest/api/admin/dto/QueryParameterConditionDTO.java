package org.wso2.carbon.apimgt.rest.api.admin.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.Objects;

/**
 * QueryParameterConditionDTO
 */
public class QueryParameterConditionDTO   {
  @SerializedName("parameterName")
  private String parameterName = null;

  @SerializedName("parameterValue")
  private String parameterValue = null;

<<<<<<< HEAD
  public QueryParameterConditionDTO parameterName(String parameterName) {
    this.parameterName = parameterName;
    return this;
  }

   /**
   * Get parameterName
   * @return parameterName
  **/
  @ApiModelProperty(required = true, value = "")
=======
  
  /**
   * Name of the query parameter
   **/
  @ApiModelProperty(value = "Name of the query parameter")
  @JsonProperty("parameterName")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getParameterName() {
    return parameterName;
  }

  public void setParameterName(String parameterName) {
    this.parameterName = parameterName;
  }

<<<<<<< HEAD
  public QueryParameterConditionDTO parameterValue(String parameterValue) {
    this.parameterValue = parameterValue;
    return this;
  }

   /**
   * Get parameterValue
   * @return parameterValue
  **/
  @ApiModelProperty(required = true, value = "")
=======
  
  /**
   * Value of the query parameter to be matched
   **/
  @ApiModelProperty(value = "Value of the query parameter to be matched")
  @JsonProperty("parameterValue")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getParameterValue() {
    return parameterValue;
  }

  public void setParameterValue(String parameterValue) {
    this.parameterValue = parameterValue;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QueryParameterConditionDTO queryParameterCondition = (QueryParameterConditionDTO) o;
    return Objects.equals(this.parameterName, queryParameterCondition.parameterName) &&
        Objects.equals(this.parameterValue, queryParameterCondition.parameterValue);
  }

  @Override
  public int hashCode() {
    return Objects.hash(parameterName, parameterValue);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class QueryParameterConditionDTO {\n");
    
    sb.append("    parameterName: ").append(toIndentedString(parameterName)).append("\n");
    sb.append("    parameterValue: ").append(toIndentedString(parameterValue)).append("\n");
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

