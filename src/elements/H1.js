import { Fugaz_One } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const fugazOne = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fugazOne",
});

export default function H1({ children, chapeau, className = "", big }) {
  return (
    <>
      {chapeau && (
        <InViewAnimate
          as="span"
          splitText={true}
          stagger={40}
          className={`${fugazOne.className} text-md xs:text-md sm:text-lg md:text-xl uppercase font-light dark:text-color-white-soft text-black text-opacity-50`}
          delay={300}
        >
          {chapeau}
        </InViewAnimate>
      )}
      <InViewAnimate
        as="h1"
        className={`${fugazOne.className}  pt-2 pb-8 md:pb-8 lg:pb-16 leading-none sm:leading-[1] font-medium  ${
          big
            ? "text-[2.5rem] xs:text-[3.5rem] md:text-home-h1 xl:text-home-h1-big text-transparent bg-clip-text bg-gradient-to-br dark:from-white dark:to-color-white-soft from-color-bg-bottom to-color-bg-top"
            : "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br dark:from-white dark:to-color-white-soft from-color-bg-bottom to-color-bg-top"
        } ${className}`}
        delay={100}
      >
        {children}
      </InViewAnimate>
    </>
  );
}
