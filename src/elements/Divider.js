export default function Divider({ noMargin }) {
  return (
    <div
      className={`${
        noMargin ? "my-0" : "my-10"
      } rounded-full bg-gradient-to-r from-transparent via-black/10 to-transparent w-1/2 mx-auto h-1 relative z-10`}
    ></div>
  );
}
