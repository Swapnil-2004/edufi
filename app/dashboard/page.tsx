'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Award, 
  Briefcase, 
  Users, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Target,
  Rocket,
  Sparkles,
  Eye,
  Heart,
  Shield,
  BookOpen,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Bell,
  Settings,
  LogOut,
  User,
  Crown,
  Trophy,
  Medal,
  Gift,
  X
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Progress Ring Component
function ProgressRing({ progress, size = 120, strokeWidth = 8, color = "#3B82F6" }: {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-block">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{progress}%</span>
      </div>
    </div>
  );
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}

// Notification Component
function Notification({ message, type = 'info', onClose }: {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}) {
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className={`${colors[type]} text-white p-4 rounded-lg shadow-lg mb-4`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4">
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

const DashboardPage = () => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  // Mock user data
  const user = {
    name: 'Demo User',
    email: 'demo@edufi.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rank: 5000,
    budget: 100000,
    stream: 'engineering',
    location: 'Mumbai',
    eduCoins: 1250,
    level: 8,
    progress: 75
  };

  // Mock data for charts
  const progressData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Academic Progress',
        data: [65, 72, 78, 82, 85, 88],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const skillsData = {
    labels: ['Programming', 'Mathematics', 'Communication', 'Leadership', 'Problem Solving'],
    datasets: [
      {
        data: [85, 72, 68, 90, 78],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#8B5CF6',
          '#EF4444',
        ],
        borderWidth: 0,
      },
    ],
  };

  const recentActivities = [
    { id: 1, type: 'scholarship', message: 'Applied for Google Scholarship', time: '2 hours ago', icon: Award },
    { id: 2, type: 'internship', message: 'Interview scheduled with Microsoft', time: '1 day ago', icon: Briefcase },
    { id: 3, type: 'collaboration', message: 'New study partner matched', time: '2 days ago', icon: Users },
    { id: 4, type: 'achievement', message: 'Completed Python course', time: '3 days ago', icon: Trophy },
  ];

  const recommendations = [
    {
      id: 1,
      title: 'IIT Bombay',
      type: 'college',
      match: 95,
      location: 'Mumbai',
      fees: '₹2.5L/year',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Google Summer Internship',
      type: 'internship',
      match: 88,
      location: 'Bangalore',
      stipend: '₹50K/month',
      icon: Briefcase
    },
    {
      id: 3,
      title: 'Merit Scholarship',
      type: 'scholarship',
      match: 92,
      amount: '₹1L',
      icon: Award
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);

    // Update time every second
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // Simulate notifications
    const notificationTimer = setInterval(() => {
      const messages = [
        'New scholarship opportunity available!',
        'Your profile was viewed by 5 companies',
        'Congratulations! You earned 50 EduCoins',
        'New study material available for your course'
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setNotifications(prev => [...prev.slice(-2), randomMessage]);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(notificationTimer);
    };
  }, []);

  const addNotification = (message: string) => {
    setNotifications(prev => [...prev, message]);
  };

  const removeNotification = (index: number) => {
    setNotifications(prev => prev.filter((_, i) => i !== index));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading your personalized dashboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">EduFi Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-white text-sm">
                {currentTime.toLocaleTimeString()}
              </div>
              <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-4">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-4 border-white/20" />
              <div>
                <h2 className="text-2xl font-bold text-white">Welcome back, {user.name}! 👋</h2>
                <p className="text-gray-300">Ready to continue your learning journey?</p>
              </div>
              <div className="ml-auto text-right">
                <div className="text-2xl font-bold text-white">{user.eduCoins}</div>
                <div className="text-gray-300 text-sm">EduCoins</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'EduCoins', value: user.eduCoins, suffix: '', icon: Sparkles, color: 'from-yellow-400 to-orange-500' },
            { label: 'Scholarships', value: 12, suffix: '', icon: Award, color: 'from-green-400 to-emerald-500' },
            { label: 'Internships', value: 8, suffix: '', icon: Briefcase, color: 'from-blue-400 to-cyan-500' },
            { label: 'Roadmap Progress', value: user.progress, suffix: '%', icon: Target, color: 'from-purple-400 to-pink-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Academic Progress</h3>
              <div className="h-64">
                <Line data={progressData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      labels: { color: 'white' }
                    }
                  },
                  scales: {
                    x: {
                      ticks: { color: 'white' },
                      grid: { color: 'rgba(255,255,255,0.1)' }
                    },
                    y: {
                      ticks: { color: 'white' },
                      grid: { color: 'rgba(255,255,255,0.1)' }
                    }
                  }
                }} />
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.message}</p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Progress Ring */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Overall Progress</h3>
              <div className="flex justify-center mb-4">
                <ProgressRing progress={user.progress} />
              </div>
              <p className="text-gray-300">You're {user.progress}% through your learning journey!</p>
            </motion.div>

            {/* Skills Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Skills Assessment</h3>
              <div className="h-48">
                <Doughnut data={skillsData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: { color: 'white', padding: 10 }
                    }
                  }
                }} />
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">AI Recommendations</h3>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <rec.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{rec.title}</p>
                          <p className="text-gray-400 text-sm">{rec.location || rec.amount}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">{rec.match}%</div>
                        <div className="text-gray-400 text-sm">Match</div>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50">
        <AnimatePresence>
          {notifications.map((notification, index) => (
            <Notification
              key={index}
              message={notification}
              type="info"
              onClose={() => removeNotification(index)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DashboardPage;
