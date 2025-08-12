export default function Divider({ children, customClasses, noMargin }) {
  return (
    <div
      className={`${
        noMargin ? "my-0" : "my-10 lg:my-20"
      } rounded-full bg-color-border opacity-30 w-full h-1`}
    ></div>
  );
}
