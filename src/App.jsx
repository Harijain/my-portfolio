import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import CareerGoals from "./pages/CareerGoals";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <CareerGoals />
    </div>
  );
}

export default App;
