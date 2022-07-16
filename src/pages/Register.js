import { useRef, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { register } from "../features/users";


const Register = () => {
  const allUsers = useSelector(state => state.users.value)
  const emailRef = useRef();
  const password1Ref = useRef()
  const password2Ref = useRef()
  const adminRef = useRef()
  const [getError, setError] = useState ();
  const dispatch = useDispatch()
  const nav = useNavigate()

  
  function validate () {
    let invalid = false

    if (password1Ref.current.value !== password2Ref.current.value) invalid = "Passwords do not match"
    if (!password1Ref.current.value.match(/[A-Z]/)) invalid = "Password needs uppercase letters"
    if (!password1Ref.current.value.match(/[!@#$%^&*_+]/)) invalid = "Password must include a symbol (!@#$%^&*_+)"
    if (password1Ref.current.value.length < 4 || password1Ref.current.value.length > 20) invalid = "Password has to be between 4 and 20 symbols"
    if (allUsers.users.find (x => x.email === emailRef.current.value)) invalid = "User already exists"
    if (emailRef.current.value.length < 4 || emailRef.current.value.length > 20) invalid = "Username has to be between 4 and 20 symbols"

    if (invalid) return setError(invalid)
    const user = {
        email: emailRef.current.value,
        password: password1Ref.current.value,
        pic: "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg", 
        role: adminRef.current.checked,
        blocked: false,
        blockedBy:[]
    }
    dispatch(register(user))
    setError('Success')
    nav("/")
  }
    return (
        <div className="inputWrap">
            <div className="inputs">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" ref={emailRef}/>
            </div>
            <div className="inputs">
                <label htmlFor="pass1">Password</label>
                <input type="password" name="pass1" ref={password1Ref}/>
            </div>
            <div className="inputs"> 
                <label htmlFor="pass2">Repeat password</label>
                <input type="password" name="pass2" ref={password2Ref}/>
            </div>
            <div>
            <input type="checkbox" name="" id="role" ref={adminRef} /> 
            <label htmlFor="role">Admin</label>    
            </div>
            <p>{getError}</p>
            <button onClick={validate}>Register</button>
        </div>
    )
}

export default Register