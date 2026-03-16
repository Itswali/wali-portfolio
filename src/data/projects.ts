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
    image: 'src/assets/global-summit.png',
    title: 'Global-Summit',
    infoProject: ['Global Summit', 'Full Stack Dev', '2022'],
    description: 'This is a UN Refugee Advert page for an annual Summit meeting held in America. Featuring global speakers and key topics.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkLiveVersion: 'https://itswali.github.io/Global-Summit/',
    linkSource: 'https://github.com/Itswali/Global-Summit',
  },
    {
    id: '2',
    image: 'src/assets/mealsdb.png',
    title: 'MealsDb',
    infoProject: ['CANOPY', 'Full Stack Dev', '2022'],
    description: 'This is a single page dynamic web app that show meals Description , Recipes and You can find your favorite meal by searching it , Its using API to load all the data and images.',
    technologies: ['html', 'css', 'javaScript'],
    linkLiveVersion: 'https://itswali.github.io/MealsDB/',
    linkSource: 'https://github.com/Itswali/MealsDB/',
  },
  {
    id: '3',
    image: 'src/assets/Bookhive.png',
    title: 'Book Hive',
    infoProject: ['Books', 'MERN Stack Dev', '2026'],
    description: 'BOOKHIVE is a robust, full-stack digital library platform designed to allow users to securely browse, read, and manage a catalog of digital books. Built on the MERN Stack (MongoDB, Express, React, Node.js), it features comprehensive Role-Based Access Control (RBAC) to differentiate between regular users and system administrators.',
    technologies: ['Reacat', 'Express', 'Node', 'Mongoose'],
    linkLiveVersion: 'https://book-hives.netlify.app/',
    linkSource: 'https://github.com/Itswali/BOOK-HIVE',
  },
  {
    id: '4',
    image: 'src/assets/gpt3.png',
    title: 'GPT3',
    infoProject: ['CANOPY', 'Front End Development', '2022'],
    description: 'This is a single page dynamic web app that display the deatils of what GPT3 is and its information with appealing design.',
    technologies: ['html', 'Scss', 'React'],
    linkLiveVersion: 'https://gpt-3-z9vl.onrender.com/',
    linkSource: 'https://github.com/Itswali/GPT3/',
  },

];
