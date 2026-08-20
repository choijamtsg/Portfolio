import type { Dictionary } from "./types";

/** TESTO IN ITALIANO. Le parentesi [ ] = dati reali da inserire. */
export const it: Dictionary = {
  meta: {
    title: "Choijamts — Sviluppatore Frontend",
    description:
      "Sviluppatore frontend. React, Next.js, TypeScript. Studio Informatica all'Università di Pisa e costruisco prodotti web.",
  },

  nav: {
    about: "Chi sono",
    work: "Lavori",
    skills: "Competenze",
    contact: "Contatti",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    language: "Lingua",
    available: "Disponibile",
  },

  hero: {
    role: "Sviluppatore Frontend",
    line1: "Costruisco",
    line2: "interfacce —",
    accent: "chiare e fluide.",
    subcopy:
      "Frontend per prodotti web con React, Next.js e TypeScript. Vivo a Pisa e lavoro in team.",
    ctaWork: "Guarda i lavori",
    ctaContact: "Contattami",
  },

  about: {
    label: "Chi sono",
    headline: "Design ponderato. Codice reale.",
    intro:
      "Sono Choijamts, sviluppatore frontend. Mi interessano le interfacce che si capiscono al primo secondo e restano veloci nell'uso reale.",
    story: [
      "Studio Informatica all'Università di Pisa, a Pisa. Lavorare su progetti reali accanto allo studio è ciò che mi ha insegnato di più.",
      "Da luglio 2026 lavoro come sviluppatore frontend presso Retro Mind LLC. Faccio inoltre parte del team di SparkXP, dove mi occupo del frontend.",
    ],

    principlesLabel: "Principi",
    principles: [
      {
        title: "Prima la chiarezza",
        detail:
          "Una buona interfaccia non ti fa pensare. Farsi capire viene prima di essere ingegnosi.",
      },
      {
        title: "Finire l'ultimo 10%",
        detail:
          "Fare una demo è facile. Reggere l'uso reale è un altro lavoro — ed è quello che porto a termine.",
      },
      {
        title: "I dettagli fanno il prodotto",
        detail:
          "Movimento, spaziature, transizioni: sono i dettagli a rendere professionale un software.",
      },
    ],

    pathLabel: "Percorso",
    timeline: [
      {
        year: "2025",
        title: "Trasferimento in Italia",
        detail: "Università di Pisa — Informatica.",
      },
      {
        year: "2026 · luglio",
        title: "Primo lavoro",
        detail: "Entrato in Retro Mind LLC come sviluppatore frontend.",
      },
      {
        year: "Oggi",
        title: "Concentrato sul frontend",
        detail: "Costruisco prodotti reali mentre completo gli studi.",
      },
    ],

    nowBody:
      "Studio a Pisa e lavoro nel frontend. Disponibile per nuovi progetti e collaborazioni.",

    portraitAlt: "Choijamts",
  },

  work: {
    label: "Lavori",
    headline: "Cosa ho realizzato.",
    intro: "Non una galleria di mockup — prodotti costruiti per persone vere.",
    roleLabel: "Il mio ruolo",
    problemLabel: "Problema",
    solutionLabel: "Soluzione",
    statusLabel: "Stato",
    stackLabel: "Tecnologie",
    imagePlaceholder: "Immagine in arrivo",
    live: "Visita",
    repo: "Codice",

    projects: {
      sparkxp: {
        title: "SparkXP",
        category: "Educazione · Progetto di squadra",
        year: "2026",
        role: "Sviluppatore frontend",
        summary:
          "App gamificata per l'apprendimento dell'inglese rivolta agli studenti in Mongolia — lezioni, ripetizione dilazionata, XP e serie giornaliere.",
        problem:
          "Le app per imparare l'inglese disponibili in Mongolia risultavano rigide e davano poche ragioni per tornare ogni giorno.",
        solution:
          "Abbiamo trasformato lo studio in un gioco: lezioni strutturate, vocabolario a ripetizione dilazionata, XP, serie e classifiche. Io mi sono occupato del frontend — schermate e flussi utente.",
        status:
          "In sviluppo attivo con il team. I risultati misurati saranno aggiunti qui non appena disponibili.",
        stack: ["React Native", "Expo", "TypeScript"],
      },
    },
  },

  skills: {
    label: "Competenze",
    headline: "Con cosa lavoro.",
    intro: "Prima le capacità, poi gli strumenti. Dall'interfaccia al rilascio.",
    groups: [
      {
        index: "01",
        title: "Interfacce di prodotto",
        description:
          "Flussi utente, sistemi di componenti e superfici UI affidabili.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        index: "02",
        title: "Movimento e cura",
        description:
          "Un movimento discreto e intenzionale, che guida l'attenzione e chiarisce la gerarchia.",
        tech: ["Framer Motion", "Lenis", "CSS Animations"],
      },
      {
        index: "03",
        title: "Mobile",
        description: "Schermate e flussi per app mobile multipiattaforma.",
        tech: ["React Native", "Expo"],
      },
      {
        index: "04",
        title: "Lavoro di squadra",
        description:
          "Collaborazione tramite Git e traduzione fedele dal design al codice.",
        tech: ["Git", "GitHub", "Figma", "REST API"],
      },
    ],
  },

  contact: {
    label: "Contatti",
    line1: "Costruiamo",
    accent: "qualcosa",
    body:
      "Disponibile per ruoli frontend, progetti di squadra e collaborazioni freelance. Rispondo in fretta.",
    locationLabel: "Sede",
    location: "Pisa, Italia",
  },

  footer: { note: "Costruito con cura in Next.js." },

  social: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
};
