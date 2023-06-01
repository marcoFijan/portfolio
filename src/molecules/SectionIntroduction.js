import Image from "next/image";
import Title from "../atoms/Title.js";
import SubTitle from "../atoms/SubTitle.js";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";
import SubH1 from "../atoms/SubH1.js";
import SubH2 from "../atoms/SubH2.js";
import P from "../atoms/Paragraph.js";
import NextLink from "../atoms/NextLink.js";

export default function Article({
  darkBackground,
  customClassName,
  title,
  subTitle,
  header,
  subHeader,
  header2,
  subHeader2,
  summaryObject,
  introduction,
  paragraph1a,
  paragraph1b,
  paragraph1c,
  paragraphCenter,
  paragraphImageURL,
  paragraphImageAlt,
  paragraphImageSmall,
  paragraphImageClassname,
  paragraphImageNoBorder,
  linkText,
  linkHref,
  extraContent,
  canvas,
}) {
  let summaryText;
  if (summaryObject) {
    const summaryEntries = Object.entries(summaryObject);
    summaryText = summaryEntries.map(([key, val] = entry) => {
      return `${key}: ${val}`;
    });
  }
  return (
    <section className={`w-full ${customClassName}`}>
      {title && <Title text={title} darkBackground={darkBackground}></Title>}
      {subTitle && <SubTitle text={subTitle}></SubTitle>}

      {paragraphImageSmall && (
        <section
          className={`block md:grid md:grid-cols-fluid gap-4 items-center ${
            paragraphCenter && "justify-center"
          }`}
        >
          <section className="block">
            {header && <H1 text={header} darkBackground={darkBackground}></H1>}
            {subHeader && <SubH1 text={subHeader}></SubH1>}
            {summaryText && (
              <ul>
                {summaryText.map((val) => {
                  return (
                    <li
                      className={
                        "text-sm uppercase bg-bgColorLight text-bgColorDark px-8 py-2 mb-4 rounded-full"
                      }
                      key={val}
                    >
                      {val}
                    </li>
                  );
                })}
              </ul>
            )}
            {introduction && (
              <P text={introduction} darkBackground={darkBackground}></P>
            )}
            {header2 && (
              <H2 text={header2} darkBackground={darkBackground}></H2>
            )}
            {subHeader2 && <SubH2 text={subHeader2}></SubH2>}
            {paragraph1a && (
              <P text={paragraph1a} darkBackground={darkBackground}></P>
            )}
            {paragraph1b && (
              <P text={paragraph1b} darkBackground={darkBackground}></P>
            )}
            {paragraph1c && (
              <P text={paragraph1c} darkBackground={darkBackground}></P>
            )}
            {linkHref && (
              <NextLink text={linkText} href={linkHref} cta={true}></NextLink>
            )}
          </section>
          {paragraphImageURL && (
            <Image
              className={`${
                paragraphImageNoBorder
                  ? ""
                  : "w-full object-cover  box-border p-4 border rounded-2xl"
              } ${paragraphImageClassname}`}
              src={paragraphImageURL}
              alt={paragraphImageAlt}
            />
          )}
          {canvas && canvas}
        </section>
      )}
      {!paragraphImageSmall && (
        <section className="pb-8">
          {header && <H1 text={header} darkBackground={darkBackground}></H1>}
          {subHeader && <SubH1 text={subHeader}></SubH1>}
          {summaryText && (
            <ul>
              {summaryText.map((val) => {
                return (
                  <li
                    className={
                      "text-sm uppercase bg-bgColorLight text-bgColorDark px-8 py-2 mb-4 rounded-full"
                    }
                    key={val}
                  >
                    {val}
                  </li>
                );
              })}
            </ul>
          )}
          {introduction && (
            <P text={introduction} darkBackground={darkBackground}></P>
          )}
          {header2 && <H2 text={header2} darkBackground={darkBackground}></H2>}
          {subHeader2 && <SubH2 text={subHeader2}></SubH2>}
          {paragraph1a && (
            <P text={paragraph1a} darkBackground={darkBackground}></P>
          )}
          {paragraph1b && (
            <P text={paragraph1b} darkBackground={darkBackground}></P>
          )}
          {paragraph1c && (
            <P text={paragraph1c} darkBackground={darkBackground}></P>
          )}
          {paragraphImageURL && (
            <Image
              className={`w-full object-cover  box-border p-4 border rounded-2xl ${paragraphImageClassname}`}
              src={paragraphImageURL}
              alt={paragraphImageAlt}
            />
          )}
          {linkHref && (
            <NextLink text={linkText} href={linkHref} cta={true}></NextLink>
          )}
        </section>
      )}

      {extraContent && extraContent}
    </section>
  );
}
