package org.wso2.carbon.apimgt.rest.api.admin.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.Objects;

/**
 * BandwidthLimitDTO
 */
public class BandwidthLimitDTO   {
  @SerializedName("dataAmount")
  private Integer dataAmount = 0;

<<<<<<< HEAD
  @SerializedName("dataUnit")
  private String dataUnit = null;

  public BandwidthLimitDTO dataAmount(Integer dataAmount) {
    this.dataAmount = dataAmount;
    return this;
  }

   /**
   * Get dataAmount
   * @return dataAmount
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getDataAmount() {
=======




@ApiModel(description = "")
public class BandwidthLimitDTO extends ThrottleLimitDTO {
  
  
  
  private Long dataAmount = null;
  
  
  private String dataUnit = null;

  
  /**
   * Amount of data allowed to be transfered
   **/
  @ApiModelProperty(value = "Amount of data allowed to be transfered")
  @JsonProperty("dataAmount")
  public Long getDataAmount() {
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
    return dataAmount;
  }

  public void setDataAmount(Integer dataAmount) {
    this.dataAmount = dataAmount;
  }

<<<<<<< HEAD
  public BandwidthLimitDTO dataUnit(String dataUnit) {
    this.dataUnit = dataUnit;
    return this;
  }

   /**
   * Get dataUnit
   * @return dataUnit
  **/
  @ApiModelProperty(required = true, value = "")
=======
  
  /**
   * Unit of data allowed to be transfered. Allowed values are \"KB\", \"MB\" and \"GB\"
   **/
  @ApiModelProperty(value = "Unit of data allowed to be transfered. Allowed values are \"KB\", \"MB\" and \"GB\"")
  @JsonProperty("dataUnit")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getDataUnit() {
    return dataUnit;
  }

  public void setDataUnit(String dataUnit) {
    this.dataUnit = dataUnit;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BandwidthLimitDTO bandwidthLimit = (BandwidthLimitDTO) o;
    return Objects.equals(this.dataAmount, bandwidthLimit.dataAmount) &&
        Objects.equals(this.dataUnit, bandwidthLimit.dataUnit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dataAmount, dataUnit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BandwidthLimitDTO {\n");
    
    sb.append("    dataAmount: ").append(toIndentedString(dataAmount)).append("\n");
    sb.append("    dataUnit: ").append(toIndentedString(dataUnit)).append("\n");
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

