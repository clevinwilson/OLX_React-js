import React, { Fragment, useContext, useEffect, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext,AuthContext } from "../../store/Context";
import { storage } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const db=useContext(FirebaseContext);
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();
  const[name,setName]=useState('');
  const [category, setCategory]=useState('');
  const [price, setPrice]=useState('');
  const [image,setImage]=useState('');

  function addProduct(e){
    e.preventDefault();
    storage.ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        db.collection('products').add({ name, category, price, image:url,userId:user.uid,createAt:new Date().toDateString() }).then(()=>{
          navigate('/')
        })
      })
      console.log(response);
      
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={addProduct}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=>(setName(e.target.value))}
              value={name}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e) => (setCategory(e.target.value))}
              value={category}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e) => (setPrice(e.target.value))} />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image && URL.createObjectURL(image)} ></img>
          
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }} />
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
