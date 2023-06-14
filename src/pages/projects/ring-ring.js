import { Montserrat } from "next/font/google";
import Head from "next/head";

import RingRingContent from "../../pageContents/ProjectRingRing";
import Header from "../../organisms/Header.js";
import Footer from "../../organisms/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RingRingThumb() {
  return (
    <>
      <Head>
        <title>Marco Fijan - Datavisualisatie van fietsdata</title>
        <meta
          name="description"
          content="Dashboard for datavisualisation, Marco Fijan"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Svelte, Unity, Front, End, Frontend, Developer, Development, Git, Github, Portfolio, NL, Soliciting, Job, Vacature, Baan, UI, User, Interface, UX, Experience, D3, ChartJS, Datavisualisation"
        />
        <meta name="author" content="Marco Fijan" />
      </Head>
      <Header />
      <main className={`bg-bgColorDark pb-[50vh] ${montserrat.className}`}>
        <RingRingContent />
      </main>
      <Footer />
    </>
  );
}
