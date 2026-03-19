import Image from "next/image";
import SvgBrowserToolbar from "./SvgBrowserToolbar";

export default function Img({
  src,
  alt,
  prio = false,
  classNameWrapper = "",
  className = "",
  contain,
  overflowScroll,
  browserToolbar,
  width = 2000,
  height = 2000,
  sizes = "(max-width: 768px) 100vw, 800px",
}) {
  if (overflowScroll) {
    return (
      <div
        className={`relative rounded-2xl overflow-hidden ${classNameWrapper}`}
      >
        <div className="max-h-[50rem] overflow-y-auto">
          <Image
            src={src}
            alt={alt}
            priority={prio}
            width={width}
            height={height}
            sizes={sizes}
            className={`w-full h-auto ${className}`}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${contain ? "" : "rounded-2xl overflow-hidden bg-black"} ${classNameWrapper}`}
    >
      {browserToolbar && <SvgBrowserToolbar />}
      <Image
        src={src}
        alt={alt}
        priority={prio}
        width={width}
        height={height}
        sizes={sizes}
        className={`w-full h-full ${contain ? "object-contain" : "object-cover"} ${className}`}
      />
    </div>
  );
}
