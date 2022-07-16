import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SendMessage from "./SendMessage";
const Chat = ({ ownermssg, otheruser, goToChat }) => {
  return (
    <div className="chatWrap">
      <div className="smsWrap">
        {ownermssg.map((x, i) => (
          <p key={i} >
            <b>{x.participants[0]}:</b> {x.content}
          </p>
        ))}
      </div>
      <div>
        <SendMessage reciever={otheruser} goToChat={goToChat}></SendMessage>
      </div>
    </div>
  );
};

export default Chat;
