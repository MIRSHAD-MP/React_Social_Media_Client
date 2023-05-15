import React from "react";
import Intro from "../../components/Profile/Intro/Intro";
import Explore from "@mui/icons-material/PublicRounded";
import Gender from "@mui/icons-material/Person2Rounded";
import BirthDay from "@mui/icons-material/CakeRounded";
import Location from "@mui/icons-material/PersonPinCircleRounded";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import Upload from "@mui/icons-material/CloudUploadOutlined";
import Select from "@mui/icons-material/MoreHorizRounded";
import LiveVideo from "@mui/icons-material/VideocamOutlined";
import Photo from "@mui/icons-material/ImageOutlined";
import Feeling from "@mui/icons-material/SentimentSatisfiedOutlined";
import "./Profile.css";

function Profile() {
  return (
    <main className="profile">
      <div className="profile-section-1">
        <div className="cover">
          <img src="Assets/MIRSHAD.jpeg" alt="" className="cover-image" />
          <div className="profile-pic">
            <img src="Assets/MIRSHAD.jpeg" alt="" />
          </div>
          <div className="profile-pic-upload">
            <Upload className="profile-upload-icon" />
          </div>
          <div className="edit-cover-photo">
            <Upload className="cover-upload-icon" />
            <p>Edit Cover Photo</p>
          </div>
        </div>
        <div className="profile-user-details">
          <div>
            <p className="p-name">Sahla Anmah</p>
            <p className="p-job"> UI Designer</p>
          </div>
          <div className="profile-button">
            <button>Edit basic info</button>
          </div>
        </div>
      </div>
      <div className="profile-section-2">
        <div className="intro-left-section">
          <div className="intro-name">
            <p>INTRO</p>
          </div>
          <div className="intros">
            <Intro icon={Explore} info="uihut.com" />
            <Intro icon={Gender} info="Male" />
            <Intro icon={BirthDay} info="Born June 18,2001" />
            <Intro icon={Location} info="Sylhet, Bangladeh" />
            <Intro icon={Facebook} info="Facebook salehahmed" />
            <Intro icon={Twitter} info="Twitter salehahmed" />
            <Intro icon={Instagram} info="intagram salehahmed" />
          </div>
          <div className="intro-edit">
            <button>Edit Details</button>
          </div>
        </div>

        <div className="intro-middle-section">
          <div className="intro-top-section">
            <div className="post-image">
              <img src="Assets/MIRSHAD.jpeg" alt="" />
              <input
                type="text"
                name=""
                id=""
                placeholder="What's happening?"
              />
            </div>
            <div className="post-options">
            <LiveVideo className="post-icons"/>
             <p className="post-icon-name">Live Video</p> 
              <Photo className="post-icons"/>
             <p className="post-icon-name">Photo/Video</p> 
              <Feeling className="post-icons"/>
             <p className="post-icon-name">Feeling</p>
              <button>Post</button>
            </div>
          </div>
          <div className="intro-bottom-section">POST IMAGE</div>
        </div>

        <div className="intro-right-section">
          <div className="you-might">
            <div className="you-might-head">
              <p className="you-might-like-head">You Might like</p>
              <p className="you-might-see-all">
                <a href="">See All</a>
              </p>
            </div>
            <div className="you-might-main">
              <img src="Assets/MIRSHAD.jpeg" alt="" />
              <div className="name-position">
                <p className="might-name">Radovan SkillArena</p>
                <p className="might-position">Founder & CEO at trophy</p>
              </div>
            </div>
            <div className="might-social">
              <Explore className="might-social-icon"/>
              <Facebook className="might-social-icon" />
              <Twitter className="might-social-icon" />
              <Instagram className="might-social-icon" />
            </div>
            <div className="you-might-button">
              <button className="button-1">Ignore</button>
              <button className="button-2">Follow</button>
            </div>
          </div>
          <div className="recent-event">
            <div className="recent-head">
              <p>Recent Event</p>
              <div>
                <Select />
              </div>
            </div>
            <div className="events">
              <div className="event-logo">
                <Select />
              </div>
              <div className="event">
                <p className="event-head">Graduation Ceremony</p>
                <p className="event-sub">
                  The graduation ceremony is also sometimes called...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
