import Head from "next/head";
import MainCanvas from "../canvas/MainCanvas";
import Header from "../sections/Header";
import Footer from "@/sections/Footer";
import { useRef, useEffect } from "react";

export default function PageTemplate({
  children,
  homePage = false,
  projectPage = false,
  title = "Marco Fijan - Portfolio",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Portfolio of a Frontend Developer, Marco Fijan"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Svelte, Unity, Frontend, Developer, Git, Github, Portfolio"
        />
        <meta name="author" content="Marco Fijan" />
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph */}
        <meta property="og:title" content="Marco Fijan - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of a Frontend Developer, Marco Fijan"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marco.fijan.net/" />
        <meta property="og:image" content="/images/general/logo.svg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marco Fijan - Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio of a Frontend Developer, Marco Fijan"
        />
        <meta name="twitter:image" content="/images/general/logo.svg" />
      </Head>

      <Header home={homePage} />

      <main className={`${homePage ? "" : "pt-28 lg:pt-48 "}`}>
        {projectPage && (
          <div
            className={`absolute overflow-hidden max-w-full -z-[2] bg-radial ${
              projectPage === "yo"
                ? "from-color-yo-accent/[0.4] to-60%"
                : projectPage === "kbo"
                  ? "from-color-kbo-accent"
                  : projectPage === "ra"
                    ? "from-color-ra-accent/[0.7] to-70%"
                    : "from-color-bg-bottom to-50%"
            } to-transparent w-[200%] h-[200%] -top-full left-0 transition-all duration-500`}
          ></div>
        )}
        <div
          id="background"
          data-color="colorKBO"
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

        {children}
      </main>

      {!homePage && <Footer />}
    </>
  );
}
