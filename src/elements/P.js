import { motion } from "framer-motion";

export default function P({ children, className, intro }) {
  return (
    <motion.p
      className={`mb-4 font-light opacity-80    
        ${
          className
            ? className
            : intro
            ? "text-white text-lg md:text-xl lg:text-2xl max-w-[70rem]"
            : "text-white text-md md:text-lg lg:text-xl max-w-paragraph"
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
    </motion.p>
  );
}
