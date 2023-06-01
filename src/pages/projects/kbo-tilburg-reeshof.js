import { Montserrat } from "next/font/google";
import KBOTilburgReeshofContent from "../../pageContents/ProjectKBOTilburgReeshof";
import Header from "../../organisms/Header.js";
import Footer from "../../organisms/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function KBOTilburgReeshof() {
  return (
    <>
      <Header />
      <main
        className={`bg-gradient-radial from-bgColorDarkSec to-bgColorDark ${montserrat.className}`}
      >
        <KBOTilburgReeshofContent
          title={"KBO Tilburg Reeshof"}
          subTitle={"Een designopdracht voor ouderen"}
          introduction={
            "Aangezien ik persoonlijk vind dat er te weinig gedaan wordt voor ouderen op digitaal vlak, leek het mij interessant om te onderzoeken hoe oudere websites gebruiken en hoe websites dus geoptimaliseerd kunnen worden voor deze doelgroep. Na wat rondgekeken te hebben naar wat er in mijn omgeving georganiseerd wordt voor ouderen, kwam ik uit bij KBO Tilburg Reeshof. KBO Tilburg Reeshof is onderdeel van KBO Brabant die uit verschillende lokale seniorenverenigingen bestaat. Hierdoor heeft KBO Tilburg Reeshof verschillende connecties en kunnen ze veel activiteiten regelen tegen een kleine prijs. KBO Tilburg Reeshof is ook al erg groot met ruim 700 leden. Toch willen ze graag nog groter worden. Ook willen ze dat de ouderen hun website wat meer gaan gebruiken aangezien hier belangrijke informatie gevonden kan worden."
          }
          paragraph1a={
            "Elke dag zijn er duizenden ouderen in Nederland die in eenzaamheid leven. Zo’n 42% volgens het Centraal Bureau voor de Statistiek (2020). Deze ouderen wonen vaak ver weg van familie, krijgen geen aandacht van familie of hebben geen familie meer (Nivel Zorgregistraties eerste lijn, 2021). Vaak wordt er gedacht dat alleen ouderen in verzorgingstehuizen echt eenzaam kunnen zijn. Maar juist ook de ouderen die nog zelfstandig alleen wonen hebben last van eenzaamheid."
          }
          paragraph1b={
            "Er wordt al veel geprobeerd om deze eenzaamheid van de ouderen te verminderen. Zo zijn er veel wijkhuizen aanwezig in Nederland en zijn er meerdere organisaties zoals het ouderenfonds en de zonnebloem die zich ook inzetten voor deze doelgroep. Het probleem is dat deze instanties veel activiteiten en bijeenkomsten online aankondigen. Nu hebben veel ouderen wel een computer, of ander apparaat waar ze de websites op kunnen bezoeken, maar zijn deze websites vaak niet ontworpen voor de ouderen. Er worden vaak slecht leesbare lettertypes en kleuren gebruikt, teksten zijn vaak te klein, worden er alleen iconen gebruikt zonder tekstuele uitleg bij de knoppen en is de navigatie van de website vaak te verwarrend."
          }
        />
      </main>
      <Footer />
    </>
  );
}
