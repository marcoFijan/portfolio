export default function Button({ text, type, cta, lightBg }) {
  return (
    <button
      id="button"
      className={`text-white  font-bold px-8 py-3 mt-4 inline-block rounded-lg text-center mx-auto place-self-center shadow-2xl transition duration-500 ease-in-out ${
        lightBg ? "shadow-buttonLight" : "shadow-button"
      } ${
        cta
          ? "bg-gradient-to-br from-CTAColorLight via-CTAColorDark to-CTAColorLight hover:shadow-ctaButtonHover"
          : "bg-gradient-to-br from-[#60667c] via-[#070709] to-[#60667c] hover:shadow-buttonHover"
      }`}
      type={type}
    >
      {text}
    </button>
  );
}
