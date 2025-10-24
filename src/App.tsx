import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import FindingsSection from './components/FindingsSection';
import ReflectionSection from './components/ReflectionSection';
import TeamSection from './components/TeamSection';
import CommentSection from './components/CommentSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SplashScreen from './components/SplashScreen';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showSplash, setShowSplash] = useState(true);

  useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'findings', 'reflection', 'team', 'comments'];
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

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
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
      <ReflectionSection />
      <TeamSection />
      <CommentSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
