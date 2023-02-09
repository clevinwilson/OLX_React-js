import React,{useContext, useEffect, useState} from 'react';
import { PostContext } from '../../store/PostContext';
import './View.css';
import {FirebaseContext} from '../../store/Context'

function View() {
  const [userDetails,setUserDetail]=useState({});
  const db=useContext(FirebaseContext)
  const { postDetails } = useContext(PostContext);

  useEffect(()=>{
    db.collection("users").where("id", "==", postDetails.userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserDetail(doc.data())
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.image}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
