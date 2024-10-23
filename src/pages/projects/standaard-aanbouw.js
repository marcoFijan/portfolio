import { Montserrat } from "next/font/google";
import Head from "next/head";

import StandaardAanbouwContent from "../../pageContents/ProjectStandaardAanbouw";
import Header from "../../sections/Header.js";
import Footer from "../../sections/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function KBOTilburgReeshof() {
  return (
    <>
      <Head>
        <title>Marco Fijan - Nieuw ontwerp voor Wordpress</title>
        <meta
          name="description"
          content="New Design for personal contractor, Marco Fijan"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Svelte, Unity, Front, End, Frontend, Developer, Development, Git, Github, Portfolio, NL, Soliciting, Job, Vacature, Baan, UI, User, Interface, UX, Experience, Wordpress, Advanced Custom Fields, New Design"
        />
        <meta name="author" content="Marco Fijan" />
      </Head>
      <Header />
      <main className={`bg-bgColorDark pb-[50vh] ${montserrat.className}`}>
        <StandaardAanbouwContent />
      </main>
      <Footer />
    </>
  );
}
