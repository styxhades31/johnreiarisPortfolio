import React from "react";
import Hero from "./HeroAris";
import Profile from "./Profile";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <main className="content">
        <Profile />
      </main>
    </div>
  );
}

export default App;
