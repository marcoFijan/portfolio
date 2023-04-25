import P from "../atoms/Paragraph.js";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";
import NextLink from "../atoms/NextLink.js";

export default function Article({
  transparent,
  customClassName,
  header1,
  header2,
  paragraph1,
  paragraph2,
  linkText,
  linkHref,
  extraContent,
}) {
  return (
    <article
      className={`w-full pt-12 ${
        transparent ? "" : "bg-bgColorLight"
      } ${customClassName}`}
    >
      <H1 text={header1} darkBackground={transparent}></H1>
      <H2 text={header2}></H2>
      {paragraph1 && <P text={paragraph1} darkBackground={transparent}></P>}
      {paragraph2 && <P text={paragraph2}></P>}
      {linkHref && <NextLink text={linkText} href={linkHref}></NextLink>}
      {extraContent && extraContent}
    </article>
  );
}
