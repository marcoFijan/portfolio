export default function Paragraph({ text, darkBackground }) {
  return (
    <p
      className={`max-w-4xl w-full pb-4 ${
        darkBackground
          ? "text-bgColorLight drop-shadow-[0_1.2px_1.2px_#12131a]"
          : "text-bgColorDark drop-shadow-[0_1.2px_1.2px_#e7efff]"
      }`}
    >
      {text}
    </p>
  );
}
