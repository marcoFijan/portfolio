import { motion } from "framer-motion";

export default function H2({ children, darkBackground }) {
  return (
    <motion.h2
      className={`text-3xl md:text-4xl lg:text-5xl uppercase font-black  ${
        darkBackground ? "text-white" : "text-colorTextDark"
      }
      `}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 },
      }}
    >
      {children}
    </motion.h2>
  );
}
