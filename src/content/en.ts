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
      "Frontend for web products in React, Next.js and TypeScript. Based in Pisa, Italy, and shipping with a team.",
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
      "I started working as a frontend developer in July 2026. I was also part of the SparkXP team, where I handled the frontend.",
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
        detail: "Started working as a frontend developer.",
      },
      {
        year: "Now",
        title: "Focused on frontend",
        detail: "Building real products while finishing my degree.",
      },
    ],

    nowBody:
      "Studying in Pisa and doing frontend work. Open to new projects and collaborations.",

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
        role: "Frontend developer",
        summary:
          "A gamified English-learning app for students in Mongolia — lessons, spaced repetition, XP and streaks.",
        problem:
          "English-learning apps available in Mongolia felt rigid, with little reason to come back daily.",
        solution:
          "We turned learning into a game: structured lessons, spaced-repetition vocabulary, XP, streaks and leaderboards. I owned the frontend — the screens and user flows.",
        status:
          "In active development with the team. Measured results will be added here once we have them.",
        stack: ["React Native", "Expo", "TypeScript"],
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
        tech: ["Git", "GitHub", "Figma", "REST API"],
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
