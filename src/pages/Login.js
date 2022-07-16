import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logIn } from '../features/users';

const Login = () => {
    const allUsers = useSelector(state => state.users.value)
    const [getError, setError] = useState()
    const dispatch = useDispatch()
    const nav = useNavigate()
    const emailRef = useRef()
    const passRef = useRef()
    
    function logingin () {
    const userLoggedIn = allUsers.users.find (x => x.email === emailRef.current.value && x.password === passRef.current.value)
    if (!userLoggedIn) return setError("User not found")
    setError("success")
    dispatch(logIn(userLoggedIn))
    nav("/profile")
    }
    return (
        <div className="inputWrap">
           <div className='inputs'>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" ref={emailRef}/>
            </div>
            <div className='inputs'>
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" ref={passRef} />
            </div>
            <p>{getError}</p>
            <button onClick={logingin}>Log in</button>
        </div>
    )
}

export default Login