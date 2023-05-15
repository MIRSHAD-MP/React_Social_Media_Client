import React, { useState } from "react";
import AsideFriendsList from "../../components/Others/AsideFriendsList/AsideFriendsList";
import LiveVideo from "@mui/icons-material/VideocamOutlined";
import Photo from "@mui/icons-material/ImageOutlined";
import Feeling from "@mui/icons-material/SentimentSatisfiedOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Like from "@mui/icons-material/FavoriteBorderRounded";
import Comment from "@mui/icons-material/ChatBubbleOutlineRounded";
import Share from "@mui/icons-material/NearMeRounded";
import Send from "@mui/icons-material/SendSharp";
import Smile from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import Explore from "@mui/icons-material/PublicRounded";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import Graduation from "@mui/icons-material/MenuBook";
import Post from "../../components/Feed/Post/Post";
import MIRSHAD from "../../Assets/MIRSHAD.jpeg";
import RecentEvent from "../../components/Feed/RecentEvent/RecentEvent";
import "./Feed.css";

function Feed() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="feed">
      <div className="feed-sections">
        <div className="feed-section-1">
          <div className="feed-post">
            <div className="feed-post-top">
              <img src="Assets/MIRSHAD.jpeg" alt="" />
              <input type="text" placeholder="What's happening?" />
            </div>
            <div className="feed-post-bottom">
              <div className="feed-post-about">
                <LiveVideo className="feed-post-icon" />
                <p>Live Video</p>
              </div>
              <div className="feed-post-about">
                <Photo className="feed-post-icon" />
                <p>Photo/Video</p>
              </div>
              <div className="feed-post-about">
                <Feeling className="feed-post-icon" />
                <p>Feeling</p>
              </div>
              <div className="feed-post-button">
                <button>Post</button>
              </div>
            </div>
          </div>
          <div className="feed-user-posts">
            <Post
              image={MIRSHAD}
              name="MIRSHAD MP"
              date="15h. Public"
              description="if you think jnkdfsbh alkjhaskj sdslkjhasdkhg asdljsdkljkbh ekjha alkjhsasbh wlkjbbb kjbabn"
              post={MIRSHAD}
              likes="5 Likes"
              comments="5 Comments"
              share="3 Share"
              like={Like}
              comment={Comment}
              shares={Share}
              smile={Smile}
              send={Send}
            />
          </div>
        </div>
        <div className="feed-section-2">
          <div className="feed-you-might">
            <div className="feed-you-might-top">
              <p className="feed-you-might-head">You Might Like</p>
              <p className="feed-you-might-link">
                <a href="">See all</a>
              </p>
            </div>
            <div className="feed-you-might-section">
              <img src="Assets/MIRSHAD.jpeg" alt="" />
              <div className="feed-you-might-head">
                <p className="feed-name">Radovan SkillArena</p>
                <p className="feed-position">Founder & CEO at trophy</p>
              </div>
            </div>
            <div className="feed-social">
              <Explore className="feed-might-social-icon" />
              <Facebook className="feed-might-social-icon" />
              <Twitter className="feed-might-social-icon" />
              <Instagram className="feed-might-social-icon" />
            </div>
            <div className="feed-buttons">
              <button className="feed-button-1">Ignore</button>
              <button className="feed-button-2">Follow</button>
            </div>
          </div>
          <div className="feed-events">
            <div className="feed-event-top">
              <p>Recent Event</p>
              <MoreHorizIcon />
            </div>
            <RecentEvent
              icon={Graduation}
              name="Tech Test GDC"
              content="Aadh feajh fajh afijh aijhakjh ijahfb afvaajfh"
            />
            <RecentEvent
              icon={Graduation}
              name="Tech Test GDC"
              content="Aadh feajh fajh afijh aijhakjh ijahfb afvaajfh"
            />
          </div>
        </div>
      </div>
      <aside>
        <AsideFriendsList />
      </aside>
    </main>
  );
}

export default Feed;
