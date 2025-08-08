import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import NextLink from "@/elements/NextLink";
import Divider from "@/elements/Divider.js";
import FlexArticle from "@/elements/FlexArticle.js";

import Container from "@/sections/Container.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function KBOTilburgReeshof() {
  const baseClasses =
    "w-full h-full object-cover relative bg-black overflow-hidden";
  const borderClasses = "box-border rounded-2xl border-gray-300 border-0";
  const shadowClasses = "z-0 shadow-lg";
  const afterClasses =
    "after:border-1 after:rounded-2xl after:border-color-border after:w-full after:-right-8 after:-bottom-8 after:absolute after:h-[100%] after:z-[-3]";
  const beforeClasses =
    "before:border-1 before:rounded-2xl before:border-color-border before:w-full before:-left-8 before:-top-8 before:absolute before:h-full before:z-[-3]";

  return (
    <PageTemplate>
      <Container>
        <H1
          big
          className={""}
          chapeau={"Een concept website ontwerp voor ouderen"}
        >
          KBO Tilburg Reeshof
        </H1>
        <section className="flex flex-col gap-12">
          <article className="mb-20">
            <P intro>
              Omdat ik vind dat er te weinig aandacht is voor ouderen op
              digitaal vlak, wilde ik onderzoeken hoe zij websites gebruiken en
              hoe deze beter op hen afgestemd kunnen worden. Via mijn zoektocht
              kwam ik uit bij KBO Tilburg Reeshof, een lokale seniorenvereniging
              met meer dan 700 leden, onderdeel van KBO Brabant. Ze organiseren
              veel activiteiten tegen lage kosten en willen graag groeien in
              ledenaantal. Ook willen ze dat hun website meer gebruikt wordt,
              omdat daar belangrijke informatie op staat.
            </P>
            <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8">
              <NextLink
                href="https://drive.google.com/file/d/1iXpgTq90AxV9-KqkzIO90jlGQBFBjct8/preview"
                type="primary"
                className="group"
                arrow
              >
                Bekijk Design Rationale
              </NextLink>
              <NextLink
                href="
                https://amenable-sword-4e9.notion.site/Productbiografie-1edc81194bb144b2bddb7619a652b5b0"
                arrow
                className="group"
                type="secondary"
              >
                Bekijk productbiografie
              </NextLink>
            </div>
          </article>
          <section className="w-full lg:max-w-[80%] mx-auto ">
            <Img
              src="/images/KBOReeshof/HomeHD.png"
              alt="KBO Reeshof Menu uitgeklapt"
              className="block object-cover aspect-video w-full"
            />
          </section>
          <FlexArticle reverse smallMargin>
            <P className="max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
              Veel afbeeldingen, het gebruik van skeumorphisme en grote,
              duidelijke knoppen ondersteunen ouderen bij het begrijpen van de
              interactie op de website
            </P>
            <div className={` relative m-8 ${afterClasses} ${beforeClasses}`}>
              <div
                className={`${baseClasses} ${borderClasses} ${shadowClasses}`}
              >
                <Splide
                  options={{
                    type: "fade",
                    rewind: true,
                    autoplay: true,
                    interval: 4000,
                    speed: 2000,
                    arrows: false,
                    pagination: false,
                  }}
                >
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/HomeHD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/HomeHD2.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/CTASectionHD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video w-full"
                    />
                  </SplideSlide>

                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/FooterHD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/MenuHD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/IntroHD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video w-full"
                    />
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </FlexArticle>
          <FlexArticle smallMargin>
            <P className="max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
              Ouderen kunnen gebruikmaken van diverse stapsgewijze instructies
              om vertrouwd te raken met de belangrijkste functies van de website
            </P>
            <div className={` relative m-8 ${afterClasses} ${beforeClasses}`}>
              <div
                className={`${baseClasses} ${borderClasses} ${shadowClasses}`}
              >
                {" "}
                <Splide
                  options={{
                    type: "fade",
                    rewind: true,
                    autoplay: true,
                    interval: 4000,
                    speed: 2000,
                    arrows: false,
                    pagination: false,
                  }}
                >
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/HulpMenuHD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help1HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help2HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help3HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help4HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help5HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help6HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help7HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help8HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Help9HD.png"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-cover aspect-video"
                    />
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </FlexArticle>

          <Divider />
          <FlexArticle>
            <section>
              <H2 chapeau="Het probleem concreet beschrijven">
                Probleemstelling
              </H2>
              <P>
                Elke dag zijn er duizenden ouderen in Nederland die in
                eenzaamheid leven. Zo’n 42% volgens het Centraal Bureau voor de
                Statistiek (2020). Deze ouderen wonen vaak ver weg van familie,
                krijgen geen aandacht van familie of hebben geen familie meer
                (Nivel Zorgregistraties eerste lijn, 2021). Vaak wordt er
                gedacht dat alleen ouderen in verzorgingstehuizen echt eenzaam
                kunnen zijn. Maar juist ook de ouderen die nog zelfstandig
                alleen wonen hebben last van eenzaamheid.
              </P>
              <P>
                Er wordt al veel geprobeerd om deze eenzaamheid van de ouderen
                te verminderen. Zo zijn er veel wijkhuizen aanwezig in Nederland
                en zijn er meerdere organisaties zoals het ouderenfonds en de
                zonnebloem die zich ook inzetten voor deze doelgroep. Het
                probleem is dat deze instanties veel activiteiten en
                bijeenkomsten online aankondigen. Nu hebben veel ouderen wel een
                computer, of ander apparaat waar ze de websites op kunnen
                bezoeken, maar zijn deze websites vaak niet ontworpen voor de
                ouderen. Er worden vaak slecht leesbare lettertypes en kleuren
                gebruikt, teksten zijn vaak te klein, worden er alleen iconen
                gebruikt zonder tekstuele uitleg bij de knoppen en is de
                navigatie van de website vaak te verwarrend.
              </P>
            </section>
            <Img
              uniqueBg="bg-transparent"
              className="w-[80%] max-w-[50rem] mx-auto"
              src="/images/KBOReeshof/KBOReeshofBuilding.png"
              alt="KBO Reeshof Gebouw"
              noBorder
            />
          </FlexArticle>
          <FlexArticle reverse alignBottom>
            <section>
              <H2 chapeau="Onderzoek doen naar de doelgroep">Verkennen</H2>
              <P>
                Voor er iets bedacht kan worden voor de doelgroep is het
                belangrijk dat hier eerst globaal onderzoek naar gedaan wordt.
                Hieronder vindt u mijn belangrijkste bevindingen uit het
                onderzoek
              </P>
              <H3>Stakeholders</H3>
              <P>
                Op basis van mijn observaties bij het meedoen met activiteiten
                en gesprekken met mijn kennispartner heb ik verschillende
                stakeholders kunnen noteren. Elke stakeholder heeft zijn of haar
                eigen wensen en belangen wanneer het gaat over een website van
                een wijkgemeenschap. De belangrijkste stakeholders zijn de
                ouderen en het wijkhuis, KBO Tilburg Reeshof. De ouderen moeten
                zonder inspanning de website kunnen gebruiken en daarnaast moet
                de website technisch ook haalbaar zijn voor KBO Tilburg Reeshof
              </P>
              <H3>Persona’s en Empathy Map</H3>
              <P>
                Om mijn resultaten over de doelgroep in kaart te brengen heb ik
                persona’s opgesteld. Deze persona’s heb ik op kunnen stellen met
                de onderzoeksmethodes ‘fly on the wall’, literatuuronderzoek
                naar de doelgroep en enquêtes. Er werden voor deze
                onderzoeksmethodes gekozen omdat je op deze manier veel
                informatie kan verzamelen op een niet opdringerige manier.
                Daarnaast kunnen ouderen ook zichzelf zijn en doen ze volledig
                wat ze zelf willen zonder invloed van een ander. Vooral het ‘fly
                on the wall’-onderzoek gaf mij veel inzichten. Zo bleek dat
                ouderen erg verschillend zijn. Deze verschillen heb ik daarom
                opgesplitst in 2 persona’s; Digibeet en enige ervaring.
              </P>
              <P>
                Uit mijn vooronderzoek, voornamelijk ‘fly on the wall’, bleek
                dat de doelgroep ook veel verschillende wensen, gedragingen en
                gebruiken hebben. Om dit in kaart te stellen zet ik ook een
                empathie map op. Hierin worden alle doelen en attitudes, ofwel
                ‘pains’ en ‘gains’ overzichtelijk genoteerd
              </P>
            </section>
            <div className={` relative m-8 ${afterClasses} ${beforeClasses}`}>
              <div
                className={`${baseClasses} ${borderClasses} ${shadowClasses}`}
              >
                <Splide
                  options={{
                    type: "fade",
                    rewind: true,
                    autoplay: true,
                    interval: 4000,
                    speed: 2000,
                    arrows: false,
                    pagination: false,
                  }}
                >
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Persona1.jpg"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-contain object-center w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/Persona2.jpg"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-contain object-center w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      noBorder
                      src="/images/KBOReeshof/EmpathyMap.jpg"
                      alt="KBO Reeshof Menu uitgeklapt"
                      className="block object-contain object-center w-full"
                    />
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </FlexArticle>
          <article className="w-full">
            <H2 chapeau="De eisen voor het product vastleggen">Definiëren</H2>
            <P>
              Nu er een globaal beeld is van de doelgroep, is het van belang om
              deze bevindingen concreet te noteren en te focussen op de
              daadwerkelijke wensen en eisen van de doelgroep en het product
            </P>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
              <section>
                <H3>Belangrijkste inzichten</H3>
                <ul className="text-white md:text-md lg:text-lg max-w-paragraph list-disc ml-4 flex flex-col gap-2 font-light mb-8">
                  <li>Ouderen hebben moeite met inloggen op websites</li>
                  <li>
                    Veel ouderen zijn gaan pinnen door corona; gebruik pincode
                    gaat goed
                  </li>
                  <li>
                    ‘Platte’ logo’s zijn over het algemeen onduidelijk voor
                    ouderen
                  </li>
                  <li>
                    Websites worden vrijwel alleen bezocht op grote schermen;
                    laptop of computer
                  </li>
                  <li>
                    Veel ouderen vinden donkere knoppen fijner dan fel
                    gekleurde; beter contrastratio en daardoor beter leesbaar
                  </li>
                  <li>
                    Ouderen zijn erg actief en proberen zoveel mogelijk te doen
                    op een dag zolang er daglicht is; Gebruiken computers alleen
                    in de ochtend of avond.
                  </li>
                  <li>
                    Ouderen letten meer op pop-up berichten in tegenstelling tot
                    jongeren
                  </li>
                  <li>Voorkom serifs en andere ingewikkelde lettertypen</li>
                  <li>Gebruik een hoog contrastratio</li>
                  <li>Voor de kleinste tekst minimaal 16 punten (1 rem)</li>
                  <li>‘Don’t make me think’ &amp; ‘Don’t make me remember’</li>
                  <li>
                    Design minimaal en toon niet te veel in 1 keer op het scherm
                  </li>
                  <li>
                    Zorg voor duidelijke beschrijvende knoppen, niet alleen
                    iconen
                  </li>
                  <li>
                    Pastelkleuren, de kleur geel en de kleur felblauw zijn
                    vermoeiend en slecht zichtbaar voor ouderen
                  </li>
                </ul>
                <NextLink
                  href="https://amenable-sword-4e9.notion.site/Interviews-Bag-tour-860c2c93b8564e1a9eac450c6341d45e"
                  type="primary"
                  className="group"
                  arrow
                >
                  Luister naar de interviews
                </NextLink>
              </section>
              <section>
                <H3>Belangrijkste eisen</H3>
                <ul className="text-white md:text-md lg:text-lg max-w-paragraph list-disc ml-4 flex flex-col gap-2 font-light mb-8">
                  <li>De gebruiker kan zich opgeven voor activiteiten</li>
                  <li>
                    De gebruiker kan informatie, zoals contactinformatie en
                    nieuws, vinden in het product
                  </li>
                  <li>
                    Het product is toegespitst op de leden en gemeenshap van KBO
                    Tilburg Reeshof
                  </li>
                  <li>
                    Het product moet aantrekkelijk zijn voor de gebruiker, ofwel
                    ouderen
                  </li>
                  <li>
                    Het product moet zo min mogelijk jargon, Engelse en
                    technische woorden bevatten
                  </li>
                  <li>
                    Het product moet zo min mogelijk gele, lichtblauwe en
                    pastelkleuren gebruiken
                  </li>
                  <li>
                    Het product moet niet te veel informatie in 1 keer tonen;
                    Inhoud opdelen in stappen
                  </li>
                  <li>
                    Voor de kleinste tekst moet er minimaal 16 punten (1 rem)
                    gebruikt worden, liefst meer
                  </li>
                  <li>
                    Het product heeft verschillende ‘shortcuts’ om te navigeren
                    van en naar pagina’s
                  </li>
                  <li>
                    Het product moet gefocust zijn op een laptop en computer
                    formaat (16:9)
                  </li>
                  <li>Het product betreft een digitaal prototype</li>
                </ul>
                <NextLink
                  href="https://amenable-sword-4e9.notion.site/Interviews-Bag-tour-860c2c93b8564e1a9eac450c6341d45e"
                  type="primary"
                  className="group"
                  arrow
                >
                  Bekijk alle eisen
                </NextLink>
              </section>
            </section>
          </article>
          <FlexArticle>
            <section>
              <H2 chapeau="Het genereren van mogelijke oplossingen">
                Ideegeneratie
              </H2>
              <P>
                Met de kennis opgedaan uit de verschillende onderzoeksmethodes
                wordt er gebrainstormt. Hier worden aan de hand van
                verschillende methodes mogelijke oplossingen bedacht. Het doel
                is om zoveel mogelijk oplossingen te bedenken
              </P>
              <H3>Inspiratieborden en Harris profiel</H3>
              <P>
                Op basis van bestaande oplossingen, moderne ontwerptheorieën en
                de kennis over de doelgroep worden er verschillende
                inspiratieborden opgesteld. Deze inspiratieborden bevatten
                zoveel mogelijk relevante afbeeldingen. Door deze afbeeldingen
                bij elkaar te plaatsen, kunnen er ideeën ontstaan
              </P>
              <P>
                Een andere erg hulpvolle methode was de Harris Profiel. Hier
                werd de functionaliteit opgesplitst in eisen en werden er per
                eis mogelijke oplossingen bedacht. Door deze oplossingen te
                combineren kunnen er orginele ideeën ontstaan.{" "}
              </P>
              <P className="text-white text-md md:text-lg lg:text-xl max-w-paragraph mb-10">
                Aangezien er veel ideegeneratie methodes zijn gebruikt en veel
                van deze methodes vrij groot zijn in uitwerking, kunt u de
                ideegeneratie methodes het best bekijken in de betreffende
                design rationale onderaan de pagina of in de productbiografie
              </P>
              <NextLink
                href="https://amenable-sword-4e9.notion.site/Ideegeneratie-141e664077d64253a884f872ab156497"
                arrow
                type="primary"
              >
                Bekijk ideegeneratie
              </NextLink>
            </section>
            <Img
              uniqueBg="bg-transparent"
              noBorder
              className="max-w-[80%] mx-auto"
              src="/images/KBOReeshof/InspirationboardsHarrisProfile.png"
              alt="Harris Profiel"
            />
          </FlexArticle>
          <FlexArticle reverse alignTop>
            <section>
              <H2 chapeau="Itereren op mogelijke oplossingen">
                Conceptualiseren
              </H2>
              <P>
                Nadat er verschillende ideeën vaststaan, worden er keuzes
                gemaakt en worden deze keuzes uitgewerkt in schetsen
              </P>
              <H3>Concept</H3>
              <P>
                Uit mijn literatuuronderzoek over skeuomorphisme, de resultaten
                van het Harris Profiel en de resultaten van de feedback frenzy,
                bleek de combinatie van het idee van een klikbare omgeving en
                een standaard website met skeuomorphisme-knoppen een goede
                combinatie. Ook mijn kennispartner was hier erg positief over en
                was vooral enthousiast over de visueel klikbare website, maar
                gaf ook aan dat een het hebben van een ‘standaard’ website
                essentieel is voor de ouderen en mensen die al wel ervaring
                hebben met websites.
              </P>
              <P>
                Uit mijn observaties en interviews met de doelgroep bleek
                overduidelijk dat ouderen erg verschillend zijn en verschillende
                wensen hebben. Zo zijn er ongeduldige ouderen met ervaring die
                liever een standaard goed leesbare website hebben met een
                zoekbalk, maar zijn er ook ouderen die letterlijk slapeloze
                nachten krijgen van computers. Het aanbieden van de website in
                verschillende vormen, kan daarom een goede uitkomt bieden.
              </P>
              <P className="text-white text-md md:text-lg lg:text-xl max-w-paragraph mb-10">
                Bij binnenkomst krijgt de gebruiker de keuze om een standaard
                website of om een visuele versimpelde website te bezoeken. Bij
                de standaard website wordt er een zijbalk gebruikt met
                essentiële elementen in de vorm van een herkenbare
                afstandsbediening. De visuele website toont een muur met
                verschillende klikbare elementen die vervolgens informatie geeft
                wanneer er op wordt geklikt.
              </P>
              <NextLink
                href="https://amenable-sword-4e9.notion.site/Digitale-schetsen-voor-feedback-frenzy-530edefdd420499e8e6d6bbb2c3fda93"
                arrow
                type="primary"
              >
                Bekijk alle concepten
              </NextLink>
            </section>
            <Img
              extraBorder
              className=""
              src="/images/KBOReeshof/Concept.png"
              alt="Concept"
            />
          </FlexArticle>
          <FlexArticle>
            <section>
              <H3>Vormgevingsregels</H3>
              <P>
                Aangezien het gaat om een compleet nieuw ontwerp gaat en de
                doelgroep ouderen betreft, kunnen er nu nog geen harde
                beslissingen gemaakt worden over de daadwerkelijke vormgeving.
                Verschillende elementen dienen eerst getest te worden met de
                doelgroep. Wel kunnen er kleuren en vormgevingsregels
                vastgesteld worden op basis van mijn onderzoek naar de doelgroep
                en het huidige logo van KBO Brabant.
              </P>
              <P>
                Tijdens de interviews heb ik ook de meeste ouderen verschillende
                knoppen en iconen laten zien en konden ze aangeven welke knoppen
                en iconen ze begrepen en het duidelijkst vonden. Hier kwam onder
                andere uit dat de meeste platte iconen onherkenbaar zijn voor
                ouderen en dat donkere knoppen erg geliefd waren vanwege de hoge
                contrastratio en leesbaarheid. Daarnaast waren ‘3d-knoppen’ ook
                erg geliefd.
              </P>
              <P>
                Uit de design pattern search kwamen daarnaast ook nog veel
                patterns over het gebruik van lettertype en -grootte en
                kleurgebruik die hier ook zijn gebruikt voor de tekst en overige
                vormgevingsregels
              </P>
            </section>
            <Img
              src="/images/KBOReeshof/DesignRules.jpg"
              alt="Vormgevingsregels"
            />
          </FlexArticle>
          <article className="w-full mb-48">
            <H2 chapeau="De Design Rationale voor de klant">Eindproduct</H2>
            <iframe
              src={
                "https://drive.google.com/file/d/1iXpgTq90AxV9-KqkzIO90jlGQBFBjct8/preview"
              }
              className="h-[17rem] md:h-[37rem] w-full shadow-button rounded-2xl border-1 border-color-border border-box"
            />
          </article>
        </section>
      </Container>
    </PageTemplate>
  );
}
