import NextLink from "@/elements/NextLink";
import { useState } from "react";

export default function ReadMore({ children, className, buttonText }) {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section>
      <article
        className={`${
          infoOpen
            ? "max-h-[1000px] border-opacity-30 px-12 py-8 backdrop-blur-[15px] bg-color-glass/[0.5] border-white"
            : "max-h-0 p-0 bg-transparent border-transparent"
        }  overflow-hidden box-border transition-all duration-500 ease-in-out h-max border border-opacity-0 rounded-tr-lg rounded-tl-lg rounded-bl-lg text-left max-w-paragraph ${className}`}
      >
        {children}
      </article>
      <button
        className={
          "flex transition-all ml-auto duration-500 items-center gap-1 ease-in-out hover:border-color-accent border text-lg xl:text-xl  w-max backdrop-blur-[15px] hover:bg-white hover:text-color-accent-dark bg-color-accent-dark text-white h-[50px] px-8 py-8 " +
          (infoOpen
            ? "rounded-br-[0.5rem] rounded-bl-[0.5rem] rounded-tl-none rounded-tr-none border-t-transparent  bg-color-glass/[0.5]"
            : "rounded-[0.5rem] border-transparent bg-color-accent-dark")
        }
        onClick={() => setInfoOpen(!infoOpen)}
      >
        <span>{infoOpen ? "Sluiten" : buttonText}</span>
      </button>
    </section>
  );
}
