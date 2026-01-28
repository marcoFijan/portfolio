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
          className={`${fugazOne.className} text-md xs:text-md sm:text-lg md:text-xl uppercase font-light text-color-white-soft text-opacity-50 pl-6 relative after:absolute after:content-[''] after:h-3 after:w-3 after:bg-color-accent after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:opacity-100 after:border-1 after:border-black`}
          delay={300}
        >
          {chapeau}
        </InViewAnimate>
      )}
      <InViewAnimate
        as="h1"
        className={`${fugazOne.className}  pt-2 pb-8 md:pb-8 lg:pb-16 leading-none sm:leading-[1] font-medium  ${
          big
            ? "text-[2.5rem] xs:text-[3.5rem] md:text-home-h1 xl:text-home-h1-big text-transparent bg-clip-text bg-gradient-to-br from-white to-color-white-soft"
            : "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-white to-color-white-soft"
        } ${className}`}
        delay={100}
      >
        {children}
      </InViewAnimate>
    </>
  );
}
