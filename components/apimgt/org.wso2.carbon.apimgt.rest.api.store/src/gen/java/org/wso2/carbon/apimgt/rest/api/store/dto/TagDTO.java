package org.wso2.carbon.apimgt.rest.api.store.dto;


<<<<<<< HEAD
import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.Objects;

/**
 * TagDTO
 */
public class TagDTO   {
  @SerializedName("name")
  private String name = null;

  @SerializedName("weight")
  private Integer weight = null;
=======
import io.swagger.annotations.*;
import com.fasterxml.jackson.annotation.*;

import javax.validation.constraints.NotNull;





@ApiModel(description = "")
public class TagDTO  {
  
  
  @NotNull
  private String name = null;
  
  @NotNull
  private Integer weight = null;

  private String lastUpdatedTime = null;

  private String createdTime = null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  public TagDTO name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
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
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

<<<<<<< HEAD
  public TagDTO weight(Integer weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Get weight
   * @return weight
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(required = true, value = "")
  public Integer getWeight() {
    return weight;
  }

  public void setWeight(Integer weight) {
    this.weight = weight;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TagDTO tag = (TagDTO) o;
    return Objects.equals(this.name, tag.name) &&
        Objects.equals(this.weight, tag.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, weight);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TagDTO {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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

