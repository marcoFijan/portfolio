export default function Container({ children, className }) {
  return (
    <div
      className={
        "w-full max-w-wrapper mx-auto px-wrapper-mobile md:px-wrapper" +
        className
      }
    >
      {children}
    </div>
  );
}
