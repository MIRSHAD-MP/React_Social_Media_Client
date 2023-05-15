import React from "react";
import "./Followers.css";

function Followers(props) {
  return (
    <div className="followers-profiles">
      <div className="followers-accounts">
        <img src={props.image} alt="" />
        <div className="followers-details">
          <p className="followers-name">{props.name}</p>
          <p className="followers-position">{props.position}</p>
          <props.icon1 className="followers-icon" />
          <props.icon2 className="followers-icon" />
          <props.icon3 className="followers-icon" />
          <props.icon4 className="followers-icon" />
        </div>
      </div>
      <div className="followers-buttons">
        <button className="ignore-button">{props.button1}</button>
        <button className="follow-button">{props.button2}</button>
      </div>
    </div>
  );
}

export default Followers;
