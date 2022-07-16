import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector} from "react-redux"
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleUser from "./pages/SingleUser";
import Profile from "./pages/Profile";
import AllUsers from "./pages/AllUsers";
import Conversations from "./pages/Conversations";

function App() {
  const allUsers = useSelector((state) => state.users.value);
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <ul>
          <Link to="/">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
          {allUsers.loggedIn && <Link to="/profile"><li>Profile</li></Link> }
          {allUsers.loggedIn && <Link to="/users"><li>User List</li></Link> }
          {allUsers.loggedIn && <Link to="/chat"><li>Conversations</li></Link> }
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/users" element={<AllUsers></AllUsers>}></Route>
          <Route
            path="/single/:username"
            element={<SingleUser></SingleUser>}>
          </Route>
          <Route path="/chat" element={<Conversations></Conversations>}></Route>
        </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
