export default function Button({ text, type }) {
  return (
    <button
      className="text-bgColorLight font-bold bg-CTAColor px-16 py-3 rounded-full"
      type={type}
    >
      {text}
    </button>
  );
}
