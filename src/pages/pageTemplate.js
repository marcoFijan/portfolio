import Head from "next/head";
import MainCanvas from "../canvas/MainCanvas";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import GradientBackground from "@/utilities/GradientBackground";
import { useRef, useEffect } from "react";

export default function PageTemplate({
  children,
  homePage = false,
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
        <GradientBackground
          colors={bgColors.length > 0 ? bgColors : undefined}
        />
        {children}
      </main>

      <Footer />
    </>
  );
}
