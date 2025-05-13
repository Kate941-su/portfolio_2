import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiIos,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
  FaAws,
  FaGoogle,
  FaCloudflare,
  FaInnosoft,
  FaApple,
  FaSwift,
  FaJenkins,
  FaPython,
} from "react-icons/fa";
import { SiReactquery, SiGoogleanalytics } from "react-icons/si";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: "Github", route: "/github" },
  { name: "Articles", route: "/article" },
  // { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Kaito Kitaya. All Rights Reserved.`,
  author: {
    name: "Kaito Kitaya",
    accounts: [
      {
        url: "https://github.com/Kate941-su",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/kaito-kitaya-379a70274/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://stackoverflow.com/users/22732415/kaito-kitaya",
        icon: <FaStackOverflow />,
        name: "StackOverflow",
        type: "orange",
      },
      {
        url: "https://medium.com/@kworkshere",
        icon: <FaMedium />,
        name: "Medium",
        type: "gray",
      },
      {
        url: "mailto:kaito.kitaya.personal@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1qTBDkUE5RT_O0QuwvP4N8yWGruAqK3Im/view?usp=drive_link",
  icon: <CgAlbum />,
  name: "Resume",
};

const techStacks = {
  Web: [
    {
      name: "React",
      icon: <FaReact size={20} />,
    },
    {
      name: "NextJS",
      icon: <TbBrandNextjs size={20} />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript size={20} />,
    },
    {
      name: "Python",
      icon: <FaPython size={20} />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss size={20} />,
    },
  ],
  Mobile: [
    {
      name: "Android",
      icon: <FaAndroid size={20} />,
    },
    {
      name: "iOS",
      icon: <FaApple size={20} />,
    },
    {
      name: "Flutter",
      icon: <SiFlutter size={20} />,
    },
    {
      name: "Kotlin",
      icon: <SiKotlin size={20} />,
    },
    {
      name: "Swift",
      icon: <FaSwift size={20} />,
    },
    {
      name: "Dart",
      icon: <SiDart size={20} />,
    },
  ],
  Infra: [
    {
      name: "Google Cloud Platform",
      icon: <FaGoogle size={20} />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={20} />,
    },
  ],
  Others: [
    {
      name: "Google Analytics",
      icon: <SiGoogleanalytics size={20} />,
    },
    {
      name: "Google Search Console",
      icon: <FaGoogle size={20} />,
    },
    {
      name: "CI/CD - Fastlane",
      icon: <SiFastlane size={20} />,
    },
    {
      name: "Github Actions",
      icon: <FaGithub size={20} />,
    },
    {
      name: "Jenkins",
      icon: <FaJenkins size={20} />,
    },
    {
      name: "Github & GitLab",
      icon: <FaGitAlt size={20} />,
    },
  ],
};

const companies = [
  {
    title: "Astro",
    alt: "astro image",
    url: "https://www.astro.com.my/",
    role: "Senior Assiociate Frontend Engineer",
    skills: ["React", "Sass", "Redux", "Redux Saga", "StorybookJS"],
    period: "Oct 2022 - Present",
    logo: "/images/astro.png",
  },
  {
    title: "Qumon Intelligence",
    alt: "qumon image",
    url: "https://www.qumonintelligence.com/",
    role: "Software Engineer",
    skills: [
      "Kotlin",
      "Java",
      "Android",
      "Javascript",
      "React",
      "React Native",
    ],
    period: "Aug 2020 - Sept 2022",
    logo: "/images/qumon.png",
  },
  {
    title: "TimeTec Cloud Sdn Bhd",
    alt: "timetec image",
    url: "https://www.timeteccloud.com/",
    role: "Mobile Application Developer Intern",
    skills: ["Java", "Android", "C#", "Appium Automation Testing", "AWS"],
    period: "Jul 2019 - Jan 2020",
    logo: "/images/timetec.png",
  },
];

const educations = [
  {
    title: "University Technology Malaysia (UTM)",
    alt: "utm image",
    url: "https://www.utm.my/",
    role: "Bachelor's Degree in Computer Science (Network and Security)",
    skills: ["CGPA - 3.79", "CCNA", "Security Management", "Network Security"],
    period: "Sept 2016 - Sept 2020",
    logo: "/images/utm.png",
  },
  {
    title: "SMK Mentakab",
    alt: "smk image",
    url: "https://www.facebook.com/pages/category/College---university/Sekolah-Menengah-Kebangsaan-Mentakab-224802077565350/",
    role: "STPM - Science Stream (Physics)",
    skills: ["CGPA - 3.33", "Math T", "Physics", "Chemistry"],
    period: "Jan 2015 - Jun 2016",
    logo: "/images/smk.png",
  },
];

const projects = {
  Works: [
    {
      name: "Ibis Paint",
      imageUrl:
        "/images/works/ibis.png",
      alt: "chativo",
      summary:
        "Developed a versatile painting application designed to cater to a wide range of users—from casual doodlers to digital art enthusiasts.",
      tech: ["C++"],
      link: "https://play.google.com/store/apps/details?id=io.chativo.chat",
    },
    {
      name: "Network Rooter Development",
      imageUrl: "/images/works/rooter.jpg",
      alt: "Rooter",
      summary:
        "Proven embedded engineer with extensive expertise in router development, particularly in the Small Office/Home Office (SOHO) segment.",
      link: "",
      tech: ["C", "Linux"],
    },
    {
      name: "Web Camera Online Service",
      imageUrl: "/images/works/broadcast.jpg",
      alt: "broadcast",
      summary:
        "Developed and released a mobile-first web streaming service with live broadcasting capabilities using smartphones. The user interface was built with Flutter for cross-platform efficiency, while the core functionalities were implemented in native Swift and Kotlin for maximum performance. ",
      link: "https://meraki-design-system.eco.astro.com.my/",
      tech: ["Flutter", "Swift", "Kotlin", "WebRTC"],
    },
    {
      name: "Video Creater Application",
      imageUrl: "/images/works/creater.jpg",
      alt: "dfap",
      summary:
        "Developed a native movie creator application featuring advanced video playback and editing capabilities. Utilized AVFoundation on iOS and Media3 on Android to deliver high-performance media handling across platforms.",
      link: "https://de-digital-fortress-assistant-stg.eco.astro.com.my/",
      tech: ["Flutter", "Swift", "Kotlin", "AVFoundation", "Media3"],
    },

    {
      name: "Video Wathcer Application",
      imageUrl:
        "/images/works/video-watch.jpg",
      alt: "chativo-v",
      summary:
        "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
      tech: ["React Native", "Javascript", "Redux", "Redux Saga", "RealmJS"],
      link: "https://play.google.com/store/apps/details?id=io.chativo.visitor",
    },
  ],
  Freelance: [
    {
      name: "Ideasss",
      imageUrl: "/images/ideasss.png",
      alt: "ideasss",
      summary:
        "NFT Platform for Creativity and Ideas,  First marketplace to connect demanders and designers through transparent competition",
      link: "https://ideasss.com/",
      tech: ["React", "ReactQuery", "TailwindCSS", "Typescript", "Zustand"],
    },
    {
      name: "3CommasClub NFT",
      imageUrl: "/images/3commas.png",
      alt: "3commasclub",
      summary:
        "NFC business card builder linked with unique NFT. Build business profile embed with NFC that allows others to scan and connect.",
      link: "https://nextjs-3commasclub-frontend.vercel.app/",
      tech: ["NextJS", "ChakraUI", "Ant Design", "Ant Design Pro"],
    },
    {
      name: "KlusterX Player Portal",
      imageUrl: "/images/klusterx_player.png",
      alt: "klusterx",
      summary:
        "Online Gaming Player Portal, built with NextJS, TailwindCSS and MantineUI",
      tech: ["NextJS", "TailwindCSS", "MantineUI", "Zustand"],
    },
    {
      name: "KlusterX Tenant Portal",
      imageUrl: "/images/klusterx_tenant.png",
      alt: "klusterx",
      summary: "Online Gaming Tenant Portal, built with Ant Design Pro",
      tech: ["UmiJS", "Ant Design", "Ant Design Pro"],
    },
  ],
  "Open Source": [
    {
      name: "React Date Dropdown",
      imageUrl: "/images/date-picker.png",
      alt: "date-picker",
      summary:
        "React Date Dropdown library. Highly customisable and provide individuals components for years, months and days",
      tech: ["React", "StorybookJS", "NPM", "Typescript"],
    },
    {
      name: "CM Script",
      imageUrl: "/images/cm-script.png",
      alt: "klusterx",
      summary: "CLI script for linting your commit message 🎉",
      tech: ["Javascript", "Bash", "CLI"],
    },
  ],
};

export {
  menuLinks,
  techStacks,
  siteConfig,
  resume,
  companies,
  educations,
  projects,
};
