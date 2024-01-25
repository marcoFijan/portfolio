export default function Button({ text, type, cta, lightBg }) {
  return (
    <button
      id="button"
      className={`text-[#ffffff] font-bold px-8 py-3 mt-4 inline-block text-center mx-auto place-self-center shadow-2xl transition duration-500 ease-in-out ${
        cta ? "bg-accentColor" : "text-accentColor"
      }`}
      type={type}
    >
      {text}
    </button>
  );
}
