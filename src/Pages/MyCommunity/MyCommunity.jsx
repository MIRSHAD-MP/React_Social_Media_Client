import React, { useState } from "react";
import AsideFriendsList from "../../components/Others/AsideFriendsList/AsideFriendsList";
import Explore from "@mui/icons-material/PublicRounded";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import MIRSHAD from "../../Assets/MIRSHAD.jpeg";
import Followers from "../../components/MyCommunity/Followers/Followers";
import Following from "../../components/MyCommunity/Following/Following";
import PeopleYouMightLike from "../../components/MyCommunity/PeopleYouMightLike/PeopleYouMightLike";
import "./MyCommunity.css";

function MyCommunity() {
  const [activePage, setActivePage] = useState("followers");
  const [activeButton, setActiveButton] = useState("followers");

  const onClick = (pages) => {
    setActivePage(pages);
    setActiveButton(pages);
  };

  return (
    <main className="my-community">
      <div className="followers-head">
        <div className="my-community-buttons">
          <button
            onClick={() => onClick("followers")}
            className={
              activeButton === "followers"
                ? "active-followers-button"
                : "followers-button"
            }>
            52,300 Followers
          </button>
          <button
            onClick={() => onClick("following")}
            className={
              activeButton === "following"
                ? "active-followers-button"
                : "followers-button"
            }>
            52,300 Following
          </button>
          <button
            onClick={() => onClick("people-you-might-like")}
            className={
              activeButton === "people-you-might-like"
                ? "active-followers-button"
                : "followers-button"
            }>
            People You Might Like
          </button>
        </div>
        <div className="users-profiles">
          {activePage === "followers" && (
              <Followers
                image={MIRSHAD}
                name="Radovan SkillArena"
                position="Founder & CEO at Trophy"
                icon1={Explore}
                icon2={Facebook}
                icon3={Twitter}
                icon4={Instagram}
                button1="Ignore"
                button2="Follow"
              />
          )}

          {activePage === "following" && (          
            <Following
              image={MIRSHAD}
              name="Shadha Fathi"
              position="Founder & CEO at Trophy"
              icon1={Explore}
              icon2={Facebook}
              icon3={Twitter}
              icon4={Instagram}
              button1="Ignore"
              button2="Follow"
            />
          )}
          {activePage === "people-you-might-like" && (
            <PeopleYouMightLike
              image={MIRSHAD}
              name="Terbiyeliadam50"
              position="Founder & CEO at Trophy"
              icon1={Explore}
              icon2={Facebook}
              icon3={Twitter}
              icon4={Instagram}
              button1="Ignore"
              button2="Follow"
            />
          )}
        </div>
      </div>
      <aside>
        <AsideFriendsList />
      </aside>
    </main>
  );
}

export default MyCommunity;
