import {
  JavascriptOriginal,
  PythonOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  CPlain,
  DjangoPlain,
  MysqlOriginalWordmark,
  PostgresqlOriginal,
  PhotoshopOriginal,
  FigmaOriginal,
  BlenderOriginal,
} from "devicons-react";

// Constants
const githubLink = "https://github.com/HarshadHindlekar";
const githubHostingLink = "https://harshadhindlekar.github.io";

// Profile Description
export const profileDescription = [
  "Hello, I'm Harshad Hindlekar, an experienced front-end web developer specializing in crafting seamless and dynamic user experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Typescript, I bring innovative designs to life and ensure they perform flawlessly across all devices. Let's create exceptional web experiences together!",
];

// Work Experience Template
export const workExperienceTemplate = [
  {
    key: 1,
    company: "vivanet", // Add company name here
    description: [
      "", // Add description points here
    ],
    duration: "sept 2022 - current", // Add duration here
    designation: "SDE -1", // Add designation here
    type: "work",
  },
];

// GitHub Repositories
export const githubRepos = [
  {
    name: "My_3D_Portfolio",
    techUsed: ["React", "JavaScript", "Bootstrap"],
    description: "Uncover deeper insights into my journey and capabilities.",
    githubLink: `${githubLink}/My_3D_Portfolio`,
    liveURL: "https://harshad-portfolio.vercel.app/",
  },
  {
    name: "On-Scroll Text Animations",
    techUsed: ["HTML", "CSS", "JavaScript"],
    description:
      "Some experiments with on-scroll 📜 typography 🌀 effects using SVG.🎞️",
    githubLink: `${githubLink}/On-Scroll-Text-Animations`,
    liveURL: `${githubHostingLink}/On-Scroll-Text-Animations/`,
  },
  {
    name: "Grid Item Hower Effect",
    techUsed: [ "JavaScript", "HTML", "CSS" ],
    description:
      "Some hover effects based on the grid 🥅 design Animation 🎞️",
    githubLink: `${githubLink}/Grid-Item-Hover-Effect`,
    liveURL: `${githubHostingLink}/Grid-Item-Hover-Effect/`,
  },
  {
    name: "Harshad's Pokemon World",
    techUsed: [ "JavaScript", "CSS", "HTML" ],
    description:
      "In pokemon their is a poketab which helps trainers to identify trainers that tab i tried to build.",
    githubLink: `${githubLink}/Harshad-s-Pokemon-world`,
    liveURL: `${githubHostingLink}/Harshad-s-Pokemon-world/`,
  },
  {
    name: "Sundown Studio Clone",
    techUsed: [ "CSS", "HTML", "JavaScript" ],
    description:
      "Builded a clone of a Sundown Studio to demonstrate my skills in Animated Web Applications",
    githubLink: `${githubLink}/Sundown-Studio`,
    liveURL: `${githubHostingLink}/Sundown-Studio/`,
  },
];

// Education Experience
export const educationExperience = [
  {
    key: 1,
    institution: "Mumbai University",
    graduation: "May 2022",
    degree: "Graduate",
    type: "education",
  },
  {
    key: 2,
    institution: "N S Pantwalawalkar college, Devgad",
    graduation: "Aug 2019",
    degree: "XII",
    type: "education",
  },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  {
    key: 1,
    name: "Python",
    type: "language",
    icon: PythonOriginal ? (
      <PythonOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: JavascriptOriginal ? (
      <JavascriptOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: Html5Original ? (
      <Html5Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: Css3Original ? (
      <Css3Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 5,
    name: "React",
    type: "framework",
    icon: ReactOriginal ? (
      <ReactOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  // {
  //   key: 6,
  //   name: "Next.js",
  //   type: "framework",
  //   icon: NextjsOriginal ? (
  //     <NextjsOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: TailwindcssOriginal ? (
      <TailwindcssOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 8,
    name: "Bootstrap",
    type: "framework",
    icon: BootstrapPlain ? (
      <BootstrapPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  // {
  //   key: 9,
  //   name: "Node.JS",
  //   type: "framework",
  //   icon: NodejsOriginal ? (
  //     <NodejsOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  {
    key: 10,
    name: "MongoDB",
    type: "database",
    icon: MongodbPlain ? (
      <MongodbPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 11,
    name: "Postman",
    type: "tool",
    icon: PostmanPlain ? (
      <PostmanPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 12,
    name: "C",
    type: "language",
    icon: CPlain ? <CPlain className={iconClass} size={iconSize} /> : null,
  },
  // {
  //   key: 13,
  //   name: "Express",
  //   type: "framework",
  //   icon: ExpressOriginal ? (
  //     <ExpressOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  {
    key: 14,
    name: "Django",
    type: "framework",
    icon: DjangoPlain ? (
      <DjangoPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 15,
    name: "MySQL",
    type: "database",
    icon: MysqlOriginalWordmark ? (
      <MysqlOriginalWordmark className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 16,
    name: "PostgreSQL",
    type: "database",
    icon: PostgresqlOriginal ? (
      <PostgresqlOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  // {
  //   key: 17,
  //   name: "Blender",
  //   type: "tool",
  //   icon: BlenderOriginal ? (
  //     <BlenderOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  // {
  //   key: 18,
  //   name: "Photoshop",
  //   type: "tool",
  //   icon: PhotoshopOriginal ? (
  //     <PhotoshopOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  // {
  //   key: 19,
  //   name: "Figma",
  //   type: "tool",
  //   icon: FigmaOriginal ? (
  //     <FigmaOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
];

const appsData = [
  {
    id: 1,
    name: "Google Chrome",
    icon: "https://window11clone.netlify.app/assets/chromeicon.png",
    action: "browser",
    size: "w-18 h-18",
  },
  {
    id: 2,
    name: "About Me",
    icon: "https://icon-library.com/images/windows-explorer-icon/windows-explorer-icon-19.jpg",
    action: "explorer",
    size: "w-10 h-12",
  },
  {
    id: 3,
    name: "Recycle Bin",
    icon: "https://img.icons8.com/fluency/452/full-recycle-bin.png",
    action: "recycle",
    size: "w-14 h-14",
  },
  {
    id: 4,
    name: "Microsoft Edge",
    icon: "https://seekicon.com/free-icon-download/microsoft-edge_2.svg",
    action: "browser",
    size: "w-10 h-10",
  },
  {
    id: 5,
    name: "Calculator",
    icon: "https://windows11clone.netlify.app/Assets/pinned-icons/calculator.png",
    action: "calculator",
    size: "w-11 h-11",
  },
  {
    id: 6,
    name: "VS Code",
    icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
    action: "vscode",
    size: "w-8 h-8",
  },
  {
    id: 7,
    name: "Emoji TicTacToe",
    icon: "https://raw.githubusercontent.com/MishanPoudel/Emoji-TicTacToe/main/public/favicon.ico",
    action: "app",
    subAction: "emoji",
    size: "w-10 h-10",
  },
  {
    id: 8,
    name: "Spotify",
    icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
    action: "app",
    subAction: "spotify",
    size: "w-10 h-10",
  },
];

// Export default data
export default appsData;

// Social Media Links
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/harshad-hindlekar-b94a07236/",
  github: githubLink,
};
