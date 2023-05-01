export default function H2({ text, darkBackground }) {
  return (
    <h3
      className={`text-2xl uppercase font-black ${
        darkBackground ? "text-bgColorLight" : "text-bgColorDark"
      }`}
    >
      {text}
    </h3>
  );
}
