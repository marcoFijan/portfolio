export default function H2({ text, darkBackground }) {
  return (
    <h3
      className={`text-lg md:text-xl lg:text-2xl uppercase font-black ${
        darkBackground
          ? "text-bgColorLight drop-shadow-[0_1.2px_1.2px_#12131a]"
          : "text-bgColorDark drop-shadow-[0_1.2px_1.2px_#e7efff]"
      }`}
    >
      {text}
    </h3>
  );
}
