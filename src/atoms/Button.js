export default function Button({ text, type }) {
  return (
    <button
      className="mb-8 text-bgColorLight font-bold bg-CTAColor p-2 rounded-full"
      type={type}
    >
      {text}
    </button>
  );
}
