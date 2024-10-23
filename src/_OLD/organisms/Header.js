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
    // <header
    //   className={`${montserrat.className} text-colorBgDark fixed z-50 py-2 w-full`}
    // >
    //   {/* <div className="w-full h-16 bg-bgColorDark border-b-bgColorLight border-b-1 -z-10 absolute top-0 left-0"></div> */}
    //   <div className="w-full max-w-headerWrapper md:px-articlePadding mx-auto flex justify-between py-2 items-center">
    //     <svg
    //       width="438"
    //       height="300"
    //       viewBox="0 0 438 300"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="fill-colorBgDark h-16 max-h-10 w-16"
    //     >
    //       <rect x="337" y="50" width="101" height="250" rx="50.5" />
    //       <path
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //         d="M269.5 0C213.443 0 168 45.4431 168 101.5V105.5V134V249.5C168 277.39 190.61 300 218.5 300C246.39 300 269 277.39 269 249.5V134V121.5C269 77.1932 297.389 39.517 336.969 25.6691C319.036 9.70156 295.401 0 269.5 0Z"
    //       />
    //       <path
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //         d="M101.5 0C45.4431 0 0 45.4431 0 101.5V142.5V184V249.5C0 277.39 22.6096 300 50.5 300C78.3904 300 101 277.39 101 249.5V184V142.5V121.5C101 77.1932 129.389 39.517 168.969 25.6691C151.036 9.70156 127.401 0 101.5 0Z"
    //       />
    //     </svg>
    //     <nav
    //       id="nav"
    //       className="flex transition-all items-center border-1 rounded-md p-3 border-[#ff6f2710]"
    //     >
    //       <input
    //         className="hidden"
    //         type="checkbox"
    //         id="hamburgerMenu"
    //         name="hamburgerMenu"
    //       />
    //       <label
    //         htmlFor="hamburgerMenu"
    //         className="fixed flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight rounded-lg cursor-pointer bottom-8 right-4 md:hidden"
    //         id="hamburgerMenu"
    //       >
    //         <div className="" id="menuButtonBurger"></div>
    //       </label>
    //       <ul
    //         className="fixed bottom-20 h-screen md:pb-0 md:h-auto md:static flex flex-col md:flex-row justify-end md:justify-between md:gap-4"
    //         id="navlist"
    //       >
    //         <li className="transition">
    //           <Link
    //             id="button"
    //             className="text-white font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight border-y-white box-border border-y-1 md:border-y-0 md:border-y-transparent md:from-transparent md:via-transparent md:to-transparent bg-transparent"
    //             href={"/"}
    //           >
    //             Hoofdpagina
    //           </Link>
    //         </li>
    //         <li className="transition">
    //           <Link
    //             id="button"
    //             className="text-white font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight border-y-white box-border border-y-1 md:border-y-0 md:border-y-transparent md:from-transparent md:via-transparent md:to-transparent bg-transparent"
    //             href={"/projects"}
    //           >
    //             Projecten
    //           </Link>
    //         </li>
    //         <li className="transition">
    //           <Link
    //             id="button"
    //             className="text-white font-bold px-4 py-1 inline-block text-center place-self-center hover:underline transition duration-500 ease-in-out bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight border-y-white box-border border-y-1 md:border-y-0 md:border-y-transparent md:from-transparent md:via-transparent md:to-transparent bg-transparent"
    //             href={"https://github.com/marcoFijan"}
    //           >
    //             Githubpagina
    //           </Link>
    //         </li>
    //         <li className="">
    //           <Link
    //             id="button"
    //             className="text-white whitespace-nowrap font-bold ml-4 px-4 py-1 hidden md:inline-block text-center mx-auto place-self-center transition duration-500 ease-in-out bg-accentColor"
    //             href={"/contact"}
    //           >
    //             Neem contact op!
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
    <header
      className={
        "absolute box-border flex justify-between z-10 p-10 left-0 top-0"
      }
    >
      <div className={""}>Logo</div>
      <nav>
        <ul id={"navigationlist"}>
          <li>Projecten</li>
          <li>Over mij</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
}
