"use client";

// import Projects from "./PortfolioProjects.jsx";
import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useEffect } from "react";
// import LoadingScreen from "../organisms/LoadingScreen.js";
// import Footer from "../organisms/Footer.js";
import Smartphone from "../models/Smartphone.js";
import Laptop from "../models/Laptop.js";
import SectionHome from "../sections/SectionHome.js";
import Container from "../sections/Container.js";
import Article from "../sections/Article.js";
import Section from "../sections/Section.js";

import H1 from "../elements/H1.js";
import SubH1 from "../elements/SubH1.js";
import H2 from "../elements/H2.js";
import SubH2 from "../elements/SubH2.js";
import H3 from "../elements/H3.js";
import Img from "../elements/Img.js";
import P from "../elements/P.js";
import Divider from "../elements/Divider.js";

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

      if (window.innerWidth <= 832) {
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
            files="../images/Environment/brown_photostudio_02_1k.hdr"
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
              <SectionHome amountOfPages={1} className={"pt-40"}>
                <H1 darkBackground chapeau={"Over mij"}>
                  Van een wens naar een product. <br></br>
                  Daar help ik graag bij!
                </H1>
                {/* <SubH1>SubTitel</SubH1> */}
              </SectionHome>

              {/* Information about me [2 page] */}
              {/* <AboutSection mobile={mobile} /> */}
              <SectionHome amountOfPages={mobile ? "3" : "2"}>
                <H2>Welkom!</H2>
                <Article customClasses="grid gap-16 grid-cols-[1fr_1fr] grid-flow-dense w-full">
                  <Img
                    alt="Altje"
                    src="/images/marcoPointing.png"
                    customClasses="col-span-1 row-span-4"
                  />
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
                      de producten.{" "}
                    </P>
                    {/* <P>Ik vind het daarna vervolgens ook erg leuk om deze unieke ideeën en ervaringen te realiseren tot een eindproduct. Om echt iets te leveren waar zowel ik als de klant achter staat.</P> */}
                  </Section>
                  <Img
                    alt="Altje"
                    src="/images/marcoPointing.png"
                    customClasses="col-span-1 row-span-4"
                  />
                  <Section>
                    <H3>Ervaring</H3>
                    <P>
                      Na mijn Havo-Diploma begon ik in 2016 aan de studie
                      Informatica op Hogeschool Avans in Den Bosch. Na hier in
                      2017 mijn propedeuse gehaald te hebben kwam ik erachter
                      dat puur alleen coderen niet voor mij was weggelegd.{" "}
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
              </SectionHome>

              <Divider></Divider>

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
              <SectionHome amountOfPages={"1"}>
                <h1>test</h1>
              </SectionHome>
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
