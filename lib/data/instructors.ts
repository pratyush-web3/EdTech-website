import type { Instructor } from "@/types";

const img = (id: string) => `https://images.unsplash.com/${id}?w=900&q=80&auto=format&fit=crop`;

export const instructors: Instructor[] = [
  {
    name: "Alessandra Conti",
    role: "CEO & Co-fondatrice",
    city: "Milano",
    image: img("photo-1580489944761-15a19d654956"),
    bio: "Ex consulente McKinsey. MBA Bocconi. Ha lasciato un lavoro sicuro perche credeva che la formazione in Italia potesse funzionare meglio."
  },
  {
    name: "Marco Ferrara",
    role: "CTO",
    city: "Torino",
    image: img("photo-1507003211169-0a1dd7228f2d"),
    bio: "Ha lavorato in Google Zurigo per 7 anni. E tornato in Italia per costruire qualcosa di suo, con codice solido e meno riunioni inutili."
  },
  {
    name: "Isabella Russo",
    role: "Dean",
    city: "Roma",
    image: img("photo-1522202176988-66273c2fd55f"),
    bio: "20 anni di didattica universitaria. Ha smesso di aspettare che le universita cambiassero."
  },
  {
    name: "Luca Moretti",
    role: "Head of Design",
    city: "Milano",
    image: img("photo-1529154036614-a60975f5c760"),
    bio: "Ex Apple Design Team. Crede che un buon prodotto educativo debba essere bello prima ancora di essere utile."
  },
  {
    name: "Sofia Marini",
    role: "UX Lead",
    city: "Napoli",
    image: img("photo-1571260899304-425eee4c7efc"),
    bio: "Ha seguito progetti per Satispay e Bending Spoons. In aula porta brief veri, revisioni severe e molta pazienza."
  },
  {
    name: "Roberto Gentile",
    role: "AI Program Director",
    city: "Bologna",
    image: img("photo-1497366216548-37526070297c"),
    bio: "Ricerca AI applicata tra industria e consulenza. Ama i modelli, ma ancora di piu i problemi risolti bene."
  }
];
