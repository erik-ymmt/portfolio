import React from "react";
import TopButton from "./TopButton";
import { HashLink } from "react-router-hash-link";
import "../styles/menu.css";
import { useContext } from "react";
import languageContext from "../context/languageContext";

function Menu() {
  const { text } = useContext(languageContext);

  return (
    <>
      <nav id="navMenuContainer">
        <div id="navMenu">
          <HashLink smooth to="#about">
            {text.aboutMe}
          </HashLink>
          <HashLink smooth to="#projects">
            {text.projects}
          </HashLink>
          <HashLink smooth to="#contact">
            {text.contact}
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
