import PageTemplate from "../pageTemplate";
import Container from "@/components/Container";
import ProjectCard from "@/elements/ProjectCard";
import { PROJECTS } from "@/data/projects/projects"
import H1 from "@/elements/H1";
import H2 from "@/elements/H2";
import P from "@/elements/P";
import Wave from "@/elements/Wave";

export default function Projects() {
  // Helper to define card background variants based on index
  const getVariantClasses = (index) => {
    const variants = [
      "bg-black text-white",      // Variant 0
      "bg-blue text-white",       // Variant 1 (Assuming 'blue' is in your tailwind config)
      "bg-green text-white"       // Variant 2 (Assuming 'green' is in your tailwind config)
    ];
    return variants[index % 3];
  };

  return (
    <PageTemplate title="Marco Fijan - Projecten">
      <Container article className="dark">
        <div className="text-center">
          <H1
            big
            className="text-center"
            chapeau={"Overzicht van projecten"}
          >
            Mijn projecten
          </H1>
        </div>
        <P className={'text-center mx-auto'} intro>
          Welkom op mijn portfolio. Hier vind je een overzicht van al mijn projecten die ik persoonlijk heb ontwikkeld. Projecten zijn variërend van simpele onepagers tot op maat gemaakte websites met een CMS.
        </P>
      </Container>

      <section className="relative bg-white mt-24 lg:mt-36 2xl:mt-48 py-48">
        <Wave className="absolute top-0 -translate-y-[99%]" />

        <Container className="grid grid-cols-12 gap-6">
          <article className="col-span-12 lg:col-span-10 lg:col-start-2 mb-8 lg:mb-16">
            <H2>Expertise & Tech-Stack</H2>
            <P>Elk project heeft verschillende eisen. Sommige complexe ideeën kunnen eenvoudig met alleen semantische HTML, CSS en Javascript worden gerealiseerd. </P>
            <P>Voor schaalbare en interactieve front-ends maak ik gebruik van frameworks zoals React, Next.js en Svelte. Het design breng ik responsive en gestructureerd tot leven met behulp van Tailwind CSS of SCSS. Wanneer de focus ligt op contentbeheer en flexibiliteit voor de eindgebruiker, bouw ik robuuste oplossingen binnen WordPress.</P>
            <P>Elk project vereist een eigen aanpak. Ontdek hieronder de specifieke cases, de technische uitdagingen en de uiteindelijke resultaten.</P>
          </article>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-6">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className={`sticky w-full rounded-3xl transition-all duration-300 ${getVariantClasses(index)}`}
                style={{
                  top: `calc(4rem + ${index * 1.5}rem)`,
                  zIndex: index + 1
                }}
              >
                <ProjectCard
                  projectName={project.projectName}
                  projectLink={project.projectLink}
                  imgSrc={project.imgSrc}
                  imgAlt={project.imgAlt}
                  projectGiver={project.projectGiver}
                  projectChapeau={project.projectChapeau}
                  variant={index % 3}
                />
              </div>
            ))}
          </div>

        </Container>
      </section>
    </PageTemplate>
  );
}