import React from "react";
import AsideIcon from "../../components/AsideIcon/AsideIcon";
import Feed from "@mui/icons-material/GridViewRounded";
import MyCommunity from "@mui/icons-material/PeopleRounded";
import Messages from "@mui/icons-material/CommentRounded";
import Notification from "@mui/icons-material/NotificationsRounded";
import Explore from "@mui/icons-material/PublicRounded";
import Profile from "@mui/icons-material/Person2Rounded";
import Settings from "@mui/icons-material/SettingsRounded";
import Logout from "@mui/icons-material/LogoutRounded";
import "./Aside.css";

function Aside() {
  return (
    <aside className="aside">
      <AsideIcon icon={Feed} info="Feed" />
      <AsideIcon icon={MyCommunity} info="My community" />
      <AsideIcon icon={Messages} info="Messages" />
      <AsideIcon icon={Notification} info="Notification" />
      <AsideIcon icon={Explore} info="Explore" />
      <AsideIcon icon={Profile} info="Profile" />
      <AsideIcon icon={Settings} info="Settings" />
      <AsideIcon icon={Logout} info="Logout" />
    </aside>
  );
}

export default Aside;
