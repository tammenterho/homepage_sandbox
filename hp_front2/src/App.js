import React from "react";
import SimpleSlider from "./SlickCarousel";
import { Helmet } from "react-helmet";
import "./App.css";
import AboutUs from "./aboutUs";
import Header from "./header";

function App() {
  return (
    <div className="whole">
      <div className="App">
        <Helmet>
          <title>My App</title>
          <link rel="stylesheet" href="https://use.typekit.net/sdb5sez.css" />
          <meta name="description" content="My app description" />
        </Helmet>
        <Header />
      </div>
      <div className="materials">
        <h2 className="works-header"> Works</h2>
        <div className="carousel">
          <SimpleSlider />
        </div>
        <AboutUs />
        <div className="contact">
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
