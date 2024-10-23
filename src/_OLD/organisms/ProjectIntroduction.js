import { Title } from "../atoms/Title.js";
import SubTitle from "../atoms/SubTitle.js";
import P from "../atoms/Paragraph.js";

export default function ProjectIntroduction({
  title,
  subTitle,
  introduction,
  introduction2,
  darkBackground,
}) {
  return (
    <article className="pt-4">
      <Title text={title} darkBackground={darkBackground} />
      <SubTitle text={subTitle} />
      <section className="flex flex-wrap gap-4">
        <section>
          <P text={introduction} darkBackground={darkBackground} />
          <P text={introduction2} darkBackground={darkBackground} />
        </section>
        <div className="bg-CTAColor flex-grow min-w-[20rem]">
          <p>placeholder</p>
        </div>
      </section>
    </article>
  );
}
