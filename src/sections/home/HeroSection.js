import Container from "@/sections/Container";
import H1 from "@/elements/H1";
import P from "@/elements/P";
import Action from "@/elements/Action";
import Button from "@/elements/Button";
import LogoCarousel from "@/elements/LogoCarousel";
import Logo from "@/elements/Logo";

export default function HeroSection({ mobile }) {
  if (mobile) {
    return (
      <section
        id="hero"
        className="relative pt-26 flex flex-col sm:flex-row items-start justify-start"
      >
        <article className="left-0 bottom-0 xl:h-min xl:bottom-[unset] xl:pt-32 w-full xl:w-1/2 flex flex-col justify-start relative">
          <H1 chapeau="Marco Fijan" big>
            een wens, <br />
            een product. <br />
          </H1>
          <P>
            Hi, ik ben Marco Fijan, een frontend developer met een passie voor
            pixel-perfect webapplicaties, betrouwbare code en
            gebruiksvriendelijke ervaringen.
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
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="h-screen flex items-start pt-20 lg:pt-40 relative"
    >
      <div
        id="hero-mid"
        className="absolute top-1/2 left-0 w-0 h-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        id="hero-end"
        className="absolute bottom-[5%] left-0 w-0 h-0 pointer-events-none"
        aria-hidden="true"
      />
      <Container className="grid grid-cols-2 gap-6">
        <article className="dark">
          <H1 chapeau="Marco Fijan" big>
            Een wens, <br />
            een product. <br />
          </H1>
          <P>
            Hi, ik ben Marco Fijan, een frontend developer met een passie voor
            pixel-perfect webapplicaties, betrouwbare code en
            gebruiksvriendelijke ervaringen.
          </P>
          <P>
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
        <LogoCarousel />
      </Container>
    </section>
  );
}
