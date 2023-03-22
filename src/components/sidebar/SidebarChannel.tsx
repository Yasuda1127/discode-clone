import { DocumentData } from "firebase/firestore";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { setChannelInfo } from "../../features/channelSlice";
import "./SidebarChannel.scss";

type props = {
  id: string;
  channel: DocumentData;
};

function SidebarChannel(props: props) {
  const { id, channel } = props;
  // console.log(channel)
  const dispatch = useAppDispatch()
  return (
    <div className="sidebarChannel" onClick={() => dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channel.channel.channelName,
      }))}>
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
