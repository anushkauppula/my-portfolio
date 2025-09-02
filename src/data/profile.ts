import { Profile } from "../types";

const profile: Profile = {
  name: "Anushka",
  role: "Software Engineer skilled in .NET development and AI innovation, delivering business-ready applications.",
  location: "Maryville, MO",
  email: "anushkauppula95@gmail.com",
  phone: "+1-206-886-6609",
  links: {
    linkedin: "https://www.linkedin.com/in/anushka-uppula-296ba872/",
    github: "https://github.com/anushkauppula",
    medium: "https://medium.com/@anushkachary",
  },
  summary: [
    "I am a Software Engineer with 7+ years of experience in designing and delivering full-stack applications and cloud-native solutions, specializing in the eCommerce and legal tech domains. My expertise spans modern development frameworks and scalable architectures, enabling me to build reliable, production-ready systems that align with evolving business needs.",
    "As a proven technical leader, I have successfully driven engineering strategy, mentored cross-functional teams, and championed best practices across the software development lifecycle. My background includes hands-on experience with .NET, Java, Python, Angular, and microservices, combined with strong proficiency in leveraging Azure and AWS for cloud deployment.",
    "I am trusted for my ability to bridge technology and business, ensuring projects deliver measurable impact and long-term value. With a focus on scalability, performance, and collaboration, I am committed to creating solutions that not only meet current requirements but also anticipate future growth."
  ],
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
      stack: ["C#", ".NET Core", "ASP.NET Core", "Entity Framework", "Web API", "HTML", "CSS", "Vue.js", "MySQL", "GitLab", "Docker", "IIS", "Python", "Node.js"],
    },
    {
      title: "Freelance Software Engineer",
      company: "Quick Job Manager",
      date: "Jul 2023 – May 2024",
      bullets: [
        "Drove a 50% user base growth and a 20% increase in engagement by enhancing application performance, optimizing the front-end with Angular, HTML, and SCSS, and improving overall user experience.",
        "Migrated REST APIs to GraphQL, reducing over-fetching by approximately 40% and improving performance and scalability of client applications."
      ],
      stack: ["C#", ".NET Core", "ASP.NET Core", "Entity Framework", "Web API", "GraphQL", "Angular", "HTML", "CSS", "MySQL"],
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
      stack: ["C#", ".NET Core", "ASP.NET Core", "Entity Framework", "Dapper", "Web API", "GraphQL", "Angular", "Vue.js", "HTML", "CSS", "SQL Server", "Microsoft Azure", "AWS"],
    },
    {
      title: "Engineer",
      company: "LTI Mindtree Ltd",
      date: "Jun 2022 - Jul 2022",
      bullets: [
        "Familiar with Azure Files, Blob Storage, and Azure Queues for cloud-based storage and messaging through exploratory project involvement."
      ],
      stack: ["Azure Storage"]
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
      stack: ["C#", ".NET Core", "ASP.NET MVC", "Entity Framework", "JavaScript", "jQuery", "SQL Server", "TortoiseSVN", "ASP.NET", "VB.NET", "SQL-Server", "IIS"],
    }
  ],
  projects: [
    {
      name: "Fresh Track App — Food Expiration Monitoring",
      bullets: [
        "Designed and implemented a smart notification system projected to reduce inventory waste by up to 30% through timely expiration alerts.",
        "Trained and integrated a custom deep learning model via API, with internal testing indicating a 25% boost in expiration date prediction accuracy."
      ],
      stack: ["Android Studio", "Java", "Custom DL Model", "API"],
    },
    {
      name: "AI Assistant for Sales",
      bullets: [
        "Designed and developed an AI-powered mobile application (AI Assistant for Sales) using React Native, enabling real-time coaching for sales professionals during live customer interactions.",
        "Implemented advanced AI workflows, integrating Whisper API for transcription, GPT-4o-Mini for coaching tips, and a retrieval-augmented generation pipeline with a sales playbook to deliver contextual, strategy-driven guidance.",
        "Built scalable architecture leveraging vector databases for semantic search and Supabase for data management, enhancing customer engagement and supporting continuous learning through personalized feedback loops."
      ],
      stack: ["React Native", "Python", "Whisper API", "GPT-4o-mini", "Supabase", "Pinecone (VectorDB)"],
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
  education: [
    {
      degree: "Masters, Applied Computer Science",
      school: "Northwest Missouri State University",
      date: "Dec 2025 (Expected)",
      coursework: ["Advanced DB", "Mobile Computing - Android", "Generative AI", "Big Data", "Patterns & Frameworks", "Project Management"],
    },
    {
      degree: "Bachelors, Electronics & Instrumentation Engineering",
      school: "GITAM University, India",
      date: "",
      coursework: ["C", "C++", "Data Structures & Algorithms"],
    }
  ],
  achievements: {
    leadershipImpact: [
      {
        category: "Technical Leadership",
        points: [
          "Led a team of 8 developers to enhance university textbook systems supporting over 1,000 students, implementing Agile practices to deliver scalable, user-centric applications.",
          "Mentored interns & junior developers on .NET best practices, improving overall development standards."
        ]
      },
      {
        category: "Revenue Generation",
        points: [
          "Migrated legacy systems from VB.NET/ASP.NET to MVC, resulting in a 25% increase in engagement and 20% revenue growth through improved user experience and performance."
        ]
      },
      {
        category: "Operational Efficiency",
        points: [
          "Automated faculty course selection with an Auto-Enroll application, reducing manual work and registrar email traffic by over 80%, streamlining academic operations."
        ]
      }
    ],
    honors: [
      {
        org: "Northwest Missouri State University",
        points: [
          "Received Full (100%) Academic Scholarship for Outstanding Performance."
        ]
      },
      {
        org: "Seguro Soft Technologies Pvt Limited",
        points: [
          "Recognized as the Best Employee in 2019 for resolving a site issue at the witching hour that saved the company from losing revenue.",
          "Earned the Best Employee Award in 2018 for fixing a site breakdown in the dark that affected a huge user base."
        ]
      }
    ],
    presentations: [
      "Presented the Fresh Track app at the CCSC Conference held in Des Moines, Iowa, showcasing innovative solutions in application development."
    ]
  }
};

export default profile;
