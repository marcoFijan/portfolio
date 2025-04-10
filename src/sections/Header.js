import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
import NextLink from "@/elements/NextLink";
import Container from "../sections/Container.js";
import LogoImg from "../../public/images/Logo.svg";
import IconHome from "../../public/images/icons/iconHome.svg";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Header() {
  const [screenSize, setScreenSize] = useState(0);
  const [mobile, setMobile] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimension = () => {
        setScreenSize(window.innerWidth);
      };
      window.addEventListener("resize", updateDimension);

      if (window.innerWidth <= 832) {
        setMobile(true);
      } else {
        setMobile(false);
      }

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, [screenSize]);

  useEffect(() => {
    if (mobile)
      document.documentElement.classList.toggle(
        "overflow-y-hidden",
        isMenuOpen
      );
  }, [isMenuOpen, mobile]);

  const links = {
    links: [
      {
        name: "Home",
        url: "/",
        svg: '<svg viewBox="0 0 100 100" className="fill-white shrink-0 w-4 h-4"><g><path d="M97.7,44.8l-45.5-37c-1.3-1-3.1-1-4.4,0l-45.5,37c-1.1,0.9-1.6,2.5-1.1,3.9C1.7,50.1,3,51,4.5,51h12.8v38.5   c0,1.9,1.6,3.5,3.5,3.5H37c1.9,0,3.5-1.6,3.5-3.5V68h19v21.5c0,1.9,1.6,3.5,3.5,3.5h16.2c1.9,0,3.5-1.6,3.5-3.5V51h12.8   c1.5,0,2.8-0.9,3.3-2.3C99.3,47.3,98.9,45.7,97.7,44.8z" /></g></svg>',
      },
      {
        name: "Projecten",
        url: "/",
        svg: '<svg viewBox="0 0 100 100" className="fill-white shrink-0 w-4 h-4"><path d="M26.72,33.66H13.44A39.7,39.7,0,0,0,10,47.89H25.05A75.7,75.7,0,0,1,26.72,33.66Z" /><path d="M47.89,33.66H31.12a70.09,70.09,0,0,0-1.86,14.23H47.89Z" /><path d="M31.12,66.34H47.89V52.11H29.26A70.09,70.09,0,0,0,31.12,66.34Z" /><path d="M47.89,29.44V10.16C41.36,11.5,35.61,19,32.28,29.44Z" /><path d="M47.89,70.56H32.28C35.61,81,41.36,88.5,47.89,89.84Z" /><path d="M68.88,33.66H52.11V47.89H70.74A70.09,70.09,0,0,0,68.88,33.66Z" /><path d="M26.72,66.34a75.7,75.7,0,0,1-1.67-14.23H10a39.7,39.7,0,0,0,3.44,14.23Z" /><path d="M52.11,10.16V29.44H67.72C64.39,19,58.64,11.5,52.11,10.16Z" /><path d="M75,52.11a75.7,75.7,0,0,1-1.67,14.23H86.56A39.7,39.7,0,0,0,90,52.11Z" /><path d="M15.64,70.56a40.22,40.22,0,0,0,21.2,17.26c-3.85-4.15-7-10.11-9.05-17.26Z" /><path d="M72.21,70.56c-2.07,7.15-5.2,13.11-9,17.26a40.22,40.22,0,0,0,21.2-17.26Z" /><path d="M36.84,12.18a40.22,40.22,0,0,0-21.2,17.26H27.79C29.86,22.29,33,16.33,36.84,12.18Z" /><path d="M84.36,29.44a40.22,40.22,0,0,0-21.2-17.26c3.85,4.15,7,10.11,9,17.26Z" /><path d="M70.74,52.11H52.11V66.34H68.88A70.09,70.09,0,0,0,70.74,52.11Z" /><path d="M67.72,70.56H52.11V89.84C58.64,88.5,64.39,81,67.72,70.56Z" /><path d="M75,47.89H90a39.7,39.7,0,0,0-3.44-14.23H73.28A75.7,75.7,0,0,1,75,47.89Z" /></svg>',
      },
      {
        name: "Over mij",
        url: "/",
        svg: '<svg viewBox="0 0 120 100" className="fill-white shrink-0 w-3 h-3"><path d="m96.469 99h-92.934c-1.2695 0-2.2969-1.0273-2.2969-2.2969 0-9.9023 3.0273-18.098 8.0234-24.578 5.5625-7.2109 13.551-12.234 22.488-15.074 0.78125-0.24609 1.5977-0.054687 2.1797 0.44531l0.003906-0.003906c2.0234 1.7344 4.4922 3.1367 7.2656 4.1016 2.6797 0.93359 5.6562 1.4492 8.8008 1.4492 3.1484 0 6.125-0.51562 8.8008-1.4492 2.7734-0.96484 5.2422-2.3672 7.2656-4.1016 0.66406-0.56641 1.5586-0.69141 2.3203-0.39453 8.8828 2.8516 16.816 7.8555 22.348 15.031 5 6.4766 8.0234 14.672 8.0234 24.578 0 1.2695-1.0273 2.2969-2.2969 2.2969zm-27.809-52.949c-4.7773 4.7773-11.375 7.7305-18.66 7.7305s-13.883-2.9531-18.66-7.7305c-4.7773-4.7773-7.7266-11.375-7.7266-18.66s2.9531-13.883 7.7266-18.66c4.7773-4.7773 11.375-7.7305 18.66-7.7305s13.883 2.9531 18.66 7.7305c4.7773 4.7773 7.7305 11.375 7.7305 18.66s-2.9531 13.883-7.7305 18.66z"></path></svg>',
      },
      {
        name: "Contact",
        url: "/",
        svg: '<svg viewBox="0 0 90 90" className="fill-white shrink-0 w-5 h-5"><g transform="translate(0,-952.36218)"><path d="m 16,976.36217 c -0.78597,0 -1.53205,0.1651 -2.21875,0.4375 l 33.9375,29.65633 c 1.46699,1.2816 3.02954,1.2825 4.5,0 l 34,-29.65633 c -0.6867,-0.2724 -1.43278,-0.4375 -2.21875,-0.4375 l -68,0 z m -5.9375,5.1562 C 10.02467,981.79177 10,982.07807 10,982.36217 l 0,40.00003 c 0,3.3239 2.67606,6 6,6 l 68,0 c 3.32394,0 6,-2.6761 6,-6 l 0,-40.00003 c 0,-0.2841 -0.0247,-0.5704 -0.0625,-0.8438 l -33.78125,29.46883 c -3.52452,3.0741 -8.85071,3.079 -12.375,0 L 10.0625,981.51837 z" /></g></svg>',
      },
    ],
  };

  return (
    <header className="absolute w-full mt-4">
      <Container
        className={
          "box-border grid grid-cols-3 justify-between items-center z-10 left-0 top-0 w-screen"
        }
      >
        <div className={"relative z-50"}>Logo</div>
        {mobile ? (
          <div className="relative flex items-center justify-end gap-8 z-50">
            {/* Hamburger menu button */}
            <button
              className={`group mr-wrapper-mobile h-hamburger w-hamburger fixed right-0 z-50 cursor-pointer rounded-full p-3 transition duration-300 mr-hamburger ${
                isMenuOpen ? "bg-transparent" : "bg-c-primary"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open navigation menu"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <div
                  className={`h-hamburgerBar ease absolute w-full transform rounded-full transition duration-300 ${
                    isMenuOpen
                      ? "bg-white rotate-45"
                      : "bg-white top-0 group-hover:-translate-y-0.5"
                  }`}
                />
                <div
                  className={`h-hamburgerBar bg-white ease absolute w-full transform rounded-full transition duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`h-hamburgerBar ease absolute w-full transform rounded-full transition duration-300 ${
                    isMenuOpen
                      ? "bg-white -rotate-45"
                      : "bg-white bottom-0 group-hover:translate-y-0.5"
                  }`}
                />
              </div>
            </button>

            {/* ### Navigation menu ### */}
            <div
              className={`bg-c-text text-c-primary fixed top-0 left-0 z-40 h-screen w-screen transition-all duration-300 ${
                isMenuOpen && mobile
                  ? "overflow-y-auto overflow-x-hidden max-w-screen max-h-full"
                  : "max-h-0 overflow-hidden pointer-events-none"
              }`}
            >
              <div className="flex h-full min-h-min w-full flex-col justify-end  overflow-y-auto overflow-x-hidden max-w-screen bg-colorBg px-wrapper py-8">
                {/* Logo */}
                <NextLink
                  href="/"
                  className="group mb-auto w-min"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="h-40 w-40 bg-red-600 mb-8"></div>
                </NextLink>

                {/* Navigation links */}
                <nav className="w-full h-screen top-0 left-0 z-50 lg:hidden">
                  <ul>
                    {links.links.map((link) => (
                      <li key={link.name} className="">
                        <NextLink
                          href={link.url}
                          title={"Ga naar " + link.name}
                          className={
                            "text-left py-4 border-b-1 border-gray-400 hover:translate-x-4 transition-all px-3 group"
                          }
                        >
                          <span
                            className="w-8 h-8 mr-4 object-contain fill-white stroke-white"
                            dangerouslySetInnerHTML={{ __html: link.svg }}
                          />
                          <span className="text-2xl">{link.name}</span>
                          <svg
                            viewBox="0 0 110 110"
                            className="fill-white shrink-0 w-6 h-6 rotate-[135deg] group-hover:rotate-[540deg] transition-all duration-500 ml-auto"
                          >
                            <path d="m84.801 44.801h-56.902l7.1016-7.1016c2.1016-2 2.1016-5.3984 0-7.3984-2-2.1016-5.3984-2.1016-7.3984 0l-16 16c-2.1016 2-2.1016 5.3984 0 7.3984l16 16c1 1 2.3984 1.5 3.6992 1.5s2.6992-0.5 3.6992-1.5c2.1016-2 2.1016-5.3984 0-7.3984l-7.1016-7.1016h56.801c2.8984 0 5.1992-2.3984 5.1992-5.1992s-2.1992-5.1992-5.0977-5.1992z" />
                          </svg>
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </nav>
                <NextLink
                  href={`mailto:marco.fijan.net`}
                  className="text-c-primary font-title mt-5 text-4xl whitespace-break-spaces underline"
                >
                  marco.fijan.net
                </NextLink>
              </div>
            </div>
          </div>
        ) : (
          <>
            <nav className="w-max justify-self-center hidden lg:block relative z-50">
              <ul className="backdrop-blur-[15px] bg-zinc-100/[0.05] rounded-3xl justify-between items-center p-2 flex relative border-white border-opacity-30 border hover:border-yellow-600 transition-all duration-300">
                {links.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white py-1 px-3 rounded-full cursor-pointer transition-all duration-500"
                  >
                    <NextLink href={link.url} title={"Ga naar " + link.name}>
                      <span
                        className="w-4 h-4 object-contain fill-white stroke-white"
                        dangerouslySetInnerHTML={{ __html: link.svg }}
                      />
                      <span>{link.name}</span>
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex gap-2 justify-self-end relative z-50">
              <li>
                <NextLink href="/" className={"group"} type={"secondary"} arrow>
                  <span>LinkedIn</span>
                </NextLink>
              </li>
              <li>
                <NextLink href="/" className={"group"} type={"secondary"} arrow>
                  <span>Github</span>
                </NextLink>
              </li>
            </ul>
          </>
        )}
      </Container>
    </header>
  );
}
