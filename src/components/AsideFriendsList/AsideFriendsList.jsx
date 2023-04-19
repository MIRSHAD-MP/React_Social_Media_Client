import React from "react";
import "./AsideFriendsList.css";
import SearchIcon from "@mui/icons-material/SearchRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AsideFriendsListIcon from "../AsideFriendsListIcon/AsideFriendsListIcon";
import MIRSHAD from "../../Assets/MIRSHAD.jpeg";

function AsideFriendsList() {
  return (
    <div>
      <aside className="aside-friend-list">
        <div className="aside-friend-input">
          <input type="text" name="" id="" placeholder="Search Friends!" />
          <SearchIcon className="aside-friend-icon" />
        </div>
        <div className="friends-list">
          <p>Friends</p>
          <MoreHorizIcon className="friends-more-icon" />
        </div>
        <div>
          <AsideFriendsListIcon
            className="friends-detail"
            image={MIRSHAD}
            name="AGFAR GDAYT"
            lastseen="12 min"
          />
        </div>
      </aside>
    </div>
  );
}

export default AsideFriendsList;
