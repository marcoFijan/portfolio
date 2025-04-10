export default function Section({ children, customClasses }) {
  return (
    <section
      className={
        "w-full h-full p-4 md:p-16 flex flex-col justify-center items-start" +
        customClasses
      }
    >
      {children}
    </section>
  );
}
