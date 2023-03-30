import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="nav">
        {/* <a href="/" className="brand-name">
          Code Companion
        </a>
        <button className="hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
          {/* <ul className='nav__menu'>
            <li className='nav__item'>
              <Link to="/" className='nav__link'>Home</Link>
            </li>
            <li className='nav__item'>
              <Link to="/" className='nav__link'>Features</Link>
            </li>
            <li className='nav__item'>
              <Link to="/" className='nav__link'>WhyCC</Link>
            </li>
            <li className='nav__item'>
              <Link to="/" className='nav__link'>About US</Link>
            </li>
          </ul> */}
          <div className='nav__toggler'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
      </nav>
    );
  }

  export default Navbar;