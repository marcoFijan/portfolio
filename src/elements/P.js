import { Work_Sans } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function P({ children, className, intro }) {
  const combinedClasses = `mb-4 font-light text-shadow-color-bg-top text-shadow-2xs tracking-widest ${className} ${workSans.className} 
    ${
      intro
        ? "text-black dark:text-white text-md sm:text-lg md:text-xl lg:text-2xl max-w-280"
        : "text-black dark:text-white text-sm sm:text-md md:text-lg lg:text-xl max-w-paragraph"
    }
  `;

  return (
    <InViewAnimate
      as="p"
      className={combinedClasses}
      translateY={25}
      duration={500}
      delay={100}
    >
      {children}
    </InViewAnimate>
  );
}
