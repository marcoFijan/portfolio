import SectionIframe from "../molecules/SectionIframe";

export default function ProjectArticleSpecial({
  darkBackground,
  header,
  subHeader,
  header2,
  introduction,
  linkText,
  linkHref,
  iframeSrc,
}) {
  return (
    <article className="py-8 block px-articlePaddingMobile md:px-articlePadding w-full">
      <SectionIframe
        iframeSrc={iframeSrc}
        darkBackground={darkBackground}
        header={header}
        subHeader={subHeader}
        header2={header2}
        introduction={introduction}
        linkText={linkText}
        linkHref={linkHref}
      />
    </article>
  );
}
