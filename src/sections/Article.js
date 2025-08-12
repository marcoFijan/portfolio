export default function Article({ children, className }) {
  return (
    <article className={"w-full relative " + className}>{children}</article>
  );
}
