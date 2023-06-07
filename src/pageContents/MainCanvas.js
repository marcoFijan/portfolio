"use client";

// import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useEffect } from "react";
import HeroSection from "../organisms/HeroSection.js";
import AboutSection from "../organisms/AboutSection.js";
import PortfolioSection from "../organisms/PortfolioSection.js";
import Footer from "../organisms/Footer.js";
import PortfolioAnimation from "../organisms/PortfolioAnimation.js";
import ContactSection from "../organisms/ContactSection.js";
import { ScrollControls, Scroll, Environment, Loader } from "@react-three/drei";

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

  return (
    <div className="w-full h-screen">
      {/* <div className="w-full h-screen"> */}
      <Canvas
        shadows
        className="h-full w-full overflow-hidden"
        camera={{ position: [0, 0, 7] }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <ScrollControls pages={pages} damping={0}>
          <Environment blur={0} preset="warehouse" />

          <PortfolioAnimation mobile={mobile} />
          <Scroll></Scroll>
          <Scroll html className="w-full">
            {/* Introduction animation [1 page] */}
            <HeroSection />
            {/* Information about me [2 page] */}
            <AboutSection />
            {/* Overview with a couple of projects I am proud of [6 pages] */}
            <PortfolioSection />
            {/* Contactpage with a form [1.5 page] */}
            <ContactSection homePage={true} />
            {/* Footer [0.5 page] */}
            <Footer homePage={true} />
          </Scroll>
        </ScrollControls>
      </Canvas>

      {/* </div> */}
    </div>
  );
}
