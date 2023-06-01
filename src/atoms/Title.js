export default function H1({ text, darkBackground }) {
  return (
    <h1
      className={`text-4xl md:text-6xl lg:text-7xl uppercase font-black ${
        darkBackground ? "text-bgColorLight" : "text-bgColorDark"
      }`}
    >
      {text}
    </h1>
  );
}
