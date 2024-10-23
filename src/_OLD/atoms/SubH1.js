import { motion } from "framer-motion";

export default function SubH1({ text, darkBackground }) {
  return (
    <span
      className={`text-md block md:text-lg lg:text-xl uppercase font-black opacity-60 pb-12
    ${darkBackground ? "text-[#eb3030]" : "text-colorTextDark"}`}
    >
      {text}
    </span>
  );
}
