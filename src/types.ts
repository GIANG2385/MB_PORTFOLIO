export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  meta: string;
  role: string;
  link: string;
  description: string;
  responsibilities: string[];
  challenges: string;
  outcomeProject: string[];
  outcomeMe: string[];
  lessonLearned: string;
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
