import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/images/Logo.svg";

export default function Header() {
  return (
    <header className="bg-bgColorDark text-white fixed z-50 w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <nav classname="">
        <ul className="max-w-wrapper mx-auto w-full px-8 grid-cols-5 grid">
          <li className="justify-self-start">
            <Link
              className="text-bgColorLight font-bold px-4 py-2 mt-2 inline-block text-center place-self-center"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className="justify-self-start">
            <Link
              className="text-bgColorLight font-bold px-4 py-2 mt-2 inline-block text-center place-self-center"
              href={"/"}
            >
              Over mij
            </Link>
          </li>
          <li classname={"place-self-center"}>
            <Image
              alt="logo"
              src={LogoImg}
              width={1000}
              height={1000}
              className="h-10 my-2"
            />
          </li>
          <li className="justify-self-end">
            <Link
              className="text-bgColorLight font-bold px-4 py-2 mt-2 inline-block text-center place-self-center"
              href={"/"}
            >
              Projects
            </Link>
          </li>
          <li className="justify-self-end">
            <Link
              className="text-bgColorLight font-bold px-4 py-2 mt-2 inline-block text-center place-self-center"
              href={"/"}
            >
              Neem contact op!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
