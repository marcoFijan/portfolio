"use client";

import { useEffect, useRef } from "react";
import Word from "./word";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export default function InfiniteTextBar({
  text = [],
  directionLeft = false,
  className = "",
}) {
  // 1. Tweak these to your liking
  const baseMagnitude = 1.2;      // Higher = faster default crawl
  const scrollSensitivity = 3;   // Lower = less "crazy" speed during scroll

  // 2. The Direction Multiplier: 1 for Left, -1 for Right
  const dirMult = directionLeft ? 0.5 : -0.5;

  const targetSpeed = useRef(baseMagnitude * dirMult);
  const speedRef = useRef(targetSpeed.current);

  const lastScrollY = useRef(0);
  const lastTime = useRef(0);
  const contentRef = useRef(null);
  const x = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    lastTime.current = performance.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime.current;
      const deltaY = currentScrollY - lastScrollY.current;

      if (deltaTime > 0 && Math.abs(deltaY) > 0) {
        const velocity = deltaY / deltaTime;

        // 3. Update target direction based on scroll
        // If scrolling Down (deltaY > 0), maintain primary direction
        // If scrolling Up (deltaY < 0), flip the primary direction
        if (deltaY > 0) {
          targetSpeed.current = baseMagnitude * dirMult;
        } else {
          targetSpeed.current = -baseMagnitude * dirMult;
        }

        // 4. Add a controlled boost based on scroll speed
        // We add to the current speed so it feels reactive, but keep it directional
        speedRef.current += velocity * scrollSensitivity * dirMult;
      }

      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    const step = () => {
      if (contentRef.current) {
        const halfWidth = contentRef.current.scrollWidth / 2;

        if (halfWidth > 0) {
          // Move x position
          x.current -= speedRef.current;

          // Seamless loop logic
          if (x.current <= -halfWidth) {
            x.current += halfWidth;
          } else if (x.current >= 0) {
            x.current -= halfWidth;
          }

          contentRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
        }
      }

      // 5. Ease back to the targetSpeed (the last scroll direction)
      // 0.05 is the friction. 
      speedRef.current += (targetSpeed.current - speedRef.current) * 0.05;

      requestAnimationFrame(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const animId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [dirMult]); // Re-sync if direction prop changes

  const renderText = (words) => {
    const wordArray = typeof words === "string" ? words.split(" ") : words;
    if (!Array.isArray(wordArray)) return null;

    return wordArray.map((word, i) => (
      <Word key={i} word={word} bold={i % 2 === 0} />
    ));
  };

  return (
    <div className="relative w-full overflow-x-clip overflow-y-visible pointer-events-none">
      <div
        className={`${workSans.className} overflow-hidden whitespace-nowrap absolute left-1/2 -translate-x-1/2 ${directionLeft ? "-rotate-[5deg]" : "rotate-[5deg]"
          } ${className}`}
        style={{
          color: "rgba(255, 255, 255, 0.08)",
          zIndex: 1,
          fontSize: "min(10vw, 100px)",
          width: "140vw",
          overflow: "visible"
        }}
      >
        <div className="flex">
          <div ref={contentRef} className="flex will-change-transform">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                {renderText(text)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[120px]" />
    </div>
  );
}