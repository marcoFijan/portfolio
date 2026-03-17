import { Work_Sans } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function H2({ children, chapeau, big = false, className = "" }) {
  return (
    <>
      {/* {chapeau && (
        <InViewAnimate
          as="span"
          splitText={true}
          stagger={40}
          delay={300}
          className={`${fugazOne.className} ${
            big
              ? "text-xl md:text-2xl lg:text-3xl"
              : "text-md md:text-lg lg:text-xl"
          } uppercase font-light text-white/[0.5] pl-6 relative block mb-4 after:absolute after:content-[''] after:h-3 after:w-3 after:bg-color-accent after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2`}
        >
          {chapeau}
        </InViewAnimate>
      )} */}

      {children && (
        <InViewAnimate
          as="h2"
          className={` ${className} leading-tight mb-8 dark:text-white text-black font-black ${workSans.className} ${big
            ? "text-5xl lg:text-6xl 2xl:text-8xl"
            : "text-2xl lg:text-4xl 2xl:text-6xl"
            }`}
          delay={100}
        >
          {children}
        </InViewAnimate>
      )}
    </>
  );
}
