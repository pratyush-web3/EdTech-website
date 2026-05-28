import type { BlogPost } from "@/types";

const img = (id: string) => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-non-ti-sostituira",
    title: "L'AI non ti sostituira. Ti sostituira qualcuno che sa usarla meglio di te.",
    category: "Tecnologia",
    date: "12 marzo 2025",
    image: img("photo-1497366216548-37526070297c"),
    excerpt: "Nel 2023, OpenAI ha pubblicato uno studio che molti hanno letto di fretta. Il punto non era la paura. Era la distribuzione del vantaggio.",
    body: ["Nel 2023, OpenAI ha pubblicato uno studio che molti hanno letto di fretta. Il punto non era la paura. Era la distribuzione del vantaggio.", "Chi sa usare l'AI per scrivere, analizzare, verificare e prototipare lavora con piu margine. Chi la ignora resta piu lento, spesso senza accorgersene.", "La domanda seria non e se usarla. E dove usarla senza perdere giudizio."]
  },
  {
    slug: "test-ammissione-bocconi",
    title: "Come prepararsi al test di ammissione Bocconi: la guida che avrei voluto leggere a 17 anni.",
    category: "Universita",
    date: "4 febbraio 2025",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    excerpt: "Il test Bocconi non e difficile. E selettivo. C'e una differenza enorme, e capirla prima ti evita settimane buttate.",
    body: [
      "Il test Bocconi non e difficile. E selettivo. C'e una differenza enorme.",
      "Prepararsi bene significa simulare pressione, tempi e ordine delle domande. Non basta studiare piu ore.",
      "La settimana prima non aggiungi argomenti. Togli rumore."
    ]
  },
  {
    slug: "competenze-digitali-2025",
    title: "Le competenze digitali che le aziende italiane cercano davvero nel 2025 - non quelle che pensano.",
    category: "Carriera",
    date: "20 gennaio 2025",
    image: img("photo-1522202176988-66273c2fd55f"),
    excerpt: "A Milano un recruiter legge decine di CV prima di pranzo. Non cerca parole brillanti. Cerca prove.",
    body: ["A Milano un recruiter legge decine di CV prima di pranzo. Non cerca parole brillanti. Cerca prove.", "Portfolio, metriche, casi affrontati, strumenti usati con criterio: tutto il resto arriva dopo.", "Chi mostra lavoro reale parte davanti."]
  },
  {
    slug: "italiano-scritto-settori",
    title: "Italiano scritto: l'unica skill che vale in qualsiasi settore, e che quasi nessuno cura.",
    category: "Lingua",
    date: "8 gennaio 2025",
    image: img("photo-1456406644174-8ddd4cd52a06"),
    excerpt: "Una mail scritta male puo far sembrare debole anche un'idea buona. Succede ogni giorno, anche in aziende eccellenti.",
    body: ["Una mail scritta male puo far sembrare debole anche un'idea buona.", "Scrivere bene non vuol dire usare parole ricercate. Vuol dire far arrivare il punto senza attrito.", "Chi scrive chiaro lavora meglio con tutti."]
  },
  {
    slug: "design-thinking-problemi",
    title: "Design thinking non e un metodo. E un modo di vedere i problemi.",
    category: "Design",
    date: "18 dicembre 2024",
    image: img("photo-1529154036614-a60975f5c760"),
    excerpt: "A Torino, in un team automotive, il problema sembrava l'interfaccia. Era il processo prima dell'interfaccia.",
    body: ["A Torino, in un team automotive, il problema sembrava l'interfaccia. Era il processo prima dell'interfaccia.", "Il design thinking serve quando smetti di innamorarti della prima risposta.", "Non e magia. E disciplina del dubbio."]
  },
  {
    slug: "studiare-lavoro-tempo-pieno",
    title: "Come studiare mentre lavori a tempo pieno senza impazzire e senza rinunciare al sabato.",
    category: "Lifestyle",
    date: "2 dicembre 2024",
    image: img("photo-1434030216411-0b793f4b4173"),
    excerpt: "Alle 19:40 sei stanco. Aprire una lezione da novanta minuti e una pessima idea. Parti da venticinque minuti fatti bene.",
    body: ["Alle 19:40 sei stanco. Aprire una lezione da novanta minuti e una pessima idea.", "Studiare lavorando richiede tagli intelligenti: sessioni corte, obiettivi piccoli, revisione il giorno dopo.", "Il sabato resta tuo se proteggi tre sere alla settimana."]
  }
];
