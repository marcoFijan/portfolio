import Li from "../atoms/ListItem.js";

export default function UnorderedList({ data }) {
  return (
    <ul>
      {data.map(function (d) {
        return (
          <li
            className={
              "text-sm uppercase bg-bgColorLight text-bgColorDark px-8 py-2 mb-4 rounded-full"
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
