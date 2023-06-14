import Link from "next/link";

export default function NextLink({ text, href, cta, lightBg }) {
  return (
    <div className="w-full grid justify-items-center">
      <Link
        id="button"
        className={`text-white font-bold px-8 py-3 mt-4 inline-block rounded-lg text-center mx-auto place-self-center shadow-2xl transition duration-500 ease-in-out ${
          lightBg ? "shadow-buttonLight" : "shadow-button"
        } ${
          cta
            ? "bg-gradient-to-br from-CTAColorLight via-CTAColorDark to-CTAColorLight hover:shadow-ctaButtonHover"
            : "bg-gradient-to-br from-bgColorDarkLight via-bgColorDarkDark to-bgColorDarkLight hover:shadow-buttonHover"
        }`}
        href={href}
      >
        {text}
      </Link>
    </div>
  );
}
