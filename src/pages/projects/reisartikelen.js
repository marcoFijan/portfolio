import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
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

export default function Reisartikelen() {
  return (
    <PageTemplate
      projectPage="ra"
      title="Marco Fijan - reisartikelen.nl - Herontwerp webshop met focus op corona thuisvakanties"
    >
      <Container>
        <div className="text-center">
          <H1
            big
            className={""}
            chapeau={"Een herontwerp met focus op conversieratio's"}
          >
            Reisartikelen herontwerp
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
              src="/images/reisartikelen/thumb.jpg"
              alt="Eind Ontwerp Reisartikelen.nl"
              className="block aspect-video w-full object-top"
            />
          </section>
          <ul className="w-max mb-8 flex flex-col gap-4 max-w-full">
            <Li
              className={
                "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl "
              }
            >
              <strong>Projectjaar:</strong> 2020
            </Li>
            <Li
              className={
                "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl "
              }
            >
              <strong>Projectdoel:</strong> Consistentie, vertrouwen opbouwen en
              beetere conversie
            </Li>
            <Li
              className={
                "px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl"
              }
            >
              <strong>Doelgroep:</strong> Corona getroffen reizigers
            </Li>
          </ul>
          <P intro>
            Het bedrijf achter reisartikelen.nl merkte dat hun conversie erg
            laag was. Daarom wilde ze een mogelijke herontwerp hebben van hun
            website die beter gefocust is op de huidige bezoekers.
            Reisartikelen.nl is een website die gespecialiseerd is in allerlei
            soort reisartikelen. Helaas zorgde de coronamaatregelen ervoor dat
            hun website dit jaar niet erg relevant of nuttig meer was. Ik kreeg
            de oprdacht om de website te herontwerpen zodat deze beter relevant
            is voor de coronamaatregelen en meer omzet kan draaien.
          </P>
          <Action>
            <NextLink
              type="primary"
              href="https://www.figma.com/proto/w6Y44DPKMD8ttJCWdfOuyt/Reisartikelen.nl-HiFi-Final?node-id=1%3A2&scaling=scale-down-width"
            >
              Interactief prototype
            </NextLink>
          </Action>
        </article>
        <Divider />
        <FlexArticle smallMargin alignTop>
          <section className="sticky top-30">
            <H2 chapeau="Website voor het herontwerp">Orgineel ontwerp</H2>
            <P>
              Ik kreeg toestemming om flink van de standaard huisstijl af te
              stappen. Reisartikelen was namelijk ook erg opzoek om hun funnels
              en conversieratio te verbeteren. Uiteraard moesten de fonts en
              kleuren hetzelfde blijven. Ik heb me voornamelijk gefocust op
              verschillende commercieël ontwerp principes zoals call to action
              buttons, vertrouwen creeëren, social proof en content in footer.
            </P>
          </section>
          <div className="max-w-[50rem] mx-auto">
            <Img
              contain
              extraBorder
              src="/images/Reisartikelen/Original.jpg"
              alt="Ring Ring inlogscherm"
            />
          </div>
        </FlexArticle>

        <FlexArticle alignTop reverse>
          <section className="sticky top-30">
            <H2 chapeau="Eerste schets na onderzoek">LoFi Ontwerp</H2>
            <P>
              In het eerste herontwerp zorgde ik voor een grote banner. Ook
              zorgde ik ervoor dat bezoekers in de header zich kunnen
              inschrijven voor de nieuwsbrief. De vermelde korting stimuleert
              bezoekers om zich in te schrijven. Ook gebruik ik veel
              verkoopsslogans die toepasselijk zijn voor de website onder de
              banner. De footer is nu ook meer opgevuld met nuttige informatie
              maar houdt dit inzichtelijk.
            </P>
          </section>
          <Img
            contain
            extraBorder
            src="/images/Reisartikelen/LoFi.jpg"
            alt="Lofi ontwerp reisartikelen.nl"
          />
        </FlexArticle>

        <FlexArticle alignTop>
          <section className="sticky top-30">
            <H2 chapeau="Het laatste ontwerp">HiFi Ontwerp</H2>
            <P>
              Na een feedbackronde van het LoFi-ontwerp ging ik verder met het
              ontwerp. Ik veranderde de verkoopslogans in iets wat relevanter
              was voor tijdens de coronamaatregelen. De knoppen ronde ik af. Dit
              heeft een hogere conversie bleek bij het testen. Voor het
              inschrijven van de nieuwsbrief ontwierp ik een nieuwe section op
              de pagina zelf. In de header zette ik een kleine call to action
              die mensen trekt naar de nieuwsbrief sectie.
            </P>
          </section>
          <Img
            contain
            extraBorder
            src="/images/Reisartikelen/HiFi.jpg"
            alt="HiFi reisartikelen.nl"
          />
        </FlexArticle>
      </Container>
    </PageTemplate>
  );
}
