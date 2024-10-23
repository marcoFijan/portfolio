export default function P({ children, customClasses }) {
  return <p className={"text-white" + customClasses}>{children}</p>;
}
