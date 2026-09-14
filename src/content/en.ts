import type { Dictionary } from "./types";

/** ENGLISH COPY. [ ] brackets = fill in your real details. */
export const en: Dictionary = {
  meta: {
    title: "Choijamts — Frontend Developer",
    description:
      "Frontend developer. React, Next.js, TypeScript. Studying Computer Science at the University of Pisa and building web products.",
  },

  nav: {
    about: "About",
    work: "Work",
    skills: "Skills",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    available: "Open to work",
  },

  hero: {
    role: "Frontend Developer",
    line1: "I build",
    line2: "interfaces —",
    accent: "clear and smooth.",
    subcopy:
      "Frontend for web products in React, Next.js and TypeScript. Based in Pisa, Italy — working remotely with a team while I study.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
  },

  about: {
    label: "About",
    headline: "Considered design. Real code.",
    intro:
      "I'm Choijamts, a frontend developer. I care about interfaces people understand in the first second — and that stay fast under real use.",
    story: [
      "I'm studying Computer Science at the University of Pisa (Università di Pisa) in Pisa, Italy. Working on real projects alongside classes has taught me the most.",
      "Since July 2026 I have been working remotely as a frontend developer at Retro Mind LLC, from Italy — and I keep shipping alongside my classes. I am also part of the SparkXP team, where I handle the frontend.",
    ],

    principlesLabel: "Principles",
    principles: [
      {
        title: "Clarity first",
        detail:
          "A good interface doesn't make you think. Being understood matters before being clever.",
      },
      {
        title: "Finish the last 10%",
        detail:
          "Demos are easy. Holding up for real users is a different job — that's the part I finish.",
      },
      {
        title: "Details carry the product",
        detail:
          "Motion, spacing, transitions — the small things are what make software feel professional.",
      },
    ],

    pathLabel: "Path",
    timeline: [
      {
        year: "2025",
        title: "Moved to Italy",
        detail: "University of Pisa — Computer Science.",
      },
      {
        year: "2026 · July",
        title: "First job",
        detail: "Joined Retro Mind LLC as a frontend developer, working remotely.",
      },
      {
        year: "Now",
        title: "Still shipping",
        detail:
          "Working remotely while I study — building real products, not side demos.",
      },
    ],

    nowBody:
      "Studying in Pisa and working remotely for Retro Mind LLC. Open to new projects and remote collaborations.",

    portraitAlt: "Choijamts",
  },

  work: {
    label: "Work",
    headline: "Things I've shipped.",
    intro: "Not a gallery of mockups — products built for real people.",
    roleLabel: "My role",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    statusLabel: "Status",
    stackLabel: "Stack",
    imagePlaceholder: "Image coming soon",
    live: "Visit",
    repo: "Code",

    projects: {
      sparkxp: {
        title: "SparkXP",
        category: "Education · Team project",
        year: "2026",
        role: "Frontend — app and landing site",
        summary:
          "A gamified English-learning app for students in Mongolia — lessons, spaced repetition, XP and streaks.",
        problem:
          "English-learning apps available in Mongolia felt rigid, with little reason to come back daily.",
        solution:
          "We turned learning into a game: structured lessons, spaced-repetition vocabulary, XP, streaks and leaderboards. I owned the frontend — the screens and user flows. I also built the landing site from scratch, including its 3D hero in react-three-fiber, and later handed it over to the team lead.",
        status:
          "In active development with the team. Measured results will be added here once we have them.",
        stack: ["React Native", "Expo", "TypeScript", "Next.js", "React Three Fiber"],
      },

      nomadkids: {
        title: "NomadKids",
        category: "Education · Team project",
        year: "2026",
        role: "Frontend — API integration",
        summary:
          "A kindergarten system that keeps each child's development as a digital portfolio, with its own screens for teachers, directors, accountants and parents.",
        problem:
          "Kindergartens still track child development on paper, and the official records in ESIS never reach the teacher's day-to-day work.",
        solution:
          "I wired the Next.js web app to the NestJS API and put each ESIS service on the screen of the person who owns it — group rosters, a child's record, reports, charts and password recovery.",
        status:
          "Deployed and running at nomadkids.mn. The Phase 1 MVP passes 690 automated tests.",
        stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "TypeScript"],
      },

      carcare: {
        title: "CarCare",
        category: "Mobile app · Team project",
        year: "2026",
        role: "Frontend developer",
        summary:
          "A React Native app for drivers — nearby services, EV chargers and fuel stations on a single map.",
        problem:
          "Chargers, fuel stations and repair shops live in separate places, so finding the closest one means checking several sources.",
        solution:
          "I added the EV-charger and fuel-station layers on MapLibre and brought them up to parity with the merchants map — search, clustering and detail cards. I also stopped buildings from showing through satellite view and fixed a search keyboard that would not dismiss.",
        status:
          "In active development on the dev branch. Not in the stores yet.",
        stack: ["React Native", "TypeScript", "MapLibre", "React Query"],
      },

      guessthesong: {
        title: "Guess the Song",
        category: "Game · Personal project",
        year: "2026",
        role: "Solo — everything",
        summary:
          "A web game for guessing Mongolian songs. You hear a short clip and name the track — each miss makes the clip longer and the score smaller.",
        problem:
          "Songspot-style guessing games had no Mongolian catalogue, and foreign apps do not carry the music.",
        solution:
          "The catalogue builds itself from Apple's open Search API — 472 songs whose 30-second previews play straight in the browser through Web Audio, with no key and no server. Chart position and artist weight sort them into five difficulty tiers automatically.",
        status:
          "The core game loop works. The repo is private and it is not published yet.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Audio API"],
      },
    },
  },

  skills: {
    label: "Skills",
    headline: "What I work with.",
    intro: "Capabilities first, tools second. From interface to release.",
    groups: [
      {
        index: "01",
        title: "Product interfaces",
        description:
          "User flows, component systems and UI surfaces you can trust.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        index: "02",
        title: "Motion & craft",
        description:
          "Quiet, purposeful motion that directs attention and clarifies hierarchy.",
        tech: ["Framer Motion", "Lenis", "CSS Animations"],
      },
      {
        index: "03",
        title: "Mobile",
        description: "Cross-platform mobile screens and flows.",
        tech: ["React Native", "Expo"],
      },
      {
        index: "04",
        title: "Working with a team",
        description:
          "Collaborating through Git and translating design into code faithfully.",
        tech: ["Git", "GitHub", "REST API"],
      },
    ],
  },

  contact: {
    label: "Contact",
    line1: "Let's build",
    accent: "something",
    body:
      "Open to frontend roles, team projects and freelance work. I reply quickly.",
    locationLabel: "Location",
    location: "Pisa, Italy",
  },

  footer: { note: "Built carefully with Next.js." },

  social: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
};
