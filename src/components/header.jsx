import React from 'react'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <div id="logo">
        <a href="#"> ayomideOKE</a>
      </div>
      <ul className="nav-options">
        <li>
          {/* <Link to="/">Home</Link> */}
          <a href=""> Home</a>
        </li>
        <li>
          {" "}
          <a href="#about"> About</a>
        </li>
        {/* <li>Services</li> */}
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header