"use client";

import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";
import clsx from "clsx";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function H1({ children, className = "" }) {
  return (
    <motion.span
      className={clsx(
        "pt-2 pb-8 md:pb-8 lg:pb-12 font-light leading-none sm:leading-[.82] text-color-white-soft",
        "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
        "whitespace-pre-wrap", // allow breaking only at whitespace
        orbitron.className,
        className
      )}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[...children].map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className={clsx(
            "inline-block",
            char !== " " && "whitespace-nowrap inline"
          )}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
