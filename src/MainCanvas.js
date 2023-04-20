"use client";

// import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import HeroSection from "./HeroSection.js";
import AboutSection from "./AboutSection.js";
import PortfolioSection from "./PortfolioSection.js";
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
            <ScrollControls pages={6} damping={0.1}>
              <Environment blur={0} preset="warehouse" />
              <Scroll>
              </Scroll>
              <Scroll html>
                <HeroSection/>
                <AboutSection/>
                <PortfolioSection/>
              </Scroll>
            </ScrollControls>
          </Canvas>
        </div>
      </article>
   
  );
}
