export default function H3({ text, darkBackground }) {
  return (
    <h4
      className={`text-sm md:text-lg uppercase font-black ${
        darkBackground ? "text-white" : "text-colorTextDark"
      }`}
    >
      {text}
    </h4>
  );
}
