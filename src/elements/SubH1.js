import { motion } from "framer-motion";

export default function SubH1({ children }) {
  return (
    <motion.span
      className="text-xl md:text-2xl lg:text-3xl block uppercase font-black text-white opacity-60  pb-12"
      initial={{ opacity: 0, y: -25 }}
      whileInView={{
        opacity: 0.6,
        y: 0,
        transition: { duration: 0.5, delay: 0.5 },
      }}
    >
      {children}
    </motion.span>
  );
}
