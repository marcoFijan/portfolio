export default function Input({ type, darkBackground }) {
  return (
    <input
      type={type}
      id={type}
      name={type}
      required
      className={`mb-8 mt-2 rounded-md ${
        darkBackground
          ? "shadow-inputField bg-bgColorLight valid:shadow-inputFieldDarkValid "
          : "shadow-inputField bg-bgColorLight valid:shadow-inputFieldValid "
      } p-2 border-2 border-white focus:bg-white focus:border-2 focus:outline-none focus:border-accentColor box-border`}
    />
  );
}
