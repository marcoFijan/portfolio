import { Fugaz_One } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const fugazOne = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fugazOne",
});

export default function H3({
  children,
  chapeau,
  className = "",
  textWhite,
  noMarginTop = false,
}) {
  return (
    <>
      {/* {chapeau && (
        <InViewAnimate
          as="span"
          splitText={true}
          stagger={40}
          delay={300}
          className={`${fugazOne.className} text-md md:text-lg lg:text-xl uppercase font-light text-white/[0.5] text-opacity-50 pl-6 relative block after:absolute after:content-[''] after:h-3 after:w-3 after:bg-color-accent after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:opacity-100`}
        >
          {chapeau}
        </InViewAnimate>
      )} */}
      <InViewAnimate
        as="h3"
        className={`${fugazOne.className} text-xl lg:text-2xl 2xl:text-3xl font-bold leading-snug mb-2 text-black dark:text-white ${noMarginTop ? "mt-4" : "mt-12"} ${className}`}
        delay={100}
      >
        {children}
      </InViewAnimate>
    </>
  );
}
