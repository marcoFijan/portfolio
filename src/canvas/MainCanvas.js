"use client";

// import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useEffect } from "react";
import Image from "next/image";

// import LoadingScreen from "../organisms/LoadingScreen.js";
// import Footer from "../organisms/Footer.js";
import Smartphone from "../models/Smartphone.js";
import Laptop from "../models/Laptop.js";
import SectionHome from "../sections/SectionHome.js";
import Container from "../sections/Container.js";
import Article from "../sections/Article.js";
import Section from "../sections/Section.js";
import SectionContact from "../sections/ContactSection.js";
import Footer from "../sections/Footer.js";

import H1 from "../elements/H1.js";
import SubH1 from "../elements/SubH1.js";
import H2 from "../elements/H2.js";
import SubH2 from "../elements/SubH2.js";
import H3 from "../elements/H3.js";
import Img from "../elements/Img.js";
import P from "../elements/P.js";
import Divider from "../elements/Divider.js";
import NextLink from "@/elements/NextLink";
import ReadMore from "@/collections/ReadMore.js";
import Strong from "@/elements/Strong.js";

import testImgUrl from "../../public/images/KBOReeshof/Persona1.jpg";

import {
  ScrollControls,
  Scroll,
  Environment,
  MeshDistortMaterial,
  Sparkles,
  Circle,
  Loader,
  Html,
  Text,
} from "@react-three/drei";

