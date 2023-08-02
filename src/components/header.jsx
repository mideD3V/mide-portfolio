import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [headerBgColor, setHeaderBgColor] = useState("");

  const listenScrollEvent = (e) => {
      e.preventDefault();

    if (window.scrollY < 750) {
      return  setHeaderBgColor("");
    } else {
      return  setHeaderBgColor("darkgreen");
    }
  };

useEffect(() => {
  window.addEventListener("scroll", listenScrollEvent);

  return () => window.removeEventListener("scroll", listenScrollEvent);
});
  
  
  
  return (
    <div id="header" style={{ backgroundColor: headerBgColor }}>
      <div id="logo">
        <a href="#"> ayoBilli0ns</a>
      </div>
      <ul className="nav-options">
        <li>
          {/* <Link to="/">Home</Link> */}
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          {" "}
          <a href="#about"> About</a>
        </li>
        {/* <li>Services</li> */}

        <li>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
      <div
        className="nav-menu"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <HiMenu />
        {/* <GrClose/> */}
      </div>
    </div>
  );
};

export default Header;
