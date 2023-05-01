export default function Paragraph({ text, darkBackground }) {
  return (
    <p
      className={`max-w-4xl w-full pb-4 ${
        darkBackground ? "text-bgColorLight" : "text-bgColorDark"
      }`}
    >
      {text}
    </p>
  );
}
