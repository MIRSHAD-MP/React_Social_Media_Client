import React from "react";
import "./RecentEvent.css";

function RecentEvent(props) {
  return (
    <div className="feed-events-lists">
      <div className="feed-events-icons">
        <props.icon className="feed-events-icon" />
      </div>
      <div className="feed-event">
        <p className="feed-event-name">{props.name}</p>
        <p className="feed-event-content">
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default RecentEvent;
