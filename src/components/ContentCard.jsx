import React from "react";
import Card from "./Card";

const ContentCard = () => {
  return (
    // <div className="row">
    //     <div className="col-4"></div>
    // </div>

    <div className="p-2 w-75 m-auto">
      <div className="row ">
        <div className="col-3 ">
          <Card />
        </div>
        <div className="col-3 ">
          <Card />  
        </div>
        <div className="col-3 ">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
