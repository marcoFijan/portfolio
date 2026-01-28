export default function Container({ children, className, amountOfPages }) {
  const heightClass = amountOfPages
    ? " h-" + (parseFloat(amountOfPages) * 100).toString() + "vh "
    : "";

  return (
    <section
      className={
        "w-full max-w-wrapper mx-auto px-wrapper-mobile md:px-wrapper " +
        className +
        heightClass
      }
    >
      {children}
    </section>
  );
}
