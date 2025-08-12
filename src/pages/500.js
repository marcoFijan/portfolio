import PageTemplate from "./pageTemplate";
import Container from "@/sections/Container";
import Action from "@/elements/Action";

import H1 from "@/elements/H1";
import P from "@/elements/P";
import NextLink from "@/elements/NextLink";

export default function Custom500() {
  return (
    <PageTemplate>
      <Container className="mb-4">
        <div className="text-center">
          <H1 big chapeau={"Er is iets misgegaan"}>
            500 - Interne serverfout
          </H1>
          <P
            intro
            className={
              "text-white text-lg md:text-xl lg:text-2xl max-w-[70rem] mx-auto text-center"
            }
          >
            Er is een interne serverfout opgetreden. Probeer het later opnieuw.
          </P>
        </div>

        <Action className={"justify-center items-center"}>
          <NextLink type="primary" href="#">
            Herlaad de pagina
          </NextLink>
        </Action>
      </Container>
    </PageTemplate>
  );
}
