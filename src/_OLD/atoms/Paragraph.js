import { motion } from "framer-motion";

export default function Paragraph({ text, darkBackground }) {
  return (
    <motion.p
      className={`max-w-4xl w-full pb-4 text-xl opacity-60 font-medium ${
        darkBackground ? "text-white" : "text-colorTextDark"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 0.6,
        transition: { duration: 1, delay: 0.5 },
      }}
    >
      {text}
    </motion.p>
  );
}
