import { Montserrat } from "next/font/google";
import Head from "next/head";

import ReisartikelenContent from "../../pageContents/ProjectReisartikelen";
import Header from "../../organisms/Header.js";
import Footer from "../../organisms/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Reisartikelen() {
  return (
    <>
      <Head>
        <title>Marco Fijan - Reisartikelen.nl herontwerp</title>
        <meta
          name="description"
          content="Commercial redesign of reisartikelen.nl, Marco Fijan"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Svelte, Unity, Front, End, Frontend, Developer, Development, Git, Github, Portfolio, NL, Soliciting, Job, Vacature, Baan, UI, User, Interface, UX, Experience, Commercial, redesign"
        />
        <meta name="author" content="Marco Fijan" />
      </Head>
      <Header />
      <main className={`bg-bgColorDark pb-[50vh] ${montserrat.className}`}>
        <ReisartikelenContent />
      </main>
      <Footer />
    </>
  );
}
