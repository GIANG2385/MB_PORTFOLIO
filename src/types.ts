export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  category: 'healthcare' | 'fullstack' | 'fintech';
  description: string;
  learning: string;
  tagBg: string;
  tagColor: string;
  accentBorder: string;
  image?: string;
  badges?: string[];
  challenge?: string;
  impact?: string;
  techTags?: string[];
  lessonLearned?: string;
  venue?: string;
  details: {
    problem: string;
    solution: string;
    techStack: string[];
    role: string;
    metrics?: string;
  };
}

export interface PerspectiveItem {
  id: string;
  title: string;
  icon: any;
  skills: string;
  quote: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  details: string;
}

export interface ActionPlanStep {
  stepNumber: number;
  phase: string;
  title: string;
  description: string;
  targets: string[];
  status: 'Planned' | 'In Progress' | 'Achieved';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
