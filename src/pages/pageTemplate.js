import Head from "next/head";
import MainCanvas from "../canvas/MainCanvas";
import Header from "../sections/Header";
import Footer from "@/sections/Footer";
import { useRef, useEffect } from "react";

export default function PageTemplate({
  children,
  homePage = false,
  projectPage = false,
}) {
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

      <Header home={homePage} />

      <main
        className={`${
          homePage ? "" : "pt-28 lg:pt-48 relative overflow-hidden"
        }`}
      >
        {projectPage && (
          <div className="absolute overflow-hidden -z-[2] bg-radial from-color-bg-bottom  to-transparent to-50% w-[200%] h-[100%] -top-1/2 -left-1/2 transition-all duration-500"></div>
        )}
        <div
          id="background"
          className="bg-gradient-to-bl from-color-bg-top to-color-bg-bottom fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10"
        ></div>

        {children}
      </main>

      {!homePage && <Footer />}
    </>
  );
}
