import { Montserrat } from "next/font/google";
import Head from "next/head";
import MainCanvas from "../canvas/MainCanvas.js";
import Header from "../sections/Header.js";
import { useRef, useEffect } from "react";

const montserrat = Montserrat({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Marco Fijan - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of a Frontend Developer, Marco Fijan"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Svelte, Unity, Front, End, Frontend, Developer, Development, Git, Github, Portfolio, NL, Soliciting, Job, Vacature, Baan, UI, User, Interface, UX, Experience"
        />
        <meta name="author" content="Marco Fijan" />
      </Head>
      <Header />
      <main className={`${montserrat.className}`}>
        {/* <div className="bg-gradient-to-br from-green-50 to-violet-200 w-full h-screen absolute top-0 left-0" /> */}
        {/* <div
          id="background"
          className="w-full h-screen absolute top-0 left-0 bg-[#000000]"
        /> */}
        <div
          id="background"
          className="bg-colorBg w-[100dvw] h-[100dvh] absolute overflow-hidden top-0 left-0"
        ></div>
        <MainCanvas />
      </main>
    </>
  );
}
