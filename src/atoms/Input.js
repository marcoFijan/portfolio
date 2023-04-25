export default function Input({ type }) {
  return (
    <input
      type={type}
      id={type}
      name={type}
      required
      className="mb-8 rounded-md border border-bgColorDark p-2"
    />
  );
}
