import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/config';
import Logo from '../../olx-logo.png';
import './Login.css';
import { AuthContext } from '../../store/Context';

function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin=(e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        navigate('/')
      })
      .catch((error) => {
        setError(error.message);
      });

    console.log(email,password);
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <p style={{ color: "red" }}>{error}</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={() => { navigate('/signup') }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
