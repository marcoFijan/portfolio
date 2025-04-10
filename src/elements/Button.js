export default function Button({ text, type, cta, url }) {
  // Define the base and static class names
  const baseClasses =
    "text-white font-bold px-8 py-3 mt-4 inline-block text-center mx-auto place-self-center shadow-2xl transition duration-500 ease-in-out rounded-full";

  // Define the conditional class name based on 'cta'
  const ctaClass = cta
    ? "bg-gradient-to-r from-[#2E86AB] to-[#67b6dd]"
    : "text-accentColor";

  const hoverClasses = "hover:outline-1 hover:outline-white hover:bg-red-500";

  return (
    <button
      id="button"
      className={`${baseClasses} ${ctaClass} ${hoverClasses} hover:outline-white hover:bg-red-500`}
      type={type}
    >
      {text}
    </button>
  );
}
