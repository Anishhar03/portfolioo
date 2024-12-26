import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];
export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Buyfi",
        icon: shopify,
        iconBg: "#accbe1",
        date: "September 2023 - December 2023",
        points: [
            "Developed and maintained high-performance web applications using React.js and related technologies.",
            "Collaborated with designers, product managers, and developers to deliver user-friendly, responsive designs.",
            "Optimized cross-browser compatibility and implemented scalable UI components.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Anishhar03',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/anish-kumar-98a04a1bb',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'Audio Translator App',
        description: 'A React.js-powered app leveraging Hugging Face Transformers for real-time audio-to-text conversion and multilingual translation.',
        link: 'https://scribidooo.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'AI Mock Interview Platform',
        description: 'Built a personalized AI-driven mock interview platform using Next.js, Google Gemini AI, and secure authentication with Clerk.',
        link: 'https://github.com/Anishhar03/ai-mock',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Time Chat App',
        description: 'A MERN-stack chat application with AI-enhanced features like summarization and real-time interactions using Google Gemini AI.',
        link: 'https://github.com/Anishhar03/chat-app/tree/main/Downloads/soen-main/soen-main',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Chessify',
        description: 'Developed a multiplayer chess application with real-time gameplay using Socket.io. Integrated EJS for dynamic templating, implemented game logic, user authentication, and an interactive UI for smooth user experience.',
        link: 'https://github.com/Anishhar03/chessify',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI-Powered Gym Feedback App',
        description: 'Designed a web application to provide real-time posture feedback for gym enthusiasts using PoseNet and intuitive UI components.',
        link: 'https://github.com/Anishhar03/gym_posture',
    }
];