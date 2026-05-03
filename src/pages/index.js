"use client";

import { useState, useEffect } from "react";
import { useScrollOffsets } from "@/hooks/Usescrolloffsets.js";

import Container from "@/components/Container";
import Divider from "@/elements/Divider";
import LoadingScreen from "@/collections/LoadingScreen";
import HeroHome from "@/components/home/HeroHome";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
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
    const check = () => setMobile(window.innerWidth <= 1400);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (mobile) {
    return (
      <PageTemplate homePage>
        <HeroHome mobile={true} />
        <AboutSection className="dark" />
        <ProjectsSection mobile={true} />
        <ExperienceSection mobile={true} />
      </PageTemplate>
    );
  }

  return (
    <PageTemplate homePage>
      <FixedScene offsets={offsets} />
      <HeroHome className="dark" mobile={false} />
      <AboutSection className="dark" mobile={false} />
      <ProjectsSection className="dark" mobile={false} />
      <ExperienceSection className="dark" mobile={false} />
      <LoadingScreen />
    </PageTemplate>
  );
}
