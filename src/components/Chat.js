import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SendMessage from "./SendMessage";
const Chat = ({ ownerMssg, otherUser, goToChat }) => {
  const [getCounter, setCounter] = useState(0)
  useEffect(() => {
    goToChat(otherUser)
  }, [getCounter])
  return (
    <div className="chatWrap">
      <div className="smsWrap" >
        {ownerMssg.map((x, i) => (
          <p key={i} >
            <b>{x.participants[0]}:</b> {x.content}
          </p>
        ))}
      </div>
      <div>
        <SendMessage reciever={otherUser} setCounter={setCounter} getCounter={getCounter}></SendMessage>
      </div>
    </div>
  );
};

export default Chat;
