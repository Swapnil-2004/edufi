'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Award, 
  Briefcase, 
  Users, 
  Globe, 
  TrendingUp,
  Target,
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const FeaturesPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Get personalized college and course suggestions based on your profile, budget, and preferences using advanced AI algorithms.',
      benefits: [
        'Smart matching based on your academic profile',
        'Budget-aware recommendations',
        'Location-based suggestions',
        'Real-time updates and improvements'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Scholarship Discovery',
      description: 'Find relevant scholarships and financial aid opportunities tailored to your background and academic achievements.',
      benefits: [
        'Comprehensive scholarship database',
        'Eligibility matching',
        'Application deadline tracking',
        'Success rate indicators'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Briefcase,
      title: 'Internship Matching',
      description: 'Connect with internship opportunities that match your skills, career goals, and preferred location.',
      benefits: [
        'Skill-based matching',
        'Company ratings and reviews',
        'Stipend information',
        'Application status tracking'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'EduSwipe Collaboration',
      description: 'Find study partners and team members through our innovative Tinder-style matching system.',
      benefits: [
        'Compatibility scoring',
        'Skill verification badges',
        'Real-time messaging',
        'Project collaboration tools'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Access the platform in your preferred language - English, Hindi, Bengali, or Tamil.',
      benefits: [
        'Native language interface',
        'Regional font support',
        'Localized content',
        'Voice input support'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your academic journey with AI-generated roadmaps and gamified EduCoins system.',
      benefits: [
        'Personalized learning roadmaps',
        'Milestone achievements',
        'EduCoins rewards',
        'Progress analytics'
      ],
      color: 'from-teal-500 to-green-500'
    }
  ];

  const comingSoonFeatures = [
    {
      icon: Shield,
      title: 'AI Buddy',
      description: 'Your personal AI mentor for emotional support and academic guidance.',
      status: 'Coming Soon'
    },
    {
      icon: Zap,
      title: 'Voice Assistant',
      description: 'Interact with EduFi using voice commands in your preferred language.',
      status: 'Coming Soon'
    },
    {
      icon: Target,
      title: 'Real-time Analytics',
      description: 'Advanced analytics and insights for your educational journey.',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover EduFi's Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with personalized guidance 
            to help you achieve your educational and career goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600">
              Exciting new features that will revolutionize your educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <Card key={feature.title} className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {feature.status}
                  </span>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using EduFi to achieve their dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;
