import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        {/* sidebarLeft */}
        <div className="sidebarLeft">
          <div className="serverIcon">
            <img src="./discordIcon.png" alt="" />
          </div>
          <div className="serverIcon">
            <img src="./logo192.png" alt="" />
          </div>
        </div>
        {/* sidebarRight */}
        <div className="sidebarRight">
          <div className="sidebarTop">
            <h3>Discode</h3>
            <ExpandMoreIcon />
          </div>

          {/* sidebarChannels */}
          <div className="sidebarChannels">
            <div className="sidebarChanelsHeader">
              <div className="sidebarHeader">
                <ExpandMoreIcon />
                <h4>プログラミングチャンネル</h4>
              </div>
              <AddIcon className="sidebarAddIcon" />
            </div>

            <div className="sidebarChannelList">
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
            </div>

            <div className="sidebarFooter">
              <div className="sidebarAccount">
                <img src="./icon.png" alt="" />

                <div className="accountName">
                  <h4>YasuCode</h4>
                  <span>#4020</span>
                </div>
              </div>

              <div className="sidebarVoise">
                <MicIcon />
                <HeadphonesIcon />
                <SettingsIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
