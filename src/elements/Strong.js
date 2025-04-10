export default function Strong({ children, className }) {
  const extras = className ? className : "";

  return (
    <strong className={`text-colorAccent font-bold` + extras}>
      {children}
    </strong>
  );
}
