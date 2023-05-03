import Image from "next/image";
import marcoPointingAtText from "../../public/images/marcoPointing.png";
import Article from "../molecules/Section";
import Title from "../atoms/Title.js";
import SubTitle from "../atoms/SubTitle.js";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";
import SubH1 from "../atoms/SubH1.js";
import SubH2 from "../atoms/SubH2.js";
import P from "../atoms/Paragraph.js";
import NextLink from "../atoms/NextLink.js";
import { Canvas } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  Environment,
  Float,
  useScroll,
} from "@react-three/drei";

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
