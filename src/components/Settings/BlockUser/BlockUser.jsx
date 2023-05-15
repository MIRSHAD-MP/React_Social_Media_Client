import React from "react";
import "./BlockUser.css";

function BlockUser() {
  return (
    <div className="block-user">
      <div className="block-image">
        <img src="Assets/MIRSHAD.jpeg" alt="" />
      </div>
      <div className="block-name">
        <p className="name">MIRSHAD MP</p>
        <p className="date">Blocked : </p>
      </div>
      <div className="block-button">
        <button>Unblock</button>
      </div>
    </div>
  );
}

export default BlockUser;
