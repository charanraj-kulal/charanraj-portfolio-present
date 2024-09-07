// src/pages/Home.tsx
import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

import Extra from "../components/Extra";
import Contact from "../components/Contact";
// import GlobeDemo from "../components/globeComponent";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Nav />

        {/* <GlobeDemo /> */}
        <Hero />
        <About />
        <Experience />

        {/* <Extra /> */}
        <Contact />
      </div>
    </>
  );
};

export default Home;
