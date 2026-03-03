"use client";

import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useEffect } from "react";

import Smartphone from "../models/Smartphone.js";
import Laptop from "../models/Laptop.js";
import Container from "../sections/Container.js";
import Article from "../sections/Article.js";
import ProjectSection from "@/elements/Project";
import Action from "@/elements/Action.js";
import Footer from "../sections/Footer.js";
import LoadingScreen from "@/collections/LoadingScreen.js";

import H1 from "../elements/H1.js";
import H2 from "../elements/H2.js";
import H3 from "../elements/H3.js";
import Li from "../elements/Li.js";
import Img from "../elements/Img.js";
import P from "../elements/P.js";
import Divider from "../elements/Divider.js";
import NextLink from "@/elements/NextLink";
import InfiniteTextBar from "@/elements/infiniteTextBar.js";

import { Environment } from "@react-three/drei";
import { useScrollOffsets } from "@/hooks/Usescrolloffsets.js";

// ---------------------------------------------------------------------------
// Selector map
// hero/heroMid/heroEnd give the opening animation room to breathe within
// the hero section without relying on magic numbers.
// projectIntro is where the devices fly in and the "Uitgelichte Projecten"
// title is shown — it acts as the intro animation beat.
// ---------------------------------------------------------------------------
const SECTION_SELECTORS = {
  hero: "#hero",
  heroMid: "#hero-mid",      // ~50vh into hero — devices fly off-screen
  heroEnd: "#hero-end",      // ~90vh into hero — devices arc back in
  about: "#about",
  aboutEnd: "#about-end",
  projectIntro: "#project-intro", // devices fully land here — intro title shown
  project1: "#project-kbo",
  project2: "#project-dashboard",
  project3: "#project-gwoty",
  project4: "#project-aanbouw",
  project5: "#project-other",
  experience: "#experience",
};

