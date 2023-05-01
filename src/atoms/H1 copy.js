export default function H1({ text, darkBackground }) {
  return (
    <h2
      className={`text-5xl uppercase font-black ${
        darkBackground ? "text-bgColorLight" : "text-bgColorDark"
      }`}
    >
      {text}
    </h2>
  );
}
