import { 
  User, 
  EduSwipeProfile, 
  Scholarship, 
  Internship, 
  College, 
  CoachingCenter, 
  Match, 
  EduCoin, 
  Roadmap 
} from './types';
import { scholarships, internships, colleges, coachingCenters, eduSwipeProfiles } from './seed-data';

// EduSwipe Profiles
export const getEduSwipeProfiles = async (excludeUserId?: string): Promise<EduSwipeProfile[]> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let profiles = eduSwipeProfiles.map((profile, index) => ({
      ...profile,
      id: `profile-${index + 1}`,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
    }));
    
    if (excludeUserId) {
      profiles = profiles.filter(profile => profile.userId !== excludeUserId);
    }
    
    return profiles;
  } catch (error) {
    console.error('Error fetching EduSwipe profiles:', error);
    return [];
  }
};

export const createEduSwipeProfile = async (profile: Omit<EduSwipeProfile, 'id' | 'createdAt'>) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newProfile: EduSwipeProfile = {
      ...profile,
      id: `profile-${Date.now()}`,
      createdAt: new Date(),
    };
    
    return { success: true, id: newProfile.id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const updateEduSwipeProfile = async (id: string, updates: Partial<EduSwipeProfile>) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In a real app, this would update the profile
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Scholarships
export const getScholarships = async (filters?: {
  region?: string;
  category?: string;
  minAmount?: number;
}): Promise<Scholarship[]> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredScholarships = scholarships;
    
    if (filters?.region) {
      filteredScholarships = filteredScholarships.filter(s => s.region === filters.region);
    }
    
    if (filters?.category) {
      filteredScholarships = filteredScholarships.filter(s => s.category === filters.category);
    }
    
    if (filters?.minAmount) {
      filteredScholarships = filteredScholarships.filter(s => s.amount >= filters.minAmount!);
    }
    
    return filteredScholarships;
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    return [];
  }
};

// Internships
export const getInternships = async (filters?: {
  location?: string;
  minStipend?: number;
}): Promise<Internship[]> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredInternships = internships;
    
    if (filters?.location) {
      filteredInternships = filteredInternships.filter(i => i.location === filters.location);
    }
    
    if (filters?.minStipend) {
      filteredInternships = filteredInternships.filter(i => i.stipend >= filters.minStipend!);
    }
    
    return filteredInternships;
  } catch (error) {
    console.error('Error fetching internships:', error);
    return [];
  }
};

// Colleges
export const getColleges = async (filters?: {
  stream?: string;
  maxFees?: number;
  location?: string;
}): Promise<College[]> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredColleges = colleges;
    
    if (filters?.stream) {
      filteredColleges = filteredColleges.filter(c => c.stream === filters.stream);
    }
    
    if (filters?.location) {
      filteredColleges = filteredColleges.filter(c => c.location === filters.location);
    }
    
    if (filters?.maxFees) {
      filteredColleges = filteredColleges.filter(c => c.fees <= filters.maxFees!);
    }
    
    return filteredColleges;
  } catch (error) {
    console.error('Error fetching colleges:', error);
    return [];
  }
};

// Coaching Centers
export const getCoachingCenters = async (filters?: {
  exam?: string;
  maxFees?: number;
  location?: string;
}): Promise<CoachingCenter[]> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredCenters = coachingCenters;
    
    if (filters?.exam) {
      filteredCenters = filteredCenters.filter(c => c.exam === filters.exam);
    }
    
    if (filters?.location) {
      filteredCenters = filteredCenters.filter(c => c.location === filters.location);
    }
    
    if (filters?.maxFees) {
      filteredCenters = filteredCenters.filter(c => c.fees <= filters.maxFees!);
    }
    
    return filteredCenters;
  } catch (error) {
    console.error('Error fetching coaching centers:', error);
    return [];
  }
};

// Mock data for matches, EduCoins, and roadmaps
const mockMatches: Match[] = [];
const mockEduCoins: EduCoin[] = [
  {
    id: 'coin-1',
    userId: 'demo-user-1',
    amount: 50,
    source: 'Profile Completion',
    description: 'Completed your profile setup',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  },
  {
    id: 'coin-2',
    userId: 'demo-user-1',
    amount: 25,
    source: 'First Login',
    description: 'Welcome to EduFi!',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  }
];

const mockRoadmap: Roadmap = {
  id: 'roadmap-1',
  userId: 'demo-user-1',
  title: 'Engineering Admission Roadmap',
  progress: 35,
  steps: [
    {
      id: 'step-1',
      title: 'Complete JEE Main Registration',
      description: 'Register for JEE Main examination',
      completed: true
    },
    {
      id: 'step-2',
      title: 'Prepare for JEE Advanced',
      description: 'Study for JEE Advanced examination',
      completed: true
    },
    {
      id: 'step-3',
      title: 'Apply to Top Colleges',
      description: 'Submit applications to preferred colleges',
      completed: false
    },
    {
      id: 'step-4',
      title: 'Prepare for Interviews',
      description: 'Practice for college interviews',
      completed: false
    }
  ],
  createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
  updatedAt: new Date()
};

// Matches
export const createMatch = async (match: Omit<Match, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const newMatch: Match = {
      ...match,
      id: `match-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockMatches.push(newMatch);
    return { success: true, id: newMatch.id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const updateMatch = async (id: string, status: 'accepted' | 'rejected') => {
  try {
    const matchIndex = mockMatches.findIndex(m => m.id === id);
    if (matchIndex !== -1) {
      mockMatches[matchIndex].status = status;
      mockMatches[matchIndex].updatedAt = new Date();
    }
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getUserMatches = async (userId: string): Promise<Match[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockMatches.filter(m => m.user1Id === userId);
  } catch (error) {
    console.error('Error fetching user matches:', error);
    return [];
  }
};

// EduCoins
export const addEduCoins = async (coin: Omit<EduCoin, 'id' | 'createdAt'>) => {
  try {
    const newCoin: EduCoin = {
      ...coin,
      id: `coin-${Date.now()}`,
      createdAt: new Date(),
    };
    mockEduCoins.push(newCoin);
    return { success: true, id: newCoin.id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getUserEduCoins = async (userId: string): Promise<EduCoin[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockEduCoins.filter(c => c.userId === userId);
  } catch (error) {
    console.error('Error fetching user EduCoins:', error);
    return [];
  }
};

// Roadmaps
export const createRoadmap = async (roadmap: Omit<Roadmap, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const newRoadmap: Roadmap = {
      ...roadmap,
      id: `roadmap-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return { success: true, id: newRoadmap.id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const updateRoadmap = async (id: string, updates: Partial<Roadmap>) => {
  try {
    // In a real app, this would update the roadmap
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getUserRoadmap = async (userId: string): Promise<Roadmap | null> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (userId === 'demo-user-1') {
      return mockRoadmap;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user roadmap:', error);
    return null;
  }
};

// Real-time listeners (simulated)
export const subscribeToEduSwipeProfiles = (
  excludeUserId: string,
  callback: (profiles: EduSwipeProfile[]) => void
) => {
  // Simulate real-time updates
  const interval = setInterval(async () => {
    const profiles = await getEduSwipeProfiles(excludeUserId);
    callback(profiles);
  }, 5000);
  
  return () => clearInterval(interval);
};
