import Image from "next/image";
import marcoPointingAtText from "../../public/images/marcoPointing.png";
import Article from "../molecules/Article";

export default function AboutSection() {
  return (
    <article className="w-full bg-bgColorLight">
      <div className="max-w-wrapper mx-auto w-full grid gap-8 grid-cols-fluid px-8">
        <Article
          transparent={false}
          header1={"Marco Fijan"}
          header2={"Web Designer"}
          paragraph1={
            "Welkom! Leuk dat je een kijkje komt nemen op mijn website. Ik ben Marco en ben in 2022 afgestudeerd in Communicatie en Multimedia design op de Hogeschool van Amsterdam. Het ontwerpen en ontwikkelen van gebruiksvriendelijke webapplicaties spreekt mij erg aan; Het bedenken van een idee, hierop itereren en deze iteraties toetsen met de doelgroep is dan ook iets wat ik graag doe. Ik zet altijd alles op alles om de beleving van de gebruiker voorop te zetten en deze te bevorderen."
          }
          paragraph2={
            "Naast mijn passie voor het ontwerpen en developen van websites, kan ik ook erg genieten van rust, natuur en dieren. Daarnaast spaar ik edelstenen en minarelen en besteed ik mijn vrije tijd ook graag aan videogames met goed verhaal. Hier kan ik helemaal in verdwalen."
          }
        >
          DIT IS EEN TEST PROP BLABLBALBLA
        </Article>
        <Image
          className="w-auto h-auto  max-w-lg block self-end"
          src={marcoPointingAtText}
          alt="Picture of Marco Fijan pointing to text"
        />
        <section className="self-center h-96 py-96 bg-bgColorLight">
          placeholder
        </section>
      </div>
    </article>
  );
}
