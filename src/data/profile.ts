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
    "Software Engineer with 7+ years of experience leading full-stack development and cloud-native solutions across eCommerce and legal tech. Proven" +
"leader in driving technical strategy, mentoring teams, and delivering scalable systems using .NET, Java, Python, and Angular on Azure and AWS." +
"Trusted to align engineering with business goals and deliver high-impact, production-ready products.",
  experience: [
    {
      title: "Software Developer — Admin Graduate Assistant",
      company: "Northwest Missouri State University - CITE",
      location: "Maryville, MO",
      date: "Oct 2024 – Dec 2025 (Expected)",
      bullets: [
        "Led a team of 8 developers to enhance the Online Professional & Supplemental Textbook Finder applications used by 30+ faculty members, to " +
"manage more than 1,000 online students in an Agile team-based environment.",
"Developed and deployed an Auto-Enroll application used by 30+ faculty to digitally select courses for upcoming semesters, automating PDF " +
"generation and email submission to the registrar, reducing manual effort and email traffic by over 80% while improving system efficiency" +
"and stability.",
"Applied API design best practices and implemented maintainable, testable components for seamless integration across platforms."
      ],
    },
    {
      title: "Freelance Software Engineer",
      company: "Quick Job Manager",
      date: "Jul 2023 – May 2024",
      bullets: [
        "Angular, HTML, and SCSS, and improving overall user experience.",
"Migrated REST APIs to GraphQL, reducing over-fetching by approximately 40% and improving performance and scalability of client " +
"applications.",
"Implemented monitoring and proactive optimizations to sustain system performance under growing traffic."
      ],
    },
    {
      title: "Software Engineer",
      company: "RS Americas",
      date: "Jul 2022 - Jun 2023",
      bullets: [
        "Independently developed and delivered key modules for internal sales applications, reducing a long-running SQL query from few minutes to " +
"a second, increasing sales productivity.",
"Demonstrated expertise in C#, .NET, and frontend technologies (Angular, Vue.js) by consistently building scalable, user-friendly interfaces " +
"aligned with business requirements.",
"Actively contributed to team success by assisting peers with debugging and solution design, fostering a collaborative and knowledge-sharing " +
"environment."
      ],
    },
    {
      title: "Engineer",
      company: "LTI Mindtree Ltd",
      date: "Jun 2022 - Jul 2022",
      bullets: [
        "Familiar with Azure Files, Blob Storage, and Azure Queues for cloud-based storage and messaging through exploratory project involvement."
      ],
    },
    {
      title: "Software Engineer",
      company: "Seguro Soft Technologies Pvt Limited",
      date: "May 2017 - Mar 2021",
      bullets: [
        "Performed R&D and developed a dynamic vector map feature using Mapael (jQuery plugin) to visualize migration flows between cities.",
"Led the migration from VB.NET and ASP.NET to MVC, improving UX and increasing engagement by 25% and revenue by 20%.",
"Mentored junior engineers on scalable system design and test-driven practices, improving team delivery standards."
      ],
    }
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
  "languages": ["C#", "Java", "Python", "SQL", "TypeScript", "JavaScript"],
  "frameworks_and_libraries": [
    ".NET Framework", ".NET Core", "ASP.NET MVC", "ASP.NET Core", 
    "Entity Framework", "ADO.NET", "Dapper", "Web API", "GraphQL", "Spring Boot"
  ],
  "frontend": ["HTML", "CSS", "Bootstrap", "Angular", "Vue.js", "React", "jQuery", "Kendo UI"],
  "databases": ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Pinecone"],
  "cloud_platforms": ["Microsoft Azure", "AWS"],
  "revision_control": ["GitHub", "GitLab", "SVN (TortoiseSVN)"],
  "devops_and_containerization": ["Docker", "GitLab CI/CD", "Azure DevOps"],
  "monitoring_and_logging_tools": ["Grafana", "Akamai", "SonarQube", "SEQ"],
  "security_protocols": ["OAuth2", "LDAP", "JWT", "OWASP", "Role-based Access Control (RBAC)"],
  "ides_and_development_tools": ["Visual Studio", "Visual Studio Code", "NetBeans", "Eclipse", "Android Studio"],
  "work_management_tools": ["JIRA", "Assembla", "Azure DevOps", "GitHub"]
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
      coursework: ["Advanced DB", "Mobile Computing - Android", "Generative AI", "Big Data", "Patterns & Frameworks"],
    },
  ],
};

export default profile;
