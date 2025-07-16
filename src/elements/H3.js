import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function H3({ children, className, noMarginTop = false }) {
  const extras = className ? className : "";

  return (
    <motion.h3
      className={
        `text-xl md:text-2xl lg:text-3xl font-black leading-relaxed mb-2 text-color-accent ${
          noMarginTop ? "mt-4" : "mt-12"
        } ` +
        extras +
        inter.className
      }
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 },
      }}
    >
      {children}
    </motion.h3>
  );
}
