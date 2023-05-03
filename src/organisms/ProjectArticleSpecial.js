import ArticleIframe from "../molecules/ArticleIframe";

export default function ProjectArticleSpecial({
  darkBackground,
  customClassName,
  header,
  subHeader,
  header2,
  introduction,
  linkText,
  linkHref,
  iframeSrc,
}) {
  return (
    <ArticleIframe
      iframeSrc={iframeSrc}
      darkBackground={darkBackground}
      header={header}
      subHeader={subHeader}
      header2={header2}
      introduction={introduction}
      linkText={linkText}
      linkHref={linkHref}
    />
  );
}
