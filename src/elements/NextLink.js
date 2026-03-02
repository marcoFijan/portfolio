import Link from "next/link";
import React, { useState, useRef } from "react";
import Icon from "../utilities/icon.js";

export default function NextLink({
  children,
  href,
  className = "",
  type = "primary",
  onClick,
  noBubble = false,
  alignRight = false,
  arrow = false,
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
      transform: "translate(-50%, -50%) scale(1)",
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

  const typeStyles = {
    primary:
      "border border-color-accent text-color-accent hover:text-color-bg-top backdrop-blur-[15px] py-2 sm:py-5 px-4 sm:px-8",
    secondary:
      "border border-color-white text-white hover:text-color-bg-top bg-color-glass/[0.05] backdrop-blur-[15px] py-2 sm:py-5 px-4 sm:px-8",
    ghost:
      "text-white hover:text-color-bg-top transition-colors duration-300 py-2 sm:py-5 px-4 sm:px-4",
  };

  const isGhost = type === "ghost";
  const baseClasses = `cursor-pointer tracking-widest relative overflow-hidden flex transition-all duration-500 items-center rounded-full uppercase ${
    !isGhost ? "gap-2 text-sm xl:text-md" : ""
  }`;

  const combinedClasses =
    `${baseClasses} ${typeStyles[type] || ""} ${className}`.trim();
  const bubbleColor = type === "primary" ? "bg-color-accent" : "bg-white";

  const Content = (
    <>
      {showBubble && (
        <span
          className={`pointer-events-none absolute aspect-square rounded-full transition-transform duration-700 ease-out ${bubbleColor}`}
          style={circleStyle}
        />
      )}
      <span
        className={`relative z-10 flex items-center ${!isGhost || icon ? "gap-2" : ""}`}
      >
        {icon && <Icon name={icon} />}

        {children}

        {arrow && (
          <Icon
            name="arrow"
            className="fill-current shrink-0 w-5 h-5 rotate-[135deg] group-hover:rotate-[540deg] transition-all duration-500"
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
      className={`group w-max ${alignRight ? "ml-auto" : ""}`.trim()}
    >
      {href ? (
        <Link href={href} className={combinedClasses} title={title}>
          {Content}
        </Link>
      ) : (
        <button onClick={onClick} type="button" className={combinedClasses}>
          {Content}
        </button>
      )}
    </div>
  );
}
