// Static project data for the portfolio. Kept here so the components stay
// presentational and the content is edited in one place.

// The main showcase, in display order (top to bottom).
export const projects = [
  {
    id: 7,
    title: "Nirmaan.ai",
    // A gallery: the AI builder, an app it generates (LOB store), and the
    // ControlHub dashboard that configures each tenant.
    images: [
      { src: "./NirmaanAI.png", label: "AI Builder" },
      { src: "./NirmaanApp.png", label: "Generated App (LOB)" },
      { src: "./NirmaanDashboard.png", label: "ControlHub Dashboard" },
    ],
    desc: "Nirmaan.ai is an AI-powered platform that scaffolds production-ready, multi-tenant e-commerce apps in minutes. A visual builder provisions each client (LOB) end-to-end — a Flutter app for iOS/Android/Web, a Node.js backend, and the ControlHub dashboard to configure it — driven by runtime configuration and an event-driven pipeline (Redis, Kafka, OpenAI).",
    demos: [
      { label: "AI Builder", url: "https://nirmaanaidemo.vercel.app/" },
      { label: "Store (LOB demo)", url: "https://kanhademo.vercel.app/" },
      { label: "ControlHub Dashboard", url: "https://controlhubdemo.vercel.app/" },
    ],
    repos: [
      { label: "AI Builder", url: "https://github.com/Vermasaiyam/nirmaan.ai" },
      { label: "App (Flutter)", url: "https://github.com/Vermasaiyam/ecommerce_app" },
      { label: "Backend", url: "https://github.com/Vermasaiyam/test_backend" },
      { label: "ControlHub Dashboard", url: "https://github.com/Vermasaiyam/controlhub" },
    ],
    technologies: ["Next.js", "TypeScript", "Flutter", "Node.js", "MongoDB", "Redis", "Kafka", "OpenAI API"],
  },
  {
    id: 6,
    title: "Mehfil",
    img: "./Mehfil.png",
    desc: "Mehfil plays any YouTube, Spotify, Apple Music, JioSaavn, Gaana or Deezer playlist start to finish on one quiet screen — background audio, lock-screen controls, synced lyrics, and a library that syncs across devices. Built as a Next.js web app and a companion Flutter Android app sharing one backend.",
    link: "https://mehfilmusic.vercel.app/",
    code: "https://github.com/Vermasaiyam/player",
    appCode: "https://github.com/Vermasaiyam/mehfil-app",
    apk: "https://github.com/Vermasaiyam/mehfil-releases/releases/latest/download/mehfil.apk",
    technologies: ["Next.js", "TypeScript", "React", "Zustand", "Firebase", "Flutter", "Dart", "Tailwind CSS"],
  },
  {
    id: 1,
    title: "QuizLab",
    img: "./QuizLab.png",
    desc: "QuizLab transforms YouTube videos into interactive learning experiences by transcribing audio, summarizing content, and creating quizzes for users to earn tokens.",
    link: "https://quizlab.onrender.com/",
    code: "https://github.com/Vermasaiyam/quizlab",
    technologies: ["TailwindCSS", "ReactJS", "Node.js", "Express.js", "MongoDB", "Flask", "Whisper AI", "Groq AI"],
  },
  {
    id: 2,
    title: "PhotoAI",
    img: "./PhotoAI.png",
    desc: "PhotoAI allows users to create folders to upload and share event pictures, with face recognition and permission-based access for viewing photos.",
    link: false,
    code: "https://github.com/Vermasaiyam/PhotoAI-MIET",
    technologies: ["TailwindCSS", "ReactJS", "Node.js", "Express.js", "MongoDB", "Flask", "Face Recognition"],
  },
  {
    id: 4,
    title: "Feasto",
    img: "./Feasto.png",
    desc: "Feasto is a food ordering platform built with the MERN stack, offering OTP-based authentication, menu management, Stripe payment integration, and a user hierarchy system for both users and restaurant owners.",
    link: "https://feasto-3uh7.onrender.com/",
    code: "https://github.com/Vermasaiyam/Feasto/",
    technologies: ["TailwindCSS", "Typescript", "ReactJS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 5,
    title: "ChatterBox",
    img: "./ChatterBox.png",
    desc: "ChatterBox is a social media platform with features like following users, interacting with posts, and real-time notifications. Built with the MERN stack and Redux for seamless user interaction.",
    link: "https://chatterbox-aaxc.onrender.com/login",
    code: "https://github.com/Vermasaiyam/ChatterBox",
    technologies: ["TailwindCSS", "ReactJS", "Node.js", "Express.js", "MongoDB"],
  },
];

// Smaller cards under the main showcase — the rest from the résumé.
export const moreProjects = [
  {
    id: "chattap",
    title: "ChatTap",
    desc: "A real-time chat application with instant messaging and live presence.",
    code: "https://github.com/Vermasaiyam/ChatTap",
    technologies: ["ReactJS", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    id: "eventhub",
    title: "EventHub",
    desc: "An event management platform to create, discover and register for events.",
    code: "https://github.com/Vermasaiyam/EventHub",
    technologies: ["ReactJS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "momcare",
    title: "MomCare",
    desc: "An AI health assistant for expecting mothers — won Gem of the Hackathon (#1 of 40+ teams).",
    code: "https://github.com/Vermasaiyam/MomCare",
    technologies: ["ReactJS", "Node.js", "MongoDB", "AI"],
  },
];
