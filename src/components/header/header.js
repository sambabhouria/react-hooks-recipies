/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserAcount from "../../assets/img/png/user-account.jfif";
import "./header.css";

import { CSSTransition } from "react-transition-group";
import { MenuToggle } from "../menu-toggle";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <Link to="/crud">
        {" "}
        <img src={UserAcount} className="Logo" alt="logo" />
      </Link>

      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/todolist">TodoList HOOKS</a>
          <a href="/crud">Crud HOOKS </a>
          <a href="/hooks-step-by-step">Hooks Step by Step</a>

          <button>Logout</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <MenuToggle />
      </button>
    </header>
  );
}
