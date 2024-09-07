// src/pages/Home.tsx
import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Extra from "../components/Extra";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import GlobeDemo from "../components/globeComponent";
import DockDemo from "../components/Dock";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Nav />
        {/* <DockDemo /> */}
        {/* <GlobeDemo /> */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Extra />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
