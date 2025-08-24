export interface User {
  id: string;
  email: string;
  name: string;
  role: 'school' | 'college';
  rank?: number;
  budget?: number;
  language: 'english' | 'hindi' | 'bengali' | 'tamil';
  goals: string[];
  stream?: string;
  location?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EduSwipeProfile {
  id: string;
  userId: string;
  name: string;
  avatar: string;
  skills: string[];
  verifiedSkills: string[];
  location: string;
  goals: string[];
  stream: string;
  compatibilityScore: number;
  badges: Badge[];
  bio: string;
  isActive: boolean;
  createdAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface Scholarship {
  id: string;
  title: string;
  description: string;
  amount: number;
  deadline: Date;
  category: string;
  region: string;
  eligibility: string[];
  applicationUrl: string;
  isActive: boolean;
  createdAt: Date;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  stipend: number;
  duration: string;
  requirements: string[];
  applicationUrl: string;
  isActive: boolean;
  createdAt: Date;
}

export interface College {
  id: string;
  name: string;
  location: string;
  stream: string;
  fees: number;
  rank: number;
  rating: number;
  description: string;
  website: string;
  isActive: boolean;
}

export interface CoachingCenter {
  id: string;
  name: string;
  location: string;
  exam: string;
  fees: number;
  rating: number;
  description: string;
  website: string;
  isActive: boolean;
}

export interface Match {
  id: string;
  user1Id: string;
  user2Id: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface EduCoin {
  id: string;
  userId: string;
  amount: number;
  source: string;
  description: string;
  createdAt: Date;
}

export interface Roadmap {
  id: string;
  userId: string;
  title: string;
  steps: RoadmapStep[];
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
  completedAt?: Date;
}

export interface LanguageContent {
  english: string;
  hindi: string;
  bengali: string;
  tamil: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
