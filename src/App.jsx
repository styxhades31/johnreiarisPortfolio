import React from "react";
import { FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GiCrossedSwords } from "react-icons/gi";
import { VscChip } from "react-icons/vsc";
import { GiChart } from "react-icons/gi";
import { WiTime1 } from "react-icons/wi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { GiGems } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";
import "./App.css";
import slashGif from './assets/slash.gif';
import blogImage from './assets/blogaris.png';
import calcuImage from './assets/calcu.png';
import pokemonImage from './assets/Pokemonaris.png';



import monsterGif from './assets/monsteraris.gif'; 



function App() {
  
  return (
    <div className="app">
   
      <div className="background"></div>

     
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      
      <div className="content">

        {/* Intro Section */}
        <section id="home" className="intro">
        <h1 className="jumping-text">
  <span>H</span><span>i</span><span>!</span> <span>&lt;</span><span>I</span><span>'</span><span>m</span> <span>J</span><span>o</span><span>h</span><span>n</span><span>r</span><span>e</span><span>i</span><span>&gt;</span>
</h1>

          <p>Code is like a game. Strategize, debug and level up.</p>
        </section>

        {/* About Me */}
      
        <section id="about" className="about">
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {/* Slash GIF */}
    <img 
      src={slashGif} 
      alt="Slash Animation" 
      style={{ 
        width: '100px',  /* Adjust size to fit */
        height: 'auto',  /* Maintain aspect ratio */
        position: 'relative', 
        top: '30px', 
        right: '43px', 
        zIndex: '1', 
      }} 
    />
    
    {/* Monster GIF */}
    <img 
      src={monsterGif} 
      alt="Monster Animation" 
      style={{ 
        width: '100px',  /* Adjust size to fit */
        height: 'auto',  /* Maintain aspect ratio */
        position: 'absolute', 
        top: '35px', 
        left:'30px', /* Position it to the right of the container */
        zIndex: '1', 
      }} 
    />
    
    {/* Your name */}
    <h2 className="full-name" style={{ position: 'relative', zIndex: '0' }}>
      Johnrei Aris B. Atendido
    </h2>
  </div>
  <h2>
  <VscAccount style={{ marginRight: '10px', position: 'relative', top: '3px' }} />

    About Me
  </h2>
  <p>
  Hi there! I'm a passionate backend developer with a knack for building robust systems and APIs. When I'm not coding, I enjoy diving into the world of video editing, creating visually compelling content that tells stories. I’m also a very social person, always up for networking, collaborating, and exchanging ideas with others. Whether it's writing code, editing videos, or engaging in meaningful conversations, I thrive on creativity and connection. Let’s build something amazing together!
  </p>
</section>

<section id="skills" className="skills">
  <h2>
    <GiCrossedSwords style={{ marginRight: '10px', position: 'relative', top: '3px' }} />
    Skills & Expertise
  </h2>
  <ul>
    <li>PHP (Laravel, Core PHP)</li>
    <li>MySQL & Database Optimization</li>
    <li>RESTful API Development</li>
    <li>Authentication & Security</li>
    <li>React.js & Frontend Integrations</li>
  </ul>
</section>

<section className="working-on">
  <h2>
    <VscChip style={{ marginRight: '10px', position: 'relative', top: '3px' }} />
    I’m Currently Working On
  </h2>
  <p>
  I’m currently focused on improving user authentication and security measures in web applications, ensuring they are both robust and secure. At the same time, I’m exploring advanced MySQL indexing techniques to optimize database performance. On the creative side, I’m enhancing my video editing skills to produce more engaging content. In addition, I’m working on various personal projects that allow me to apply and expand my knowledge in both development and video editing.</p>
</section>

<section className="career-goals">
  <h2>
    <GiChart style={{ marginRight: '10px',  position: 'relative', top: '3px' }} />
    Career Goals
  </h2>
  <p>
  My goal is to become a skilled back-end developer, specializing in building secure, efficient, and scalable systems. I am focused on enhancing my expertise in user authentication, security measures, and database performance optimization, with a particular interest in advanced MySQL indexing techniques. At the same time, I aim to grow as a freelance video editor, combining my technical precision with creative storytelling to deliver high-quality content. Through continuous learning and personal projects, I strive to merge my development and creative skills, contributing to both the tech and media industries.</p>
</section>

<section className="hobbies">
  <h2>
    <WiTime1 style={{ marginRight: '10px',  position: 'relative', top: '3px' }} />
    Hobbies
  </h2>
  <p>When I’m not coding, I enjoy watching anime, gaming, and exploring new documentaries. I also take motorcycle rides to refresh my mind and clear my thoughts. These activities help me unwind and stay creative, giving me the balance I need to stay focused and motivated in my professional life.</p>
</section>

<section className="experience">
  <h2>
    <GiGems style={{ marginRight: '10px',  position: 'relative', top: '3px' }} />
    Experience
  </h2>
  <p>
  As the Backend Developer for the CCS-IT Portal, I was responsible for designing and implementing reliable, efficient server-side systems that ensured the platform’s smooth functionality and optimal performance. This role gave me hands-on experience in building scalable and robust backend infrastructure, optimizing processes, and maintaining system integrity across the platform. Through this experience, I honed my skills in server management, data handling, and performance tuning, all while collaborating with cross-functional teams to deliver seamless user experiences.</p>
</section>

<section className="blog">
  <h2>
    <AiOutlineAlignLeft style={{ marginRight: '10px',  position: 'relative', top: '3px' }} />
    Blog Posts
  </h2>
  <div className="card">
    <a href="https://illustrious-semifreddo-20eaf7.netlify.app/" target="_blank" rel="noopener noreferrer">
    <img src={blogImage} alt="Blog Post" />
      
    </a>
  </div>
</section>




<section className="projects">
  <h2>
    <AiOutlineLaptop style={{ marginRight: '10px',  position: 'relative', top: '3px' }} />
    Projects
  </h2>
  <div className="project-cards">
  <a href="https://sciencalu.netlify.app/" target="_blank" rel="noopener noreferrer" className="card1">
  <img src={calcuImage} alt="Project 1" />
    <h3>Scientific Calculator</h3>
  </a>

    <a href="https://clever-custard-c3d08e.netlify.app/" target="_blank" rel="noopener noreferrer" className="card1">
     <img src="/Pokemonaris.png" alt="Project 2" />
      <h3>PokemonPedia</h3>
     
    </a>
  </div>
</section>


        {/* Contact */}
        <section id="contact" className="contact">
          <h2>Let’s connect!</h2>
          <p>Whether it’s collaborating on a project, discussing backend optimizations, or sharing insights on PHP and MySQL, I’d love to chat.</p>

          <div className="social-icons">
            <a href="mailto:johnrei@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            <a href="https://www.facebook.com/johnreiaris.atendido.1/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://github.com/styxhades31" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
