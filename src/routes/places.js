import React from "react";
import places from "../data/places.json";
import PlaceItem from "./placeItem";

import "./styles.css";

const Places = () => {
  return (
    <div className="main__container">
      {places.map((item, index) => (
        <PlaceItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Places;
