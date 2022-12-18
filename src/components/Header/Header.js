import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
import { UserContext } from "../../App";
const Header = () => {
  const [user]= useContext(UserContext);
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to=''>Shop</Link>
        <Link to='review'>Order Review</Link>
        <Link to='manage'>Manage Inventory</Link>
      {
        user.isSignedIn && <span style={{color: 'white', float: 'right', marginRight: '70px'}}>{user.name}</span>
      }
      </nav>
    </div>
  );
};

export default Header;
<h1>Hello World</h1>;
