package org.wso2.carbon.apimgt.rest.api.store.dto;


import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.wso2.carbon.apimgt.rest.api.store.dto.TierDTO;
import java.util.Objects;

<<<<<<< HEAD
/**
 * TierListDTO
 */
public class TierListDTO   {
  @SerializedName("count")
=======
import io.swagger.annotations.*;
import com.fasterxml.jackson.annotation.*;

import javax.validation.constraints.NotNull;





@ApiModel(description = "")
public class TierListDTO  {
  
  
  
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  private Integer count = null;

<<<<<<< HEAD
  @SerializedName("next")
  private String next = null;

  @SerializedName("previous")
  private String previous = null;
=======
  private String lastUpdatedTime = null;
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7

  @SerializedName("list")
  private List<TierDTO> list = new ArrayList<TierDTO>();

  public TierListDTO count(Integer count) {
    this.count = count;
    return this;
  }

   /**
   * Number of Tiers returned. 
   * @return count
  **/
<<<<<<< HEAD
  @ApiModelProperty(value = "Number of Tiers returned. ")
=======

  @JsonIgnore
  public String getCreatedTime(){
    return createdTime;
  }
  public void setCreatedTime(String createdTime){
    this.createdTime=createdTime;
  }

  
  /**
   * Number of Tiers returned.\n
   **/
  @ApiModelProperty(value = "Number of Tiers returned.\n")
  @JsonProperty("count")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public Integer getCount() {
    return count;
  }

  public void setCount(Integer count) {
    this.count = count;
  }

<<<<<<< HEAD
  public TierListDTO next(String next) {
    this.next = next;
    return this;
  }

   /**
   * Link to the next subset of resources qualified. Empty if no more resources are to be returned. 
   * @return next
  **/
  @ApiModelProperty(value = "Link to the next subset of resources qualified. Empty if no more resources are to be returned. ")
=======
  
  /**
   * Link to the next subset of resources qualified.\nEmpty if no more resources are to be returned.\n
   **/
  @ApiModelProperty(value = "Link to the next subset of resources qualified.\nEmpty if no more resources are to be returned.\n")
  @JsonProperty("next")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getNext() {
    return next;
  }

  public void setNext(String next) {
    this.next = next;
  }

<<<<<<< HEAD
  public TierListDTO previous(String previous) {
    this.previous = previous;
    return this;
  }

   /**
   * Link to the previous subset of resources qualified. Empty if current subset is the first subset returned. 
   * @return previous
  **/
  @ApiModelProperty(value = "Link to the previous subset of resources qualified. Empty if current subset is the first subset returned. ")
=======
  
  /**
   * Link to the previous subset of resources qualified.\nEmpty if current subset is the first subset returned.\n
   **/
  @ApiModelProperty(value = "Link to the previous subset of resources qualified.\nEmpty if current subset is the first subset returned.\n")
  @JsonProperty("previous")
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  public String getPrevious() {
    return previous;
  }

  public void setPrevious(String previous) {
    this.previous = previous;
  }

<<<<<<< HEAD
  public TierListDTO list(List<TierDTO> list) {
    this.list = list;
    return this;
  }

  public TierListDTO addListItem(TierDTO listItem) {
    this.list.add(listItem);
    return this;
  }

   /**
   * Get list
   * @return list
  **/
=======
  
  /**
   **/
>>>>>>> 1899f307df4c4483e795b6eaf896954a12742bb7
  @ApiModelProperty(value = "")
  public List<TierDTO> getList() {
    return list;
  }

  public void setList(List<TierDTO> list) {
    this.list = list;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TierListDTO tierList = (TierListDTO) o;
    return Objects.equals(this.count, tierList.count) &&
        Objects.equals(this.next, tierList.next) &&
        Objects.equals(this.previous, tierList.previous) &&
        Objects.equals(this.list, tierList.list);
  }

  @Override
  public int hashCode() {
    return Objects.hash(count, next, previous, list);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TierListDTO {\n");
    
    sb.append("    count: ").append(toIndentedString(count)).append("\n");
    sb.append("    next: ").append(toIndentedString(next)).append("\n");
    sb.append("    previous: ").append(toIndentedString(previous)).append("\n");
    sb.append("    list: ").append(toIndentedString(list)).append("\n");
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

