import React from "react";
import data from "./data.json";
import CardInfo from "./CardInfo";

const JobCard = () => {
  return (
    <div className="box">
      {data.map((info) => {
        console.log(data);
        return (
          <div key={info.id}>
            <CardInfo info={info} />
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;
