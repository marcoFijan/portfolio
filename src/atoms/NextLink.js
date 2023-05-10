import Link from "next/link";

export default function NextLink({ text, href, cta }) {
  return (
    <div className="w-full grid justify-items-center">
      <Link
        className={`text-bgColorLight bg-accentColor font-bold px-8 py-3 mt-4 inline-block rounded-full text-center mx-auto place-self-center ${
          cta && "bg-CTAColor"
        }`}
        href={href}
      >
        {text}
      </Link>
    </div>
  );
}
