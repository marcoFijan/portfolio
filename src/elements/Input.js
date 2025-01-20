export default function Input({ type, value, label }) {
  // Regular styling
  const regularClasses =
    "mb-8 mt-2 rounded-lg shadow-inputField bg-transparent text-white p-2 border-1 border-white";

  // Validation classes
  const validationClasses =
    "valid:bg-transparent valid:text-white valid:border-0 valid:border-b-1 valid:rounded-none invalid:border-red-700";

  // Focus classes
  const focusClasses =
    "focus:bg-white focus:text-colorBg focus:border-1 focus:outline-none focus:border-yellow-600 focus:rounded-lg";

  // Hover classes
  const hoverClasses = "hover:border-yellow-600";

  // Transition classes
  const transitionClasses = "box-border transition-all";

  return (
    <>
      <label htmlFor={value} className={"text-white"}>
        {label}
      </label>
      <input
        type={type}
        id={value}
        name={value}
        required
        className={`${regularClasses} ${validationClasses} ${focusClasses} ${hoverClasses} ${transitionClasses}`}
      />
    </>
  );
}
