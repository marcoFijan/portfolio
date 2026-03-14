"use client";

import { useState, useEffect } from "react";
import { useScrollOffsets } from "@/hooks/Usescrolloffsets.js";

// Sections using @ alias
import Container from "@/sections/Container";
import Divider from "@/elements/Divider";
import LoadingScreen from "@/collections/LoadingScreen";
import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import ProjectsSection from "@/sections/home/ProjectsSection";
import ExperienceSection from "@/sections/home/ExperienceSection";
import FixedScene from "@/canvas/FixedCanvas";
import PageTemplate from "./pageTemplate";

const SECTION_SELECTORS = {
  hero: "#hero",
  heroMid: "#hero-mid",
  heroEnd: "#hero-end",
  about: "#about",
  aboutEnd: "#about-end",
  projectIntro: "#project-intro",
  project1: "#project-kbo",
  project2: "#project-dashboard",
  project3: "#project-gwoty",
  project4: "#project-aanbouw",
  project5: "#project-other",
  experience: "#experience",
};

export default function MainCanvas() {
  const [mobile, setMobile] = useState(false);
  const offsets = useScrollOffsets(SECTION_SELECTORS);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 1000);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (mobile) {
    return (
      <div className="w-full">
        <Container>
          <HeroSection mobile={true} />
          <AboutSection mobile={true} />
          <Divider />
          <ProjectsSection mobile={true} />
          <Divider />
        </Container>
        <ExperienceSection mobile={true} />
      </div>
    );
  }

  return (
    <PageTemplate homePage>
      <FixedScene mobile={mobile} offsets={offsets} />

      {/* <div className="relative z-10"> */}
      <HeroSection className="dark" mobile={false} />
      <AboutSection className="dark" mobile={false} />
      <ProjectsSection className="dark" mobile={false} />
      <ExperienceSection className="dark" mobile={false} />
      {/* </div> */}

      <LoadingScreen />
    </PageTemplate>
  );
}
