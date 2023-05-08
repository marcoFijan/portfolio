// IMAGES
import Image from "next/image";
import kboIntroImg from "../../public/images/KBOReeshof/KBOIntro.png";
import stakeholdersImg from "../../public/images/KBOReeshof/Stakeholders.png";
import kboReeshofBuildingImg from "../../public/images/KBOReeshof/KBOReeshofBuilding.png";
import persona1Img from "../../public/images/KBOReeshof/Persona1.jpg";
import persona2Img from "../../public/images/KBOReeshof/Persona2.jpg";
import empathyMapImg from "../../public/images/KBOReeshof/EmpathyMap.jpg";
import inspirationboardsHarrisProfileImg from "../../public/images/KBOReeshof/InspirationboardsHarrisProfile.png";
import conceptImg from "../../public/images/KBOReeshof/Concept.png";
import designRulesImg from "../../public/images/KBOReeshof/DesignRules.jpg";
import activitiesImg from "../../public/images/KBOReeshof/Activities.png";
import footerImg from "../../public/images/KBOReeshof/Footer.png";
import helpMenuImg from "../../public/images/KBOReeshof/HelpMenu.png";
import homeImg from "../../public/images/KBOReeshof/Home.png";
import introductionImg from "../../public/images/KBOReeshof/introduction.png";
import menuImg from "../../public/images/KBOReeshof/Menu.png";

import Article from "../molecules/Section";
import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";
import H1 from "../atoms/H1";
import H2 from "../atoms/H2";
import P from "../atoms/Paragraph";
import SubH2 from "../atoms/SubH2";
import ProjectIntroduction from "../organisms/ProjectIntroduction";
import ProjectArticle from "../organisms/ProjectArticle";
import ProjectArticleSpecial from "../organisms/ProjectArticleSpecial";

