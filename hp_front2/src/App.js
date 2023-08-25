import "./App.css";
import React from "react";
import SimpleSlider from "./SlickCarousel";

function App() {
  return (
    <div>
      <div className="App">
        <div className="header">
          <img
            src={require("./hp_front2_header_img.jpg")}
            alt="cheeky sorbet logo"
          />
          <h1 className="otsikko">Cheeky Social Sorbet</h1>
          <div className="nav">
            <p>works</p>
            <p>contact</p>
            <p>about us</p>
          </div>
          <p className="slogan">
            At Cheeky Social Sorbet, we're not your average digital marketing
            agency – we're the zing in your online presence! Just like a
            refreshing sorbet cleanses your palate, we bring a burst of
            creativity and innovation to your brand.
          </p>
        </div>
      </div>
      <div>
        <h2 className="works-header"> Works</h2>
      </div>
      <SimpleSlider />
    </div>
  );
}

export default App;
