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
    <header className={`${montserrat.className} text-white fixed z-50 w-full`}>
      <div className="w-full h-12 bg-bgColorLight opacity-10 -z-10 absolute top-0 left-0"></div>
      <div className="w-full max-w-wrapper md:px-articlePadding mx-auto flex justify-between py-2">
        <div className="relative w-16 top-0 left-0">
          <Image
            alt="logo"
            src={LogoImg}
            width={1000}
            height={1000}
            className="h-16 absolute -top-4 left-0"
          />
        </div>
        <nav classname="flex items-center">
          <input
            className="hidden"
            type="checkbox"
            id="hamburgerMenu"
            name="hamburgerMenu"
          />
          <label
            htmlFor="hamburgerMenu"
            className="fixed flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#60667c] to-[#070709] rounded-lg shadow-md cursor-pointer bottom-8 right-4 md:hidden"
            id="hamburgerMenu"
          >
            <div className="" id="menuButtonBurger"></div>
          </label>
          <ul
            className="fixed top-0 h-screen pb-20 md:pb-0 md:h-auto md:static flex flex-col md:flex-row justify-end md:justify-between md:gap-4"
            id="navlist"
          >
            <li className="drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                className="text-bgColorLight font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-[#60667c] to-[#070709] md:from-transparent md:to-transparent bg-transparent"
                href={"/"}
              >
                Hoofdpagina
              </Link>
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                className="text-bgColorLight font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-[#60667c] to-[#070709] md:from-transparent md:to-transparent bg-transparent"
                href={"/projects"}
              >
                Projecten
              </Link>
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                className="text-bgColorLight font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-[#60667c] to-[#070709] md:from-transparent md:to-transparent bg-transparent"
                href={"https://github.com/marcoFijan"}
              >
                Githubpagina
              </Link>
            </li>
            <li className="">
              <Link
                className="text-bgColorLight whitespace-nowrap font-bold ml-4 px-4 py-1 hidden md:inline-block rounded-lg text-center mx-auto place-self-center transition duration-500 ease-in-out bg-gradient-to-br from-[#f562b5] to-[#ac2873] shadow-ctaButton hover:shadow-ctaButtonHover"
                href={"/contact"}
              >
                Neem contact op!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div id="headerBg"></div> */}
    </header>
  );
}
