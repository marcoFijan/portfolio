import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/images/Logo.svg";

export default function Header() {
  return (
    <header className="text-white fixed z-50 w-full ">
      <div className="w-full max-w-wrapper px-articlePadding mx-auto flex justify-between py-2">
        <div className="relative w-36 top-0 left-0">
          <Image
            alt="logo"
            src={LogoImg}
            width={1000}
            height={1000}
            className="h-36 absolute -top-6 left-0"
          />
        </div>
        <nav classname="flex items-center">
          <ul className="flex justify-between gap-4">
            <li className="drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                className="text-bgColorLight font-bold px-4 py-1 inline-block text-center place-self-center hover:underline"
                href={"/"}
              >
                Hoofdpagina
              </Link>
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                className="text-bgColorLight font-bold px-4 py-1 inline-block text-center place-self-center hover:underline"
                href={"/projects"}
              >
                Projecten
              </Link>
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_#12131a]">
              <Link
                className="text-bgColorLight font-bold px-4 py-1 inline-block text-center place-self-center hover:underline"
                href={"https://github.com/marcoFijan"}
              >
                Githubpagina
              </Link>
            </li>
            <li className="">
              <Link
                className="text-bgColorLight whitespace-nowrap font-bold ml-4 px-4 py-1 inline-block rounded-lg text-center mx-auto place-self-center transition duration-500 ease-in-out bg-gradient-to-br from-[#f562b5] to-[#ac2873] shadow-ctaButton hover:shadow-ctaButtonHover"
                href={"/contact"}
              >
                <p className={"drop-shadow-[0_1.2px_1.2px_#12131a]"}>
                  Neem contact op!
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div id="headerBg"></div> */}
    </header>
  );
}
