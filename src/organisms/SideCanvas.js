"use client";

// import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import { ScrollControls, Float, Environment } from "@react-three/drei";
import Smartphone from "../models/SmartphoneStatic.js";
import Laptop from "../models/LaptopStatic.js";

export default function SideCanvas({ laptopScreen, smartphoneScreen }) {
  const [screenSize, setScreenSize] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimension = () => {
        setScreenSize(window.innerWidth);
      };
      window.addEventListener("resize", updateDimension);

      if (window.innerWidth <= 832) {
        setPages(12);
      } else {
        setPages(11);
      }

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, [screenSize]);

  return (
    <div className="w-full h-96">
      <Canvas
        shadows
        className="h-full w-full overflow-hidden"
        camera={{ position: [0, 0, 7] }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <Environment blur={0} preset="warehouse" />
        {/* <Float> */}
        {laptopScreen && <Laptop screen={laptopScreen} />}
        {smartphoneScreen && <Smartphone screen={smartphoneScreen} />}

        {/* </Float> */}
      </Canvas>
    </div>
  );
}
