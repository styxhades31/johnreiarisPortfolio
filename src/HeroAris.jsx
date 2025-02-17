import React from "react";
import "./App.css";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Hi! I'm Johnrei</h1>
        <p>I'm a passionate web developer, specializing in building backend solutions with PHP & MySQL.</p>
        <div className="profile-container">
        <img src="/profile.jpg"  alt="Johnrei" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
