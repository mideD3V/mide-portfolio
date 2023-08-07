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
      return setHeaderBgColor("");
    } else {
      return setHeaderBgColor("#001503");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  });

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpenMenu(false)
    })
  })

  return (
    <div id="header" style={{ backgroundColor: headerBgColor }}>
      <div id="logo">
        <a href="#"> ayoBilli0ns</a>
      </div>

      <ul className={openMenu ? "open" : ""}>
        <GrClose
          className="close-nav"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
        <li
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <a href="#"> Home</a>
        </li>
        <li
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <a href="#projects"> Projects</a>
        </li>
        <li
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <a href="#about"> About</a>
        </li>

        <li
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <a href="#contact"> Contact</a>
        </li>
      </ul>
      <div className="nav-menu">
        <HiMenu
          className="hbmenu"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
