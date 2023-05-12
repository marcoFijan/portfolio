import Link from "next/link";
import Image from "next/link";
import LogoImg from "../../public/images/Logo.svg";

export default function Footer() {
  return (
    <article className="bg-bgColorLight text-black h-50%">
      <ul className="grid, justify-evenly">
        <li>
          <Link
            className="text-bgColorLight bg-accentColor font-bold px-8 py-3 mt-4 inline-block rounded-full text-center mx-auto place-self-center"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-bgColorLight bg-accentColor font-bold px-8 py-3 mt-4 inline-block rounded-full text-center mx-auto place-self-center"
            href={"/"}
          >
            Over mij
          </Link>
        </li>
        <li>
          <Image alt="logo" href={LogoImg} />
        </li>
        <li>
          <Link
            className="text-bgColorLight bg-accentColor font-bold px-8 py-3 mt-4 inline-block rounded-full text-center mx-auto place-self-center"
            href={"/"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-bgColorLight bg-accentColor font-bold px-8 py-3 mt-4 inline-block rounded-full text-center mx-auto place-self-center"
            href={"/"}
          >
            Neem contact op!
          </Link>
        </li>
      </ul>
    </article>
  );
}
