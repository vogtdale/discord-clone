import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif
} from "@material-ui/icons";
import firebase from 'firebase';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../../dbConfig/firebase";
import { selectChannelId, selectChannelName } from "../../features/chatSlice";
import { selectUser } from "../../features/userSlice";
import Messages from "../messages/Messages";
import "./Chat.css";
import ChatHeader from "./chatHeader/ChatHeader";


const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => {
          console.log(message);
        })}

        {messages.map((message) => (
          <Messages
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
            key={message.user.uid}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input
            vlaue={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!channelId}
            type="text"
            placeholder={`Message #${channelName}`}
          />
          <button
            type="submit"
            disabled={!channelId}
            className="chat__inputbutton"
            onClick={sendMessage}
          >
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
