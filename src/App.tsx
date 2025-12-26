import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import FindingsSection from './components/FindingsSection';
import TechAlienationGame from './components/TechAlienationGame';
import ReflectionSection from './components/ReflectionSection';
import TeamSection from './components/TeamSection';
import SimpleCommentSection from './components/SimpleCommentSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { LanguageProvider } from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'findings', 'game', 'reflection', 'team', 'comments'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <HomeSection scrollToSection={scrollToSection} />
        <AboutSection />
        <FindingsSection />
        <TechAlienationGame />
        <ReflectionSection />
        <TeamSection />
        <SimpleCommentSection />
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;
