import Link from "next/link";

export default function NextLink({ text, href }) {
  return (
    <Link
      className="text-bgColorLight font-bold bg-CTAColor px-16 py-3 mt-4 inline-block justify-self-center rounded-full text-center"
      href={href}
    >
      {text}
    </Link>
  );
}
