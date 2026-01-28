import { Work_Sans } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function P({ children, className, intro }) {
  // Combine your existing logic for classes
  const combinedClasses = `mb-4 font-light opacity-80 text-shadow-color-bg-top text-shadow-2xs ${workSans.className} 
    ${
      className
        ? className
        : intro
          ? "text-white text-md sm:text-lg md:text-xl lg:text-2xl max-w-[70rem] opacity-70"
          : "text-white text-sm sm:text-md md:text-lg lg:text-xl max-w-paragraph opacity-70 "
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
