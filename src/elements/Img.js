import Image from "next/image";

export default function Img({ href, src, alt, prio, noBorder, customClasses }) {
  const imageElement = (
    <div
      className={
        `bg-black rounded-3xl p-3 ${noBorder ? "" : "border"} ` + customClasses
      }
    >
      <Image
        className={
          "w-full h-full object-cover bg-gray-600 box-border rounded-2xl z-0"
        }
        src={src}
        alt={alt}
        priority={prio}
        width={1000}
        height={1000}
      />
    </div>
  );

  return href ? <a href={href}>{imageElement}</a> : imageElement;
}
