import Link from "next/link";

export default function NextLink({ text, href }) {
  return (
    <div className="w-full grid justify-items-center">
      <Link
        className="text-bgColorLight font-bold bg-CTAColor px-8 py-3 mt-4 inline-block rounded-full text-center mx-auto place-self-center"
        href={href}
      >
        {text}
      </Link>
    </div>
  );
}
