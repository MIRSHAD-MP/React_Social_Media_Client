import React from "react";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import "./ReceivedMessage.css";

function ReceivedMessage() {
  return (
    <div className="receivedmessage-sections">
      <div className="receivedmessage-details">
        <img src="Assets/MIRSHAD.jpeg" alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        <MoreIcon className="receivedchat-icon" />
      </div>
      <div className="receivedmessage-time">
        <p>9hour ago</p>
      </div>
    </div>
  );
}

export default ReceivedMessage;
