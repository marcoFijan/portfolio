import { Montserrat } from "next/font/google";

import Image from "next/image";
import NextLink from "../elements/NextLink.js";
import P from "../elements/P.js";
import H2 from "../elements/H2.js";
import H3 from "../elements/H3.js";
import Container from "./Container.js";
import Divider from "../elements/Divider.js";

import FooterImg from "../../public/images/marcoPointing.png";

const montserrat = Montserrat({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Footer({ homePage }) {
  const footerContent = (
    <section className="w-full max-w-wrapper px-articlePaddingMobile md:px-articlePadding mx-auto flex flex-wrap justify-between gap-8 ">
      <div className="hidden md:block relative shadow-inputField rounded-full w-44 h-44 self-center">
        <Image
          className="absolute rounded-b-full w-44 bottom-0 -scale-x-100"
          src={FooterImg}
          alt={"Marco afbeelding"}
          priority={false}
        />
      </div>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <H3 text="Pagina's" darkBackground={false} />
          </li>
          <li>
            <NextLink className="hover:underline" href={"/"}>
              Hoofdpagina
            </NextLink>
          </li>
          <li>
            <NextLink className="hover:underline" href={"/projects"}>
              Projecten
            </NextLink>
          </li>
          <li>
            <NextLink className="hover:underline" href={"/contact"}>
              Contact
            </NextLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <H3 text="Projecten" darkBackground={false} />
          </li>
          <li>
            <NextLink
              className="hover:underline"
              href={"/projects/kbo-tilburg-reeshof"}
            >
              KBO Tilburg Reeshof
            </NextLink>
          </li>
          <li>
            <NextLink
              className="hover:underline"
              href={"/projects/yo-gwoty-award"}
            >
              YO Dashboard
            </NextLink>
          </li>
          <li>
            <NextLink
              className="hover:underline"
              href={"/projects/yo-dashboard"}
            >
              YO GWOTY-award
            </NextLink>
          </li>
          <li>
            <NextLink
              className="hover:underline"
              href={"/projects/standaard-aanbouw"}
            >
              Standaard Aanbouw
            </NextLink>
          </li>
          <li>
            <NextLink className="hover:underline" href={"/projects"}>
              Overige projecten
            </NextLink>
          </li>
        </ul>
      </nav>
      <div className="self-center md:w-auto md:self-auto">
        <H3 text="Contact" darkBackground={false} />
        <P>Heeft u interesse? </P>
        <P>Stuur gerust een berichtje!</P>
        <NextLink href="/contact">Neem contact op!</NextLink>
      </div>
    </section>
  );
  return (
    <>
      <footer className={`${montserrat.className} h-screen`}>
        <div className="w-full py-8">{footerContent}</div>
      </footer>
    </>
  );
}
