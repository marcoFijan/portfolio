export default function H3({ text, darkBackground }) {
  return (
    <h4
      className={`text-sm md:text-lg uppercase font-black ${
        darkBackground
          ? "text-bgColorLight drop-shadow-[0_1.2px_1.2px_#12131a]"
          : "text-black drop-shadow-[0_1.2px_1.2px_#e7efff]"
      }`}
    >
      {text}
    </h4>
  );
}
