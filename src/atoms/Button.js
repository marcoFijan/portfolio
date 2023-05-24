export default function Button({ text, type, cta }) {
  return (
    <button
      className={`text-bgColorLight  font-bold px-8 py-3 mt-4 inline-block rounded-lg text-center mx-auto place-self-center shadow-2xl transition duration-500 ease-in-out ${
        cta
          ? "bg-gradient-to-br from-[#f562b5] to-[#ac2873] shadow-ctaButton hover:shadow-ctaButtonHover"
          : "bg-gradient-to-br from-[#60667c] to-[#070709] shadow-button hover:shadow-buttonHover"
      }`}
      type={type}
    >
      {text}
    </button>
  );
}
