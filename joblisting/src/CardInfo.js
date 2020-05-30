import React from "react";

const CardInfo = (props) => {
  return (
    <div className="card">
      <div className="logo-wrapper">
        <img src="#" />
      </div>
      <div className="position-wrapper">
        <div className="company-name"></div>
        <div className="position"></div>
        <div className="description">
          <div className="postedAt"></div>
          <div className="contract"></div>
          <div className="location"></div>
        </div>
        <div className="skills-wrapper">
          <div className="role"></div>
          <div className="level"></div>
          <div className="language"></div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
