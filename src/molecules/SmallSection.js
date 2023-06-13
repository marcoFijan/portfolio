import Image from "next/image";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";
import SubH1 from "../atoms/SubH1.js";
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
  imgPriority,
  linkText,
  linkHref,
  extraContent,
}) {
  return (
    <section className={`w-full ${customClassName}`}>
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
        priority={imgPriority}
      />
      {linkHref && <NextLink text={linkText} href={linkHref}></NextLink>}
    </section>
  );
}
