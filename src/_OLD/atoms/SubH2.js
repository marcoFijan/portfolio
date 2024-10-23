import { motion } from "framer-motion";

export default function SubH2({ text }) {
  return (
    <h4 className="text-sm md:text-md lg:text-lg uppercase font-black text-accentColor pb-12">
      {text}
    </h4>
  );
}
