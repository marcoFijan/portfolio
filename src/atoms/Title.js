export default function H1({ text, darkBackground }) {
  return (
    <h1
      className={`text-4xl pt-4 md:text-6xl lg:text-6xl uppercase font-black ${
        darkBackground ? "text-bgColorLight" : "text-black"
      }`}
    >
      {text}
    </h1>
  );
}
