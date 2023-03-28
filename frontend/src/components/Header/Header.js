import React from "react";
import './Header.css'
import Navbar from "./Navbar";


const Header = () => {
    return (
        // <div className="header">
        //     <div className="header__brandname">
        //         Code Companion
        //     </div>

        //     <div className="header__navbar">
        //         <div className="header__navbar-items">Home</div>
        //         <div className="header__navbar-items">Features</div>
        //         <div className="header__navbar-items">Why CC</div>
        //         <div className="header__navbar-items">About Us</div>
        //     </div>

        //     <div className="header__cta">
        //         <button className="btn-primary">
        //             Login/Signup
        //         </button>
        //     </div>

        // </div>
        <div>
            <Navbar />
        </div>
    )
}

export default Header;