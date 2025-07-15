import Image from "next/image";

export default function Img({
  href,
  src,
  alt,
  prio,
  noBorder,
  classNameWrapper,
  className,
}) {
  const baseClasses = "w-full h-full object-cover relative bg-black";
  const borderClasses = "box-border rounded-2xl border-gray-300 border-0";
  const shadowClasses = "z-0 shadow-lg";
  const afterClasses =
    "after:border-white after:border-1 after:rounded-2xl after:border-opacity-10 after:w-full after:-right-8 after:-bottom-8 after:absolute after:h-[100%] after:z-[-3]";
  const beforeClasses =
    "before:border-white before:border-1 before:rounded-2xl before:border-opacity-10 before:w-full before:-left-8 before:-top-8 before:absolute before:h-full before:z-[-3]";

  return (
    <>
      {noBorder ? (
        <Image
          className={`${className}`}
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
          <Image
            className={`${baseClasses} ${borderClasses} ${shadowClasses} ${className}`}
            src={src}
            alt={alt}
            priority={prio}
            width={1000}
            height={1000}
          />
        </div>
      )}
    </>
  );
}
