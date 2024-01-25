import { motion } from "framer-motion";

export function Title({ text, darkBackground }) {
  return (
    <motion.h1
      className={`text-4xl pt-4 md:text-6xl lg:text-6xl uppercase font-black ${
        darkBackground ? "text-white" : "text-colorTextDark"
      }`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 },
      }}
    >
      {text}
    </motion.h1>
  );
}
