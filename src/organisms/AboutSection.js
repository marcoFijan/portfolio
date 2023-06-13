import Image from "next/image";
import marcoPointingAtText from "../../public/images/marcoPointing.png";
import Section from "../molecules/Section";
import Skill from "../molecules/Skill";

export default function AboutSection() {
  return (
    <>
      <div id="splitterStart"></div>
      <article className="w-full bg-bgColorLight -z-40">
        <div className="max-w-wrapper mx-auto w-full grid md:gap-8 grid-cols-fluid mb-1/2-height h-[150vh] md:h-screen items-start md:items-center">
          <section className="px-articlePaddingMobile md:px-articlePadding">
            <Section
              darkBackground={false}
              title={"Marco Fijan"}
              subTitle={"Web Designer"}
              paragraph1a={
                "Welkom! Leuk dat je een kijkje komt nemen op mijn website. Ik ben Marco en ben in 2022 afgestudeerd in Communicatie en Multimedia design op de Hogeschool van Amsterdam. Het ontwerpen en ontwikkelen van gebruiksvriendelijke webapplicaties spreekt mij erg aan; Het bedenken van een idee, hierop itereren en deze iteraties toetsen met de doelgroep is dan ook iets wat ik graag doe. Ik zet altijd alles op alles om de beleving van de gebruiker voorop te zetten en deze te bevorderen."
              }
              paragraph1b={
                "Naast mijn passie voor het ontwerpen en developen van websites, kan ik ook erg genieten van rust, natuur en dieren. Daarnaast spaar ik edelstenen en minarelen en besteed ik mijn vrije tijd ook graag aan videogames met goed verhaal, wat voor mij de meest immersieve manier is om een verhaal mee te krijgen"
              }
              linkHref={"https://github.com/marcoFijan"}
              linkText={"Bekijk mijn github"}
              lightBg={true}
            ></Section>
          </section>
          <section>
            <div className="w-full h-full md:w-auto md:h-auto z-0">
              <Image
                className="w-full max-w-xs hidden mx-auto md:mx-0 md:w-auto h-auto md:max-w-md md:block z-0 px-articlePadding"
                src={marcoPointingAtText}
                alt="Picture of Marco Fijan pointing to text"
                priority={false}
              />
            </div>
            <section className="grid grid-cols-2 mx-4 gap-8 shadow-inputFieldValid bg-bgColorLight z-50 rounded-lg box-border px-8 pt-8 pb-4">
              <section>
                <Skill
                  text={"HTML, CSS en Styling"}
                  percentageClassname="w-[90%]"
                />
                <Skill text={"Javascript"} percentageClassname="w-[75%]" />
                <Skill
                  text={"NextJS en Svelte"}
                  percentageClassname="w-[70%]"
                />
              </section>
              <section>
                <Skill
                  text={"Illustrator en Figma"}
                  percentageClassname="w-[86%]"
                />
                <Skill text={"Tailwind"} percentageClassname="w-[80%]" />

                <Skill
                  text={"Unity Game engine"}
                  percentageClassname="w-[65%]"
                />
              </section>
            </section>
          </section>
        </div>
      </article>
      <div className="relative h-1/2 w-full">
        <div id="splitterEnd" className="-mt-3/5-height z-50 absolute"></div>
      </div>
    </>
  );
}
