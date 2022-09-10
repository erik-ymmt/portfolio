import React from "react";
import TopButton from "./TopButton";
import { HashLink } from "react-router-hash-link";
import "../styles/menu.css";

function Menu() {
  return (
    <>
      <nav id="navMenuContainer">
        <div id="navMenu">
          <HashLink smooth to="#about">
            About Me
          </HashLink>
          <HashLink smooth to="#projects">
            Projects
          </HashLink>
          <HashLink smooth to="#contact">
            Contact
          </HashLink>
        </div>
      </nav>
      <div className="topBtn">
        <HashLink smooth to="#top">
          <TopButton color="white" />
        </HashLink>
      </div>
    </>
  );
}

export default Menu;
