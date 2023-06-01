// IMAGES
import oldDesignImg from "../../public/images/StandaardAanbouw/OG.jpg";
import hifi1Img from "../../public/images/StandaardAanbouw/Hifi1.jpg";
import hifi2Img from "../../public/images/StandaardAanbouw/Hifi2.png";
import hifi3Img from "../../public/images/StandaardAanbouw/Hifi3.png";
import hifi4Img from "../../public/images/StandaardAanbouw/Hifi4.jpg";
import hifi5Img from "../../public/images/StandaardAanbouw/Hifi5.png";
import lofiImg from "../../public/images/StandaardAanbouw/Lofi.jpg";
import logoImg from "../../public/images/StandaardAanbouw/Logo.jpg";
import paperStyleImg from "../../public/images/StandaardAanbouw/Briefpapier.jpg";
import blogPageImg from "../../public/images/StandaardAanbouw/Blogpagina.png";
import servicePageImg from "../../public/images/StandaardAanbouw/Servicepagina.png";

// COMPONENTS
import ProjectArticle from "../organisms/ProjectArticle";
import SideCanvas from "../organisms/SideCanvas";

export default function ProjectStandaardAanbouw({}) {
  const darkBackground = true;

  return (
    <div className="max-w-wrapper mx-auto w-full block">
      <ProjectArticle
        title={"Standaard aanbouw herontwerp"}
        subTitle={"Een herontwerp van een wordpress website"}
        summaryProject={{
          Projectjaar: "2021",
          Projectdoel: "Moderne uitstraling",
          Doelgroep: "Gezinnen met interesse in een aanbouw",
        }}
        paragraph1a={
          "Ik kreeg de opdracht om een nieuwe website te creeëren van een bedrijf van een kennis. Ik begon met het analyseren van de huisstijl en websites van concurrenten. Hier ontwierp ik een Lofi bij. Na een feedback sessie ging de opdrachtgever akkoord met de lofi en vervolgde ik mijn ontwerp naar een HiFi. Na een volgende feedbacksessie is er een tweede HiFi ontworpen en deze is vervolgens responsive uitgewerkt in wordpress"
        }
        // paragraph1ImageAlt={"Afbeelding van het ontworpen product"}
        // paragraph1ImageURL={kboIntroImg}
        // paragraph1ImageSmall={true}
        paragraph1ImageSmall={true}
        canvas={
          <SideCanvas
            laptopScreen={"../images/Thumbnails/StandaardAanbouwThumb.png"}
            smartphoneScreen={
              "../images/Thumbnails/StandaardAanbouwThumbMobile.png"
            }
          />
        }
        buttonHref={"/"}
        buttonText={"Bekijk het prototype"}
        buttonCTA={true}
        darkBackground={true}
      />
      <ProjectArticle
        header={"Huidige website"}
        subHeader={"Website voor het herontwerp"}
        paragraph1a={
          "Het bedrijf had eerst de naam, 'Meer Woon Ruimte'. Tegenwoordig noemt het bedrijf haarzelf Standaardaanbouw. Hier hebben ze een nieuw logo voor en een nieuw briefpapier huisstijl. Op basis van die stijlen ben ik een nieuwe website gaan ontwerpen."
        }
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
          "Het blauw in de eerste HiFi iteratie vond ik te druk. Daarnaast pastte de afgeronde knoppen niet in de stijl van de rest van de website en werden deze dus aangepast. Ook werden er slogans toegevoegd."
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
          "De aannemer heeft geen keurmerken dus werden deze verwijderd. Daarnaast werden er secondaire knoppen, een galerij, een contactsectie en recente nieuwspagina's toegevoegd."
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
