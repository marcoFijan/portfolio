import H2 from "@/elements/H2.js";
import H3 from "@/elements/H3.js";
import P from "@/elements/P.js";
import Button from "@/elements/Button.js";

export default function ProjectRequirements({ data }) {
    return (
        <article className="w-full">
            <H2 chapeau={data.chapeau}>{data.title}</H2>
            <P>Nu er een globaal beeld is van de doelgroep, is het van belang om deze bevindingen concreet te noteren en te focussen op de daadwerkelijke wensen en eisen van de doelgroep en het product</P>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                <section>
                    <H3>Belangrijkste inzichten</H3>
                    <ul className="text-white md:text-md lg:text-lg max-w-paragraph list-disc ml-4 flex flex-col gap-2 font-light mb-8">
                        {data.insights.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <Button href={data.link} type="primary" className="group" arrow>Luister naar de interviews</Button>
                </section>
                <section>
                    <H3>Belangrijkste eisen</H3>
                    <ul className="text-white md:text-md lg:text-lg max-w-paragraph list-disc ml-4 flex flex-col gap-2 font-light mb-8">
                        {data.demands.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <Button href={data.link} type="primary" className="group" arrow>Bekijk alle eisen</Button>
                </section>
            </section>
        </article>
    );
}