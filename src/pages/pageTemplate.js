import Head from "next/head";
import MainCanvas from "../canvas/MainCanvas";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import GradientBackground from "@/utilities/GradientBackground";
import { useRef, useEffect } from "react";

export default function PageTemplate({
  children,
  homePage = false,
  projectPage = false,
  bgColors = [],
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Marco Fijan - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of a Frontend Developer, Marco Fijan"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marco.fijan.net/" />
        <meta property="og:image" content="/images/general/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marco Fijan - Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio of a Frontend Developer, Marco Fijan"
        />
        <meta name="twitter:image" content="/images/general/logo.svg" />
      </Head>

      <Header home={homePage} />

      <main className={`${homePage ? "w-full" : "pt-28 "}`}>
        {projectPage && (
          <div
            className={`absolute overflow-hidden max-w-full -z-[2] bg-radial ${projectPage === "yo"
              ? "from-color-yo-accent/[0.4] to-60%"
              : projectPage === "kbo"
                ? "from-color-kbo-accent"
                : projectPage === "ra"
                  ? "from-color-ra-accent/[0.7] to-70%"
                  : "from-color-bg-bottom to-50%"
              } to-transparent w-[200%] h-[200%] -top-full left-0 transition-all duration-500`}
          ></div>
        )}
        <GradientBackground colors={bgColors.length > 0 ? bgColors : undefined} />
        {children}
      </main>

      <Footer />
    </>
  );
}
