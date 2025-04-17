import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function H2({
  children,
  chapeau,
  noMotion = false,
  animateRight = false,
}) {
  return (
    <>
      {chapeau && (
        <motion.span
          className={`${orbitron.className} text-md leading-loose mb-8 uppercase font-light text-white text-opacity-50 pl-6 relative after:absolute after:content-[''] after:h-3 after:w-3 after:bg-white after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:opacity-100 after:border-1 after:border-black`}
          initial={animateRight ? { x: 10000 } : { opacity: 0, y: 25 }}
          whileInView={
            noMotion
              ? {}
              : {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.1 },
                }
          }
        >
          {chapeau}
        </motion.span>
      )}
      {children && (
        <motion.h2
          className={`${orbitron.className} text-3xl md:text-5xl lg:text-7xl pt-4 leading-relaxed mb-8 text-white`}
          initial={noMotion ? {} : { opacity: 0, y: 25 }}
          whileInView={
            noMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.1 },
                }
          }
        >
          {children}
        </motion.h2>
      )}
    </>
  );
}
