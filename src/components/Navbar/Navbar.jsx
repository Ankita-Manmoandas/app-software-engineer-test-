import React, {useState} from "react";
import Navmenu from "../NavMenu/Navmenu";
import logo from "../../assests/images/Logo.svg"
import menu from "../../assests/images/menu-icon.png"
import "./Navbar.scss"

const Navbar = () => {

  const [setNav, setShowNav] = useState(false); 
  const toggleFunc= () => {
    setShowNav(!setNav)
  }

  return <nav className="nav" >
    <img src= {logo} className="nav__item logo"/>
    <img src= {menu} className="nav__item" onClick={toggleFunc} />

    {setNav && 
    <Navmenu toggle = {toggleFunc}></Navmenu>}
    
    

    

  </nav>

}

export default Navbar; 