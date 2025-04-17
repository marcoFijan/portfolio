import { Orbitron, Poppins } from "next/font/google";
import Head from "next/head";
import MainCanvas from "../canvas/MainCanvas";
import Header from "../sections/Header";
import { useRef, useEffect } from "react";

// const montserrat = Montserrat({
//   weight: ["200", "400", "700", "900"],
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const poppins = Poppins({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
          content="HTML, CSS, JavaScript, NextJS, React, Svelte, Unity, Frontend, Developer, Git, Github, Portfolio"
        />
        <meta name="author" content="Marco Fijan" />
      </Head>

      <Header />

      <main className={`${poppins.className}`}>
        <div
          id="background"
          className="bg-colorBg w-[100dvw] h-[100dvh] absolute overflow-hidden top-0 left-0 z-[-3]"
        ></div>

        <MainCanvas />
      </main>
    </>
  );
}
