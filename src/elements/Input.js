import React from "react";

export default function Input({
  type = "text",
  id,
  name,
  value,
  onChange,
  label,
  required = false,
}) {
  const isTextarea = type.toLowerCase() === "textarea";
  const inputClasses = `
    peer w-full box-border transition-all duration-500
    rounded-2xl bg-black/5 px-8 pt-7 pb-3 text-black
    shadow-inputField border border-white outline-none
    hover:border-accent
    focus:bg-black focus:text-white focus:border-black
    valid:border-b-1
  `
    .replace(/\s+/g, " ")
    .trim();

  const labelClasses = `
    absolute left-8 pointer-events-none transition-all duration-300 text-black/60
    top-1/2 -translate-y-1/2
    peer-focus:top-4 peer-focus:text-[11px] peer-focus:text-white/60
    peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-black/60
    peer-focus:peer-[:not(:placeholder-shown)]:text-white/60
  `
    .replace(/\s+/g, " ")
    .trim();

  const textareaLabelClasses = `
    absolute left-8 pointer-events-none transition-all duration-300 text-black/60
    top-6 -translate-y-1/2
    peer-focus:top-4 peer-focus:text-[11px] peer-focus:text-white/60
    peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-black/60
    peer-focus:peer-[:not(:placeholder-shown)]:text-white/60
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div className="relative w-full">
      {isTextarea ? (
        <textarea
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          rows="4"
          required={required}
          placeholder=" "
          className={`${inputClasses} min-h-30`}
        />
      ) : (
        <input
          type={type}
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder=" "
          className={inputClasses}
        />
      )}

      {label && (
        <label
          htmlFor={id || name}
          className={isTextarea ? textareaLabelClasses : labelClasses}
        >
          {label}
        </label>
      )}
    </div>
  );
}
