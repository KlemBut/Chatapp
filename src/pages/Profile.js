import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatePass, updatePic } from '../features/users'

const Profile = () => {
    const allUsers = useSelector(state => state.users.value)
    const currentUser = useSelector(state => state.users.value.loggedIn)
    const [getUpdate, setUpdate] = useState("")
    const dispatch = useDispatch()
    const newPassRef = useRef()
    const newPicRef = useRef()

    function passChange () {
        const index = allUsers.users.findIndex(x => x.email === currentUser.email)

        dispatch(updatePass({
            index:index,
            newPass: newPassRef.current.value
        }))
        newPassRef.current.value = ""
        setUpdate("")
    }
    function picChange () {
        const index = allUsers.users.findIndex(x => x.email === currentUser.email)
      
        dispatch(updatePic({
            index:index,
            newPic: newPicRef.current.value
        }))
        newPicRef.current.value = ""
        setUpdate("")
    }

    function changePassOrPic (passOrPic) {
        if (passOrPic === "pass"){
           setUpdate(<div className='popup'> 
           <input type="text" ref={newPassRef}/>
           <button className='profileButton'  onClick={passChange}>Change password</button>
           </div>)
        }
        if (passOrPic === "pic"){
            setUpdate(<div className='popup'> 
           <input type="text" ref={newPicRef}/>
           <button className='profileButton'  onClick={picChange}>Upload picture</button>
           </div>)
        }
    }

    return(
        <div className='profileCardWrapper'>
        <div className='imgWrap'>
            <img className='image' src={currentUser.pic} alt="" />
        </div>
        <div className='profileInfoWrapper'>
            <h3>{currentUser.email}</h3>
            {currentUser.role ? <h4>Admin</h4> : <h4>User</h4>}
            <button className='profileButton' onClick={() => changePassOrPic("pic")}>Change Picture</button>
            <button className='profileButton' onClick={() => changePassOrPic("pass")}>Change Password</button>
        </div>
            {getUpdate}
        </div>
    )
}

export default Profile