export const STANDAARD_AANBOUW_DATA = {
    meta: {
        title: "Marco Fijan - Standaard Aanbouw - Een herontwerp van een aannemers Wordpress website",
        chapeau: "Een herontwerp van een aannemers Wordpress website",
        pageTitle: "Standaard aanbouw",
    },
    hero: {
        src: "/images/StandaardAanbouw/SAFinalDesign.png",
        alt: "Eind Ontwerp Standaard Aanbouw",
        introTexts: [
            "Ik kreeg de opdracht om een nieuwe website te ontwerpen voor het bedrijf van een kennis. Ik begon met het analyseren van de huisstijl en de websites van concurrenten. Op basis daarvan maakte ik een low-fidelity (lo-fi) ontwerp. Na een feedbacksessie stemde de opdrachtgever in met een concept, waarna ik het ontwerp verder uitwerkte tot een high-fidelity (hi-fi) versie.",
            "Na een tweede feedbackronde heb ik een aangepaste hi-fi ontwerp ontworpen. Deze definitieve versie is vervolgens responsive uitgewerkt en gerealiseerd in WordPress.",
        ],
        buttons: [
            { text: "Bekijk de Wordpress Github", link: "https://github.com/marcoFijan/StandaardAanbouwWordpress", type: "primary" },
            { text: "Bekijk ontwerp op Figma", link: "https://www.figma.com/design/ZcA6RMU1cP4lUignKSchCU/StandaardAanbouw-HiFi-V0.1?node-id=0-1", type: "secondary" },
        ],
    },
    contentBlocks: [
        {
            id: "huisstijl-intro",
            type: "text-only",
            chapeau: "Huisstijl voor briefpapier en facturen",
            title: "Huisstijl elementen",
            text: "Ondanks dat de website flink outdated was, is het logo en briefpapier inmiddels al wel geüpdatet. De wens was dan ook om dit als huisstijl te gebruiken voor het herontwerp.",
        },
        {
            id: "logo",
            type: "image-text",
            title: "Logo",
            text: "De aannemer is recentelijk een rebranding aangegaan en heeft het bedrijf hernoemd naar standaard aanbouw. Hiervoor huurde de aannemer een designer voor een nieuw logo.",
            image: "/images/StandaardAanbouw/Logo.jpg",
            reverse: false,
            sticky: true,
        },
        {
            id: "briefpapier",
            type: "image-text",
            title: "Briefpapier",
            text: "De aannemer werkt voornamelijk via bestaande contacten en heeft hiervoor geen website nodig gehad. Wel werden er facturen opgesteld en hiervoor werd briefpapier ontworpen.",
            image: "/images/StandaardAanbouw/Briefpapier.jpg",
            reverse: true,
            sticky: true,
        },
        {
            id: "iteraties",
            type: "slider",
            chapeau: "Overzicht van de hoofditeraties",
            title: "Herontwerp",
            descriptions: [
                "Het ontwerpproces verliep iteratief, van een eerste LoFi-schets tot een uitgewerkt HiFi-eindontwerp. De focus lag eerst op de hoofdpagina. Vervolgens werden in later stadia de overige pagina's bepaald en ontworpen. In de LoFi-fase werd de huisstijl van het briefpapier vertaald naar een digitale opzet. De schuine donkere balken kregen een blauwe kleur, met een geelgroene tint als accent. Na positieve feedback van de opdrachtgever werd dit verder uitgewerkt.",
                "De eerste HiFi-iteratie bracht kleur en beeldmateriaal in het ontwerp, met behoud van de oorspronkelijke navigatiestructuur. In de tweede versie werd het drukke blauw aangepast en werden de afgeronde knoppen vervangen door strakkere varianten. Ook zijn er slogans toegevoegd ter versterking van de boodschap.",
                "De derde iteratie focuste op de leesbaarheid van de herosectie. Aanpassingen volgden in kleurgebruik en typografie. In de vierde versie zijn knoppen, headers en titels verder verfijnd, en werden keurmerken toegevoegd om vertrouwen te wekken.",
                "In de laatste HiFi-iteratie zijn de keurmerken verwijderd, omdat de aannemer deze niet voert. Wel werden een secundaire knop, galerij, contactsectie en nieuwsoverzicht toegevoegd, waarmee het ontwerp zowel visueel als functioneel werd afgerond.",
            ],
            slides: [
                {
                    title: "LoFi ontwerp",
                    img: "/images/StandaardAanbouw/Lofi.jpg",
                    desc: "In het LoFi-ontwerp probeerde ik de stijl van het briefpapier na te bootsen. De schuine donkere balken wil ik de blauwe huiskleur geven en als accentkleur wil ik de geel groene kleur gebruiken. De opdrachtgever was tevreden met het LoFi-ontwerp en ik ging dus verder met het HiFi-ontwerp.",
                },
                {
                    title: "Eerste HiFi iteratie",
                    img: "/images/StandaardAanbouw/Hifi1.jpg",
                    desc: "In dit ontwerp voeg ik kleur en afbeeldingen toe om het ontwerp meer vorm te geven. Naast de afbeeldingen probeerde ik ook de huisstijl van het briefpapier na te bootsen op de website. Voor de menuselectie gebruikte ik het oorspronkelijke ontwerp van de beter wonen website.",
                },
                {
                    title: "Tweede HiFi iteratie",
                    img: "/images/StandaardAanbouw/Hifi2.png",
                    desc: "Het blauw in de eerste HiFi iteratie vond ik te druk. Daarnaast pastten de afgeronde knoppen niet in de stijl van de rest van de website en werden deze dus aangepast. Ook werden er slogans toegevoegd.",
                },
                {
                    title: "Derde HiFi iteratie",
                    img: "/images/StandaardAanbouw/Hifi3.png",
                    desc: "In de volgende iteratie heb ik geëxperimenteerd met de herosectie van de pagina. In de vorige iteratie was de tekst, ondanks de tekstschaduw, nog slecht leesbaar.",
                },
                {
                    title: "Vierde HiFi iteratie",
                    img: "/images/StandaardAanbouw/Hifi4.jpg",
                    desc: "In deze iteratie werd er verder geïtereerd op de herosectie en kreeg de achtergrondkleur, knop, header en titel aangepast. Ook werden er keurmerken toegevoegd om vertrouwen te wekken.",
                },
                {
                    title: "Laatste HiFi iteratie",
                    img: "/images/StandaardAanbouw/Hifi5.png",
                    desc: "De aannemer heeft geen keurmerken dus werden deze verwijderd. Daarnaast werden er secundaire knoppen, een galerij, een contactsectie en recente nieuwspagina toegevoegd.",
                },
            ],
        },
        {
            id: "overige-schermen",
            type: "slider",
            reverseLayout: true,
            chapeau: "Overzicht van diverse detailpagina's",
            title: "Overige schermen",
            descriptions: [
                "Nadat er een akkoord was bereikt over het eindontwerp van de hoofdpagina, werden diverse detailpagina's uitgewerkt. Deze detailpagina's werden in dezelfde vorm en huisstijl ontworpen als het hoofdscherm. Hieronder vind u de 2 hoofddetailpagina's vormgegeven.",
            ],
            slides: [
                {
                    title: "Blogpagina",
                    img: "/images/StandaardAanbouw/Blogpagina.png",
                    desc: "Verschillende klanten bij het bedrijf willen graag op de hoogte gesteld blijven over diverse ontwikkelingen bij het bedrijf. Hiervoor wordt een nieuwspagina ofwel blogpagina bijgehouden door de aannemer. Daarnaast geeft het hebben van een up-to-date nieuwspagina meer vertrouwen naar potentiële nieuwe klanten.",
                },
                {
                    title: "HiFi van de servicepagina",
                    img: "/images/StandaardAanbouw/Servicepagina.png",
                    desc: "De aannemer levert verschillende services. De aannemer wilt de focus hebben op hulp bij het zelf aannemen en daarom is deze optie als call-to-action zichtbaar op het hoofdscherm. Bij de vergelijking tussen services wordt deze optie daarom ook in het midden getoond, de positie waar ogen het eerst naar toe gaan.",
                },
            ],
        },
    ],
};


