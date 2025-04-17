"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import Letter from "./letter";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function InfiniteTextBar({
  text = "Placeholder",
  directionLeft = false,
  className,
}) {
  const animateText = text.toString();
  const defaultSpeed = directionLeft ? 1 : -1;
  const speedRef = useRef(defaultSpeed);
  const [speed, setSpeed] = useState(defaultSpeed);
  const scroll = useScroll();
  const lastOffset = useRef(0);
  const scrollSpeed = useRef(0);
  const lastDirectionRef = useRef(1); // 1 for forward, -1 for backward

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef();
  const x = useRef(0);

  useEffect(() => {
    console.log(" dirction", directionLeft);

    const step = () => {
      if (containerRef.current && contentRef.current) {
        const contentWidth = contentRef.current.offsetWidth / 2;

        x.current -= speedRef.current;
        if (Math.abs(x.current) >= contentWidth) {
          x.current = 0;
        }

        contentRef.current.style.transform = `translateX(${x.current}px)`;
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useFrame((state, delta) => {
    const currentOffset = scroll.offset;
    const diff = currentOffset - lastOffset.current;
    scrollSpeed.current = diff / delta;
    lastOffset.current = currentOffset;

    const calculatedSpeed = defaultSpeed * scrollSpeed.current * 100;

    if (Math.abs(scrollSpeed.current) > 0.001) {
      // Save the current direction
      lastDirectionRef.current = scrollSpeed.current > 0 ? 1 : -1;

      // Update speed with direction and cap the minimum
      speedRef.current =
        Math.abs(calculatedSpeed) > 0.5
          ? calculatedSpeed
          : defaultSpeed * lastDirectionRef.current;
    } else {
      // Scroll stopped or at limit — keep moving at base speed in last direction
      speedRef.current = defaultSpeed * lastDirectionRef.current;
    }
  });

  const letterHover = {
    whileHover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const renderText = (text) =>
    [...text].map((char, i) => (
      <Letter key={i} char={char} letterHover={letterHover} />
    ));

  return (
    <div
      className={`${
        orbitron.className
      } overflow-hidden border-y-2 border-colorWhiteSoft bg-colorBg text-colorWhiteSoft text-[7vw]  h-max whitespace-nowrap absolute  cursor-default left-1/2 -translate-x-1/2 ${
        directionLeft ? "-rotate-[5deg] " : "rotate-[5deg] "
      } ${className} `}
    >
      <div ref={containerRef} className="relative w-full">
        <div
          ref={contentRef}
          className="flex will-change-transform"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex">
              {renderText(animateText)}
              {renderText(animateText)}
              {renderText(animateText)}
              {renderText(animateText)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
