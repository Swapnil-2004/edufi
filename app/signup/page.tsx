'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Mail, 
  Lock, 
  GraduationCap,
  Target,
  Globe,
  MapPin,
  DollarSign,
  Trophy
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signUp } from '@/lib/auth';
import { validateEmail, validatePassword } from '@/lib/utils';
import { User as UserType } from '@/lib/types';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'school' | 'college';
  language: 'english' | 'hindi' | 'bengali' | 'tamil';
  rank?: number;
  budget?: number;
  stream?: string;
  location?: string;
  goals: string[];
}

const SignupPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<SignupFormData>>({});

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger
  } = useForm<SignupFormData>();

  const watchedValues = watch();

  const steps = [
    {
      id: 1,
      title: 'Basic Information',
      description: 'Create your account with basic details'
    },
    {
      id: 2,
      title: 'Academic Profile',
      description: 'Tell us about your educational background'
    },
    {
      id: 3,
      title: 'Preferences',
      description: 'Set your goals and preferences'
    }
  ];

  const roleOptions = [
    { value: 'school', label: 'School Student' },
    { value: 'college', label: 'College Student' }
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'हिंदी' },
    { value: 'bengali', label: 'বাংলা' },
    { value: 'tamil', label: 'தமிழ்' }
  ];

  const streamOptions = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'medical', label: 'Medical' },
    { value: 'arts', label: 'Arts' },
    { value: 'commerce', label: 'Commerce' },
    { value: 'science', label: 'Science' },
    { value: 'other', label: 'Other' }
  ];

  const goalOptions = [
    'Get into top college',
    'Find scholarships',
    'Secure internship',
    'Build network',
    'Improve skills',
    'Career guidance'
  ];

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      setFormData(prev => ({ ...prev, ...watchedValues }));
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    
    try {
      const result = await signUp(data.email, data.password, {
        name: data.name,
        role: data.role,
        language: data.language,
        rank: data.rank,
        budget: data.budget,
        stream: data.stream,
        location: data.location,
        goals: data.goals
      });

      if (result.success) {
        toast.success('Account created successfully!');
        router.push('/dashboard');
      } else {
        toast.error(result.error || 'Failed to create account');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        leftIcon={<User className="h-5 w-5" />}
        error={errors.name?.message}
        {...register('name', { 
          required: 'Name is required',
          minLength: { value: 2, message: 'Name must be at least 2 characters' }
        })}
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        leftIcon={<Mail className="h-5 w-5" />}
        error={errors.email?.message}
        {...register('email', { 
          required: 'Email is required',
          validate: (value) => validateEmail(value) || 'Please enter a valid email'
        })}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Create a strong password"
        leftIcon={<Lock className="h-5 w-5" />}
        error={errors.password?.message}
        helperText="Must be at least 8 characters with uppercase, lowercase, and number"
        {...register('password', { 
          required: 'Password is required',
          validate: (value) => {
            const validation = validatePassword(value);
            return validation.isValid || validation.errors[0];
          }
        })}
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        leftIcon={<Lock className="h-5 w-5" />}
        error={errors.confirmPassword?.message}
        {...register('confirmPassword', { 
          required: 'Please confirm your password',
          validate: (value) => value === watchedValues.password || 'Passwords do not match'
        })}
      />

      <Select
        label="I am a"
        options={roleOptions}
        placeholder="Select your role"
        error={errors.role?.message}
        value={watchedValues.role || ''}
        onChange={(value) => setValue('role', value as 'school' | 'college')}
      />
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <Select
        label="Preferred Language"
        options={languageOptions}
        placeholder="Select your preferred language"
        error={errors.language?.message}
        value={watchedValues.language || ''}
        onChange={(value) => setValue('language', value as 'english' | 'hindi' | 'bengali' | 'tamil')}
      />

      <Input
        label="Current Rank/Score (Optional)"
        type="number"
        placeholder="e.g., JEE rank, board percentage"
        leftIcon={<Trophy className="h-5 w-5" />}
        error={errors.rank?.message}
        helperText="This helps us provide better recommendations"
        {...register('rank', { 
          min: { value: 1, message: 'Rank must be positive' },
          max: { value: 1000000, message: 'Please enter a valid rank' }
        })}
      />

      <Select
        label="Stream/Field of Interest"
        options={streamOptions}
        placeholder="Select your stream"
        error={errors.stream?.message}
        value={watchedValues.stream || ''}
        onChange={(value) => setValue('stream', value)}
      />

      <Input
        label="Location"
        placeholder="Enter your city"
        leftIcon={<MapPin className="h-5 w-5" />}
        error={errors.location?.message}
        {...register('location')}
      />
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <Input
        label="Budget Range (Optional)"
        type="number"
        placeholder="e.g., 50000"
        leftIcon={<DollarSign className="h-5 w-5" />}
        error={errors.budget?.message}
        helperText="This helps us suggest affordable options"
        {...register('budget', { 
          min: { value: 0, message: 'Budget cannot be negative' }
        })}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Your Goals (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {goalOptions.map((goal) => (
            <label key={goal} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                value={goal}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                {...register('goals')}
              />
              <span className="text-sm text-gray-700">{goal}</span>
            </label>
          ))}
        </div>
        {errors.goals && (
          <p className="mt-1 text-sm text-red-600">{errors.goals.message}</p>
        )}
      </div>
    </motion.div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join EduFi and start your educational journey</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-primary-500 border-primary-500 text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-primary-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              {steps[currentStep - 1].title}
            </h3>
            <p className="text-sm text-gray-600">
              {steps[currentStep - 1].description}
            </p>
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary-600" />
              <h2 className="text-xl font-semibold">Step {currentStep} of {steps.length}</h2>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <AnimatePresence mode="wait">
                {renderCurrentStep()}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    loading={isLoading}
                  >
                    Create Account
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
