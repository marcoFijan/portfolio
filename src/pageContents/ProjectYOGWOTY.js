// IMAGES
import hifiAboutImg from "../../public/images/YoGwoty/HiFiAbout.png";
import hifiAboutResponsiveImg from "../../public/images/YoGwoty/HiFiAboutMobiel.png";
import hifiDashboardImg from "../../public/images/YoGwoty/HiFiDashboard.png";
import hifiDashboardResponsiveImg from "../../public/images/YoGwoty/HiFiDashboardMobiel.png";
import hifiSignInImg from "../../public/images/YoGwoty/HiFiInloggen.png";
import hifiSignInResponsiveImg from "../../public/images/YoGwoty/HiFiInloggenMobiel.png";
import hifiLeaderboardImg from "../../public/images/YoGwoty/HiFiLeaderboard.png";
import hifiLeaderboardResponsiveImg from "../../public/images/YoGwoty/HiFiLeaderboardMobiel.png";
import hifiProfileImg from "../../public/images/YoGwoty/HiFiProfiel.png";
import hifiProfileResponsiveImg from "../../public/images/YoGwoty/HiFiProfielMobiel.png";
import lofiAboutImg from "../../public/images/YoGwoty/LoFiAbout.png";
import lofiTermsImg from "../../public/images/YoGwoty/LoFiAlgemeneVoorwaarden.png";
import lofiDashboardV1Img from "../../public/images/YoGwoty/LoFiDashboardVersie1.png";
import lofiDashboardV2Img from "../../public/images/YoGwoty/LoFiDashboardVersie2.png";
import lofiSignInImg from "../../public/images/YoGwoty/LoFiInloggen.png";
import lofiLeaderboardImg from "../../public/images/YoGwoty/LoFiLeaderboard.png";
import finalDashboardImg from "../../public/images/YoGwoty/EindversieDashboard.jpg";
import finalDashboardInstagramImg from "../../public/images/YoGwoty/EindversieDashboardUitlegInstagram.jpg";
import finalSignInImg from "../../public/images/YoGwoty/EindversieInloggen.jpg";
import finalLeaderboardImg from "../../public/images/YoGwoty/EindversieLeaderboard.jpg";
import finalProfileImg from "../../public/images/YoGwoty/EindversieProfiel.jpg";

// COMPONENTS
import ProjectArticle from "../organisms/ProjectArticle";
import SideCanvas from "../organisms/SideCanvas";

