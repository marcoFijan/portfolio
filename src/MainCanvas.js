"use client";

// import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import HeroSection from "./HeroSection.js";
import AboutSection from "./AboutSection.js";
import PortfolioSection from "./PortfolioSection.js";
import ContactSection from "./ContactSection.js"
import {
  ScrollControls,
  Scroll,
  Environment,
  Float,
  useScroll,
} from "@react-three/drei";

export default function MainCanvas({}) {
  return (  
      <article className="bg-bgColorDark w-full h-screen">
        <div className="w-full h-screen">
          <Canvas
            shadows
            className="h-full w-full overflow-hidden"
            camera={{ position: [0, 0, 7] }}
          >
            <ambientLight color={"white"} intensity={0.3} />
            <ScrollControls pages={10} damping={0.1}>
              <Environment blur={0} preset="warehouse" />
              <Scroll>
              </Scroll>
              <Scroll html>
                {/* Introduction animation [1 page] */}
                <HeroSection/> 
                {/* Information about me [1 page] */}
                <AboutSection/>
                {/* Overview with a couple of projects I am proud of [6 pages] */}
                <PortfolioSection/>
                {/* Contactpage with a form [1 page] */}
                <ContactSection/>
              </Scroll>
            </ScrollControls>
          </Canvas>
        </div>
      </article>
   
  );
}
