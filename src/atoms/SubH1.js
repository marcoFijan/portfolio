import { motion } from "framer-motion";

export default function SubH1({ text }) {
  return (
    <span className="text-md block md:text-lg lg:text-xl uppercase font-black text-white opacity-60 pb-12 ">
      {text}
    </span>
  );
}
