"use client";

import Article from "../organisms/ProjectArticle";

export default function ProjectsOverview({}) {
  return (
    <div className="max-w-wrapper mx-auto w-full block px-articlePadding">
      <Article
        darkBackground={true}
        title={"Grotere projecten"}
        subTitle={"Kort overzicht van alle grotere projecten"}
        sectionHeader1={"KBO Tilburg Reeshof"}
        sectionParagraph1a={"Een nieuw ontwerp speciaal voor ouderen."}
        section1ImageAlt={"KBO Tilburg Reeshof thumbnail"}
        section1ImageURL={"TODO:"}
        section1LinkHref={"/projects/kbo-tilburg-reeshof"}
        section1LinkText={"Bekijk project"}
        section1bLinkHref={
          "https://amenable-sword-4e9.notion.site/Productbiografie-1edc81194bb144b2bddb7619a652b5b0"
        }
        section1bLinkText={"Productbiografie"}
        sectionHeader2={"Opdrachtgever dashboard"}
        sectionParagraph2a={"Een nieuw dashboard voor opdrachtgevers."}
        section2ImageAlt={"Opdrachtgever dashboard thumbnail"}
        section2ImageURL={"TODO"}
        section2LinkHref={"/projects/yo-dashboard"}
        section2LinkText={"Bekijk project"}
        section2bLinkHref={
          "https://www.figma.com/proto/AwTDSAwkiuLqhmUwRc9i4q/YO---Dashboard-opdrachtgevers-Hifi-2?node-id=845%3A285&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=577%3A145"
        }
        section2bLinkText={"Interactief prototype"}
        sectionHeader3={"Gwoty awards"}
        sectionParagraph3a={"Een dashboard voor de GWOTY awards periode."}
        section3ImageAlt={"Gwoty awards dashboard thumbnail"}
        section3ImageURL={""}
        section3LinkHref={"/projects/yo-gwoty-award"}
        section3LinkText={"Bekijk project"}
        section3bLinkHref={
          "https://youngones-gwoty-o9bw7u9mo-marcofijan1.vercel.app/"
        }
        section3bLinkText={"Bekijk statische website"}
        sectionHeader4={"Standaard Aanbouw"}
        sectionParagraph4a={"Herontwerp van een persoonlijke aannemer."}
        section4ImageAlt={"Standaard Aanbouw statische website"}
        section4ImageURL={""}
        section4LinkHref={"/projects/standaard-aanbouw"}
        section4LinkText={"Bekijk project"}
        section4bLinkHref={
          "https://github.com/marcoFijan/StandaardAanbouwWordpress"
        }
        section4bLinkText={"Bekijk github"}
      />
    </div>
  );
}
