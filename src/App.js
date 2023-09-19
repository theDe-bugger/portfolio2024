import './App.css';
import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
// import About from "./components/About";

function App() {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <Projects />
    </div>
    
  );
}

export default App;
