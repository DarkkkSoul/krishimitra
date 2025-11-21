import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-earth-800 font-medium shadow-sm transition-all duration-200 border border-earth-200"
      title="Change Language"
    >
      <Languages className="w-4 h-4" />
      <span>{i18n.language === 'en' ? 'हिंदी' : 'English'}</span>
    </button>
  );
};

export default LanguageToggle;
