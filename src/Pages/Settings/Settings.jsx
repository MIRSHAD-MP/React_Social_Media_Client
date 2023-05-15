import React, { useState } from "react";
import "./Settings.css";
import SettingsIcon from "../../components/Settings/SettingsIcon/SettingsIcon";
import EditProfile from "@mui/icons-material/PersonRounded";
import Block from "@mui/icons-material/BlockRounded";
import Password from "@mui/icons-material/GppGoodRounded";
import EditProfiles from "../../components/Settings/EditProfile/EditProfiles";
import Blocking from "../../components/Settings/Blocking/Blocking";
import PasswordAndSecurity from "../../components/Settings/PasswordAndSecurity/PasswordAndSecurity";

function Settings() {
  const [activePage, setActivePage] = useState("edit-profile");
  const [activeSettings, setActiveSettings] = useState("edit-profile");

  const onClick = (pages) => {
    setActivePage(pages); 
    setActiveSettings(pages)
  };
  return (
    <main className="main">
      <section className="section-1">
        <SettingsIcon
          icon={EditProfile}
          info="Edit Profile"
          onClick={() => onClick("edit-profile")}
          active={activeSettings === "edit-profile"}
        />
        <SettingsIcon
          icon={Block}
          info="Blocking"
          onClick={() => onClick("blocking")}
          active={activeSettings === "blocking"}
        />
        <SettingsIcon
          icon={Password}
          info="Password & Security"
          onClick={() => onClick("password-security")}
          active={activeSettings === "password-security"}
        />
      </section>
      <div className="section-2">
        {activePage === "edit-profile" && <EditProfiles />}
        {activePage === "blocking" && <Blocking />}
        {activePage === "password-security" && <PasswordAndSecurity />}
      </div>
    </main>
  );
}

export default Settings;
