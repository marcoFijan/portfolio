export default function CornerSVG({ position, side, rotate = "" }) {
  const posClass = `${position}-0 -${side}-29.5`;
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
