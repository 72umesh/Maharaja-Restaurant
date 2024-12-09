import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import "./Navbar.css"

function Navbar(){

    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <p className="navbar-logo-name">MAHARAJA</p>
            </div>
           
            <ul className="navbar-links">
                <li className="p-opensans"><a href="#home">Home</a></li>
                <li className="p-opensans"><a href="#about">About</a></li>
                <li className="p-opensans"><a href="#menu">Menu</a></li>
                <li className="p-opensans"><a href="#awards">Awards</a></li>
                <li className="p-opensans"><a href="#contact">Contact</a></li>
            </ul>
           
            <div className="navbar-login">
                <a href="#login" className="p-opensans">Log In / Register</a>
                <div />
                <a href="/" className="p-opensans">Book A Table</a>
            </div>

            <div className="navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu &&(
                    <div className="navbar-smallscreen-overlay flex-center slide-bottom">
                        <MdOutlineRestaurantMenu  fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)}/>
                        <ul className="navbar-smallscreen-links">
                            <li className="p-opensans"><a href="#home">Home</a></li>
                            <li className="p-opensans"><a href="#about">About</a></li>
                            <li className="p-opensans"><a href="#menu">Menu</a></li>
                            <li className="p-opensans"><a href="#awards">Awards</a></li>
                            <li className="p-opensans"><a href="#contact">Contact</a></li>
                        </ul>   
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar;