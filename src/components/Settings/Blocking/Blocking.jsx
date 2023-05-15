  import React from "react";
import "./Blocking.css";
import SearchIcon from "@mui/icons-material/SearchRounded";
import BlockUser from "../BlockUser/BlockUser";

function Blocking() {
  return (
    <div className="block-section">
      <div className="block-users">
        <p>Block users</p>
      </div>
      <div className="block-content">
        <p>
          Once you block someone, that person can no longer see things you post
          on your timeline, tag you, invite you to events or groups, start a
          conversation with you, or add you as a friend. Note: Does not include
          apps, games or groups you both participate in
        </p>
      </div>
      <div className="block-input">
        <input type="text" placeholder="Type a name" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="block-list">
        <p>Block users list</p>
      </div>
      <div>
        <BlockUser />
      </div>
    </div>
  );
}

export default Blocking;
