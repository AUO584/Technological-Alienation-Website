import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' }
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
        title="切換語言"
        style={{ color: 'var(--nav-text)' }}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="absolute top-12 right-0 backdrop-blur-sm rounded-lg shadow-xl border p-4 min-w-48 z-50">
          <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>選擇語言</h3>
          <div className="space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 flex items-center gap-3"
                style={{
                  backgroundColor: language === lang.code ? 'var(--accent-color)' : 'transparent',
                  color: language === lang.code ? 'var(--bg-primary)' : 'var(--text-primary)',
                  opacity: language === lang.code ? 0.9 : 1
                }}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
