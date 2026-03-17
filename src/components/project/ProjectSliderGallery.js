import P from "@/elements/P.js";
import FlexArticle from "@/elements/FlexArticle.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const baseClasses = "w-full h-full object-cover relative bg-black overflow-hidden";
const borderClasses = "box-border rounded-2xl border-gray-300 border-0";
const shadowClasses = "z-0 shadow-lg";
const afterClasses = "after:border-1 after:rounded-2xl after:border-color-border after:w-full after:-right-3 after:-bottom-3 md:after:-right-7 md:after:-bottom-7 after:absolute after:h-[100%] after:z-[-3]";
const beforeClasses = "before:border-1 before:rounded-2xl before:border-color-border before:w-full before:-left-3 before:-top-3 md:before:-left-7 md:before:-top-7 before:absolute before:h-full before:z-[-3]";

export default function ProjectSliderGallery({ text, images, reverse }) {
    return (
        <FlexArticle reverse={reverse} smallMargin>
            <P className="max-w-full lg:max-w-1/2 text-color-accent text-lg md:text-xl lg:text-2xl justify-self-center text-center">
                {text}
            </P>
            <div className={` relative m-4 md:m-8 ${afterClasses} ${beforeClasses}`}>
                <div className={`${baseClasses} ${borderClasses} ${shadowClasses}`}>
                    <Splide
                        options={{
                            type: "fade", rewind: true, autoplay: true,
                            interval: 4000, speed: 2000, arrows: false, pagination: false,
                        }}
                    >
                        {images.map((imgSrc, i) => (
                            <SplideSlide key={i}>
                                <Img noBorder src={imgSrc} alt="Gallery image" className="block object-cover aspect-video w-full" />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </FlexArticle>
    );
}