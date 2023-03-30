import {React, useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const handleClick = () => {};

  const [Mobile, setMobile] = useState(false);
  

  return (
    <div className="header">
        <h2 className="brand_name">Code Companion</h2>
        <div className="to__shrink">
        <ul className={Mobile ? 'mobile-menu-icon' : 'nav__menu'} onClick={()=>setMobile(true)}>
          <Link to="/" className="nav__link">
            <li className="nav__item">Home</li>
          </Link>
          <Link to="/discover" className="nav__link">
            <li className="nav__item">Explore</li>
          </Link>
          <Link to="/faq" className="nav__link">
            <li className="nav__item">FAQs</li>
          </Link>
          <Link to="/doubts" className="nav__link">
            <li className="nav__item">Doubts</li>
          </Link>
        </ul>

        <button className="cta-header" onClick={handleClick}>
          <Link to="/signup">Login / SignUp</Link>
        </button>

        </div>
        <button className="mobile-menu-icon hamburger">
            {Mobile ? <CloseIcon/> : <MenuIcon/>}
        </button>
    </div>
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
  );
};

export default Header;
