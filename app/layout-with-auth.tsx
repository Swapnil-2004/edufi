'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { onAuthStateChange, signOutUser } from '@/lib/auth';
import { User } from '@/lib/types';
import { languages } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface LayoutWithAuthProps {
  children: React.ReactNode;
}

const LayoutWithAuth: React.FC<LayoutWithAuthProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<keyof typeof languages>('english');
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLanguageChange = (language: keyof typeof languages) => {
    setCurrentLanguage(language);
  };

  // Don't show navigation/footer on auth pages
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && (
        <Navigation
          user={user}
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          onLogout={handleLogout}
        />
      )}
      
      <main className="flex-1">
        {children}
      </main>
      
      {!isAuthPage && (
        <Footer currentLanguage={currentLanguage} />
      )}
    </div>
  );
};

export default LayoutWithAuth;
