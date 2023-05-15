import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Post.css";

function Post(props) {
  return (
    <div>
      <div className="feed-user-post-top">
        <div className="feed-post-user-details">
          <img src={props.image} alt="" />
          <div className="feed-post-user">
            <p className="feed-post-user-name">{props.name}</p>
            <p className="feed-post-user-date">{props.date}</p>
          </div>
        </div>
        <div>
          <MoreHorizIcon />
        </div>
      </div>
      <div className="feed-post-description">
        <p>
          {props.description}
        </p>
      </div>
      <div className="feed-post-image">
        <img src={props.post} alt="" />
      </div>
      <div className="feed-post-like">
        <div className="feed-about-image">{props.likes}</div>
        <div className="feed-about-image">{props.comments}</div>
        <div className="feed-about-image">{props.share}</div>
      </div>
      <div className="feed-like-section">
        <div className="feed-likes">
          <props.like className="likes-icons" />
          <p>Like</p>
        </div>
        <div className="feed-likes">
          <props.comment className="likes-icons" />
          <p>Comment</p>
        </div>
        <div className="feed-likes">
          <props.shares className="likes-icons" />
          <p>Share</p>
        </div>
      </div>
      <div className="feed-post-comments">
        <div className="feed-post-user-img">
          <img src="Assets/MIRSHAD.jpeg" alt="" />
        </div>
        <div className="feed-post-comments-input">
          <input type="text" placeholder="Write a comment..." />
          <div className="feed-emoji">
            <props.smile className="feed-emoji-icon" />
          </div>
        </div>
        <div className="feed-posts-send">
          <props.send className="feed-post-send-icon" />
        </div>
      </div>
    </div>
  );
}

export default Post;
