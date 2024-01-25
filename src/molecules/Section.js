import Image from "next/image";
import { Title } from "../atoms/Title.js";
import SubTitle from "../atoms/SubTitle.js";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";
import SubH1 from "../atoms/SubH1.js";
import SubH2 from "../atoms/SubH2.js";
import P from "../atoms/Paragraph.js";
import NextLink from "../atoms/NextLink.js";
import { motion } from "framer-motion";

export default function Article({
  darkBackground,
  customClassName,
  title,
  subTitle,
  header,
  subHeader,
  header2,
  subHeader2,
  introduction,
  paragraph1a,
  paragraph1b,
  paragraph1c,
  paragraphCenter,
  paragraphImageURL,
  paragraphImageAlt,
  paragraphImageSmall,
  paragraphImageClassname,
  imgPriority,
  linkText,
  linkHref,
  lightBg,
  linkText2,
  linkHref2,
  extraContent,
}) {
  return (
    <motion.section className={`w-full z-0 ${customClassName}`}>
      {title && <Title text={title} darkBackground={darkBackground}></Title>}
      {subTitle && <SubTitle text={subTitle}></SubTitle>}

      {paragraphImageSmall && (
        <section
          className={`block md:grid md:grid-cols-fluid md:gap-12 items-center ${
            paragraphCenter && "justify-center"
          }`}
        >
          <section className="block">
            {header && <H1 text={header} darkBackground={darkBackground}></H1>}
            {subHeader && <SubH1 text={subHeader}></SubH1>}
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
            {extraContent && extraContent}
            {linkHref & linkHref2 && (
              <section className="w-full flex flex-wrap justify-center">
                <NextLink
                  text={linkText}
                  href={linkHref}
                  cta={true}
                  lightBg={lightBg}
                ></NextLink>
                <NextLink text={linkText2} href={linkHref2}></NextLink>
              </section>
            )}
            {linkHref & !linkHref2 && (
              <NextLink
                text={linkText}
                href={linkHref}
                cta={true}
                lightBg={lightBg}
              ></NextLink>
            )}
          </section>
          <Image
            className={`${paragraphImageClassname} w-full object-cover bg-black box-border p-1 mt-4 border rounded-2xl z-0`}
            src={paragraphImageURL}
            alt={paragraphImageAlt}
            priority={imgPriority}
          />
        </section>
      )}
      {!paragraphImageSmall && (
        <section className="w-full">
          {header && <H1 text={header} darkBackground={darkBackground}></H1>}
          {subHeader && <SubH1 text={subHeader}></SubH1>}
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
          {extraContent && extraContent}
          {paragraphImageURL && (
            <Image
              className={`w-full object-cover bg-black box-border p-1 mt-4 border rounded-2xl mb-8 z-0 ${paragraphImageClassname}`}
              src={paragraphImageURL}
              alt={paragraphImageAlt}
              priority={imgPriority}
            />
          )}

          <section className="w-full flex flex-wrap justify-center">
            {linkHref && (
              <NextLink
                text={linkText}
                href={linkHref}
                cta={true}
                lightBg={lightBg}
              ></NextLink>
            )}
            {linkHref2 && (
              <NextLink text={linkText2} href={linkHref2}></NextLink>
            )}
          </section>
        </section>
      )}
    </motion.section>
  );
}
