export default function Strong({ children, className }) {
  const extras = className ? className : "";

  return (
    <strong className={`text-color-accent font-bold` + extras}>
      {children}
    </strong>
  );
}
