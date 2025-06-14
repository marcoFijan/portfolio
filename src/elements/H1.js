import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function H1({ children, chapeau, className, big }) {
  return (
    <>
      {chapeau && (
        <motion.span
          className={`text-md xs:text-lg sm:text-xl md:text-2xl uppercase font-light text-white text-opacity-50 pl-6 relative after:absolute after:content-[''] after:h-3 after:w-3 after:bg-white after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:opacity-70 after:border-1 after:border-black ${inter.className}`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.1 },
          }}
        >
          {chapeau}
        </motion.span>
      )}
      <motion.h1
        className={
          `pt-2 pb-8 md:pb-8 lg:pb-12 leading-none sm:leading-[1]  ${
            inter.className
          } ${
            big
              ? "text-home-h1 xl:text-home-h1-big text-transparent bg-clip-text font-semibold bg-gradient-to-br from-color-accent-light to-color-accent"
              : "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text font-semibold bg-gradient-to-br from-white to-white"
          }` + className
        }
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.1 },
        }}
      >
        {children}
      </motion.h1>
    </>
  );
}
