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
          ? "animate-[becomeHidden_1s_ease-in-out_0s_normal_forwards]"
          : "z-50"
      } w-full h-screen bg-bgColorDark absolute top-0 left-0 flex items-center`}
    >
      <section className="w-full p-articlePaddingMobile md:p-articlePadding max-w-xl mx-auto">
        <H1 text="Welkom!" />

        <H3 text={`Voortgang`} darkBackground={false} />
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
