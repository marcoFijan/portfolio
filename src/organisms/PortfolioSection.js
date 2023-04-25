import Link from "next/link";
import Article from "../molecules/Article";

export default function PortfolioSection() {
  return (
    <div className="max-w-wrapper mx-auto w-full px-8">
      <Article
        customClassName={"h-screen text-left"}
        transparent={true}
        header1={"Portfolio"}
        header2={"Mijn projecten"}
        paragraph1={
          "De afgelopen jaren heb ik verschillende diverse projecten ondernomen. De projecten verschillen van UX/UI-design tot daadwerkelijke frontend. Hieronder vind u enkele projecten"
        }
      ></Article>
      <Article
        customClassName={"h-screen text-right"}
        transparent={true}
        header1={"KBO Tilburg Reeshof"}
        header2={"Redesign website met de focus voor ouderen binnen budget"}
        linkHref={"/projects/kbo-tilburg-reeshof"}
        linkText={"Bekijk het project"}
      ></Article>
      <Article
        customClassName={"h-screen text-left"}
        transparent={true}
        header1={"GWOTY Award - YoungOnes"}
        header2={"Stage project met NextJS, Tailwind en Figma"}
        linkHref={"/projects/gwoty-award-youngones"}
        linkText={"Bekijk het project"}
      ></Article>
      <Article
        customClassName={"h-screen text-right"}
        transparent={true}
        header1={"Dashboard - YoungOnes"}
        header2={"Stage project met NextJS, Tailwind Figma en ChartJS"}
        linkHref={"/projects/dashboard-youngones"}
        linkText={"Bekijk het project"}
      ></Article>
      <Article
        customClassName={"h-screen text-left"}
        transparent={true}
        header1={"Ring-Ring Dashboard"}
        header2={"Datavisualisatie project met D3"}
        linkHref={"/projects/ring-ring-dashboard"}
        linkText={"Bekijk het project"}
      ></Article>
      <Article
        customClassName={"h-screen text-right"}
        transparent={true}
        header1={"Standaard Aanbouw"}
        header2={"Commercieel Wordpress website voor een aannemer"}
        linkHref={"/projects/standaard-aanbouw"}
        linkText={"Bekijk het project"}
      ></Article>
      <Article
        customClassName={"h-screen text-left"}
        transparent={true}
        header1={"Kleine projecten"}
        header2={
          "Andere projecten uit diverse achtergronden waaronder Unity-engine, Blender, pure CSS"
        }
        linkHref={"/projects/standaard-aanbouw"}
        linkText={"Bekijk het project"}
      ></Article>
    </div>
  );
}
