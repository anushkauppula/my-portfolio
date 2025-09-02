export interface Job {
  title: string;
  company: string;
  location?: string;
  date: string;
  bullets: string[];
  stack?: string[];
}

export interface Project {
  name: string;
  bullets: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  date: string;
  coursework: string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  links: {
    linkedin: string;
    github: string;
    medium: string;
  };
  summary: string[];
  experience: Job[];
  projects: Project[];
  skills: Record<string, string[]>;
  education: Education[];
  achievements?: {
    leadershipImpact: Array<{
      category: string;
      points: string[];
    }>;
    honors: Array<{
      org: string;
      points: string[];
    }>;
    presentations: string[];
  };
}
