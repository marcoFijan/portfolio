import styles from "../styles/heroAnimation.module.css";
import NextLink from "../atoms/NextLink.js";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className=" w-screen min-h-screen flex justify-center items-center flex-col box-border">
      <div className=" w-3/4 max-w-xl mx-auto flex justify-center items-center flex-col">
        {/* Marco SVG */}
        <div className="flex gap-10 justify-center animate-[lines_3s_ease-in-out_forwards]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 287.71 52.7"
            className={styles.marco}
          >
            <title>MARCO</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="stoke"
                  d="M45,51.55l-.14-23L33.91,47H26.42L15.48,29.38V51.55H0V1.15H14L30.38,28l16-26.86h14l.14,50.4Z"
                />
                <path d="M103,42.77H83.88L80.5,51.55H63.22l22-50.4H102l22,50.4H106.42ZM98.35,30.53,93.46,17.86l-4.9,12.67Z" />
                <path d="M148.32,38.88h-4.61V51.55h-17V1.15H151a29.66,29.66,0,0,1,12.17,2.31A17.43,17.43,0,0,1,174,20.16a17.83,17.83,0,0,1-2.45,9.43A17.23,17.23,0,0,1,164.45,36L175,51.55H156.89Zm6.77-23.08a7.57,7.57,0,0,0-5.19-1.54h-6.19v11.8h6.19a7.57,7.57,0,0,0,5.19-1.54,5.58,5.58,0,0,0,1.73-4.36A5.58,5.58,0,0,0,155.09,15.8Z" />
                <path d="M192,49.36A25.12,25.12,0,0,1,182,40a25.9,25.9,0,0,1-3.64-13.65A25.87,25.87,0,0,1,182,12.71a25,25,0,0,1,10-9.36A30.67,30.67,0,0,1,206.42,0a31.6,31.6,0,0,1,13.11,2.59,24.33,24.33,0,0,1,9.5,7.49L218.3,19.66q-4.68-5.91-11-5.91a11.25,11.25,0,0,0-8.57,3.42q-3.24,3.42-3.24,9.18t3.24,9.18A11.25,11.25,0,0,0,207.29,39q6.33,0,11-5.9L229,42.62a24.24,24.24,0,0,1-9.5,7.49,31.6,31.6,0,0,1-13.11,2.59A30.66,30.66,0,0,1,192,49.36Z" />
                <path d="M244.65,49.32a25.25,25.25,0,0,1-13.82-23,25.25,25.25,0,0,1,13.82-23,33.31,33.31,0,0,1,29.24,0,25.25,25.25,0,0,1,13.82,23,25.25,25.25,0,0,1-13.82,23,33.31,33.31,0,0,1-29.24,0ZM265,37.4A11,11,0,0,0,269.06,33a13.93,13.93,0,0,0,1.51-6.66,14,14,0,0,0-1.51-6.66A11.08,11.08,0,0,0,265,15.3a11.33,11.33,0,0,0-11.44,0,11.08,11.08,0,0,0-4.07,4.39A14,14,0,0,0,248,26.35,13.93,13.93,0,0,0,249.48,33a11,11,0,0,0,4.07,4.39,11.33,11.33,0,0,0,11.44,0Z" />
              </g>
            </g>
          </svg>
          {/* Fijan SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 219.53 51.55"
            className={styles.fijan}
          >
            <title>FIJAN</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path d="M17,12.82v8.64H38V34.27H17V50.4H0V0H41V12.82Z" />
                <path d="M46.37,0h17V50.4h-17Z" />
                <path d="M73.62,49.64a19.63,19.63,0,0,1-7.89-5.58l9.15-10.8a16.6,16.6,0,0,0,4,3.75,7.49,7.49,0,0,0,4,1.22,5.17,5.17,0,0,0,4.07-1.58A6.85,6.85,0,0,0,88.34,32V12.82H71.21V0h33.91V31q0,10.29-5.29,15.44T84.31,51.55A28.47,28.47,0,0,1,73.62,49.64Z" />
                <path d="M146.16,41.62H127l-3.39,8.78H106.34l22-50.4h16.71l22,50.4H149.54Zm-4.68-12.24-4.9-12.68-4.89,12.68Z" />
                <path d="M219.53,0V50.4h-14L186.41,27.5V50.4H169.85V0h14L203,22.9V0Z" />
              </g>
            </g>
          </svg>
        </div>
        <section className="flex flex-wrap flex-col md:flex-row justify-between w-full">
          <p className="uppercase self-start md:self-auto text-lg text-white justify-self-start opacity-0 font-black animate-[becomeVisible_1s_ease-in-out_5s_normal_forwards]">
            #Frontend
          </p>
          <p className="uppercase self-center md:self-auto text-lg text-white justify-self-center opacity-0 font-black animate-[becomeVisible_1s_ease-in-out_5.5s_normal_forwards]">
            #User Interface
          </p>

          <p className="uppercase self-end md:self-auto text-lg text-white justify-self-end opacity-0 font-black animate-[becomeVisible_1s_ease-in-out_6s_normal_forwards]">
            #User Experience
          </p>
        </section>
        <div className="opacity-0 animate-[becomeVisible_1s_ease-in-out_6.5s_normal_forwards]">
          <NextLink href={"/contact"} text={"Neem contact op!"} cta={true} />
        </div>
      </div>
    </section>
  );
}
