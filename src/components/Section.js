export default function Section({ children, className }) {
  return (
    <section
      className={
        "w-full h-full flex flex-col justify-center items-start" + className
      }
    >
      {children}
    </section>
  );
}
