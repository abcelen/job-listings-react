import React from "react";

const CardInfo = (props) => {
  return (
    <div className="card">
      <div className="logo-wrapper">
        <img src={props.info.logo} alt="logo" />
      </div>
      <div className="position-wrapper">
        <div className="company-name">{props.info.company}</div>
        <div className="position">{props.info.position}</div>
        <div className="description-wrapper">
          <div className="postedAt">{props.info.postedAt}</div>
          <div className="contract">{props.info.contract}</div>
          <div className="location">{props.info.location}</div>
        </div>
      </div>
      <div className="skills-wrapper">
        <div className="role">{props.info.role}</div>
        <div className="level">{props.info.level}</div>
        <div className="language">
          {props.info.languages.map((language) => {
            return <div className="language">{language}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
