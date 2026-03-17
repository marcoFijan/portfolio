import Container from "@/components/Container";
import H2 from "@/elements/H2";
import H3 from "@/elements/H3";
import P from "@/elements/P";
import Li from "@/elements/Li";
import Divider from "@/elements/Divider";
import Footer from "@/components/Footer";
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
            <P className="text-black dark:text-white text-md lg:text-xl mb-3">{job.period}</P>

            <ul className="list-disc text-black dark:text-white opacity-70 ml-4">
              {job.items.map((item, i) =>
                Array.isArray(item) ? (
                  <Li key={i}>
                    {item[0]}
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
  const baseClasses = "bg-white  relative";
  const mobileClasses = `w-[100%-1rem] border-white/[0.5] border-1 ${baseClasses}`;
  const desktopClasses = `border-white/50 border ${baseClasses}`;

  return (
    <section
      id="experience"
      className={mobile ? mobileClasses : desktopClasses}
    >
      <svg className="w-full -translate-y-[99%] text-white" viewBox="0 0 1440 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z" fill="currentColor"></path>
      </svg>
      <Container>
        {!mobile && <H2 chapeau="Ervaring" />}
        <ExperienceContent />
      </Container>
      <svg className="w-full translate-y-[99%] text-white -scale-y-100" viewBox="0 0 1440 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M720.006 88C400.143 88 124.641 51.9188 0 0V88H720.006ZM1440 0C1315.37 51.9188 1039.87 88 720.006 88H1440V0Z" fill="currentColor"></path>
      </svg>
    </section>
  );
}
