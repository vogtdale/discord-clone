/* eslint-disable no-undef */
import {
  Add,
  Call,
  ExpandMore,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import SideBarChannel from "../sideBarChannelList/SideBarChannel";
import "./SideBar.css";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../dbConfig/firebase";
import {setChannelInfo} from '../../features/chatSlice'

const SideBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
          id: doc.id,
          channel: doc.data()
      })))
  })
  }, []);

  const handleAddChannel = (e) => {
    e.preventDefault()
    const channelName = prompt("Enter a new Channel Name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <h2>Discord Channels</h2>
        <ExpandMore />
      </div>

      <div className="sideBar__channels">
        <div className="sideBar__channelsHeader">
          <div className="sideBar__header">
            <ExpandMore />
            <h4>Text channels</h4>
          </div>
          <Add onClick={handleAddChannel} className="sideBar__addChannels" />
        </div>

        <div className="sideBar__channelsList" >
          {channels.map(({ id, channel}) => (
            
            <SideBarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
              
            />
            
          ))}
        </div>
      </div>

      <div className="sideBar__voice">
        <SignalCellularAlt className="sideBar__voiceIcon" fontSize="large" />
        <div className="sideBar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sideBar__voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>

      <div className="sideBar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sideBar__profileInfo">
          <h3>{user.name.substring(0, 7)}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div className="sideBar__profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
