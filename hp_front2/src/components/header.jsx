import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./../App.css";

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="header">
      <h1 className="otsikko">Cheeky Social Sorbet</h1>
      <div className="nav" id="nav">
        <Link to="#works">
          <p>works</p>
        </Link>
        <Link to="#aboutus">
          <p>about us</p>
        </Link>
        <Link to="#contact">
          <p>contact</p>
        </Link>
        <a href="/messages">messages</a>
        <div className="hamburger" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className={`nav-links ${navVisible ? "show" : ""}`}>
        <Link to="#works">
          <p>works</p>
        </Link>
        <Link to="#aboutus">
          <p>about us</p>
        </Link>
        <Link to="#contact">
          <p>contact</p>
        </Link>
        <a href="/messages">messages</a>
      </div>

      <p className="slogan">
        At Cheeky Social Sorbet, we're not your average digital marketing agency
        – we're the zing in your online presence! Just like a refreshing sorbet
        cleanses your palate, we bring a burst of creativity and innovation to
        your brand.
      </p>
    </div>
  );
}
