// IMAGES
import hifiAbout from "../../public/images/YoGwoty/HiFiAbout.png";
import hifiAboutResponsive from "../../public/images/YoGwoty/HiFiAboutMobiel.png";
import hifiDashboard from "../../public/images/YoGwoty/HiFiDashboard.png";
import hifiDashboardResponsive from "../../public/images/YoGwoty/HiFiDashboardMobiel.png";
import hifiSignIn from "../../public/images/YoGwoty/HiFiInloggen.png";
import hifiSignInResponsive from "../../public/images/YoGwoty/HiFiInloggenMobiel.png";
import hifiLeaderboard from "../../public/images/YoGwoty/HiFiLeaderboard.png";
import hifiLeaderboardResponsive from "../../public/images/YoGwoty/HiFiLeaderboardMobiel.png";
import hifiProfile from "../../public/images/YoGwoty/HiFiProfiel.png";
import hifiProfileResponsive from "../../public/images/YoGwoty/HiFiProfielMobiel.png";
import hifiForgotPassword from "../../public/images/YoGwoty/HiFiWachtwoordVergeten.png";
import lofiAbout from "../../public/images/YoGwoty/LoFiAbout.png";
import lofiTerms from "../../public/images/YoGwoty/LoFiAlgemeneVoorwaarden.png";
import lofiDashboardV1 from "../../public/images/YoGwoty/LoFiDashboardVersie1.png";
import lofiDashboardV2 from "../../public/images/YoGwoty/LoFiDashboardVersie2.png";
import lofiSignIn from "../../public/images/YoGwoty/LoFiInloggen.png";
import lofiLeaderboard from "../../public/images/YoGwoty/LoFiLeaderboard.png";

