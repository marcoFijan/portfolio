// IMAGES
import hifiImg from "../../public/images/Reisartikelen/Hifi.jpg";
import lofiImg from "../../public/images/Reisartikelen/Lofi.jpg";
import OriginalImg from "../../public/images/Reisartikelen/Original.jpg";

// COMPONENTS
import ProjectArticle from "../organisms/ProjectArticle";
import SideCanvas from "../organisms/SideCanvas";

export default function ProjectReisartikelen({}) {
  const darkBackground = true;

  return (
    <div className="max-w-wrapper mx-auto w-full block">
      <ProjectArticle
        title={"Reisartikelen herontwerp"}
        subTitle={"Een herontwerp met focus op conversieratio's"}
        summaryProject={{
          Projectjaar: "2020",
          Projectdoel: "Consistentie, vertrouwen opbouwen en beetere conversie",
          Doelgroep: "Corona getroffen reizigers",
        }}
        paragraph1ImageSmall={true}
        canvas={
          <SideCanvas
            laptopScreen={"../images/Thumbnails/ReisartikelenThumb.jpg"}
          />
        }
        paragraph1a={
          "Het bedrijf achter reisartikelen.nl merkte dat hun conversie erg laag was. Daarom wilde ze een mogelijke herontwerp hebben van hun website die beter gefocust is op de huidige bezoekers. Reisartikelen.nl is een website die gespecialiseerd is in allerlei soort reisartikelen. Helaas zorgde de coronamaatregelen ervoor dat hun website dit jaar niet erg relevant of nuttig meer was. Ik kreeg de oprdacht om de website te herontwerpen zodat deze beter relevant is voor de coronamaatregelen en meer omzet kan draaien."
        }
        button1Href={
          "https://www.figma.com/proto/w6Y44DPKMD8ttJCWdfOuyt/Reisartikelen.nl-HiFi-Final?node-id=1%3A2&scaling=scale-down-width"
        }
        button1Text={"Interactief prototype"}
        darkBackground={true}
      />
      <ProjectArticle
        header={"Orgineel ontwerp"}
        subHeader={"Website voor het herontwerp"}
        paragraph1a={
          "Ik kreeg toestemming om flink van de standaard huisstijl af te stappen. Reisartikelen was namelijk ook erg opzoek om hun funnels en conversieratio te verbeteren. Uiteraard moesten de fonts en kleuren hetzelfde blijven. Ik heb me voornamelijk gefocust op verschillende commercieël ontwerp principes zoals call to action buttons, vertrouwen creeëren, social proof en content in footer."
        }
        paragraph1ImageAlt={"Website voor het herontwerp"}
        paragraph1ImageURL={OriginalImg}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"align-self-center row-start-1"}
        button1Href={"https://www.reisartikelen.nl/"}
        button1Text={"Bekijk de website"}
        darkBackground={true}
      />
      <ProjectArticle
        darkBackground={darkBackground}
        header={"LoFi Ontwerp"}
        subHeader={"Eerste schets na onderzoek"}
        paragraph1a={
          "In het eerste herontwerp zorgde ik voor een grote banner. Ook zorgde ik ervoor dat bezoekers in de header zich kunnen inschrijven voor de nieuwsbrief. De vermelde korting stimuleert bezoekers om zich in te schrijven. Ook gebruik ik veel verkoopsslogans die toepasselijk zijn voor de website onder de banner. De footer is nu ook meer opgevuld met nuttige informatie maar houdt dit inzichtelijk."
        }
        paragraph1ImageAlt={"Eerste LoFi schets van het herontwerp"}
        paragraph1ImageURL={lofiImg}
        paragraph1ImageSmall={true}
        button1Href={
          "https://www.figma.com/proto/w6Y44DPKMD8ttJCWdfOuyt/Reisartikelen.nl-HiFi-Final?node-id=1%3A2&scaling=scale-down-width"
        }
        button1Text={"Interactief prototype"}
      />

      <ProjectArticle
        darkBackground={darkBackground}
        header={"HiFi Ontwerp"}
        subHeader={"Het laatste ontwerp"}
        paragraph1a={
          "Na een feedbackronde van het LoFi-ontwerp ging ik verder met het ontwerp. Ik veranderde de verkoopslogans in iets wat relevanter was voor tijdens de coronamaatregelen. De knoppen ronde ik af. Dit heeft een hogere conversie bleek bij het testen. Voor het inschrijven van de nieuwsbrief ontwierp ik een nieuwe section op de pagina zelf. In de header zette ik een kleine call to action die mensen trekt naar de nieuwsbrief sectie."
        }
        paragraph1ImageAlt={"Laatste versie van reisartikelen herontwerp"}
        paragraph1ImageURL={hifiImg}
        paragraph1ImageSmall={true}
        paragraph1ImageClassname={"align-self-center row-start-1"}
        button1Href={
          "https://www.figma.com/proto/w6Y44DPKMD8ttJCWdfOuyt/Reisartikelen.nl-HiFi-Final?node-id=1%3A2&scaling=scale-down-width"
        }
        button1Text={"Interactief prototype"}
      />
    </div>
  );
}
