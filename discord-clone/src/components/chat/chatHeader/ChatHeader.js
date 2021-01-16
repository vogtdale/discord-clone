import "./ChatHeader.css";

import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleRounded,
  SearchRounded,
  SendRounded,
} from "@material-ui/icons";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
           Test Channel Name
        </h3>
      </div>

      <div className="chatHeader__right">
        <Notifications />
        <EditLocationRounded />
        <PeopleRounded />

        <div className="chatHeader__search">
            <input type="text" placeholder="search"/>
            <SearchRounded />
        </div>

        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
};

export default ChatHeader;
