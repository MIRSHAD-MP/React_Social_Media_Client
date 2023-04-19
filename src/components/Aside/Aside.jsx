import React, { useState } from "react";
import AsideIcon from "../AsideIcon/AsideIcon";
import Feeds from "@mui/icons-material/GridViewRounded";
import MyCommunitys from "@mui/icons-material/PeopleRounded";
import Message from "@mui/icons-material/CommentRounded";
import Notifications from "@mui/icons-material/NotificationsRounded";
import Explores from "@mui/icons-material/PublicRounded";
import Profiles from "@mui/icons-material/Person2Rounded";
import Setting from "@mui/icons-material/SettingsRounded";
import Logout from "@mui/icons-material/LogoutRounded";
import Notification from "../../Pages/Notification/Notification";
import Profile from "../../Pages/Profile/Profile";
import Settings from "../../Pages/Settings/Settings";
import MyCommunity from "../../Pages/MyCommunity/MyCommunity";
import "./Aside.css";

function Aside() {
  const [activePage, setActivePage] = useState("my-community");
  const [activeAside, setActiveAside] = useState("my-community");
  const onClick = (pages) => {
    setActivePage(pages);
    setActiveAside(pages);
  };
  return (
    <div>
      <aside className="aside">
        <AsideIcon
          icon={Feeds}
          info="Feed"
          onClick={() => onClick("feed")}
          active={"feed" == activeAside}
        />
        <AsideIcon
          icon={MyCommunitys}
          info="My community"
          onClick={() => onClick("my-community")}
          active={"my-community" == activeAside}
        />
        <AsideIcon
          icon={Message}
          info="Messages"
          onClick={() => onClick("messages")}
          active={"messages" == activeAside}
        />
        <AsideIcon
          icon={Notifications}
          info="Notification"
          onClick={() => onClick("notification")}
          active={"notification" == activeAside}
        />
        <AsideIcon
          icon={Explores}
          info="Explore"
          onClick={() => onClick("explore")}
          active={activeAside == "explore"}
        />
        <AsideIcon
          icon={Profiles}
          info="Profile"
          onClick={() => onClick("profile")}
          active={"profile" == activeAside}
        />
        <AsideIcon
          icon={Setting}
          info="Settings"
          onClick={() => onClick("settings")}
          active={activeAside == "settings"}
        />
        <AsideIcon
          icon={Logout}
          info="Logout"
          onClick={() => onClick("logout")}
        />
      </aside>
      <div>
        {activePage === "my-community" && <MyCommunity />}
        {activePage === "notification" && <Notification />}
        {activePage === "profile" && <Profile />}
        {activePage === "settings" && <Settings />}
      </div>
    </div>
  );
}

export default Aside;
