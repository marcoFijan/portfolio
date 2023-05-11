import Image from "next/image";
import marcoPointingAtText from "../../public/images/marcoPointing.png";
import Section from "../molecules/Section";

export default function AboutSection() {
  return (
    <>
      <svg id="visual" viewBox="0 0 1920 400" width="1920" height="400">
        <path
          d="M0 284L80 271.2C160 258.3 320 232.7 480 198.8C640 165 800 123 960 119.3C1120 115.7 1280 150.3 1440 166.5C1600 182.7 1760 180.3 1840 179.2L1920 178L1920 401L1840 401C1760 401 1600 401 1440 401C1280 401 1120 401 960 401C800 401 640 401 480 401C320 401 160 401 80 401L0 401Z"
          fill="#2b3342"
        ></path>
        <path
          d="M0 192L80 194.2C160 196.3 320 200.7 480 197.5C640 194.3 800 183.7 960 197.3C1120 211 1280 249 1440 240.3C1600 231.7 1760 176.3 1840 148.7L1920 121L1920 401L1840 401C1760 401 1600 401 1440 401C1280 401 1120 401 960 401C800 401 640 401 480 401C320 401 160 401 80 401L0 401Z"
          fill="#596680"
        ></path>
        <path
          d="M0 269L80 266.7C160 264.3 320 259.7 480 264.7C640 269.7 800 284.3 960 299.3C1120 314.3 1280 329.7 1440 323.2C1600 316.7 1760 288.3 1840 274.2L1920 260L1920 401L1840 401C1760 401 1600 401 1440 401C1280 401 1120 401 960 401C800 401 640 401 480 401C320 401 160 401 80 401L0 401Z"
          fill="#a2afcc"
        ></path>
        <path
          d="M0 360L80 359.3C160 358.7 320 357.3 480 346.8C640 336.3 800 316.7 960 308C1120 299.3 1280 301.7 1440 310.7C1600 319.7 1760 335.3 1840 343.2L1920 351L1920 401L1840 401C1760 401 1600 401 1440 401C1280 401 1120 401 960 401C800 401 640 401 480 401C320 401 160 401 80 401L0 401Z"
          fill="#e7efff"
        ></path>
      </svg>
      <article className="w-full bg-bgColorLight">
        <div className="max-w-wrapper mx-auto w-full grid gap-8 grid-cols-fluid px-8">
          <Section
            darkBackground={false}
            title={"Marco Fijan"}
            subTitle={"Web Designer"}
            paragraph1a={
              "Welkom! Leuk dat je een kijkje komt nemen op mijn website. Ik ben Marco en ben in 2022 afgestudeerd in Communicatie en Multimedia design op de Hogeschool van Amsterdam. Het ontwerpen en ontwikkelen van gebruiksvriendelijke webapplicaties spreekt mij erg aan; Het bedenken van een idee, hierop itereren en deze iteraties toetsen met de doelgroep is dan ook iets wat ik graag doe. Ik zet altijd alles op alles om de beleving van de gebruiker voorop te zetten en deze te bevorderen."
            }
            paragraph1b={
              "Naast mijn passie voor het ontwerpen en developen van websites, kan ik ook erg genieten van rust, natuur en dieren. Daarnaast spaar ik edelstenen en minarelen en besteed ik mijn vrije tijd ook graag aan videogames met goed verhaal. Hier kan ik helemaal in verdwalen."
            }
          ></Section>
          <Image
            className="w-auto h-auto  max-w-lg block self-end"
            src={marcoPointingAtText}
            alt="Picture of Marco Fijan pointing to text"
          />
        </div>
      </article>
    </>
  );
}