export default function MainCanvas({}) {
  const [screenSize, setScreenSize] = useState(0);
  const [pages, setPages] = useState(0);
  const [mobile, setMobile] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimension = () => {
        setScreenSize(window.innerWidth);
      };
      window.addEventListener("resize", updateDimension);

      // if (window.innerWidth <= 832) {
      if (window.innerWidth <= 1000) {
        setPages(11.5);
        setMobile(true);
      } else {
        setPages(11);
        setMobile(false);
      }

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, [screenSize]);

  useEffect(() => {}, []);

  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        className="h-full w-full overflow-hidden"
        camera={{ position: [0, 0, 7] }}
      >
        <ambientLight color={"white"} intensity={0.3} />

        <ScrollControls pages={pages} damping={0.1}>
          <Environment
            blur={0}
            files="../images/Environment/studio_small_08_1k.hdr"
          />

          <Laptop mobile={mobile} />
          {/* <Suspense fallback={null}> */}
          <Smartphone mobile={mobile} />
          {/* </Suspense> */}
          <Scroll>
            {/* <Circle args={[1, 100, 200]} scale={5} position={[0, 0, -5]}>
              <MeshDistortMaterial
                color="#e5e7f9"
                attach="material"
                distort={0.5}
                speed={0.6}
              />
            </Circle> */}
          </Scroll>
          <Scroll html className="w-full">
            {/* Introduction animation [1 page] */}
            {/* <HeroSection /> */}
            <Container>
              <SectionHome
                amountOfPages={1}
                className={"pt-14 relative flex flex-col"}
              >
                <article className="relative mt-auto pt-16 mb-16 flex flex-col justify-end z-10 w-full h-full max-h-[1000px] pb-12 ">
                  <H1 className="mb-auto pb-8">
                    Van een wens, <br />
                    naar een product. <br />
                    <Strong>Marco Fijan</Strong>
                  </H1>
                  <section className="relative py-12 after:max-h-[400px] before:max-h-[400px] after:border after:border-white after:rounded after:border-opacity-10 after:w-[115%] after:-right-8 after:absolute after:h-[120%] after:z-[-3] after:-bottom-[20%] before:h-[120%] before:absolute before:bottom-0 before:w-[115%] before:-left-[10%] before:bg-gradient-to-tr before:from-colorBgLight/[0.01] before:to-colorBgLight/[0.8] before:z-[-2] before:rounded-lg">
                    <section className="max-w-[60%] flex flex-col gap-8">
                      <P>
                        Ik ben een front-end ontwikkelaar met oog voor UX en
                        detail. Mijn passie? Toegankelijke en
                        gebruiksvriendelijke websites bouwen, voor iedereen en
                        elk budget. Samen maken we jouw online visie
                        werkelijkheid!
                      </P>
                      <NextLink
                        className={"self-start group"}
                        type="primary"
                        arrow
                      >
                        Neem contact op!
                      </NextLink>
                    </section>

                    <Image
                      width={700}
                      height={900}
                      src="/images/marcoCrossedArms.png"
                      alt="Marco crossing arms"
                      className="absolute right-0 bottom-0 object-contain w-40% max-w-[550px] max-h-[400px]"
                    ></Image>
                  </section>
                </article>

                {/* <SubH1>SubTitel</SubH1> */}
                {/* <div className="border border-white border-t-0 rounded-3xl border-opacity-30 w-full absolute h-4/5 bottom-0 mb-10 "></div> */}
              </SectionHome>

              {/* Information about me [2 page] */}
              {/* <AboutSection mobile={mobile} /> */}
            </Container>
            <Container>
              <SectionHome
                amountOfPages={mobile ? "3" : "2"}
                className={"flex flex-col"}
              >
                <H2>Welkom!</H2>
                <Article customClasses="grid lg:gap-16 grid-cols-1 lg:grid-cols-[1fr_1fr] grid-flow-dense w-full h-full grow">
                  <Img
                    alt="Altje"
                    src="/images/general/MarcoBureau.jpg"
                    customClasses="col-span-1 row-span-2 object-right"
                  />

                  {/* <div
                    className="h-screen w-full"
                    style={{
                      "mask-image":
                        "linear-gradient(to right, rgba(0, 0, 0, 1.0) 50%, transparent 100%)",
                    }}
                  >
                    <div className="bg-[url('/images/marcoPointing.png')] w-full h-full bg-cover">

                    </div>
                  </div> */}
                  <Section>
                    <H3>Van ontwerp tot realisatie</H3>
                    <P>
                      Het ontwerpen en ontwikkelen van gebruiksvriendelijke
                      webapplicaties is mijn passie. Ik geniet van het bedenken
                      van ideeën, itereren op deze concepten en ze testen met de
                      doelgroep. Ik zet altijd de gebruikerservaring voorop en
                      werk hard om deze continu te verbeteren.
                    </P>
                    <P>
                      Door de afgelopen jaren heen heb ik diverse tools en
                      frameworks kunnen gebruiken om tot een eindproduct te
                      komen. Mijn favoriete tools zijn Figma om te ontwerpen,
                      Svelte om te ontwikkelen en Sass/Scss om vorm te geven aan
                      de producten.
                    </P>
                    {/* <P>Ik vind het daarna vervolgens ook erg leuk om deze unieke ideeën en ervaringen te realiseren tot een eindproduct. Om echt iets te leveren waar zowel ik als de klant achter staat.</P> */}
                  </Section>
                  <Section>
                    <H3>Ervaring</H3>
                    <P>
                      Na mijn Havo-Diploma begon ik in 2016 aan de studie
                      Informatica op Hogeschool Avans in Den Bosch. Na hier in
                      2017 mijn propedeuse gehaald te hebben kwam ik erachter
                      dat puur alleen coderen niet voor mij was weggelegd.
                    </P>
                    <P>
                      Ik wilde meer, ik wilde mensen helpen en gebruik maken van
                      mijn creativiteit. Ik begon daarom aan een nieuwe studie
                      in Amsterdam waar ik mijn Bachelor of Science haalde in
                      Communicatie en Multimedia Design.
                    </P>
                  </Section>
                  <Section>
                    <H3>Mijn achtergrond in de IT</H3>
                    <P>
                      In 2016 begon ik aan de studie Informatica op Hogeschool
                      Avans in Den Bosch. Na hier in 2017 mijn propedeuse
                      gehaald te hebben kwam ik erachter dat puur alleen coderen
                      niet voor mij was weggelegd.
                    </P>
                    <P>
                      Ik wilde meer, ik wilde mensen helpen, unieke oplossingen
                      bedenken en gebruik maken van mijn creativiteit.
                    </P>
                  </Section>
                  <Section>
                    <H3>Op naar een nieuwe studie...</H3>
                    <P>
                      Ik besloot daarom om mijn opleiding Informatica stop te
                      zetten om vervolgens te starten aan een nieuw avontuur in
                      de grootste stad van Nederland.
                    </P>
                    <P>
                      In Amsterdam begon ik aan de studie Communicatie en
                      Multimedia Design en na 4 jaar, in 2022 haalde ik hier
                      mijn Bachelor.
                    </P>
                  </Section>
                </Article>
                <Divider></Divider>
              </SectionHome>
              {/* Overview with a couple of projects I am proud of [6 pages] */}
              {/* <PortfolioSection /> */}
              <SectionHome amountOfPages={"1"}>
                <H2 chapeau={"Mijn projecten"}>Portfolio</H2>
                <P>
                  De afgelopen jaren heb ik verschillende diverse projecten
                  ondernomen, waarbij ik mijn vaardigheden op het gebied van
                  design en development verder heb ontwikkeld. Mijn werk
                  varieert van UX/UI-design tot het daadwerkelijk realiseren van
                  frontend-oplossingen. In elk project streef ik ernaar de
                  gebruikerservaring op nummer 1 te zetten.
                </P>
                <P>
                  In de projecten die ik heb uitgevoerd, heb ik met
                  verschillende teams samengewerkt en gebruik gemaakt van
                  verschillende technologieën en platforms. Dit varieerde van
                  het ontwikkelen van responsieve websites tot het ontwerpen en
                  testen van nieuwe concepten.
                </P>
                <P>
                  Door middel van mijn portfolio wil ik u een overzicht bieden
                  van de verschillende facetten van mijn werk. Hieronder vindt u
                  enkele projecten die ik heb gerealiseerd, met aandacht voor
                  het proces, de technieken die ik heb toegepast, en de
                  resultaten die zijn behaald. Elk project biedt een unieke
                  inkijk in mijn aanpak en mijn vermogen om zowel creatieve als
                  technische uitdagingen te tackelen.
                </P>
                <P>
                  Ik nodig u uit om mijn werk te bekijken en te ontdekken hoe ik
                  uw digitale visie kan helpen realiseren.
                </P>
              </SectionHome>

              {/* Contactpage with a form [1.5 page] */}
              {/* <ContactSection homePage={true} /> */}
              <SectionHome amountOfPages={"1"} className={"text-right"}>
                <H2 chapeau={"Redesign website voor ouderen binnen budget"}>
                  KBO Tilburg Reeshof
                </H2>
                <ReadMore buttonText={"Lees meer"} className="ml-auto">
                  <H3>Een website voor ouderen</H3>
                  <P>
                    Ik merkte dat er te weinig aandacht is voor ouderen op
                    digitaal gebied, en besloot te onderzoeken hoe ouderen
                    websites gebruiken en hoe deze geoptimaliseerd kunnen worden
                    voor hen. Bij het onderzoeken van lokale initiatieven voor
                    ouderen kwam ik uit bij KBO Tilburg Reeshof, een afdeling
                    van KBO Brabant, die lokale seniorenverenigingen verbindt.
                  </P>
                  <P>
                    KBO Tilburg Reeshof heeft meer dan 700 leden en regelt
                    verschillende activiteiten tegen lage kosten. Ze willen hun
                    ledenaantal verder vergroten en hopen dat ouderen vaker
                    gebruik maken van hun website, waar belangrijke informatie
                    te vinden is.
                  </P>
                  <div className="mt-8">
                    <NextLink
                      href="/projecten/kbo-reeshof"
                      arrow
                      type="primary"
                    >
                      Lees meer
                    </NextLink>
                  </div>
                </ReadMore>
              </SectionHome>
              <SectionHome amountOfPages={"1"}>
                <H2
                  chapeau={"Dashboard datavisualisatie ontwerp + ontwikkeling"}
                >
                  Dashboard YoungOnes
                </H2>
              </SectionHome>
              <SectionHome amountOfPages={"1"} className={"text-right"}>
                <H2 chapeau={"Wedstrijd dashboard ontwerp + ontwikkeling"}>
                  GWOTY Award YoungOnes
                </H2>
              </SectionHome>
              <SectionHome amountOfPages={"1"}>
                <H2
                  chapeau={
                    "Commercieel Wordpress website ontwerp + ontwikkeling"
                  }
                >
                  Standaard Aanbouw
                </H2>
              </SectionHome>
              <SectionHome amountOfPages={"0.5"} className={"text-right"}>
                <H2
                  chapeau={"Andere projecten; Unity-engine, Blender, pure CSS"}
                >
                  Andere projecten
                </H2>
              </SectionHome>
              <SectionHome amountOfPages={"0.6"}>
                <Divider />
                <H2 chapeau={"Ervaring"}></H2>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                  <H2>Human Digital</H2>
                  <div className="mt-4 mb-20">
                    <H3>Frontend Developer</H3>
                    <P>September 2023 - heden</P>
                    <small></small>
                    <ul className="list-disc text-white opacity-50 ml-4">
                      <li>
                        Ondersteuning en ontwikkeling voor diverse klanten met
                        Kentico of Umbraco CMS
                      </li>
                      <li>Zonnebloem - Ontwikkeling 75jaar.zonnebloem.nl</li>
                      <li>
                        Het Noord Brabants museum - Ontwikkeling
                        grootsinbrabant.nl
                      </li>
                    </ul>
                  </div>
                  <H2>Human Digital</H2>
                  <div>
                    <H3>Frontend Developer</H3>
                    <P>September 2023 - heden</P>
                    <ul>
                      <li>STL - Fase 2 herontwerp</li>
                      <li>STL - Werknemersboekje</li>
                      <li>Flevoziekenhuis - Werken bij</li>
                      <li>GHZ - Werken bij</li>
                      <li>Zonnebloem - 75 jaar website</li>
                      <li>Brabants museum - grootsinbrabant.nl</li>
                    </ul>
                    <P>Fase 2 Frontend ontwikkeling</P>
                  </div>
                </div>
              </SectionHome>
              <SectionHome amountOfPages={"1"}>
                <Divider />
                <H2 chapeau={"Interesse?"}>Neem contact met me op!</H2>
                <SectionContact />
              </SectionHome>
              <Footer></Footer>
            </Container>

            {/* Footer [0.5 page] */}
            {/* <Footer homePage={true} /> */}
          </Scroll>
        </ScrollControls>
      </Canvas>
      {/* <LoadingScreen /> */}
    </div>
  );
}
