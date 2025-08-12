import Image from "next/image";
import SvgBrowserToolbar from "./SvgBrowserToolbar";

export default function Img({
  href,
  src,
  alt,
  prio = false,
  noBorder,
  classNameWrapper,
  className,
  extraBorder,
  contain,
  uniqueBg,
  scrollable,
  overflowScroll,
  invisibleBorder,
  browserToolbar,
  width = 2000,
  height = 2000,
  sizes = "(max-width: 768px) 100vw, 800px",
}) {
  const baseClasses = `w-full h-full ${
    contain
      ? `${
          scrollable ? "overflow-scroll w-full" : "object-contain object-top "
        }`
      : "object-cover"
  } relative ${uniqueBg ? uniqueBg : "bg-black"}`;
  const borderClasses = `box-border ${overflowScroll ? "" : "rounded-2xl"} `;
  const shadowClasses = "z-0 shadow-lg";
  const afterClasses = `${
    invisibleBorder ? "after:border-transparent" : "after:border-color-border"
  } after:border-1 after:rounded-2xl after:border-opacity-10 after:w-full after:-right-3 after:-bottom-3 md:after:-right-7 md:after:-bottom-7 after:absolute after:h-[100%] after:z-[-3]`;
  const beforeClasses = `${
    invisibleBorder ? "before:border-transparent" : "before:border-color-border"
  } before:border-1 before:rounded-2xl before:border-opacity-10 before:w-full before:-left-3 before:-top-3 md:before:-left-7 md:before:-top-7 before:absolute before:h-full before:z-[-3]`;

  return (
    <>
      {noBorder ? (
        <Image
          className={`${className} ${uniqueBg ? uniqueBg : "bg-black "}`}
          src={src}
          alt={alt}
          loading={prio ? "eager" : "lazy"}
          width={width}
          height={height}
          sizes={sizes}
        />
      ) : (
        <div
          className={` relative m-4 md:m-8 ${afterClasses} ${beforeClasses} ${classNameWrapper}`}
        >
          {overflowScroll ? (
            <div className="overflow-hidden rounded-2xl">
              <div className="xl:max-h-[50rem] overflow-y-auto">
                <Image
                  className={`${baseClasses} ${borderClasses} ${shadowClasses} ${
                    extraBorder ? "border-color-bg-bottom border-2" : "border-0"
                  } ${className}`}
                  src={src}
                  alt={alt}
                  priority={prio}
                  loading={prio ? "eager" : "lazy"}
                  width={width}
                  height={height}
                  sizes={sizes}
                />
              </div>
            </div>
          ) : (
            <div
              className={`overflow-hidden ${
                uniqueBg ? uniqueBg : "bg-color-bg-bottom"
              }  ${baseClasses} ${borderClasses} ${shadowClasses} ${
                extraBorder ? "border-color-border border-2" : "border-0"
              } ${className}`}
            >
              {browserToolbar && <SvgBrowserToolbar />}
              <Image
                className={`w-full h-full ${
                  contain ? "object-contain" : "object-cover"
                } ${contain ? "object-top" : ""} ${className}`}
                src={src}
                alt={alt}
                priority={prio}
                loading={prio ? "eager" : "lazy"}
                width={width}
                height={height}
                sizes={sizes}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
