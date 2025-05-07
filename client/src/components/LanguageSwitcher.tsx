import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '@/i18n';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center border rounded-full overflow-hidden">
      {languages.map((lng) => (
        <Button
          key={lng}
          variant="ghost"
          size="sm"
          className={`px-2 py-1 h-8 rounded-none ${
            i18n.language === lng 
              ? 'bg-[#0e62fe] text-white font-medium' 
              : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          onClick={() => changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}