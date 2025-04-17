import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function H1({ children, chapeau, className, big }) {
  return (
    <>
      {chapeau && (
        <motion.span
          className={`text-2xl leading-loose uppercase font-light text-white text-opacity-50 pl-6 relative after:absolute after:content-[''] after:h-3 after:w-3 after:bg-white after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:opacity-100 after:border-1 after:border-black ${orbitron.className}`}
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
          `pt-2 pb-12 font-light leading-[.82] text-white ${
            orbitron.className
          } ${
            big
              ? "text-homeH1 xl:text-homeH1Big "
              : "text-3xl md:text-6xl lg:text-7xl "
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
