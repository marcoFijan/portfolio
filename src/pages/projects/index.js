import PageTemplate from "../pageTemplate";
import Container from "@/sections/Container";
import ContactSection from "@/sections/ContactSection.js";
import ProjectSection from "@/elements/Project";

import H1 from "@/elements/H1";
import H2 from "@/elements/H2";
import H3 from "@/elements/H3";
import P from "@/elements/P";
import NextLink from "@/elements/NextLink";

export default function Projects() {
  return (
    <PageTemplate title="Marco Fijan - Projecten">
      <Container>
        <article>
          <H1 big className="" chapeau={"Kort overzicht van alle projecten"}>
            Alle projecten
          </H1>
          <P intro>
            Hier vind je een overzicht van alle projecten die ik heb gemaakt.
            Elk project heeft zijn eigen unieke focus en doel, van het
            herontwerpen van webapplicaties tot het creëren van
            datavisualisaties. Klik op een project om meer te leren over de
            specifieke uitdagingen en oplossingen die ik heb toegepast.
          </P>
          <P intro>
            Elk project is een reflectie van mijn groei als ontwerper en mijn
            toewijding aan het verbeteren van de gebruikerservaring. Ik nodig je
            uit om door mijn werk te bladeren en te ontdekken hoe ik mijn
            vaardigheden heb toegepast om impactvolle oplossingen te creëren.
          </P>
          <div className="flex flex-col gap-8 lg:gap-12 xl:gap-16 w-full my-20">
            <section className="w-full mx-auto xl:max-w-[80%]">
              <ProjectSection
                projectName={"Herontwerp voor ouderen"}
                projectLink={"/projects/herontwerp-ouderen"}
                imgSrc={"/images/Thumbnails/KBOReeshofThumb.png"}
                imgAlt={"KBO Tilburg Reeshof Project afbeelding"}
                projectGiver={"KBO Tilburg Reeshof"}
                projectChapeau={
                  "Een nieuw herontwerp speciaal voor ouderen die vaak wat meer moeite hebben met webapplicaties."
                }
              ></ProjectSection>
            </section>
            <section className="w-full mx-auto xl:max-w-[80%] gap-8 ">
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
            <section className="w-full mx-auto xl:max-w-[80%] gap-8 ">
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
            <section className="w-full mx-auto xl:max-w-[80%] gap-8 ">
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
            <section className="w-full mx-auto xl:max-w-[80%] gap-8 ">
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
            <section className="w-full mx-auto xl:max-w-[80%] gap-8 ">
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
          </div>
        </article>
      </Container>
    </PageTemplate>
  );
}
