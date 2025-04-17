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
      {...letterHover}
      animate={{
        color: isInView ? "#e57d1c" : "#4e5d67",
      }}
      transition={{ duration: 0.3 }}
      className="inline-block empty:w-4"
    >
      {char}
    </motion.span>
  );
}
