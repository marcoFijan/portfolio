import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Li from "@/elements/Li.js";
import SvgDeviceOutline from "@/elements/SvgDeviceOutline.js";
import NextLink from "@/elements/NextLink";
import Divider from "@/elements/Divider.js";
import Action from "@/elements/Action.js";
import FlexArticle from "@/elements/FlexArticle.js";
import Container from "@/sections/Container.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function StandaardAanbouw() {
  const baseClasses =
    "w-full h-full object-cover relative bg-black overflow-hidden";
  const borderClasses = "box-border rounded-2xl border-gray-300 border-0";
  const shadowClasses = "z-0 shadow-lg";
  const afterClasses =
    "after:border-1 after:rounded-2xl after:border-color-border after:w-full after:-right-8 after:-bottom-8 after:absolute after:h-[100%] after:z-[-3]";
  const beforeClasses =
    "before:border-1 before:rounded-2xl before:border-color-border before:w-full before:-left-8 before:-top-8 before:absolute before:h-full before:z-[-3]";

  return (
    <PageTemplate projectPage>
      <Container>
        <div className="text-center">
          <H1
            big
            className={""}
            chapeau={"Een herontwerp van een aannemers Wordpress website"}
          >
            Standaard aanbouw
          </H1>
        </div>

        <div className="hidden lg:block relative w-full h-[10rem]">
          <div className="absolute left-0 top-0 w-full">
            <SvgDeviceOutline />
          </div>
        </div>

        <article className="w-full lg:max-w-[80%] mx-auto">
          <section className="lg:mb-36 mb-15">
            <Img
              extraBorder
              browserToolbar
              src="/images/StandaardAanbouw/SAFinalDesign.png"
              alt="Eind Ontwerp Standaard Aanbouw"
              className="block object-cover aspect-video w-full"
            />
          </section>
          <P intro>
            Ik kreeg de opdracht om een nieuwe website te ontwerpen voor het
            bedrijf van een kennis. Ik begon met het analyseren van de huisstijl
            en de websites van concurrenten. Op basis daarvan maakte ik een
            low-fidelity (lo-fi) ontwerp. Na een feedbacksessie stemde de
            opdrachtgever in met een concept, waarna ik het ontwerp verder
            uitwerkte tot een high-fidelity (hi-fi) versie.
          </P>
          <P intro>
            Na een tweede feedbackronde heb ik een aangepaste hi-fi ontwerp
            ontworpen. Deze definitieve versie is vervolgens responsive
            uitgewerkt en gerealiseerd in WordPress.
          </P>
          <Action>
            <NextLink
              type="primary"
              href="hhttps://github.com/marcoFijan/StandaardAanbouwWordpress"
            >
              Bekijk de Wordpress Github
            </NextLink>
            <NextLink
              type="secondary"
              href="https://www.figma.com/design/ZcA6RMU1cP4lUignKSchCU/StandaardAanbouw-HiFi-V0.1?node-id=0-1"
            >
              Bekijk ontwerp op Figma
            </NextLink>
          </Action>
        </article>
        <Divider />
        <article>
          <H2 chapeau="Huisstijl voor briefpapier en facturen">
            Huisstijl elementen
          </H2>
          <P>
            Ondanks dat de website flink <i>outdated</i> was, is het logo en
            briefpapier inmiddels al wel geupdatet. De wens was dan ook om dit
            als huisstijl te gebruiken voor het herontwerp.
          </P>
          <FlexArticle smallMargin alignTop>
            <section className="sticky top-10">
              <H3>Logo</H3>
              <P>
                De aannemer is recentelijk een rebranding aangegaan en heeft het
                bedrijf hernoemd naar standaard aanbouw. Hiervoor huurde de
                aannemer een designer voor een nieuw logo
              </P>
            </section>
            <div className="max-w-[50rem] mx-auto">
              <Img
                src="/images/StandaardAanbouw/Logo.jpg"
                alt="Standaard Aanbouw Logo"
              />
            </div>
          </FlexArticle>
          <FlexArticle reverse smallMargin alignTop>
            <section className="sticky top-10">
              <H3>Briefpapier</H3>
              <P>
                De aannemer werkt voornamelijk via bestaande contacten en heeft
                hiervoor geen website nodig gehad. Wel werden er facturen
                opgesteld en hiervoor werd briefpapier ontworpen
              </P>
            </section>
            <div className="max-w-[50rem] mx-auto">
              <Img
                src="/images/StandaardAanbouw/Briefpapier.jpg"
                alt="Standaard Aanbouw Briefpapier"
              />
            </div>
          </FlexArticle>
        </article>
        <article className="grid relative grid-cols-1 gap-12 lg:grid-cols-2 gap-y-12 pt-20 my-16 xl:my-32 items-start">
          <section className="sticky top-10">
            <H2 chapeau="Overzicht van de hoofditeraties">Herontwerp</H2>
            <P>
              Het ontwerpproces verliep iteratief, van een eerste LoFi-schets
              tot een uitgewerkt HiFi-eindontwerp. De focus lag eerst op de
              hoofdpagina. Vervolgens werden in later stadia de overige paginas
              bepaald en ontworpen. In de LoFi-fase werd de huisstijl van het
              briefpapier vertaald naar een digitale opzet. De schuine donkere
              balken kregen een blauwe kleur, met een geelgroene tint als
              accent. Na positieve feedback van de opdrachtgever werd dit verder
              uitgewerkt.
            </P>
            <P>
              De eerste HiFi-iteratie bracht kleur en beeldmateriaal in het
              ontwerp, met behoud van de oorspronkelijke navigatiestructuur. In
              de tweede versie werd het drukke blauw aangepast en werden de
              afgeronde knoppen vervangen door strakkere varianten. Ook zijn er
              slogans toegevoegd ter versterking van de boodschap.
            </P>
            <P>
              De derde iteratie focuste op de leesbaarheid van de herosectie.
              Aanpassingen volgden in kleurgebruik en typografie. In de vierde
              versie zijn knoppen, headers en titels verder verfijnd, en werden
              keurmerken toegevoegd om vertrouwen te wekken.
            </P>
            <P>
              In de laatste HiFi-iteratie zijn de keurmerken verwijderd, omdat
              de aannemer deze niet voert. Wel werden een secundaire knop,
              galerij, contactsectie en nieuwsoverzicht toegevoegd, waarmee het
              ontwerp zowel visueel als functioneel werd afgerond.
            </P>
          </section>

          <section className="relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className={` relative m-8 ${afterClasses} ${beforeClasses}`}>
                <div
                  className={`${baseClasses} ${borderClasses} ${shadowClasses}`}
                >
                  <div className="w-full h-[50rem] bg-color-bg-top top 0 -z-10"></div>
                </div>
              </div>
            </div>
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
                  invisibleBorder
                  overflowScroll
                  src="/images/StandaardAanbouw/Lofi.jpg"
                  alt="Lofi schets"
                  className="block object-contain object-top w-full "
                />
                <H3 className="text-center ">LoFi ontwerp</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  In het LoFi-ontwerp probeerde ik de stijl van het briefpapier
                  na te bootsen. De schuine donkere balken wil ik de blauwe
                  huiskleur geven en als accentkleur wil ik de geel groene kleur
                  gebruiken. De opdrachtgever was tevreden met het LoFi-ontwerp
                  en ik ging dus verder met het HiFi-ontwerp
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/StandaardAanbouw/Hifi1.jpg"
                  alt="Hifi schets #1"
                  className="block object-contain object-top w-full "
                />
                <H3 className="text-center ">Eerste HiFi iteratie</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  In dit ontwerp voeg ik kleur en afbeeldingen toe om het
                  ontwerp meer vorm te geven. Naast de afbeeldingen probeerde ik
                  ook de huisstijl van het briefpapier na te bootsen op de
                  website. Voor de menuselectie gebruikte ik het oorspronkelijke
                  ontwerp van de beter wonen website.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/StandaardAanbouw/Hifi2.png"
                  alt="Hifi schets #2"
                  className="block object-contain object-top w-full "
                />
                <H3 className="text-center ">Tweede HiFi iteratie</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Het blauw in de eerste HiFi iteratie vond ik te druk.
                  Daarnaast pastte de afgeronde knoppen niet in de stijl van de
                  rest van de website en werden deze dus aangepast. Ook werden
                  er slogans toegevoegd.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/StandaardAanbouw/Hifi3.png"
                  alt="Hifi schets #3"
                  className="block object-contain object-top w-full "
                />
                <H3 className="text-center ">Derde HiFi iteratie</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  In de volgende iteratie heb ik geëxperimenteerd met de
                  herosectie van de pagina. In de vorige itaratie was de tekst,
                  ondanks de tekstschaduw, de tekst nog slecht leesbaar.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/StandaardAanbouw/Hifi4.jpg"
                  alt="Hifi schets #4"
                  className="block object-contain object-top w-full "
                />
                <H3 className="text-center ">Vierde HiFi iteratie</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  In deze iteratie werd er verder geïtereerd op de herosectie en
                  kreeg de achtergrondkleur, knop, header en titel aangepast.
                  Ook werden er keurmerken toegevoegd om vertrouwen te wekken.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/StandaardAanbouw/Hifi5.png"
                  alt="Hifi schets #5"
                  className="block object-contain object-top w-full "
                />
                <H3 className="text-center ">Laatste HiFi iteratie</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  De aannemer heeft geen keurmerken dus werden deze verwijderd.
                  Daarnaast werden er secondaire knoppen, een galerij, een
                  contactsectie en recente nieuwspagina toegevoegd.
                </P>
              </SplideSlide>
            </Splide>
          </section>
        </article>
        <article className="grid relative grid-cols-1 gap-12 lg:grid-cols-2 gap-y-12 pt-20 my-16 xl:my-32 items-start">
          <section className="sticky top-10 xl:order-2">
            <H2 chapeau="Overzicht van diverse detailpagina's">
              Overige schermen
            </H2>
            <P>
              Nadat er een akkoord was bereikt over het eindontwerp van de
              hoofdpagina, werden diverse detailpagina uitgewerkt. Deze
              detailpainga werden in dezelfde vorm en huisstijl ontworpen dan
              het hoofdscherm. Hieronder vind u de 2 hoofddetailpaginas
              vormgegeven.
            </P>
          </section>

          <section className="relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className={` relative m-8 ${afterClasses} ${beforeClasses}`}>
                <div
                  className={`${baseClasses} ${borderClasses} ${shadowClasses}`}
                >
                  <div className="w-full h-[50rem] bg-color-bg-top top 0 -z-10"></div>
                </div>
              </div>
            </div>
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
                  invisibleBorder
                  overflowScroll
                  src="/images/StandaardAanbouw/Blogpagina.png"
                  alt="Blogpagina hifi"
                  className="block object-contain object-top w-full "
                />
                <H3 className="text-center ">Blogpagina</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  Verschillende klanten bij het bedrijf willen graag op de
                  hoogte gesteld blijven over diverse ontwikkelingen bij het
                  bedrijf. Hiervoor wordt een nieuwspagina ofwel blogpagina
                  bijgehouden door de aannemer. Daarnaast geeft het hebben van
                  een up-to-date nieuwspagina meer vertrouwen naar potentiele
                  nieuwe klanten.
                </P>
              </SplideSlide>
              <SplideSlide>
                <Img
                  invisibleBorder
                  overflowScroll
                  src="/images/StandaardAanbouw/Servicepagina.png"
                  alt="Servicepagina hifi"
                  className="block object-contain object-top w-full "
                />
                <H3 className="text-center ">HiFi van de servicepagina</H3>
                <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph">
                  De aannemer levert verschillende services. De aannemer wilt de
                  focus hebben op hulp bij het zelf aannemen en daarom is deze
                  optie als call-to-action zichtbaar op het hoofdscherm. Bij de
                  vergelijking tussen services wordt deze optie daarom ook in
                  het midden getoond, de positie waar ogen het eerst naar toe
                  gaan.
                </P>
              </SplideSlide>
            </Splide>
          </section>
        </article>
      </Container>
    </PageTemplate>
  );
}
