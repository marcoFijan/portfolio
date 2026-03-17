import PageTemplate from "../pageTemplate.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import SvgDeviceOutline from "@/elements/SvgDeviceOutline.js";
import Button from "@/elements/Button.js";
import Action from "@/elements/Action.js";
import Container from "@/components/Container.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CornerSVG from "@/utilities/CornerSVG.js";
import "@splidejs/react-splide/css";

export default function StandaardAanbouw() {
  return (
    <PageTemplate projectPage>
      {/* HERO */}
      <Container className="dark">
        <div className="text-center mb-12">
          <H1 big chapeau={"Een herontwerp van een aannemers Wordpress website"}>
            Standaard aanbouw
          </H1>
        </div>

        <div className="hidden lg:block relative w-full h-[10rem]">
          <div className="absolute left-0 top-0 w-full">
            <SvgDeviceOutline />
          </div>
        </div>

        <article className="w-full lg:max-w-[80%] mx-auto">
          <section className="mb-10 md:mb-20">
            <Img
              extraBorder
              browserToolbar
              src="/images/StandaardAanbouw/SAFinalDesign.png"
              alt="Eind Ontwerp Standaard Aanbouw"
              className="block object-cover aspect-video w-full"
            />
          </section>
          <div className="space-y-6">
            <P intro>
              Ik kreeg de opdracht om een nieuwe website te ontwerpen voor het bedrijf van een kennis. Ik begon met het analyseren van de huisstijl en de websites van concurrenten. Op basis daarvan maakte ik een low-fidelity (lo-fi) ontwerp.
            </P>
            <P intro>
              Na een tweede feedbackronde heb ik een aangepaste hi-fi ontwerp ontworpen. Deze definitieve versie is vervolgens responsive uitgewerkt en gerealiseerd in WordPress.
            </P>
          </div>
          <Action>
            <Button type="primary" href="https://github.com/marcoFijan/StandaardAanbouwWordpress">
              Bekijk de Wordpress Github
            </Button>
            <Button type="secondary" href="https://www.figma.com/design/ZcA6RMU1cP4lUignKSchCU/StandaardAanbouw-HiFi-V0.1?node-id=0-1">
              Bekijk ontwerp op Figma
            </Button>
          </Action>
        </article>
      </Container>

      <section className="bg-white mt-30 relative relative my-30 bg-color-bg-bottom-light inverted-card py-20 lg:py-20">
        <CornerSVG position="top" side="left" />
        <CornerSVG position="top" side="right" rotate="-rotate-90" />


        {/* BRANDING SECTION */}
        <Container grid className="mb-24 xl:mb-40">
          <div className="col-span-12 mb-12">
            <H2 chapeau="Huisstijl voor briefpapier en facturen">Huisstijl elementen</H2>
            <P>
              Ondanks dat de website flink <i>outdated</i> was, is het logo en briefpapier inmiddels al wel geupdatet. De wens was dan ook om dit als huisstijl te gebruiken voor het herontwerp.
            </P>
          </div>

          <article className="col-span-12 lg:col-span-6 flex flex-col space-y-6">
            <div>
              <H3>Logo</H3>
              <P>
                De aannemer is recentelijk een rebranding aangegaan en heeft het bedrijf hernoemd naar standaard aanbouw. Hiervoor huurde de aannemer een designer voor een nieuw logo.
              </P>
            </div>
            <Img src="/images/StandaardAanbouw/Logo.jpg" alt="Standaard Aanbouw Logo" />
          </article>

          <article className="col-span-12 lg:col-span-6 flex flex-col space-y-6">
            <div>
              <H3>Briefpapier</H3>
              <P>
                De aannemer werkt voornamelijk via bestaande contacten en heeft hiervoor geen website nodig gehad. Wel werden er facturen opgesteld en hiervoor werd briefpapier ontworpen.
              </P>
            </div>
            <Img src="/images/StandaardAanbouw/Briefpapier.jpg" alt="Standaard Aanbouw Briefpapier" />
          </article>
        </Container>

        {/* ITERATIONS SECTION */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Overzicht van de hoofditeraties">Herontwerp</H2>
            <P>
              Het ontwerpproces verliep iteratief, van een eerste LoFi-schets tot een uitgewerkt HiFi-eindontwerp. De focus lag eerst op de hoofdpagina.
            </P>
            <P>
              De eerste HiFi-iteratie bracht kleur en beeldmateriaal in het ontwerp. In de tweede versie werd het drukke blauw aangepast en werden de afgeronde knoppen vervangen door strakkere varianten.
            </P>
            <P>
              In de laatste HiFi-iteratie zijn de keurmerken verwijderd en werden een secundaire knop, galerij, contactsectie en nieuwsoverzicht toegevoegd.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 relative">
            <Splide options={{ type: "fade", rewind: true, pagination: true }}>
              <SplideSlide>
                <Img invisibleBorder overflowScroll src="/images/StandaardAanbouw/Lofi.jpg" alt="Lofi" className="object-contain w-full" />
                <div className="p-8 text-center">
                  <H3>LoFi ontwerp</H3>
                  <P className="italic">Huisstijl vertaling naar digitale opzet.</P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img invisibleBorder overflowScroll src="/images/StandaardAanbouw/Hifi1.jpg" alt="Hifi 1" className="object-contain w-full" />
                <div className="p-8 text-center">
                  <H3>Eerste HiFi iteratie</H3>
                  <P className="italic">Toevoeging van kleur en beeldmateriaal.</P>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img invisibleBorder overflowScroll src="/images/StandaardAanbouw/Hifi5.png" alt="Eindontwerp" className="object-contain w-full" />
                <div className="p-8 text-center">
                  <H3>Laatste HiFi iteratie</H3>
                  <P className="italic">Definitief responsive ontwerp.</P>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>

        {/* OTHER SCREENS SECTION */}
        <Container grid>
          <section className="col-span-12 lg:col-span-6 lg:order-2 lg:sticky top-32 h-fit">
            <H2 chapeau="Overzicht van diverse detailpagina's">Overige schermen</H2>
            <P className="mt-4">
              Nadat er een akkoord was bereikt over het eindontwerp van de hoofdpagina, werden diverse detailpagina's uitgewerkt. Hieronder vindt u de twee hoofddetailpagina's.
            </P>
          </section>

          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Splide options={{ type: "loop" }}>
              <SplideSlide>
                <Img invisibleBorder overflowScroll src="/images/StandaardAanbouw/Blogpagina.png" alt="Blog" className="object-contain w-full" />
                <div className="p-8 text-center">
                  <H3>Blogpagina</H3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Img invisibleBorder overflowScroll src="/images/StandaardAanbouw/Servicepagina.png" alt="Service" className="object-contain w-full" />
                <div className="p-8 text-center">
                  <H3>Servicepagina</H3>
                </div>
              </SplideSlide>
            </Splide>
          </section>
        </Container>
      </section>
      {/* WHITE BLOCK END */}

    </PageTemplate>
  );
}