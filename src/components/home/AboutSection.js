import Container from "@/components/Container";
import Article from "@/components/Article";
import Img from "@/elements/Img";
import P from "@/elements/P";
import CornerSVG from "@/utilities/CornerSVG";
import InfiniteTextBar from "@/elements/infiniteTextBar";

export default function AboutSection({ mobile }) {
  if (mobile) {
    return (
      <Article id="about" className="my-14">
        <section className="grid grid-cols-1 xs:grid-cols-6 w-full h-full items-stretch box-border">
          <Img
            alt="Marco aan het bureau"
            src="/images/general/MarcoBureau.jpg"
            width={900}
            height={350}
            className="object-right-top grayscale-75 opacity-70 max-w-full"
            classNameWrapper="col-span-1 xs:col-span-5 row-span-3 aspect-video  max-w-full"
          />
          <P>
            Ik help mensen graag in het digitale tijdperk.
          </P>
          <P >
            In een toekomst waarin AI steeds meer op elkaar gaat lijken, werk ik
            graag aan unieke concepten die echt opvallen.
          </P>
          <P>
            Geen poespas, altijd vooruitstrevend.
          </P>
        </section>
      </Article>
    );
  }

  return (
    <section
      id="about"
      className="relative my-30 xl:my-60 bg-color-bg-bottom-light inverted-card "
    >
      <div
        id="about-end"
        className="absolute bottom-[5%] left-0 w-0 h-0 pointer-events-none"
        aria-hidden="true"
      />
      <svg className="w-full -translate-y-[99%] text-white" viewBox="0 0 1440 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z" fill="currentColor"></path>
      </svg>
      {/* <CornerSVG position="top" side="left" /> */}
      {/* <CornerSVG position="top" side="right" rotate="-rotate-90" /> */}

      <div className="h-80 mt-30 relative max-h-[60vw] xl:max-h-[30vw] w-full">
        <InfiniteTextBar
          text={['User Experience', 'Frontend Developer', 'Usability', 'Design', 'Testen']}
          className="-top-[7vw]"
        ></InfiniteTextBar>
        <InfiniteTextBar
          text={['Figma', 'NextJS', 'Tailwind', 'SCSS', 'Umbraco', 'Wordpress', 'Kentico']}
          className="top-[2vw]"
          directionLeft
        ></InfiniteTextBar>
      </div>

      <Container>
        <Article className="h-full">
          <section className="grid lg:gap-24 grid-cols-1 lg:grid-cols-6 w-full h-full items-stretch box-border pt-24">
            <Img
              alt="Marco aan het bureau"
              src="/images/general/MarcoBureau.jpg"
              className="object-right-top grayscale-75 opacity-70 max-w-full"
              classNameWrapper="col-span-1 lg:col-span-4 row-span-3 aspect-video mb-20"
            />
            <P splitText className="text-xl lg:text-2xl xl:text-5xl  col-span-1 lg:col-span-4 lg:col-start-3">
              Ik help mensen graag in het digitale tijdperk.
            </P>
            <P splitText className="text-xl lg:text-2xl xl:text-5xl col-span-1 lg:col-span-4">
              In een toekomst waarin AI steeds meer op elkaar gaat lijken, werk
              ik graag aan unieke concepten die echt opvallen.
            </P>
            <P splitText className="text-xl lg:text-2xl xl:text-5xl col-span-1 lg:col-span-4 lg:col-start-2">
              Geen poespas, altijd vooruitstrevend.
            </P>
          </section>
        </Article>
      </Container>

      {/* <CornerSVG position="bottom" side="left" rotate="rotate-90" />
      <CornerSVG position="bottom" side="right" rotate="rotate-180" /> */}
      <svg className="w-full translate-y-[99%] text-white -scale-y-100" viewBox="0 0 1440 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z" fill="currentColor"></path>
      </svg>
    </section>
  );
}
