"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageTemplate from "./pageTemplate";
import Container from "@/sections/Container";
import Action from "@/elements/Action";

import H1 from "@/elements/H1";
import P from "@/elements/P";
import NextLink from "@/elements/NextLink";

export default function Custom404() {
  const [href, setHref] = useState(); // default to homepage
  const router = useRouter();

  useEffect(() => {
    // Use sessionStorage to store last internal URL
    const lastUrl = sessionStorage.getItem("lastInternalUrl");
    console.log("Last URL from sessionStorage:", lastUrl);

    if (lastUrl && lastUrl !== window.location.pathname) {
      setHref(lastUrl);
    } else {
      setHref("/"); // fallback to home
    }
  }, []);

  return (
    <PageTemplate>
      <Container className="mb-4">
        <div className="text-center">
          <H1 big chapeau={"This is not the page you are looking for"}>
            404 - Pagina niet gevonden
          </H1>
          <P
            intro
            className={
              "text-white text-lg md:text-xl lg:text-2xl max-w-[70rem] mx-auto text-center"
            }
          >
            Deze pagina bestaat niet of is verwijderd. Controleer de URL of ga
            terug naar de hoofdpagina.
          </P>
        </div>

        <Action className={"justify-center items-center"}>
          {href && (
            <NextLink type="secondary" href={href}>
              Ga terug naar vorige pagina
            </NextLink>
          )}
          <NextLink type="primary" href="/">
            Ga naar hoofdpagina
          </NextLink>
        </Action>
      </Container>
    </PageTemplate>
  );
}
