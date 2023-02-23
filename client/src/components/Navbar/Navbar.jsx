import React from "react";
import "./Navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="images/ken.jpg" alt="" />
            < KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>KSH</span>
            < KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">IMANISTORE</Link>
        </div>
        <div className="right">
        <div className="item">
          <Link className="link" to="/">Homepage</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">About</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">Contact</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">Stores</Link>
        </div>
        <div className="icons">
          <SearchIcon/>
          <FavoriteBorderIcon/>
          < PersonIcon/>
          <div className="cartIcon">
            <ShoppingCartOutlinedIcon/>
            <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
