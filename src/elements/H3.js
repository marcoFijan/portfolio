import { Work_Sans } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function H3({
  children,
  className = "",
  textOrange = false,
  noMarginTop = false,
}) {
  return (
    <>
      <InViewAnimate
        as="h3"
        className={`${workSans.className} text-xl lg:text-2xl 2xl:text-3xl font-bold leading-snug mb-2 ${textOrange ? 'text-color-accent' : 'text-black dark:text-white'} ${noMarginTop ? "mt-4" : "mt-12"} ${className}`}
        delay={100}
      >
        {children}
      </InViewAnimate>
    </>
  );
}
