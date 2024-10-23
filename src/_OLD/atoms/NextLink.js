import Link from "next/link";

export default function NextLink({ text, href, cta, lightBg }) {
  return (
    <div className="w-full grid justify-items-center">
      <Link
        id="button"
        className={`text-[#ffffff] font-bold px-8 py-3 mt-4 inline-block text-center mx-auto place-self-center rounded-full transition duration-500 ease-in-out ${
          cta
            ? "bg-gradient-to-r from-[#2E86AB] to-[#67b6dd]"
            : "text-accentColor"
        }`}
        href={href}
      >
        {text}
      </Link>
    </div>
  );
}
