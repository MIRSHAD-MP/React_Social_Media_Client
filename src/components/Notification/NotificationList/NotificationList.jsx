import React from "react";
import "./NotificationList.css";

function Notification(props) {
  return (
    <div className="notifications">
      <props.icon className="follow-icon" />
      <img src={props.image} alt="" />
      <div className="notifications-user">
        <p className="notification-user-name">{props.name}</p>
        <p className="notifications-last-seen">{props.lastseen}</p>
      </div>
      <button>{props.button}</button>
    </div>
  );
}

export default Notification;
