import { Profile } from "../types";

const profile: Profile = {
  name: "Anushka Uppula",
  role: "Software Engineer",
  location: "Maryville, MO",
  email: "anushkauppula95@gmail.com",
  phone: "+1-206-886-6609",
  links: {
    linkedin: "https://www.linkedin.com/in/anushka-uppula-296ba872/",
    github: "https://github.com/anushkauppula",
    medium: "https://medium.com/@anushkachary",
  },
  summary:
    "Software Engineer with 7+ years leading full-stack and cloud-native solutions across eCommerce and legal tech.",
  experience: [
    {
      title: "Software Developer — Admin Graduate Assistant",
      company: "Northwest Missouri State University - CITE",
      location: "Maryville, MO",
      date: "Oct 2024 – Dec 2025 (Expected)",
      bullets: [
        "Led a team of 8 developers to enhance textbook apps.",
        "Built Auto-Enroll app reducing manual effort by 80%.",
      ],
    },
    {
      title: "Freelance Software Engineer",
      company: "Quick Job Manager",
      date: "Jul 2023 – May 2024",
      bullets: [
        "Boosted engagement by 20% through UX improvements.",
        "Migrated REST to GraphQL reducing over-fetching by 40%.",
      ],
    },
  ],
  projects: [
    {
      name: "Fresh Track App — Food Expiration Monitoring",
      bullets: [
        "Smart notifications projected to reduce waste by 30%.",
        "Integrated DL model with 25% boost in accuracy.",
      ],
      stack: ["Android", "Java", "DL Model", "API"],
    },
    {
      name: "AI Assistant for Sales",
      bullets: [
        "Voice AI & sentiment analysis for real-time coaching.",
        "Handled scaling & API performance.",
      ],
      stack: ["React Native", "Python", "Whisper API", "GPT-4o-mini"],
    },
  ],
  skills: {
    languages: ["C#", "Java", "Python", "SQL", "TypeScript", "JavaScript"],
    frontend: ["React", "Angular", "Vue.js", "HTML", "CSS", "Bootstrap"],
    backend: [".NET Core", "Spring Boot", "GraphQL", "Web API"],
    databases: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Pinecone"],
    cloud: ["Azure", "AWS"],
    devops: ["Docker", "Azure DevOps", "GitLab CI/CD"],
    tools: ["VS", "VSCode", "Android Studio", "GitHub", "GitLab"],
  },
  leadership: [
    "Led team of 8 devs to enhance textbook systems.",
    "Mentored interns on .NET best practices.",
  ],
  impact: [
    "Legacy migration to MVC → +25% engagement, +20% revenue.",
    "Auto-Enroll app → 80%+ reduction in manual work.",
  ],
  awards: [
    "Full Academic Scholarship at NW Missouri State.",
    "Best Employee Awards at Seguro Soft (2018 & 2019).",
  ],
  presentations: ["Presented Fresh Track app at CCSC Conference, Iowa."],
  education: [
    {
      degree: "M.S., Applied Computer Science (GPA 4.0)",
      school: "Northwest Missouri State University",
      date: "Dec 2025 (Expected)",
      coursework: ["Advanced DB", "Mobile Computing", "Generative AI"],
    },
  ],
};

export default profile;
