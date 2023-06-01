// IMAGES
import signInImg from "../../public/images/RingRing/Inlogscherm.png";
import homeImg from "../../public/images/RingRing/Home.JPG";
import routesImg from "../../public/images/RingRing/Routes.JPG";
import specificDataImg from "../../public/images/RingRing/SpecificData.JPG";
import feedbackImg from "../../public/images/RingRing/Feedback.JPG";

// COMPONENTS
import ProjectArticle from "../organisms/ProjectArticle";
import SideCanvas from "../organisms/SideCanvas";

export default function ProjectRingRing({}) {
  const darkBackground = true;

  return (
    <div className="max-w-wrapper mx-auto w-full block">
      <ProjectArticle
        title={"Reisartikelen herontwerp"}
        subTitle={"Een herontwerp met focus op conversieratio's"}
        summaryProject={{
          Projectjaar: "2021",
          Projectdoel: "Design en Datavisualisatie",
          Doelgroep: "Beleidsmakers Ring Ring (35-70 jaar)",
        }}
        paragraph1a={
          "Tijdens dit project kreeg ik de opdracht van Ring Ring om een dashboard te ontwerpen voor de beleidsmakers. Ring Ring is een bedrijf dat met haar app data verzameld over fietsverkeer en probeert met haar app mensen te motiveren om meer te fietsen. Daarnaast wilt Ring Ring ook graag feedback ontvangen en visualiseren over haar gebruikers en hun fietsroutes. Voor het dashbaord kregen we een geojson met onder andere de coordinaten van de routes, de snelheid, de start en einddatum en tijd, de feedback met feedbackscore en de afgelegde afstand"
        }
        paragraph1ImageSmall={true}
        canvas={
          <SideCanvas
            laptopScreen={"../images/Thumbnails/RingRingThumb.png"}
            smartphoneScreen={"../images/Thumbnails/RingRingThumbMobile.png"}
          />
        }
        button1Href={"https://github.com/marcoFijan/projectDatavisualisation"}
        button1Text={"Bekijk github"}
        button1bHref={"https://marcofijan.github.io/projectDatavisualisation/"}
        button1bText={"Bekijk op website"}
        darkBackground={true}
      />
      <ProjectArticle
        header={"Inlogpagina"}
        subHeader={"Inkomstscherm voor autheticatie"}
        paragraph1a={
          "Aangezien dit dashboard privé RingRing data bevat, is er een inlogpagina waar er ingelogd dient te worden."
        }
        paragraph1ImageAlt={"Inlogscherm van het ring ring ontwerp"}
        paragraph1ImageURL={signInImg}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"align-self-center row-start-1"}
        button1Href={"https://github.com/marcoFijan/projectDatavisualisation"}
        button1Text={"Bekijk op github"}
        darkBackground={true}
      />
      <ProjectArticle
        header={"Dashboard"}
        subHeader={"Het hoofdscherm"}
        paragraph1a={
          "Op de dashboardpagina wordt er een globaal overzicht getoond waar alle deatilpagina's zichbaar zijn: Kaart, datavisualisatie en feedback."
        }
        paragraph1ImageAlt={"Hoofdscherm van het ring ring ontwerp"}
        paragraph1ImageURL={homeImg}
        paragraph1ImageSmall={true}
        button1Href={"https://github.com/marcoFijan/projectDatavisualisation"}
        button1Text={"Bekijk op github"}
        darkBackground={true}
      />
      <ProjectArticle
        header={"'Voor u'-pagina"}
        subHeader={"Data op basis van type account"}
        paragraph1a={
          "Op de Voor U pagina worden datavisualisaties getoond die relevant zijn voor de betreffende persoon die ingelogd is. In dit voorbeeld ligt de focus op tijdstippen. Hier wordt met D3 een stackedbarchart getoond. De gekleurde bars kunnen weggefiltered worden door op de betreffende filter te klikken aan de rechterkant. Daarnaast is het mogelijk om de data te filteren op dagen in plaats van tijdstippen. Naast de stacked barchart worden er ook andere data gevisualiseerd in een simpel leesbar vak en een piechart die ook met D3 ontworpen is."
        }
        paragraph1ImageAlt={"Voor u pagina van het ring ring ontwerp"}
        paragraph1ImageURL={specificDataImg}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"align-self-center row-start-1"}
        button1Href={"https://github.com/marcoFijan/projectDatavisualisation"}
        button1Text={"Bekijk op github"}
        darkBackground={true}
      />
      <ProjectArticle
        header={"Kaartpagina"}
        subHeader={"Routes bekijken op een kaart"}
        paragraph1a={
          "Op deze pagina kunnen de beleidsmakers de routes uitstippelen per tijdstip. Er wordt gebruik gemaakt van kleurcodes om de nachten, spitsuren en overdag weer te geven(blauw, rood en geel). Door het gebruik van een kaart hebben de medewerkers van Ring Ring een snel overzicht over de drukste periodes en welke routes fietser precies nemen."
        }
        paragraph1ImageAlt={"Kaartpagina van het ring ring ontwerp"}
        paragraph1ImageURL={routesImg}
        paragraph1ImageSmall={true}
        button1Href={"https://github.com/marcoFijan/projectDatavisualisation"}
        button1Text={"Bekijk op github"}
        darkBackground={true}
      />
      <ProjectArticle
        header={"Feedbackpagina"}
        subHeader={"Gegeven feedback over routes bekijken"}
        paragraph1a={
          "Op de feedback pagina krijgen de beleidsmakers een overzicht te zien van alle binnen gekregen feedback. Hier worden verschillende gegevens getoont zoals afstand, datum en de feedback zelf. Het is mogelijk om de feedback te filteren op soort dag en feedbackscore. Daarnaast is het mogelijk om de feedback door te versturen naar een mede beleidsmaker wanneer de knop 'selecteer' wordt gebruikt."
        }
        paragraph1ImageAlt={"Feedbackpagina van het ring ring ontwerp"}
        paragraph1ImageURL={feedbackImg}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"align-self-center row-start-1"}
        button1Href={"https://github.com/marcoFijan/projectDatavisualisation"}
        button1Text={"Bekijk op github"}
        darkBackground={true}
      />
    </div>
  );
}
