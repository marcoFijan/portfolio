import PageTemplate from "../pageTemplate.js";
import H2 from "@/elements/H2.js";
import P from "@/elements/P.js";
import Img from "@/elements/Img.js";
import ProjectHero from "@/components/project/HeroProject.js";
import Container from "@/components/Container.js";
import Wave from "@/elements/Wave.js";

const projectData = {
  chapeau: "Website voor een grootschalig kunstproject in Brabant",
  title: "Groots in Brabant",
  mainImage: {
    src: "/images/GrootsInBrabant/Hero.jpg",
    alt: "Groots in Brabant Website",
  },
  introParagraphs: [
    "In 2025 ontwikkelde ik de website voor 'Groots, groter, grootst', een uniek samenwerkingsproject rondom de baanbrekende Poolse kunstenaar Magdalena Abakanowicz.",
    "Haar werk werd in een gezamenlijke tentoonstelling getoond op drie prominente locaties: Het TextielMuseum in Tilburg, Het Noordbrabants Museum en het provinciehuis Noord-Brabant in 's-Hertogenbosch.",
    "De website (grootsinbrabant.nl) fungeert als het centrale platform waar bezoekers informatie over dit drieluik kunnen vinden, tickets kunnen kopen, en zich kunnen verdiepen in de indrukwekkende textielsculpturen en installatiekunst van Abakanowicz.",
  ],
  actions: [
    {
      label: "Bekijk de website",
      href: "https://www.grootsinbrabant.nl/",
      type: "primary",
    },
  ],
  projectDetails: [
    { label: "Projectjaar", value: "2025" },
    {
      label: "Projectdoel",
      value:
        "Een centraal platform ontwikkelen voor een driedelige kunsttentoonstelling",
    },
    {
      label: "Doelgroep",
      value: "Kunst- en textielliefhebbers (nationaal en internationaal)",
    },
  ],
};

export default function GrootsInBrabant() {
  return (
    <PageTemplate
      projectPage="grootsinbrabant"
      title="Marco Fijan - Groots in Brabant - Magdalena Abakanowicz Tentoonstelling"
    >
      {/* HERO */}
      <ProjectHero {...projectData} />

      <section className="bg-white relative z-10 mb-30 inverted-card py-20 lg:py-20">
        {/* CONCEPT & DESIGN */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Drie locaties, één platform">Het Concept</H2>
            <P>
              Omdat de tentoonstelling verspreid was over Het TextielMuseum, Het
              Noordbrabants Museum en het provinciehuis, was er behoefte aan een
              overkoepelende website die de bezoeker meeneemt in het volledige
              verhaal. De uitdaging was om de indrukwekkende, rauwe identiteit
              van de kunstenaar te combineren met de huisstijlen en praktische
              informatie van drie verschillende instanties.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 relative">
            <Img
              src="/images/GrootsInBrabant/Concept.jpg"
              alt="Concept en design van Groots in Brabant"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        {/* EXHIBITION INFO */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:order-2 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="De wereld van Magdalena Abakanowicz">
              Drieluik overzicht
            </H2>
            <P>
              De website biedt een diepgaande kijk op de drie verschillende
              exposities: <i>Human Nature</i> in Het Noordbrabants Museum,
              <i>Everything is made of fiber</i> in het TextielMuseum, en het
              enorme kunstwerk <i>Bois le Duc</i> in het provinciehuis. Door
              middel van overzichtelijke navigatie en grote, sprekende beelden
              krijgen bezoekers direct een gevoel bij de monumentale textiele
              sculpturen.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Img
              src="/images/GrootsInBrabant/Expositie.jpg"
              alt="Overzicht van de drie exposities"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        {/* AGENDA & ACTIVITIES */}
        <Container grid>
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Interactief randprogramma">Agenda en Activiteiten</H2>
            <P>
              Naast de vaste tentoonstellingen bevat de website een dynamische
              agenda voor een breed randprogramma. Van speciale
              avondopenstellingen in samenwerking met de Poolse gemeenschap, tot
              punch-workshops en buitenvoorstellingen van choreograaf Nicole
              Beutler. De overzichtelijke weergave maakt het voor gebruikers
              heel eenvoudig om activiteiten te ontdekken en te plannen.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 relative">
            <Img
              src="/images/GrootsInBrabant/Agenda.jpg"
              alt="Activiteiten en agenda overzicht"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>
        <Wave />

        {/* BOTTOM DECORATIVE WAVE */}
        <svg
          className="w-full translate-y-[99%] text-white -scale-y-100 absolute bottom-0 left-0"
          viewBox="0 0 1440 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </section>
    </PageTemplate>
  );
}
