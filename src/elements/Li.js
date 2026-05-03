import { Work_Sans } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function Li({ children, className = "", intro, splitText }) {
  const baseClasses = [
    "relative list-none font-light tracking-widest text-black dark:text-white",
    "text-shadow-color-bg-top", workSans.className,
    "before:content-[''] before:absolute before:left-0 before:top-[0.6em]",
    "before:w-2 before:h-2 before:bg-color-accent before:rotate-45",
    "pl-6 ml-1",
    intro
      ? "text-md sm:text-lg md:text-xl lg:text-2xl max-w-[280px]"
      : "text-sm md:text-md max-w-paragraph",
    className
  ].join(" ");

  return (
    <InViewAnimate
      as="li"
      className={baseClasses}
      splitText={!!splitText}
      stagger={splitText ? 40 : 0}
      translateY={25}
      duration={500}
      delay={200}
    >
      {children}
    </InViewAnimate>
  );
}