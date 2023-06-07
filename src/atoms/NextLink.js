import Link from "next/link";

export default function NextLink({ text, href, cta }) {
  return (
    <div className="w-full grid justify-items-center">
      <Link
        id="button"
        className={`text-bgColorLight font-bold px-8 py-3 mt-4 inline-block rounded-lg text-center mx-auto place-self-center shadow-2xl transition duration-500 ease-in-out ${
          cta
            ? "bg-gradient-to-br from-[#f562b5] via-[#ac2873] to-[#f562b5]  shadow-ctaButton hover:shadow-ctaButtonHover"
            : "bg-gradient-to-br from-[#60667c] via-[#070709] to-[#60667c]  shadow-button hover:shadow-buttonHover"
        }`}
        href={href}
      >
        {text}
      </Link>
    </div>
  );
}
