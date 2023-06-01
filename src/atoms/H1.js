export default function H1({ text, darkBackground }) {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl uppercase font-black  ${
        darkBackground
          ? "text-bgColorLight drop-shadow-[0_1.2px_1.2px_#12131a]"
          : "text-bgColorDark drop-shadow-[0_1.2px_1.2px_#e7efff]"
      }
      `}
    >
      {text}
    </h2>
  );
}
