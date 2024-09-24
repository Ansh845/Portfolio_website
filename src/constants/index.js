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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  yelp,
  chatApp,
  textbinds
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: docker,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Upcoming SDE Intern 2025",
    company_name: "Texas Instruments, Banglore",
    icon: starbucks,
    iconBg: "red",
    date: "May 2025 - July 2025",
    points: [
      "Experience Awaiting Soon..."
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Mailer Daemon, IIT(ISM) Dhanbad",
    icon: shopify,
    iconBg: "#FFFFFF",
    date: "April 2023 - Present",
    points: [
      "Developed and managed the Placementor website used by the students of IIT Dhanbad.",
      "Have more than 3k active monthly users and more than 15k API calls per month.",
      "Gave insights about the placement and internship statistics of IIT Dhanbad.",
      "Managed Backend technology on sanity.io"
    ],
  },
  {
    title: "ReactJS Developer",
    company_name: "Being Artifex, IIT(ISM) Dhanbad",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive Website for College mates.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Collobarting with seniors to build websites for college."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "JobHunt-Website",
    description:
      "The JobHunt website is a perfect job portal website wherein the recruiters as well as job seekers find a way to connect and fulfil their desires. Provided with a separate login option for recruiters and applicants, this website allows recruiters to register their companies and post different job profiles on which applicants can find easily.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/Ansh845/JobHunt-MERN-Website",
  },
  {
    name: "Youtube Bookmark Extension",
    description:
      "Introducing a YouTube video bookmarking Chrome extension that brings ease and organization to your watching experience. Save specific moments, categorize bookmarks, and return to them with just a click. Whether it’s a tutorial, a memorable clip, or a key insight, you’ll never lose track of your favorite YouTube content again!",
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
    source_code_link: "https://github.com/Ansh845/Youtube_Bookmark_ChromeExtension",
  },
  {
    name: "Placementor",
    description:
      "Placementor is a dedicated platform created by Mailer Daemon for the students of IIT ISM, offering valuable insights into placement questions from top companies. With detailed data on over 300 companies, it provides essential resources to help students prepare effectively for their placements. Unlock company-specific trends and ace your interviews with Placementor!",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ansh845/Placementor",
  },
  {
    name: "YelpCamp-Website",
    description:
      "YelpCamp is a dynamic platform that allows users to register and explore campgrounds with ease, powered by geolocation for seamless browsing. Users can share their experiences by leaving comments, providing ratings, and discovering top-rated camping spots. It’s the perfect tool for outdoor enthusiasts looking to explore and review unique campgrounds.",
    tags: [
      {
        name: "Vanilla_JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: yelp,
    source_code_link: "https://github.com/Ansh845/Yelp_Camp-Website",
  },
  {
    name: "TextBinds Ebook-Website",
    description:
      "Textbinds is a MERN-based web project that brings books to life by fetching details and prices using an ebook API. Users can easily browse, explore, and star-mark their favorite books for quick access. It’s a seamless platform for book lovers to discover and track their next read.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: textbinds,
    source_code_link: "https://github.com/Ansh845/TextBinds-Ebook-Website",
  },
  {
    name: "Chat Application",
    description:
      "I developed a concurrent chat application that enables real-time messaging within the OS terminal window using multithreading. The application efficiently handles multiple users simultaneously, ensuring smooth communication without delays. It’s a practical demonstration of threading and concurrency in action, perfect for learning system-level programming",
    tags: [
      {
        name: "Multithreading",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      }
    ],
    image: chatApp,
    source_code_link: "https://github.com/Ansh845/Concurrent_Chat_Application",
  },
];

export { services, technologies, experiences, testimonials, projects };
