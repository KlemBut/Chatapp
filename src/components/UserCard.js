import { useNavigate } from "react-router-dom";
const UserCard = ({ user, delUser, allUsrs, setConvo }) => {
  const nav = useNavigate();
  return allUsrs ? (
    <div onClick={() => nav(`/single/${user.email}`)} className="cardWrapper">
      <img className="image" src={user.pic} alt="" />
      <h2>{user.email}</h2>
      {user.role ? <h4>Admin</h4> : <h4>User</h4>}
    </div>
  ) : delUser ? (
    <div className="profileCardWrapper">
      <img className="image" src={user.pic} alt="" />
      <div className="profileInfoWrapper">
        <h2>{user.email}</h2>
        {user.role ? <h4>Admin</h4> : <h4>User</h4>}
        <button className="profileButton" onClick={() => setConvo(true)}>Send message</button>
        <button onClick={delUser} className="profileButton"> Delete</button>
      </div>
    </div>
  ) : (
    <div className="profileCardWrapper">
      <img className="image" src={user.pic} alt="" />
      <div className="profileInfoWrapper">
        <h2>{user.email}</h2>
        {user.role ? <h4>Admin</h4> : <h4>User</h4>}
        <button className="profileButton" onClick={() => setConvo(true)} >Send message</button>
      </div>
    </div>
  );
};
export default UserCard;
