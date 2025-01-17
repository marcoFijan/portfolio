export default function HomeSection({ children, amountOfPages, className }) {
  const pages = amountOfPages ? amountOfPages : "1";
  const heightClass = "h-" + pages + "00vh ";
  const extras = className ? className : "";

  return (
    <section className={"w-full relative " + heightClass + extras}>
      {children}
    </section>
  );
}
