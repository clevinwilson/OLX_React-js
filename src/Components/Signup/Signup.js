import React,{useState} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useContext } from 'react';
import {FirebaseContext} from '../../store/Context';
import { auth } from '../../Firebase/config'
import { useNavigate } from "react-router-dom";


export default function Signup() {

  const navigate=useNavigate();
  const db=useContext(FirebaseContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error,setError]=useState("");


const handleSignup=(e)=>{
  e.preventDefault();

  auth.createUserWithEmailAndPassword(email, password).then((userCredential)=>{
    userCredential.user.updateProfile({ displayName: name }).then(()=>{
      db.collection('users').add({
        id:userCredential.user.uid,
        name,
        email,
        phone,
        password
      }).then(()=>{
        navigate("/login");
      })
    })
  }).catch((error) => {
    setError(error.message);
  });
}

  return (
    <div>
      
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <p style={{color:"red"}}>{error}</p>
        <form onSubmit={handleSignup}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"

            onChange={(e)=>{setName(e.target.value)}}
            value={name}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}

            value={email}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            onChange={(e)=>{setPhone(e.target.value)}}

            value={phone}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}

            value={password}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={() => { navigate('/login') }} >Login</a>
      </div>
    </div>
  );
}
