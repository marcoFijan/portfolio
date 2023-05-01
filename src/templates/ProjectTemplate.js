import Image from "next/image";
import kboIntroImg from "../../public/images/KBOReeshof/KBOIntro.png";
import stakeholdersImg from "../../public/images/KBOReeshof/Stakeholders.png";
import kboReeshofBuildingImg from "../../public/images/KBOReeshof/KBOReeshofBuilding.png";
import persona1Img from "../../public/images/KBOReeshof/Persona1.jpg";
import persona2Img from "../../public/images/KBOReeshof/Persona2.jpg";
import empathyMapImg from "../../public/images/KBOReeshof/EmpathyMap.jpg";
import inspirationboardsHarrisProfile from "../../public/images/KBOReeshof/InspirationboardsHarrisProfile.png";

import Article from "../molecules/Article";
import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";
import H1 from "../atoms/H1";
import H2 from "../atoms/H2";
import P from "../atoms/Paragraph";
import SubH2 from "../atoms/SubH2";
import ProjectIntroduction from "../organisms/ProjectIntroduction";
import ProjectArticle from "../organisms/ProjectArticle";

export default function ProjectTemplate({
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
        title={title}
        subTitle={subTitle}
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
        sectionHeader2={"Belangrijkste eisen"}
        sectionParagraph2a={
          "Op basis van mijn onderzoeksresultaten splitste ik de doelgroep op in categorieën en werd er met deze kennis een uitgebreid Programma van Eisen opgezet. Met een Programma van Eisen geef je een overzicht van alle eisen waaraan het product moet voldoen. Deze eisen worden gerankt met de methode MoSCoW."
        }
        sectionData2={importantDemands}
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
        paragraph1ImageURL={inspirationboardsHarrisProfile}
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
        introduction={""}
        paragraph1a={""}
      />

      {/* <article>
        <Title text={title} darkBackground={darkBackground} />
        <SubTitle text={subTitle} />
        <section>
          <section>
            <P text={introduction} darkBackground={darkBackground} />
            <P text={introduction2} darkBackground={darkBackground} />
          </section>
        </section>
      </article>
      <Article
        transparent={true}
        title={title}
        subTitle={subTitle}
        paragraph1={introduction}
        paragraph2={introduction2}
        extraContent={
          <Image
            className="w-full h-96 object-cover"
            src={marcoPointingAtText}
            alt="Picture of Marco Fijan pointing to text"
          />
        }
      ></Article>
      <Article
        transparent={true}
        header1={"Verkennen"}
        header2={"Onderzoek doen naar de doelgroep"}
        paragraph1={"Voordat"}
      ></Article>
      <Article
        transparent={true}
        header1={"Definiëren"}
        header2={"De doelgroep en eisen vastleggen"}
        paragraph1={
          "Voor er iets bedacht kan worden voor de doelgroep is het belangrijk dat hier eerst globaal onderzoek naar gedaan wordt."
        }
      ></Article>
      <Article
        transparent={true}
        header1={"Afbakenen"}
        header2={"Begrijpen van de doelgroep"}
        paragraph1={"Voordat"}
      ></Article>
      <Article
        transparent={true}
        header1={"Ideegeneratie"}
        header2={"Het genereren van mogelijke oplossingen"}
        paragraph1={"Voordat"}
      ></Article>
      <Article
        transparent={true}
        header1={"Conceptualiseren"}
        header2={"Mogelijke concepten noteren"}
        paragraph1={"Voordat"}
      ></Article> */}
    </div>
  );
}
