export default function Article({ children, customClasses }) {
  return (
    <article className={"w-full relative " + customClasses}>{children}</article>
  );
}
