// IMAGES
import hifi1JobsImg from "../../public/images/YoDashboardClients/HiFi1Klussen.png";
import hifi1FreelancerImg from "../../public/images/YoDashboardClients/HiFi1Freelancer.png";
import hifi1OverviewImg from "../../public/images/YoDashboardClients/HiFi1Overzicht.png";
import hifi2JobsImg from "../../public/images/YoDashboardClients/HiFi2Klussen.png";
import hifi2FreelancerImg from "../../public/images/YoDashboardClients/HiFi2Freelancer.png";
import hifi2OverviewImg from "../../public/images/YoDashboardClients/HiFi2Overzicht.png";
import hifi3JobsImg from "../../public/images/YoDashboardClients/HiFi3Klussen.png";
import hifi3JobsFilterImg from "../../public/images/YoDashboardClients/HiFi3KlussenFilters.png";
import hifi3JobsTypeFilterImg from "../../public/images/YoDashboardClients/HiFi3KlussenTypeFilter.png";
import hifi3FreelancerImg from "../../public/images/YoDashboardClients/HiFi3Freelancer.png";
import hifi3FreelancerExplainImg from "../../public/images/YoDashboardClients/HiFi3FreelancerExplain.png";
import hifi3OverviewImg from "../../public/images/YoDashboardClients/HiFi3Overzicht.png";
// import hifi3OverviewTypeFilterImg from "../../public/images/YoDashboardClients/HiFi3OverzichtTypeFilter.png";
import lofiFreelancerImg from "../../public/images/YoDashboardClients/LoFiFreelancer.png";
import lofiJobsImg from "../../public/images/YoDashboardClients/LoFiKlussen.png";
import lofiJobsFilterImg from "../../public/images/YoDashboardClients/LoFiKlussenFilters.png";
import lofiOverviewImg from "../../public/images/YoDashboardClients/LoFiOverzicht.png";
import lofiOverviewFilterImg from "../../public/images/YoDashboardClients/LoFiOverzichtFilters.png";
import originalDashbordImg from "../../public/images/YoDashboardClients/PowerBiDataViewer.png";
import finalFreelancerImg from "../../public/images/YoDashboardClients/EIndversieFreelancer.png";
import finalJobsImg from "../../public/images/YoDashboardClients/EindversieKlussen.png";
import finalOverview from "../../public/images/YoDashboardClients/EindversieOverzicht.png";
import finalOverviewFilter from "../../public/images/YoDashboardClients/EindversieOverzichtFilter.png";

// COMPONENTS
import ProjectArticle from "../organisms/ProjectArticle";
import SideCanvas from "../organisms/SideCanvas";

