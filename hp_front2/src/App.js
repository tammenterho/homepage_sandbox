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
      <div className="carousel">
        <SimpleSlider />
      </div>
      <div className="aboutus">
        <h2>About us</h2>
      </div>
      <div className="aboutus-cont">
        <div>
          <h3>Ilta Hämähäkkänen</h3>
          <h4>Creative Visionary</h4>
          <p>
            Ilta is the visionary guiding the creative direction at Cheeky
            Social Sorbet. Her unique perspective and innovative solutions make
            her an inspiration to the entire team.
          </p>
        </div>
        <div className="mikael">
          <h3>Mikael Nautavaara</h3>
          <h4>Visual Artisan</h4>
          <p>
            Mikael crafts visual masterpieces that elevate the brands of Cheeky
            Social Sorbet's clients to new heights. His ability to combine
            colors, shapes, and narratives is unparalleled.
          </p>
        </div>
        <div>
          <h3>Sylvi-Petra Lehti-Kokkeli</h3>
          <h4>Social Alchemist</h4>
          <p>
            Sylvi is a social media magician conjuring enchanting campaigns at
            Cheeky Social Sorbet. Her deep understanding of algorithms and knack
            for predicting trends make her a true social media expert.
          </p>
        </div>
      </div>
      <div className="contact">
        <h2>Contact</h2>
      </div>
    </div>
  );
}

export default App;
