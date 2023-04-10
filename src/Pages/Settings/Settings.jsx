import React from "react";
import "./Settings.css";
import SettingsIcon from "../../components/SettingsIcon/SettingsIcon";
import EditProfile from "@mui/icons-material/PersonRounded";
import Block from "@mui/icons-material/BlockRounded";
import Password from "@mui/icons-material/GppGoodRounded";
import ArrowForward from "@mui/icons-material/ChevronRightRounded";
import EditProfiles from "../../components/EditProfile/EditProfiles";
import Blocking from "../../components/Blocking/Blocking"
import PasswordAndSecurity from "../../components/PasswordAndSecurity/PasswordAndSecurity"

function Settings() {
  return (
    <main className="main">
      <section className="section-1">
        <SettingsIcon icon={EditProfile} info="Edit Profile" />
        <SettingsIcon icon={Block} info="Blocking" />
        <SettingsIcon icon={Password} info="Password & Security" />
      </section>
      <div>
        <PasswordAndSecurity />
      </div>
    </main>
  );
}

export default Settings;
