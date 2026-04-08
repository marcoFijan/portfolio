import PageTemplate from "../pageTemplate";
import Container from "@/components/Container";
import ContactSection from "@/components/ContactSection.js";
import H1 from "@/elements/H1";
import P from "@/elements/P";

export default function Contact() {
  return (
    <PageTemplate>
      {/* HEADER AREA */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32">
        <Container grid>
          <div className="text-center dark col-span-12">
            <H1 big chapeau="Interesse? Of vragen?">
              Neem contact met me op!
            </H1>
          </div>
        </Container>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="bg-white relative z-10 inverted-card pb-20 lg:pb-32">
        <svg
          className="w-full -translate-y-[99%] text-white"
          viewBox="0 0 1440 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z"
            fill="currentColor"
          ></path>
        </svg>
        <Container grid>
          {/* INTRO TEXT (Left Column) */}
          <article className="col-span-12 lg:col-span-5 lg:sticky top-32 h-fit space-y-6 mb-16 lg:mb-0">
            <P intro>
              Heb je interesse in mijn werk, wil je een project bespreken, of
              heb je gewoon een vraag? Aarzel dan niet om contact met me op te
              nemen. Ik sta altijd open voor nieuwe uitdagingen en
              samenwerkingen.
            </P>
          </article>

          {/* CONTACT SECTION (Right Column) */}
          <section className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
            <ContactSection />
          </section>
        </Container>

        {/* BOTTOM DECORATIVE WAVE */}
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
