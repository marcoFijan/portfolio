import Section from "../molecules/Section";
import SectionIntro from "../molecules/SectionIntroduction";
import UnorderedList from "../molecules/UnorderedList";

export default function ProjectArticle({
  title,
  subTitle,
  header,
  subHeader,
  introduction,
  summaryProject,
  header2a,
  paragraph1a,
  paragraph1b,
  paragraph1c,
  paragraph1ImageURL,
  paragraph1ImageAlt,
  paragraph1ImageClassname,
  paragraph1ImageSmall,
  paragraph1ImageNoBorder,
  button1Href,
  button1Text,
  button1bHref,
  button1bText,
  header2b,
  paragraph2a,
  paragraph2b,
  paragraph2c,
  paragraph2ImageURL,
  paragraph2ImageAlt,
  paragraph2ImageClassname,
  paragraph2ImageSmall,
  button2Href,
  button2Text,
  button2bHref,
  button2bText,
  extraContent1,
  extraContent2,
  extraContent3,
  sectionHeader1,
  sectionHeader2,
  sectionHeader3,
  sectionHeader4,
  sectionHeader5,
  sectionHeader6,
  sectionParagraph1a,
  sectionParagraph1b,
  sectionParagraph1c,
  sectionParagraph2a,
  sectionParagraph2b,
  sectionParagraph2c,
  sectionParagraph3a,
  sectionParagraph3b,
  sectionParagraph3c,
  sectionParagraph4a,
  sectionParagraph4b,
  sectionParagraph4c,
  sectionParagraph5a,
  sectionParagraph5b,
  sectionParagraph5c,
  sectionParagraph6a,
  sectionParagraph6b,
  sectionParagraph6c,
  section1LinkHref,
  section1LinkText,
  section1bLinkHref,
  section1bLinkText,
  section2LinkHref,
  section2LinkText,
  section2bLinkHref,
  section2bLinkText,
  section3LinkHref,
  section3LinkText,
  section3bLinkHref,
  section3bLinkText,
  section4LinkHref,
  section4LinkText,
  section4bLinkHref,
  section4bLinkText,
  section5LinkHref,
  section5LinkText,
  section5bLinkHref,
  section5bLinkText,
  section6LinkHref,
  section6LinkText,
  section6bLinkHref,
  section6bLinkText,
  sectionData1,
  sectionData2,
  sectionData3,
  section1ImageAlt,
  section1ImageURL,
  section2ImageAlt,
  section2ImageURL,
  section3ImageAlt,
  section3ImageURL,
  section4ImageAlt,
  section4ImageURL,
  section5ImageAlt,
  section5ImageURL,
  section6ImageAlt,
  section6ImageURL,
  section1ImagePriority,
  section2ImagePriority,
  darkBackground,
  canvas,
}) {
  return (
    <article className="py-16 block px-articlePaddingMobile md:px-articlePadding w-full">
      <SectionIntro
        title={title}
        subTitle={subTitle}
        header={header}
        subHeader={subHeader}
        summaryObject={summaryProject}
        introduction={introduction}
        header2={header2a}
        paragraph1a={paragraph1a}
        paragraph1b={paragraph1b}
        paragraph1c={paragraph1c}
        paragraphImageURL={paragraph1ImageURL}
        paragraphImageAlt={paragraph1ImageAlt}
        paragraphImageSmall={paragraph1ImageSmall}
        paragraphImageNoBorder={paragraph1ImageNoBorder}
        paragraphImageClassname={paragraph1ImageClassname}
        imgPriority={true}
        linkHref={button1Href}
        linkText={button1Text}
        linkHref2={button1bHref}
        linkText2={button1bText}
        darkBackground={darkBackground}
        extraContent={extraContent1}
        canvas={canvas}
      />
      {sectionHeader1 && (
        <section className="block md:grid md:grid-cols-fluid gap-16">
          <Section
            header2={sectionHeader1}
            paragraph1a={sectionParagraph1a}
            paragraph1b={sectionParagraph1b}
            paragraph1c={sectionParagraph1c}
            extraContent={
              sectionData1 ? (
                <UnorderedList data={sectionData1} />
              ) : (
                extraContent1
              )
            }
            darkBackground={darkBackground}
            paragraphImageAlt={section1ImageAlt}
            paragraphImageURL={section1ImageURL}
            imgPriority={section1ImagePriority}
            linkHref={section1LinkHref}
            linkText={section1LinkText}
            linkHref2={section1bLinkHref}
            linkText2={section1bLinkText}
          />
          {sectionHeader2 && (
            <Section
              header2={sectionHeader2}
              paragraph1a={sectionParagraph2a}
              paragraph1b={sectionParagraph2b}
              paragraph1c={sectionParagraph2c}
              extraContent={
                sectionData2 ? (
                  <UnorderedList data={sectionData2} />
                ) : (
                  extraContent2
                )
              }
              darkBackground={darkBackground}
              paragraphImageAlt={section2ImageAlt}
              paragraphImageURL={section2ImageURL}
              imgPriority={section2ImagePriority}
              linkHref={section2LinkHref}
              linkText={section2LinkText}
              linkHref2={section2bLinkHref}
              linkText2={section2bLinkText}
            />
          )}
          {sectionHeader3 && (
            <Section
              header2={sectionHeader3}
              paragraph1a={sectionParagraph3a}
              paragraph1b={sectionParagraph3b}
              paragraph1c={sectionParagraph3c}
              extraContent={
                sectionData3 ? (
                  <UnorderedList data={sectionData3} />
                ) : (
                  extraContent3
                )
              }
              darkBackground={darkBackground}
              paragraphImageAlt={section3ImageAlt}
              paragraphImageURL={section3ImageURL}
              linkHref={section3LinkHref}
              linkText={section3LinkText}
              linkHref2={section3bLinkHref}
              linkText2={section3bLinkText}
            />
          )}
          {sectionHeader4 && (
            <Section
              header2={sectionHeader4}
              paragraph1a={sectionParagraph4a}
              paragraph1b={sectionParagraph4b}
              paragraph1c={sectionParagraph4c}
              darkBackground={darkBackground}
              paragraphImageAlt={section4ImageAlt}
              paragraphImageURL={section4ImageURL}
              linkHref={section4LinkHref}
              linkText={section4LinkText}
              linkHref2={section4bLinkHref}
              linkText2={section4bLinkText}
            />
          )}
          {sectionHeader5 && (
            <Section
              header2={sectionHeader5}
              paragraph1a={sectionParagraph5a}
              paragraph1b={sectionParagraph5b}
              paragraph1c={sectionParagraph5c}
              darkBackground={darkBackground}
              paragraphImageAlt={section5ImageAlt}
              paragraphImageURL={section5ImageURL}
              linkHref={section5LinkHref}
              linkText={section5LinkText}
              linkHref2={section5bLinkHref}
              linkText2={section5bLinkText}
            />
          )}
          {sectionHeader6 && (
            <Section
              header2={sectionHeader6}
              paragraph1a={sectionParagraph6a}
              paragraph1b={sectionParagraph6b}
              paragraph1c={sectionParagraph6c}
              darkBackground={darkBackground}
              paragraphImageAlt={section6ImageAlt}
              paragraphImageURL={section6ImageURL}
              linkHref={section6LinkHref}
              linkText={section6LinkText}
              linkHref2={section6bLinkHref}
              linkText2={section6bLinkText}
            />
          )}
        </section>
      )}
      {paragraph2a && (
        <Section
          header2={header2b}
          paragraph1a={paragraph2a}
          paragraph1b={paragraph2b}
          paragraph1c={paragraph2c}
          paragraphImageURL={paragraph2ImageURL}
          paragraphImageAlt={paragraph2ImageAlt}
          paragraphImageSmall={paragraph2ImageSmall}
          paragraphImageClassname={paragraph2ImageClassname}
          linkHref={button2Href}
          linkText={button2Text}
          linkHref2={button2bHref}
          linkText2={button2bText}
          darkBackground={darkBackground}
          extraContent={extraContent2}
        />
      )}
    </article>
  );
}
