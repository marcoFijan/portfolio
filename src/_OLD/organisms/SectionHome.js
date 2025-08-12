export default function HomeSection({ children, amountOfPages }) {
  const pages = amountOfPages ? amountOfPages : "1";
  const heightClass = "h-" + pages + "00vh";

  return (
    <section className={"w-full flex relative " + heightClass}>
      {children}
    </section>
  );
}
