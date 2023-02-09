import React, { useContext } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {AuthContext} from '../../store/Context';
import {auth} from '../../Firebase/config'
import { useNavigate } from 'react-router-dom';

function Header() {
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();

  function signOut(){
    auth.signOut().then(() => {
      navigate('/login')
    }).catch((error) => {
      alert(error)
    });
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user? 
          <span>{user.displayName}</span>
          :
          <span onClick={()=>{navigate('/login')}}>Login</span>
          }
          <hr />
        </div>
        {user && <span onClick={signOut}>Logout</span> }
        <div onClick={()=>{navigate('/create')}} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
