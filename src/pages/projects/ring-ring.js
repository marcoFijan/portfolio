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

export default function RingRing() {
  const baseClasses =
    "w-full h-full object-cover relative bg-black overflow-hidden";
  const borderClasses = "box-border rounded-2xl border-gray-300 border-0";
  const shadowClasses = "z-0 shadow-lg";
  const afterClasses =
    "after:border-1 after:rounded-2xl after:border-color-border after:w-full after:-right-8 after:-bottom-8 after:absolute after:h-[100%] after:z-[-3]";
  const beforeClasses =
    "before:border-1 before:rounded-2xl before:border-color-border before:w-full before:-left-8 before:-top-8 before:absolute before:h-full before:z-[-3]";

  return (
    <PageTemplate
      projectPage
      title="Marco Fijan - Ring Ring - Datavisualisatie van fietsverkeer"
    >
      <Container>
        <div className="text-center">
          <H1
            big
            className={""}
            chapeau={"Dashboard voor beleidsmakers van Ring Ring"}
          >
            Datavisualisatie van fietsverkeer
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
              contain
              extraBorder
              browserToolbar
              uniqueBg="bg-[#f1f1f1]"
              src="/images/RingRing/Home.jpg"
              alt="Eind Ontwerp Ring Ring"
              className="block aspect-video w-full"
            />
          </section>
          <ul className="w-max mb-8 flex flex-col gap-4 max-w-full">
            <Li
              className={
                "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl "
              }
            >
              <strong>Projectjaar:</strong> 2021
            </Li>
            <Li
              className={
                "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl "
              }
            >
              <strong>Projectdoel:</strong> Design en Datavisualisatie
            </Li>
            <Li
              className={
                "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl"
              }
            >
              <strong>Doelgroep:</strong> Beleidsmakers Ring Ring (35-70 jaar)
            </Li>
          </ul>
          <P intro>
            Voor Ring Ring heb ik een professioneel dashboard ontworpen waarmee
            beleidsmakers inzicht krijgen in het fietsverkeer. Ring Ring
            verzamelt via haar app waardevolle data over fietsroutes,
            gebruikersgedrag en feedback. Het dashboard visualiseert deze data
            op een overzichtelijke en toegankelijke manier, zodat beleidsmakers
            gefundeerde beslissingen kunnen nemen ter bevordering van
            fietsgebruik. De aangeleverde data bestond onder andere uit
            routecoördinaten, snelheden, tijdstippen, feedbackscores en
            afgelegde afstanden.
          </P>
          <Action>
            <NextLink
              type="primary"
              href="https://github.com/marcoFijan/projectDatavisualisation"
            >
              Bekijk de Wordpress Github
            </NextLink>
            <NextLink
              type="secondary"
              href="https://marcofijan.github.io/projectDatavisualisation/"
            >
              Bekijk de website
            </NextLink>
          </Action>
        </article>
        <Divider />
        <FlexArticle smallMargin alignTop>
          <section className="sticky top-30">
            <H2 chapeau="Inlogscherm voor authenticatie">Inlogpagina</H2>
            <P>
              Het dashboard bevat privacygevoelige Ring Ring data. Daarom is een
              beveiligde inlogpagina gerealiseerd, zodat uitsluitend
              geautoriseerde beleidsmakers toegang hebben tot de informatie.
            </P>
          </section>
          <div className="max-w-[50rem] mx-auto">
            <Img
              src="/images/RingRing/Inlogscherm.png"
              alt="Ring Ring inlogscherm"
              uniqueBg="bg-[#f1f1f1]"
            />
          </div>
        </FlexArticle>

        <FlexArticle alignTop reverse>
          <section className="sticky top-30">
            <H2 chapeau="Het hoofdscherm">Dashboard</H2>
            <P>
              Het dashboard biedt een helder totaaloverzicht van alle
              beschikbare data. Vanuit het hoofdscherm zijn de verschillende
              detailpagina’s – zoals de kaart, datavisualisaties en feedback –
              direct toegankelijk.
            </P>
          </section>
          <Img
            contain
            extraBorder
            browserToolbar
            src="/images/RingRing/Home.jpg"
            alt="Hoofdscherm van het ring-3 ring-3 ontwerp"
            className="block aspect-video w-full"
          />
        </FlexArticle>

        <FlexArticle alignTop>
          <section className="sticky top-30">
            <H2 chapeau="Data op basis van type account">Voor u-pagina</H2>
            <P>
              Op de ‘Voor U’-pagina worden datavisualisaties getoond die
              specifiek relevant zijn voor de ingelogde gebruiker. In dit
              voorbeeld ligt de nadruk op tijdstippen en dagen, weergegeven in
              een interactieve stacked barchart en piechart (D3.js). Gebruikers
              kunnen eenvoudig filteren op tijd of dag en verschillende
              datatypes, waardoor snel inzicht ontstaat in het fietsgebruik.
            </P>
          </section>
          <Img
            contain
            extraBorder
            browserToolbar
            src="/images/RingRing/SpecificData.jpg"
            alt="Voor u pagina van het ring-3 ring-3 ontwerp"
            className="block aspect-video w-full"
          />
        </FlexArticle>

        <FlexArticle alignTop reverse>
          <section className="sticky top-30">
            <H2 chapeau="Routes bekijken op een kaart">Kaartpagina</H2>
            <P>
              Op de kaartpagina kunnen beleidsmakers fietsroutes analyseren op
              basis van tijdstippen. Kleurcodes (blauw: nacht, rood: spits,
              geel: overdag) maken het eenvoudig om drukke periodes en populaire
              routes te identificeren. Dit biedt direct inzicht in het
              fietsverkeer en ondersteunt beleidsvorming.
            </P>
          </section>
          <Img
            contain
            extraBorder
            browserToolbar
            src="/images/RingRing/Routes.jpg"
            alt="Kaartpagina van het ring-3 ring-3 ontwerp"
            className="block aspect-video w-full"
          />
        </FlexArticle>

        <FlexArticle alignTop>
          <section className="sticky top-30">
            <H2 chapeau="Gegeven feedback over routes bekijken">
              Feedbackpagina
            </H2>
            <P>
              De feedbackpagina geeft beleidsmakers een compleet overzicht van
              alle ontvangen feedback, inclusief afstand, datum en inhoud van de
              feedback. Er kan eenvoudig worden gefilterd op dagtype en
              feedbackscore. Daarnaast is het mogelijk om feedback direct door
              te sturen naar collega’s voor verdere opvolging.
            </P>
          </section>
          <Img
            extraBorder
            browserToolbar
            overflowScroll
            src="/images/RingRing/Feedback.jpg"
            alt="Feedbackpagina van het ring-3 ring-3 ontwerp"
            className="block w-full"
          />
        </FlexArticle>
      </Container>
    </PageTemplate>
  );
}
