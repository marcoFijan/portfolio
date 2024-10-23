export default function ListItem({ data }) {
  return (
    <li className="text-md uppercase bg-CTAColor text-white p-12">
      {data.result.map((i) => (
        <span key={i}>{i}</span>
      ))}
    </li>
  );
}
