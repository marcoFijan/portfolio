import PageTemplate from "../pageTemplate";
import Container from "@/components/Container";
import ContactSection from "@/components/ContactSection.js";
import ProjectSection from "@/elements/Project";

import H1 from "@/elements/H1";
import H2 from "@/elements/H2";
import H3 from "@/elements/H3";
import P from "@/elements/P";
import Button from "@/elements/Button";

export default function Projects() {
  return (
    <PageTemplate title="Marco Fijan - Projecten">
      <Container article className="dark">
        <div className="text-center">
          <H1
            big
            className="text-center"
            chapeau={"Kort overzicht van alle projecten"}
          >
            Alle projecten
          </H1>
        </div>
        <P intro>
          Hier vind je een overzicht van alle projecten die ik heb gemaakt. Elk
          project heeft zijn eigen unieke focus en doel, van het herontwerpen
          van webapplicaties tot het creëren van datavisualisaties. Klik op een
          project om meer te leren over de specifieke uitdagingen en oplossingen
          die ik heb toegepast.
        </P>
      </Container>
      <section className="relative bg-white mt-24 lg:mt-36 2xl:mt-48 py-48">
        <svg
          className="w-full -translate-y-[99%] text-white absolute top-0 left-0"
          viewBox="0 0 1440 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z"
            fill="currentColor"
          ></path>
        </svg>
        <Container grid className="!gap-4 lg:!gap-8 ">
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-6 2xl:col-start-auto">
            <ProjectSection
              projectName={"Herontwerp voor ouderen"}
              projectLink={"/projects/kbo-tilburg-reeshof"}
              imgSrc={"/images/Thumbnails/KBOReeshofThumb.png"}
              imgAlt={"KBO Tilburg Reeshof Project afbeelding"}
              projectGiver={"KBO Tilburg Reeshof"}
              projectChapeau={
                "Een nieuw herontwerp speciaal voor ouderen die vaak wat meer moeite hebben met webapplicaties."
              }
            ></ProjectSection>
          </section>
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-6 2xl:col-start-auto">
            <ProjectSection
              projectName={"Opdrachtgever dashboard"}
              projectLink={"/projects/yo-dashboard"}
              imgSrc={"/images/Thumbnails/YODashboardThumb.png"}
              imgAlt={"Opdrachtgever dashboard project afbeelding"}
              projectGiver={"YoungOnes"}
              projectChapeau={
                "Een nieuw dashboard voor opdrachtgevers om hun data te beheren."
              }
            ></ProjectSection>
          </section>
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-6 2xl:col-start-auto">
            <ProjectSection
              projectName={"GWOTY awards"}
              projectLink={"/projects/yo-gwoty-award"}
              imgSrc={"/images/Thumbnails/YOGwotyThumb.png"}
              imgAlt={"GWOTY awards project afbeelding"}
              projectGiver={"YoungOnes"}
              projectChapeau={
                "Een dashboard voor de GWOTY awards periode, waar opdrachtgevers hun projecten kunnen indienen."
              }
            ></ProjectSection>
          </section>
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-6 2xl:col-start-auto">
            <ProjectSection
              projectName={"Standaard Aanbouw"}
              projectLink={"/projects/standaard-aanbouw"}
              imgSrc={"/images/Thumbnails/StandaardAanbouwThumb.png"}
              imgAlt={"Standaard Aanbouw project afbeelding"}
              projectGiver={"Standaard Aanbouw"}
              projectChapeau={
                "Een herontwerp van een persoonlijke aannemer, waarbij de focus ligt op het verbeteren van de gebruikerservaring."
              }
            ></ProjectSection>
          </section>
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-6 2xl:col-start-auto">
            <ProjectSection
              projectName={"Datavisualisatie fietsverkeer"}
              projectLink={"/projects/ring-ring"}
              imgSrc={"/images/Thumbnails/RingRingThumb.jpg"}
              imgAlt={"Ring Ring project afbeelding"}
              projectGiver={"Ring Ring"}
              projectChapeau={
                "Een datavisualisatie dashboard voor beleidsmakers van Ring Ring, gericht op het verbeteren van de fietsinfrastructuur."
              }
            ></ProjectSection>
          </section>
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-6 2xl:col-start-auto">
            <ProjectSection
              projectName={"Herontwerp reisartikelen.nl"}
              projectLink={"/projects/reisartikelen"}
              imgSrc={"/images/Reisartikelen/Thumb.jpg"}
              imgAlt={"Reisartikelen herontwerp afbeelding"}
              projectGiver={"Reisartikelen"}
              projectChapeau={
                "Een herontwerp van de homepagina van reisartikelen.nl met de focus op corona en thuisvakanties"
              }
            ></ProjectSection>
          </section>
        </Container>
      </section>
    </PageTemplate>
  );
}
