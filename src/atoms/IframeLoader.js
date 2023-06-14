export default function DocumentLoader({ iframeSrc }) {
  return (
    <iframe
      src={iframeSrc}
      className="h-[17rem] md:h-[37rem] w-full shadow-button rounded-lg border-4 border-black border-box"
    />
  );
}
