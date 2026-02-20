import Link from "next/link";
import React, { useState, useRef } from "react";

export default function NextLink({
  children,
  href,
  className = "",
  type = "primary",
  onClick,
  noBubble,
  alignRight = false,
  arrow = false,
  title = "Ga naar pagina",
}) {
  const [circleStyle, setCircleStyle] = useState({
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    width: "120%",
  });

  const buttonRef = useRef(null);
  const isNav = type === "nav";
  const showBubble = !noBubble && !isNav;

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
      "border border-color-accent text-color-accent hover:text-color-bg-top backdrop-blur-[15px] py-2 sm:py-5 px-4 sm:px-8 ",
    secondary:
      "border border-color-white text-white hover:text-color-bg-top bg-color-glass/[0.05] backdrop-blur-[15px] py-2 sm:py-5 px-4 sm:px-8 ",
    nav: "text-white w-full group-hover:text-color-accent transition-colors duration-300 py-2 sm:py-5 px-4 sm:px-8 ",
    logo: "p-2 bg-transparent border-transparent hover:border-color-border hover:bg-color-bg-bottom/[0.3] ",
    navSocial:
      "text-white hover:text-color-bg-top transition-colors duration-300 py-2 sm:py-5 px-4 sm:px-4 ",
  };

  const isSocial = type === "navSocial";
  const baseClasses = `cursor-pointer tracking-widest relative overflow-hidden flex transition-all duration-500 items-center rounded-full uppercase ${!isNav && !isSocial ? "gap-2 text-sm xl:text-md" : ""}`;
  const combinedClasses = `${baseClasses} ${typeStyles[type] || ""} ${className}`;

  const bubbleColor =
    type === "secondary" || type === "logo" || type === "navSocial"
      ? "bg-white"
      : "bg-color-accent";

  const Content = (
    <>
      {showBubble && (
        <span
          className={`pointer-events-none absolute aspect-square rounded-full transition-transform duration-700 ease-out ${bubbleColor}`}
          style={circleStyle}
        />
      )}
      <span
        className={`relative z-10 flex items-center gap-2 ${!isNav && !isSocial ? "gap-2" : ""}`}
      >
        {children}
        {arrow && (
          <svg
            viewBox="0 0 110 110"
            className="fill-current shrink-0 w-5 h-5 rotate-[135deg] group-hover:rotate-[540deg] transition-all duration-500"
          >
            <path d="m84.801 44.801h-56.902l7.1016-7.1016c2.1016-2 2.1016-5.3984 0-7.3984-2-2.1016-5.3984-2.1016-7.3984 0l-16 16c-2.1016 2-2.1016 5.3984 0 7.3984l16 16c1 1 2.3984 1.5 3.6992 1.5s2.6992-0.5 3.6992-1.5c2.1016-2 2.1016-5.3984 0-7.3984l-7.1016-7.1016h56.801c2.8984 0 5.1992-2.3984 5.1992-5.1992s-2.1992-5.1992-5.0977-5.1992z" />
          </svg>
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
      className={`group ${isNav ? "w-full" : "w-max"} ${alignRight ? "ml-auto" : ""}`}
    >
      {href ? (
        <Link href={href} className={combinedClasses} title={title}>
          {Content}
        </Link>
      ) : (
        <button onClick={onClick} type="submit" className={combinedClasses}>
          {Content}
        </button>
      )}
    </div>
  );
}
