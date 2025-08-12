import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Li from "@/elements/Li.js";
import NextLink from "@/elements/NextLink";
import SvgDeviceOutline from "@/elements/SvgDeviceOutline.js";
import Divider from "@/elements/Divider.js";
import Action from "@/elements/Action.js";
import FlexArticle from "@/elements/FlexArticle.js";
import Container from "@/sections/Container.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function YOGwotyAward() {
  return (
    <PageTemplate>
      <Container>
        <div className="text-center">
          <H1
            big
            className={""}
            chapeau={"Een wedstrijd onderling verschillende YoungOnes zzp'ers"}
          >
            Gig Worker Of The Year Award
          </H1>
        </div>
        <div className="hidden lg:block relative w-full h-[10rem]">
          <div className="absolute left-0 top-0 w-full">
            <SvgDeviceOutline />
          </div>
        </div>
        <section className="w-full lg:max-w-[80%] mx-auto ">
          <Img
            src="/images/YoGwoty/HiFiDashboard.png"
            alt="Eindproduct YoungOnes"
            className="block object-cover aspect-video w-full"
          />
          <article className="mt-40">
            <ul className="w-max mb-8 flex flex-col gap-4 max-w-full">
              <Li
                className={
                  "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl "
                }
              >
                <strong>Projectjaar:</strong> 2022
              </Li>
              <Li
                className={
                  "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl "
                }
              >
                <strong>Projectdoel:</strong> Geef de ZZPers van YoungOnes een
                overzicht van hun punten tijdens de GWOTY wedstrijd
              </Li>
              <Li
                className={
                  "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl"
                }
              >
                <strong>Doelgroep:</strong> ZZPers van YounOnes (35-70 jaar)
              </Li>
            </ul>
            <P intro>
              Vanuit de marketingafdeling van YoungOnes kreeg ik de opdracht om
              een nieuw dashboard te ontwerpen en ontwikkelen voor de ZZP’ers
              die via het platform werken. Het doel van dit dashboard was om
              ‘gig workers’ op een speelse manier te motiveren: door te werken
              konden zij punten verdienen, waarmee leuke prijzen gewonnen konden
              worden.
            </P>

            <P intro>Het dashboard moest in één oogopslag inzicht geven in:</P>
            <ul className="list-disc ml-8 mb-8">
              <Li intro>Hoe gebruikers punten konden verdienen</Li>
              <Li intro>Hoeveel punten zij al hadden gespaard</Li>
              <Li intro>Hun huidige positie op het leaderboard</Li>
              <Li intro>Hoeveel tijd er nog over was in de campagneperiode</Li>
            </ul>

            <P intro>
              Om dit te realiseren werkte ik nauw samen met het marketingteam.
              Zij gaven mij inzicht in hun wensen, het doel van de campagne en
              hoe vergelijkbare acties in voorgaande jaren waren verlopen. Op
              basis hiervan heb ik het ontwerp en de gebruikerservaring
              afgestemd, zodat het dashboard niet alleen functioneel was, maar
              ook aansloot bij de doelgroep en marketingdoelen van YoungOnes.
            </P>
            <Action className={""}>
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
            </Action>
          </article>
        </section>

        <FlexArticle smallMargin>
          <P className="max-w-full lg:max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
            Het dashboard geeft in één oogopslag inzicht in hoe gebruikers
            punten kunnen verdienen, hoeveel punten ze hebben, hun positie op
            het leaderboard en hoeveel tijd er nog over is in de
            campagneperiode.
          </P>
          <Img
            extraBorder
            src="/images/YoGwoty/EindversieDashboard.jpg"
            alt="Eindproduct dashboard YoungOnes"
            className="block object-cover aspect-video w-full"
          />
        </FlexArticle>
        <FlexArticle reverse smallMargin>
          <P className="max-w-full lg:max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
            De profielpagina geeft een snel overzicht waar welke punten vandaan
            komen en waar nog punten behaald kunnen worden.
          </P>
          <Img
            extraBorder
            src="/images/YoGwoty/EindversieProfiel.jpg"
            alt="Eindproduct profiel YoungOnes"
            className="block object-cover aspect-video w-full"
          />
        </FlexArticle>
        <Divider />
        <article className="grid grid-cols-1 xl:grid-cols-2 gap-12 justify-center my-16 xl:my-32 items-top">
          <section>
            <H2 chapeau="De eerste schetsen">LoFi</H2>
            <P>
              Op basis van verschillende beelden en informatie over voogaande
              GWOTY-awards begon ik met het itereren. Dit deed ik eerst in de
              vorm van een LoFi om eerst te focussen op de inhoud voordat ik aan
              de slag ga met de volledige vormgeving. Op deze manier zouden
              eventuele aanpassingen sneller toegepast kunnen worden.
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
                In het dashboard moet uiteraard ingelogd kunnen worden. Dit werd
                daarom ook in de LoFi meegeneomen om te controleren dat ik geen
                informatie mis.
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
                essentiele informatie te vinden is. In de eerste iteratie had ik
                de timer klein linksboven staan.
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
                een about-pagina ontworpen. Hier kan de gebruiker stap voor stap
                lezen hoe de puntenscore van GWOTY precies werkt.
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
        </article>
        <article className="grid grid-cols-1 xl:grid-cols-2 gap-12 justify-center my-16 xl:my-32 items-top">
          <section className="xl:order-2">
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
                Ook het dashboard kreeg een update door hier een nieuw logo toe
                te voegen in de header en bijpassende iconen en huisstijl toe te
                voegen. Ook werden de menuitems geüpdate.
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
                Ook de HiFi van de about-pagina was erg makkelijk te ontwerpen.
                Hier was weinig feedback voor ontvangen
              </P>
            </SplideSlide>
          </Splide>
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 justify-center my-16 xl:my-32 items-top">
          <section className="xl:col-span-2">
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
                Voor de mobiele versie werd de afbeelding verborgen om direct de
                content weer te geven.
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
        </article>
        <article className="pb-32 grid grid-cols-1 xl:grid-cols-2 gap-12 justify-center my-16 xl:my-32 items-top">
          <section className="xl:order-2">
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
              enige prestatieverlies
            </P>
            <P>
              Hieronder vind u de link naar een statische versie van deze
              website. Dit is niet de laatste versie. In de laatste versie staan
              veel connecties met de database van YoungOnes en andere gevoelige
              informatie. Om die reden is de website zo goed mogelijk om de
              website alsnog in statische vorm weer te geven.
            </P>
            <Action>
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
            </Action>
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
                src="/images/YoGwoty/EindversieInloggen.jpg"
                alt="Lofi schets #1"
                className="block object-contain object-top w-full aspect-[2/1]"
              />
              <H3 className="text-center ">Inlogpagina</H3>
              <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                Voor de eindversie werd de afbeelding veranderd naar iets
                toepasselijker voor de doelgroep: hard werken, ofwel strijden.
                Ook werd de gekleurde kring verwijderd om meer rust te creeëren.
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
                gemaakt die minder druk overkomt, hierdoor komt de inhoud beter
                naar voren. Daarnaast is de prestatiesectie ook overzichtelijker
                vormgegeven.
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
                team marketing. Leaderboard is te engels en team marketing wilde
                hiervoor een nederlandse benaming. Daarnaast is er meer padding
                toegevoegd en meer kleuren voor de top 3.
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
                Ook de HiFi van de about-pagina was erg makkelijk te ontwerpen.
                Hier was weinig feedback voor ontvangen
              </P>
            </SplideSlide>
          </Splide>
        </article>
      </Container>
    </PageTemplate>
  );
}
