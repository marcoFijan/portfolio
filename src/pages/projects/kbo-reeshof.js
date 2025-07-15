import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Divider from "@/elements/Divider.js";

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
    "after:border-white after:border-1 after:rounded-2xl after:border-opacity-10 after:w-full after:-right-8 after:-bottom-8 after:absolute after:h-[100%] after:z-[-3]";
  const beforeClasses =
    "before:border-white before:border-1 before:rounded-2xl before:border-opacity-10 before:w-full before:-left-8 before:-top-8 before:absolute before:h-full before:z-[-3]";

  return (
    <PageTemplate>
      <Container>
        {" "}
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
          </article>
          <section className="w-full lg:max-w-[80%] mx-auto ">
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
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-y-12 justify-center  items-center pt-20">
            {/* <P className="max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
              Veel afbeeldingen, het gebruik van skeumorphisme en grote,
              duidelijke knoppen ondersteunen ouderen bij het begrijpen van de
              interactie op de website
            </P> */}
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

            {/* <Splide
              aria-label="My Favorite Images"
              options={{
                type: "loop",
                gap: "0rem",
                autoplay: true,
                interval: 3000,
                height: "min-content",
              }}
            >
              <SplideSlide className="aspect-video h-min">
                <Img
                  noBorder
                  src="/images/KBOReeshof/Menu.png"
                  alt="KBO Reeshof Menu uitgeklapt"
                  className="rounded-2xl border-white/[0.5] border-1 block object-contain aspect-video"
                />
              </SplideSlide>
              <SplideSlide>
                <Img
                  noBorder
                  src="/images/KBOReeshof/Menu.png"
                  alt="KBO Reeshof Menu uitgeklapt"
                  className="rounded-2xl border-white/[0.5] border-1"
                ></Img>
              </SplideSlide>
            </Splide> */}
          </section>
          <Divider />
          <article className="grid grid-cols-1 gap-x-12 gap-y-32 md:grid-cols-2 justify-center  items-center pt-20">
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
              src="/images/KBOReeshof/KBOReeshofBuilding.png"
              alt="KBO Reeshof Gebouw"
              noBorder
            />
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
          </article>
          <section>
            <H2 chapeau="Onderzoek doen naar de doelgroep">Verkennen</H2>
            <P>
              Voor er iets bedacht kan worden voor de doelgroep is het
              belangrijk dat hier eerst globaal onderzoek naar gedaan wordt.
              Hieronder vindt u mijn belangrijkste bevindingen uit het onderzoek
            </P>
            <H3>Stakeholders</H3>
            <P>
              Op basis van mijn observaties bij het meedoen met activiteiten en
              gesprekken met mijn kennispartner heb ik verschillende
              stakeholders kunnen noteren. Elke stakeholder heeft zijn of haar
              eigen wensen en belangen wanneer het gaat over een website van een
              wijkgemeenschap. De belangrijkste stakeholders zijn de ouderen en
              het wijkhuis, KBO Tilburg Reeshof. De ouderen moeten zonder
              inspanning de website kunnen gebruiken en daarnaast moet de
              website technisch ook haalbaar zijn voor KBO Tilburg Reeshof
            </P>
            <H3>Persona’s en Empathy Map</H3>
            <P>
              Om mijn resultaten over de doelgroep in kaart te brengen heb ik
              persona’s opgesteld. Deze persona’s heb ik op kunnen stellen met
              de onderzoeksmethodes ‘fly on the wall’, literatuuronderzoek naar
              de doelgroep en enquêtes. Er werden voor deze onderzoeksmethodes
              gekozen omdat je op deze manier veel informatie kan verzamelen op
              een niet opdringerige manier. Daarnaast kunnen ouderen ook
              zichzelf zijn en doen ze volledig wat ze zelf willen zonder
              invloed van een ander. Vooral het ‘fly on the wall’-onderzoek gaf
              mij veel inzichten. Zo bleek dat ouderen erg verschillend zijn.
              Deze verschillen heb ik daarom opgesplitst in 2 persona’s;
              Digibeet en enige ervaring.
            </P>
            <P>
              Uit mijn vooronderzoek, voornamelijk ‘fly on the wall’, bleek dat
              de doelgroep ook veel verschillende wensen, gedragingen en
              gebruiken hebben. Om dit in kaart te stellen zet ik ook een
              empathie map op. Hierin worden alle doelen en attitudes, ofwel
              ‘pains’ en ‘gains’ overzichtelijk genoteerd
            </P>
          </section>
        </section>
      </Container>
    </PageTemplate>
  );
}
