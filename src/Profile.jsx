import React from "react";
import "./App.css";

const Profile = () => {
  return (
    <section className="profile-container">
      <h1 className="name">Johnrei Aris B. Atendido</h1>
      <p className="role">Backend Developer | PHP & MySQL Specialist</p>
      
      <p className="bio">
        Passionate about building scalable and efficient backend solutions using PHP and MySQL. 
        Experienced in database optimization, API development, and server-side logic. 
        Dedicated to writing clean and maintainable code.
      </p>

      <div className="skills-container">
        <h2 className="skills-heading">Skills & Technologies</h2>
        <ul className="skills-list">
          <li>PHP (Laravel, Core PHP)</li>
          <li>MySQL & Database Optimization</li>
          <li>RESTful API Development</li>
          <li>XAMPP & Local Development</li>
          <li>JavaScript (React.js, jQuery)</li>
          <li>Authentication & Security</li>
        </ul>
      </div>

      <div className="contact-container">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>Email: <a href="mailto:johnrei@example.com">johnrei@gmail.com</a></li>
          <li>Facebook: <a href="https://www.facebook.com/johnreiaris.atendido.1" target="_blank" rel="noopener noreferrer">Johnrei Aris Atendido</a></li>
          <li>GitHub: <a href="https://github.com/styxhades31" target="_blank" rel="noopener noreferrer">Styxhades</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
