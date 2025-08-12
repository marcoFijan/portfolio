"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PageTemplate from "./pageTemplate";
import Container from "@/sections/Container";
import Action from "@/elements/Action";

import H1 from "@/elements/H1";
import P from "@/elements/P";
import NextLink from "@/elements/NextLink";

export default function Error() {
  const router = useRouter();
  const [sameDomain, setSameDomain] = useState(false);

  useEffect(() => {
    const referrer = document.referrer;
    const currentHost = window.location.host;

    try {
      const referrerUrl = new URL(referrer);
      if (referrerUrl.host === currentHost) {
        setSameDomain(true);
      }
    } catch (e) {
      // Invalid or empty referrer
      setSameDomain(false);
    }
  }, []);

  const handleClick = () => {
    if (sameDomain) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <PageTemplate>
      <Container className="mb-4">
        <div className="text-center">
          <H1 big chapeau={"This is not the page you are looking for"}>
            Error - Pagina niet gevonden
          </H1>
          <P
            intro
            className={
              "text-white text-lg md:text-xl lg:text-2xl max-w-[70rem] mx-auto text-center"
            }
          >
            Deze pagina bestaat niet of is verwijderd. Controleer de URL, ga
            terug of ga naar de hoofdpagina.
          </P>
        </div>

        <Action className={"justify-center items-center"}>
          <NextLink type="secondary" onClick={handleClick}>
            Ga terug naar vorige pagina
          </NextLink>
          <NextLink type="primary" href="/">
            Ga naar hoofdpagina
          </NextLink>
        </Action>
      </Container>
    </PageTemplate>
  );
}
