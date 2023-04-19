import React from "react";
import "./Intro.css";

function Intro(props) {
  return (
    <div className="intro-details">
      <props.icon className="intro-icon" />
      <p>{props.info}</p>
    </div>
  );
}

export default Intro;
