import { Montserrat } from "next/font/google";
import Head from "next/head";

import ProjectsOverview from "../../pageContents/ProjectsOverview.js";
import Header from "../../sections/Header.js";
import Footer from "../../sections/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Projects() {
  return (
    <>
      <Head>
        <title>Marco Fijan - Projects</title>
        <meta
          name="description"
          content="Overview of Projects of an frontend developer, Marco Fijan"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Svelte, Unity, Front, End, Frontend, Developer, Development, Git, Github, Portfolio, NL, Soliciting, Job, Vacature, Baan, UI, User, Interface, UX, Experience, projects"
        />
        <meta name="author" content="Marco Fijan" />
      </Head>
      <Header />
      <main className={`bg-colorBgLight pb-[50vh] ${montserrat.className}`}>
        <ProjectsOverview />
      </main>
      <Footer />
    </>
  );
}
