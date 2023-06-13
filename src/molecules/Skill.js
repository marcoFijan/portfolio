import H3 from "../atoms/H3.js";

export default function Skill({ text, percentageClassname }) {
  return (
    <>
      <H3 text={text} />
      <div className="w-full h-3 bg-bgColorLight shadow-inputField rounded-full relative mb-4">
        <div
          className={`${percentageClassname} absolute h-3 bg-gradient-to-br from-accentColorDark to-accentColorLight rounded-full`}
        ></div>
      </div>
    </>
  );
}
