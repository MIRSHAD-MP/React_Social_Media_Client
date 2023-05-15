import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/SearchRounded";
import Conversation from "../../components/Message/Conversation/Conversation";
import ReceivedMessage from "../../components/Message/ReceivedMessage/ReceivedMessage";
import SendMessage from "../../components/Message/SendMessage/SendMessage";
import MIRSHAD from "../../Assets/MIRSHAD.jpeg";
import Info from "@mui/icons-material/InfoRounded";
import VideoCall from "@mui/icons-material/VideocamRounded";
import VoiceCall from "@mui/icons-material/PhoneEnabledRounded";
import Send from "@mui/icons-material/SendSharp";
import Smile from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import "./Messages.css";

function Messages() {
  const [emoji, setEmoji] = useState("");

  return (
    <main className="messages">
      <div className="message-section-1">
        <div className="message-side">
          <input type="text" name="" id="" placeholder="Search" />
          <SearchIcon className="message-side-icon" />
        </div>
        <div className="messages-section">
          <Conversation
            image={MIRSHAD}
            name="MIRSHAD MP"
            message="Hello guyzz..."
            lastseen="12:00 am"
          />
        </div>
      </div>
      <div className="message-section-2">
        <div className="chat-top">
          <div className="chat-user">
            <img src="Assets/MIRSHAd.jpeg" alt="" />
            <div className="chat-user-details">
              <p className="chat-user-name">Johnathan Bill Gate</p>
              <p className="chat-user-last-seen">Active now</p>
            </div>
          </div>
          <div className="chat-icons">
            <VoiceCall className="chat-icon" />
            <VideoCall className="chat-icon" />
            <Info className="chat-icon" />
          </div>
        </div>

        <div className="chat-center">
          <ReceivedMessage />
          <SendMessage />
          <ReceivedMessage />
          <SendMessage />
          <ReceivedMessage />
          <SendMessage />
          <ReceivedMessage />
          <SendMessage />
        </div>

        <div className="chat-bottom">
          <div className="chat-input">
            <input type="text" />
            <div className="chat-emoji">
              <Smile
                className="emoji-icon"
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
              />
            </div>
          </div>
          <div className="chat-send">
            <Send className="send-icon" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Messages;
