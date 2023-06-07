import { Montserrat } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import NextLink from "../atoms/NextLink.js";
import H3 from "../atoms/H3.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Footer({ homePage }) {
  const footerContent = (
    <section className="w-full max-w-wrapper px-articlePaddingMobile md:px-articlePadding mx-auto flex flex-wrap justify-between gap-8 ">
      <div className="hidden sm:block relative shadow-inputField bg-bgColorLight rounded-full w-44 h-44 self-center">
        <Image
          height={500}
          width={500}
          className="absolute rounded-b-full w-44 bottom-0 -scale-x-100"
          src={"/../public/images/marcoPointing.png"}
          alt={"Marco afbeelding"}
        />
      </div>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <H3 text="Pagina's" darkBackground={false} />
          </li>
          <li>
            <Link className="hover:underline" href={"/"}>
              Hoofdpagina
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={"/projects"}>
              Projecten
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <H3 text="Projecten" darkBackground={false} />
          </li>
          <li>
            <Link
              className="hover:underline"
              href={"/projects/kbo-tilburg-reeshof"}
            >
              KBO Tilburg Reeshof
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={"/projects/yo-gwoty-award"}>
              YO Dashboard
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={"/projects/yo-dashboard"}>
              YO GWOTY-award
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline"
              href={"/projects/standaard-aanbouw"}
            >
              Standaard Aanbouw
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={"/projects"}>
              Overige projecten
            </Link>
          </li>
        </ul>
      </nav>
      <div className="self-center md:w-auto md:self-auto">
        <H3 text="Contact" darkBackground={false} />
        <p>Heeft u interesse? </p> <p>Stuur gerust een berichtje!</p>
        <NextLink text="Neem contact op!" href="/contact"></NextLink>
      </div>
    </section>
  );
  return (
    <>
      {homePage ? (
        <div
          className={`bg-bgColorLight h-50% grid items-center ${montserrat.className}`}
        >
          {footerContent}
        </div>
      ) : (
        <>
          <footer className={`${montserrat.className} -mt-[50vh]`}>
            <div id="splitterStart"></div>
            <div className="w-full bg-bgColorLight py-8">{footerContent}</div>
          </footer>
        </>
      )}
    </>
  );
}