// ---------------------------------------------------------------------------
// Fixed 3D canvas
// ---------------------------------------------------------------------------
function FixedScene({ mobile, offsets }) {
  const ready = offsets.projectIntro !== undefined;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <Canvas shadows camera={{ position: [0, 0, 7] }}>
        <Suspense fallback={null}>
          <ambientLight color="white" intensity={0.3} />
          <Environment blur={0} files="../images/Environment/studio_small_08_1k.hdr" />
          {ready && (
            <>
              <Laptop mobile={mobile} offsets={offsets} />
              <Smartphone mobile={mobile} offsets={offsets} />
            </>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export default function MainCanvas() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 1000);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const offsets = useScrollOffsets(SECTION_SELECTORS);

  // -------------------------------------------------------------------------
  // Mobile — plain HTML, no 3D
  // -------------------------------------------------------------------------
  if (mobile) {
    return (
      <div className="w-full">
        <Container>
          <section id="hero" className="relative pt-26 flex flex-col sm:flex-row items-start justify-start">
            <article className="left-0 bottom-0 xl:h-min xl:bottom-[unset] xl:pt-32 w-full xl:w-1/2 flex flex-col justify-start relative">
              <H1 chapeau="Marco Fijan" big>
                een wens, <br />
                een product. <br />
              </H1>
              <P>
                Hi, ik ben Marco Fijan, een frontend developer met een passie
                voor pixel-perfect webapplicaties, betrouwbare code en
                gebruiksvriendelijke ervaringen.
              </P>
              <Action>
                <NextLink className="block" type="primary" href="/contact">Neem contact op!</NextLink>
                <NextLink className="block" type="secondary" href="projects">Bekijk alle projecten</NextLink>
              </Action>
            </article>
          </section>

          <Article id="about" className="my-14">
            <section className="grid grid-cols-1 xs:grid-cols-6 w-full h-full items-stretch box-border">
              <Img
                alt="Marco aan het bureau"
                src="/images/general/MarcoBureau.jpg"
                className="object-right-top grayscale-75 opacity-70 max-w-full"
                classNameWrapper="col-span-1 xs:col-span-5 row-span-3 aspect-video mb-20"
              />
              <P className="text-xl text-white/40 col-span-1 xs:col-span-6 text-end my-10">Ik help mensen graag in het digitale tijdperk.</P>
              <P className="text-xl text-white/40 col-span-1 xs:col-span-6 my-10">In een toekomst waarin AI steeds meer op elkaar gaat lijken, werk ik graag aan unieke concepten die echt opvallen.</P>
              <P className="text-xl text-white/40 col-span-1 xs:col-span-6 text-center my-10">Geen poespas, altijd vooruitstrevend.</P>
            </section>
          </Article>

          <Divider />

          <Article id="project-intro" className="my-14">
            <H1 chapeau="Mijn projecten">Uitgelichtte Projecten</H1>
            <section className="flex flex-col gap-6 mt-4">
              {PROJECTS.map((project) => (
                <section key={project.id} id={project.id} className="w-full mx-auto xl:max-w-[80%]">
                  <ProjectSection
                    projectName={project.name}
                    projectLink={project.link}
                    imgSrc={project.img}
                    imgAlt={project.alt}
                    projectGiver={project.client}
                    projectChapeau={project.desc}
                  />
                </section>
              ))}
            </section>
            <Action className="justify-center">
              <NextLink type="primary" href="/projects">Bekijk alle projecten</NextLink>
            </Action>
          </Article>

          <Divider />
        </Container>

        <section
          id="experience"
          className="mx-4 pt-10 box-border w-[100%-1rem] rounded-t-2xl border-b-0 border-white/[0.5] border-1 bg-gradient-to-bl from-color-bg-top via-color-bg-bottom to-color-bg-top"
        >
          <Container>
            <ExperienceContent />
            <Divider />
            <Footer homePage />
          </Container>
        </section>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Desktop — fixed 3D + scrollable HTML
  // -------------------------------------------------------------------------
  return (
    <div className="w-full">
      <FixedScene mobile={mobile} offsets={offsets} />

      <main className="relative z-10">

        {/* Hero */}
        <section id="hero" className="h-screen flex items-start pt-20 lg:pt-40 relative">
          {/* Scroll markers — give the opening animation positions to target
              without hardcoding offsets that break on different screen sizes */}
          <div id="hero-mid" className="absolute top-1/2 left-0 w-0 h-0 pointer-events-none" aria-hidden="true" />
          <div id="hero-end" className="absolute bottom-[5%] left-0 w-0 h-0 pointer-events-none" aria-hidden="true" />
          <Container className="grid grid-cols-2 gap-6">
            <article className="dark">
              <H1 chapeau="Marco Fijan" big>
                Een wens, <br />
                een product. <br />
              </H1>
              <P>
                Hi, ik ben Marco Fijan, een frontend developer met een passie
                voor pixel-perfect webapplicaties, betrouwbare code en
                gebruiksvriendelijke ervaringen.
              </P>
              <P>
                Met een sterke focus op moderne webtechnologieën en
                gebruikerservaring (UX) design bouw ik schaalbare, toegankelijke
                en goed geteste interfaces die niet alleen goed werken, maar ook
                intuïtief aanvoelen.
              </P>
              <Action>
                <NextLink className="block" type="primary" href="/contact">Neem contact op!</NextLink>
                <NextLink className="block" type="secondary" href="projects">Bekijk alle projecten</NextLink>
              </Action>
            </article>
          </Container>
        </section>

        {/* About */}
        <section id="about" className="relative my-30 bg-color-bg-bottom-light inverted-card py-20 lg:py-20">
          <div id="about-end" className="absolute bottom-[5%] left-0 w-0 h-0 pointer-events-none" aria-hidden="true" />
          <CornerSVG position="left" side="top" />
          <CornerSVG position="right" side="top" rotate="-rotate-90" />
          {/* <div className="h-[20000px] relative z-10 max-h-[60vw] xl:max-h-[30vw]">
            <InfiniteTextBar
              text={["User_Experience", "Frontend_Developer", "Usability", "Design", "Testen"]}
              className="md:top-0 -top-[20vw]"
            />
            <InfiniteTextBar
              text={["Figma", "NextJS", "Tailwind", "SCSS", "Umbraco", "Wordpress", "Kentico"]}
              className="top-[13vw]"
              directionLeft
            />
          </div> */}
          <Container>
            <Article className="h-full">
              <section className="grid lg:gap-24 grid-cols-1 lg:grid-cols-6 w-full h-full items-stretch box-border pt-24">
                <Img
                  alt="Marco aan het bureau"
                  src="/images/general/MarcoBureau.jpg"
                  className="object-right-top grayscale-75 opacity-70 max-w-full"
                  classNameWrapper="col-span-1 lg:col-span-4 row-span-3 aspect-video mb-20"
                />
                <P className="text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-3">
                  Ik help mensen graag in het digitale tijdperk.
                </P>
                <P className="text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-2">
                  In een toekomst waarin AI steeds meer op elkaar gaat lijken,
                  werk ik graag aan unieke concepten die echt opvallen.
                </P>
                <P className="text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-3">
                  Geen poespas, altijd vooruitstrevend.
                </P>
              </section>
            </Article>
          </Container>
          <CornerSVG position="left" side="bottom" rotate="rotate-90" />
          <CornerSVG position="right" side="bottom" rotate="rotate-180" />
        </section>

        {/* Project intro — devices fly in here, title shown while they land */}
        <section id="project-intro" className="h-screen flex items-center justify-center text-center">
          <Container>
            <H2>Uitgelichtte Projecten</H2>
          </Container>
        </section>

        {/* Projects — one screen each */}
        <section id="project-kbo" className="h-screen flex text-right">
          <Container>
            <H3 textWhite noMarginTop chapeau="Redesign website voor ouderen binnen budget">
              KBO Tilburg Reeshof
            </H3>
            <NextLink type="primary" href="/projects/herontwerp-ouderen" alignRight>
              Bekijk het project
            </NextLink>
          </Container>
        </section>

        <section id="project-dashboard" className="h-screen flex">
          <Container>
            <H3 textWhite noMarginTop chapeau="Dashboard datavisualisatie ontwerp + ontwikkeling">
              Dashboard YoungOnes
            </H3>
            <NextLink className="flex justify-end w-full" type="primary" href="/projects/yo-dashboard">
              Bekijk het project
            </NextLink>
          </Container>
        </section>

        <section id="project-gwoty" className="h-screen flex text-right">
          <Container>
            <H3 textWhite noMarginTop chapeau="Wedstrijd dashboard ontwerp + ontwikkeling">
              GWOTY Award YoungOnes
            </H3>
            <NextLink type="primary" href="/projects/yo-gwoty-award" alignRight>
              Bekijk het project
            </NextLink>
          </Container>
        </section>

        <section id="project-aanbouw" className="h-screen flex">
          <Container>
            <H3 textWhite noMarginTop chapeau="Commercieel Wordpress website ontwerp + ontwikkeling">
              Standaard Aanbouw
            </H3>
            <NextLink className="flex justify-end w-full" type="primary" href="/projects/standaard-aanbouw">
              Bekijk het project
            </NextLink>
          </Container>
        </section>

        <section id="project-other" className="h-screen flex text-center">
          <Container>
            <H3 textWhite noMarginTop chapeau="Andere projecten; Unity-engine, Blender, pure CSS">
              Bekijk alle projecten
            </H3>
            <NextLink type="primary" href="/projects" alignCenter>
              Alle projecten
            </NextLink>
          </Container>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-4 pt-10 box-border rounded-t-2xl border-b-0 border-white/50 border bg-gradient-to-bl from-color-bg-top via-color-bg-bottom to-color-bg-top"
        >
          <Container>
            <H2 chapeau="Ervaring" />
            <ExperienceContent />
            <Divider />
            <Footer homePage />
          </Container>
        </section>

      </main>

      <LoadingScreen />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const PROJECTS = [
  {
    id: "project-kbo",
    name: "Herontwerp voor ouderen",
    link: "/projects/herontwerp-ouderen",
    img: "/images/Thumbnails/KBOReeshofThumb.png",
    alt: "KBO Tilburg Reeshof Project afbeelding",
    client: "KBO Tilburg Reeshof",
    desc: "Een nieuw herontwerp speciaal voor ouderen die vaak wat meer moeite hebben met webapplicaties.",
  },
  {
    id: "project-dashboard",
    name: "Opdrachtgever dashboard",
    link: "/projects/yo-dashboard",
    img: "/images/Thumbnails/YODashboardThumb.png",
    alt: "Opdrachtgever dashboard project afbeelding",
    client: "YoungOnes",
    desc: "Een nieuw dashboard voor opdrachtgevers om hun data te beheren.",
  },
  {
    id: "project-gwoty",
    name: "GWOTY awards",
    link: "/projects/yo-gwoty-award",
    img: "/images/Thumbnails/YOGwotyThumb.png",
    alt: "GWOTY awards project afbeelding",
    client: "YoungOnes",
    desc: "Een dashboard voor de GWOTY awards periode, waar opdrachtgevers hun projecten kunnen indienen.",
  },
  {
    id: "project-aanbouw",
    name: "Standaard Aanbouw",
    link: "/projects/standaard-aanbouw",
    img: "/images/Thumbnails/StandaardAanbouwThumb.png",
    alt: "Standaard Aanbouw project afbeelding",
    client: "Standaard Aanbouw",
    desc: "Een herontwerp van een persoonlijke aannemer, waarbij de focus ligt op het verbeteren van de gebruikerservaring.",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function CornerSVG({ position, side, rotate = "" }) {
  const posClass = `${position}-0 -${side}-29.5`;
  return (
    <svg
      width="160" height="160" viewBox="0 0 200 200" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-30 h-30 ${posClass} ${rotate}`}
    >
      <path d="M0 0C0 110.457 89.5431 200 200 200H0V0Z" className="fill-color-bg-bottom-light" />
    </svg>
  );
}

function ExperienceContent() {
  const jobs = [
    {
      company: "New Orange",
      role: "Frontend Developer",
      period: "September 2023 - April 2025",
      items: [
        "Ondersteuning en ontwikkeling voor diverse klanten met Kentico of Umbraco CMS",
        "Gebruik van Tailwind, SCSS Sass, cshtml Razor, Javascript",
        ["Zonnebloem", ["Ontwikkeling 75jaar.zonnebloem.nl"]],
        ["Het Noord Brabants museum", ["Ontwikkeling en design grootsinbrabant.nl"]],
        ["Sectorinstituut Transport en Logistiek", ["Ontwikkeling Kentico herontwerp stl.nl", "Ontwikkeling Kentico stl.nl/studentengids"]],
        ["Groene Hart Ziekenhuis", ["Frontend ontwikkeling Umbraco werkenbijghz.nl"]],
        ["Flevoziekenhuis", ["Frontend ontwikkeling Umbraco werkenbijflevoziekenhuis.nl"]],
        ["Human Digital", ["Ontwikkeling Kentico componenten humandigital.nl", "Frontend Ontwikkeling Umbraco componenten blikvangersontwerp.nl"]],
      ],
    },
    {
      company: "YoungOnes",
      role: "Frontend Developer",
      period: "September 2022 - Februari 2023",
      items: [
        "Ontwerp GWOTY award website (Figma)",
        "Ontwikkeling GWOTY award website (NextJS, Api calls en Tailwind)",
        "Ontwerp opdrachtgevers dashboard (Figma)",
        "Ontwikkeling opdrachtgevers dashboard (NextJS, Api calls en Tailwind)",
        "UX testen van diverse ontwerpen",
      ],
    },
    {
      company: "Silverfish",
      role: "Wordpress Frontend Developer",
      period: "November 2019 - Februari 2020",
      items: [
        "Ontwikkel Wordpress website met een goedgekeurd Adobe Illustrator Design",
        "Ontwikkeling met Wordpress, Advanced Custom Fields, CSS, Jquery en PHP",
      ],
    },
  ];

  return (
    <>
      {/* {jobs.map((job) => (
        <div key={job.company} className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          <H2>{job.company}</H2>
          <div className="lg:mt-4 mt-[-50px] mb-20">
            <H3 noMarginTop>{job.role}</H3>
            <P className="text-white text-md lg:text-xl mb-3">{job.period}</P>
            <ul className="list-disc text-white opacity-70 ml-4">
              {job.items.map((item, i) =>
                Array.isArray(item) ? (
                  <Li key={i}>
                    {item[0]}
                    {item[1]?.map((sub, j) => (
                      <Li key={j} className="ml-4 opacity-65"><i>{sub}</i></Li>
                    ))}
                  </Li>
                ) : (
                  <Li key={i}>{item}</Li>
                )
              )}
            </ul>
          </div>
        </div>
      ))} */}
    </>
  );
}