import PageTemplate from "../pageTemplate.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Button from "@/elements/Button.js";
import Action from "@/elements/Action.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProjectHero from "@/components/project/HeroProject.js";
import Container from "@/components/Container.js";

const projectData = {
  chapeau: "Een wedstrijd onderling verschillende YoungOnes zzp'ers",
  title: "Gig Worker Of The Year Award",
  mainImage: {
    src: "/images/YoGwoty/HiFiDashboard.png",
    alt: "Eindproduct YoungOnes",
  },
  introParagraphs: [
    "Vanuit de marketingafdeling van YoungOnes kreeg ik de opdracht om een nieuw dashboard te ontwerpen en ontwikkelen voor de ZZP’ers die via het platform werken. Het doel van dit dashboard was om ‘gig workers’ op een speelse manier te motiveren: door te werken konden zij punten verdienen, waarmee leuke prijzen gewonnen konden worden.",
    "Het dashboard moest in één oogopslag inzicht geven in: hoe gebruikers punten konden verdienen, hoeveel punten zij al hadden gespaard, hun huidige positie op het leaderboard en hoeveel tijd er nog over was in de campagneperiode.",
    "Om dit te realiseren werkte ik nauw samen met het marketingteam. Zij gaven mij inzicht in hun wensen, het doel van de campagne en hoe vergelijkbare acties in voorgaande jaren waren verlopen. Op basis hiervan heb ik het ontwerp en de gebruikerservaring afgestemd, zodat het dashboard niet alleen functioneel was, maar ook aansloot bij de doelgroep en marketingdoelen van YoungOnes.",
  ],
  actions: [
    {
      label: "Bekijk de statische website",
      href: "https://youngones-gwoty-o9bw7u9mo-marcofijan1.vercel.app/",
      type: "primary",
    },
    {
      label: "Bekijk de Github",
      href: "https://github.com/marcoFijan/yo-gwoty",
      type: "secondary",
    },
  ],
  projectDetails: [
    { label: "Projectjaar", value: "2022" },
    {
      label: "Projectdoel",
      value:
        "Geef de ZZPers van YoungOnes een overzicht van hun punten tijdens de GWOTY wedstrijd",
    },
    { label: "Doelgroep", value: "ZZPers van YounOnes (35-70 jaar)" },
  ],
};

