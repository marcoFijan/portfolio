import Image from "next/image";
import Link from "next/link";
import NextLink from "../atoms/NextLink.js";

export default function Footer({ homePage }) {
  const footerContent = (
    <div className="w-full max-w-wrapper px-articlePadding mx-auto flex justify-between">
      <div className="relative bg-accentColor rounded-full w-44 h-44 self-center">
        <Image
          width="500"
          height={"500"}
          className="absolute rounded-b-full w-44 bottom-0"
          src={"/../public/images/marcoPointing.png"}
          alt={"Marco afbeelding"}
        />
      </div>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <h3>Pagina</h3>
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              Hoofdpagina
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              Projecten
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={""}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <h3>Projecten</h3>
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
        <h3>Contact</h3>
        <NextLink text="Neem contact op!" href="/contact"></NextLink>
      </div>
    </div>
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
