"use client";

// import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import HeroSection from "../organisms/HeroSection.js";
import AboutSection from "../organisms/AboutSection.js";
import PortfolioSection from "../organisms/PortfolioSection.js";
import Footer from "../organisms/FakeFooter.js";
import PortfolioAnimation from "../PortfolioAnimation.js";
import ContactSection from "../organisms/ContactSection.js";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";

export default function MainCanvas({}) {
  return (
    <div className="w-full h-screen">
      {/* <div className="w-full h-screen"> */}
      <Canvas
        shadows
        className="h-full w-full overflow-hidden"
        camera={{ position: [0, 0, 7] }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <ScrollControls pages={12} damping={0}>
          <Environment blur={0} preset="warehouse" />
          <PortfolioAnimation />
          <Scroll></Scroll>
          <Scroll html className="w-full">
            {/* Introduction animation [1 page] */}
            <HeroSection />
            {/* Information about me [2 page] */}
            <AboutSection />
            {/* Overview with a couple of projects I am proud of [7 pages] */}
            <PortfolioSection />
            {/* Contactpage with a form [1.5 page] */}
            <ContactSection />
            {/* Footer [0.5 page] */}
            <Footer />
          </Scroll>
        </ScrollControls>
      </Canvas>
      {/* </div> */}
    </div>
  );
}
