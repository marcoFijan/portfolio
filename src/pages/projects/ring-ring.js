import PageTemplate from "../pageTemplate.js";
import H2 from "@/elements/H2.js";
import P from "@/elements/P.js";
import Img from "@/elements/Img.js";
import ProjectHero from "@/components/project/HeroProject.js";
import Container from "@/components/Container.js";
import Wave from "@/elements/Wave.js";

const projectData = {
  chapeau: "Dashboard voor beleidsmakers van Ring Ring",
  title: "Datavisualisatie van fietsverkeer",
  mainImage: {
    src: "/images/RingRing/Home.jpg",
    alt: "Eind Ontwerp Ring Ring",
  },
  introParagraphs: [
    "Voor Ring Ring heb ik een professioneel dashboard ontworpen waarmee beleidsmakers inzicht krijgen in het fietsverkeer. Ring Ring verzamelt via haar app waardevolle data over fietsroutes, gebruikersgedrag en feedback. Het dashboard visualiseert deze data op een overzichtelijke en toegankelijke manier, zodat beleidsmakers gefundeerde beslissingen kunnen nemen ter bevordering van fietsgebruik. De aangeleverde data bestond onder andere uit routecoördinaten, snelheden, tijdstippen, feedbackscores en afgelegde afstanden.",
  ],
  actions: [
    {
      label: "Bekijk Github",
      href: "https://github.com/marcoFijan/projectDatavisualisation",
      type: "primary",
    },
    {
      label: "Bekijk de website",
      href: "https://marcofijan.github.io/projectDatavisualisation/",
      type: "secondary",
    },
  ],
  projectDetails: [
    { label: "Projectjaar", value: "2021" },
    { label: "Projectdoel", value: "Design en Datavisualisatie" },
    { label: "Doelgroep", value: "Beleidsmakers Ring Ring (35-70 jaar)" },
  ],
};

export default function RingRing() {
  return (
    <PageTemplate
      bgColors={["#000000", "#c42116", "#c42116", "#000000"]}
      title="Marco Fijan - Ring Ring - Datavisualisatie van fietsverkeer"
    >
      <ProjectHero {...projectData} />

      <section className="bg-white relative z-10 mb-30 inverted-card py-20 lg:py-20 flex flex-col gap-24 lg:gap-36">
        <Container grid className="my-24 xl:my-40 ">
          <section className="col-span-12 lg:col-span-5 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Inlogscherm voor authenticatie">Inlogpagina</H2>
            <P>
              Het dashboard bevat privacygevoelige Ring Ring data. Daarom is een
              beveiligde inlogpagina gerealiseerd, zodat uitsluitend
              geautoriseerde beleidsmakers toegang hebben tot de informatie.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
            <Img
              src="/images/RingRing/Inlogscherm.png"
              alt="Ring Ring inlogscherm"
              className="object-contain w-full rounded-2xl bg-[#f1f1f1]"
            />
          </section>
        </Container>

        {/* DASHBOARD SCREEN */}
        <Container grid className="mb-24 xl:mb-40 ">
          <section className="col-span-12 lg:col-span-5 lg:order-2 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Het hoofdscherm">Dashboard</H2>
            <P>
              Het dashboard biedt een helder totaaloverzicht van alle
              beschikbare data. Vanuit het hoofdscherm zijn de verschillende
              detailpagina’s – zoals de kaart, datavisualisaties en feedback –
              direct toegankelijk.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Img
              src="/images/RingRing/Home.jpg"
              alt="Hoofdscherm van het ontwerp"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        {/* FOR YOU SCREEN */}
        <Container grid className="mb-24 xl:mb-40 ">
          <section className="col-span-12 lg:col-span-5 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Data op basis van type account">Voor u-pagina</H2>
            <P>
              Op de ‘Voor U’-pagina worden datavisualisaties getoond die
              specifiek relevant zijn voor de ingelogde gebruiker. In dit
              voorbeeld ligt de nadruk op tijdstippen en dagen, weergegeven in
              een interactieve stacked barchart en piechart (D3.js). Gebruikers
              kunnen eenvoudig filteren op tijd of dag en verschillende
              datatypes, waardoor snel inzicht ontstaat in het fietsgebruik.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
            <Img
              src="/images/RingRing/SpecificData.jpg"
              alt="Voor u pagina van het ontwerp"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        {/* MAP SCREEN */}
        <Container grid className="mb-24 xl:mb-40 items-center">
          <section className="col-span-12 lg:col-span-5 lg:order-2 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Routes bekijken op een kaart">Kaartpagina</H2>
            <P>
              Op de kaartpagina kunnen beleidsmakers fietsroutes analyseren op
              basis van tijdstippen. Kleurcodes (blauw: nacht, rood: spits,
              geel: overdag) maken het eenvoudig om drukke periodes en populaire
              routes te identificeren. Dit biedt direct inzicht in het
              fietsverkeer en ondersteunt beleidsvorming.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Img
              src="/images/RingRing/Routes.jpg"
              alt="Kaartpagina van het ontwerp"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        {/* FEEDBACK SCREEN */}
        <Container grid>
          <section className="col-span-12 lg:col-span-5 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Gegeven feedback over routes bekijken">
              Feedbackpagina
            </H2>
            <P>
              De feedbackpagina geeft beleidsmakers een compleet overzicht van
              alle ontvangen feedback, inclusief afstand, datum en inhoud van de
              feedback. Er kan eenvoudig worden gefilterd op dagtype en
              feedbackscore. Daarnaast is het mogelijk om feedback direct door
              te sturen naar collega’s voor verdere opvolging.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
            <Img
              src="/images/RingRing/Feedback.jpg"
              alt="Feedbackpagina van het ontwerp"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        <Wave
          className="translate-y-[99%] absolute bottom-0 z-20"
          side="left"
          startAt={60}
        />
      </section>
    </PageTemplate>
  );
}
