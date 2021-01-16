import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from "@material-ui/icons";
import React from "react";
import Messages from "../messages/Messages";
import "./Chat.css";
import ChatHeader from "./chatHeader/ChatHeader";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__messages">
          <Messages />
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input type="text" placeholder={`Message #TESTCHANNEL`} />
          <button type="submit" className="chat__inputbutton">
            send message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
