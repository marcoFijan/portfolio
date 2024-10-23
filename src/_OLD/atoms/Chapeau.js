import { motion } from "framer-motion";
import styles from "@/styles/text/Text.module.scss";

export default function H3({children }) {
  return (
    <motion.span
    className={`${styles.chapeau}`}
      initial={{ opacity: 0, y: 25}}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 },
      }}
    >
      {children}
    </motion.span>
  );
}
