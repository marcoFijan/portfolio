import PageTemplate from "../pageTemplate";
import Container from "@/sections/Container";
import ContactSection from "@/sections/ContactSection.js";

import H1 from "@/elements/H1";
import P from "@/elements/P";

export default function Contact() {
  return (
    <PageTemplate>
      <Container>
        <article>
          <H1 big className="" chapeau={"Interesse? Of vragen?"}>
            Neem contact met me op!
          </H1>
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <P intro>
              Heb je interesse in mijn werk, wil je een project bespreken, of
              heb je gewoon een vraag? Aarzel dan niet om contact met me op te
              nemen. Ik sta altijd open voor nieuwe uitdagingen en
              samenwerkingen.
            </P>
            <ContactSection />
          </section>
        </article>
      </Container>
    </PageTemplate>
  );
}
