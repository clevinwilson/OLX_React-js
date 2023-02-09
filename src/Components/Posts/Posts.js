import React, { useEffect,useContext, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context'

function Posts() {

  const db = useContext(FirebaseContext);
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    db.collection('products').get().then((snapshort) => {
      const products = snapshort.docs.map((obj) => {
        return {
          ...obj.data(),
          productId: obj.uid
        }
      })
      setProducts(products)
    })

    
  })


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         {
          products.map((product)=>{
            return <div
              className="card"
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.name}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createAt}</span>
              </div>
            </div>
          })
         }
          
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
