interface HomeSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      </div>
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          同儕之間的科技冷漠
        </h1>
        <p className="text-2xl md:text-3xl text-orange-400 mb-8 font-light">
          科技，改變社交生活。
        </p>
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
          在數位時代，我們比以往任何時候都更加「連結」，卻也更加疏離。
          本研究探討科技如何影響同儕之間的真實互動，以及我們如何找回人與人之間的溫度。
        </p>
        <button
          onClick={() => scrollToSection('about')}
          className="mt-12 px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all hover:scale-105 shadow-lg"
        >
          開始探索
        </button>
      </div>
    </section>
  );
}
