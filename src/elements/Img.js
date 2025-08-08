import Image from "next/image";
import SvgBrowserToolbar from "./SvgBrowserToolbar";

export default function Img({
  href,
  src,
  alt,
  prio,
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
  } after:border-1 after:rounded-2xl after:border-opacity-10 after:w-full after:-right-7 after:-bottom-7 after:absolute after:h-[100%] after:z-[-3]`;
  const beforeClasses = `${
    invisibleBorder ? "before:border-transparent" : "before:border-color-border"
  } before:border-1 before:rounded-2xl before:border-opacity-10 before:w-full before:-left-7 before:-top-7 before:absolute before:h-full before:z-[-3]`;

  return (
    <>
      {noBorder ? (
        <Image
          className={`${className} ${uniqueBg ? uniqueBg : "bg-black"}`}
          src={src}
          alt={alt}
          priority={prio}
          width={2000}
          height={2000}
        />
      ) : (
        <div
          className={` relative m-8 ${afterClasses} ${beforeClasses} ${classNameWrapper}`}
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
                  width={2000}
                  height={2000}
                />
              </div>
            </div>
          ) : (
            <div
              className={`overflow-hidden bg-color-bg-bottom ${baseClasses} ${borderClasses} ${shadowClasses} ${
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
                width={2000}
                height={2000}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
