import React from "react";
import "./SettingsIcon.css";

function SettingsIcon(props) {
  return (
    <div
      className={
        props.active ? "settings-icon-active settings-icon" : "settings-icon"
      }
      onClick={props.onClick}>
      <props.icon className="icon" />
      <p>{props.info}</p>
    </div>
  );
}

export default SettingsIcon;
