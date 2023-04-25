import Link from "next/link";

export default function NextLink({ text, href }) {
  return (
    <Link
      className="text-bgColorLight font-bold bg-CTAColor px-16 py-3 rounded-full"
      href={href}
    >
      {text}
    </Link>
  );
}
