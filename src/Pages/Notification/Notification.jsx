import React from "react";
import AsideFriendsList from "../../components/Others/AsideFriendsList/AsideFriendsList";
import Settings from "@mui/icons-material/Settings";
import Follow from "@mui/icons-material/AccountCircleRounded";
import NotificationList from "../../components/Notification/NotificationList/NotificationList";
import MIRSHAD from "../../Assets/MIRSHAD.jpeg";
import "./Notification.css";

function Notification() {
  return (
    <main className="notification">
      <div className="notification-list">
        <div className="notification-head">
          <p>Notification</p>
          <Settings className="notification-settings" />
        </div>
        <div>
          <NotificationList
            icon={Follow}
            image={MIRSHAD}
            name="Mirshad Mp followed You"
            lastseen="2 hours ago"
            button="Follow Back"
          />
        </div>
      </div>
      <aside>
        <AsideFriendsList />
      </aside>
    </main>
  );
}

export default Notification;
