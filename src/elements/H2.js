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
      {chapeau && (
        <InViewAnimate
          as="span"
          splitText={true}
          stagger={40}
          delay={300}
          className={`${workSans.className} block text-md mb-2 lg:text-xl uppercase font-light text-black/50 dark:text-white/50`}
        >
          {chapeau}
        </InViewAnimate>
      )}

      {children && (
        <InViewAnimate
          as="h2"
          className={` ${className} lg:leading-none mb-8 lg:mb-10 dark:text-white text-black font-black ${workSans.className} text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl`}
          delay={100}
        >
          {children}
        </InViewAnimate>
      )}
    </>
  );
}
