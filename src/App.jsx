import React from "react";
import Hero from "./HeroAris";
import Profile from "./Profile";
import BackgroundAnimation from "./BackgroundAnimation"; // Import the background animation

import "./App.css";

function App() {
  return (
    <div className="App">
      <BackgroundAnimation /> {/* Add this line */}
      <Hero />
      <main className="content">
        <Profile />
      </main>
    </div>
  );
}

export default App;
