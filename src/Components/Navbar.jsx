import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.png'
import japanese from '../assets/japanese.png'
import { Link, NavLink, useLocation } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  return (
    <>
    <nav className="navbar">
      <div className="logo flex ">
    <img  className="imgnav" src={japanese} alt="" />
      <Link to='/'> <img  className="logo1" src={logo} alt="" /></Link> 
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""} `}>
      <NavLink to='/' activeclassname="active"> <div>Home</div></NavLink> 
      <NavLink to={'/Our-Menu'} activeclassname="active"> <div>Our Menu</div></NavLink>
      <NavLink to={'/about'} activeclassname="active">
      <div>About</div></NavLink>
        <NavLink to={'/booktable'}activeclassname="active" > <div >Order Now</div></NavLink>
       <NavLink to={'/bestmenu'} activeclassname="active" >
       <div >Deals</div></NavLink> 
       <NavLink to={'/booktable'} > <div activeclassname="active" >Contact </div> </NavLink>
 <Link to='/booktable'> <div className="table border-2 border-orange-500 px-3  py-2 rounded-3xl "> Book a table</div>
 </Link>
 </div>


      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </div>
    </nav>
    </>
  );
}

export default Navbar;