import Container from "@/components/Container.js";
import Article from "@/components/Article.js";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js"; // Imported the P tag
import Action from "@/elements/Action.js";
import Button from "@/elements/Button";
import ProjectSection from "@/elements/Project";
import { PROJECTS } from "@/data/projects.js";

export default function ProjectsSection({ mobile }) {
  if (mobile) {
    return (
      <Article id="project-intro" className="my-14">
        <H1 chapeau="Mijn projecten">Uitgelichtte Projecten</H1>
        <section className="flex flex-col gap-6 mt-4">
          {PROJECTS.map((project) => (
            <section
              key={project.id}
              id={project.id}
              className="w-full mx-auto xl:max-w-[80%]"
            >
              <ProjectSection
                projectName={project.name}
                projectLink={project.link}
                imgSrc={project.img}
                imgAlt={project.alt}
                projectGiver={project.client}
                projectChapeau={project.desc}
              />
            </section>
          ))}
        </section>
        <Action className="justify-center">
          <Button type="primary" href="/projects">
            Bekijk alle projecten
          </Button>
        </Action>
      </Article>
    );
  }

  return (
    <>
      <section
        id="project-intro"
        className="h-screen flex items-start justify-center text-center dark"
      >
        <Container>
          <H2>Uitgelichtte Projecten</H2>
        </Container>
      </section>

      {/* Map over the unified PROJECTS data for Desktop */}
      {PROJECTS.map((project, index) => {
        // Alternate alignment based on odd/even indexes to match your original layout
        const isRightAligned = index % 2 === 0;

        return (
          <section
            key={project.id}
            id={project.id}
            className={`h-screen dark flex ${isRightAligned ? "text-right" : ""} `}
          >
            <Container>
              <H3 textWhite noMarginTop chapeau={project.name}>
                {project.client}
              </H3>

              <P
                className={`text-white/80 mb-8 ${isRightAligned ? "ml-auto" : ""}`}
              >
                {project.desc}
              </P>

              <Button
                type="primary"
                href={project.link}
                alignRight={isRightAligned}
                className={!isRightAligned ? "flex justify-end w-full" : ""}
              >
                Bekijk het project
              </Button>
            </Container>
          </section>
        );
      })}

      {/* Keep the static "Other projects" outro section */}
      <section id="project-other" className="h-screen flex text-center dark">
        <Container>
          <H3
            textWhite
            noMarginTop
            chapeau="Andere projecten; Unity-engine, Blender, pure CSS"
          >
            Bekijk alle projecten
          </H3>
          <Button type="primary" href="/projects" alignCenter>
            Alle projecten
          </Button>
        </Container>
      </section>
    </>
  );
}
