import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function NextLink({
  children,
  href,
  className,
  type,
  onClick,
  noBubble,
  arrow = false,
  title = "Ga naar pagina",
}) {
  const bubbleHover = {
    whileHover: {
      scale: 1.06,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 8,
      },
    },
    transition: { duration: 0.3 },
  };
  // Static classes
  const baseClasses =
    "cursor-pointer flex transition-all ease-ease duration-500 items-center gap-1 text-md xl:text-lg rounded-2xl uppercase   ";

  // Optionally, handle conditional classes based on 'cta' or 'className' prop
  const typeClasses =
    type === "primary"
      ? "w-max backdrop-blur-[15px] hover:bg-color-accent hover:text-color-bg-top bg-transparent h-[50px] px-6 py-8 border-color-accent border-[2px] text-color-accent  "
      : type === "secondary"
      ? "w-max backdrop-blur-[15px] hover:scale-[105%] hover:bg-white hover:text-color-bg-top bg-color-glass/[0.05] border-color-white border-[2px] text-white h-[50px] px-6 py-8 "
      : type === "submit"
      ? "w-max backdrop-blur-[15px] hover:bg-color-accent hover:text-color-bg-top bg-transparent h-[50px] px-6 py-8 border-color-accent border-[2px] text-color-accent  "
      : type === "nav"
      ? "w-full text-white"
      : type === "navSocial"
      ? "w-max backdrop-blur-[15px] hover:text-color-accent fill-white hover:fill-color-accent bg-transparent h-[50px] border border-white/[0] border-opacity-0 px-8 py-8 text-white"
      : "text-white";
  const combinedClassNames = `${baseClasses} ${typeClasses} ${className}`;

  return (
    <motion.div className="w-max" {...(!noBubble ? bubbleHover : {})}>
      {href ? (
        <Link
          id="button"
          className={combinedClassNames}
          href={href}
          title={title}
        >
          {children}
          {arrow && (
            <svg
              viewBox="0 0 110 110"
              className="fill-inherit shrink-0 w-5 h-5 rotate-[135deg] group-hover:rotate-[540deg] transition-all duration-500"
            >
              <path d="m84.801 44.801h-56.902l7.1016-7.1016c2.1016-2 2.1016-5.3984 0-7.3984-2-2.1016-5.3984-2.1016-7.3984 0l-16 16c-2.1016 2-2.1016 5.3984 0 7.3984l16 16c1 1 2.3984 1.5 3.6992 1.5s2.6992-0.5 3.6992-1.5c2.1016-2 2.1016-5.3984 0-7.3984l-7.1016-7.1016h56.801c2.8984 0 5.1992-2.3984 5.1992-5.1992s-2.1992-5.1992-5.0977-5.1992z" />
            </svg>
          )}
        </Link>
      ) : (
        <button
          id="button"
          className={combinedClassNames}
          onClick={onClick}
          type="submit"
        >
          {children}
          {arrow && (
            <svg
              viewBox="0 0 110 110"
              className="fill-inherit shrink-0 w-5 h-5 rotate-[135deg] group-hover:rotate-[540deg] transition-all duration-500"
            >
              <path d="m84.801 44.801h-56.902l7.1016-7.1016c2.1016-2 2.1016-5.3984 0-7.3984-2-2.1016-5.3984-2.1016-7.3984 0l-16 16c-2.1016 2-2.1016 5.3984 0 7.3984l16 16c1 1 2.3984 1.5 3.6992 1.5s2.6992-0.5 3.6992-1.5c2.1016-2 2.1016-5.3984 0-7.3984l-7.1016-7.1016h56.801c2.8984 0 5.1992-2.3984 5.1992-5.1992s-2.1992-5.1992-5.0977-5.1992z" />
            </svg>
          )}
        </button>
      )}
    </motion.div>
  );
}
