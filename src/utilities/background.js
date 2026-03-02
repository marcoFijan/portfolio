import React from "react";

export default function Background() {
  return (
    <div
      id="background"
      data-color=""
      className="bg-gradient-to-bl from-color-bg-top to-color-bg-bottom fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10 group"
    >
      <div
        className="w-[100vw] h-[200vh] absolute top-[-100vh] transition-all translate-x-1/2 overflow-visible bg-white/20 duration-1000 [mask-image:radial-gradient(circle,black_0%,transparent_30%)] [-webkit-mask-image:radial-gradient(circle,black_0%,transparent_70%)]  
                group-data-[color='colorKBO']:bg-color-kbo-accent/60 group-data-[color='colorKBO']:-translate-x-1/4 group-data-[color='colorKBO']:translate-y-1/4 
                group-data-[color='colorYo']:bg-color-yo-accent/40 group-data-[color='colorYo']:translate-x-1/4 group-data-[color='colorYo']:translate-y-1/4
                group-data-[color='colorYo2']:bg-color-yo-accent/40 group-data-[color='colorYo2']:-translate-x-1/4 group-data-[color='colorYo2']:translate-y-1/4
                group-data-[color='colorSa']:bg-color-sa-accent/60 group-data-[color='colorSa']:translate-x-1/4 group-data-[color='colorSa']:translate-y-1/4
                group-data-[color='colorOther']:bg-color-accent/60 group-data-[color='colorOther']:-translate-x-0 group-data-[color='colorOther']:translate-y-0"
      ></div>
    </div>
  );
}
