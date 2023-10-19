import { Component } from "react";
import "./PLP-GroupItems.scss";

const PLPGroupItems = () => {
  const { name, id, image_Group } = this.props.groupOfProduct;
  return (
    <div className="PLP-wrapper-GroupItems">
      <img
        src={image_Group}
        alt="PLP_groups-image"
        className="PLP-image-GroupItems"
      />
      <h1>
        {name}
        <span>
          <i></i>
        </span>
      </h1>
    </div>
  );
};
export default PLPGroupItems;
