import { useState, useEffect } from "react";
import NextLink from "@/elements/NextLink";
import Link from "next/link";
import Container from "../sections/Container.js";
import LogoImg from "../../public/images/Logo.svg";
import IconHome from "../../public/images/icons/iconHome.svg";
import Logo from "@/elements/Logo.js";
import Divider from "@/elements/Divider.js";

export default function Header({ home = false }) {
  const [screenSize, setScreenSize] = useState(0);
  const [mobile, setMobile] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimension = () => {
        setScreenSize(window.innerWidth);
      };
      window.addEventListener("resize", updateDimension);

      if (window.innerWidth <= 1200) {
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
        svg: '<svg viewBox="0 0 100 100" className="fill-white shrink-0 w-8 h-8"><g><path d="M97.7,44.8l-45.5-37c-1.3-1-3.1-1-4.4,0l-45.5,37c-1.1,0.9-1.6,2.5-1.1,3.9C1.7,50.1,3,51,4.5,51h12.8v38.5   c0,1.9,1.6,3.5,3.5,3.5H37c1.9,0,3.5-1.6,3.5-3.5V68h19v21.5c0,1.9,1.6,3.5,3.5,3.5h16.2c1.9,0,3.5-1.6,3.5-3.5V51h12.8   c1.5,0,2.8-0.9,3.3-2.3C99.3,47.3,98.9,45.7,97.7,44.8z" /></g></svg>',
      },
      {
        name: "Projecten",
        url: "/projects",
        svg: '<svg viewBox="0 0 100 100" className="fill-white shrink-0 w-4 h-4"><path d="M26.72,33.66H13.44A39.7,39.7,0,0,0,10,47.89H25.05A75.7,75.7,0,0,1,26.72,33.66Z" /><path d="M47.89,33.66H31.12a70.09,70.09,0,0,0-1.86,14.23H47.89Z" /><path d="M31.12,66.34H47.89V52.11H29.26A70.09,70.09,0,0,0,31.12,66.34Z" /><path d="M47.89,29.44V10.16C41.36,11.5,35.61,19,32.28,29.44Z" /><path d="M47.89,70.56H32.28C35.61,81,41.36,88.5,47.89,89.84Z" /><path d="M68.88,33.66H52.11V47.89H70.74A70.09,70.09,0,0,0,68.88,33.66Z" /><path d="M26.72,66.34a75.7,75.7,0,0,1-1.67-14.23H10a39.7,39.7,0,0,0,3.44,14.23Z" /><path d="M52.11,10.16V29.44H67.72C64.39,19,58.64,11.5,52.11,10.16Z" /><path d="M75,52.11a75.7,75.7,0,0,1-1.67,14.23H86.56A39.7,39.7,0,0,0,90,52.11Z" /><path d="M15.64,70.56a40.22,40.22,0,0,0,21.2,17.26c-3.85-4.15-7-10.11-9.05-17.26Z" /><path d="M72.21,70.56c-2.07,7.15-5.2,13.11-9,17.26a40.22,40.22,0,0,0,21.2-17.26Z" /><path d="M36.84,12.18a40.22,40.22,0,0,0-21.2,17.26H27.79C29.86,22.29,33,16.33,36.84,12.18Z" /><path d="M84.36,29.44a40.22,40.22,0,0,0-21.2-17.26c3.85,4.15,7,10.11,9,17.26Z" /><path d="M70.74,52.11H52.11V66.34H68.88A70.09,70.09,0,0,0,70.74,52.11Z" /><path d="M67.72,70.56H52.11V89.84C58.64,88.5,64.39,81,67.72,70.56Z" /><path d="M75,47.89H90a39.7,39.7,0,0,0-3.44-14.23H73.28A75.7,75.7,0,0,1,75,47.89Z" /></svg>',
      },
      // {
      //   name: "Over mij",
      //   url: "/",
      //   svg: '<svg viewBox="0 0 100 100" className="fill-white shrink-0 w-3 h-3"><path d="m96.469 99h-92.934c-1.2695 0-2.2969-1.0273-2.2969-2.2969 0-9.9023 3.0273-18.098 8.0234-24.578 5.5625-7.2109 13.551-12.234 22.488-15.074 0.78125-0.24609 1.5977-0.054687 2.1797 0.44531l0.003906-0.003906c2.0234 1.7344 4.4922 3.1367 7.2656 4.1016 2.6797 0.93359 5.6562 1.4492 8.8008 1.4492 3.1484 0 6.125-0.51562 8.8008-1.4492 2.7734-0.96484 5.2422-2.3672 7.2656-4.1016 0.66406-0.56641 1.5586-0.69141 2.3203-0.39453 8.8828 2.8516 16.816 7.8555 22.348 15.031 5 6.4766 8.0234 14.672 8.0234 24.578 0 1.2695-1.0273 2.2969-2.2969 2.2969zm-27.809-52.949c-4.7773 4.7773-11.375 7.7305-18.66 7.7305s-13.883-2.9531-18.66-7.7305c-4.7773-4.7773-7.7266-11.375-7.7266-18.66s2.9531-13.883 7.7266-18.66c4.7773-4.7773 11.375-7.7305 18.66-7.7305s13.883 2.9531 18.66 7.7305c4.7773 4.7773 7.7305 11.375 7.7305 18.66s-2.9531 13.883-7.7305 18.66z"></path></svg>',
      // },
      {
        name: "Contact",
        url: "/contact",
        svg: '<svg viewBox="0 0 90 90" className="fill-white shrink-0 w-5 h-5"><g transform="translate(0,-952.36218)"><path d="m 16,976.36217 c -0.78597,0 -1.53205,0.1651 -2.21875,0.4375 l 33.9375,29.65633 c 1.46699,1.2816 3.02954,1.2825 4.5,0 l 34,-29.65633 c -0.6867,-0.2724 -1.43278,-0.4375 -2.21875,-0.4375 l -68,0 z m -5.9375,5.1562 C 10.02467,981.79177 10,982.07807 10,982.36217 l 0,40.00003 c 0,3.3239 2.67606,6 6,6 l 68,0 c 3.32394,0 6,-2.6761 6,-6 l 0,-40.00003 c 0,-0.2841 -0.0247,-0.5704 -0.0625,-0.8438 l -33.78125,29.46883 c -3.52452,3.0741 -8.85071,3.079 -12.375,0 L 10.0625,981.51837 z" /></g></svg>',
      },
    ],
  };

  return (
    <header className={`${home ? "absolute" : "fixed mb-12"} w-full mt-4 z-40`}>
      <Container
        className={
          "box-border grid grid-cols-3 justify-between items-center z-10 left-0 top-0 w-screen"
        }
      >
        <div className={"relative z-50 max-w-20"}>
          <NextLink
            noBubble
            type="logo"
            href="/"
            alt="Ga naar de homepage"
            className="group w-16 h-16 flex items-center justify-center mb-8"
            onClick={() => setIsMenuOpen(false)}
          >
            <Logo />
          </NextLink>
        </div>
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
                  className={`h-hamburgerBar ease absolute w-full h-1 transform rounded-full transition duration-300 ${
                    isMenuOpen
                      ? "bg-white rotate-45"
                      : "bg-white top-0 group-hover:-translate-y-0.5"
                  }`}
                />
                <div
                  className={`h-hamburgerBar bg-white ease absolute h-1 w-full transform rounded-full transition duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`h-hamburgerBar ease absolute w-full h-1 transform rounded-full transition duration-300 ${
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
              <div className="overflow-y-auto h-screen overflow-x-hidden max-w-screen bg-gradient-to-bl from-color-bg-top to-color-bg-bottom px-wrapperMobile pt-8 pb-16 box-border">
                <Container
                  className={
                    "flex flex-col items-start justify-between w-full overflow-y-auto overflow-x-hidden h-full"
                  }
                >
                  {/* Logo */}
                  <NextLink
                    noBubble
                    href="/"
                    alt="Ga naar de homepage"
                    className="group w-40 h-40 flex items-center justify-center mb-8"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Logo />
                  </NextLink>

                  {/* Navigation links */}
                  <nav className="w-full top-0 left-0 z-50 ">
                    <ul>
                      {links.links.map((link) => (
                        <li key={link.name} className="w-full">
                          <NextLink
                            noBubble
                            href={link.url}
                            type="nav"
                            title={"Ga naar " + link.name}
                            className={
                              "text-left py-5 border-b-1 transition-all px-3 group w-full"
                            }
                          >
                            <span
                              className="w-8 h-8 mr-4 object-contain fill-inherit stroke-inherit duration-300 group-hover:scale-125"
                              dangerouslySetInnerHTML={{ __html: link.svg }}
                            />
                            <span className="text-2xl group-hover:text-color-accent transition-all duration-300">
                              {link.name}
                            </span>
                          </NextLink>
                          <Divider noMargin />
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Container>
              </div>
            </div>
          </div>
        ) : (
          <>
            <nav className="w-max justify-self-center hidden lg:block relative z-50 desktop">
              <ul className="backdrop-blur-[15px] bg-color-bg-top/[0.5] gap-4 rounded-2xl justify-between items-center flex relative transition-all duration-300 border border-color-border">
                {links.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white py-4 px-4 rounded-2xl cursor-pointer transition-all duration-500"
                  >
                    <NextLink
                      href={link.url}
                      title={"Ga naar " + link.name}
                      noBubble
                    >
                      <span
                        className="w-6 h-6 mr-1 object-contain fill-white stroke-white text-shadow-sm"
                        dangerouslySetInnerHTML={{ __html: link.svg }}
                      />
                      <span className="text-shadow-lg">{link.name}</span>
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex gap-2 justify-self-end relative z-50">
              <li>
                <NextLink
                  href="https://www.linkedin.com/in/marco-fijan-a0b60b161/"
                  className={"group"}
                  type={"navSocial"}
                  arrow
                  noBubble
                >
                  <svg
                    className="fill-inherit shrink-0 w-7 h-7 p-1"
                    viewBox="0 0 382 382"
                  >
                    <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z" />
                  </svg>
                  <span>LinkedIn</span>
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="https://github.com/marcoFijan"
                  className={"group"}
                  type={"navSocial"}
                  arrow
                  noBubble
                >
                  <svg
                    className="fill-inherit shrink-0 w-7 h-7 p-1"
                    viewBox="0 0 20 20"
                  >
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        className="fill-white group-hover:fill-color-accent ease-in-out duration-500"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
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
