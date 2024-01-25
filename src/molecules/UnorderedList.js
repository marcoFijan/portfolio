export default function UnorderedList({ data, lightBg }) {
  return (
    <ul className="list-disc ml-4">
      {data.map(function (d) {
        return (
          <li
            className={`${
              lightBg
                ? "text-white font-medium italic md:text-sm text-xs"
                : "bg-bgColorDark text-bgColorLight px-4 py-1 text-sm shadow-darkInner font-extralight"
            } mb-2 rounded-xl`}
            key={d}
          >
            {d}
          </li>
        );
      })}
    </ul>
  );
}
