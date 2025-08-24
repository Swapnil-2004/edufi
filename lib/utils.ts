import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const languages = {
  english: 'English',
  hindi: 'हिंदी',
  bengali: 'বাংলা',
  tamil: 'தமிழ்'
} as const;

export const languageFonts = {
  english: 'font-sans',
  hindi: 'font-hindi',
  bengali: 'font-bengali',
  tamil: 'font-tamil'
} as const;

export const translations = {
  welcome: {
    english: 'Welcome to EduFi',
    hindi: 'EduFi में आपका स्वागत है',
    bengali: 'EduFi-এ স্বাগতম',
    tamil: 'EduFi-க்கு வரவேற்கிறோம்'
  },
  heroTitle: {
    english: 'From classroom to career – let AI guide you.',
    hindi: 'कक्षा से करियर तक – AI आपका मार्गदर्शन करेगा।',
    bengali: 'ক্লাসরুম থেকে ক্যারিয়ার – AI আপনাকে গাইড করবে।',
    tamil: 'வகுப்பறையில் இருந்து தொழில் வரை – AI உங்களை வழிநடத்தட்டும்.'
  },
  getStarted: {
    english: 'Get Started',
    hindi: 'शुरू करें',
    bengali: 'শুরু করুন',
    tamil: 'தொடங்குங்கள்'
  },
  login: {
    english: 'Login',
    hindi: 'लॉगिन',
    bengali: 'লগইন',
    tamil: 'உள்நுழைவு'
  },
  signup: {
    english: 'Sign Up',
    hindi: 'साइन अप',
    bengali: 'সাইন আপ',
    tamil: 'பதிவு செய்யுங்கள்'
  },
  dashboard: {
    english: 'Dashboard',
    hindi: 'डैशबोर्ड',
    bengali: 'ড্যাশবোর্ড',
    tamil: 'டாஷ்போர்டு'
  },
  eduswipe: {
    english: 'EduSwipe',
    hindi: 'एडुस्वाइप',
    bengali: 'এডুসোয়াইপ',
    tamil: 'எடுஸ்வைப்'
  },
  scholarships: {
    english: 'Scholarships',
    hindi: 'छात्रवृत्ति',
    bengali: 'বৃত্তি',
    tamil: 'படிப்புத்தொகை'
  },
  internships: {
    english: 'Internships',
    hindi: 'इंटर्नशिप',
    bengali: 'ইন্টার্নশিপ',
    tamil: 'பயிற்சி'
  },
  features: {
    english: 'Features',
    hindi: 'विशेषताएं',
    bengali: 'বৈশিষ্ট্য',
    tamil: 'அம்சங்கள்'
  },
  about: {
    english: 'About',
    hindi: 'के बारे में',
    bengali: 'সম্পর্কে',
    tamil: 'பற்றி'
  },
  contact: {
    english: 'Contact',
    hindi: 'संपर्क',
    bengali: 'যোগাযোগ',
    tamil: 'தொடர்பு'
  },
  logout: {
    english: 'Logout',
    hindi: 'लॉगआउट',
    bengali: 'লগআউট',
    tamil: 'வெளியேறு'
  },
  home: {
    english: 'Home',
    hindi: 'होम',
    bengali: 'হোম',
    tamil: 'முகப்பு'
  }
} as const;

export function getTranslation(key: keyof typeof translations, language: keyof typeof languages) {
  if (!translations[key]) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  return translations[key][language] || translations[key].english || key;
}

export function formatCurrency(amount: number, currency = 'INR'): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return formatDate(date);
}

export function calculateCompatibilityScore(user1: any, user2: any): number {
  let score = 50; // Base score

  // Location compatibility
  if (user1.location === user2.location) score += 10;

  // Stream compatibility
  if (user1.stream === user2.stream) score += 15;

  // Goals compatibility
  const commonGoals = user1.goals.filter((goal: string) => 
    user2.goals.includes(goal)
  );
  score += commonGoals.length * 5;

  // Skills compatibility
  const commonSkills = user1.skills.filter((skill: string) => 
    user2.skills.includes(skill)
  );
  score += commonSkills.length * 3;

  return Math.min(score, 100);
}

export function generateRecommendations(user: any) {
  const recommendations = {
    colleges: [] as any[],
    coachingCenters: [] as any[],
    scholarships: [] as any[],
    internships: [] as any[]
  };

  // Mock AI-based recommendations based on user profile
  if (user.budget && user.budget < 100000) {
    recommendations.colleges.push({
      name: 'Government College',
      location: user.location || 'Mumbai',
      fees: 15000,
      rating: 4.2
    });
  }

  if (user.rank && user.rank < 10000) {
    recommendations.scholarships.push({
      title: 'Merit-based Scholarship',
      amount: 50000,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    });
  }

  return recommendations;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
