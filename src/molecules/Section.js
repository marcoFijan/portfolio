import Image from "next/image";
import marcoPointingAtText from "../../public/images/marcoPointing.png";
import Title from "../atoms/Title.js";
import SubTitle from "../atoms/SubTitle.js";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";
import SubH1 from "../atoms/SubH1.js";
import SubH2 from "../atoms/SubH2.js";
import P from "../atoms/Paragraph.js";
import NextLink from "../atoms/NextLink.js";

export default function Section({
  darkBackground,
  customClassName,
  header,
  subHeader,
  header2,
  paragraph1a,
  paragraph1b,
  paragraph1c,
  paragraphImageURL,
  paragraphImageAlt,
  paragraphImageClassname,
  linkText,
  linkHref,
  extraContent,
}) {
  return (
    <section className={`w-full -mt-4 ${customClassName}`}>
      {header && <H1 text={header} darkBackground={darkBackground}></H1>}
      {subHeader && <SubH1 text={subHeader}></SubH1>}
      {header2 && <H2 text={header2} darkBackground={darkBackground}></H2>}
      {paragraph1a && (
        <P text={paragraph1a} darkBackground={darkBackground}></P>
      )}
      {paragraph1b && (
        <P text={paragraph1b} darkBackground={darkBackground}></P>
      )}
      {paragraph1c && (
        <P text={paragraph1c} darkBackground={darkBackground}></P>
      )}
      {extraContent && extraContent}
      <Image
        className={`${paragraphImageClassname}`}
        src={paragraphImageURL}
        alt={paragraphImageAlt}
      />
    </section>
  );
}
