import Image from "next/image";
import marcoPointingAtText from "../../public/images/marcoPointing.png";

export default function MainCanvas({ title, subTitle, introduction }) {
  return (
    <article className="bg-bgColorDark w-full h-screen max-w-wrapper mx-auto">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <Image
        className="w-full h-auto block self-end"
        src={marcoPointingAtText}
        alt="Picture of Marco Fijan pointing to text"
      />
      <p>{introduction}</p>
    </article>
  );
}
