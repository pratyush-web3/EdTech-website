import type { Course } from "@/types";

const img = (id: string) => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

export const courses: Course[] = [
  {
    slug: "italiano-professionale-c1-c2",
    title: "Italiano Professionale - Livello C1/C2",
    category: "Lingua Italiana",
    level: "Avanzato",
    hours: "180h",
    price: "€349",
    teacher: "Prof. Giulia Ferretti",
    image: img("photo-1456406644174-8ddd4cd52a06"),
    summary: "Non e un corso di grammatica. E un corso per chi ha bisogno che il proprio italiano faccia una buona impressione: in una riunione, in una mail, davanti a un cliente.",
    outcomes: ["Scrivi email nette e credibili", "Parli in riunione senza girare intorno alle frasi", "Costruisci documenti professionali con tono sicuro"],
    modules: ["Scrittura professionale", "Presentazioni orali", "Lessico aziendale", "Revisione finale con docente"]
  },
  {
    slug: "italiano-affari",
    title: "Italiano per gli Affari",
    category: "Lingua Italiana",
    level: "Intermedio",
    hours: "90h",
    price: "€229",
    teacher: "Prof. Marco Santini",
    image: img("photo-1522202176988-66273c2fd55f"),
    summary: "Hai una telefonata con un cliente di Torino alle dieci e una proposta da mandare entro sera. Qui lavori proprio su quei momenti: negoziazione, sintesi, tono, precisione.",
    outcomes: ["Gestisci conversazioni commerciali", "Prepari offerte leggibili", "Eviti formule deboli e frasi troppo scolastiche"],
    modules: ["Riunioni", "Preventivi", "Telefonate", "Scrittura commerciale"]
  },
  {
    slug: "project-management-pmp",
    title: "Project Management Avanzato - Prep PMP",
    category: "Business & Management",
    level: "Avanzato",
    hours: "120h",
    price: "€499",
    teacher: "Dott.ssa Elena Conti",
    image: img("photo-1497366216548-37526070297c"),
    summary: "Tre team, due fornitori, una scadenza che non si sposta. Il corso parte da li: decisioni, priorita, rischi, budget. La teoria arriva quando serve.",
    outcomes: ["Leggi un progetto prima che deragli", "Prepari l'esame PMP", "Porti metodo nelle riunioni operative"],
    modules: ["Scope e rischi", "Budget", "Stakeholder", "Simulazioni PMP"]
  },
  {
    slug: "strategia-innovazione",
    title: "Strategia Aziendale e Innovazione",
    category: "Business & Management",
    level: "Intermedio",
    hours: "80h",
    price: "€379",
    teacher: "Prof. Andrea Russo",
    image: img("photo-1571260899304-425eee4c7efc"),
    summary: "A Bologna una PMI decide se entrare in Germania. A Milano una startup cambia modello di ricavi. In aula analizzi casi cosi, non slogan.",
    outcomes: ["Costruisci mappe competitive", "Valuti nuovi mercati", "Presenti una scelta strategica con numeri chiari"],
    modules: ["Analisi settore", "Modelli di ricavo", "Innovazione", "Pitch interno"]
  },
  {
    slug: "ux-ui-wireframe-prodotto",
    title: "UX/UI Design: Dal Wireframe al Prodotto",
    category: "Design Digitale",
    level: "Intermedio",
    hours: "160h",
    price: "€429",
    teacher: "Arch. Sofia Marini",
    image: img("photo-1580489944761-15a19d654956"),
    summary: "Quante app hai installato e cancellato dopo cinque minuti perche erano confuse, lente, o semplicemente brutte? Questo corso parte da quella frustrazione. Da quella sensazione che provi come utente ogni giorno, e che impari a eliminare dal lato di chi progetta.",
    outcomes: ["Disegni wireframe solidi", "Progetti interfacce accessibili", "Arrivi con un portfolio presentabile"],
    modules: ["Ricerca utente", "Wireframe", "UI system", "Prototipo finale"]
  },
  {
    slug: "brand-identity-visual-design",
    title: "Brand Identity e Visual Design",
    category: "Design Digitale",
    level: "Base",
    hours: "100h",
    price: "€299",
    teacher: "Lorenzo Bianchi",
    image: img("photo-1529154036614-a60975f5c760"),
    summary: "Un logo da solo non regge. Una marca si vede nel ritmo, nei margini, nelle scelte che ripeti. Qui costruisci identita visive con criterio, non con gusto del momento.",
    outcomes: ["Definisci un sistema visivo", "Prepari linee guida chiare", "Presenti scelte creative con argomenti"],
    modules: ["Tipografia", "Colore", "Sistema grafico", "Manuale di marca"]
  },
  {
    slug: "ai-business",
    title: "Intelligenza Artificiale per il Business",
    category: "Tecnologia & AI",
    level: "Intermedio",
    hours: "140h",
    price: "€549",
    teacher: "Ing. Roberto Gentile",
    image: img("photo-1507003211169-0a1dd7228f2d"),
    summary: "L'AI non ti togliera il lavoro. Te lo togliera qualcuno che sa usarla. Questo corso e per chi vuole essere quella persona, non la vittima.",
    outcomes: ["Valuti casi d'uso concreti", "Scrivi prompt operativi", "Porti automazioni in azienda senza confusione"],
    modules: ["Prompt design", "Processi aziendali", "Etica e rischio", "Progetto finale"]
  },
  {
    slug: "sviluppo-web-full-stack",
    title: "Sviluppo Web Full-Stack",
    category: "Tecnologia & AI",
    level: "Base-Avanzato",
    hours: "200h",
    price: "€649",
    teacher: "Ing. Chiara Mazza",
    image: img("photo-1497366216548-37526070297c"),
    summary: "Parti da una pagina vuota e arrivi a un prodotto pubblicato. Frontend, backend, database, deploy: ogni settimana consegni qualcosa che funziona.",
    outcomes: ["Scrivi app in React e Next.js", "Colleghi API e database", "Pubblici un progetto da mostrare"],
    modules: ["HTML e CSS", "React", "Backend", "Deploy"]
  },
  // {
  //   slug: "digital-marketing-strategy-2025",
  //   title: "Digital Marketing Strategy 2025",
  //   category: "Marketing",
  //   level: "Intermedio",
  //   hours: "110h",
  //   price: "€399",
  //   teacher: "Dr. Luca Gallo",
  //   image: img("photo-1523050854058-8df90110c9f1"),
  //   summary: "Hai budget, canali, obiettivi e poco tempo. Il corso ti fa scegliere cosa tagliare prima ancora di cosa pubblicare.",
  //   outcomes: ["Costruisci funnel misurabili", "Leggi dati senza vanity metric", "Prepari un piano trimestre per trimestre"],
  //   modules: ["Strategia", "Paid media", "SEO", "Misurazione"]
  // },
  {
    slug: "content-marketing-seo",
    title: "Content Marketing e SEO",
    category: "Marketing",
    level: "Base",
    hours: "75h",
    price: "€249",
    teacher: "Valentina Moretti",
    image: img("photo-1434030216411-0b793f4b4173"),
    summary: "Un articolo che nessuno trova non e contenuto: e un file dimenticato. Qui impari a scrivere per persone vere e motori di ricerca, in quest'ordine.",
    outcomes: ["Pianifichi contenuti cercati davvero", "Scrivi pagine leggibili", "Misuri risultati con lucidita"],
    modules: ["Ricerca keyword", "Architettura contenuti", "Scrittura", "Report"]
  }
];

export const featuredCourses = courses.slice(0, 8);
