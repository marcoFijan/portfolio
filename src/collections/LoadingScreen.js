import { useProgress } from "@react-three/drei";
import React, { useState, useEffect } from "react";

import H1 from "../elements/H1.js";
import H3 from "../elements/H3.js";

export default function LoadingScreen() {
  const { progress } = useProgress();
  const [mounted, setMounted] = useState(false);
  const [roundedProgress, setRoundedProgress] = useState(Math.round(progress));

  useEffect(() => {
    if (progress >= 100) {
      setMounted(true);
    }
    setRoundedProgress(Math.round(progress));
  }, [progress]);

  return (
    <section
      className={`${
        mounted
          ? "animate-[becomeHidden_1s_ease-in-out_0s_normal_forwards] -z-50"
          : "z-50"
      } w-full h-screen bg-bgColorDark absolute top-0 left-0 flex items-center`}
    >
      <section className="bg-gradient-to-bl flex flex-col justify-center items-center from-color-bg-top to-color-bg-bottom fixed top-0 left-0 w-screen h-screen overflow-hidden">
        <div className="h-[10vw]  w-full flex flex-col relative  items-center mb-4 overflow-hidden">
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
            style={{ width: `${roundedProgress}%` }}
            className={
              "absolute h-3 bg-linear-to-br from-CTAColorDark to-CTAColorLight rounded-full"
            }
          ></div>
        </div>
      </section>
    </section>
  );
}
