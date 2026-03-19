import H1 from "@/elements/H1.js";
import Li from "@/elements/Li.js";
import P from "@/elements/P.js";
import Button from "@/elements/Button.js";
import Img from "@/elements/Img.js";
import SvgDeviceOutline from "@/elements/SvgDeviceOutline.js";

export default function ProjectIntro({ data }) {
    return (
        <>
            <div className="text-center">
                <H1 big chapeau={data.header.chapeau}>{data.header.title}</H1>
            </div>
            <div className="hidden lg:block relative w-full h-[10rem]">
                <div className="absolute left-0 top-0 w-full">
                    <SvgDeviceOutline />
                </div>
            </div>
            <section className="w-full lg:max-w-[80%] mx-auto ">
                <Img browserToolbar src={data.intro.heroImg} alt={data.intro.heroAlt} className="block object-cover aspect-video w-full object-top" />
                <article className="my-10 md:my-20">
                    <ul className="w-max mb-8 flex flex-col gap-4 max-w-full">
                        <Li className="px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl ">
                            <strong>Projectjaar:</strong> {data.intro.year}
                        </Li>
                        <Li className="px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl ">
                            <strong>Projectdoel:</strong> {data.intro.goal}
                        </Li>
                        <Li className="px-8 py-4 text-white border-color-border border-1 bg-color-bg-bottom rounded-2xl">
                            <strong>Doelgroep:</strong> {data.intro.target}
                        </Li>
                    </ul>
                    <P intro>{data.intro.text}</P>
                    <div className="flex flex-wrap gap-y-4 gap-x-8 mt-8">
                        <Button href={data.intro.buttons.primary.link} type="primary" className="group" arrow>
                            {data.intro.buttons.primary.text}
                        </Button>
                        <Button href={data.intro.buttons.secondary.link} type="secondary" className="group" arrow>
                            {data.intro.buttons.secondary.text}
                        </Button>
                    </div>
                </article>
            </section>
        </>
    );
}