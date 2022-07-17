import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMesageReducer } from "../features/messages";
import { blockUser } from "../features/users";

const SendMessage = ({ reciever, setCounter, getCounter }) => {
  const allUsers = useSelector((state) => state.users.value);
  const msgs = useSelector((state) => state.messages.value);
  const messageRef = useRef();
  const dispatch = useDispatch();
  const index = allUsers.users.findIndex((x) => x.email === reciever);
  const index2 = allUsers.users.findIndex(
    (x) => x.email === allUsers.loggedIn.email
  );
  const [getDisabled, setDisabled] = useState(false);
  let date = new Date();
  function sendMsg() {
    if (allUsers.users[index].blockedBy.length > 0) {
      const blockedUsers = allUsers.users[index].blockedBy.filter(
        (x) => x === allUsers.loggedIn.email
      );
      if (blockedUsers.length > 0) {
        alert("You blocked the user");
        setDisabled(true);
        return
      }
    }
    if (allUsers.users[index2].blockedBy.length > 0) {
      const blockedMyUsers = allUsers.users[index2].blockedBy.filter(
        (x) => x === reciever
      );
      if (blockedMyUsers.length > 0) {
        alert("User has blocked you");
        setDisabled(true);
        return
      }
    }
    console.log(index);
    const message = {
      participants: [allUsers.loggedIn.email, reciever],
      content: messageRef.current.value,
      id: Date.now(),
      timeStamp: `${date}`,
    };
    dispatch(sendMesageReducer(message));
    messageRef.current.value = "";
    console.log(msgs);

    if( setCounter) setCounter(getCounter+1)

  }
  function blockContact() {
    const block = {
      index: index,
      blockedBy: allUsers.loggedIn.email,
    };
    dispatch(blockUser(block));
  }
  return (
    <div className="sendMessage" >
      <textarea name="" id="" cols="2s" rows="5" ref={messageRef} style={{marginTop:"1rem"}}></textarea>
      <div style={{ marginTop: "1rem", display: "flex", justifyContent:"space-between" }}>
        <button
          onClick={blockContact}
          style={{ width: "47%"}}
        >
          Block user
        </button>
        <button
          onClick={sendMsg}
          disabled={getDisabled}
          style={{ width: "47%"  }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
