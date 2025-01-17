import { motion } from "framer-motion";

export default function H2({ children, darkBackground, chapeau }) {
  return (
    <>
      {chapeau && (
        <motion.span
          className={`text-md leading-loose mb-8 uppercase font-light text-white text-opacity-50 pl-6 relative after:absolute after:content-[''] after:h-3 after:w-3 after:bg-white after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:opacity-100 after:border-1 after:border-black`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.1 },
          }}
        >
          {chapeau}
        </motion.span>
      )}
      <motion.h2
        className={`text-3xl md:text-4xl lg:text-5xl pt-4 leading-relaxed mb-8 font-black text-white`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.1 },
        }}
      >
        {children}
      </motion.h2>
    </>
  );
}
