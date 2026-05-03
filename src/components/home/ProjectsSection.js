import Container from "@/components/Container.js";
import Article from "@/components/Article.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Action from "@/elements/Action.js";
import Button from "@/elements/Button";
import ProjectCard from "@/elements/ProjectCard";
import { FEATURED_PROJECTS } from "@/data/featured_projects.js";

export default function ProjectsSection({ mobile }) {
  if (mobile) {
    return (
      <Container className="my-48">
        <Article id="project-intro" className="my-14 dark">
          <H2 chapeau="Mijn projecten">Uitgelichtte Projecten</H2>
        </Article>
        <section className="flex flex-col gap-12 mt-4">
          {FEATURED_PROJECTS.map((project) => (
            <>
              <section
                key={project.id}
                id={project.id}
                className="w-full mx-auto"
              >
                <ProjectCard
                  projectName={project.name}
                  projectLink={project.link}
                  imgSrc={project.img}
                  imgAlt={project.alt}
                  projectGiver={project.client}
                  projectChapeau={project.desc}
                  transparancy={true}
                />
              </section>
            </>
          ))}
        </section>
        <Action className="justify-center mt-16">
          <Button type="primary" href="/projects" centered>
            Bekijk alle projecten
          </Button>
        </Action>
      </Container>
    );
  }

  return (
    <>
      <section
        id="project-intro"
        className="h-screen flex items-start justify-center text-center dark pt-30"
      >
        <Container>
          <H2 chapeau="Mijn projecten">Uitgelichtte Projecten</H2>
        </Container>
      </section>

      {FEATURED_PROJECTS.map((project, index) => {
        const isRightAligned = index % 2 === 0;

        return (
          <section
            key={project.id}
            id={project.id}
            className={`h-screen dark flex text-center!`}
          >
            <Container className="flex flex-col items-center justify-start gap-8">
              <H3
                textWhite
                noMarginTop
                chapeau={project.name}
                className="text-shadow-lg"
              >
                {project.client}
              </H3>

              <P
                intro
                className={`text-white/80 max-w-120 pb-8 mx-auto text-shadow-md`}
              >
                {project.desc}
              </P>

              <Button
                type="primary"
                href={project.link}
                alignCenter
                centered
                className="mx-auto"
              >
                Bekijk het project
              </Button>
            </Container>
          </section>
        );
      })}

      <section id="project-other" className="h-screen flex text-center dark">
        <Container className="flex flex-col items-center justify-start gap-8">
          <H3
            textWhite
            noMarginTop
            chapeau="Andere projecten; Unity-engine, Blender, pure CSS"
            className="text-shadow-lg"
          >
            Bekijk alle projecten
          </H3>
          <Button
            type="primary"
            href="/projects"
            alignCenter
            centered
            className="mx-auto"
          >
            Alle projecten
          </Button>
        </Container>
      </section>
    </>
  );
}
