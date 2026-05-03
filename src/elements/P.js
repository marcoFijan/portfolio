import { Work_Sans } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function P({ children, className, intro, splitText }) {
  const combinedClasses = `mb-4 last-of-type:mb-0 font-light text-shadow-color-bg-top tracking-widest text-black dark:text-white ${className} ${workSans.className} 
    ${
      intro
        ? "text-sm sm:text-md md:text-lg max-w-280"
        : "text-sm sm:text-md max-w-paragraph"
    }
  `;

  return (
    <InViewAnimate
      as="p"
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
