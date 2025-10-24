import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'light', label: '淺色模式', colors: 'bg-slate-50 text-slate-800' },
    { name: 'dark', label: '深色模式', colors: 'bg-slate-900 text-white' },
    { name: 'orange', label: '橙色主題', colors: 'bg-orange-50 text-orange-900' },
    { name: 'blue', label: '藍色主題', colors: 'bg-blue-50 text-blue-900' },
    { name: 'green', label: '綠色主題', colors: 'bg-green-50 text-green-900' }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName: string) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
  };

  const handleThemeChange = (themeName: string) => {
    setTheme(themeName);
    applyTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        title="切換主題"
      >
        <div className="w-6 h-6 text-white">🎨</div>
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200 p-4 min-w-48 z-50">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">選擇主題</h3>
          <div className="space-y-2">
            {themes.map((themeOption) => (
              <button
                key={themeOption.name}
                onClick={() => handleThemeChange(themeOption.name)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  theme === themeOption.name
                    ? 'bg-orange-100 text-orange-700'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {themeOption.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
