import type { ReactNode } from "react";



interface Tag {
  name: string;
  icon: string;
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
  description: "Full-Stack Web Developer from Rawalpindi, Pakistan",
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
           "Engineered a secure authentication system using Better-Auth",
           "Implemented Server Actions for real-time CRUD operations.",
          "Developed a digital library platform with Role-Based Access Control (RBAC)."
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
        title: "Frontend Architecture",
        description: "Expert in React, Shadcn UI, and Tailwind CSS.",
        tags: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
    ],
  }
}
