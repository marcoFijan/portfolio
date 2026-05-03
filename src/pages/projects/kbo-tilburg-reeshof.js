import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Li from "@/elements/Li.js";
import Button from "@/elements/Button.js";
import ProjectHero from "@/components/project/HeroProject.js";
import Container from "@/components/Container.js";
import Img from "@/elements/Img.js";
import Wave from "@/elements/Wave.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function KBOTilburgReeshof() {
  const projectData = {
    chapeau: "Een concept website ontwerp voor ouderen",
    title: "KBO Tilburg Reeshof",
    mainImage: {
      src: "/images/KBOReeshof/HomeHD.png",
      alt: "Eindproduct Design",
    },
    introParagraphs: [
      "Omdat ik vind dat er te weinig aandacht is voor ouderen op digitaal vlak, wilde ik onderzoeken hoe zij websites gebruiken en hoe deze beter op hen afgestemd kunnen worden. Via mijn zoektocht kwam ik uit bij KBO Tilburg Reeshof, een lokale seniorenvereniging met meer dan 700 leden.",
    ],
    actions: [
      {
        label: "Design Rationale",
        href: "https://drive.google.com/file/d/1iXpgTq90AxV9-KqkzIO90jlGQBFBjct8/preview",
        type: "primary",
      },
      {
        label: "Productbiografie",
        href: "https://amenable-sword-4e9.notion.site/Productbiografie-1edc81194bb144b2bddb7619a652b5b0",
        type: "secondary",
      },
    ],
    projectDetails: [
      { label: "Projectjaar", value: "2022" },
      {
        label: "Projectdoel",
        value: "Website optimalisatie voor senioren",
      },
      {
        label: "Doelgroep",
        value: "Eenzame ouderen (65+) in Tilburg",
      },
    ],
  };
  return (
    <PageTemplate
      bgColors={["#063C58", "#063C58", "#000000", "#000000"]}
      projectPage
      title="Marco Fijan - KBO Tilburg Reeshof - Een concept website ontwerp voor ouderen"
    >
      <ProjectHero {...projectData} />

      <section className="bg-white relative z-10 mb-12 inverted-card pt-48  flex flex-col gap-24 lg:gap-36">
        <Container grid>
          <section className="col-span-12 xl:col-span-6 xl:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Het probleem concreet beschrijven">
              Probleemstelling
            </H2>
            <P>
              Elke dag zijn er duizenden ouderen in Nederland die in eenzaamheid
              leven. Zo’n 42% volgens het CBS. Deze doelgroep heeft vaak moeite
              met digitale toegankelijkheid.
            </P>
            <P>
              Veel instanties communiceren online, maar websites zijn vaak niet
              ontworpen voor senioren. Denk aan kleine letters, verwarrende
              navigatie en gebrek aan tekstuele uitleg bij iconen.
            </P>
          </section>
          <section className="col-span-12 xl:col-span-6 flex items-center justify-center">
            <Img
              contain
              className="w-full max-w-[50rem]"
              src="/images/KBOReeshof/KBOReeshofBuilding.png"
              alt="KBO Reeshof Gebouw"
              noBorder
            />
          </section>
        </Container>

        <Container article grid>
          <section className="col-span-12 xl:col-span-6 xl:order-2 xl:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Onderzoek doen naar de doelgroep">Verkennen</H2>
            <P>
              Via 'fly on the wall' onderzoek en interviews heb ik twee
              persona's opgesteld: de 'Digibeet' en de 'Ervaren gebruiker'. Het
              bleek dat de behoeften binnen deze doelgroep enorm uiteenlopen.
            </P>
            <H3>Stakeholders & Empathie</H3>
            <P>
              Door letterlijk mee te doen met activiteiten bij KBO Reeshof,
              kreeg ik inzicht in de 'pains' en 'gains' van de doelgroep. Dit
              heb ik vertaald naar een Empathy Map om de mentale modellen van
              senioren beter te begrijpen.
            </P>
          </section>

          <section className="col-span-12 xl:col-span-6 xl:order-1 relative">
            <div className="rounded-2xl overflow-hidden">
              <Splide
                options={{
                  type: "fade",
                  rewind: true,
                  pagination: false,
                  arrows: false,
                  autoplay: true,
                }}
              >
                <SplideSlide>
                  <Img
                    src="/images/KBOReeshof/Persona1.jpg"
                    alt="Persona 1"
                    contain
                    classNameWrapper="rounded-2xl overflow-hidden"
                  />
                </SplideSlide>
                <SplideSlide>
                  <Img
                    src="/images/KBOReeshof/Persona2.jpg"
                    alt="Persona 2"
                    contain
                    classNameWrapper="rounded-2xl overflow-hidden"
                  />
                </SplideSlide>
                <SplideSlide>
                  <Img
                    src="/images/KBOReeshof/EmpathyMap.jpg"
                    alt="Empathy Map"
                    contain
                    classNameWrapper="rounded-2xl overflow-hidden"
                  />
                </SplideSlide>
              </Splide>
            </div>
          </section>
        </Container>

        <Container bgClass="bg-color-kbo-bg text-color-kbo-bg">
          <H2 chapeau="De eisen voor het product vastleggen">Definiëren</H2>
          <P>
            Nu er een duidelijk beeld is van de doelgroep, is het tijd om deze
            informatie te gebruiken voor het product. Het is belangrijk om de
            resultaten uit het onderzoek nu heel concreet op te schrijven. De
            focus ligt hierbij op wat de gebruikers echt nodig hebben en wat het
            product precies moet kunnen. Deze stap is nodig om van losse ideeën
            naar een plan te gaan dat echt aansluit bij de gebruiker.{" "}
          </P>
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            <article className="col-span-12 lg:col-span-6">
              <H3>Belangrijkste inzichten</H3>
              <ul className="list-disc ml-4 flex flex-col gap-2 font-light mt-4 mb-8">
                <Li>Ouderen hebben moeite met inloggen op websites</Li>
                <Li>
                  Veel ouderen zijn gaan pinnen door corona; gebruik pincode
                  gaat goed
                </Li>
                <Li>
                  ‘Platte’ logo’s zijn over het algemeen onduidelijk voor
                  ouderen
                </Li>
                <Li>
                  Websites worden vrijwel alleen bezocht op grote schermen;
                  laptop of computer
                </Li>
                <Li>
                  Veel ouderen vinden donkere knoppen fijner dan fel gekleurde;
                  beter contrastratio en daardoor beter leesbaar
                </Li>
                <Li>
                  Ouderen zijn erg actief en proberen zoveel mogelijk te doen op
                  een dag zolang er daglicht is; Gebruiken computers alleen in
                  de ochtend of avond.
                </Li>
                <Li>
                  Ouderen letten meer op pop-up berichten in tegenstelling tot
                  jongeren
                </Li>
                <Li>Voorkom serifs en andere ingewikkelde lettertypen</Li>
                <Li>Gebruik een hoog contrastratio</Li>
                <Li>Voor de kleinste tekst minimaal 16 punten (1 rem)</Li>
                <Li>‘Don’t make me think’ &amp; ‘Don’t make me remember’</Li>
                <Li>
                  Design minimaal en toon niet te veel in 1 keer op het scherm
                </Li>
                <Li>
                  Zorg voor duidelijke beschrijvende knoppen, niet alleen iconen
                </Li>
                <Li>
                  Pastelkleuren, de kleur geel en de kleur felblauw zijn
                  vermoeiend en slecht zichtbaar voor ouderen
                </Li>{" "}
              </ul>
              <Button
                href="https://amenable-sword-4e9.notion.site/Interviews-Bag-tour-860c2c93b8564e1a9eac450c6341d45e"
                type="secondary"
                className="group"
                arrow
              >
                Luister naar de interviews
              </Button>
            </article>
            <article className="col-span-12 lg:col-span-6">
              <H3>Belangrijkste eisen</H3>
              <ul className="list-disc ml-4 flex flex-col gap-2 font-light mt-4 mb-8">
                <Li>De gebruiker kan zich opgeven voor activiteiten</Li>
                <Li>
                  De gebruiker kan informatie, zoals contactinformatie en
                  nieuws, vinden in het product
                </Li>
                <Li>
                  Het product is toegespitst op de leden en gemeenshap van KBO
                  Tilburg Reeshof
                </Li>
                <Li>
                  Het product moet aantrekkelijk zijn voor de gebruiker, ofwel
                  ouderen
                </Li>
                <Li>
                  Het product moet zo min mogelijk jargon, Engelse en technische
                  woorden bevatten
                </Li>
                <Li>
                  Het product moet zo min mogelijk gele, lichtblauwe en
                  pastelkleuren gebruiken
                </Li>
                <Li>
                  Het product moet niet te veel informatie in 1 keer tonen;
                  Inhoud opdelen in stappen
                </Li>
                <Li>
                  Voor de kleinste tekst moet er minimaal 16 punten (1 rem)
                  gebruikt worden, liefst meer
                </Li>
                <Li>
                  Het product heeft verschillende ‘shortcuts’ om te navigeren
                  van en naar pagina’s
                </Li>
                <Li>
                  Het product moet gefocust zijn op een laptop en computer
                  formaat (16:9)
                </Li>
                <Li>Het product betreft een digitaal prototype</Li>{" "}
              </ul>
              <Button
                href="https://amenable-sword-4e9.notion.site/Interviews-Bag-tour-860c2c93b8564e1a9eac450c6341d45e"
                type="secondary"
                className="group"
                arrow
              >
                Bekijk alle eisen
              </Button>
            </article>
          </div>
        </Container>

        <Container grid>
          <article className="col-span-12 xl:col-span-6">
            <H2 chapeau="Het genereren van mogelijke oplossingen">
              Ideegeneratie
            </H2>
            <P>
              Met de kennis opgedaan uit de verschillende onderzoeksmethodes
              wordt er gebrainstormt. Hier worden aan de hand van verschillende
              methodes mogelijke oplossingen bedacht. Het doel is om zoveel
              mogelijk oplossingen te bedenken
            </P>
            <H3>Inspiratieborden & Harris profiel</H3>
            <P>
              Op basis van bestaande oplossingen, moderne ontwerptheorieën en de
              kennis over de doelgroep worden er verschillende inspiratieborden
              opgesteld. Deze inspiratieborden bevatten zoveel mogelijk
              relevante afbeeldingen. Door deze afbeeldingen bij elkaar te
              plaatsen, kunnen er ideeën ontstaan
            </P>
            <P>
              Een andere erg hulpvolle methode was de Harris Profiel. Hier werd
              de functionaliteit opgesplitst in eisen en werden er per eis
              mogelijke oplossingen bedacht. Door deze oplossingen te combineren
              kunnen er orginele ideeën ontstaan.{" "}
            </P>
            <P>
              Aangezien er veel ideegeneratie methodes zijn gebruikt en veel van
              deze methodes vrij groot zijn in uitwerking, kunt u de
              ideegeneratie methodes het best bekijken in de betreffende design
              rationale onderaan de pagina of in de productbiografie
            </P>
            <Button
              href="https://amenable-sword-4e9.notion.site/Ideegeneratie-141e664077d64253a884f872ab156497"
              arrow
              type="secondary"
              className="mt-8"
            >
              Bekijk ideegeneratie
            </Button>
          </article>
          <Img
            contain
            classNameWrapper="w-full col-span-12 sm:col-span-10 sm:col-start-2 xl:col-span-6"
            src="/images/KBOReeshof/InspirationboardsHarrisProfile.png"
            alt="Harris Profiel"
          />
        </Container>

        <Container grid>
          <article className="col-span-12 xl:col-span-6 xl:sticky top-32 h-fit xl:order-2">
            <H2 chapeau="Itereren op mogelijke oplossingen">
              Conceptualiseren
            </H2>
            <P>
              Nadat er verschillende ideeën vaststaan, worden er keuzes gemaakt
              en worden deze keuzes uitgewerkt in schetsen
            </P>
            <H3>Concept</H3>
            <P>
              Onderzoek en interviews tonen aan dat 'de oudere' niet bestaat. De
              doelgroep varieert van ervaren, ongeduldige gebruikers tot
              senioren met computerangst. Het aanbieden van twee verschillende
              omgevingen bij binnenkomst is daarom essentieel om aan beide
              behoeften te voldoen.
            </P>
            <P>
              De combinatie van een vertrouwde websitestructuur met skeuomorfe
              elementen (herkenbare, fysiek ogende knoppen) werkt
              drempelverlagend. Kennispartners bevestigen dat deze visuele
              insteek de intuïtie prikkelt zonder de functionele basis te
              verliezen.
            </P>
            <P className="mb-8">
              Bij binnenkomst krijgt de gebruiker de keuze om een standaard
              website of om een visuele versimpelde website te bezoeken. Bij de
              standaard website wordt er een zijbalk gebruikt met essentiële
              elementen in de vorm van een herkenbare afstandsbediening. De
              visuele website toont een muur met verschillende klikbare
              elementen die vervolgens informatie geeft wanneer er op wordt
              geklikt.
            </P>
            <Button
              href="https://amenable-sword-4e9.notion.site/Digitale-schetsen-voor-feedback-frenzy-530edefdd420499e8e6d6bbb2c3fda93"
              arrow
              type="secondary"
              className="mt-8"
            >
              Bekijk alle concepten
            </Button>
          </article>
          <div className="col-span-12 xl:col-span-6 xl:sticky top-32 h-fit xl:order-1">
            <Img
              contain
              classNameWrapper="rounded-2xl overflow-hidden"
              src="/images/KBOReeshof/Concept.png"
              alt="Concept"
            />
          </div>
        </Container>

        <Container grid>
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Itereren op mogelijke oplossingen">
              Vormgevingsregels
            </H2>
            <P>
              Omdat dit een volledig nieuw ontwerp voor ouderen betreft, zijn
              definitieve ontwerpkeuzes pas na uitgebreide gebruikerstesten
              mogelijk. Toch bieden het onderzoek naar de doelgroep en de
              huidige huisstijl van KBO-Brabant een stevig fundament voor de
              eerste vormgevingsregels.
            </P>
            <P>
              Uit interviews en de design pattern search blijkt dat de voorkeur
              sterk uitgaat naar 3D-knoppen en elementen met een hoog contrast,
              terwijl moderne 'platte' iconen vaak voor verwarring zorgen.
              Donkere knoppen zijn hierbij favoriet vanwege de uitstekende
              leesbaarheid. Deze inzichten, gecombineerd met vastgestelde regels
              voor kleurgebruik en tekstgrootte, vormen de basis voor de eerste
              testbare prototypes.
            </P>
            <Button
              href="https://amenable-sword-4e9.notion.site/Ideegeneratie-141e664077d64253a884f872ab156497"
              arrow
              type="secondary"
              className="mt-8"
            >
              Bekijk Proces
            </Button>
          </section>
          <section className="col-span-12 lg:col-span-6">
            <Img
              src="/images/KBOReeshof/DesignRules.jpg"
              alt="Vormgevingsregels"
              className="w-full"
            />
          </section>
        </Container>

        <Container bgClass="bg-color-kbo-bg text-color-kbo-bg">
          <H2
            chapeau="De Design Rationale voor de klant"
            className="mb-8 text-center lg:text-left"
          >
            Eindproduct
          </H2>
          <iframe
            src="https://drive.google.com/file/d/1iXpgTq90AxV9-KqkzIO90jlGQBFBjct8/preview"
            className="h-[17rem] md:h-[37rem] w-full shadow-button rounded-2xl border-1 border-gray-200"
            title="Design Rationale"
          />
        </Container>
      </section>
    </PageTemplate>
  );
}
