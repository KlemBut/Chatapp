import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import UserCard from "../components/UserCard";
import { removeUser } from "../features/users";
import { useState } from "react";
import SendMessage from "../components/SendMessage";
const SingleUser = () => {
    const allUsers = useSelector(state => state.users.value)
    const {username} = useParams()
    const currentUser = allUsers.users.find (x => x.email === username)
    const dispatch = useDispatch ()
    const nav = useNavigate()
    const [getConvo, setConvo] = useState(false)
    function deleteUser () {
        
        dispatch(removeUser(username))
        if(allUsers.loggedIn.email === username){
            nav("/")
        }else {
            nav("/users")
        }
    }

    return(
        <div style={{display: "flex",flexDirection:"column", alignItems:"center"}}>
            {allUsers.loggedIn.role ? <UserCard user={currentUser} delUser={deleteUser} setConvo={setConvo}></UserCard> : <UserCard user={currentUser} setConvo={setConvo}></UserCard>}
            {getConvo === true ? <SendMessage reciever={currentUser.email}></SendMessage> : null}
        </div>
    )
}

export default SingleUser