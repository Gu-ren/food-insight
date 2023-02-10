import React from "react";
import { useRef } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a href="/">
        <h1>
          Food <span>Insight</span>{" "}
        </h1>
      </a>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/#">About</a>
        <a href="/recipe">Recipes</a>
        <a href="/#">Download</a>
        <a href="/#">Contact</a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>

        <button className="login">
          {" "}
          <a href="/login">Login</a>{" "}
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Nav;
