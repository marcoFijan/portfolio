import { Work_Sans } from "next/font/google";
import InViewAnimate from "../utilities/InViewAnimate.js";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function H1({ children, chapeau, className = "", big }) {
  const sizeClasses = big
    ? "text-6xl lg:text-7xl 2xl:text-8xl"
    : "text-3xl lg:text-5xl 2xl:text-7xl"

  const colorClasses = "text-transparent bg-clip-text bg-gradient-to-br from-black to-neutral-600 dark:from-white dark:to-white/60";

  return (
    <>
      {chapeau && (
        <InViewAnimate
          as="span"
          splitText={true}
          stagger={40}
          className={`${workSans.className} block text-md xs:text-md sm:text-lg md:text-xl uppercase font-light text-black/50 dark:text-white/50`}
          delay={300}
        >
          {chapeau}
        </InViewAnimate>
      )}

      <InViewAnimate
        as="h1"
        className={`
          ${workSans.className} 
          pt-2 pb-8 md:pb-8 lg:pb-16 
          leading-[0.9] sm:leading-[1] 
          font-extrabold
          ${sizeClasses} 
          ${colorClasses} 
          ${className}
        `}
        delay={100}
      >
        {children}
      </InViewAnimate>
    </>
  );
}