import React from "react";
import "./../App.css";

export default function AboutUs() {
  return (
    <div className="aboutus-cont">
      <div className="aboutus">
        <h2>About us</h2>
      </div>
      <div className="iltacont" id="aboutus">
        <div className="ilta">
          <h3>Ilta Hämähäkkänen</h3>
          <h4>Creative Visionary</h4>
          <p>
            Ilta is the visionary guiding the creative direction at Cheeky
            Social Sorbet. Her unique perspective and innovative solutions make
            her an inspiration to the entire team.
          </p>
        </div>
        <img
          className="iltanaama"
          src={require("./../images/ilta_naama.png")}
          alt="cheeky sorbet logo"
        />
      </div>
      <div className="mikaelcont">
        <img
          className="mikaelnaama"
          src={require("./../images/mikael_naama.png")}
          alt="cheeky sorbet logo"
        />
        <div className="mikael">
          <h3>Mikael Nautavaara</h3>
          <h4>Visual Artisan</h4>
          <p>
            Mikael crafts visual masterpieces that elevate the brands of Cheeky
            Social Sorbet's clients to new heights. His ability to combine
            colors, shapes, and narratives is unparalleled.
          </p>
        </div>
      </div>
      <div className="sylvicont">
        <div className="sylvi">
          <h3>Sylvi-Petra Lehti-Kokkeli</h3>
          <h4>Social Alchemist</h4>
          <p>
            Sylvi is a social media magician conjuring enchanting campaigns at
            Cheeky Social Sorbet. Her deep understanding of algorithms and knack
            for predicting trends make her a true social media expert.
          </p>
        </div>
        <img
          className="sylvinaama"
          src={require("./../images/sylvi_naama.png")}
          alt="cheeky sorbet logo"
        />
      </div>
    </div>
  );
}
