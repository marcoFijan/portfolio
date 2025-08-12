import Img from "../elements/Img.js";
import Link from "next/link";
import H3 from "../elements/H3.js";
import P from "../elements/P.js";
import SvgBrowserToolbar from "./SvgBrowserToolbar.js";

export default function ProjectSection({
  children,
  imgSrc,
  imgAlt,
  projectLink,
  projectName,
  projectChapeau,
  projectGiver = "Onbekend",
}) {
  return (
    <Link
      className="bg-gradient-to-tr from-color-bg-top/[0.2] to-color-bg-bottom/[0.3] rounded-2xl p-1 md:p-3 lg:p-5 border border-color-border block group"
      href={projectLink || "#"}
      title={`Bekijk project: ${projectName}`}
    >
      <section className="rounded-2xl border-color-border group-hover:border-white/[0.8] transition-all duration-500 ease-in-out  border overflow-hidden  w-full h-full px-4 md:px-10 lg:px-20 lg:pt-10 pb-0 relative">
        <article className=" flex lg:flex-nowrap flex-wrap-reverse justify-between items-start gap-x-8 relative text-white fill-white stroke-color-bg-top">
          <section className="lg:mt-0 -mt-10 pr-10">
            <H3 noMarginTop textWhite>
              {projectName}
            </H3>
            <P>
              <strong className="font-bold">{projectGiver} - </strong>
              {projectChapeau}
            </P>
          </section>
          <svg
            viewBox="0 0 110 110"
            className="fill-current stroke-inherit ml-auto shrink-0 w-6 h-6 lg:w-10 lg:h-10 mt-5 rotate-[135deg] group-hover:rotate-[540deg] transition-all duration-500"
          >
            <path d="m84.801 44.801h-56.902l7.1016-7.1016c2.1016-2 2.1016-5.3984 0-7.3984-2-2.1016-5.3984-2.1016-7.3984 0l-16 16c-2.1016 2-2.1016 5.3984 0 7.3984l16 16c1 1 2.3984 1.5 3.6992 1.5s2.6992-0.5 3.6992-1.5c2.1016-2 2.1016-5.3984 0-7.3984l-7.1016-7.1016h56.801c2.8984 0 5.1992-2.3984 5.1992-5.1992s-2.1992-5.1992-5.0977-5.1992z" />
          </svg>
        </article>
        <div className="absolute top-0 left-0 bg-gradient-to-bl from-color-bg-top to-color-bg-bottom"></div>
        <div
          className={`absolute -z-[1] bg-radial to-color-bg-top/[0.1] w-[200%] h-[200%] -top-full -left-1/2 opacity-0 group-hover:opacity-100 ${
            projectGiver === "YoungOnes"
              ? "from-color-yo-accent"
              : projectGiver === "KBO Tilburg Reeshof"
              ? "from-color-kbo-accent"
              : projectGiver === "Standaard Aanbouw"
              ? "from-color-sa-accent"
              : projectGiver === "Reisartikelen"
              ? "from-color-ra-accent"
              : "from-color-accent"
          } transition-all duration-500`}
        ></div>
        <div className="absolute -z-[2] bg-radial from-color-bg-bottom to-color-bg-top/[0.1] w-[200%] h-[200%] -top-full -left-1/2 transition-all duration-500"></div>
        <div className="group-hover:translate-y-4 transform-y-4 lg:translate-y-10 transition-all duration-500 aspect-video w-full lg:w-4/5 mx-auto overflow-hidden rounded-t-2xl bg-color-bg-bottom border border-color-border pt-1">
          <SvgBrowserToolbar />

          <Img
            src={imgSrc}
            alt={imgAlt}
            priority
            noBorder
            extraBorder
            className={``}
          />
        </div>
      </section>
    </Link>
  );
}
