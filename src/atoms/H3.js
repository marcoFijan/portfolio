export default function H3({ text, darkBackground }) {
  return (
    <h4
      className={`text-md md:text-lg lg:text-xl uppercase font-black ${
        darkBackground
          ? "text-bgColorLight drop-shadow-[0_1.2px_1.2px_#12131a]"
          : "text-bgColorDark drop-shadow-[0_1.2px_1.2px_#e7efff]"
      }`}
    >
      {text}
    </h4>
  );
}
