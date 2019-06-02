package org.wso2.carbon.apimgt.rest.api.admin.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.Objects;

/**
 * RequestCountLimitDTO
 */
public class RequestCountLimitDTO   {
  @SerializedName("requestCount")
  private Integer requestCount = 0;

  public RequestCountLimitDTO requestCount(Integer requestCount) {
    this.requestCount = requestCount;
    return this;
  }

<<<<<<< HEAD
   /**
   * Get requestCount
   * @return requestCount
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getRequestCount() {
=======



@ApiModel(description = "")
public class RequestCountLimitDTO extends ThrottleLimitDTO {
  
  
  
  private Long requestCount = null;

  
  /**
   * Maximum number of requests allowed
   **/
  @ApiModelProperty(value = "Maximum number of requests allowed")
  @JsonProperty("requestCount")
  public Long getRequestCount() {
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    return requestCount;
  }

  public void setRequestCount(Integer requestCount) {
    this.requestCount = requestCount;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RequestCountLimitDTO requestCountLimit = (RequestCountLimitDTO) o;
    return Objects.equals(this.requestCount, requestCountLimit.requestCount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestCount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RequestCountLimitDTO {\n");
    
    sb.append("    requestCount: ").append(toIndentedString(requestCount)).append("\n");
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

