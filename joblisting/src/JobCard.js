import React from "react";
import data from "./data.json";
import CardInfo from "./CardInfo";

const JobCard = () => {
  return (
    <div className="box">
      {data.map((info) => {
        return (
          <div key={info.id}>
            <CardInfo />
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;
