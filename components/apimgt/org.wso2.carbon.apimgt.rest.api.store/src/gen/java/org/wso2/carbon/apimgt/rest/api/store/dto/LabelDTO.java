package org.wso2.carbon.apimgt.rest.api.store.dto;

<<<<<<< HEAD

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * LabelDTO
 */
public class LabelDTO   {
  @SerializedName("labelId")
  private String labelId = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("access_urls")
  private List<String> accessUrls = new ArrayList<String>();

  public LabelDTO labelId(String labelId) {
    this.labelId = labelId;
    return this;
  }

   /**
   * Get labelId
   * @return labelId
  **/
  @ApiModelProperty(required = true, value = "")
  public String getLabelId() {
    return labelId;
  }

  public void setLabelId(String labelId) {
    this.labelId = labelId;
  }

  public LabelDTO name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(required = true, value = "")
  public String getName() {
    return name;
  }

=======
import java.util.ArrayList;
import java.util.List;

import io.swagger.annotations.*;
import com.fasterxml.jackson.annotation.*;

import javax.validation.constraints.NotNull;





@ApiModel(description = "")
public class LabelDTO  {
  
  
  @NotNull
  private String name = null;
  
  
  private List<String> accessUrls = new ArrayList<String>();

  private String lastUpdatedTime = null;

  private String createdTime = null;

  /**
  * gets and sets the lastUpdatedTime for LabelDTO
  **/
  @JsonIgnore
  public String getLastUpdatedTime(){
    return lastUpdatedTime;
  }
  public void setLastUpdatedTime(String lastUpdatedTime){
    this.lastUpdatedTime=lastUpdatedTime;
  }

  /**
  * gets and sets the createdTime for a LabelDTO
  **/

  @JsonIgnore
  public String getCreatedTime(){
    return createdTime;
  }
  public void setCreatedTime(String createdTime){
    this.createdTime=createdTime;
  }

  
  /**
   **/
  @ApiModelProperty(required = true, value = "")
  @JsonProperty("name")
  public String getName() {
    return name;
  }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public void setName(String name) {
    this.name = name;
  }

<<<<<<< HEAD
  public LabelDTO accessUrls(List<String> accessUrls) {
    this.accessUrls = accessUrls;
    return this;
  }

  public LabelDTO addAccessUrlsItem(String accessUrlsItem) {
    this.accessUrls.add(accessUrlsItem);
    return this;
  }

   /**
   * Get accessUrls
   * @return accessUrls
  **/
  @ApiModelProperty(required = true, value = "")
  public List<String> getAccessUrls() {
    return accessUrls;
  }

=======
  
  /**
   **/
  @ApiModelProperty(value = "")
  @JsonProperty("accessUrls")
  public List<String> getAccessUrls() {
    return accessUrls;
  }
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public void setAccessUrls(List<String> accessUrls) {
    this.accessUrls = accessUrls;
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
    LabelDTO label = (LabelDTO) o;
    return Objects.equals(this.labelId, label.labelId) &&
        Objects.equals(this.name, label.name) &&
        Objects.equals(this.accessUrls, label.accessUrls);
  }

  @Override
  public int hashCode() {
    return Objects.hash(labelId, name, accessUrls);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LabelDTO {\n");
    
    sb.append("    labelId: ").append(toIndentedString(labelId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    accessUrls: ").append(toIndentedString(accessUrls)).append("\n");
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

=======
  

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class LabelDTO {\n");
    
    sb.append("  name: ").append(name).append("\n");
    sb.append("  accessUrls: ").append(accessUrls).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
