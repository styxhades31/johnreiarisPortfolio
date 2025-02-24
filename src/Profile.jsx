import React from "react";
import "./App.css";
import { Mail, Facebook, Github } from "lucide-react";




const Profile = () => {
  return (
    <section className="profile-container">
      <h1 className="name">Johnrei Aris B. Atendido</h1>
      <p className="role">Backend Developer | PHP & MySQL Specialist</p>

      <div className="about-me">
        <h3>About Me</h3>

        <p>
          I'm passionate about developing scalable backend systems, I specialize in PHP and MySQL,
          creating efficient and secure applications that solve real-world problems.
        </p>

        <h3>Skills & Expertise</h3>
        <ul>
          <li>PHP (Laravel, Core PHP)</li>
          <li>MySQL & Database Optimization</li>
          <li>RESTful API Development</li>
          <li>Authentication & Security</li>
          <li>React.js & Frontend Integrations</li>
        </ul>

        <h3>I’m Currently Working On</h3>
        <p>
          I'm currently working on improving user authentication and security measures in web applications.
          I'm also exploring advanced MySQL indexing techniques for database performance optimization.
        </p>

        <h3>Career Goals</h3>
        <p>
           My goal is to become a skilled back-end developer, specializing in building secure, efficient, and scalable systems.  
           At the same time, I aim to grow as a freelance video editor, combining technical precision with creative storytelling.
       </p>


        <h3>Hobbies</h3>
        <p>
          When I’m not coding, I enjoy watching anime, gaming, and watching Documentaries .
        </p>

        
      </div>

      <div className="contact-container">
     
<p>
  Let’s connect! Whether it’s collaborating on a project, discussing backend optimizations, 
  or sharing insights on PHP and MySQL, I’d love to chat.
</p>

<p>Reach out to me through:</p>
<ul className="contact-list">
  <li>
    <Mail size={18} /> Email: <a href="mailto:johnrei@example.com">johnrei@gmail.com</a>
  </li>
  <li>
    <Facebook size={18} /> Facebook: <a href="https://www.facebook.com/johnreiaris.atendido.1" target="_blank" rel="noopener noreferrer">Johnrei Aris Atendido</a>
  </li>
  <li>
    <Github size={18} /> GitHub: <a href="https://github.com/styxhades31" target="_blank" rel="noopener noreferrer">Styxhades</a>
  </li>
</ul>


      </div>
    </section>
  );
};

export default Profile;
