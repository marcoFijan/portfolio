import { useProgress } from "@react-three/drei";
import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const { progress } = useProgress();
  const [mounted, setMounted] = useState(false);
  const [unmount, setUnmount] = useState(false); // Added to remove from DOM completely

  useEffect(() => {
    if (progress >= 100) {
      setMounted(true);

      // Wait for the 1-second fade out transition to finish, then unmount it from the DOM
      const timer = setTimeout(() => {
        setUnmount(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Completely remove the HTML once loading is done
  if (unmount) return null;

  return (
    <section
      className={`w-full h-screen bg-bgColorDark fixed top-0 left-0 flex items-center transition-all duration-1000 ease-in-out z-[9999] ${
        mounted ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <section className="bg-gradient-to-bl flex flex-col justify-center items-center from-color-bg-top to-color-bg-bottom fixed top-0 left-0 w-screen h-screen overflow-hidden">
        <div className="h-[10vw] w-full flex flex-col relative items-center mb-4 overflow-hidden">
          <section className="absolute animate-[animate-intro_13s_infinite] w-full h-full flex flex-col justify-start items-center text-color-accent">
            <span className="text-[7.5vw] leading-[10vw] font-bold">Hallo</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">
              Guten Tag
            </span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">
              Bonjour
            </span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">Hello</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">Hola</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">Ciao</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">
              Ni hao
            </span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">olá</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">Hej</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">
              Konnichi wa
            </span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">
              zdravstvuyte
            </span>
            {/* Duplicates for seamless looping */}
            <span className="text-[7.5vw] leading-[10vw] font-bold">Hallo</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">
              Guten Tag
            </span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">
              Bonjour
            </span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">Hello</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">Hola</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">Ciao</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">
              Ni hao
            </span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">olá</span>
            <span className="text-[7.5vw] leading-[10vw] font-bold">Hej</span>
          </section>
        </div>
        <div className="w-full h-3 bg-bgColorLight shadow-inputField rounded-full relative mb-4">
          <div
            style={{ width: `${Math.round(progress)}%` }}
            className="absolute h-3 bg-linear-to-br from-CTAColorDark to-CTAColorLight rounded-full transition-all duration-300 ease-out"
          ></div>
        </div>
      </section>
    </section>
  );
}
