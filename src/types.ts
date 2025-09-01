export interface Job {
  title: string;
  company: string;
  location?: string;
  date: string;
  bullets: string[];
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
  email: string;
  phone: string;
  links: {
    linkedin: string;
    github: string;
    medium: string;
  };
  summary: string[];
  experience: Job[];
  projects: Project[];
  skills: Record<string, string[]>;
  leadership: string[];
  impact: string[];
  awards: string[];
  presentations: string[];
  education: Education[];
}
