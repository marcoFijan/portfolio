import H3 from "../atoms/H3.js";

export default function Skill({ text, percentageClassname }) {
  return (
    <>
      <H3 text={text} darkBackground={true} />
      <div className="w-full h-3 bg-colorBgDark shadow-inputField rounded-full relative mb-4">
        <div
          className={`${percentageClassname} absolute h-3 bg-linear-to-br from-accentColorDark to-accentColorLight rounded-full`}
        ></div>
      </div>
    </>
  );
}
