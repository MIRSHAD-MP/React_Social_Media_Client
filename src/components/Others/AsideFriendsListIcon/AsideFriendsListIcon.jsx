import React from "react";
import "./AsideFriendsListIcon.css";

function AsideFriendsListIcon(props) {
  return (
    <div className="all-friends">
      <div className="friends-img">
        <img src={props.image} alt="" />
      </div>
      <div className="friends-name">
        <p>{props.name}</p>
      </div>
      <div className="friends-last-seen">
        <p>{props.lastseen}</p>
      </div>
    </div>
  );
}

export default AsideFriendsListIcon;
