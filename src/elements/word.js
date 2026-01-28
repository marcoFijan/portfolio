"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Letter({ word, letterHover, bold }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    amount: "some",
  });

  return (
    <>
      <motion.span
        ref={ref}
        animate={{
          color: isInView ? "#1f1f1f" : "#3b3b3b27",
        }}
        transition={{ duration: 0.3 }}
        className={
          "inline-block empty:min-w-12 text-[#3b3b3b27]" +
          (bold ? " font-black " : "font-light")
        }
      >
        {word}
      </motion.span>
      <span className="bg-color-accent w-4 h-4 rounded-full"></span>
    </>
  );
}
