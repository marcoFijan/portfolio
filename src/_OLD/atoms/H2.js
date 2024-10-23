export default function H2({ text, darkBackground }) {
  return (
    <h3
      className={`text-lg md:text-xl lg:text-2xl uppercase font-black ${
        darkBackground ? "text-white" : "text-colorTextDark"
      }`}
    >
      {text}
    </h3>
  );
}
