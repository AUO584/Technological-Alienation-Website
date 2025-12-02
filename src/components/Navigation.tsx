import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import Clock from './Clock';
import { useLanguage } from '../contexts/LanguageContext';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }: NavigationProps) {
  const { t } = useLanguage();
  
  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'findings', label: t.nav.findings },
    { id: 'reflection', label: t.nav.reflection },
    { id: 'team', label: t.nav.team },
    { id: 'comments', label: t.nav.comments }
  ];

  return (
    <nav style={{ backgroundColor: 'var(--nav-bg)', color: 'var(--nav-text)' }} className="fixed top-0 left-0 right-0 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-lg" style={{ color: 'var(--nav-text)' }}>
            科技冷漠研究
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-orange-500'
                    : 'hover:text-orange-500'
                }`}
                style={{
                  color: activeSection === item.id ? 'var(--accent-color)' : 'var(--nav-text)'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Clock />
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden hover:opacity-75 transition-opacity"
            style={{ color: 'var(--nav-text)' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div style={{ backgroundColor: 'var(--nav-bg)', borderColor: 'var(--border-color)' }} className="md:hidden border-t">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-opacity-20'
                    : ''
                }`}
                style={{
                  color: activeSection === item.id ? 'var(--accent-color)' : 'var(--nav-text)',
                  backgroundColor: activeSection === item.id ? 'var(--accent-color)' : 'transparent',
                  opacity: activeSection === item.id ? 0.8 : 1
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
