import { Title } from "../atoms/Title.js";
import SubTitle from "../atoms/SubTitle.js";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";
import SubH1 from "../atoms/SubH1.js";
import P from "../atoms/Paragraph.js";
import NextLink from "../atoms/NextLink.js";
import IframeLoader from "../atoms/IframeLoader";

export default function Article({
  darkBackground,
  customClassName,
  title,
  subTitle,
  header,
  subHeader,
  header2,
  introduction,
  linkText,
  linkHref,
  iframeSrc,
}) {
  return (
    <section className={`w-full ${customClassName}`}>
      {title && <Title text={title} darkBackground={darkBackground}></Title>}
      {subTitle && <SubTitle text={subTitle}></SubTitle>}
      {header && <H1 text={header} darkBackground={darkBackground}></H1>}
      {subHeader && <SubH1 text={subHeader}></SubH1>}
      {introduction && (
        <P text={introduction} darkBackground={darkBackground}></P>
      )}
      {header2 && <H2 text={header2} darkBackground={darkBackground}></H2>}
      <IframeLoader iframeSrc={iframeSrc} />
      {linkHref && <NextLink text={linkText} href={linkHref}></NextLink>}
    </section>
  );
}
