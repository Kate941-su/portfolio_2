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
    title: "miracleave Inc",
    alt: "astro image",
    url: "https://www.miracleave.co.jp/",
    role: "Mobile Software Engineer",
    skills: ["React", "Sass", "Redux", "Redux Saga", "StorybookJS"],
    period: "May 2023 - Sep 2024",
    logo: "/images/history/mira.png",
  },
  {
    title: "Yamaha Corporation",
    alt: "Yahama",
    url: "https://www.yamaha.com/en/",
    role: "Embeded Software Engineer",
    skills: [
      "C",
      "Javascript",
      "Lua",
    ],
    period: "Apr 2022 - May 2023",
    logo: "/images/history/yamaha.png",
  },
  {
    title: "Ibis Inc",
    alt: "Ibis.inc",
    url: "https://ibispaint.com/?lang=en-US",
    role: "Mobile Application Developer Intern",
    skills: ["Ios", "Android", "C++"],
    period: "Mar 2021 - Mar 2022",
    logo: "/images/works/ibis.png",
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
      link: "",
      tech: ["Flutter", "Swift", "Kotlin", "WebRTC"],
    },
    {
      name: "Video Creater Application",
      imageUrl: "/images/works/creater.jpg",
      alt: "dfap",
      summary:
        "Developed a native movie creator application featuring advanced video playback and editing capabilities. Utilized AVFoundation on iOS and Media3 on Android to deliver high-performance media handling across platforms.",
      link: "",
      tech: ["Flutter", "Swift", "Kotlin", "AVFoundation", "Media3"],
    },

    {
      name: "Video Wathcer Application",
      imageUrl:
        "/images/works/video-watch.jpg",
      alt: "chativo-v",
      summary:
        "Built a cross-platform video watching application using Kotlin Multiplatform, featuring VR mode support on iOS for immersive viewing. Designed for a seamless experience across devices while leveraging native capabilities where needed",
      tech: ["Kotlin", "Swift", "SwiftUI", "Jetpack Compose", "Kotlin Multiplatform"],
      link: "",
    },
  ],
  Freelance: [
    {
      name: "Nakaze Dental Clinic (浜松ナカゼ歯科)",
      imageUrl: "/images/works/nakaze.png",
      alt: "ideasss",
      summary:
        "The simple dental web site. The concept is 'Being simple is the best for all generations.' I make efforts for what the customer demands.",
      link: "https://hamamatsu-nakaze-dental.com/introduce.html",
      tech: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Iwase dental clinic (岩瀬歯科医院)",
      imageUrl: "/images/works/logo_iwase.png",
      alt: "klusterx",
      summary:
        "This site is also a simple web site. I think more about maintainability and easy to add features. These reasones get me use NextJS framework.",
      tech: ["NextJS", "TailwindCSS", "React"],
    },
    {
      name: "Blood Pressuer Management Handnote (シンプル血圧手帳)",
      imageUrl: "/images/works/blood.png",
      alt: "klusterx",
      summary:
        "This app hopes that people have high blood pressure messure their own blood pressure easily and the notes are easy to look. the app is being used 100+ people.",
      tech: ["NextJS", "TailwindCSS", "React"],
    },
  ],
  "Open Source": [
    {
      name: "unused_import_remover",
      imageUrl: "/images/works/unused_import_remover.png",
      alt: "date-picker",
      link: "https://pub.dev/packages/unused_import_remover",
      summary:
        "The liblrary detects the lines written as unused import statement and remove them only one time command execution.",
      tech: ["Dart", "Flutter"],
    },
    {
      name: "Sio",
      imageUrl: "/images/works/sio.png",
      alt: "sio",
      link: "https://cocoapods.org/pods/Sio",
      summary: "Http client wrapper base on Swift standard Http client 'URLSession'. This library is impressed with DIO which is common as Dart Http Client. This library is used 500+ projects.",
      tech: ["Swift"],
    },
    {
      name: "MPLogger",
      imageUrl: "/images/works/mplogger.png",
      alt: "mplogger",
      link: "https://mvnrepository.com/artifact/io.github.kate941-su/mplogger/1.0.2",
      summary: "This logger is develped for Compose Multiplatform users. Once people developing by Kotlin Multiplatform or Compose Multiplatform add dependency you can write Android like logging by this library.",
      tech: ["Kotlin", "Compose Multiplatform"],
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
