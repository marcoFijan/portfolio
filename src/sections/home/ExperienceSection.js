import Container from "@/sections/Container";
import H2 from "@/elements/H2";
import H3 from "@/elements/H3";
import P from "@/elements/P";
import Li from "@/elements/Li";
import Divider from "@/elements/Divider";
import Footer from "@/sections/Footer";
import { EXPERIENCE } from "@/data/experience";

function ExperienceContent() {
  return (
    <>
      {EXPERIENCE.map((job) => (
        <div
          key={job.company}
          className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4"
        >
          <H2>{job.company}</H2>
          <div className="lg:mt-4 mt-[-50px] mb-20">
            <H3 noMarginTop>{job.role}</H3>
            <P className="text-white text-md lg:text-xl mb-3">{job.period}</P>

            <ul className="list-disc text-white opacity-70 ml-4">
              {job.items.map((item, i) =>
                Array.isArray(item) ? (
                  <Li key={i}>
                    {item[0]}
                    {/* Wrap the nested list in a <ul> to create valid HTML */}
                    <ul className="list-disc ml-4 mt-2">
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
export default function ExperienceSection({ mobile }) {
  const baseClasses =
    "mx-4 pt-10 box-border rounded-t-2xl border-b-0 bg-gradient-to-bl from-color-bg-top via-color-bg-bottom to-color-bg-top";
  const mobileClasses = `w-[100%-1rem] border-white/[0.5] border-1 ${baseClasses}`;
  const desktopClasses = `border-white/50 border ${baseClasses}`;

  return (
    <section
      id="experience"
      className={mobile ? mobileClasses : desktopClasses}
    >
      <Container>
        {!mobile && <H2 chapeau="Ervaring" />}
        <ExperienceContent />
        <Divider />
        <Footer homePage />
      </Container>
    </section>
  );
}
