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
    
    // 監聽主題變化
    const handleThemeChange = (e: CustomEvent) => {
      const newTheme = e.detail;
      setTheme(newTheme);
      applyTheme(newTheme);
    };
    
    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
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
    
    // 觸發主題變化事件
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: themeName }));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        title="切換主題"
        style={{ color: 'var(--nav-text)' }}
      >
        <div className="w-6 h-6">🎨</div>
      </button>

      {isOpen && (
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="absolute top-12 right-0 backdrop-blur-sm rounded-lg shadow-xl border p-4 min-w-48 z-50">
          <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>選擇主題</h3>
          <div className="space-y-2">
            {themes.map((themeOption) => (
              <button
                key={themeOption.name}
                onClick={() => handleThemeChange(themeOption.name)}
                className="w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200"
                style={{
                  backgroundColor: theme === themeOption.name ? 'var(--accent-color)' : 'transparent',
                  color: theme === themeOption.name ? 'var(--bg-primary)' : 'var(--text-primary)',
                  opacity: theme === themeOption.name ? 0.9 : 1
                }}
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
