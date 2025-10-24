import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('zh-TW');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'zh-TW';
    setLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsOpen(false);
    // 這裡可以觸發語言切換的邏輯
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: langCode }));
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
        title="切換語言"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-white text-sm">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200 p-4 min-w-48 z-50">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">選擇語言</h3>
          <div className="space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 flex items-center gap-3 ${
                  language === lang.code
                    ? 'bg-orange-100 text-orange-700'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
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
