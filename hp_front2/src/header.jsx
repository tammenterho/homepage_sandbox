import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="otsikko">Cheeky Social Sorbet</h1>
      <div className="nav">
        <Link to="#works">
          <p>works</p>
        </Link>
        <Link to="#aboutus">
          <p>about us</p>
        </Link>
        <Link to="#contact">
          <p>contact</p>
        </Link>
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
