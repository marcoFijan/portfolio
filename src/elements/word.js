"use client";
import { useRef, useState, useEffect } from "react";

export default function Letter({ word, bold }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      <span
        ref={ref}
        className={
          `inline-block empty:min-w-12 transition-colors duration-300 ` +
          (bold ? " font-bold " : " font-light ")
        }
        style={{
          color: isInView ? "#2e2e2e" : "#85858527",
        }}
      >
        {word}
      </span>
      <span className="bg-color-accent w-4 h-4 rounded-full"></span>
    </>
  );
}