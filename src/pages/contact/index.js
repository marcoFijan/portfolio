import PageTemplate from "../pageTemplate";
import Container from "@/components/Container";
import ContactSection from "@/components/ContactSection.js";
import H1 from "@/elements/H1";
import H2 from "@/elements/H2";
import P from "@/elements/P";
import Wave from "@/elements/Wave";

export default function Contact() {
  return (
    <PageTemplate>
      {/* HEADER AREA */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32">
        <Container grid>
          <div className="text-center dark col-span-12">
            <H1 big chapeau="Contact">
              Interesse of vragen?
            </H1>
          </div>
        </Container>
      </section>

      <section className="bg-white relative z-10 inverted-card pb-20 lg:pb-32">
        <Wave className="-translate-y-[99%]" startAt={45} />
        <Container grid>
          <article className="col-span-12 lg:col-span-5 lg:sticky top-32 h-fit space-y-6 mb-16 lg:mb-0">
            <H2>Neem contact met me op!</H2>
            <P intro>
              Heb je interesse in mijn werk, wil je een project bespreken, of
              heb je gewoon een vraag?
            </P>
            <P>
              Aarzel dan niet om contact met me op te nemen. Ik sta altijd open
              voor nieuwe uitdagingen en samenwerkingen.
            </P>
          </article>
          <section className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
            <ContactSection />
          </section>
        </Container>
      </section>
      <Wave
        className="translate-y-[-1%] -scale-y-100"
        startAt={45}
        side="right"
      />
    </PageTemplate>
  );
}
