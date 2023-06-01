import Link from "next/link";
import Section from "../molecules/Section";

export default function PortfolioSection() {
  const darkBackground = true;
  return (
    <article className="max-w-wrapper mx-auto w-full px-articlePaddingMobile md:px-articlePadding">
      <Section
        customClassName={"h-screen text-left"}
        darkBackground={darkBackground}
        title={"Portfolio"}
        subTitle={"Mijn projecten"}
        paragraph1a={
          "De afgelopen jaren heb ik verschillende diverse projecten ondernomen. De projecten verschillen van UX/UI-design tot daadwerkelijke frontend. Hieronder vind u enkele projecten."
        }
      ></Section>
      <Section
        customClassName={"h-screen text-right"}
        darkBackground={darkBackground}
        header={"KBO Tilburg Reeshof - 2022"}
        subHeader={"Redesign website met de focus voor ouderen binnen budget"}
        linkHref={"/projects/kbo-tilburg-reeshof"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-left"}
        darkBackground={darkBackground}
        header={"Dashboard YoungOnes - 2022"}
        subHeader={"Stage project met NextJS, Tailwind Figma en ChartJS"}
        linkHref={"/projects/gwoty-award-youngones"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-right"}
        darkBackground={darkBackground}
        header={"GWOTY Award YoungOnes - 2021"}
        subHeader={"Stage project met NextJS, Tailwind en Figma"}
        linkHref={"/projects/dashboard-youngones"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-left"}
        darkBackground={darkBackground}
        header={"Standaard Aanbouw - 2020"}
        subHeader={"Commercieel Wordpress website voor een aannemer"}
        linkHref={"/projects/standaard-aanbouw"}
        linkText={"Bekijk het project"}
      ></Section>
      <Section
        customClassName={"h-screen text-right"}
        darkBackground={darkBackground}
        header={"Andere projecten"}
        subHeader={
          "Andere projecten uit diverse achtergronden waaronder Unity-engine, Blender, pure CSS"
        }
        linkHref={"/projects"}
        linkText={"Bekijk het project"}
      ></Section>
    </article>
  );
}
