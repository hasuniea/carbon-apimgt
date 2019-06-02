package org.wso2.carbon.apimgt.rest.api.admin.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.Objects;

/**
 * HeaderConditionDTO
 */
public class HeaderConditionDTO   {
  @SerializedName("headerName")
  private String headerName = null;

  @SerializedName("headerValue")
  private String headerValue = null;

<<<<<<< HEAD
  public HeaderConditionDTO headerName(String headerName) {
    this.headerName = headerName;
    return this;
  }

   /**
   * Get headerName
   * @return headerName
  **/
  @ApiModelProperty(required = true, value = "")
=======
  
  /**
   * Name of the header
   **/
  @ApiModelProperty(value = "Name of the header")
  @JsonProperty("headerName")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getHeaderName() {
    return headerName;
  }

  public void setHeaderName(String headerName) {
    this.headerName = headerName;
  }

<<<<<<< HEAD
  public HeaderConditionDTO headerValue(String headerValue) {
    this.headerValue = headerValue;
    return this;
  }

   /**
   * Get headerValue
   * @return headerValue
  **/
  @ApiModelProperty(required = true, value = "")
=======
  
  /**
   * Value of the header
   **/
  @ApiModelProperty(value = "Value of the header")
  @JsonProperty("headerValue")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getHeaderValue() {
    return headerValue;
  }

  public void setHeaderValue(String headerValue) {
    this.headerValue = headerValue;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    HeaderConditionDTO headerCondition = (HeaderConditionDTO) o;
    return Objects.equals(this.headerName, headerCondition.headerName) &&
        Objects.equals(this.headerValue, headerCondition.headerValue);
  }

  @Override
  public int hashCode() {
    return Objects.hash(headerName, headerValue);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class HeaderConditionDTO {\n");
    
    sb.append("    headerName: ").append(toIndentedString(headerName)).append("\n");
    sb.append("    headerValue: ").append(toIndentedString(headerValue)).append("\n");
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

