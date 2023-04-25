export default function Paragraph({ text, darkBackground }) {
  return (
    <p
      className={`max-w-xl ${
        darkBackground ? "text-bgColorLight" : "text-bgColorDark"
      }`}
    >
      {text}
    </p>
  );
}
