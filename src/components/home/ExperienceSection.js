import Container from "@/components/Container";
import H2 from "@/elements/H2";
import H3 from "@/elements/H3";
import P from "@/elements/P";
import Li from "@/elements/Li";
import Button from "@/elements/Button";
import { EXPERIENCE } from "@/data/experience";
import Wave from "@/elements/Wave";

function ExperienceContent() {
  return (
    <>
      {EXPERIENCE.map((job) => (
        <div
          key={job.company}
          className="grid grid-cols-1 2xl:grid-cols-2 w-full gap-4"
        >
          <span className="block">
            <H2 chapeau={job.chapeau}>{job.company}</H2>
          </span>
          <div
            className={`mb-20 ${job.chapeau ? "lg:mt-10 -mt-8" : "lg:mt-4 -mt-8"}`}
          >
            <H3 noMarginTop textOrange>
              {job.role}
            </H3>
            <P className="text-black dark:text-white text-md lg:text-xl mb-3">
              {job.period}
            </P>

            <ul className="list-disc text-black dark:text-white opacity-70 ml-0">
              {job.items.map((item, i) =>
                Array.isArray(item) ? (
                  <Li key={i}>
                    {item[0]}
                    <ul className="list-disc ml-0 mb-2">
                      {item[1]?.map((sub, j) => (
                        <Li key={j} className="opacity-65">
                          <i>{sub}</i>
                        </Li>
                      ))}
                    </ul>
                  </Li>
                ) : (
                  <Li key={i}>{item}</Li>
                ),
              )}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
export default function ExperienceSection({}) {
  const baseClasses = "bg-white  relative";
  const desktopClasses = `border-white/50 border ${baseClasses}`;

  return (
    <section id="experience" className={desktopClasses}>
      <Wave className="translate-y-[-99%]" startAt={30} />
      <Container>
        <ExperienceContent />
        <Button
          className="block mx-auto"
          type="secondary"
          arrow
          centered
          href="https://www.linkedin.com/in/marco-fijan-a0b60b161/"
          icon="linkedin"
        >
          Bekijk mijn LinkedIn
        </Button>
      </Container>
      <Wave className="translate-y-[99%]" side="left" startAt={60} />
    </section>
  );
}
