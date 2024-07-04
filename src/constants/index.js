import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = [
  "Hi there! Welcome to my portfolio. Here, you’ll get to know more about me and my journey as a full-stack developer. This portfolio is built using React, my favorite front-end library, and Tailwind, my go-to CSS framework. The smooth animations you see are brought to life with Framer Motion.",
  "In this space, you'll find a showcase of my projects, a bit about my background, and insights into the technologies I love working with. Each project highlights my commitment to creating seamless user experiences and efficient, scalable solutions.",
  "Feel free to explore and reach out if you’d like to collaborate or learn more about my work. I’m always excited to connect with fellow developers and tech enthusiasts. Thanks for visiting!"
];
;

export const ABOUT_TEXT = `I'm a versatile full stack developer with a passion for crafting efficient, user-friendly web applications. Over four years, I've honed my skills in React, Next.js, Node.js, and databases like MySQL, PostgreSQL, and MongoDB. My journey began with curiosity about how the web works, growing into a career where I continuously learn and tackle new challenges. I excel in both front-end design and back-end architecture, thriving in collaborative environments where I can solve complex problems. Beyond coding, I stay active, explore emerging technologies, and contribute to open-source projects. With each line of code, I'm not just building applications; I'm helping shape our digital future.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - October 2024",
    role: "Web Developer Intern",
    company: "Bike Bear Sdn Bhd",
    description: `Interned and was taught by experienced seniors in developing and maintaining websites using WordPress, Next.js, and HTML5/CSS. Collaborated with MNC companies such as McDonald's and Tealive.`,
    technologies: ["Wordpress", "HTML5/CSS", "Next.js", "MongoDB"],
  },
  {
    year: "January 2021 - January 2025",
    role: "Software Engineering Major",
    company: "Multimedia University, Cyberjaya",
    description: `Achieved multiple Dean's List Awards throughout my 3 years of degree. Published an academic journal for CITIC 2024 titled "Empowering Dental Healthcare: Leveraging Generative AI for Enhanced Accessibility and Informed Decision-Making". `,
    technologies: ["Software Design & QA", "OOP", "Database"],
  },

];

export const PROJECTS = [

  {
    title: "Personal Library Website",
    image: project2,
    description:
      "A personal library that tracks all the books that I have read since the COVID-19 pandemic.",
    technologies: ["HTML5", "CSS", "ReactJS", "Vite" , "Vercel"],
  },
  {
    title: "FitMeister: A Fitness Tracking Website",
    image: project1,
    description:
      "A comprehensive fitness tracking website offering advanced features such as interactive graph analytics, BMI calculation, and full CRUD functionality for workout entries, all seamlessly integrated with MongoDB's cloud database",
    technologies: ["HTML5", "CSS", "ReactJS", "Node.js", "MongoDB"],
  },
  {
    title: "My Portfolio Website",
    image: project3,
    description:
      "My personal portfolio website showcasing my projects, skills, and contact information.",
    technologies: ["HTML5", "Tailwind", "ReactJS", "Vercel", "Vite"],
  },

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+6011 1138 4090 ",
  email: "lawming234@gmail.com",
};
