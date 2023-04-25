import P from "../atoms/Paragraph.js";
import H1 from "../atoms/H1.js";
import H2 from "../atoms/H2.js";

export default function Article({
  transparent,
  header1,
  header2,
  paragraph1,
  paragraph2,
}) {
  return (
    <article className={`w-full ${transparent ? "" : "bg-bgColorLight"}`}>
      <H1 text={header1}></H1>
      <H2 text={header2}></H2>
      <P text={paragraph1}></P>
      {paragraph2 && <P text={paragraph2}></P>}
    </article>
  );
}
