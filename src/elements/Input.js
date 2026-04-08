export default function Input({ type, value, label }) {
  // Regular styling
  const regularClasses =
    "mb-8 mt-2 rounded-full bg-black/5 py-6 px-8 shadow-inputField text-black p-2 border-1 border-white";

  // Validation classes
  const validationClasses =
    "valid:bg-transparent valid:text-white valid:border-0 valid:rounded-none invalid:text-red-600";

  // Focus classes
  const focusClasses =
    "focus:bg-black focus:text-white focus:border-1 focus:outline-hidden focus:border-black";

  const hoverClasses = "hover:border-accent";

  const transitionClasses = "box-border transition-all duration-500";

  return (
    <>
      {label && (
        <label htmlFor={value} className="text-black">
          {label}
        </label>
      )}
      {type.toLowerCase() == "textarea" ? (
        <textarea
          type={type}
          id={value}
          name={value}
          rows="4"
          cols="50"
          required
          className={`${regularClasses} ${validationClasses} ${focusClasses} ${hoverClasses} ${transitionClasses} valid:border-1`}
        />
      ) : (
        <input
          type={type}
          id={value}
          name={value}
          required
          className={`${regularClasses} ${validationClasses} ${focusClasses} ${hoverClasses} ${transitionClasses} valid:border-b-1`}
        />
      )}
    </>
  );
}
