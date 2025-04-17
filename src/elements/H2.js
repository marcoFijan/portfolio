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
  big = false,
  animateRight = false,
  className,
}) {
  return (
    <>
      {chapeau && (
        <motion.span
          className={`${orbitron.className} ${
            big
              ? "text-xl md:text-2xl lg:text-3xl"
              : "text-md md:text-lg lg:text-xl"
          }  leading-loose mb-8 uppercase font-light text-white text-opacity-50 pl-6 relative after:absolute after:content-[''] after:h-3 after:w-3 after:bg-white after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:opacity-100 after:border-1 after:border-black`}
          initial={animateRight ? { x: 10000 } : { opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.1 },
          }}
        >
          {chapeau}
        </motion.span>
      )}
      {children && (
        <motion.h2
          className={`${
            orbitron.className
          } ${className} pt-4 leading-relaxed mb-8 text-white ${
            big
              ? "text-6xl md:text-7xl lg:text-9xl"
              : "text-3xl md:text-5xl lg:text-7xl"
          }`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.1 },
          }}
        >
          {children}
        </motion.h2>
      )}
    </>
  );
}
