import React from "react";
import SimpleSlider from "./SlickCarousel";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <Helmet>
          <title>My App</title>
          <link rel="stylesheet" href="https://use.typekit.net/sdb5sez.css" />
          <meta name="description" content="My app description" />
        </Helmet>
        <div className="header">
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
      <div className="materials">
        <h2 className="works-header"> Works</h2>
        <div className="carousel">
          <SimpleSlider />
        </div>
        <div className="aboutus">
          <h2>About us</h2>
        </div>
        <div className="aboutus-cont">
          <div className="iltacont">
            <div className="ilta">
              <h3>Ilta Hämähäkkänen</h3>
              <h4>Creative Visionary</h4>
              <p>
                Ilta is the visionary guiding the creative direction at Cheeky
                Social Sorbet. Her unique perspective and innovative solutions
                make her an inspiration to the entire team.
              </p>
            </div>
            <img
              className="iltanaama"
              src={require("./ilta_naama.png")}
              alt="cheeky sorbet logo"
            />
          </div>
          <div className="mikaelcont">
            <img
              className="mikaelnaama"
              src={require("./mikael_naama.png")}
              alt="cheeky sorbet logo"
            />
            <div className="mikael">
              <h3>Mikael Nautavaara</h3>
              <h4>Visual Artisan</h4>
              <p>
                Mikael crafts visual masterpieces that elevate the brands of
                Cheeky Social Sorbet's clients to new heights. His ability to
                combine colors, shapes, and narratives is unparalleled.
              </p>
            </div>
          </div>
          <div className="sylvicont">
            <div className="sylvi">
              <h3>Sylvi-Petra Lehti-Kokkeli</h3>
              <h4>Social Alchemist</h4>
              <p>
                Sylvi is a social media magician conjuring enchanting campaigns
                at Cheeky Social Sorbet. Her deep understanding of algorithms
                and knack for predicting trends make her a true social media
                expert.
              </p>
            </div>
            <img
              className="sylvinaama"
              src={require("./sylvi_naama.png")}
              alt="cheeky sorbet logo"
            />
          </div>
        </div>
        <div className="contact">
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
