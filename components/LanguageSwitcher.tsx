'use client';

import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { languages, languageFonts, getTranslation } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  currentLanguage: keyof typeof languages;
  onLanguageChange: (language: keyof typeof languages) => void;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (language: keyof typeof languages) => {
    onLanguageChange(language);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className={cn('text-sm font-medium', languageFonts[currentLanguage])}>
          {languages[currentLanguage]}
        </span>
        <ChevronDown className={cn('h-4 w-4 text-gray-600 transition-transform duration-200', {
          'rotate-180': isOpen
        })} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {Object.entries(languages).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleLanguageSelect(key as keyof typeof languages)}
              className={cn(
                'w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors duration-200',
                languageFonts[key as keyof typeof languages],
                currentLanguage === key ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
