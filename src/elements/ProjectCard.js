import Img from "./Img.js";
import Link from "next/link";
import H3 from "./H3.js";
import P from "./P.js";
import SvgBrowserToolbar from "./SvgBrowserToolbar.js";

export default function ProjectCard({
  imgSrc,
  imgAlt,
  projectLink,
  projectName,
  projectChapeau,
  projectGiver = "Onbekend",
  transparancy = false,
}) {
  return (
    <Link
      className={`2xl:bg-white ${transparancy ? "bg-black/30" : "bg-black"} border border-black hover:bg-black text-black rounded-2xl block group relative z-20 h-full transition-all duration-500 border border-black/10`}
      href={projectLink || "#"}
      title={`Bekijk project: ${projectName}`}
    >
      <section className="rounded-2xl transition-all duration-500 ease-in-out text-white 2xl:text-black group-hover:text-white overflow-hidden  w-full h-full px-6 sm:px-10 lg:px-20 pt-6 lg:pt-10 pb-0 relative grid grid-cols-1 gap-6">
        <article className=" flex lg:flex-nowrap flex-wrap-reverse justify-between items-start gap-x-8 relative stroke-color-bg-top">
          <section className="lg:mt-0 -mt-10 pr-10">
            <H3
              noMarginTop
              className="text-white 2xl:text-black group-hover:text-white transition-colors duration-500"
            >
              {projectName}
            </H3>
            <P className="text-white 2xl:text-black group-hover:text-white transition-colors duration-500">
              <strong className="font-bold">{projectGiver} - </strong>
              {projectChapeau}
            </P>
          </section>
          <svg
            viewBox="0 0 110 110"
            className="fill-current stroke-inherit ml-auto shrink-0 w-6 h-6 lg:w-10 lg:h-10 mt-5 rotate-135 group-hover:rotate-540 transition-all duration-500"
          >
            <path d="m84.801 44.801h-56.902l7.1016-7.1016c2.1016-2 2.1016-5.3984 0-7.3984-2-2.1016-5.3984-2.1016-7.3984 0l-16 16c-2.1016 2-2.1016 5.3984 0 7.3984l16 16c1 1 2.3984 1.5 3.6992 1.5s2.6992-0.5 3.6992-1.5c2.1016-2 2.1016-5.3984 0-7.3984l-7.1016-7.1016h56.801c2.8984 0 5.1992-2.3984 5.1992-5.1992s-2.1992-5.1992-5.0977-5.1992z" />
          </svg>
        </article>

        <div
          className={`absolute -z-1 bg-radial to-black w-[200%] h-[200%] -top-full -left-1/2 2xl:opacity-5 ${transparancy ? "opacity-0" : "opacity-50"} group-hover:opacity-100  transition-all duration-500 
            ${
              projectGiver === "YoungOnes"
                ? "from-color-yo-accent"
                : projectGiver === "KBO Tilburg Reeshof"
                  ? "from-color-kbo-accent"
                  : projectGiver === "Standaard Aanbouw"
                    ? "from-color-sa-accent"
                    : projectGiver === "Reisartikelen"
                      ? "from-color-ra-accent"
                      : "from-color-accent"
            }`}
        ></div>
        <div className="group-hover:translate-y-4 translate-y-10 transition-all duration-500 aspect-video w-4/5 mx-auto overflow-hidden rounded-t-2xl bg-black pt-1">
          <SvgBrowserToolbar />
          <Img src={imgSrc} alt={imgAlt} priority className={``} />
        </div>
      </section>
    </Link>
  );
}