export const KBO_DATA = {
    meta: {
        title: "Marco Fijan - KBO Tilburg Reeshof",
        chapeau: "Een concept website ontwerp voor ouderen",
        pageTitle: "Herontwerp voor ouderen",
    },
    hero: {
        src: "/images/KBOReeshof/HomeHD.png",
        alt: "KBO Reeshof Menu uitgeklapt",
        introTexts: [
            "Omdat ik vind dat er te weinig aandacht is voor ouderen op digitaal vlak, wilde ik onderzoeken hoe zij websites gebruiken en hoe deze beter op hen afgestemd kunnen worden.",
            "Via mijn zoektocht kwam ik uit bij KBO Tilburg Reeshof, een lokale seniorenvereniging met meer dan 700 leden. Ze willen graag dat hun website beter gebruikt wordt.",
        ],
        buttons: [
            { text: "Bekijk Design Rationale", link: "https://drive.google.com/...", type: "primary" },
            { text: "Bekijk productbiografie", link: "https://notion.site/...", type: "secondary" },
        ],
    },
    contentBlocks: [
        {
            id: "probleem",
            type: "image-text",
            chapeau: "Het probleem concreet beschrijven",
            title: "Probleemstelling",
            text: "Elke dag zijn er duizenden ouderen in Nederland die in eenzaamheid leven. Instanties proberen dit op te lossen door online activiteiten aan te kondigen, maar deze websites zijn vaak niet ontworpen voor ouderen (slecht leesbaar, onduidelijke navigatie).",
            image: "/images/KBOReeshof/KBOReeshofBuilding.png",
            reverse: false,
            sticky: true,
        },
        { id: "div-kbo-1", type: "divider" },
        {
            id: "eisen",
            type: "list",
            chapeau: "De eisen voor het product vastleggen",
            title: "Definiëren",
            description: "Tijdens het onderzoek kwamen er diverse inzichten en ontwerpeisen naar voren voor deze specifieke doelgroep.",
            lists: [
                {
                    title: "Belangrijkste Inzichten",
                    items: [
                        "Ouderen hebben moeite met inloggen op websites",
                        "Veel ouderen vinden donkere knoppen fijner dan felgekleurde",
                        "Voorkom serifs en andere ingewikkelde lettertypen",
                        "Gebruik een hoog contrastratio met minimaal 16pt lettergrootte",
                    ]
                },
                {
                    title: "Product Eisen",
                    items: [
                        "De gebruiker kan zich opgeven voor activiteiten",
                        "Het product moet zo min mogelijk jargon of Engelse woorden bevatten",
                        "Inhoud moet opgedeeld worden in behapbare stappen",
                    ]
                }
            ]
        },
        { id: "div-kbo-2", type: "divider" },
        {
            id: "hulp-slider",
            type: "slider",
            chapeau: "Stapsgewijze hulp",
            title: "Hulp functionaliteit",
            description: "Ouderen kunnen gebruikmaken van diverse stapsgewijze instructies om vertrouwd te raken met de belangrijkste functies van de website.",
            slides: [
                { title: "Hulp Menu", img: "/images/KBOReeshof/HulpMenuHD.png", desc: "Overzicht van alle stapsgewijze instructies." },
                { title: "Stap 1", img: "/images/KBOReeshof/Help1HD.png", desc: "Duidelijke uitleg per scherm." },
            ]
        }
    ]
};