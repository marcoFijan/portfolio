import Link from "next/link";
import Section from "../molecules/Section";

export default function PortfolioSection() {
  const darkBackground = true;
  return (
    <article className="max-w-wrapper mx-auto w-full px-8">
      <Section
        customClassName={"h-screen text-left"}
        darkBackground={darkBackground}
        title={"Portfolio"}
        subTitle={"Mijn projecten"}
        paragraph1={
          "De afgelopen jaren heb ik verschillende diverse projecten ondernomen. De projecten verschillen van UX/UI-design tot daadwerkelijke frontend. Hieronder vind u enkele projecten"
        }
      ></Section>
      <Section
        customClassName={"h-screen text-right"}
        darkBackground={darkBackground}
        header={"KBO Tilburg Reeshof"}
        subHeader={"Redesign website met de focus voor ouderen binnen budget"}
        linkHref={"/projects/kbo-tilburg-reeshof"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-left"}
        darkBackground={darkBackground}
        header={"GWOTY Award - YoungOnes"}
        subHeader={"Stage project met NextJS, Tailwind en Figma"}
        linkHref={"/projects/gwoty-award-youngones"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-right"}
        darkBackground={darkBackground}
        header={"Dashboard - YoungOnes"}
        subHeader={"Stage project met NextJS, Tailwind Figma en ChartJS"}
        linkHref={"/projects/dashboard-youngones"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-left"}
        darkBackground={darkBackground}
        header={"Ring-Ring Dashboard"}
        subHeader={"Datavisualisatie project met D3"}
        linkHref={"/projects/ring-ring-dashboard"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-right"}
        darkBackground={darkBackground}
        header={"Standaard Aanbouw"}
        subHeader={"Commercieel Wordpress website voor een aannemer"}
        linkHref={"/projects/standaard-aanbouw"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-left"}
        darkBackground={darkBackground}
        header={"Kleine projecten"}
        subHeader={
          "Andere projecten uit diverse achtergronden waaronder Unity-engine, Blender, pure CSS"
        }
        linkHref={"/projects/standaard-aanbouw"}
        linkText={"Bekijk het project"}
      ></Section>
    </article>
  );
}
