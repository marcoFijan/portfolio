import Container from "@/components/Container";
import H1 from "@/elements/H1";
import P from "@/elements/P";
import Action from "@/elements/Action";
import Button from "@/elements/Button";
import LogoCarousel from "@/elements/LogoCarousel";

export default function HeroHome() {
  return (
    <section id="hero" className="relative pt-20 lg:pt-26 flex items-start">
      <div id="hero-mid" className="absolute top-1/2 left-0 w-0 h-0 pointer-events-none" aria-hidden="true" />
      <div id="hero-end" className="absolute bottom-[5%] left-0 w-0 h-0 pointer-events-none" aria-hidden="true" />

      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <article className="dark flex flex-col justify-start lg:col-span-2">
          <H1 chapeau="Marco Fijan" big>
            Een wens, <br />
            een product. <br />
          </H1>
        </article>
        <article className="dark flex flex-col justify-start">
          <P>
            Hi, ik ben Marco Fijan, een frontend developer met een passie voor
            pixel-perfect webapplicaties, betrouwbare code en
            gebruiksvriendelijke ervaringen.
          </P>
          <P className="hidden lg:block">
            Met een sterke focus op moderne webtechnologieën en
            gebruikerservaring (UX) design bouw ik schaalbare, toegankelijke en
            goed geteste interfaces die niet alleen goed werken, maar ook
            intuïtief aanvoelen.
          </P>
          <Action>
            <Button className="block" type="primary" href="/contact">
              Neem contact op!
            </Button>
            <Button className="block" type="secondary" href="projects">
              Bekijk alle projecten
            </Button>
          </Action>
        </article>

        <div className="hidden lg:block">
          <LogoCarousel />
        </div>
      </Container>
    </section>
  );
}