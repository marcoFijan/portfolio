import { Montserrat } from "next/font/google";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/images/Logo.svg";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Header() {
  return (
    <header
      className={`${montserrat.className} text-white fixed z-50 w-full py-2`}
    >
      <div className="w-full h-16 bg-bgColorDark border-b-bgColorLight border-b-1 -z-10 absolute top-0 left-0"></div>
      <div className="w-full max-w-wrapper md:px-articlePadding mx-auto flex justify-between py-2">
        <div className="mx-auto md:mx-0 relative w-16 top-0 left-0">
          <Image
            alt="logo"
            src={LogoImg}
            width={300}
            height={300}
            className="h-16 absolute -top-4 left-0"
            priority={true}
          />
        </div>
        <nav id="nav" className="flex transition-all items-center">
          <input
            className="hidden"
            type="checkbox"
            id="hamburgerMenu"
            name="hamburgerMenu"
          />
          <label
            htmlFor="hamburgerMenu"
            className="fixed flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight rounded-lg shadow-md cursor-pointer bottom-8 right-4 md:hidden"
            id="hamburgerMenu"
          >
            <div className="" id="menuButtonBurger"></div>
          </label>
          <ul
            className="fixed bottom-20 h-screen md:pb-0 md:h-auto md:static flex flex-col md:flex-row justify-end md:justify-between md:gap-4"
            id="navlist"
          >
            <li className="transition drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                id="button"
                className="text-white font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight border-y-white hover:border-y-CTAColor hover:border-y-2 box-border border-y-1 md:border-y-0 md:border-y-transparent md:from-transparent md:via-transparent md:to-transparent bg-transparent"
                href={"/"}
              >
                Hoofdpagina
              </Link>
            </li>
            <li className="transition drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                id="button"
                className="text-white font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight border-y-white hover:border-y-CTAColor hover:border-y-2 box-border border-y-1 md:border-y-0 md:border-y-transparent md:from-transparent md:via-transparent md:to-transparent bg-transparent"
                href={"/projects"}
              >
                Projecten
              </Link>
            </li>
            <li className="transition drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                id="button"
                className="text-white font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight border-y-white hover:border-y-CTAColor hover:border-y-2 box-border border-y-1 md:border-y-0 md:border-y-transparent md:from-transparent md:via-transparent md:to-transparent bg-transparent"
                href={"https://github.com/marcoFijan"}
              >
                Githubpagina
              </Link>
            </li>
            <li className="">
              <Link
                id="button"
                className="text-white whitespace-nowrap font-bold ml-4 px-4 py-1 hidden md:inline-block rounded-lg text-center mx-auto place-self-center transition duration-500 ease-in-out bg-gradient-to-br from-CTAColorLight via-CTAColorDark to-CTAColorLight shadow-ctaButton hover:shadow-ctaButtonHover"
                href={"/contact"}
              >
                Neem contact op!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
