import { DocumentData } from "firebase/firestore";
import React from "react";
import "./SidebarChannel.scss";

type props = {
  id: string;
  channel: DocumentData;
};

function SidebarChannel(props: props) {
  const { id, channel } = props;
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        {}
      </h4>
    </div>
  );
}

export default SidebarChannel;
