import type { ReactNode } from "react";



interface Tag {
  name: string;
}

interface Experience {
  company: string;
  timeframe: string;
  role: string;
  achievements: ReactNode[];
  images: string[];
}

interface Skill {
  title: string;
  description: ReactNode;
  tags: Tag[];
  images: string[];
}

interface Institution {
  name: string;
  description: ReactNode;
}

export interface AboutData {
  path: string;
  title: string;
  description: string;
  intro: { title: string; description: ReactNode };
  work: { title: string; experiences: Experience[] };
  studies: { title: string; institutions: Institution[] };
  technical: { title: string; skills: Skill[] };
}


export const aboutData: AboutData = {
  path: "/about",
  title: "Wali Muhammad",
  description: "Full-Stack Web Developer from Pakistan",
  intro: {
    title: "Introduction",
    description: "I am a performance-driven Full-Stack Developer with a focus on clean code and intuitive design. I specialize in delivering high-quality applications across the React ecosystem"
  },
  work: {
    title: "Work Experience",
    experiences: [{
        company: "Personal & Certification Projects",
        timeframe: "July 2024 - Present",
        role: "Full-Stack Web Developer",
        achievements: [
           "Engineered high-performance data flows using Next.js Server Actions, which reduced traditional API boilerplate and enabled seamless, real-time CRUD operations.",
           "Architected a robust security layer by integrating Better-Auth with Role-Based Access Control (RBAC), ensuring secure session management and granular permission levels across platforms.",
           "Streamlined complex state management using a combination of Zustand, Redux, and React Context API to maintain predictable data flow in large-scale applications.",
           "Developed responsive, accessible User Interfaces with Tailwind CSS and Shadcn UI, implementing features like automatic board provisioning and smooth-scroll navigation for enhanced UX.",
           "Maintained high code reliability through Test-Driven Development (TDD), utilizing Jest and Vitest to perform unit testing and ensure component stability in agile environments.",
          "Optimized application performance by leveraging Next.js 15 Server Components and Memoization (useMemo, useCallback), significantly reducing client-side JavaScript bundles and improving SEO."
        ],
        images: [],
      },]
  },
  studies: {
    title: "Studies",
    institutions: [
      {
        name: "Sarhad University of Science & Technology",
        description: "Bachelors in Computer Science.",
      },
      {
        name: "Askaria College",
        description: "Intermediate in Computer Science.",
      },
    ],
  },
technical: {
  title: "Technical Skills",
  skills: [
    {
      title: "Full-Stack Architecture",
      description: "Expert in the modern React ecosystem, focusing on performance optimization through memoization and server-side rendering. Proficient in building highly interactive interfaces using Next.js 15, TypeScript, and Shadcn UI to deliver pixel-perfect, accessible user experiences.",
      tags: [
        {name: "Next.js 15"},
        {name: "React"},
        {name: "TypeScript"},
        {name: "Tailwind CSS"}
      ],
      images: [],
    },
    {
      title: "Backend & API Integration",
      description: "Experienced in building scalable server-side logic and secure backends using Node.js and Express Skilled in implementing Server Actions for real-time CRUD operations and integrating MongoDB with Mongoose for robust data modeling.",
      tags: [
        {name: "Node.js"},
        { name: "Express"},
        {name: "Mongoose"},
        {name: "MongoDB"}
      ],
      images: [],
    },
    {
      title: "Authentication & Security",
      description: "Proven track record of engineering secure authentication systems using Better-Auth with session-based security. Expert in implementing Role-Based Access Control (RBAC) to manage complex user permissions and ensure data integrity.",
      tags: [
        {name: "Better-Auth"},
        {name: "RBAC"},
        {name:  "Auth Guards"},
      ],
      images: [],
    },
    {
      title: "State Management & Testing",
      description: "Strong command of state management tools including Redux, Zustand, and React Hooks to maintain clean, reactive code structures. Committed to high code quality through Test-Driven Development (TDD) using Jest and Vitest.",
      tags: [
        {name: "Redux"},
        {name: "Zustand"},
        {name: "Jest"},
        {name: "TDD"},
      ],
      images: [],
    },
  ],
}
}
