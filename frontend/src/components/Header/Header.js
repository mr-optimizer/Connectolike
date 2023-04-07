import {React} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  return (
    <div className="header">
        <h2 className="brand_name">C-Kit</h2>
        
        <ul className='nav__menu'>
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

        <button className="cta-header">
          <Link className="wh" to="/signup">Login / SignUp</Link>
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
