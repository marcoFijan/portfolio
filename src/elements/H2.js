import { Fugaz_One } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const fugazOne = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fugazOne",
});

export default function H2({ children, chapeau, big = false, className = "" }) {
  return (
    <>
      {chapeau && (
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
      )}

      {children && (
        <InViewAnimate
          as="h2"
          className={`${fugazOne.className} ${className} leading-tight mb-8 text-white font-black ${
            big
              ? "text-6xl md:text-7xl lg:text-9xl"
              : "text-3xl md:text-5xl lg:text-7xl"
          }`}
          delay={100}
        >
          {children}
        </InViewAnimate>
      )}
    </>
  );
}
