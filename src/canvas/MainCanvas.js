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

import H1 from "../elements/H1.js";
import SubH1 from "../elements/SubH1.js";
import H2 from "../elements/H2.js";
import SubH2 from "../elements/SubH2.js";
import Img from "../elements/Img.js";

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
              <SectionHome amountOfPages={1}>
                <H1 darkBackground>Titel</H1>
                {/* <SubH1>SubTitel</SubH1> */}
              </SectionHome>

              {/* Information about me [2 page] */}
              {/* <AboutSection mobile={mobile} /> */}
              <SectionHome amountOfPages={mobile ? "3" : "2"}>
                <Article customClasses="grid gap-5 grid-cols-[1fr_1fr] grid-flow-dense w-full h-full">
                  <Img
                    alt="Altje"
                    src="/images/marcoPointing.png"
                    customClasses="col-span-1 row-span-3"
                  />
                  <div className="bg-red-400 col-span-1 row-span-1"></div>
                  <div
                    className="bg-red-400 col-span-1 row-span-3
"
                  ></div>
                  <div className="bg-red-400 col-span-1 row-span-1"></div>
                  <div className="bg-red-400 col-span-1 row-span-1"></div>
                  <div className="bg-red-400 col-span-1 row-span-1"></div>
                </Article>
              </SectionHome>

              {/* Overview with a couple of projects I am proud of [6 pages] */}
              {/* <PortfolioSection /> */}
              <SectionHome amountOfPages={6}>
                <h1>test</h1>
              </SectionHome>

              {/* Contactpage with a form [1.5 page] */}
              {/* <ContactSection homePage={true} /> */}
              <SectionHome amountOfPages={1.5}>
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
