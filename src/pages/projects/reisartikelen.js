import PageTemplate from "../pageTemplate.js";
import H2 from "@/elements/H2.js";
import P from "@/elements/P.js";
import Img from "@/elements/Img.js";
import ProjectHero from "@/components/project/HeroProject.js";
import Container from "@/components/Container.js";

const projectData = {
  chapeau: "Een herontwerp met focus op conversieratio's",
  title: "Reisartikelen herontwerp",
  mainImage: {
    src: "/images/Reisartikelen/Thumb.jpg",
    alt: "Eind Ontwerp Reisartikelen.nl",
  },
  introParagraphs: [
    "Het bedrijf achter reisartikelen.nl merkte dat hun conversie erg laag was. Daarom wilde ze een mogelijke herontwerp hebben van hun website die beter gefocust is op de huidige bezoekers. Reisartikelen.nl is een website die gespecialiseerd is in allerlei soort reisartikelen. Helaas zorgde de coronamaatregelen ervoor dat hun website dit jaar niet erg relevant of nuttig meer was. Ik kreeg de opdracht om de website te herontwerpen zodat deze beter relevant is voor de coronamaatregelen en meer omzet kan draaien.",
  ],
  actions: [
    {
      label: "Interactief prototype",
      href: "https://www.figma.com/proto/w6Y44DPKMD8ttJCWdfOuyt/Reisartikelen.nl-HiFi-Final?node-id=1%3A2&scaling=scale-down-width",
      type: "primary",
    },
  ],
  projectDetails: [
    { label: "Projectjaar", value: "2020" },
    {
      label: "Projectdoel",
      value: "Consistentie, vertrouwen opbouwen en beetere conversie",
    },
    { label: "Doelgroep", value: "Corona getroffen reizigers" },
  ],
};

export default function Reisartikelen() {
  return (
    <PageTemplate
      projectPage="ra"
      title="Marco Fijan - reisartikelen.nl - Herontwerp webshop met focus op corona thuisvakanties"
    >
      {/* HERO */}
      <ProjectHero {...projectData} />

      <section className="bg-white relative z-10 mb-30 inverted-card py-20 lg:py-20">
        {/* ORIGINAL DESIGN */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
            <H2 chapeau="Website voor het herontwerp">Origineel ontwerp</H2>
            <P>
              Ik kreeg toestemming om flink van de standaard huisstijl af te
              stappen. Reisartikelen was namelijk ook erg opzoek om hun funnels
              en conversieratio te verbeteren. Uiteraard moesten de fonts en
              kleuren hetzelfde blijven. Ik heb me voornamelijk gefocust op
              verschillende commerciële ontwerpprincipes zoals call to action
              buttons, vertrouwen creëren, social proof en content in footer.
            </P>
          </section>
          <section className="col-span-12 lg:col-span-6 relative">
            <Img
              src="/images/Reisartikelen/Original.jpg"
              alt="Origineel ontwerp reisartikelen.nl"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        {/* LOFI DESIGN */}
        <Container grid className="mb-24 xl:mb-40">
          <section className="col-span-12 lg:col-span-6 lg:order-2 lg:sticky top-32 h-fit space-y-6">
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
          <section className="col-span-12 lg:col-span-6 lg:order-1 relative">
            <Img
              src="/images/Reisartikelen/LoFi.jpg"
              alt="Lofi ontwerp reisartikelen.nl"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        {/* HIFI DESIGN */}
        <Container grid>
          <section className="col-span-12 lg:col-span-6 lg:sticky top-32 h-fit space-y-6">
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
          <section className="col-span-12 lg:col-span-6 relative">
            <Img
              src="/images/Reisartikelen/HiFi.jpg"
              alt="HiFi reisartikelen.nl"
              className="object-contain w-full rounded-2xl border border-gray-200"
            />
          </section>
        </Container>

        <svg
          className="w-full translate-y-[99%] text-white -scale-y-100 absolute bottom-0 left-0"
          viewBox="0 0 1440 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </section>
    </PageTemplate>
  );
}
