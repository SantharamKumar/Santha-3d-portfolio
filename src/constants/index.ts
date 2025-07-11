import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  PCSSA,
  tripguide,
  threejs,
  PCSA,
  CPDC,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Pega Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
    {
    title: "Web Developer",
    icon: web,
  },
];

const technologies: TTechnology[] = [
  {
    name: "PCSSA",
    icon: PCSSA,
  },
  {
    name: "PCSA",
    icon: PCSA,
  },
  {
    name: "PCDC",
    icon: CPDC,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Pega Developer",
    companyName: "Coforge",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2022 - Mar 2025",
    points: [
      "Collaborated with cross-functional teams to deliver user stories within sprint timelines, maintaining high code quality.",
      "Gained domain knowledge across various Lines of Business (LOB) to design and implement scalable and efficient logic per business requirements.",
      "Designed and developed workflow processes utilizing Pega components such as Decision Tables, Declarative Expressions, Report Definitions, When Rules, Activities, Data Transforms, Sections, Flow Actions, and Data Pages.",
      "Built and customized user interface components using Harness, Sections, and Skin rules for consistent and responsive UI.",
      "Developed complex flows including Sub-processes and Spin-off Flows using advanced flow shapes and utilities.",
      "Implemented key PRPC rules like Declarative Rules, SLAs, and Data Transforms to automate business logic and case life cycles.",
      "Ensured robust validation mechanisms, and effectively managed cases using Work Queues and Work Groups.",
      "Worked on Pega NLP capabilities to analyze unstructured text data and integrate intelligent decisioning into case flows.",
      "Conducted thorough unit testing, and resolved issues using PRPC tools such as Clipboard and Tracer.",
      "Maintained Unit Test Documentation for each user story to support agile delivery and QA processes.",
      "Utilized Pega Agile Studio for managing sprint activities, tracking user story status, and ensuring agile compliance.",
      "Actively participated in Daily Stand-ups, Scrum Meetings, and Sprint Retrospectives with offshore and onshore teams."
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "",
    name: "Pega Certified Senior System Architect",
    designation: "Developer",
    company: "Pega Systems",
    image: PCSSA,
  },
  {
    testimonial:
      "",
    name: "Pega Certified System Architect",
    designation: "Developer",
    company: "Pega Systems",
    //image: "https://accounts.pega.com/profile/SantharamK/share/BPEGAPCSA84V1-PEGAPCSA84V1",
    image: PCSSA,
  },
  {
    testimonial:
    "",
    name: "Pega Certified Decisioning Consultant",
    designation: "Developer",
    company: "Pega Systems",
    image: "https://accounts.pega.com/profile/SantharamK/share/BPEGACPDC24V1-PEGACPDC24V1",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
