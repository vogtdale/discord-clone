import { Add, Call, ExpandMore, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from "@material-ui/icons";
import React from "react";
import SideBarChannel from './sideBarChannelList/SideBarChannel'
import "./SideBar.css";
import { Avatar } from "@material-ui/core";

const SideBar = () => {
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
          <Add className="sideBar__addChannels"/>
        </div>

        <div className="sideBar__channelsList">
          <SideBarChannel />
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
        <Avatar />
        <div className="sideBar__profileInfo">
          <h3>@Dalo</h3>
          <p>#thisIsMyId</p>
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