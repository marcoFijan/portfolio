import NextLink from "@/elements/NextLink";
import { useState } from "react";

export default function ReadMore({ children, className, buttonText }) {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section>
      <article
        className={`${
          infoOpen
            ? "max-h-[1000px] border-opacity-30 px-12 py-8 backdrop-blur-[15px] bg-colorBg/[0.7]"
            : "max-h-0 p-0 bg-transparent"
        }  overflow-hidden box-border transition-all duration-500 ease-in-out h-max border border-white border-opacity-0 rounded-tr rounded-tl rounded-bl text-left max-w-paragraph ${className}`}
      >
        {children}
      </article>
      <button
        className={
          "flex transition-all ml-auto duration-500 items-center gap-1 ease-in-out w-max backdrop-blur-[15px] hover:border-colorAccent h-[50px] border border-white text-white px-8 py-8 font-bold text-lg lg:text-xl xl:text-2xl " +
          (infoOpen
            ? "rounded-br rounded-bl rounded-tl-none rounded-tr-none border-t-colorBg -mt-[1px] backdrop-blur-[15px] bg-colorBg/[0.5] hover:bg-colorBg/[0.1] border-opacity-30"
            : "rounded bg-colorBg/[0.5] hover:bg-zinc-100/[0.1] border-opacity-100")
        }
        onClick={() => setInfoOpen(!infoOpen)}
      >
        <span>{infoOpen ? "Sluiten" : buttonText}</span>
      </button>
    </section>
  );
}