export default function ProjectStandaardAanbouw({}) {
  const darkBackground = true;

  return (
    // Introductie
    // Onderzoek persona's empathy map
    // afbakenen programma van eisen
    // ideegeneratie harris profiel
    // concept concept keuzes en vormgevingsregels
    // Het product
    // Validatie
    // Resources: Design Rationale + Link naar productbiografie
    <div className="max-w-wrapper mx-auto w-full block px-articlePadding">
      <ProjectArticle
        title={"Gig Worker Of The Year Award"}
        subTitle={"Een wedstrijd onderling verschillende YoungOnes zzp'ers"}
        summaryProject={{
          Projectjaar: "2021",
          Projectdoel:
            "Geef de zzp'ers van YoungOnes een overzicht van hun punten tijdens de GWOTY wedstrijd",
          Doelgroep: "ZZP'ers van YounOnes",
        }}
        paragraph1a={
          "Tijdens de eerste 5 weken van mijn stage bij YoungOnes kreeg ik de opdract om een nieuw dashboard te ontwerpen voor de zzp'ers van YoungOnes. De marketing afdeling van YoungOnes gaf deze opdracht. Hierin kunnen ‘gig workers’, ofwel freelancers, in een korte tijd punten scoren door te werken en hier leuke prijzen mee winnen. Om dit idee te realiseren moest er een dashboard ontworpen en ontwikkeld worden, dit is waar ik in het verhaal kom. In dit dashboard kunnen de zzp'ers zien hoe ze punten kunnen verdienen, hoeveel punten ze hebben, op welke positie ze staan en hoeveel tijd ze nog hebben om meer punten te verdienen. Hiervoor had ik veel contact met marketing om een globaal idee te krijgen over wat ze nu precies wilde hebben en hoe dit de jaren hiervoor verliep."
        }
        paragraph1ImageSmall={true}
        canvas={
          <SideCanvas
            laptopScreen={"../images/Thumbnails/YOGwotyThumb.png"}
            smartphoneScreen={"../images/Thumbnails/YOGwotyThumbMobile.png"}
          />
        }
        // paragraph1ImageAlt={"Afbeelding van het ontworpen product"}
        // paragraph1ImageURL={kboIntroImg}
        // paragraph1ImageSmall={true}
        // buttonHref={"/"}
        // buttonText={"Bekijk het prototype"}
        // buttonCTA={true}
        darkBackground={true}
      />
      <ProjectArticle
        header={"LoFi"}
        subHeader={"Eerste schetsen"}
        paragraph1a={
          "Op basis van verschillende beelden en informatie over voogaande GWOTY-awards begon ik met het itereren. Dit deed ik eerst in de vorm van een LoFi om eerst te focussen op de inhoud voordat ik aan de slag ga met de volledige vormgeving. Op deze manier zouden eventuele aanpassingen sneller toegepast kunnen worden."
        }
        sectionHeader1={"InlogPagina"}
        sectionParagraph1a={
          "In het dashboard moet uiteraard ingelogd kunnen worden. Dit werd daarom ook in de LoFi meegeneomen om te controleren dat ik geen informatie mis."
        }
        section1ImageURL={lofiSignInImg}
        section1ImageAlt={"lofi gwoty inloggen afbeelding"}
        sectionHeader2={"Dashboard V1"}
        sectionParagraph2a={
          "De belangrijkste pagina is het dashboard. Dit is waar alle essentiele informatie te vinden is. In de eerste iteratie had ik de timer klein linksboven staan."
        }
        section2ImageURL={lofiDashboardV1Img}
        section2ImageAlt={"Lofi gwoty dashboard versie 1"}
        sectionHeader3={"Dashboard V2"}
        sectionParagraph3a={
          "Uiteindelijk besloot ik om knoppen te maken van de kaders bovenin. Dit geeft meer rust, en een mogelijk hogere conversieratio voor de secundaire pagina's."
        }
        section3ImageURL={lofiDashboardV2Img}
        section3ImageAlt={"Lofi gwoty dashboard versie 2"}
        sectionHeader4={"Leaderboard"}
        sectionParagraph4a={
          "Tijdens de wedstrijd willen de freelancers natuurlijk ook een ranglijst zien met hun positie en die van hun concurrenten. Hiervoor is er een leaderboard beschikbaar"
        }
        section4ImageURL={lofiLeaderboardImg}
        section4ImageAlt={"Lofi gwoty leaderboard pagina"}
        sectionHeader5={"Over GWOTY"}
        sectionParagraph5a={
          "Om mensen te informeren over wat GWOTY precies inhoud, werd er een about-pagina ontworpen. Hier kan de gebruiker stap voor stap lezen hoe de puntenscore van GWOTY precies werkt."
        }
        section5ImageURL={lofiAboutImg}
        section5ImageAlt={"Lofi gwoty about pagina"}
        sectionHeader6={"Voorwaarden"}
        sectionParagraph6a={
          "Naast de informatie over GWOTY, is het ook belangrijk om de algemene voorwaarden helder te hebben. Hiervoor is er een voorwaarden pagina waar de gebruiker alle voorwaarden kan vindne."
        }
        section6ImageURL={lofiTermsImg}
        darkBackground={true}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"HiFi"}
        subHeader={"Kleur geven aan het ontwerp"}
        introduction={
          "Nadat de LoFi ontwerpen klaar waren, had ik een gesprek met een marketing medewerker van YoungOnes. Zij was erg enthousiast over de LoFi en het ontwerp zag er een stuk moderener uit dan de website die ze hiervoor gebruikte. Daarnaast werd er nog iets meer duidelijkheid gegeven over de schermen die wel of niet nodig waren. Zo bleek dat een aanmeldscherm en een dashboard voor medewerkers niet nodig waren en dus werden deze schetsen geschrapt voor de HiFi."
        }
        sectionHeader1={"Inloggen"}
        sectionParagraph1a={
          "Voor de HiFi voor het inloggen was er niet veel werk nodig. Er werd een bijpassende afbeelding gebruikt en de kleuren en lettertype werden toegepast volgens de huisstijl."
        }
        section1ImageAlt={"HiFi van het dashboard van GWOTY-awards"}
        section1ImageURL={hifiSignInImg}
        sectionHeader2={"Dashboard"}
        sectionParagraph2a={
          "Ook het dashboard kreeg een update door hier een nieuw logo toe te voegen in de header en bijpassende iconen en huisstijl toe te voegen. Ook werden de menuitems geüpdate."
        }
        section2ImageAlt={"Hifi ontwerp van het dashboard van de GWOTY-awards"}
        section2ImageURL={hifiDashboardImg}
        sectionHeader3={"Profiel"}
        sectionParagraph3a={
          "Een van de feedbackpunten vanuit marketing is dat ze graag een profielpagina willen hebben. Op deze manier heeft de gebruiker een beter inzicht over zijn of haar behaalde punten."
        }
        section3ImageURL={hifiProfileImg}
        section3ImageAlt={"Hifi ontwerp van het profiel van de GWOTY-awards"}
        sectionHeader4={"Leaderboard"}
        sectionParagraph4a={
          "Voor het leaderboard was niet veel werk nodig. Alleen de huisstijl werd toegepast."
        }
        section4ImageURL={hifiLeaderboardImg}
        section4ImageAlt={"Hifi ontwerp van het leaderboard van GWOTY-awards"}
        sectionHeader5={"Over GWOTY"}
        sectionParagraph5a={
          "Ook de HiFi van de about-pagina was erg makkelijk te ontwerpen. Hier was weinig feedback voor ontvangen"
        }
        section5ImageURL={hifiAboutImg}
        section5ImageAlt={"Hifi ontwerp van de about-pagina van GWOTY-awards"}
        sectionHeader6={"Voorwaarden"}
        sectionParagraph6a={
          "De algemene voorwaarden pagina was niet meer nodig. Hiervoor kunnen de freelancers naar de youngones website zelf gaan waar het al in detail wordt uitgelegd. De pagina in het dashboard werd daarom geschrapt."
        }
        button2Href={
          "https://www.figma.com/proto/pmllBf9iI0nUlJ1aCtRiEQ/YOUNGONES-GWOTY-HIFI-V1?type=design&node-id=2-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
        }
        button2Text={"Bekijk het interactief digitaal prototype"}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"HiFi - Mobiel"}
        subHeader={"De mobiele responsive versie van het HiFi-ontwerp"}
        introduction={
          "Uiteraard is het ook belangrijk om een beeld te geven over een mobiele versie. Een standaard website moet namelijk in deze tijd altijd geoptimaliseerd zijn voor alle vormen en maten schermen. Hiervoor werd de content in een smallere kader getoond. In de frontend kan dit makkelijk geautimatiseerd worden met een custom hamburgermenu en stylingselementen zoals flex en grid."
        }
        sectionHeader1={"Inloggen"}
        sectionParagraph1a={
          "Voor de mobiele versie werd de afbeelding verborgen om direct de content weer te geven."
        }
        section1ImageAlt={"Mobiele HiFi van het inloggen van GWOTY-awards"}
        section1ImageURL={hifiSignInResponsiveImg}
        sectionHeader2={"Dashboard"}
        sectionParagraph2a={
          "Het dashboard werd onder elkaar gezet in volgorde van relevantie. De timer werd daarom bovenaan getoond."
        }
        section2ImageAlt={
          "Mobiele Hifi ontwerp van het dashboard van de GWOTY-awards"
        }
        section2ImageURL={hifiDashboardResponsiveImg}
        sectionHeader3={"Profiel"}
        sectionParagraph3a={
          "Bij het profiel werd de sidebar volledig onderaan gezet en het hoofdvak met belangrijke informatie bovenaan."
        }
        section3ImageURL={hifiProfileResponsiveImg}
        section3ImageAlt={
          "Mobiele Hifi ontwerp van het profiel van de GWOTY-awards"
        }
        sectionHeader4={"Leaderboard"}
        sectionParagraph4a={
          "Ook bij het leaderboard verschijnt de sidebar onderaan en het hoofdvlak met belangrijke informatie bovenaan"
        }
        section4ImageURL={hifiLeaderboardResponsiveImg}
        section4ImageAlt={
          "Mobiele Hifi ontwerp van het leaderboard van GWOTY-awards"
        }
        sectionHeader5={"Over GWOTY"}
        sectionParagraph5a={
          "In de mobiele versie verdwijnt de overflow en wordt de tekst volledig onder elkaar getoond om het scrollen te versoepelen"
        }
        section5ImageURL={hifiAboutResponsiveImg}
        section5ImageAlt={
          "Mobiele Hifi ontwerp van de about-pagina van GWOTY-awards"
        }
        button2Href={
          "https://www.figma.com/proto/pmllBf9iI0nUlJ1aCtRiEQ/YOUNGONES-GWOTY-HIFI-V1?type=design&node-id=413-890&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
        }
        button2Text={"Interactief prototype"}
      />

      <ProjectArticle
        darkBackground={darkBackground}
        header={"Eindversie"}
        subHeader={"Het uiteindelijke resultaat in NextJS en Tailwind"}
        introduction={
          "Nadat er een akkoord was bereikt over de Hifi, werd er al snel een NextJS met Tailwind project opgezet om het ontwerp te realiseren in de frontend. Dit was mijn eerste echte project met NextJS en daarom duurde sommige elementen wat langer. Hiervoor had ik alleen ervaring met Svelte, wat nog steeds mijn voorkeur is. Het handmatig opzetten van verschillende hooks om variablen te laten updaten op de canvas vind ik ergens wel handig. Maar toch vind ik dit ergens ook nog een ouderwetse manier. Zeker wanneer je dit vergelijkt met Svelte waar dit volledig is geautimatiseerd zonder enige prestatieverlies"
        }
        sectionHeader1={"Inloggen"}
        sectionParagraph1a={
          "Voor de eindversie werd de afbeelding veranderd naar iets toepasselijker voor de doelgroep: hard werken, ofwel 'strijden'. Ook werd de gekleurde kring verwijderd om meer rust te creeëren."
        }
        section1ImageAlt={"Eindversie van het inlogscherm"}
        section1ImageURL={finalSignInImg}
        sectionHeader2={"Dashboard"}
        sectionParagraph2a={
          "Voor het dashboard heb ik snel een nieuwe bannerafbeelding gemaakt die minder druk overkomt, hierdoor komt de inhoud beter naar voren. Daarnaast is de prestatiesectie ook overzichtelijker vormgegeven."
        }
        section2ImageAlt={"Eindversie van het dashboardscherm"}
        section2ImageURL={finalDashboardImg}
        sectionHeader3={"Dashboard Instagram"}
        sectionParagraph3a={
          "Op verzoek van team marketing moest er nog een informatie pop-up toegevoegd worden om instagram stories uit te leggen. Deze werd toegevoegd in de vorm van een toggable i-knop waardoor er een uitlegscherm verschijnt."
        }
        section3ImageAlt={
          "Eindversie van het Dashboardscherm met instagram stories uitleg"
        }
        section3ImageURL={finalDashboardInstagramImg}
        sectionHeader4={"Leaderboard"}
        sectionParagraph4a={
          "Het Leaderboard werd hernoemd naar tussenstand op verzoek van team marketing. Leaderboard is te engels en team marketing wilde hiervoor een nederlandse benaming. Daarnaast is er meer padding toegevoegd en meer kleuren voor de top 3."
        }
        section4ImageAlt={"Eindversie van het leaderboard"}
        section4ImageURL={finalLeaderboardImg}
        sectionHeader5={"Profiel"}
        sectionParagraph5a={
          "ALs laatste is de profielpagina verwerkt. Hier is vooral de overzicht sectie aangepast. Er is veel onnodige uitleg verwijderd en deze uitleg is samengevat tot belangrijkst gegevens met grote getallen. "
        }
        section5ImageAlt={"Eindversie van het profielscherm"}
        section5ImageURL={finalProfileImg}
        paragraph2a={
          "Hieronder vind u de link naar een statische versie van deze website. Dit is niet de laatste versie. In de laatste versie staan veel connecties met de database van YoungOnes en andere gevoelige informatie. Om die reden is de website zo goed mogelijk om de website alsnog in statische vorm weer te geven."
        }
        button2Href={
          "https://youngones-gwoty-o9bw7u9mo-marcofijan1.vercel.app/"
        }
        button2Text={"Bekijk statische website"}
        button2bHref={"https://github.com/marcoFijan/yo-gwoty"}
        button2bText={"Bekijk github"}
      />

      {/* TODO: Knop naar github */}
    </div>
  );
}
