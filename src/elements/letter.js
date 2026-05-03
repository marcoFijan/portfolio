"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Letter({ char, letterHover }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    amount: "some",
  });

  return (
    <motion.span
      ref={ref}
      animate={{
        color: isInView ? "#e57d1c" : "#3b3b3b27",
      }}
      transition={{ duration: 0.3 }}
      className="inline-block empty:min-w-12 text-[#3b3b3b27]"
    >
      {char}
    </motion.span>
  );
}
