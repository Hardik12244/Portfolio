export interface Project {
  title: string;
  name: string;
  timeline: string;
  description: string;
  features: string[];
  tech: string[];
  demo?: string;
  github: string;
  image: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SkillItem {
  name: string;
  category: "language" | "frontend" | "backend" | "database" | "cloud" | "tool" | "realtime";
}

export interface Achievement {
  title: string;
  description: string;
  category: "Hackathon" | "Project" | "Academic";
  date?: string;
  award?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  type: "Student" | "Hackathons" | "Open Source" | "Internship";
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  minor?: string;
  score: string;
  period?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
  resume?: string;
}

export const portfolioData = {
  personal: {
    name: "Hardik Garg",
    alias: "Scylent",
    role: "Full-Stack Developer",
    taglines: [
      "Full Stack Developer",
      "Product Builder",
      "Tech Enthusiast",
      "Lifelong Learner",
    ],
    additionalText: "been in tech since (real time from 8th class)",
    status: "Available for internships & collaborations",
    aboutIntro: "I build fast, intuitive web apps using TypeScript, React, and Next.js, along with backend systems using Node.js, Express, and PostgreSQL. I focus on clean structure, performance, and real usability, and I enjoy turning ideas into working products while exploring how AI can make interfaces more dynamic.",
    educationSubheading: "Honestly, I didn't learn much from college, but I learned things I couldn't learn outside of it.",
    footerQuote: "Man is made by his belief. As he believes, so he is.",
    footerAuthor: "Bhagavad Gita",
    contactFooter: "Response within 24 hours • Available for hire",
  },
  socials: {
    github: "https://github.com/Hardik12244",
    linkedin: "https://www.linkedin.com/in/hardik-garg-837665244/",
    twitter: "https://x.com/Hardik12244",
    email: "hardikgarg@example.com",
    resume: "#",
  } satisfies SocialLinks,
  skillsMatrix: [
    { name: "TypeScript", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "Golang", category: "language" },
    { name: "Rust", category: "language" },
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "Bun", category: "backend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Vite.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "npm", category: "tool" },
    { name: "Sequelize", category: "database" },
    { name: "Prisma", category: "database" },
    { name: "Drizzle", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Redis", category: "database" },
    { name: "AWS", category: "cloud" },
    { name: "Docker", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "GitHub", category: "tool" },
    { name: "Postman", category: "tool" },
    { name: "VS Code", category: "tool" },
    { name: "Vercel", category: "cloud" },
    { name: "Figma", category: "tool" },
    { name: "Framer Motion", category: "frontend" },
    { name: "Shadcn UI", category: "frontend" },
    { name: "NestJS", category: "backend" },
    { name: "Firebase", category: "cloud" },
    { name: "BigQuery", category: "database" },
    { name: "GCP", category: "cloud" },
    { name: "Cloudflare", category: "cloud" },
    { name: "GCP Pub/Sub", category: "cloud" },
    { name: "Socket.IO", category: "realtime" },
    { name: "Square API", category: "backend" },
    { name: "ModMed Integration", category: "backend" },
    { name: "Better Auth", category: "backend" },
    { name: "Hono", category: "backend" },
    { name: "WebRTC", category: "realtime" },
  ] satisfies SkillItem[],
  projects: [
    {
      title: "Syntra — AI Social & Dating Platform",
      name: "Syntra",
      timeline: "2024 — Present",
      description:
        "A full-stack AI-enhanced social and dating platform focused on meaningful interactions, realtime communication, and expressive user experiences.",
      features: ["Realtime messaging", "Socket.IO architecture", "Crush/match system", "Social feed"],
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "Framer Motion"],
      demo: "#",
      github: "https://github.com/Hardik12244/Syntra",
      image: "/Syntra.png",
      featured: true,
    },
    {
      title: "Obsidian RPG Learning Engine",
      name: "Obsidian",
      timeline: "2024 (Hackathon Build)",
      description:
        "Hackathon-built AI-powered RPG learning platform combining adaptive education mechanics, realtime gameplay systems, and immersive frontend experiences.",
      features: ["RPG-inspired UI", "Realtime systems", "AI integrations", "Phaser.js mechanics"],
      tech: ["React", "Express.js", "MongoDB", "Socket.IO", "Phaser.js", "Gemini AI"],
      demo: "#",
      github: "https://github.com/Hardik12244/FlameRoar",
      image: "/OBS.png",
      featured: true,
    },
    {
      title: "Leaflet — Editorial Blogging Platform",
      name: "Leaflet",
      timeline: "2023 — 2024",
      description:
        "Modern full-stack blogging platform inspired by premium publishing applications with elegant editorial UI and secure authentication systems.",
      features: ["JWT Auth", "Cloudinary uploads", "Commenting system", "Editorial UI"],
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary"],
      demo: "https://leaflet-tech.vercel.app/",
      github: "https://github.com/Hardik12244/Leaflet",
      image: "/Leadlef.png",
      featured: true,
    },
  ] satisfies Project[],
  hackathons: [
    {
      title: "Obsidian RPG Learning Engine",
      description: "Built an adaptive AI-powered RPG learning platform with realtime gameplay mechanics and Gemini AI integrations.",
      category: "Hackathon",
      award: "Top Hackathon Project",
      date: "2024",
    },
    {
      title: "Code Crucible Hackathon",
      description: "Engineered an innovative technical solution under strict time constraints, winning top honors among all participating teams.",
      category: "Hackathon",
      award: "Winner (1st Place)",
      date: "2024",
    },
    {
      title: "Internal DSA Hackathon",
      description: "Demonstrated superior algorithmic problem solving, optimization, and time complexity management under pressure.",
      category: "Hackathon",
      award: "1st Place",
      date: "2023",
    },
    {
      title: "KisanSetu Platform",
      description: "Engineered an agriculture technology platform focusing on full-stack systems, farmer connectivity, and realtime feature delivery.",
      category: "Project",
      award: "Featured Solution",
      date: "2023",
    },
  ] satisfies Achievement[],
  experience: [
    {
      role: "Student & Researcher",
      organization: "BPIT (GGSIPU)",
      period: "2023 — Present",
      location: "New Delhi, India (On-Site)",
      description: "Pursuing B.Tech in Information Technology with a Minor in Data Science. Focusing on data structures, algorithms, scalable backend systems, and modern web architectures.",
      type: "Student",
      current: true,
    },
    {
      role: "Hackathon Builder & Competitor",
      organization: "Various National & Internal Hackathons",
      period: "2023 — 2024",
      location: "India (Remote & On-Site)",
      description: "Participated in and won top honors across multiple hackathons. Specialized in rapid prototyping, realtime communication using Socket.IO, and integrating LLMs into interactive web products.",
      type: "Hackathons",
    },
    {
      role: "Open Source & Community Contributor",
      organization: "Developer Community",
      period: "2023 — Present",
      location: "Remote",
      description: "Actively building developer tooling, experimenting with Next.js App Router architectures, and collaborating on full-stack MERN ecosystem projects.",
      type: "Open Source",
    },
    {
      role: "Software Engineering Intern (Seeking)",
      organization: "Future Internship Placeholder",
      period: "Summer / Fall 2026",
      location: "Global / Remote / India",
      description: "Available for high-impact software engineering and product development internships. Ready to contribute to scalable web applications, AI integrations, and backend infrastructure.",
      type: "Internship",
    },
  ] satisfies ExperienceItem[],
  education: [
    {
      institution: "BPIT (Guru Gobind Singh Indraprastha University)",
      degree: "B.Tech in Information Technology",
      minor: "Minor in Data Science",
      score: "CGPA: 8.3",
      period: "2023 — 2027",
    },
  ] satisfies EducationItem[],
};
