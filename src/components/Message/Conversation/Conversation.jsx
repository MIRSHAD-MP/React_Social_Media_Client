import React from "react";
import "./Conversation.css";

function Conversation(props) {
  return (
    <div className="personal-message">
      <div className="person-img">
        <img src={props.image} alt="" />
      </div>
      <div className="messager-details">
        <p className="messager-name">{props.name}</p>
        <p className="messager-message">{props.message}</p>
      </div>
      <div className="message-times">
        <p className="message-time">{props.lastseen}</p>
      </div>
    </div>
  );
}

export default Conversation;
