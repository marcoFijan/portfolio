import Link from 'next/link'

export default function PortfolioSection() {
  return (
    <div className="max-w-wrapper mx-auto w-full px-8">
      <article className="py-10 h-screen box-border">
          <h1 className="text-bgColorLight">Portfolio</h1>
          <h2 className="">Mijn projecten</h2>
          <p className="py-8 text-bgColorLight">
            Bekijk hier mijn projecten
          </p>
      </article>
      <article className="py-10 h-screen box-border text-right">
        <h1 className="text-bgColorLight">KBO Tilburg Reeshof</h1>
        <h2 className="">Redesign website met de focus voor ouderen binnen budget</h2> 
        <Link href="/projects/kbo-tilburg-reeshof">Bekijk het project</Link> 
      </article>
      <article className="py-10 h-screen box-border text-right">
        <h1 className="text-bgColorLight">GWOTY Award - YoungOnes</h1>
        <h2 className="">Stage project met NextJS, Tailwind en Figma</h2>      
      </article> 
      <article className="py-10 h-screen box-border text-left">
        <h1 className="text-bgColorLight">Dashboard - YoungOnes</h1>
        <h2 className="">Stage project met NextJS, Tailwind Figma en ChartJS</h2>      
      </article>
      <article className="py-10 h-screen box-border text-right">
        <h1 className="text-bgColorLight">Ring Ring Dashboard</h1>
        <h2 className="">Datavisualisatie project met D3</h2>      
      </article>
      <article className="py-10 h-screen box-border text-left">
        <h1 className="text-bgColorLight">Standaard Aaanbouw</h1>
        <h2 className="">Commercieel wordpress website voor een aannemer</h2>      
      </article>
      
    </div>
  );
}
