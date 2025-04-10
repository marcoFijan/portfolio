import { motion } from "framer-motion";

export default function P({ children, customClasses }) {
  return (
    <motion.p
      className={
        "text-white text-xl mb-4 font-light opacity-30 max-w-paragraph " +
        customClasses
      }
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 },
      }}
    >
      {children}
    </motion.p>
  );
}
