export default function Input({ type }) {
  return (
    <input
      type={type}
      id={type}
      name={type}
      required
      className="mb-8 mt-2 rounded-lg shadow-inputField bg-bgColorLight p-2 valid:shadow-inputFieldValid focus:bg-white focus:border-2 focus:outline-none focus:border-accentColor box-border"
    />
  );
}
