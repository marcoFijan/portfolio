import PageTemplate from "../pageTemplate.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProjectHero from "@/components/project/HeroProject.js";
import Container from "@/components/Container.js";

const projectData = {
  chapeau: "Datavisualisatie voor opdrachtgevers van YoungOnes",
  title: "Opdrachtgever Dashboard",
  mainImage: {
    src: "/images/YoDashboardClients/EindversieThumbnail.png",
    alt: "Eindproduct YoungOnes",
  },
  introParagraphs: [
    "YoungOnes gebruikte tot nu toe een automatisch gegenereerde PowerBI dashboard die de opdrachtgevers konden geberuiken om inzichten te doen. PowerBI gaf alleen tabellen en had geen enkele vorm van datavisualistie. Hierdoor is het lastiger om nuttige inzichten te doen over de data. Er moest daarom een nieuw dashboard ontworpen en hier kreeg ik de opdracht.",
  ],
  actions: [],
  projectDetails: [
    { label: "Projectjaar", value: "2023" },
    {
      label: "Projectdoel",
      value:
        "Een dashboard creeëren die opdrachtgevers van YoungOnes kunnen gebruiken om inzichten te maken op hun data.",
    },
    {
      label: "Doelgroep",
      value: "Opdrachtgevers die YoungOnes gebruiken (35-70 jaar)",
    },
  ],
};

