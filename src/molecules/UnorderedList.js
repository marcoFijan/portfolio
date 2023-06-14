export default function UnorderedList({ data }) {
  return (
    <ul>
      {data.map(function (d) {
        return (
          <li
            className={
              "text-sm bg-bgColorDark font-extralight text-bgColorLight shadow-darkInner px-4 py-2 mb-4 rounded-xl"
            }
            key={d}
          >
            {d}
          </li>
        );
      })}
    </ul>
  );
}