export default function YOGwotyAward() {
  return (
    <PageTemplate bgColors={["#000000", "#000000", "#10d1bb", "#000000"]}>
      {/* HERO */}
      <ProjectHero {...projectData} />

      <section className="bg-white relative z-10 mb-30 inverted-card py-20 lg:py-20">
        {/* HIGHLIGHTS */}
        <Container grid className="mb-24 xl:mb-40 items-center">
          <section className="col-span-12 lg:col-span-6 space-y-6">
            <H2 chapeau="Belangrijkste schermen">Dashboard & Profiel</H2>
            <P>
              Het dashboard geeft in één oogopslag inzicht in hoe gebruikers
              punten kunnen verdienen, hoeveel punten ze hebben, hun positie op
              het leaderboard en hoeveel tijd er nog over is in de
              campagneperiode.
            </P>
            <P>
              De profielpagina geeft een snel overzicht waar welke punten
              vandaan komen en waar nog punten behaald kunnen worden.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 space-y-8">
            <Img
              src="/images/YoGwoty/EindversieDashboard.jpg"
              alt="Eindproduct dashboard YoungOnes"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
            <Img
              src="/images/YoGwoty/EindversieProfiel.jpg"
              alt="Eindproduct profiel YoungOnes"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        {/* LOFI ITERATION */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:order-2 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="De eerste schetsen">LoFi</H2>
            <P>
              Op basis van verschillende beelden en informatie over voogaande
              GWOTY-awards begon ik met het itereren. Dit deed ik eerst in de
              vorm van een LoFi om eerst te focussen op de inhoud voordat ik aan
              de slag ga met de volledige vormgeving. Op deze manier zouden
              eventuele aanpassingen sneller toegepast kunnen worden.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/LoFiInloggen.png"
                  alt="Lofi schets #1"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Inlogpagina</H3>
                  <P className="italic">
                    In het dashboard moet uiteraard ingelogd kunnen worden. Dit
                    werd daarom ook in de LoFi meegeneomen om te controleren dat
                    ik geen informatie mis.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/LoFiDashboardVersie1.png"
                  alt="Lofi schets #2"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Dashboard V1</H3>
                  <P className="italic">
                    De belangrijkste pagina is het dashboard. Dit is waar alle
                    essentiele informatie te vinden is. In de eerste iteratie
                    had ik de timer klein linksboven staan.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/LoFiDashboardVersie2.png"
                  alt="Lofi schets #3"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Dashboard V2</H3>
                  <P className="italic">
                    Uiteindelijk besloot ik om knoppen te maken van de kaders
                    bovenin. Dit geeft meer rust, en een mogelijk hogere
                    conversieratio voor de secundaire paginas.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/LofiLeaderboard.png"
                  alt="Lofi Leaderboard"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Leaderboard</H3>
                  <P className="italic">
                    Tijdens de wedstrijd willen de freelancers natuurlijk ook
                    een ranglijst zien met hun positie en die van hun
                    concurrenten. Hiervoor is er een leaderboard beschikbaar.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/LoFiAbout.png"
                  alt="Lofi schets #4"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Over GWOTY</H3>
                  <P className="italic">
                    Om mensen te informeren over wat GWOTY precies inhoud, werd
                    er een about-pagina ontworpen. Hier kan de gebruiker stap
                    voor stap lezen hoe de puntenscore van GWOTY precies werkt.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/LoFiAlgemeneVoorwaarden.png"
                  alt="Lofi schets #5"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Voorwaarden</H3>
                  <P className="italic">
                    Naast de informatie over GWOTY, is het ook belangrijk om de
                    algemene voorwaarden helder te hebben. Hiervoor is er een
                    voorwaarden pagina waar de gebruiker alle voorwaarden kan
                    vindne.
                  </P>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

        {/* HIFI ITERATION */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Kleur geven aan het ontwerp">HiFi iteratie</H2>
            <P>
              Nadat de LoFi ontwerpen klaar waren, had ik een gesprek met een
              marketing medewerker van YoungOnes. Zij was erg enthousiast over
              de LoFi en het ontwerp zag er een stuk moderener uit dan de
              website die ze hiervoor gebruikte. Daarnaast werd er nog iets meer
              duidelijkheid gegeven over de schermen die wel of niet nodig
              waren. Zo bleek dat een aanmeldscherm en een dashboard voor
              medewerkers niet nodig waren en dus werden deze schetsen geschrapt
              voor de HiFi.
            </P>
            <P>
              Ook de algemene voorwaarden pagina was niet meer nodig. Hiervoor
              kunnen de freelancers naar de youngones website zelf gaan waar het
              al in detail wordt uitgelegd. De pagina in het dashboard werd
              daarom geschrapt.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiInloggen.png"
                  alt="Hifi inloggen"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Inlogpagina</H3>
                  <P className="italic">
                    Voor de HiFi voor het inloggen was er niet veel werk nodig.
                    Er werd een bijpassende afbeelding gebruikt en de kleuren en
                    lettertype werden toegepast volgens de huisstijl.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiDashboard.png"
                  alt="Hifi Dashboard"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Dashboard</H3>
                  <P className="italic">
                    Ook het dashboard kreeg een update door hier een nieuw logo
                    toe te voegen in de header en bijpassende iconen en
                    huisstijl toe te voegen. Ook werden de menuitems geüpdate.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiProfiel.png"
                  alt="Hifi Profiel"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Profiel</H3>
                  <P className="italic">
                    Een van de feedbackpunten vanuit marketing is dat ze graag
                    een profielpagina willen hebben. Op deze manier heeft de
                    gebruiker een beter inzicht over zijn of haar behaalde
                    punten.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiLeaderboard.png"
                  alt="Hifi Leaderboard"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Leaderboard</H3>
                  <P className="italic">
                    Voor het leaderboard was niet veel werk nodig. Alleen de
                    huisstijl werd toegepast.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiAbout.png"
                  alt="Hifi About"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Over GWOTY</H3>
                  <P className="italic">
                    Ook de HiFi van de about-pagina was erg makkelijk te
                    ontwerpen. Hier was weinig feedback voor ontvangen.
                  </P>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

        {/* HIFI MOBILE ITERATION */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:order-2 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="De mobiele responsive versie van het HiFi-ontwerp">
              HiFi iteratie mobiel
            </H2>
            <P>
              Uiteraard is het ook belangrijk om een beeld te geven over een
              mobiele versie. Een standaard website moet namelijk in deze tijd
              altijd geoptimaliseerd zijn voor alle vormen en maten schermen.
              Hiervoor werd de content in een smallere kader getoond. In de
              frontend kan dit makkelijk geautimatiseerd worden met een custom
              hamburgermenu en stylingselementen zoals flex en grid.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiInloggenMobiel.png"
                  alt="Hifi Inloggen Mobiel"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Inlogpagina</H3>
                  <P className="italic">
                    Voor de mobiele versie werd de afbeelding verborgen om
                    direct de content weer te geven.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiDashboardMobiel.png"
                  alt="Hifi Dashboard Mobiel"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Dashboard</H3>
                  <P className="italic">
                    Het dashboard werd onder elkaar gezet in volgorde van
                    relevantie. De timer werd daarom bovenaan getoond.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiProfielMobiel.png"
                  alt="Hifi Profiel Mobiel"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Profiel</H3>
                  <P className="italic">
                    Bij het profiel werd de sidebar volledig onderaan gezet en
                    het hoofdvak met belangrijke informatie bovenaan.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiLeaderboardMobiel.png"
                  alt="Hifi Leaderboard Mobiel"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Leaderboard</H3>
                  <P className="italic">
                    Ook bij het leaderboard verschijnt de sidebar onderaan en
                    het hoofdvlak met belangrijke informatie bovenaan.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiAboutMobiel.png"
                  alt="Hifi About Mobiel"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Over GWOTY</H3>
                  <P className="italic">
                    In de mobiele versie verdwijnt de overflow en wordt de tekst
                    volledig onder elkaar getoond om het scrollen te
                    versoepelen.
                  </P>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

        {/* DEVELOPED VERSION */}
        <Container grid>
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Het uiteindelijke resultaat in NextJS en Tailwind">
              Uitgewerkte versie
            </H2>
            <P>
              Nadat er een akkoord was bereikt over de Hifi, werd er al snel een
              NextJS met Tailwind project opgezet om het ontwerp te realiseren
              in de frontend. Dit was mijn eerste echte project met NextJS en
              daarom duurde sommige elementen wat langer. Hiervoor had ik alleen
              ervaring met Svelte, wat nog steeds mijn voorkeur is. Het
              handmatig opzetten van verschillende hooks om variablen te laten
              updaten op de canvas vind ik ergens wel handig. Maar toch vind ik
              dit ergens ook nog een ouderwetse manier. Zeker wanneer je dit
              vergelijkt met Svelte waar dit volledig is geautimatiseerd zonder
              enige prestatieverlies.
            </P>
            <P>
              Hieronder vind u de link naar een statische versie van deze
              website. Dit is niet de laatste versie. In de laatste versie staan
              veel connecties met de database van YoungOnes en andere gevoelige
              informatie. Om die reden is de website zo goed mogelijk om de
              website alsnog in statische vorm weer te geven.
            </P>

            <Action className="mt-8">
              <Button
                type="primary"
                href="https://youngones-gwoty-o9bw7u9mo-marcofijan1.vercel.app/"
              >
                Bekijk de statische website
              </Button>
              <Button
                type="secondary"
                href="https://github.com/marcoFijan/yo-gwoty"
              >
                Bekijk de Github
              </Button>
            </Action>
          </section>

          <section className="col-span-12 lg:col-span-6 relative mt-12 lg:mt-0">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/EindversieInloggen.jpg"
                  alt="Eindversie Inloggen"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Inlogpagina</H3>
                  <P className="italic">
                    Voor de eindversie werd de afbeelding veranderd naar iets
                    toepasselijker voor de doelgroep: hard werken, ofwel
                    strijden. Ook werd de gekleurde kring verwijderd om meer
                    rust te creeëren.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/EindversieDashboard.jpg"
                  alt="Eindversie Dashboard"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Dashboard</H3>
                  <P className="italic">
                    Voor het dashboard heb ik snel een nieuwe bannerafbeelding
                    gemaakt die minder druk overkomt, hierdoor komt de inhoud
                    beter naar voren. Daarnaast is de prestatiesectie ook
                    overzichtelijker vormgegeven.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/EindversieProfiel.jpg"
                  alt="Eindversie Profiel"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Profiel</H3>
                  <P className="italic">
                    Als laatste is de profielpagina verwerkt. Hier is vooral de
                    overzicht sectie aangepast. Er is veel onnodige uitleg
                    verwijderd en deze uitleg is samengevat tot belangrijkst
                    gegevens met grote getallen.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/EindversieLeaderboard.jpg"
                  alt="Eindversie Leaderboard"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Tussenstand (Leaderboard)</H3>
                  <P className="italic">
                    Het Leaderboard werd hernoemd naar tussenstand op verzoek
                    van team marketing. Leaderboard is te engels en team
                    marketing wilde hiervoor een nederlandse benaming. Daarnaast
                    is er meer padding toegevoegd en meer kleuren voor de top 3.
                  </P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/YoGwoty/HiFiAbout.png"
                  alt="Eindversie About"
                  className="object-contain w-full"
                />
                <div className="p-8 text-center">
                  <H3>Over GWOTY</H3>
                  <P className="italic">
                    Ook de HiFi van de about-pagina was erg makkelijk te
                    ontwerpen. Hier was weinig feedback voor ontvangen.
                  </P>
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
