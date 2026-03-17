import { Work_Sans } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function li({ children, className, intro, splitText }) {
  const combinedClasses = `font-light text-shadow-color-bg-top tracking-widest text-black dark:text-white ${className} ${workSans.className} 
    ${intro
      ? "text-md sm:text-lg md:text-xl lg:text-2xl max-w-280"
      : "text-sm md:text-md max-w-paragraph"
    }
  `;

  return (
    <InViewAnimate
      as="li"
      className={combinedClasses}
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