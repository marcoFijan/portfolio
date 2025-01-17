import { motion } from "framer-motion";

export default function H1({ children, darkBackground, chapeau }) {
  // const darkBackground = this.prop.darkBackground;

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
      <motion.h1
        className={`text-4xl pt-4 md:text-6xl lg:text-7xl font-semibold leading-loose md:leading-loose lg:leading-tight ${
          darkBackground ? "text-white" : "text-colorTextDark"
        }`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.1 },
        }}
      >
        {children}
      </motion.h1>
    </>
  );
}
