import React from "react";
import "./App.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture-container">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-picture"
        />
      </div>
      <h1 className="name">Johnrei Aris B. Atendido</h1>
      <p className="details">
        I am a backend developer specializing in designing and building reliable server-side applications. My expertise includes PHP and MySQL, ensuring secure and efficient web solutions.
      </p>
      <p className="details">
        I utilize XAMPP on Windows for seamless local development, enabling me to test and refine my projects effectively.
      </p>
      <p className="details">Email: johnreiaris@gmail.com</p>
      <p className="details">
        Facebook:{" "}
        <a
          href="https://www.facebook.com/johnreiaris.atendido.1"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook.com/johnreiaris.atendido.1
        </a>
      </p>
      <p className="details">Contact Number: 09773106531</p>
    </div>
  );
};

export default Profile;