import Container from "@/components/Container";
import Article from "@/components/Article";
import Img from "@/elements/Img";
import P from "@/elements/P";
import InfiniteTextBar from "@/elements/infiniteTextBar";
import Wave from "@/elements/Wave";

export default function AboutSection({ }) {
  return (
    <section id="about" className="relative my-32 lg:my-16 bg-white inverted-card ">
      <div id="about-end" className="absolute bottom-[5%] left-0 w-0 h-0 pointer-events-none" aria-hidden="true" />
      <Wave className="-translate-y-[99%]" startAt={50} />
      <div className="h-80 mt-30 relative max-h-[60vw] xl:max-h-[30vw] w-full">
        <InfiniteTextBar
          text={["User Experience", "Frontend Developer", "Usability", "Design", "Testen", "Artificial Intelligence"]}
          className="-top-[7vw]"
        ></InfiniteTextBar>
        <InfiniteTextBar
          text={["Figma", "NextJS", "Svelte", "Tailwind", "SCSS", "Umbraco", "Wordpress", "Kentico",]}
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
            <P
              splitText
              className="text-xl lg:text-2xl xl:text-5xl  col-span-1 lg:col-span-4 lg:col-start-3"
            >
              Ik help mensen graag in het digitale tijdperk.
            </P>
            <P
              splitText
              className="text-xl lg:text-2xl xl:text-5xl col-span-1 lg:col-span-4"
            >
              In een toekomst waarin AI steeds meer op elkaar gaat lijken, werk
              ik graag aan unieke concepten die echt opvallen.
            </P>
            <P
              splitText
              className="text-xl lg:text-2xl xl:text-5xl col-span-1 lg:col-span-4 lg:col-start-2"
            >
              Geen poespas, altijd vooruitstrevend.
            </P>
          </section>
        </Article>
      </Container>

      <Wave className="translate-y-[99%]" startAt={50} side="left" />
    </section>
  );
}
