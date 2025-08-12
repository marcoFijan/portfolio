import Image from "next/image";
import NextLink from "../elements/NextLink.js";
import P from "../elements/P.js";
import H2 from "../elements/H2.js";
import H3 from "../elements/H3.js";
import Container from "./Container.js";
import Divider from "../elements/Divider.js";

import FooterImg from "../../public/images/marcoPointing.png";

export default function Footer({ homePage }) {
  const footerContent = (
    <section className="w-full max-w-wrapper px-articlePaddingMobile md:px-articlePadding mx-auto flex flex-wrap justify-between gap-8 ">
      <div className="hidden md:block relative shadow-inputField rounded-full w-44 h-44 self-center">
        <Image
          className="absolute rounded-b-full w-44 bottom-0 -scale-x-100"
          src={FooterImg}
          alt={"Marco afbeelding"}
          priority={false}
        />
      </div>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <H3 text="Pagina's" darkBackground={false} />
          </li>
          <li>
            <NextLink className="hover:underline" href={"/"}>
              Hoofdpagina
            </NextLink>
          </li>
          <li>
            <NextLink className="hover:underline" href={"/projects"}>
              Projecten
            </NextLink>
          </li>
          <li>
            <NextLink className="hover:underline" href={"/contact"}>
              Contact
            </NextLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <H3 text="Projecten" darkBackground={false} />
          </li>
          <li>
            <NextLink
              className="hover:underline"
              href={"/projects/kbo-tilburg-reeshof"}
            >
              KBO Tilburg Reeshof
            </NextLink>
          </li>
          <li>
            <NextLink
              className="hover:underline"
              href={"/projects/yo-gwoty-award"}
            >
              YO Dashboard
            </NextLink>
          </li>
          <li>
            <NextLink
              className="hover:underline"
              href={"/projects/yo-dashboard"}
            >
              YO GWOTY-award
            </NextLink>
          </li>
          <li>
            <NextLink
              className="hover:underline"
              href={"/projects/standaard-aanbouw"}
            >
              Standaard Aanbouw
            </NextLink>
          </li>
          <li>
            <NextLink className="hover:underline" href={"/projects"}>
              Overige projecten
            </NextLink>
          </li>
        </ul>
      </nav>
      <div className="self-center md:w-auto md:self-auto">
        <H3 text="Contact" darkBackground={false} />
        <P>Heeft u interesse? </P>
        <P>Stuur gerust een berichtje!</P>
        <NextLink href="/contact">Neem contact op!</NextLink>
      </div>
    </section>
  );
  return (
    <>
      <footer
        className={
          homePage
            ? ""
            : "mx-4 px-8 py-16 mb- w-[100%-1rem] rounded-t-2xl border-b-0 border-color-border border-1 bg-gradient-to-bl from-color-bg-top via-color-bg-bottom to-color-bg-top"
        }
      >
        <section className="w-full flex flex-col items-center text-center justify-center">
          <H3>Neem contact op</H3>
          <div className="flex gap-4">
            <NextLink
              noBubble
              type="logo"
              href="/contact"
              title="Ga naar contactpagina"
              className="fill-white hover:fill-color-accent hover:stroke-color-accent hover:text-color-accent"
            >
              <svg
                viewBox="0 0 90 90"
                className="fill-inherit shrink-0 w-10 h-10"
              >
                <g transform="translate(-5,-956.36218)">
                  <path d="m 16,976.36217 c -0.78597,0 -1.53205,0.1651 -2.21875,0.4375 l 33.9375,29.65633 c 1.46699,1.2816 3.02954,1.2825 4.5,0 l 34,-29.65633 c -0.6867,-0.2724 -1.43278,-0.4375 -2.21875,-0.4375 l -68,0 z m -5.9375,5.1562 C 10.02467,981.79177 10,982.07807 10,982.36217 l 0,40.00003 c 0,3.3239 2.67606,6 6,6 l 68,0 c 3.32394,0 6,-2.6761 6,-6 l 0,-40.00003 c 0,-0.2841 -0.0247,-0.5704 -0.0625,-0.8438 l -33.78125,29.46883 c -3.52452,3.0741 -8.85071,3.079 -12.375,0 L 10.0625,981.51837 z" />
                </g>
              </svg>
            </NextLink>
            <NextLink
              noBubble
              type="logo"
              href="https://nl.linkedin.com/"
              title="Ga naar contactpagina"
              className="fill-white hover:fill-color-accent hover:stroke-color-accent hover:text-color-accent"
            >
              <svg
                className="fill-inherit shrink-0 w-10 h-10 p-1"
                viewBox="0 0 382 382"
              >
                <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z" />
              </svg>
            </NextLink>
            <NextLink
              noBubble
              type="logo"
              href="https://github.com/marcoFijan"
              title="Bekijk de Githubpagina"
              className="fill-white hover:fill-color-accent hover:stroke-color-accent hover:text-color-accent group"
            >
              <svg
                className="fill-inherit shrink-0 w-10 h-10 p-1"
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
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </NextLink>
          </div>
          <div className="bg-gradient-to-r from-color-border/[0] via-color-border to-color-border/[0] w-full max-w-[40rem] h-[1px] my-8"></div>
          <P className="m-0 py-2 leading-0 text-white/[0.8]">
            Designed and engineered by Marco.
          </P>
          <P className="m-0 p-0 text-white/[0.8]">
            Built with Next.js, Tailwind CSS, Three.js and Framer Motion.
          </P>
          <P className=" text-white/[0.6] italic">
            © {new Date().getFullYear()} Marco Fijan. All rights reserved.
          </P>
        </section>
      </footer>
    </>
  );
}
