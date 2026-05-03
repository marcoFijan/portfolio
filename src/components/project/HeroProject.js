import Container from "@/components/Container.js";
import H1 from "@/elements/H1.js";
import P from "@/elements/P.js";
import SvgDeviceOutline from "@/elements/SvgDeviceOutline.js";
import Button from "@/elements/Button.js";
import Action from "@/elements/Action.js";
import Img from "@/elements/Img.js";
import Divider from "@/elements/Divider.js";
import Wave from "@/elements/Wave";

const ProjectHero = ({
  chapeau,
  title,
  mainImage,
  introParagraphs = [],
  actions = [],
  projectDetails = [],
}) => {
  return (
    <>
      <section className="relative pb-8 overflow-x-clip">
        <Container grid>
          <div className="text-center mb-12 dark col-span-12">
            <H1 big chapeau={chapeau}>
              {title}
            </H1>
          </div>

          <div className="hidden lg:block relative w-full h-40 col-span-12">
            <div className="absolute left-0 top-0 w-full">
              <SvgDeviceOutline />
            </div>
          </div>

          <div className="w-full col-span-12 lg:col-span-10 lg:col-start-2 mx-auto relative z-10">
            <section className="mb-10 md:mb-20 relative">
              <Img
                extraBorder
                browserToolbar
                src={mainImage.src}
                alt={mainImage.alt}
                className="block object-contain object-top aspect-auto w-full shadow-xl shadow-black"
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-dvw -z-100 h-full pointer-events-none">
                <svg
                  className="w-full text-black fill-current -mb-1"
                  viewBox="0 0 1440 88"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z"
                  />
                </svg>
                <div className="bg-black  relative after:w-full after:h-1/2 after:absolute after:left-0 after:top-0 after:bg-black/15 w-full h-600" />
              </div>
            </section>
          </div>

          <article className="w-full dark col-span-12 2xl:col-span-7 mx-auto relative z-10">
            <div className="space-y-6 text-black pb-20">
              {introParagraphs.map((text, index) => (
                <P key={index} intro>
                  {text}
                </P>
              ))}

              {actions.length > 0 && (
                <Action>
                  {actions.map((action, index) => (
                    <Button
                      key={index}
                      type={action.type || "primary"}
                      href={action.href}
                    >
                      {action.label}
                    </Button>
                  ))}
                </Action>
              )}
            </div>
          </article>

          <section className="dark w-full col-span-12 2xl:col-span-4 2xl:col-start-9 z-10">
            <div className="grid grid-cols-3 gap-0">
              {projectDetails.map((detail, index) => (
                <div key={index} className="contents">
                  <P className="col-span-1 h-fit">
                    <strong className="font-bold">{detail.label}:</strong>
                  </P>
                  <P className="col-span-2 h-fit">{detail.value}</P>
                </div>
              ))}
            </div>
          </section>
        </Container>
        <Wave
          className="translate-y-[99%] absolute bottom-0 z-20"
          colorClass="text-black"
          side="left"
          startAt={60}
        />
      </section>
    </>
  );
};

export default ProjectHero;