export default function ProjectKBOTilburgReesof({
  title,
  subTitle,
  introduction,
  paragraph1a,
  paragraph1b,
}) {
  const darkBackground = true;
  const importantInsights = [
    "Ouderen hebben moeite met inloggen op websites",
    "Veel ouderen zijn gaan pinnen door corona; gebruik pincode gaat goed",
    "‘Platte’ logo’s zijn over het algemeen onduidelijk voor ouderen",
    "Websites worden vrijwel alleen bezocht op grote schermen; laptop of computer",
    "Veel ouderen vinden donkere knoppen fijner dan fel gekleurde; beter contrastratio en daardoor beter leesbaar",
    "Ouderen zijn erg actief en proberen zoveel mogelijk te doen op een dag zolang er daglicht is; Gebruiken computers alleen in de ochtend of avond.",
    "Ouderen letten meer op pop-up berichten in tegenstelling tot jongeren",
    "Voorkom serifs en andere ingewikkelde lettertypen",
    "Gebruik een hoog contrastratio",
    "Voor de kleinste tekst minimaal 16 punten (1 rem)",
    "‘Don’t make me think’ & ‘Don’t make me remember’",
    "Design minimaal en toon niet te veel in 1 keer op het scherm",
    "Zorg voor duidelijke beschrijvende knoppen, niet alleen iconen",
    "Pastelkleuren, de kleur geel en de kleur felblauw zijn vermoeiend en slecht zichtbaar voor ouderen",
  ];
  const importantDemands = [
    "De gebruiker kan zich opgeven voor activiteiten",
    "De gebruiker kan informatie, zoals contactinformatie en nieuws,vinden in het product",
    "Het product is toegespitst op de leden en gemeenshap van KBO Tilburg Reeshof",
    "Het product moet aantrekkelijk zijn voor de gebruiker, ofwel ouderen",
    "Het product moet zo min mogelijk jargon, Engelse en technische woorden bevatten",
    "Het product moet zo min mogelijk gele, lichtblauwe en pastelkleuren gebruiken",
    "Het product moet niet te veel informatie in 1 keer tonen; Inhoud opdelen in stappen",
    "Voor de kleinste tekst moet er minimaal 16 punten (1 rem) gebruikt worden, liefst meer",
    "Het product heeft verschillende ‘shortcuts’ om te navigeren van en naar pagina’s",
    "Het product moet gefocust zijn op een laptop en computer formaat (16:9)",
    "Het product betreft een digitaal prototype",
  ];

  return (
    <div className="max-w-wrapper mx-auto w-full block px-articlePadding">
      <ProjectArticle
        title={title}
        subTitle={subTitle}
        summaryProject={{
          Projectjaar: "2022",
          Projectdoel: "Moderne uitstraling",
          Doelgroep:
            "Eenzame ouderen vanaf 65 jaar in omgeving Tilburg Reeshof",
        }}
        paragraph1a={introduction}
        paragraph1ImageAlt={"Afbeelding van het ontworpen product"}
        paragraph1ImageURL={kboIntroImg}
        paragraph1ImageSmall={true}
        buttonHref={"/"}
        buttonText={"Bekijk het prototype"}
        buttonCTA={true}
        darkBackground={true}
      />
      <ProjectArticle
        header={"Probleemstelling"}
        subHeader={"Het probleem concreet beschrijven"}
        paragraph1a={paragraph1a}
        paragraph1b={paragraph1b}
        paragraph1ImageAlt={"Afbeelding van KBO Tilburg Reeshof"}
        paragraph1ImageURL={kboReeshofBuildingImg}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"max-w-[30rem] align-self-center row-start-1"}
        buttonHref={"/"}
        buttonText={"Bekijk het prototype"}
        buttonCTA={true}
        darkBackground={true}
      />
      <ProjectArticle
        header={"Verkennen"}
        subHeader={"Onderzoek doen naar de doelgroep"}
        introduction={
          "Voor er iets bedacht kan worden voor de doelgroep is het belangrijk dat hier eerst globaal onderzoek naar gedaan wordt. Hieronder vindt u mijn belangrijkste bevindingen uit het onderzoek"
        }
        header2a={"Stakeholders"}
        paragraph1a={
          "Op basis van mijn observaties bij het meedoen met activiteiten en gesprekken met mijn kennispartner heb ik verschillende stakeholders kunnen noteren. Elke stakeholder heeft zijn of haar eigen wensen en belangen wanneer het gaat over een website van een wijkgemeenschap. De belangrijkste stakeholders zijn de ouderen en het wijkhuis, KBO Tilburg Reeshof. De ouderen moeten zonder inspanning de website kunnen gebruiken en daarnaast moet de website technisch ook haalbaar zijn voor KBO Tilburg Reeshof"
        }
        paragraph1ImageURL={stakeholdersImg}
        paragraph1ImageAlt={"Diagram van de verschillende stakeholders"}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"w-96 justify-self-center"}
        darkBackground={darkBackground}
        header2b={"Perona's en Empathy map"}
        paragraph2a={
          "Om mijn resultaten over de doelgroep in kaart te brengen heb ik persona’s opgesteld. Deze persona’s heb ik op kunnen stellen met de onderzoeksmethodes ‘fly on the wall’, literatuuronderzoek naar de doelgroep en enquêtes. Er werden voor deze onderzoeksmethodes gekozen omdat je op deze manier veel informatie kan verzamelen op een niet opdringerige manier. Daarnaast kunnen ouderen ook zichzelf zijn en doen ze volledig wat ze zelf willen zonder invloed van een ander. Vooral het ‘fly on the wall’-onderzoek gaf mij veel inzichten. Zo bleek dat ouderen erg verschillend zijn. Deze verschillen heb ik daarom opgesplitst in 2 persona’s; Digibeet en enige ervaring."
        }
        paragraph2b={
          "Uit mijn vooronderzoek, voornamelijk ‘fly on the wall’, bleek dat de doelgroep ook veel verschillende wensen, gedragingen en gebruiken hebben. Om dit in kaart te stellen zet ik ook een empathie map op. Hierin worden alle doelen en attitudes, ofwel ‘pains’ en ‘gains’ overzichtelijk genoteerd"
        }
        extraContent2={
          <section>
            <section className="grid grid-cols-fluid gap-8 mb-8 items-center">
              <Image
                className="w-full border-white border-8"
                src={persona1Img}
                alt="Afbeelding van persona 1"
              />
              <Image
                className="w-full border-white border-8"
                src={persona2Img}
                alt="Afbeelding van persona 2"
              />
            </section>
            <Image
              className="w-full max-w-[50rem] mx-auto border-white border-8"
              src={empathyMapImg}
              alt="Afbeelding van Empathy Map"
            />
          </section>
        }
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"Definiëren"}
        subHeader={"De eisen voor het product vastleggen"}
        introduction={
          "Nu er een globaal beeld is van de doelgroep, is het van belang om deze bevindingen concreet te noteren en te focussen op de daadwerkelijke wensen en eisen van de doelgroep en het product"
        }
        sectionHeader1={"Belangrijkste inzichten"}
        sectionParagraph1a={
          "Bij het verkennen is er vooral gewerkt met observaties. Nu worden de resultaten van de observaties getoetst met de daadwerkelijke doelgroep. Het toetsen van deze onderzoeksresultaten wordt voornamelijk gedaan met interviews. Ook werd er een design pattern search uitgevoerd om huidige theorieën en patterns te vinden voor het ontwerpen bij deze doelgroep. De belangrijkste inzichten waren: "
        }
        sectionData1={importantInsights}
        section1LinkHref={
          "https://amenable-sword-4e9.notion.site/Interviews-Bag-tour-860c2c93b8564e1a9eac450c6341d45e"
        }
        section1LinkText={"Bekijk alle interviews"}
        sectionHeader2={"Belangrijkste eisen"}
        sectionParagraph2a={
          "Op basis van mijn onderzoeksresultaten splitste ik de doelgroep op in categorieën en werd er met deze kennis een uitgebreid Programma van Eisen opgezet. Met een Programma van Eisen geef je een overzicht van alle eisen waaraan het product moet voldoen. Deze eisen worden gerankt met de methode MoSCoW."
        }
        sectionData2={importantDemands}
        section2LinkHref={
          "https://amenable-sword-4e9.notion.site/Programma-van-Eisen-79af771f4c874a0d8107fd1660a8a891"
        }
        section2LinkText={"Bekijk alle eisen"}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"Ideegeneratie"}
        subHeader={"Het genereren van mogelijke oplossingen"}
        introduction={
          "Met de kennis opgedaan uit de verschillende onderzoeksmethodes wordt er gebrainstormt. Hier worden aan de hand van verschillende methodes mogelijke oplossingen bedacht. Het doel is om zoveel mogelijk oplossingen te bedenken"
        }
        header2a={"Inspiratieborden en Harris profiel"}
        paragraph1a={
          "Op basis van bestaande oplossingen, moderne ontwerptheorieën en de kennis over de doelgroep worden er verschillende inspiratieborden opgesteld. Deze inspiratieborden bevatten zoveel mogelijk relevante afbeeldingen. Door deze afbeeldingen bij elkaar te plaatsen, kunnen er ideeën ontstaan"
        }
        paragraph1b={
          "Een andere erg hulpvolle methode was de Harris Profiel. Hier werd de functionaliteit opgesplitst in eisen en werden er per eis mogelijke oplossingen bedacht. Door deze oplossingen te combineren kunnen er orginele ideeën ontstaan. "
        }
        paragraph1c={
          "Aangezien er veel ideegeneratie methodes zijn gebruikt en veel van deze methodes vrij groot zijn in uitwerking, kunt u de ideegeneratie methodes het best bekijken in de betreffende design rationale onderaan de pagina of in de productbiografie"
        }
        paragraph1ImageURL={inspirationboardsHarrisProfileImg}
        paragraph1ImageAlt={
          "Afbeelding van inspiratieborden en het Harris Profiel"
        }
        paragraph1ImageSmall={true}
        button1Href={
          "https://amenable-sword-4e9.notion.site/Ideegeneratie-141e664077d64253a884f872ab156497"
        }
        button1Text={"Bekijk ideegeneratie in productbiografie"}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"Conceptualiseren"}
        subHeader={"Itereren op mogelijke oplossingen"}
        introduction={
          "Nadat er verschillende ideeën vaststaan, worden er keuzes gemaakt en worden deze keuzes uitgewerkt in schetsen"
        }
        header2a={"Concept"}
        paragraph1a={
          "Uit mijn literatuuronderzoek over skeuomorphisme, de resultaten van het Harris Profiel en de resultaten van de feedback frenzy, bleek de combinatie van het idee van een klikbare omgeving en een standaard website met skeuomorphisme-knoppen een goede combinatie. Ook mijn kennispartner was hier erg positief over en was vooral enthousiast over de visueel klikbare website, maar gaf ook aan dat een het hebben van een ‘standaard’ website essentieel is voor de ouderen en mensen die al wel ervaring hebben met websites."
        }
        paragraph1b={
          "Uit mijn observaties en interviews met de doelgroep bleek overduidelijk dat ouderen erg verschillend zijn en verschillende wensen hebben. Zo zijn er ongeduldige ouderen met ervaring die liever een standaard goed leesbare website hebben met een zoekbalk, maar zijn er ook ouderen die letterlijk slapeloze nachten krijgen van computers. Het aanbieden van de website in verschillende vormen, kan daarom een goede uitkomt bieden."
        }
        paragraph1c={
          "Bij binnenkomst krijgt de gebruiker de keuze om een standaard website of om een visuele versimpelde website te bezoeken. Bij de standaard website wordt er een zijbalk gebruikt met essentiële elementen in de vorm van een herkenbare afstandsbediening. De visuele website toont een muur met verschillende klikbare elementen die vervolgens informatie geeft wanneer er op wordt geklikt."
        }
        paragraph1ImageURL={conceptImg}
        paragraph1ImageAlt={"Schets van het concept"}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"row-start-1 max-w-[30rem]"}
        button1CTA={true}
        button1Href={
          "https://amenable-sword-4e9.notion.site/Digitale-schetsen-voor-feedback-frenzy-530edefdd420499e8e6d6bbb2c3fda93"
        }
        button1Text={"Bekijk alle concepten"}
        header2b={"Vormgevingsregels"}
        paragraph2a={
          "Aangezien het gaat om een compleet nieuw ontwerp gaat en de doelgroep ouderen betreft, kunnen er nu nog geen harde beslissingen gemaakt worden over de daadwerkelijke vormgeving. Verschillende elementen dienen eerst getest te worden met de doelgroep. Wel kunnen er kleuren en vormgevingsregels vastgesteld worden op basis van mijn onderzoek naar de doelgroep en het huidige logo van KBO Brabant."
        }
        paragraph2b={
          "Tijdens de interviews heb ik ook de meeste ouderen verschillende knoppen en iconen laten zien en konden ze aangeven welke knoppen en iconen ze begrepen en het duidelijkst vonden. Hier kwam onder andere uit dat de meeste platte iconen onherkenbaar zijn voor ouderen en dat donkere knoppen erg geliefd waren vanwege de hoge contrastratio en  leesbaarheid. Daarnaast waren ‘3d-knoppen’ ook erg geliefd."
        }
        paragraph2c={
          "Uit de design pattern search kwamen daarnaast ook nog veel patterns over het gebruik van lettertype en -grootte en kleurgebruik  die hier ook zijn gebruikt voor de tekst en overige vormgevingsregels"
        }
        paragraph2ImageURL={designRulesImg}
        paragraph2ImageAlt={"Overzicht van de Vormgevingsregels"}
        paragraph2ImageSmall={true}
        button2CTA={true}
        button2Href={
          "https://amenable-sword-4e9.notion.site/Design-pattern-search-0907ce46570c41b8a383b66d38553d30"
        }
        button2Text={"Bekijk alle design patterns"}
      />
      {/* <ProjectArticle header={"Eindproduct"} subHeader={''} /> */}
      <ProjectArticle
        darkBackground={darkBackground}
        header={"Eindproduct"}
        subHeader={"Diverse schermen van het eindproduct"}
        introduction={
          "Hieronder vind u enkele afbeeldingen van het eindproduct om u een beeld te geven. Wilt u alle schermen zien? Of het interactief product proberen? Bekijk dan de design rationale of het productbiografie."
        }
        sectionHeader1={"Introductie website"}
        sectionParagraph1a={
          "De hoofdpagina waar de ouder, na de introductieschermen, terecht komt"
        }
        section1ImageAlt={"KBO Tilburg Reeshof hoofdpagina afbeelding"}
        section1ImageURL={introductionImg}
        sectionHeader2={"Hoofdscherm"}
        sectionParagraph2a={
          "Het scherm dat opent wanneer de ouder op één van de vele hulpknoppen drukt"
        }
        section2ImageAlt={"KBO Tilburg Reeshof helpmenu afbeelding"}
        section2ImageURL={homeImg}
        sectionHeader3={"Menu"}
        sectionParagraph3a={
          "Het menu dat opent wanneer de gebruiker op een 'wat wilt u doen?'-knop drukt"
        }
        section3ImageAlt={"KBO Tilburg Reeshof menu afbeelding"}
        section3ImageURL={menuImg}
        sectionHeader4={"Hulp menu"}
        sectionParagraph4a={
          "Het scherm dat opent wanneer de ouder op één van de vele hulpknoppen drukt"
        }
        section4ImageAlt={"KBO Tilburg Reeshof helpmenu afbeelding"}
        section4ImageURL={helpMenuImg}
        sectionHeader5={"Activiteiten bekijken"}
        sectionParagraph5a={
          "De hoofdpagina waar de ouder, na de introductieschermen, terecht komt"
        }
        section5ImageAlt={"KBO Tilburg Reeshof hoofdpagina afbeelding"}
        section5ImageURL={activitiesImg}
        sectionHeader6={"Footer"}
        sectionParagraph6a={
          "De hoofdpagina waar de ouder, na de introductieschermen, terecht komt"
        }
        section6ImageAlt={"KBO Tilburg Reeshof helpmenu afbeelding"}
        section6ImageURL={footerImg}
      />
      <ProjectArticleSpecial
        darkBackground={darkBackground}
        header={"Documentatie"}
        subHeader={"Volledige documentatie van het project"}
        introduction={
          "Hier vind u de design rationale en een link naar de volledige productbiografie"
        }
        header2a={"Design Rationale"}
        iframeSrc={
          "https://drive.google.com/file/d/1iXpgTq90AxV9-KqkzIO90jlGQBFBjct8/preview"
        }
        linkHref={
          "https://amenable-sword-4e9.notion.site/Productbiografie-1edc81194bb144b2bddb7619a652b5b0"
        }
        linkText={"Bekijk het productbiografie"}
      />
    </div>
  );
}
