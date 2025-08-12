"use client";

// import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useEffect } from "react";
import HeroSection from "../organisms/HeroSection.js";
import AboutSection from "../organisms/AboutSection.js";
import PortfolioSection from "../organisms/PortfolioSection.js";
import LoadingScreen from "../organisms/LoadingScreen.js";
import Footer from "../organisms/Footer.js";
import ContactSection from "../organisms/ContactSection.js";
import Smartphone from "../models/Smartphone.js";
import Laptop from "../models/Laptop.js";
import HomeSection from "../organisms/SectionHome";

import {
  ScrollControls,
  Scroll,
  Environment,
  MeshDistortMaterial,
  Sparkles,
  Circle,
  Loader,
  Html,
  Text,
} from "@react-three/drei";

export default function MainCanvas({}) {
  const [screenSize, setScreenSize] = useState(0);
  const [pages, setPages] = useState(0);
  const [mobile, setMobile] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimension = () => {
        setScreenSize(window.innerWidth);
      };
      window.addEventListener("resize", updateDimension);

      if (window.innerWidth <= 832) {
        setPages(11.5);
        setMobile(true);
      } else {
        setPages(11);
        setMobile(false);
      }

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, [screenSize]);

  useEffect(() => {}, []);

  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        className="h-full w-full overflow-hidden"
        camera={{ position: [0, 0, 7] }}
      >
        <ambientLight color={"white"} intensity={0.3} />

        <ScrollControls pages={pages} damping={0.1}>
          <Environment
            blur={0}
            files="../images/Environment/brown_photostudio_02_1k.hdr"
          />

          <Laptop mobile={mobile} />
          {/* <Suspense fallback={null}> */}
          <Smartphone mobile={mobile} />
          {/* </Suspense> */}
          <Scroll>
            {/* <Circle args={[1, 100, 200]} scale={5} position={[0, 0, -5]}>
              <MeshDistortMaterial
                color="#e5e7f9"
                attach="material"
                distort={0.5}
                speed={0.6}
              />
            </Circle> */}
          </Scroll>
          <Scroll html className="w-full">
            {/* Introduction animation [1 page] */}
            <HeroSection />
            <h1>HOMESECTION HIER VVV</h1>
            <HomeSection amountOfPages={mobile ? "3" : "2"}>
              <h1>test</h1>
            </HomeSection>
            {/* Information about me [2 page] */}
            <AboutSection mobile={mobile} />
            {/* Overview with a couple of projects I am proud of [6 pages] */}
            <PortfolioSection />
            {/* Contactpage with a form [1.5 page] */}
            <ContactSection homePage={true} />
            {/* Footer [0.5 page] */}
            <Footer homePage={true} />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <LoadingScreen />
    </div>
  );
}
