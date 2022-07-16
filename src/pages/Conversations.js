import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chat from "../components/Chat";
import { removeMessages } from "../features/messages";
const Conversations = () => {
  const allUsers = useSelector((state) => state.users.value);
  const msgs = useSelector((state) => state.messages.value);
  const [contactsProfile, setContactsProfile] = useState([]);
  const [cntcsHidden, setCntcsHidden] = useState("");
  const [buttonHidden, setButtonHidden] = useState("none");
  const [chatValues, setChatValues] = useState([]);
  const [otherValues, setOtherValues] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let testArr = [];
    const senderMsgs = msgs.messages.filter((x) =>
      x.participants.some((names) => names === allUsers.loggedIn.email)
    );
    // console.log(senderMsgs);
    senderMsgs.map((x) => {
      const index = x.participants.findIndex(
        (x) => x !== allUsers.loggedIn.email
      );
      if (testArr.includes(x.participants[index])) return;
      testArr.push(x.participants[index]);
    });

    setContactsProfile(
      allUsers.users.filter((el) => {
        return testArr.find((element) => {
          return element === el.email;
        });
      })
    );
    // console.log(contacts);
    // console.log(contactsProfile);
  }, [msgs.messages]);

  function goToChat(username) {
    const ownerMsgs = msgs.messages.filter((x) =>
      x.participants.some((names) => names === allUsers.loggedIn.email)
    );
    const contactMsgs = msgs.messages.filter((x) =>
      x.participants.some((names) => names === username)
    );
    setButtonHidden("")
    setCntcsHidden("none");
    setOtherValues(username);
    // console.log(ownerMsgs);
    // console.log(contactMsgs);
    // console.log(allUsers.loggedIn.email);
    const chatMessages = ownerMsgs.filter((el) => {
      return contactMsgs.find((element) => {
        return element.id === el.id;
      });
    });

    setChatValues([...chatMessages]);
  }
  function backToContacts(username) {
    setCntcsHidden("");
    setChatValues("");
    setButtonHidden("none")
  }
  function deleteMessages(username) {
    const ownerMsgs = msgs.messages.filter((x) =>
      x.participants.some((names) => names === allUsers.loggedIn.email)
    );
    const contactMsgs = msgs.messages.filter((x) =>
      x.participants.some((names) => names === username)
    );
    const chatMessages = ownerMsgs.filter((el) => {
      return contactMsgs.find((element) => {
        return element.id === el.id;
      });
    });

    const deletedmsgs = msgs.messages.filter((element) => {
      return chatMessages.every((el) => {
        return el.id !== element.id;
      });
    });
    dispatch(removeMessages(deletedmsgs));
    console.log(msgs);
  }
  return (
    <div className="convoWrapper">
      <button onClick={backToContacts} className={buttonHidden}>Show</button>
      <div className={`contactsWrapper ${cntcsHidden}`}  >
        {contactsProfile.map((x, i) => (
          <div key={i} className="contactWrapper">
              <img className="contactImage"
                src={x.pic}
                alt=""
                
                onClick={() => goToChat(x.email)}
              />
            <div className="infoWrapper">
              <h4> {x.email}</h4>
            <button onClick={() => deleteMessages(x.email)} style={{width: "100%", padding:"5px 10px 5px"}} className="profileButton">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {chatValues.length > 0 ? (
        <Chat
          ownermssg={chatValues}
          otheruser={otherValues}
          goToChat={goToChat}
        ></Chat>
      ) : null}
    </div>
  );
};

export default Conversations;
