import Link from "next/link";

export default function NextLink({
  children,
  href,
  className,
  type,
  onClick,
  arrow = false,
  title = "Ga naar pagina",
}) {
  // Static classes
  const baseClasses =
    "flex transition duration-500 items-center gap-1 ease-in-out w-max";

  // Optionally, handle conditional classes based on 'cta' or 'className' prop
  const typeClasses =
    type === "primary"
      ? "backdrop-blur-[15px] hover:bg-zinc-100/[0.1] hover:border-colorAccent bg-colorAccent h-[50px] border border-colorAccent border-opacity-100 rounded-full text-white px-6 font-bold "
      : type === "secondary"
      ? "backdrop-blur-[15px] hover:bg-zinc-100/[0.05] hover:border-opacity-30 bg-transparent h-[50px] border border-white border-opacity-0 px-4 rounded-full text-white"
      : "text-white"; // Example for 'cta' condition
  const combinedClassNames = `${baseClasses} ${typeClasses} ${className}`;

  return (
    <>
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
              className="fill-white shrink-0 w-5 h-5 rotate-[135deg] group-hover:rotate-[540deg] transition-all duration-500"
            >
              <path d="m84.801 44.801h-56.902l7.1016-7.1016c2.1016-2 2.1016-5.3984 0-7.3984-2-2.1016-5.3984-2.1016-7.3984 0l-16 16c-2.1016 2-2.1016 5.3984 0 7.3984l16 16c1 1 2.3984 1.5 3.6992 1.5s2.6992-0.5 3.6992-1.5c2.1016-2 2.1016-5.3984 0-7.3984l-7.1016-7.1016h56.801c2.8984 0 5.1992-2.3984 5.1992-5.1992s-2.1992-5.1992-5.0977-5.1992z" />
            </svg>
          )}
        </Link>
      ) : (
        <button id="button" className={combinedClassNames} onClick={onClick}>
          {children}
          {arrow && (
            <svg
              viewBox="0 0 110 110"
              className="fill-white shrink-0 w-5 h-5 rotate-[135deg] group-hover:rotate-[540deg] transition-all duration-500"
            >
              <path d="m84.801 44.801h-56.902l7.1016-7.1016c2.1016-2 2.1016-5.3984 0-7.3984-2-2.1016-5.3984-2.1016-7.3984 0l-16 16c-2.1016 2-2.1016 5.3984 0 7.3984l16 16c1 1 2.3984 1.5 3.6992 1.5s2.6992-0.5 3.6992-1.5c2.1016-2 2.1016-5.3984 0-7.3984l-7.1016-7.1016h56.801c2.8984 0 5.1992-2.3984 5.1992-5.1992s-2.1992-5.1992-5.0977-5.1992z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
