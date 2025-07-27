import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function H3({ children, className, reverse }) {
  const extras = className ? className : "";

  return (
    <article
      className={`flex flex-col gap-12 gap-y-32 my-32 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {children}
    </article>
  );
}
