export default function Container({ children, className }) {
  return (
    <div
      className={
        "w-full max-w-wrapper mx-auto px-wrapperMobile md:px-wrapper" +
        className
      }
    >
      {children}
    </div>
  );
}
