import { React } from "react";
import { Link } from "react-router-dom";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import "./Header.css";

const LogoStyle = {
  fontSize: "3rem",
  color: "rgb(20, 4, 125)",
};


const Header = () => {
  return (
    <div className="header">
      <div className="d-flex">
        <IntegrationInstructionsIcon style={LogoStyle} />
        <h2 className="brand__name">&nbsp; Code Companion</h2>
      </div>
      <ul className="nav__menu">
        <Link to="/" className="nav__link" >
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
        <Link to="/doubts" className="nav__link">
          <li className="nav__item">About</li>
        </Link>
      </ul>

      <button className="cta-header">
        <Link className="wh" to="/signup">
          Login or SignUp
        </Link>
      </button>
    </div>
  );
};

export default Header;
