import { Montserrat } from "next/font/google";
import Head from "next/head";

import ContactSection from "@/organisms/ContactSection.js";
import Header from "@/organisms/Header.js";
import Footer from "@/organisms/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Contact() {
  return (
    <>
      <Head>
        <title>Marco Fijan - Contact</title>
        <meta
          name="description"
          content="Contact a Frontend Developer, Marco Fijan"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Svelte, Unity, Front, End, Frontend, Developer, Development, Git, Github, Portfolio, NL, Soliciting, Job, Vacature, Baan, UI, User, Interface, UX, Experience, Contact"
        />
        <meta name="author" content="Marco Fijan" />
      </Head>
      <Header />
      <main className={`bg-bgColorDark pb-[50vh] ${montserrat.className}`}>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
