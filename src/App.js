import React, { useContext, useEffect } from "react";
import "./App.css";
import { Route,Routes} from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Home from "./Pages/Home";
import { AuthContext } from "./store/Context";
import { auth } from "./Firebase/config";

function App() {
  const {user, setUser } = useContext(AuthContext);
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  },[])

  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/signup" exact element={<Signup  />} />
      <Route path="/login" exact element={<Login />} />


    </Routes>
  );
}

export default App;
