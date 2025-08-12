import { motion } from "framer-motion";

export default function li({ children, className, intro }) {
  return (
    <motion.li
      className={`font-light opacity-80    
        ${
          className
            ? className
            : intro
            ? "text-white text-lg md:text-xl lg:text-2xl max-w-[70rem]"
            : "text-white text-sm sm:text-md md:text-lg lg:text-xl max-w-paragraph"
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
    </motion.li>
  );
}
