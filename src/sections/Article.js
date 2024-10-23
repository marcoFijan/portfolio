export default function Article({ children, customClasses }) {
  return (
    <article className={"w-full flex relative " + customClasses}>
      {children}
    </article>
  );
}
