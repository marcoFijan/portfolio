import PageTemplate from "@/pages/pageTemplate";
import H1 from "@/elements/H1.js";
import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Li from "@/elements/Li.js";
import SvgDeviceOutline from "@/elements/SvgDeviceOutline.js";
import Button from "@/elements/Button.js";
import Divider from "@/elements/Divider.js";
import Action from "@/elements/Action.js";
import FlexArticle from "@/elements/FlexArticle.js";
import Container from "@/components/Container.js";
import Img from "@/elements/Img.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ProjectTemplate({ data }) {
    const baseClasses = "w-full h-full object-cover relative bg-black overflow-hidden";
    const borderClasses = "box-border rounded-2xl border-gray-300 border-0";
    const shadowClasses = "z-0 shadow-lg";
    const decorationClasses = "after:border-1 after:rounded-2xl after:border-color-border after:w-full after:-right-3 after:-bottom-3 md:after:-right-7 md:after:-bottom-7 after:absolute after:h-[100%] after:z-[-3] before:border-1 before:rounded-2xl before:border-color-border before:w-full before:-left-3 before:-top-3 md:before:-left-7 md:before:-top-7 before:absolute before:h-full before:z-[-3]";

    return (
        <PageTemplate projectPage title={data.meta.title}>
            <Container>
                <div className="text-center">
                    <H1 big chapeau={data.meta.chapeau}>
                        {data.meta.pageTitle}
                    </H1>
                </div>

                <div className="hidden lg:block relative w-full h-[10rem]">
                    <div className="absolute left-0 top-0 w-full">
                        <SvgDeviceOutline />
                    </div>
                </div>

                <article className="w-full lg:max-w-[80%] mx-auto">
                    <section className="mb-10 md:mb-20">
                        <Img
                            extraBorder
                            browserToolbar
                            src={data.hero.src}
                            alt={data.hero.alt}
                            className="block object-cover aspect-video w-full"
                        />
                    </section>

                    {data.hero.introTexts.map((text, i) => (
                        <P key={`intro-${i}`} intro>{text}</P>
                    ))}

                    <Action>
                        {data.hero.buttons.map((btn, i) => (
                            <Button key={`btn-${i}`} type={btn.type} href={btn.link}>
                                {btn.text}
                            </Button>
                        ))}
                    </Action>
                </article>

                <Divider />

                {data.contentBlocks.map((block, index) => {
                    switch (block.type) {

                        case "text-only":
                            return (
                                <article key={block.id} className="mb-10">
                                    {block.chapeau && <H2 chapeau={block.chapeau}>{block.title}</H2>}
                                    {!block.chapeau && <H2>{block.title}</H2>}
                                    <P>{block.text}</P>
                                </article>
                            );

                        case "image-text":
                            return (
                                <FlexArticle
                                    key={block.id}
                                    reverse={block.reverse}
                                    smallMargin
                                    alignTop
                                >
                                    <section className={block.sticky ? "lg:sticky top-30" : ""}>
                                        {block.chapeau && <H2 chapeau={block.chapeau}>{block.title}</H2>}
                                        {!block.chapeau && <H3>{block.title}</H3>}
                                        <P>{block.text}</P>
                                    </section>
                                    <div className="max-w-[50rem] mx-auto w-full">
                                        <Img src={block.image} alt={block.title} />
                                    </div>
                                </FlexArticle>
                            );

                        case "list":
                            return (
                                <article key={block.id} className="my-16">
                                    <H2 chapeau={block.chapeau}>{block.title}</H2>
                                    {block.description && <P>{block.description}</P>}

                                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                                        {block.lists.map((list, i) => (
                                            <div key={i} className="bg-gray-50/5 p-6 rounded-2xl border border-gray-800">
                                                <H3>{list.title}</H3>
                                                <ul className="list-disc pl-5 space-y-2 mt-4">
                                                    {list.items.map((item, j) => (
                                                        <Li key={j}>{item}</Li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            );

                        case "slider":
                            return (
                                <article key={block.id} className="grid relative grid-cols-1 gap-12 lg:grid-cols-2 gap-y-12 pt-20 my-16 xl:my-32 items-start">
                                    <section className={`lg:sticky top-30 ${block.reverseLayout ? "xl:order-2" : ""}`}>
                                        <H2 chapeau={block.chapeau}>{block.title}</H2>
                                        {block.descriptions
                                            ? block.descriptions.map((text, i) => <P key={i}>{text}</P>)
                                            : <P>{block.description}</P>
                                        }
                                    </section>

                                    <section className="relative">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <div className={`relative m-4 md:m-8 ${decorationClasses}`}>
                                                <div className={`${baseClasses} ${borderClasses} ${shadowClasses}`}>
                                                    <div className="w-full h-[50rem] bg-color-bg-top top 0 -z-10"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <Splide options={{ type: "infinite", rewind: true, arrows: true, pagination: true, gap: "4rem" }}>
                                            {block.slides.map((slide, i) => (
                                                <SplideSlide key={i}>
                                                    <Img
                                                        invisibleBorder
                                                        overflowScroll
                                                        src={slide.img}
                                                        alt={slide.title}
                                                        className="block object-contain object-top w-full"
                                                    />
                                                    <H3 className="text-center mt-4">{slide.title}</H3>
                                                    <P className="pb-8 text-white text-md lg:text-lg max-w-paragraph text-center opacity-90 mx-auto">
                                                        {slide.desc}
                                                    </P>
                                                </SplideSlide>
                                            ))}
                                        </Splide>
                                    </section>
                                </article>
                            );

                        case "divider":
                            return <Divider key={`divider-${index}`} />;

                        default:
                            return null;
                    }
                })}
            </Container>
        </PageTemplate>
    );
}