// COMPONENTS
import ProjectArticle from "../organisms/ProjectArticle";

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
        section1ImageURL={lofiSignIn}
        section1ImageAlt={"lofi gwoty inloggen afbeelding"}
        sectionHeader2={"Dashboard V1"}
        sectionParagraph2a={
          "De belangrijkste pagina is het dashboard. Dit is waar alle essentiele informatie te vinden is. In de eerste iteratie had ik de timer klein linksboven staan."
        }
        section2ImageURL={lofiDashboardV1}
        section2ImageAlt={"Lofi gwoty dashboard versie 1"}
        sectionHeader3={"Dashboard V2"}
        sectionParagraph3a={
          "Uiteindelijk besloot ik om knoppen te maken van de kaders bovenin. Dit geeft meer rust, en een mogelijk hogere conversieratio voor de secundaire pagina's."
        }
        section3ImageURL={lofiDashboardV2}
        section3ImageAlt={'Lofi gwoty dashboard versie 2'}
        sectionHeader4={'Leaderboard'}
        sectionParagraph4a={'Tijdens de wedstrijd willen de freelancers natuurlijk ook een ranglijst zien met hun positie en die van hun concurrenten. Hiervoor is er een leaderboard beschikbaar'}
        sectionHeader5={'Over GWOTY'}
        sectionParagraph5a={'Om mensen te informeren over wat GWOTY precies inhoud, werd er een about-pagina ontworpen. Hier kan de gebruiker stap voor stap lezen hoe de puntenscore van GWOTY precies werkt.'}
        section5ImageURL={lofiAbout}
        section5ImageAlt={'Lofi gwoty about pagina'}
        sectionHeader6={''}
        section6ImageURL={lofiTerms}
        
        
        
        
        paragraph1ImageAlt={"Website voor het herontwerp"}
        paragraph1ImageURL={oldDesignImg}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"max-w-[30rem] align-self-center row-start-1"}
        buttonHref={"/"}
        buttonText={"Bekijk het prototype"}
        buttonCTA={true}
        darkBackground={true}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"Huisstijl elementen"}
        subHeader={"Huisstijl voor briefpapier en facturen"}
        introduction={
          "Voor er iets bedacht kan worden voor de doelgroep is het belangrijk dat hier eerst globaal onderzoek naar gedaan wordt. Hieronder vindt u mijn belangrijkste bevindingen uit het onderzoek"
        }
        sectionHeader1={"Logo"}
        sectionParagraph1a={
          "De aannemer is recentelijk een rebranding aangegaan en heeft het bedrijf hernoemd naar standaard aanbouw. Hiervoor huurde de aannemer een designer voor een nieuw logo"
        }
        section1ImageAlt={"Huidig logo van Standaard Aanbouw"}
        section1ImageURL={logoImg}
        sectionHeader2={"Briefpapier"}
        sectionParagraph2a={
          "De aannemer werkt voornamelijk via bestaande contacten en heeft hiervoor geen website nodig gehad. Wel werden er facturen opgesteld en hiervoor werd briefpapier ontworpen"
        }
        section2ImageAlt={"Gebruikt briefpapier voor recente facturen"}
        section2ImageURL={paperStyleImg}
      />

      <ProjectArticle
        darkBackground={darkBackground}
        header={"Herontwerp"}
        subHeader={"Overzicht van de hoofditeraties"}
        introduction={
          "Hieronder vind u de verschillende iteraties tijdens het ontwerpproces. Ik begon met een schets in de vorm van een LoFi ontwerp en eindigde met een eind HiFI ontwerp."
        }
        sectionHeader1={"LoFi ontwerp"}
        sectionParagraph1a={
          "In het LoFi-ontwerp probeerde ik de stijl van het briefpapier na te bootsen. De schuine donkere balken wil ik de blauwe huiskleur geven en als accentkleur wil ik de geel groene kleur gebruiken. De opdrachtgever was tevreden met het LoFi-ontwerp en ik ging dus verder met het HiFi-ontwerp"
        }
        section1ImageAlt={"Eerste schets en ontwerp van herontwerp"}
        section1ImageURL={lofiImg}
        sectionHeader2={"Eerste HiFi iteratie"}
        sectionParagraph2a={
          "In dit ontwerp voeg ik kleur en afbeeldingen toe om het ontwerp meer vorm te geven. Naast de afbeeldingen probeerde ik ook de huisstijl van het briefpapier na te bootsen op de website. Voor de menuselectie gebruikte ik het oorspronkelijke ontwerp van de beter wonen website."
        }
        section2ImageAlt={"Eerste herontwerp met kleur, huisstijl en detail"}
        section2ImageURL={hifi1Img}
        sectionHeader3={"Tweede HiFi iteratie"}
        sectionParagraph3a={
          "Het blauw in de eerste HiFi iteratie vond ik te druk. Daarnaast pastte de afgeronde knoppen niet in de stijl van de rest van de website en werden deze dus aangepast. Ook waren er nog geen verkopersslogans aanwezig terwijl bewezen is dat dit klanten vertrouwen geeft. Als laatste is de tekst ook beter vormgegeven."
        }
        section3ImageAlt={
          "Tweede iteratie van het herontwerp met kleur, huisstijl en detail"
        }
        section3ImageURL={hifi2Img}
        sectionHeader4={"Derde HiFi iteratie"}
        sectionParagraph4a={
          "In de volgende iteratie heb ik geëxperimenteerd met de herosectie van de pagina. In de vorige itaratie was de tekst, ondanks de tekstschaduw, de tekst nog slecht leesbaar."
        }
        section4ImageAlt={"Eerste schets en ontwerp van herontwerp"}
        section4ImageURL={hifi3Img}
        sectionHeader5={"Vierde HiFi iteratie"}
        Daarnaast
        vielen
        de
        slogans
        bovenaan
        niet
        erg
        op
        sectionParagraph5a={
          "In deze iteratie werd er verder geïtereerd op de herosectie en kreeg de achtergrondkleur, knop, header en titel aangepast. Ook werden er keurmerken toegevoegd om vertrouwen te wekken."
        }
        section5ImageAlt={"Eerste herontwerp met kleur, huisstijl en detail"}
        section5ImageURL={hifi4Img}
        sectionHeader6={"Laatste HiFi iteratie"}
        sectionParagraph6a={
          "De aannemer heeft geen keurmerken dus werden deze verwijderd. Daarnaast werden er secondaire knoppen, een galerij, een contactsectie en recente nieuwspagina's toegevoegd op de hoofdpagina."
        }
        section6ImageAlt={
          "Tweede en laatste iteratie van het herontwerp met kleur, huisstijl en detail"
        }
        section6ImageURL={hifi5Img}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"Overige schermen"}
        subHeader={"Overzicht van diverse detailpagina's"}
        introduction={
          "Nadat er een akkoord was bereikt over het eindontwerp van de hoofdpagina, werden diverse detailpagina's uitgewerkt. Deze detailpainga's werden in dezelfde vorm en huisstijl ontworpen dan het hoofdscherm. Hieronder vind u de 3 hoofddetailpagina's vormgegeven."
        }
        sectionHeader1={"Blogpagina"}
        sectionParagraph1a={
          "Verschillende klanten bij het bedrijf willen graag op de hoogte gesteld blijven over diverse ontwikkelingen bij het bedrijf. Hiervoor wordt een nieuwspagina ofwel blogpagina bijgehouden door de aannemer. Daarnaast geeft het hebben van een up-to-date nieuwspagina meer vertrouwen naar potentiele nieuwe klanten."
        }
        section1ImageAlt={"HiFi van de blogpagina"}
        section1ImageURL={blogPageImg}
        sectionHeader2={"HiFi van de servicepagina's"}
        sectionParagraph2a={
          "De aannemer levert verschillende services. De aannemer wilt de focus hebben op 'hulp bij het zelf aannemen' en daarom is deze optie als call-to-action zichtbaar op het hoofdscherm. Bij de vergelijking tussen services wordt deze optie daarom ook in het midden getoond, de positie waar ogen het eerst naar toe gaan."
        }
        section2ImageAlt={"Eerste herontwerp met kleur, huisstijl en detail"}
        section2ImageURL={servicePageImg}
      />

      <ProjectArticle
        darkBackground={darkBackground}
        header={"Github en Eindresultaat"}
        subHeader={"Code en eindontwerp"}
        introduction={
          "Nadat er een akkoord was voor het ontwerp, werd de website responsive ontworpen op Wordpress. Er werd gebruik gemaakt van een thema die semantieke HTML genereerd en de plugin Advanced Custom Fields. Met Advanced Custom Fields heb je als devloper veel flexibiliteit met het ontwerpen. Voor elk type content, kan er een 'custom field' aangemaakt worden waar je als devloper de styling en positie kan aanpassen. Daarnaast is het mogelijk om al die verschillende 'fields' in een specifieke structuur voor de eigenaar te tonen waardoor het wijzigen en toevoegen van content wordt versimpeld."
        }
        header2a={"Github"}
        paragraph1a={
          "Helaas is de aannemer en eigenaar momenteel bezig met een groot persoonlijk project waardoor hij geen tijd heeft om nieuwe klussen aan te nemen. De website staat daarom momenteel offline. De code kunt u echter nog wel bekijken op mijn github"
        }
        button1Href={"https://github.com/marcoFijan/StandaardAanbouwWordpress"}
        button1Text={"Bekijk github"}
        section1ImageAlt={"HiFi van de blogpagina"}
        section1ImageURL={blogPageImg}
        sectionHeader2={"HiFi van de servicepagina's"}
        sectionParagraph2a={
          "De aannemer levert verschillende services. De aannemer wilt de focus hebben op 'hulp bij het zelf aannemen' en daarom is deze optie als call-to-action zichtbaar op het hoofdscherm. Bij de vergelijking tussen services wordt deze optie daarom ook in het midden getoond, de positie waar ogen het eerst naar toe gaan."
        }
        section2ImageAlt={"Eerste herontwerp met kleur, huisstijl en detail"}
        section2ImageURL={servicePageImg}
      />
    </div>
  );
}
