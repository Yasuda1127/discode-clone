import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

export default function ChatMessage() {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Yasu Code
          <span className="messageTimestamp">2023/3/15</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
}
