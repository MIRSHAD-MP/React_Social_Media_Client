import React from "react";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import "./SendMessage.css";

function SendMessage() {
  return (
    <div className="sendmessage-sections">
      <div className="sendmessage-details">
      <MoreIcon className="sendmessage-icon" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        <img src="Assets/MIRSHAD.jpeg" alt="" />
      </div>
      <div className="sendmessage-time">
        <p>9hour ago</p>
      </div>
    </div>
  );
}

export default SendMessage;
