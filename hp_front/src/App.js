import "./App.css";
import React, { useState, useEffect } from "react";

function FloatingElement({ children }) {
  const [position, setPosition] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
    speedX: (Math.random() - 0.5) * 0.19,
    speedY: (Math.random() - 0.5) * 0.19,
  });

  const animateElement = () => {
    setPosition((prevPosition) => {
      const newTop = prevPosition.top + prevPosition.speedY;
      const newLeft = prevPosition.left + prevPosition.speedX;

      // Tarkista, osuuko uusi sijainti reunoihin
      const shouldChangeXDirection = newLeft <= 0 || newLeft >= 100;
      const shouldChangeYDirection = newTop <= 0 || newTop >= 100;

      const maxTop = window.innerHeight - 100;
      const minLeft = 0;
      const maxLeft = window.innerWidth - 900; // Pienennetty kimpoamisaluetta
      const shouldBounceTop = newTop <= 0 && prevPosition.speedY < 0;
      const shouldBounceBottom = newTop >= maxTop;
      const shouldBounceLeft = newLeft <= minLeft || newLeft >= maxLeft;

      // Vaihda nopeuden suuntaa tarvittaessa
      const newSpeedX = shouldChangeXDirection
        ? -prevPosition.speedX
        : prevPosition.speedX;
      const newSpeedY = shouldChangeYDirection
        ? -prevPosition.speedY
        : prevPosition.speedY;

      if (children === "HTML") {
        console.log("Adobe CC Position:", newTop, newLeft);
      }

      return {
        ...prevPosition,
        top: shouldBounceTop ? 1 : shouldBounceBottom ? maxTop - 1 : newTop,
        left: shouldBounceLeft
          ? Math.max(minLeft, Math.min(newLeft, maxLeft))
          : newLeft,
        speedX: newSpeedX,
        speedY: newSpeedY,
      };
    });

    requestAnimationFrame(animateElement);
  };

  useEffect(() => {
    requestAnimationFrame(animateElement);
  }, []);

  return (
    <div
      className="floating-element"
      style={{
        top: `${position.top - 2}vh`,
        left: `${position.left - 8}vw`,
      }}
    >
      <div className="floating-content">
        <p style={{ textAlign: "right", marginRight: "5px", width: "100%" }}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      {/*}
      <div className="navbar">
        <p>Contact</p>
        <p>Works</p>
        <p>Tech</p>
      </div>
  */}
      <header className="App-header">
        <p>Mikko Terho</p>
      </header>
      <div className="floating-cont">
        <div className="marketing-stack">
          <FloatingElement>
            <p>AdobeCC</p>
          </FloatingElement>
          <FloatingElement>
            <p>Hubspot</p>
          </FloatingElement>
          <FloatingElement>
            <p>LookerStudio</p>
          </FloatingElement>
          <FloatingElement>
            <p style={{ textAlign: "left", paddingLeft: "80px" }}>Meta</p>
          </FloatingElement>
        </div>
        <div className="code-stack">
          <FloatingElement>
            <p style={{ textAlign: "left", paddingLeft: "70px" }}>React</p>
          </FloatingElement>
          <FloatingElement>
            <p style={{ textAlign: "left", paddingLeft: "80px" }}>Java</p>
          </FloatingElement>
          <FloatingElement>
            <p>JavaScript</p>
          </FloatingElement>
          <FloatingElement>
            <p>MongoDB</p>
          </FloatingElement>
          <FloatingElement>
            <p>SpringBoot</p>
          </FloatingElement>
          <FloatingElement>
            <p style={{ textAlign: "left", paddingLeft: "80px" }}>HTML</p>
          </FloatingElement>
          <FloatingElement>
            <p style={{ textAlign: "left", paddingLeft: "80px" }}>Git</p>
          </FloatingElement>
          <FloatingElement>
            <p style={{ textAlign: "left", paddingLeft: "90px" }}>CSS</p>
          </FloatingElement>
        </div>
      </div>
      <div className="email">
        <p>terho.mikko@gmail.com</p>
      </div>
    </div>
  );
}
