import React from "react";
import "./AsideIcon.css";

function AsideIcon(props) {
  return (
    <div
      className={props.active ? "aside-icon active-aside-icon" : "aside-icon"}
      onClick={props.onClick}>
      <props.icon className="icon" />
      <p>{props.info}</p>
    </div>
  );
}

export default AsideIcon;