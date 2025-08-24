import { 
  Scholarship, 
  Internship, 
  College, 
  CoachingCenter, 
  EduSwipeProfile, 
  Badge 
} from './types';

export const badges: Badge[] = [
  {
    id: '1',
    name: 'Top Performer',
    icon: '🏆',
    color: '#FFD700',
    description: 'Consistently high academic performance'
  },
  {
    id: '2',
    name: 'Team Leader',
    icon: '👑',
    color: '#FF6B6B',
    description: 'Excellent leadership skills'
  },
  {
    id: '3',
    name: 'Problem Solver',
    icon: '🧩',
    color: '#4ECDC4',
    description: 'Strong analytical thinking'
  },
  {
    id: '4',
    name: 'Creative Mind',
    icon: '🎨',
    color: '#45B7D1',
    description: 'Innovative and creative approach'
  },
  {
    id: '5',
    name: 'Tech Savvy',
    icon: '💻',
    color: '#96CEB4',
    description: 'Advanced technical skills'
  }
];

export const scholarships: Scholarship[] = [
  {
    id: '1',
    title: 'Prime Minister Scholarship Scheme',
    description: 'Merit-based scholarship for engineering students from economically weaker sections',
    amount: 50000,
    deadline: new Date('2024-06-30'),
    category: 'Engineering',
    region: 'All India',
    eligibility: ['Family income < 8 LPA', 'JEE Main rank < 10000', 'First generation learner'],
    applicationUrl: 'https://example.com/pm-scholarship',
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'State Merit Scholarship',
    description: 'Scholarship for top 100 students in state board examinations',
    amount: 25000,
    deadline: new Date('2024-05-15'),
    category: 'General',
    region: 'Maharashtra',
    eligibility: ['State board topper', 'Family income < 6 LPA'],
    applicationUrl: 'https://example.com/state-scholarship',
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '3',
    title: 'Women in STEM Scholarship',
    description: 'Encouraging women to pursue careers in Science, Technology, Engineering, and Mathematics',
    amount: 75000,
    deadline: new Date('2024-07-20'),
    category: 'STEM',
    region: 'All India',
    eligibility: ['Female student', 'Pursuing STEM course', 'Merit-based selection'],
    applicationUrl: 'https://example.com/women-stem',
    isActive: true,
    createdAt: new Date()
  }
];

export const internships: Internship[] = [
  {
    id: '1',
    title: 'Software Development Intern',
    company: 'TechCorp India',
    description: 'Work on real-world projects using modern technologies like React, Node.js, and Python',
    location: 'Mumbai',
    stipend: 25000,
    duration: '3 months',
    requirements: ['React/Node.js knowledge', 'Git experience', 'Problem-solving skills'],
    applicationUrl: 'https://example.com/techcorp-intern',
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: 'AnalyticsPro',
    description: 'Learn machine learning, data analysis, and visualization techniques',
    location: 'Bangalore',
    stipend: 30000,
    duration: '6 months',
    requirements: ['Python programming', 'Statistics knowledge', 'SQL basics'],
    applicationUrl: 'https://example.com/analyticspro-intern',
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '3',
    title: 'Marketing Intern',
    company: 'Digital Solutions',
    description: 'Gain experience in digital marketing, social media management, and content creation',
    location: 'Delhi',
    stipend: 15000,
    duration: '3 months',
    requirements: ['Creative thinking', 'Social media savvy', 'Good communication'],
    applicationUrl: 'https://example.com/digital-solutions-intern',
    isActive: true,
    createdAt: new Date()
  }
];

export const colleges: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai',
    stream: 'Engineering',
    fees: 250000,
    rank: 1,
    rating: 4.8,
    description: 'Premier engineering institute with world-class facilities and faculty',
    website: 'https://www.iitb.ac.in',
    isActive: true
  },
  {
    id: '2',
    name: 'Delhi University',
    location: 'Delhi',
    stream: 'Arts & Science',
    fees: 15000,
    rank: 5,
    rating: 4.5,
    description: 'Renowned university offering diverse courses in arts, science, and commerce',
    website: 'https://www.du.ac.in',
    isActive: true
  },
  {
    id: '3',
    name: 'St. Xavier\'s College',
    location: 'Mumbai',
    stream: 'Arts & Science',
    fees: 45000,
    rank: 8,
    rating: 4.3,
    description: 'Private college known for quality education and excellent placement record',
    website: 'https://www.xaviers.edu',
    isActive: true
  }
];

export const coachingCenters: CoachingCenter[] = [
  {
    id: '1',
    name: 'Allen Career Institute',
    location: 'Kota',
    exam: 'JEE Main & Advanced',
    fees: 150000,
    rating: 4.7,
    description: 'Leading coaching institute for engineering entrance exams',
    website: 'https://www.allen.ac.in',
    isActive: true
  },
  {
    id: '2',
    name: 'FIITJEE',
    location: 'Delhi',
    exam: 'JEE Main & Advanced',
    fees: 180000,
    rating: 4.6,
    description: 'Premium coaching for IIT-JEE and other engineering entrance exams',
    website: 'https://www.fiitjee.com',
    isActive: true
  },
  {
    id: '3',
    name: 'Resonance',
    location: 'Kota',
    exam: 'JEE Main & Advanced',
    fees: 120000,
    rating: 4.5,
    description: 'Comprehensive coaching for engineering and medical entrance exams',
    website: 'https://www.resonance.ac.in',
    isActive: true
  }
];

export const eduSwipeProfiles: Omit<EduSwipeProfile, 'id' | 'createdAt'>[] = [
  {
    userId: 'demo-user-1',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    skills: ['React', 'JavaScript', 'UI/UX Design'],
    verifiedSkills: ['React', 'JavaScript'],
    location: 'Mumbai',
    goals: ['Build a startup', 'Learn AI/ML', 'Network with developers'],
    stream: 'Computer Science',
    compatibilityScore: 85,
    badges: [badges[0], badges[4]],
    bio: 'Passionate about creating user-friendly applications and solving real-world problems through technology.',
    isActive: true
  },
  {
    userId: 'demo-user-2',
    name: 'Rahul Kumar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    skills: ['Python', 'Data Science', 'Machine Learning'],
    verifiedSkills: ['Python', 'Data Science'],
    location: 'Bangalore',
    goals: ['Data Scientist', 'Research in AI', 'Contribute to open source'],
    stream: 'Data Science',
    compatibilityScore: 92,
    badges: [badges[2], badges[4]],
    bio: 'Data enthusiast with a strong foundation in statistics and programming. Looking to collaborate on ML projects.',
    isActive: true
  },
  {
    userId: 'demo-user-3',
    name: 'Anjali Patel',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    skills: ['Marketing', 'Social Media', 'Content Creation'],
    verifiedSkills: ['Marketing', 'Social Media'],
    location: 'Delhi',
    goals: ['Digital Marketing Manager', 'Start a blog', 'Learn SEO'],
    stream: 'Marketing',
    compatibilityScore: 78,
    badges: [badges[1], badges[3]],
    bio: 'Creative marketer with a passion for digital storytelling and brand building. Always eager to learn new trends.',
    isActive: true
  }
];
