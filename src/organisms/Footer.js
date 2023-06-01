import Image from "next/image";
import Link from "next/link";
import NextLink from "../atoms/NextLink.js";
import H3 from "../atoms/H3.js";

export default function Footer({ homePage }) {
  const footerContent = (
    <section className="w-full max-w-wrapper px-articlePadding mx-auto flex justify-between">
      <div className="hidden sm:block relative shadow-inputField bg-bgColorLight rounded-full w-44 h-44 self-center">
        <Image
          width="500"
          height={"500"}
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
        <ul className="hidden md:flex flex-col gap-1">
          <li>
            <H3 text="Projecten" darkBackground={false} />
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              KBO Tilburg Reeshof
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              YO Dashboard
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              YO GWOTY-award
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              Standaard Aanbouw
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              KBO Tilburg Reeshof
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              KBO Tilburg Reeshof
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <H3 text="Contact" darkBackground={false} />
        <NextLink text="Neem contact op!" href="/contact"></NextLink>
      </div>
    </section>
  );
  return (
    <>
      {homePage ? (
        <div className="bg-bgColorLight h-50% grid items-center">
          {footerContent}
        </div>
      ) : (
        <footer className="bg-bgColorDark">{footerContent}</footer>
      )}
    </>
  );
}
