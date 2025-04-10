import { motion } from "framer-motion";

export default function H3({ children, className }) {
  const extras = className ? className : "";

  return (
    <motion.h3
      className={
        `text-xl md:text-2xl lg:text-3xl leading-relaxed mb-4 font-black text-white ` +
        extras
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
