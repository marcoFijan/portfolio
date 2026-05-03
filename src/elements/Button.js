import Link from "next/link";
import React, { useState, useRef } from "react";
import Icon from "@/utilities/icon";

export default function Button({
  children,
  href,
  className = "",
  type = "primary",
  onClick,
  noBubble = false,
  alignRight = false,
  arrow = false,
  centered = false,
  icon,
  title = "Ga naar pagina",
}) {
  const [circleStyle, setCircleStyle] = useState({
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    width: "120%",
  });
  const buttonRef = useRef(null);
  const showBubble = !noBubble;

  const handleMouseMove = (e) => {
    if (!showBubble || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const centerX = rect.left + rect.width / 2;
    const offsetXFromCenter = Math.abs(
      ((e.clientX - centerX) / (rect.width / 2)) * 50,
    );
    const width = 115 + offsetXFromCenter * 2;

    setCircleStyle({
      top: `${y.toFixed(1)}%`,
      left: `${x.toFixed(1)}%`,
      transform: "translate(-50%, -50%) scale(1.5)",
      width: `${width.toFixed(1)}%`,
    });
  };

  const handleMouseLeave = () => {
    if (!showBubble) return;
    setCircleStyle((prev) => ({
      ...prev,
      transform: "translate(-50%, -50%) scale(0)",
    }));
  };

  const primaryStyles = `dark:text-color-accent text-color-accent-dark hover:text-color-bg-top backdrop-blur-[15px] py-5 ${centered ? "px-4 md:px-8" : "pl-0 pr-8 md:pr-16 hover:pl-4 hover:pr-4 hover:md:pl-8 hover:md:pr-8"}`;
  const secondaryStyles = `text-color-bg-top dark:text-white hover:text-white dark:hover:text-color-bg-top bg-color-glass/[0.05] backdrop-blur-[15px] py-5 ${centered ? "px-4 md:px-8" : "pl-0 pr-8 md:pr-16 hover:pl-4 hover:pr-4 hover:md:pl-8 hover:md:pr-8"}`;

  const typeStyles = {
    primary: primaryStyles,
    submit: secondaryStyles,
    secondary: secondaryStyles,
    ghost:
      "text-color-bg-top dark:text-white hover:text-white dark:hover:text-color-bg-top transition-colors duration-300 py-5 px-4",
  };
  const isGhost = type === "ghost";
  const baseClasses = `group cursor-pointer tracking-widest relative overflow-hidden flex transition-all duration-500 items-center rounded-full uppercase ${!isGhost ? "gap-2 text-sm md:text-md" : ""}`;
  const combinedClasses =
    `${baseClasses} ${typeStyles[type] || ""} ${className}`.trim();

  const bubbleColor =
    type === "primary" ? "bg-color-accent" : "bg-color-bg-top dark:bg-white";

  const Content = (
    <>
      {showBubble && (
        <span
          className={`pointer-events-none absolute aspect-square rounded-full transition-transform duration-700 ease-out ${bubbleColor}`}
          style={circleStyle}
        />
      )}
      <span
        className={`relative z-10 flex items-center transition-colors duration-300 ${!isGhost || icon ? "gap-2" : ""}`}
      >
        {icon && <Icon name={icon} />}
        {children}
        {arrow && (
          <Icon
            name="arrow"
            className="fill-current shrink-0 w-5 h-5 rotate-135 group-hover:rotate-540 transition-all duration-500"
          />
        )}
      </span>
    </>
  );

  return (
    <div
      ref={buttonRef}
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-max ${alignRight ? "ml-auto" : ""}`.trim()}
    >
      {href ? (
        <Link href={href} className={combinedClasses} title={title}>
          {Content}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type === "submit" ? "submit" : "button"}
          className={combinedClasses}
        >
          {Content}
        </button>
      )}
    </div>
  );
}
