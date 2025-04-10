export default function HomeSection({ children, amountOfPages, className }) {
  const pages = amountOfPages ? amountOfPages : "1";
  console.log(pages, parseFloat(pages), pages * 100);
  const heightClass = "h-" + (parseFloat(pages) * 100).toString() + "vh ";
  const extras = className ? className : "";

  return (
    <section className={"w-full relative " + heightClass + extras}>
      {children}
    </section>
  );
}