export default function ProjectStandaardAanbouw({}) {
  const darkBackground = true;

  return (
    <div className="max-w-wrapper mx-auto w-full block">
      <ProjectArticle
        title={"Opdrachtgever Dashboard"}
        subTitle={"Een overzicht van alle freelancers via YoungOnes"}
        summaryProject={{
          Projectjaar: "2022",
          Projectdoel:
            "Een dashboard creeëren die opdrachtgevers van YoungOnes kunnen gebruiken om inzichten te maken op hun data.",
          Doelgroep: "Opdrachtgevers die YoungOnes gebruiken",
        }}
        paragraph1a={
          "YoungOnes gebruikte tot nu toe een automatisch gegenereerde PowerBI dashboard die de opdrachtgevers konden geberuiken om inzichten te doen. PowerBI gaf alleen tabellen en had geen enkele vorm van datavisualistie. Hierdoor is het lastiger om nuttige inzichten te doen over de data. Er moest daarom een nieuw dashboard ontworpen en hier kreeg ik de opdracht"
        }
        paragraph1ImageSmall={true}
        canvas={
          <SideCanvas
            laptopScreen={"../images/Thumbnails/YODashboardThumb.png"}
          />
        }
        darkBackground={true}
      />
      <ProjectArticle
        header={"Huidig dashboard"}
        subHeader={"Huidig gebruikt PowerBI dashboard"}
        paragraph1a={
          "YoungOnes gebruikte tot nu toe een automatisch gegenereerde PowerBI dashboard die de opdrachtgevers konden geberuiken om inzichten te doen. PowerBI gaf alleen tabellen en had geen enkele vorm van datavisualistie. Hierdoor is het lastiger om nuttige inzichten te doen over de data. Er moest daarom een nieuw dashboard ontworpen en hier kreeg ik de opdracht"
        }
        paragraph1ImageAlt={"Power BI dashboard afbeelding"}
        paragraph1ImageSmall={true}
        paragraph1ImageURL={originalDashbordImg}
        paragraph1ImageClassname={"align-self-center row-start-1"}
        darkBackground={true}
      />
      <ProjectArticle
        header={"LoFi iteratie"}
        subHeader={"De eerste schets van het nieuwe dashboard"}
        paragraph1a={
          "Na wat snelle schetsen op papier besloot ik de data op te splitsen in 3 categorieën: Overzicht, Freelancer en Klussen. Bovenaan zijn de tijd- en loactiegerelateerde filters beschikbaar die alle data op het scherm update. Daarnaast kunnen staven in de legenda uitgezet worden om meer in de specifieke data te duiken. De populairste inzichten waar de opdrachtgevers het meest om vroegen, worden in kleine blokken bovenaan getoond met grote visuele getallen."
        }
        sectionHeader1={"Overzicht"}
        sectionParagraph1a={
          "In het overzicht is de globale en populairste data beschikbaar. De stapelstaafdiagram wordt gedraaid voor in het geval er gescrold kan worden wanneer er te veel locaties zijn om het op één scherm weer te geven."
        }
        section1ImageURL={lofiOverviewImg}
        section1ImageAlt={
          "Lofi ontwerp van het overzichtpagina van de opdrachtgeversdashboard"
        }
        sectionHeader2={"Freelancer"}
        sectionParagraph2a={
          "Op de freelancer pagina is heel veel data beschikbaar. Er werd daarom gekozen om hier wel een tabel te tonen. Wel wordt er een verhoudingvisualisatie getoond waarbij in 1 keer zichtbaar is hoe populair een medewerker is."
        }
        section2ImageURL={lofiFreelancerImg}
        section2ImageAlt={
          "Lofi ontwerp van de freelancerpagina van de opdrachtgeversdashboard"
        }
        sectionHeader3={"Klussen"}
        sectionParagraph3a={
          "Klussen bevat veel tekstuele data die daardoor erg gevoelig is voor menselijke fouten. Daarom wordt er hier een tabel getoond met het totaal of gemiddelde. Daarnaast worden reacties en ratio's visueel in de sidebar getoond"
        }
        section3ImageURL={lofiJobsImg}
        section3ImageAlt={
          "Lofi ontwerp van de kluspagina van de opdrachtgeversdashboard"
        }
        sectionHeader4={"Overzicht met filters"}
        sectionParagraph4a={
          "Hieronder vind u een iteratie van het overzichtscherm waarbij er een filter is geselecteerd."
        }
        section4ImageURL={lofiOverviewFilterImg}
        section4ImageAlt={
          "Lofi ontwerp van het overzichtpagina met filters van de opdrachtgeversdashboard"
        }
        sectionHeader5={"Klussen met filters"}
        sectionParagraph5a={
          "Hieronder vind u een iteratie van het klussenscherm waarbij er een filter is geselecteerd."
        }
        section5ImageURL={lofiJobsFilterImg}
        section5ImageAlt={
          "Lofi ontwerp van de klussenpagina met filters van de opdrachtgeversdashboard"
        }
        button2Href={
          "https://www.figma.com/proto/vmwmMAYOxuefLbwsdT0cya/YO---Dashboard-opdrachtgevers?node-id=577%3A145&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=577%3A145"
        }
        button2Text={"Interactief prototype"}
        darkBackground={true}
      />
      <ProjectArticle
        header={"HiFi V1 iteratie"}
        subHeader={"Eerste versie van de schetsen met kleur"}
        paragraph1a={
          "Voor de HiFi wilde ik de kleuren van YoungOnes terug laten komen. Dit vond ik erg lastig aangezien YoungOnes maar 1 kleur heeft en verder voornamelijk zwart en wit gebruikt. Vooral het kleuren van de staafdiagrammen was wat lastig. Uiteindelijk kwam ik uit op een website die kleuren kon genereren op basis van een huisstijl kleur voor datavisualisaties (https://learnui.design/tools/data-color-picker.html). Deze heb ik gebruikt en dit maakte de visualisatie een stuk makkelijker."
        }
        sectionHeader1={"Overzicht"}
        section1ImageURL={hifi1OverviewImg}
        section1ImageAlt={
          "Eerste HiFi ontwerp van het overzichtpagina van de opdrachtgeversdashboard"
        }
        sectionHeader2={"Freelancer"}
        section2ImageURL={hifi1FreelancerImg}
        section2ImageAlt={
          "Eerste HiFi ontwerp van de Freelancerpagina van de opdrachtgeversdashboard"
        }
        sectionHeader3={"Klussen"}
        section3ImageURL={hifi1JobsImg}
        section3ImageAlt={
          "Eerste HiFi ontwerp van de klussenpagina van de opdrachtgeversdashboard"
        }
        darkBackground={true}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"HiFi V2 iteratie"}
        subHeader={"Consistentie met het vernieuwde dashboard"}
        paragrpah1a={
          "Na een feedbackgesprek met de productowner kreeg te horen dat het idee is dat deze datavisualisatie in het vernieuwde dashboard komt. Ik had deze dashboard nog niet eerder gezien. Nadat ik wat beeldinformatie had ontvangen over het vernieuwde dashboard, werden de datavisualisatie schermen geüpdatet met deze huisstijl."
        }
        sectionHeader1={"Overzicht"}
        section1ImageAlt={
          "Tweede HiFi ontwerp van het overzicht van de opdrachtgeversdashboard"
        }
        section1ImageURL={hifi2OverviewImg}
        sectionHeader2={"Freelancer"}
        section2ImageAlt={
          "Tweede HiFi ontwerp van de freelancerpagina van de opdrachtgeversdashboard"
        }
        section2ImageURL={hifi2FreelancerImg}
        sectionHeader3={"Klussen"}
        section3ImageURL={hifi2JobsImg}
        section3ImageAlt={
          "Tweede HiFi ontwerp van de klussenpagina van de opdrachtgeversdashboard"
        }
        // button2Href={
        //   "https://www.figma.com/proto/pmllBf9iI0nUlJ1aCtRiEQ/YOUNGONES-GWOTY-HIFI-V1?type=design&node-id=2-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
        // }
        // button2Text={"Interactief prototype"}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"HiFi V3 iteratie"}
        subHeader={"Feedbackverwerking van opdrachtgevers"}
        paragraph1a={
          "Om een beter beeld te krijgen over de wensen van de doelgroep werden mijn iteraties gedeeld met verschillende opdrachtgevers. Hier kwamen een paar feedbackpuntjes en wensen uit die vervolgens werden verwerkt in een volgende iteratie."
        }
        paragraph1b={
          "Vanuit de opdrachtgevers kreeg ik het verzoek om de stapelstaafdiagram te draaien en rechtop te zetten. Dit is wat onwennig met horizontaal scrollen, maar maakt het diagram wel beter leesbaar. Daarnaast heeft niet elke opdrachtgever meerdere locaties. Het is daarom aangeraden om bij het overzichtscherm de volgende filters toe te voegen: Locatie, subaccount, functietitel en per week."
        }
        paragraph1c={
          "De medewerkers van YoungOnes gaven aan dat het dashboard niet perse op 1 scherm hoeft te passen. Er mag best verticaal gescrold worden. Hierdoor is er meer ruimte beschikbaar voor diagrammen."
        }
        sectionHeader1={"Overzicht"}
        section1ImageAlt={
          "Derde HiFi ontwerp van het overzichtsscherm van de opdrachtgeversdashboard"
        }
        section1ImageURL={hifi3OverviewImg}
        sectionHeader2={"Freelancer"}
        section2ImageAlt={
          "Derde HiFi ontwerp van de freelancerpagina van de opdrachtgeversdashboard"
        }
        section2ImageURL={hifi3FreelancerImg}
        sectionHeader3={"Klussen"}
        section3ImageURL={hifi3JobsImg}
        section3ImageAlt={
          "Derde HiFi ontwerp van de klussenpagina van de opdrachtgeversdashboard"
        }
        sectionHeader4={"Verhouding uitleg"}
        sectionParagraph4a={
          "De verhouding in de tabel kan voor wat verwarring zorgen. Daarvoor is er nu een informatieblok toegevoegd die uitlegd waar elke kleur voor staat"
        }
        section4ImageURL={hifi3FreelancerExplainImg}
        section4ImageAlt={
          "Derde HiFi ontwerp van de freelancerpagina met uitleg over de verhouding van de opdrachtgeversdashboard"
        }
        sectionHeader5={"Klussen filters"}
        sectionParagraph5a={
          "Verschillende diagrammen hebben lokale filters bovenin de kader naast de titel. Hieronder vind u een voorbeeld van de werking daarvan bij de kluspagina."
        }
        section5ImageURL={hifi3JobsTypeFilterImg}
        section5ImageAlt={"Derde HiFi ontwerp met werking van lokale filters"}
        sectionHeader6={"Staven uitzetten"}
        sectionParagraph6a={
          "In elke staafdiagram is het mogelijk om de staven 'uit te zetten'. Op die manier kan er ingezoemd worden op de data en kunnen er beter inzichten gedaan worden."
        }
        section6ImageURL={hifi3JobsFilterImg}
        section6ImageAlt={
          "Derde HiFi ontwerp met voorbeeld voor het aan en uitzetten van de staven"
        }
        button2Href={
          "https://www.figma.com/proto/AwTDSAwkiuLqhmUwRc9i4q/YO---Dashboard-opdrachtgevers-Hifi-2?node-id=845%3A285&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=577%3A145"
        }
        button2Text={"Interactief prototype"}
      />

      <ProjectArticle
        darkBackground={darkBackground}
        header={"Eindversie"}
        subHeader={"Het uiteindelijke resultaat in NextJS, Tailwind en ChartJS"}
        paragraph1a={
          "Na goedkeuring van de product owner was het tijd om het dashboard te realiseren in de frontend. Na wat onderzoek, bleek dat ChartJS het beste gecombineerd kon werden met NextJS en Tailwind. Met ChartJS kun je, met de kracht de van D3 library, snel krachtige diagrammen ontwikkelen."
        }
        paragraph1b={
          "Tijdens het ontwikkelproces werd er ook nog wat geïtereerd. Zo werd het menu bovenin geplaatst, werd de locatiefilter bovenaan verwijderd om verwarring te voorkomen voor opdrachtgevers met 1 locatie en werd het diagram op de kluspagina bovenaan gezet om eerst de globale data te tonen. Daarnaast zijn er nog wat kleuren veranderd en heb ik tijdelijke iconen ontworpen voor de kaders boven de diagrammen."
        }
        sectionHeader1={"Overzicht"}
        section1ImageAlt={
          "Eindversie van het overzicht van de opdrachtgeversdashboard"
        }
        section1ImageURL={finalOverview}
        sectionHeader2={"Freelancer"}
        section2ImageAlt={
          "Eindversie van de Freelancerpagina van de opdrachtgeversdashboard"
        }
        section2ImageURL={finalFreelancerImg}
        sectionHeader3={"Klussen"}
        section3ImageAlt={
          "Eindversie van de klussenpagina van de opdrachtgeversdashboard"
        }
        section3ImageURL={finalJobsImg}
        sectionHeader4={"Tijdfilter"}
        sectionParagraph4a={
          "Met de 'react-datepicker'-plugin kan de gebruiker een bereik aan dagen selecteren om daarvan de date te tonen."
        }
        section4ImageAlt={"Eindversie van het leaderboard"}
        section4ImageURL={finalOverviewFilter}
        paragraph2a={
          "Helaas is het dashboard ontwikkeld in een bestaand project van YoungOnes waardoor er ook veel geschreven code van andere aanwezig is in het project. Daarnaast wordt er gewerkt met gevoelige informatie en diverse connecties met databases van verschillende bedrijven. Ik heb daarom helaas geen toestemming gekregen om de code online te hosten en dus is er geen github link beschikbaar."
        }
      />
    </div>
  );
}
