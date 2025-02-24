import React from "react";
import "./App.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Hero Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="glitch">Hi! I'm Johnrei</h1>
        <p className="quote">"Code is like a game. Strategize, debug, and level up." 💻🔥</p>
        <div className="profile-container">
          <div className="profile-border">
            <img src="/profile.jpg" alt="Johnrei" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
