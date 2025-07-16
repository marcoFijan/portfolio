import Head from "next/head";
import MainCanvas from "../canvas/MainCanvas";
import Header from "../sections/Header";
import Footer from "@/sections/Footer";
import { useRef, useEffect } from "react";

export default function PageTemplate({ children, homePage = false }) {
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

      <main className={``}>
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
