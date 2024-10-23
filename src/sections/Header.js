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
      className={
        "absolute box-border flex justify-between z-10 p-10 left-0 top-0 w-[calc(100vw_-_(100vw_-_100%))]"
      }
    >
      <div className={""}>Logo</div>
      <nav>
        <ul className="backdrop-blur-[15px] bg-zinc-100/[0.05] rounded-3xl justify-between items-center p-2 flex relative">
          <li className="text-white py-1  px-3  rounded-full `hover:bg-[radial-gradient(circle,rgba(242,242,242,0.1)0%,rgba(242,242,242,0)100%)] cursor-pointer`">
            Projecten
          </li>
          <li className="text-white py-1  px-3  rounded-full `hover:bg-[radial-gradient(circle,rgba(242,242,242,0.1)0%,rgba(242,242,242,0)100%)] cursor-pointer`">
            Over mij
          </li>
          <li className="text-white py-1  px-3  rounded-full `hover:bg-[radial-gradient(circle,rgba(242,242,242,0.1)0%,rgba(242,242,242,0)100%)] cursor-pointer`">
            Contact
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
}
