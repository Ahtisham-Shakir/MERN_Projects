import React from "react";
import "./Chat.css";

// MUI imports
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

function Chat() {
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
        <p className="chat__message">
          <span className="chat__name">Ahtisham</span>
          This is message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
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
          <input type="text" placeholder="type a message" />
          <button type="submit">Send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
