import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import NextLink from "@/elements/NextLink";
import Divider from "@/elements/Divider.js";

import Container from "@/sections/Container.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function YOGwotyAward() {
  const baseClasses =
    "w-full h-full object-cover relative bg-black overflow-hidden";
  const borderClasses = "box-border rounded-2xl border-gray-300 border-0";
  const shadowClasses = "z-0 shadow-lg";
  const afterClasses =
    "after:border-white after:border-1 after:rounded-2xl after:border-opacity-10 after:w-full after:-right-8 after:-bottom-8 after:absolute after:h-[100%] after:z-[-3]";
  const beforeClasses =
    "before:border-white before:border-1 before:rounded-2xl before:border-opacity-10 before:w-full before:-left-8 before:-top-8 before:absolute before:h-full before:z-[-3]";

  return (
    <PageTemplate>
      <Container>
        {" "}
        <H1
          big
          className={""}
          chapeau={"Een wedstrijd onderling verschillende YoungOnes zzp'ers"}
        >
          Gig Worker Of The Year Award
        </H1>
        <section className="flex flex-col gap-12">
          <article className="mb-20">
            <P intro>
              Ik kreeg vanuit YoungOnes de opdract om een nieuw dashboard te
              ontwerpen voor de ZZPers van YoungOnes. De marketing afdeling van
              YoungOnes gaf deze opdracht. Hierin kunnen ‘gig workers’, ofwel
              freelancers, in een korte tijd punten scoren door te werken en
              hier leuke prijzen mee winnen. Om dit idee te realiseren moest er
              een dashboard ontworpen en ontwikkeld worden, dit is waar ik in
              het verhaal kom. In dit dashboard kunnen de ZZPers zien hoe ze
              punten kunnen verdienen, hoeveel punten ze hebben, op welke
              positie ze staan en hoeveel tijd ze nog hebben om meer punten te
              verdienen. Hiervoor had ik veel contact met marketing om een
              globaal idee te krijgen over wat ze nu precies wilde hebben en hoe
              dit de jaren hiervoor verliep.
            </P>
          </article>
          <section className="w-full lg:max-w-[80%] mx-auto ">
            <Img
              src="/images/YoGwoty/HiFiDashboard.png"
              alt="Eindproduct YoungOnes"
              className="block object-cover aspect-video w-full"
            />
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 justify-center  items-center pt-20">
            <P className="max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
              Groot het aantal punten, de positie en de tijd weergeven geeft de
              gebruiker de urgentie om zo snel mogelijk zo veel mogelijk punten
              bij elkaar te sparen om te winnen
            </P>
            <Img
              extraBorder
              src="/images/YoGwoty/EindversieDashboard.jpg"
              alt="Eindproduct dashboard YoungOnes"
              className="block object-cover aspect-video w-full"
            />
            <Img
              extraBorder
              src="/images/YoGwoty/EindversieProfiel.jpg"
              alt="Eindproduct profiel YoungOnes"
              className="block object-cover aspect-video w-full"
            />
            <P className="max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
              De profielpagina geeft een snel overzicht waar welke punten
              vandaan komen en waar nog punten behaald kunnen worden.
            </P>
          </section>
          <Divider />
          <article className="mb-24 grid grid-cols-1 gap-12 gap-y-32 lg:grid-cols-2 justify-center  items-center pt-20">
            <section>
              <H2 chapeau="De eerste schetsen">LoFi</H2>
              <P>
                Op basis van verschillende beelden en informatie over voogaande
                GWOTY-awards begon ik met het itereren. Dit deed ik eerst in de
                vorm van een LoFi om eerst te focussen op de inhoud voordat ik
                aan de slag ga met de volledige vormgeving. Op deze manier
                zouden eventuele aanpassingen sneller toegepast kunnen worden.
              </P>
            </section>

            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/LoFiInloggen.png"
                  alt="Lofi schets #1"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Inlogpagina</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  In het dashboard moet uiteraard ingelogd kunnen worden. Dit
                  werd daarom ook in de LoFi meegeneomen om te controleren dat
                  ik geen informatie mis.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/LoFiDashboardVersie1.png"
                  alt="Lofi schets #2"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Dashboard V1</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  De belangrijkste pagina is het dashboard. Dit is waar alle
                  essentiele informatie te vinden is. In de eerste iteratie had
                  ik de timer klein linksboven staan.
                </P>
              </SplideSlide>

              <SplideSlide>
                <Img
                  src="/images/YoGwoty/LoFiDashboardVersie2.png"
                  alt="Lofi schets #3"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Dashboard V2</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Uiteindelijk besloot ik om knoppen te maken van de kaders
                  bovenin. Dit geeft meer rust, en een mogelijk hogere
                  conversieratio voor de secundaire paginas.
                </P>
              </SplideSlide>

              <SplideSlide>
                <Img
                  src="/images/YoGwoty/LofiLeaderboard.png"
                  alt="KBO Reeshof Menu uitgeklapt"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Leaderboard</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Tijdens de wedstrijd willen de freelancers natuurlijk ook een
                  ranglijst zien met hun positie en die van hun concurrenten.
                  Hiervoor is er een leaderboard beschikbaar
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/LoFiAbout.png"
                  alt="Lofi schets #4"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Over GWOTY</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Om mensen te informeren over wat GWOTY precies inhoud, werd er
                  een about-pagina ontworpen. Hier kan de gebruiker stap voor
                  stap lezen hoe de puntenscore van GWOTY precies werkt.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/LoFiAlgemeneVoorwaarden.png"
                  alt="Lofi schets #4"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Voorwaarden</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Naast de informatie over GWOTY, is het ook belangrijk om de
                  algemene voorwaarden helder te hebben. Hiervoor is er een
                  voorwaarden pagina waar de gebruiker alle voorwaarden kan
                  vindne.
                </P>
              </SplideSlide>
            </Splide>
            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiInloggen.png"
                  alt="Lofi schets #1"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Inlogpagina</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Voor de HiFi voor het inloggen was er niet veel werk nodig. Er
                  werd een bijpassende afbeelding gebruikt en de kleuren en
                  lettertype werden toegepast volgens de huisstijl.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiDashboard.png"
                  alt="Lofi schets #2"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Dashboard</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Ook het dashboard kreeg een update door hier een nieuw logo
                  toe te voegen in de header en bijpassende iconen en huisstijl
                  toe te voegen. Ook werden de menuitems geüpdate.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiProfiel.png"
                  alt="Hifi Profiel"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Profiel</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Een van de feedbackpunten vanuit marketing is dat ze graag een
                  profielpagina willen hebben. Op deze manier heeft de gebruiker
                  een beter inzicht over zijn of haar behaalde punten.
                </P>
              </SplideSlide>

              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiLeaderboard.png"
                  alt="KBO Reeshof Menu uitgeklapt"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Leaderboard</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Voor het leaderboard was niet veel werk nodig. Alleen de
                  huisstijl werd toegepast.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiAbout.png"
                  alt="Lofi schets #4"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Over GWOTY</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Ook de HiFi van de about-pagina was erg makkelijk te
                  ontwerpen. Hier was weinig feedback voor ontvangen
                </P>
              </SplideSlide>
            </Splide>

            <section>
              <H2 chapeau="Kleur geven aan het ontwerp">HiFi iteratie</H2>
              <P>
                Nadat de LoFi ontwerpen klaar waren, had ik een gesprek met een
                marketing medewerker van YoungOnes. Zij was erg enthousiast over
                de LoFi en het ontwerp zag er een stuk moderener uit dan de
                website die ze hiervoor gebruikte. Daarnaast werd er nog iets
                meer duidelijkheid gegeven over de schermen die wel of niet
                nodig waren. Zo bleek dat een aanmeldscherm en een dashboard
                voor medewerkers niet nodig waren en dus werden deze schetsen
                geschrapt voor de HiFi.
              </P>
              <P>
                Ook de algemene voorwaarden pagina was niet meer nodig. Hiervoor
                kunnen de freelancers naar de youngones website zelf gaan waar
                het al in detail wordt uitgelegd. De pagina in het dashboard
                werd daarom geschrapt.
              </P>
            </section>

            <section>
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
            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiInloggenMobiel.png"
                  alt="Lofi schets #1"
                  className="block object-contain object-top w-full aspect-[3/5]"
                />
                <H3 className="text-center ">Inlogpagina</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Voor de mobiele versie werd de afbeelding verborgen om direct
                  de content weer te geven.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiDashboardMobiel.png"
                  alt="Lofi schets #2"
                  className="block object-contain object-top w-full aspect-[3/5]"
                />
                <H3 className="text-center ">Dashboard</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Het dashboard werd onder elkaar gezet in volgorde van
                  relevantie. De timer werd daarom bovenaan getoond.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiProfielMobiel.png"
                  alt="Hifi Profiel"
                  className="block object-contain object-top w-full aspect-[3/5]"
                />
                <H3 className="text-center ">Profiel</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Bij het profiel werd de sidebar volledig onderaan gezet en het
                  hoofdvak met belangrijke informatie bovenaan.
                </P>
              </SplideSlide>

              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiLeaderboardMobiel.png"
                  alt="KBO Reeshof Menu uitgeklapt"
                  className="block object-contain object-top w-full aspect-[3/5]"
                />
                <H3 className="text-center ">Leaderboard</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Ook bij het leaderboard verschijnt de sidebar onderaan en het
                  hoofdvlak met belangrijke informatie bovenaan
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiAboutMobiel.png"
                  alt="Lofi schets #4"
                  className="block object-contain object-top w-full aspect-[3/5]"
                />
                <H3 className="text-center ">Over GWOTY</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  In de mobiele versie verdwijnt de overflow en wordt de tekst
                  volledig onder elkaar getoond om het scrollen te versoepelen
                </P>
              </SplideSlide>
            </Splide>
            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/EindversieInloggen.jpg"
                  alt="Lofi schets #1"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Inlogpagina</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Voor de eindversie werd de afbeelding veranderd naar iets
                  toepasselijker voor de doelgroep: hard werken, ofwel strijden.
                  Ook werd de gekleurde kring verwijderd om meer rust te
                  creeëren.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/EindversieDashboard.jpg"
                  alt="Lofi schets #2"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Dashboard</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Voor het dashboard heb ik snel een nieuwe bannerafbeelding
                  gemaakt die minder druk overkomt, hierdoor komt de inhoud
                  beter naar voren. Daarnaast is de prestatiesectie ook
                  overzichtelijker vormgegeven.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/EindversieProfiel.jpg"
                  alt="Hifi Profiel"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Profiel</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Als laatste is de profielpagina verwerkt. Hier is vooral de
                  overzicht sectie aangepast. Er is veel onnodige uitleg
                  verwijderd en deze uitleg is samengevat tot belangrijkst
                  gegevens met grote getallen.
                </P>
              </SplideSlide>

              <SplideSlide>
                <Img
                  src="/images/YoGwoty/EindversieLeaderboard.jpg"
                  alt="KBO Reeshof Menu uitgeklapt"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Tussenstand (Leaderboard)</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Het Leaderboard werd hernoemd naar tussenstand op verzoek van
                  team marketing. Leaderboard is te engels en team marketing
                  wilde hiervoor een nederlandse benaming. Daarnaast is er meer
                  padding toegevoegd en meer kleuren voor de top 3.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoGwoty/HiFiAbout.png"
                  alt="Lofi schets #4"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Over GWOTY</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Ook de HiFi van de about-pagina was erg makkelijk te
                  ontwerpen. Hier was weinig feedback voor ontvangen
                </P>
              </SplideSlide>
            </Splide>
            <section>
              <H2 chapeau="Het uiteindelijke resultaat in NextJS en Tailwind">
                Uitgewerkte versie
              </H2>
              <P>
                Nadat er een akkoord was bereikt over de Hifi, werd er al snel
                een NextJS met Tailwind project opgezet om het ontwerp te
                realiseren in de frontend. Dit was mijn eerste echte project met
                NextJS en daarom duurde sommige elementen wat langer. Hiervoor
                had ik alleen ervaring met Svelte, wat nog steeds mijn voorkeur
                is. Het handmatig opzetten van verschillende hooks om variablen
                te laten updaten op de canvas vind ik ergens wel handig. Maar
                toch vind ik dit ergens ook nog een ouderwetse manier. Zeker
                wanneer je dit vergelijkt met Svelte waar dit volledig is
                geautimatiseerd zonder enige prestatieverlies
              </P>
              <P>
                Hieronder vind u de link naar een statische versie van deze
                website. Dit is niet de laatste versie. In de laatste versie
                staan veel connecties met de database van YoungOnes en andere
                gevoelige informatie. Om die reden is de website zo goed
                mogelijk om de website alsnog in statische vorm weer te geven.
              </P>
              <div className="flex gap-8 flex-wrap mt-12">
                <NextLink
                  type="primary"
                  href="https://youngones-gwoty-o9bw7u9mo-marcofijan1.vercel.app/"
                >
                  Bekijk de statische website
                </NextLink>
                <NextLink
                  type="secondary"
                  href="https://github.com/marcoFijan/yo-gwoty"
                >
                  Bekijk de Github
                </NextLink>
              </div>
            </section>
          </article>
        </section>
      </Container>
    </PageTemplate>
  );
}
