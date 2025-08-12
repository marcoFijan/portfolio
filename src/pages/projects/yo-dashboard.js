import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Li from "@/elements/Li.js";
import SvgDeviceOutline from "@/elements/SvgDeviceOutline.js";
import NextLink from "@/elements/NextLink";
import Divider from "@/elements/Divider.js";

import Container from "@/sections/Container.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function YoDashboardClients() {
  const baseClasses =
    "w-full h-full object-cover relative bg-black overflow-hidden";
  const borderClasses = "box-border rounded-2xl border-gray-300 border-0";
  const shadowClasses = "z-0 shadow-lg";
  const afterClasses =
    "after:border-1 after:rounded-2xl after:border-color-border after:w-full after:-right-8 after:-bottom-8 after:absolute after:h-[100%] after:z-[-3]";
  const beforeClasses =
    "before:border-1 before:rounded-2xl before:border-color-border before:w-full before:-left-8 before:-top-8 before:absolute before:h-full before:z-[-3]";

  return (
    <PageTemplate projectPage="yo">
      <Container>
        <div className="text-center">
          <H1
            big
            className={""}
            chapeau={"Datavisualisatie voor opdrachtgevers van YoungOnes"}
          >
            Opdrachtgever Dashboard
          </H1>
        </div>
        <div className="hidden lg:block relative w-full h-[10rem]">
          <div className="absolute left-0 top-0 w-full">
            <SvgDeviceOutline />
          </div>
        </div>
        <section className="flex flex-col gap-12 w-full lg:max-w-[80%] mx-auto">
          <Img
            extraBorder
            browserToolbar
            src="/images/YoDashboardClients/EindversieOverzicht.png"
            alt="Eindproduct YoungOnes"
            className="block object-cover aspect-video w-full"
          />
          <article className="mb-0">
            <ul className="w-max mb-8 flex flex-col gap-4">
              <Li
                className={
                  "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl "
                }
              >
                <strong>Projectjaar:</strong> 2023
              </Li>
              <Li
                className={
                  "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl "
                }
              >
                <strong>Projectdoel:</strong> Een dashboard creeëren die
                opdrachtgevers van YoungOnes kunnen gebruiken om inzichten te
                maken op hun data.
              </Li>
              <Li
                className={
                  "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl"
                }
              >
                <strong>Doelgroep:</strong> Opdrachtgevers die YoungOnes
                gebruiken (35-70 jaar)
              </Li>
            </ul>
            <P intro>
              YoungOnes gebruikte tot nu toe een automatisch gegenereerde
              PowerBI dashboard die de opdrachtgevers konden geberuiken om
              inzichten te doen. PowerBI gaf alleen tabellen en had geen enkele
              vorm van datavisualistie. Hierdoor is het lastiger om nuttige
              inzichten te doen over de data. Er moest daarom een nieuw
              dashboard ontworpen en hier kreeg ik de opdracht
            </P>
          </article>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 justify-center  items-center pt-20">
            <P className="max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
              Het opsplitsen van data in relevante categorieën, gebruik van
              ratio-diagrammen en tabellen waarin gescrold kan worden zorgt voor
              een overzichtelijke datavisualisatie waar snel conclusies uit
              gehaald kunnen worden.
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
                      extraBorder
                      contain
                      noBorder
                      uniqueBg="bg-[#f3f3f7]"
                      src="/images/YoDashboardClients/EindversieOverzicht.png"
                      alt="Eindversie Overzicht"
                      className="block object-contain w-full aspect-square"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Img
                      extraBorder
                      contain
                      noBorder
                      uniqueBg="bg-[#f3f3f7]"
                      src="/images/YoDashboardClients/EindversieFreelancer.png"
                      alt="Eindversie Freelancer"
                      className="block object-contain object-top w-full aspect-square"
                    />
                  </SplideSlide>

                  <SplideSlide>
                    <Img
                      extraBorder
                      contain
                      noBorder
                      uniqueBg="bg-[#f3f3f7]"
                      src="/images/YoDashboardClients/EindversieKlussen.png"
                      alt="Eindversie klussen"
                      className="block object-contain object-top w-full aspect-square"
                    />
                  </SplideSlide>
                </Splide>
              </div>
            </div>
            <div className={` relative m-8 ${afterClasses} ${beforeClasses}`}>
              <div
                className={`${baseClasses} ${borderClasses} ${shadowClasses}`}
              >
                <Img
                  noBorder
                  extraBorder
                  src="/images/YoDashboardClients/EindversieOverzichtFilter.png"
                  alt="Eindproduct YoungOnes"
                  className="block object-cover aspect-video w-full"
                />
              </div>
            </div>
            <P className="max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
              Een globale filter bovenaan past de algehele dataoverzicht aan,
              zodat op die manier makkelijk alle data over alle categorieën in 1
              keer gefilterd kan worden.
            </P>
          </section>
          <Divider />
          <article className="mb-24 grid grid-cols-1 gap-12 gap-y-32 xl:gap-y-64 lg:grid-cols-2 justify-center  items-center pt-20">
            <section>
              <H2 chapeau="Huidig gebruikt PowerBI dashboard">
                Huidig dashboard
              </H2>
              <P>
                YoungOnes gebruikte tot nu toe een automatisch gegenereerde
                PowerBI dashboard die de opdrachtgevers konden geberuiken om
                inzichten te doen. PowerBI gaf alleen tabellen en had geen
                enkele vorm van datavisualistie. Hierdoor is het lastiger om
                nuttige inzichten te doen over de data. Er moest daarom een
                nieuw dashboard ontworpen en hier kreeg ik de opdracht
              </P>
            </section>
            <Img
              src="/images/YoDashboardClients/PowerBiDataViewer.png"
              alt="Oud dataoverzicht"
              noBorder
            />

            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  src="/images/YoDashboardClients/LoFiOverzicht.png"
                  alt="Lofi schets #1"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Overzicht</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  In het overzicht is de globale en populairste data
                  beschikbaar. De stapelstaafdiagram wordt gedraaid voor in het
                  geval er gescrold kan worden wanneer er te veel locaties zijn
                  om het op één scherm weer te geven.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoDashboardClients/LoFiFreelancer.png"
                  alt="Lofi schets #2"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Freelancer</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Op de freelancer pagina is heel veel data beschikbaar. Er werd
                  daarom gekozen om hier wel een tabel te tonen. Wel wordt er
                  een verhoudingvisualisatie getoond waarbij in 1 keer zichtbaar
                  is hoe populair een medewerker is.
                </P>
              </SplideSlide>

              <SplideSlide>
                <Img
                  src="/images/YoDashboardClients/LoFiKlussen.png"
                  alt="Lofi schets #3"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Klussen</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Klussen bevat veel tekstuele data die daardoor erg gevoelig is
                  voor menselijke fouten. Daarom wordt er hier een tabel getoond
                  met het totaal of gemiddelde. Daarnaast worden reacties en
                  ratios visueel in de sidebar getoond
                </P>
              </SplideSlide>

              <SplideSlide>
                <Img
                  src="/images/YoDashboardClients/LoFiOverzichtFilters.png"
                  alt="KBO Reeshof Menu uitgeklapt"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Overzicht met filters</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Hieronder vind u een iteratie van het overzichtscherm waarbij
                  er een filter is geselecteerd.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  src="/images/YoDashboardClients/LoFiOverzichtFilters.png"
                  alt="Lofi schets #4"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center ">Klussen met filters</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Hieronder vind u een iteratie van het klussenscherm waarbij er
                  een filter is geselecteerd.
                </P>
              </SplideSlide>
            </Splide>

            <section>
              <H2 chapeau="De eerste schets van het nieuwe dashboard">
                LoFi iteratie
              </H2>
              <P>
                Na wat snelle schetsen op papier besloot ik de data op te
                splitsen in 3 categorieën: Overzicht, Freelancer en Klussen.
                Bovenaan zijn de tijd- en loactiegerelateerde filters
                beschikbaar die alle data op het scherm update. Daarnaast kunnen
                staven in de legenda uitgezet worden om meer in de specifieke
                data te duiken. De populairste inzichten waar de opdrachtgevers
                het meest om vroegen, worden in kleine blokken bovenaan getoond
                met grote visuele getallen.
              </P>
            </section>
            <section>
              <H2 chapeau="Eerste versie van de schetsen met kleur">
                HiFi V1 iteratie
              </H2>
              <P>
                Voor de HiFi wilde ik de kleuren van YoungOnes terug laten
                komen. Dit vond ik erg lastig aangezien YoungOnes maar 1 kleur
                heeft en verder voornamelijk zwart en wit gebruikt. Vooral het
                kleuren van de staafdiagrammen was wat lastig. Uiteindelijk kwam
                ik uit op een website die kleuren kon genereren op basis van een
                huisstijl kleur voor datavisualisaties
                (https://learnui.design/tools/data-color-picker.html). Deze heb
                ik gebruikt en dit maakte de visualisatie een stuk makkelijker.
              </P>
            </section>
            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  extraBorder
                  src="/images/YoDashboardClients/HiFi1Overzicht.png"
                  alt="Hifi schets #1"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center pb-8 ">Overzicht</H3>
              </SplideSlide>
              <SplideSlide>
                <Img
                  extraBorder
                  src="/images/YoDashboardClients/HiFi1Freelancer.png"
                  alt="Hifi schets #2"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center pb-8 ">Freelancer</H3>
              </SplideSlide>

              <SplideSlide>
                <Img
                  extraBorder
                  src="/images/YoDashboardClients/HiFi1Klussen.png"
                  alt="Hifi schets #3"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center pb-8 ">Klussen</H3>
              </SplideSlide>
            </Splide>
            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  extraBorder
                  src="/images/YoDashboardClients/HiFi2Overzicht.png"
                  alt="Hifi schets #1"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center pb-8 ">Overzicht</H3>
              </SplideSlide>
              <SplideSlide>
                <Img
                  extraBorder
                  src="/images/YoDashboardClients/HiFi2Freelancer.png"
                  alt="Hifi schets #2"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center pb-8 ">Freelancer</H3>
              </SplideSlide>

              <SplideSlide>
                <Img
                  extraBorder
                  src="/images/YoDashboardClients/HiFi2Klussen.png"
                  alt="Hifi schets #3"
                  className="block object-contain object-top w-full aspect-[2/1]"
                />
                <H3 className="text-center pb-8 ">Klussen</H3>
              </SplideSlide>
            </Splide>
            <section>
              <H2 chapeau="Consistentie toegepast met het vernieuwde dashboard">
                HiFi V2 iteratie
              </H2>
              <P>
                Na het ontwikkelen van de eerste HiFi kreeg ik te horen van de
                opdrachtgever dat er al een dashboard was die de opdrachtgevers
                van YoungOnes al gebruiken. Het design is daarom iets aangepast
                om deze in de huidige huisstijl van het gebruikte dashboard te
                kunnen plaatsen.
              </P>
            </section>
            <section>
              <H2 chapeau="Feedbackverwerking van opdrachtgevers">
                HiFi V3 iteratie
              </H2>
              <P>
                Om een beter beeld te krijgen over de wensen van de doelgroep
                werden mijn iteraties gedeeld met verschillende opdrachtgevers.
                Hier kwamen een paar feedbackpuntjes en wensen uit die
                vervolgens werden verwerkt in een volgende iteratie.
              </P>
              <P>
                Vanuit de opdrachtgevers kreeg ik het verzoek om de
                stapelstaafdiagram te draaien en rechtop te zetten. Dit is wat
                onwennig met horizontaal scrollen, maar maakt het diagram wel
                beter leesbaar. Daarnaast heeft niet elke opdrachtgever meerdere
                locaties. Het is daarom aangeraden om bij het overzichtscherm de
                volgende filters toe te voegen: Locatie, subaccount,
                functietitel en per week.
              </P>
              <P>
                De medewerkers van YoungOnes gaven aan dat het dashboard niet
                perse op 1 scherm hoeft te passen. Er mag best verticaal
                gescrold worden. Hierdoor is er meer ruimte beschikbaar voor
                diagrammen.
              </P>
            </section>
            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  extraBorder
                  contain
                  uniqueBg="bg-[#f3f3f7]"
                  src="/images/YoDashboardClients/HiFi3Overzicht.png"
                  alt="Hifi schets #1"
                  className="block object-contain w-full aspect-square"
                />
                <H3 className="text-center pb-8 ">Overzicht</H3>
              </SplideSlide>
              <SplideSlide>
                <Img
                  extraBorder
                  contain
                  uniqueBg="bg-[#f3f3f7]"
                  src="/images/YoDashboardClients/HiFi3Freelancer.png"
                  alt="Hifi schets #2"
                  className="block object-contain object-top w-full aspect-square"
                />
                <H3 className="text-center pb-8 ">Freelancer</H3>
              </SplideSlide>

              <SplideSlide>
                <Img
                  extraBorder
                  contain
                  uniqueBg="bg-[#f3f3f7]"
                  src="/images/YoDashboardClients/HiFi3Klussen.png"
                  alt="Hifi schets #3"
                  className="block object-contain object-top w-full aspect-square"
                />
                <H3 className="text-center pb-8 ">Klussen</H3>
              </SplideSlide>
            </Splide>
            <Splide
              options={{
                type: "infinite",
                rewind: true,
                autoplay: false,
                interval: 4000,
                speed: 2000,
                arrows: true,
                pagination: true,
                gap: "4rem",
              }}
            >
              <SplideSlide>
                <Img
                  extraBorder
                  contain
                  uniqueBg="bg-[#f3f3f7]"
                  src="/images/YoDashboardClients/EindversieOverzicht.png"
                  alt="Eindversie Overzicht"
                  className="block object-contain w-full aspect-square"
                />
                <H3 className="text-center pb-8 ">Overzicht</H3>
              </SplideSlide>
              <SplideSlide>
                <Img
                  extraBorder
                  contain
                  uniqueBg="bg-[#f3f3f7]"
                  src="/images/YoDashboardClients/EindversieFreelancer.png"
                  alt="Eindversie Freelancer"
                  className="block object-contain object-top w-full aspect-square"
                />
                <H3 className="text-center pb-8 ">Freelancer</H3>
              </SplideSlide>

              <SplideSlide>
                <Img
                  extraBorder
                  contain
                  uniqueBg="bg-[#f3f3f7]"
                  src="/images/YoDashboardClients/EindversieKlussen.png"
                  alt="Eindversie klussen"
                  className="block object-contain object-top w-full aspect-square"
                />
                <H3 className="text-center pb-8 ">Klussen</H3>
              </SplideSlide>
            </Splide>
            <section>
              <H2 chapeau="Het uiteindelijke resultaat in NextJS, Tailwind en ChartJS">
                Ontwikkelde versie
              </H2>
              <P>
                Na goedkeuring van de product owner was het tijd om het
                dashboard te realiseren in de frontend. Na wat onderzoek, bleek
                dat ChartJS het beste gecombineerd kon werden met NextJS en
                Tailwind. Met ChartJS kun je, met de kracht de van D3 library,
                snel krachtige diagrammen ontwikkelen.
              </P>
              <P>
                Tijdens het ontwikkelproces werd er ook nog wat geïtereerd. Zo
                werd het menu bovenin geplaatst, werd de locatiefilter bovenaan
                verwijderd om verwarring te voorkomen voor opdrachtgevers met 1
                locatie en werd het diagram op de kluspagina bovenaan gezet om
                eerst de globale data te tonen. Daarnaast zijn er nog wat
                kleuren veranderd en heb ik tijdelijke iconen ontworpen voor de
                kaders boven de diagrammen.
              </P>
              <P>
                Helaas is het dashboard ontwikkeld in een bestaand project van
                YoungOnes waardoor er ook veel geschreven code van andere
                aanwezig is in het project. Daarnaast wordt er gewerkt met
                gevoelige informatie en diverse connecties met databases van
                verschillende bedrijven. Ik heb daarom helaas geen toestemming
                gekregen om de code online te hosten en dus is er geen github
                link beschikbaar.
              </P>
            </section>
          </article>
        </section>
      </Container>
    </PageTemplate>
  );
}
