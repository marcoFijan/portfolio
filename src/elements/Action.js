export default function Action({ children, className }) {
  const extras = className ? className : "";

  return (
    <div className={`flex gap-4 sm:gap-8 flex-wrap mt-6 sm:mt-12` + extras}>
      {children}
    </div>
  );
}
