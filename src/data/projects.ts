import mealsDB from "../assets/mealsdb.png";
import gpt3 from "../assets/gpt3.png";
import bookhive from "../assets/Bookhive.png";
import jobtracker from "../assets/job-tracker.png";
import devflow from "../assets/devflow.png";
export interface Project {
  id: string;
  image: string;
  title: string;
  infoProject: string[];
  description: string;
  technologies: string[];
  linkLiveVersion: string;
  linkSource: string;
}

export const projects: Project[] = [
  {
    id: '1',
    image: devflow,
    title: 'DevFlow',
    infoProject: ['Collaborative', 'Full Stack Development', '2026'],
    description: 'A real-time collaborative code review and task management platform built for modern development teams. ',
    technologies: ['NextJs', 'TailwindCss', 'Mongoose'],
    linkLiveVersion: 'https://dev-flow-fawn.vercel.app/',
    linkSource: 'https://github.com/Itswali/DevFlow',
  },
  {
    id: '2',
    image: jobtracker,
    title: 'Job-Tracker',
    infoProject: ['Job Tracker', 'Full Stack Dev', '2026'],
    description: 'Job Tracker is a high-performance, full-stack Kanban application designed to centralize and simplify the job search experience. Built with the Next.js 15 App Router and TypeScript, it transforms the often overwhelming process of career hunting into a structured, visual workflow.',
    technologies: ['NEXTJS', 'Tailwind CSS', 'TypeScript'],
    linkLiveVersion: 'https://job-tracker-9cry.vercel.app/',
    linkSource: 'https://github.com/Itswali/Job-Tracker',
  },
  {
    id: '3',
    image: bookhive,
    title: 'Book Hive',
    infoProject: ['Books', 'MERN Stack Dev', '2026'],
    description: 'BOOKHIVE is a robust, full-stack digital library platform designed to allow users to securely browse, read, and manage a catalog of digital books. Built on the MERN Stack (MongoDB, Express, React, Node.js), it features comprehensive Role-Based Access Control (RBAC) to differentiate between regular users and system administrators.',
    technologies: ['Reacat', 'Express', 'Node', 'Mongoose'],
    linkLiveVersion: 'https://book-hives.netlify.app/',
    linkSource: 'https://github.com/Itswali/BOOK-HIVE',
  },
    {
    id: '4',
    image: mealsDB,
    title: 'MealsDb',
    infoProject: ['CANOPY', 'Full Stack Dev', '2022'],
    description: 'This is a single page dynamic web app that show meals Description , Recipes and You can find your favorite meal by searching it , Its using API to load all the data and images.',
    technologies: ['html', 'css', 'javaScript'],
    linkLiveVersion: 'https://itswali.github.io/MealsDB/',
    linkSource: 'https://github.com/Itswali/MealsDB/',
  },
  {
    id: '5',
    image: gpt3,
    title: 'gpt3',
    infoProject: ['CANOPY', 'Front End Development', '2022'],
    description: 'This is a single page dynamic web app that display the deatils of what GPT3 is and its information with appealing design.',
    technologies: ['html', 'Scss', 'React'],
    linkLiveVersion: 'https://gpt-3-z9vl.onrender.com/',
    linkSource: 'https://github.com/Itswali/GPT3/',
  },


];
