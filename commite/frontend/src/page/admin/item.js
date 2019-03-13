import React from "react";
//import "../sass/item.scss";

const Item = ({ item, index }) => (
  <div className="media ">
    <div className="media-left">
      <div className="number">{index + 1}</div>
    </div>
    <div className="media-content">
      <div className="Name">
        <strong>{item.name}</strong>
      </div>
      <div className="description">{item.email}</div>
      <div className="CofradiaCreacionBox">{item.creacion}</div>
    </div>
  </div>
);

export default Item;
