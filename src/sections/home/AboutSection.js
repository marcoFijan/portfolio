import Container from "@/sections/Container";
import Article from "@/sections/Article";
import Img from "@/elements/Img";
import P from "@/elements/P";
import CornerSVG from "@/canvas/CornerSVG";

export default function AboutSection({ mobile }) {
  if (mobile) {
    return (
      <Article id="about" className="my-14">
        <section className="grid grid-cols-1 xs:grid-cols-6 w-full h-full items-stretch box-border">
          <Img
            alt="Marco aan het bureau"
            src="/images/general/MarcoBureau.jpg"
            className="object-right-top grayscale-75 opacity-70 max-w-full"
            classNameWrapper="col-span-1 xs:col-span-5 row-span-3 aspect-video mb-20"
          />
          <P className="text-xl text-white/40 col-span-1 xs:col-span-6 text-end my-10">
            Ik help mensen graag in het digitale tijdperk.
          </P>
          <P className="text-xl text-white/40 col-span-1 xs:col-span-6 my-10">
            In een toekomst waarin AI steeds meer op elkaar gaat lijken, werk ik
            graag aan unieke concepten die echt opvallen.
          </P>
          <P className="text-xl text-white/40 col-span-1 xs:col-span-6 text-center my-10">
            Geen poespas, altijd vooruitstrevend.
          </P>
        </section>
      </Article>
    );
  }

  return (
    <section
      id="about"
      className="relative my-30 bg-color-bg-bottom-light inverted-card py-20 lg:py-20"
    >
      <div
        id="about-end"
        className="absolute bottom-[5%] left-0 w-0 h-0 pointer-events-none"
        aria-hidden="true"
      />
      <CornerSVG position="left" side="top" />
      <CornerSVG position="right" side="top" rotate="-rotate-90" />

      <Container>
        <Article className="h-full">
          <section className="grid lg:gap-24 grid-cols-1 lg:grid-cols-6 w-full h-full items-stretch box-border pt-24">
            <Img
              alt="Marco aan het bureau"
              src="/images/general/MarcoBureau.jpg"
              className="object-right-top grayscale-75 opacity-70 max-w-full"
              classNameWrapper="col-span-1 lg:col-span-4 row-span-3 aspect-video mb-20"
            />
            <P className="text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-3">
              Ik help mensen graag in het digitale tijdperk.
            </P>
            <P className="text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-2">
              In een toekomst waarin AI steeds meer op elkaar gaat lijken, werk
              ik graag aan unieke concepten die echt opvallen.
            </P>
            <P className="text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-3">
              Geen poespas, altijd vooruitstrevend.
            </P>
          </section>
        </Article>
      </Container>

      <CornerSVG position="left" side="bottom" rotate="rotate-90" />
      <CornerSVG position="right" side="bottom" rotate="rotate-180" />
    </section>
  );
}
