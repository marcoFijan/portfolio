export default function CornerSVG({ position, side, rotate = "" }) {
  const positionClasses = {
    top: "-top-29.5",
    bottom: "-bottom-29.5",
  };

  const sideClasses = {
    left: "-left-0",
    right: "-right-0",
  };

  const posClass = `${positionClasses[position]} ${sideClasses[side]}`;

  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-30 h-30 ${posClass} ${rotate}`}
    >
      <path
        d="M0 0C0 110.457 89.5431 200 200 200H0V0Z"
        className="fill-color-bg-bottom-light"
      />
    </svg>
  );
}