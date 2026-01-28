"use client";

import { useEffect, useRef, useState } from "react";

export default function InViewAnimate({
  children,
  className = "",
  threshold = 0.2,
  duration = 500,
  delay = 100,
  translateY = 25,
  once = true,
  as: Component = "div",
  splitText = false,
  stagger = 30,
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) setHasAnimated(true);
        } else if (!once && !hasAnimated) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin: "0px" },
    );

    observer.observe(element);
    return () => element && observer.unobserve(element);
  }, [threshold, once, hasAnimated]);

  const shouldAnimate = once ? hasAnimated : isInView;

  // Logic for staggered character animation (Opacity only)
  if (splitText && typeof children === "string") {
    return (
      <Component ref={ref} className={className}>
        {children.split("").map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: shouldAnimate ? 1 : 0,
              // Transform removed here for character mode
              transition: `opacity ${duration}ms ease ${delay + index * stagger}ms`,
              willChange: "opacity",
            }}
          >
            {char}
          </span>
        ))}
      </Component>
    );
  }

  // Default behavior (Keeps the translateY animation)
  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate
          ? "translateY(0)"
          : `translateY(${translateY}px)`,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
}
