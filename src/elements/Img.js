import Image from "next/image";

export default function Img({ href, src, alt, prio, noBorder, customClasses }) {
  const baseClasses = "w-full h-full object-cover relative bg-gray-600";
  const borderClasses = "box-border rounded border-gray-300 border-0";
  const shadowClasses = "z-0 shadow-lg";
  const afterClasses =
    "after:border-white after:border-1 after:rounded after:border-opacity-10 mt-8 after:w-full after:-right-8 after:top-8 after:absolute after:h-full after:z-[-3] after:bottom-0";
  const beforeClasses =
    "before:border-white before:border-1 before:rounded before:border-opacity-10 mt-8 before:w-full before:-left-8 before:-top-8 before:absolute before:h-full before:z-[-3] before:top-0";

  return (
    <div
      className={` relative ${customClasses}, ${afterClasses} ${beforeClasses}`}
    >
      <Image
        className={`${baseClasses} ${borderClasses} ${shadowClasses}`}
        src={src}
        alt={alt}
        priority={prio}
        width={1000}
        height={1000}
      />
    </div>
  );
}
