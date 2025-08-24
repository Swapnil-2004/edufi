'use client';

import { User } from './types';

// Mock authentication for deployment
const mockUsers: User[] = [
  {
    id: 'demo-user-1',
    email: 'demo@edufi.com',
    name: 'Demo User',
    role: 'college',
    language: 'english',
    goals: ['Get into top college', 'Find scholarships'],
    rank: 5000,
    budget: 100000,
    stream: 'engineering',
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

let currentUser: User | null = null;

export const signUp = async (email: string, password: string, userData: Partial<User>) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: `user-${Date.now()}`,
      email: email,
      name: userData.name!,
      role: userData.role!,
      language: userData.language!,
      goals: userData.goals || [],
      rank: userData.rank,
      budget: userData.budget,
      stream: userData.stream,
      location: userData.location,
      avatar: userData.avatar,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockUsers.push(newUser);
    currentUser = newUser;
    return { success: true, user: newUser };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === email);
    if (user && password === 'Demo123!') {
      currentUser = user;
      return { success: true, user };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const signOutUser = async () => {
  try {
    currentUser = null;
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(currentUser), 100);
  });
};

export const updateUserProfile = async (userId: string, updates: Partial<User>) => {
  try {
    const userIndex = mockUsers.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates, updatedAt: new Date() };
      if (currentUser?.id === userId) {
        currentUser = mockUsers[userIndex];
      }
    }
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  // Simulate auth state change
  const interval = setInterval(() => {
    callback(currentUser);
  }, 1000);
  
  return () => clearInterval(interval);
};
