import React, { useState } from "react";
import "./Chat.css";
import axios from "../../axios";

// MUI imports
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    axios.post("/messages/new", {
      message: input,
      name: "Ahtisham",
      timestamp: "12:00",
      receiver: true,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Chat Body */}
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.receiver && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
        <p className="chat__receiver chat__message">
          <span className="chat__name">Ahtisham</span>
          This is message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      {/* chat footer */}
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