export default function YoDashboardClients() {
  return (
    <PageTemplate bgColors={["#000000", "#10d1bb", "#000000", "#000000"]}>
      {/* HERO */}
      <ProjectHero {...projectData} />

      <section className="bg-white relative z-10 mb-30 inverted-card py-20 lg:py-20">
        {/* CURRENT DASHBOARD */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Huidig gebruikt PowerBI dashboard">
              Huidig dashboard
            </H2>
            <P>
              YoungOnes gebruikte tot nu toe een automatisch gegenereerde
              PowerBI dashboard die de opdrachtgevers konden geberuiken om
              inzichten te doen. PowerBI gaf alleen tabellen en had geen enkele
              vorm van datavisualistie. Hierdoor is het lastiger om nuttige
              inzichten te doen over de data. Er moest daarom een nieuw
              dashboard ontworpen en hier kreeg ik de opdracht
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 relative">
            <Img
              src="/images/YoDashboardClients/PowerBiDataViewer.png"
              alt="Oud dataoverzicht"
              className="rounded-2xl object-contain w-full"
              noBorder
            />
          </section>
        </Container>

        {/* LOFI ITERATION */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:order-2 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="De eerste schets van het nieuwe dashboard">
              LoFi iteratie
            </H2>
            <P>
              Na wat snelle schetsen op papier besloot ik de data op te splitsen
              in 3 categorieën: Overzicht, Freelancer en Klussen. Bovenaan zijn
              de tijd- en loactiegerelateerde filters beschikbaar die alle data
              op het scherm update. Daarnaast kunnen staven in de legenda
              uitgezet worden om meer in de specifieke data te duiken. De
              populairste inzichten waar de opdrachtgevers het meest om vroegen,
              worden in kleine blokken bovenaan getoond met grote visuele
              getallen.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/LoFiOverzicht.png"
                  alt="Lofi schets #1"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Overzicht</H3>
                  <P className="italic">
                    In het overzicht is de globale en populairste data
                    beschikbaar. De stapelstaafdiagram wordt gedraaid voor in
                    het geval er gescrold kan worden wanneer er te veel locaties
                    zijn om het op één scherm weer te geven.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/LoFiFreelancer.png"
                  alt="Lofi schets #2"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Freelancer</H3>
                  <P className="italic">
                    Op de freelancer pagina is heel veel data beschikbaar. Er
                    werd daarom gekozen om hier wel een tabel te tonen. Wel
                    wordt er een verhoudingvisualisatie getoond waarbij in 1
                    keer zichtbaar is hoe populair een medewerker is.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/LoFiKlussen.png"
                  alt="Lofi schets #3"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Klussen</H3>
                  <P className="italic">
                    Klussen bevat veel tekstuele data die daardoor erg gevoelig
                    is voor menselijke fouten. Daarom wordt er hier een tabel
                    getoond met het totaal of gemiddelde. Daarnaast worden
                    reacties en ratios visueel in de sidebar getoond.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/LoFiOverzichtFilters.png"
                  alt="KBO Reeshof Menu uitgeklapt"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Overzicht met filters</H3>
                  <P className="italic">
                    Hieronder vind u een iteratie van het overzichtscherm
                    waarbij er een filter is geselecteerd.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/LoFiOverzichtFilters.png"
                  alt="Lofi schets #4"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Klussen met filters</H3>
                  <P className="italic">
                    Hieronder vind u een iteratie van het klussenscherm waarbij
                    er een filter is geselecteerd.
                  </P>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

        {/* HIFI V1 ITERATION */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Eerste versie van de schetsen met kleur">
              HiFi V1 iteratie
            </H2>
            <P>
              Voor de HiFi wilde ik de kleuren van YoungOnes terug laten komen.
              Dit vond ik erg lastig aangezien YoungOnes maar 1 kleur heeft en
              verder voornamelijk zwart en wit gebruikt. Vooral het kleuren van
              de staafdiagrammen was wat lastig. Uiteindelijk kwam ik uit op een
              website die kleuren kon genereren op basis van een huisstijl kleur
              voor datavisualisaties
              (https://learnui.design/tools/data-color-picker.html). Deze heb ik
              gebruikt en dit maakte de visualisatie een stuk makkelijker.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi1Overzicht.png"
                  alt="Hifi schets #1"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Overzicht</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi1Freelancer.png"
                  alt="Hifi schets #2"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Freelancer</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi1Klussen.png"
                  alt="Hifi schets #3"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Klussen</H3>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

        {/* HIFI V2 ITERATION */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:order-2 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Consistentie toegepast met het vernieuwde dashboard">
              HiFi V2 iteratie
            </H2>
            <P>
              Na het ontwikkelen van de eerste HiFi kreeg ik te horen van de
              opdrachtgever dat er al een dashboard was die de opdrachtgevers
              van YoungOnes al gebruiken. Het design is daarom iets aangepast om
              deze in de huidige huisstijl van het gebruikte dashboard te kunnen
              plaatsen.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi2Overzicht.png"
                  alt="Hifi schets #1"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Overzicht</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi2Freelancer.png"
                  alt="Hifi schets #2"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Freelancer</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi2Klussen.png"
                  alt="Hifi schets #3"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Klussen</H3>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

        {/* HIFI V3 ITERATION */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Feedbackverwerking van opdrachtgevers">
              HiFi V3 iteratie
            </H2>
            <P>
              Om een beter beeld te krijgen over de wensen van de doelgroep
              werden mijn iteraties gedeeld met verschillende opdrachtgevers.
              Hier kwamen een paar feedbackpuntjes en wensen uit die vervolgens
              werden verwerkt in een volgende iteratie.
            </P>
            <P>
              Vanuit de opdrachtgevers kreeg ik het verzoek om de
              stapelstaafdiagram te draaien en rechtop te zetten. Dit is wat
              onwennig met horizontaal scrollen, maar maakt het diagram wel
              beter leesbaar. Daarnaast heeft niet elke opdrachtgever meerdere
              locaties. Het is daarom aangeraden om bij het overzichtscherm de
              volgende filters toe te voegen: Locatie, subaccount, functietitel
              en per week.
            </P>
            <P>
              De medewerkers van YoungOnes gaven aan dat het dashboard niet
              perse op 1 scherm hoeft te passen. Er mag best verticaal gescrold
              worden. Hierdoor is er meer ruimte beschikbaar voor diagrammen.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi3Overzicht.png"
                  alt="Hifi schets #1"
                  className="object-contain w-full bg-[#f3f3f7]"
                />
                <div className="p-8 text-center">
                  <H3>Overzicht</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi3Freelancer.png"
                  alt="Hifi schets #2"
                  className="object-contain w-full bg-[#f3f3f7]"
                />
                <div className="p-8 text-center">
                  <H3>Freelancer</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/HiFi3Klussen.png"
                  alt="Hifi schets #3"
                  className="object-contain w-full bg-[#f3f3f7]"
                />
                <div className="p-8 text-center">
                  <H3>Klussen</H3>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

        {/* DEVELOPED VERSION */}
        <Container grid>
          <section className="col-span-12 lg:col-span-6 lg:order-2 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Het uiteindelijke resultaat in NextJS, Tailwind en ChartJS">
              Ontwikkelde versie
            </H2>
            <P>
              Na goedkeuring van de product owner was het tijd om het dashboard
              te realiseren in de frontend. Na wat onderzoek, bleek dat ChartJS
              het beste gecombineerd kon werden met NextJS en Tailwind. Met
              ChartJS kun je, met de kracht de van D3 library, snel krachtige
              diagrammen ontwikkelen.
            </P>
            <P>
              Tijdens het ontwikkelproces werd er ook nog wat geïtereerd. Zo
              werd het menu bovenin geplaatst, werd de locatiefilter bovenaan
              verwijderd om verwarring te voorkomen voor opdrachtgevers met 1
              locatie en werd het diagram op de kluspagina bovenaan gezet om
              eerst de globale data te tonen. Daarnaast zijn er nog wat kleuren
              veranderd en heb ik tijdelijke iconen ontworpen voor de kaders
              boven de diagrammen.
            </P>
            <P>
              Helaas is het dashboard ontwikkeld in een bestaand project van
              YoungOnes waardoor er ook veel geschreven code van andere aanwezig
              is in het project. Daarnaast wordt er gewerkt met gevoelige
              informatie en diverse connecties met databases van verschillende
              bedrijven. Ik heb daarom helaas geen toestemming gekregen om de
              code online te hosten en dus is er geen github link beschikbaar.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/EindversieOverzicht.png"
                  alt="Eindversie Overzicht"
                  className="object-contain w-full bg-[#f3f3f7]"
                />
                <div className="p-8 text-center">
                  <H3>Overzicht</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/EindversieFreelancer.png"
                  alt="Eindversie Freelancer"
                  className="object-contain w-full bg-[#f3f3f7]"
                />
                <div className="p-8 text-center">
                  <H3>Freelancer</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoDashboardClients/EindversieKlussen.png"
                  alt="Eindversie klussen"
                  className="object-contain w-full bg-[#f3f3f7]"
                />
                <div className="p-8 text-center">
                  <H3>Klussen</H3>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

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
