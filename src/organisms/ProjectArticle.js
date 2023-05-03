import Image from "next/image";
import marcoPointingAtText from "../../public/images/marcoPointing.png";
import Article from "../molecules/Article";
import ArticleIntro from "../molecules/ArticleIntroduction";
import Section from "../molecules/Section";
import UnorderedList from "../molecules/UnorderedList";
import Title from "../atoms/Title.js";
import SubTitle from "../atoms/SubTitle.js";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";
import SubH1 from "../atoms/SubH1.js";
import SubH2 from "../atoms/SubH2.js";
import P from "../atoms/Paragraph.js";
import NextLink from "../atoms/NextLink.js";
import { Document, Page } from "react-pdf";

export default function ProjectArticle({
  title,
  subTitle,
  header,
  subHeader,
  introduction,
  summaryObject,
  header2a,
  paragraph1a,
  paragraph1b,
  paragraph1c,
  paragraph1ImageURL,
  paragraph1ImageAlt,
  paragraph1ImageClassname,
  paragraph1ImageSmall,
  button1Href,
  button1Text,
  button1CTA,
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
  button2CTA,
  extraContent1,
  extraContent2,
  extraContent3,
  extraContent4,
  extraContent5,
  extraContent6,
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
  section2LinkHref,
  section2LinkText,
  section3LinkHref,
  section3LinkText,
  section4LinkHref,
  section4LinkText,
  section5LinkHref,
  section5LinkText,
  section6LinkHref,
  section6LinkText,
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
  darkBackground,
}) {
  return (
    // <article className="pt-4">
    //   <H1 text={header} darkBackground={darkBackground} />
    //   <SubH1 text={subHeader} />
    //   <P text={paragraph} darkBackground={darkBackground} />
    //   <Image
    //     className="w-full h-96 object-cover"
    //     src={paragraphImageURL}
    //     alt={paragraphImageAlt}
    //   />
    // </article>
    <div className="py-16 block">
      <ArticleIntro
        title={title}
        subTitle={subTitle}
        header={header}
        subHeader={subHeader}
        summaryObject={summaryObject}
        introduction={introduction}
        header2={header2a}
        paragraph1a={paragraph1a}
        paragraph1b={paragraph1b}
        paragraph1c={paragraph1c}
        paragraphImageURL={paragraph1ImageURL}
        paragraphImageAlt={paragraph1ImageAlt}
        paragraphImageSmall={paragraph1ImageSmall}
        paragraphImageClassname={paragraph1ImageClassname}
        linkHref={button1Href}
        linkText={button1Text}
        darkBackground={darkBackground}
        extraContent={extraContent1}
      />
      {paragraph2a && (
        <Article
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
          darkBackground={darkBackground}
          extraContent={extraContent2}
        />
      )}
      {sectionParagraph1a && (
        <section className="grid grid-cols-fluid gap-16">
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
            linkHref={section1LinkHref}
            linkText={section1LinkText}
          />
          {sectionParagraph2a && (
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
              linkHref={section2LinkHref}
              linkText={section2LinkText}
            />
          )}
          {sectionParagraph3a && (
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
            />
          )}
          {sectionParagraph4a && (
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
            />
          )}
          {sectionParagraph5a && (
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
            />
          )}
          {sectionParagraph6a && (
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
            />
          )}
        </section>
      )}
    </div>
  );
}
