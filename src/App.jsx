import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Fueling from "./components/Fueling";      // 👈 Add these
import SeeOurWork from "./components/SeeOurWork";
import StandOut from "./components/StandOut";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Fueling />
      <SeeOurWork />
      <StandOut />
      <Contact />
      <Footer />
    </>
  );
}


export default App;
