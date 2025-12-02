import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <GraduationCap className="text-orange-500 mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t.about.title}</h2>
        </div>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="People on phones"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{t.about.whyImportant}</h3>
                <p className="text-lg">
                  {t.about.whyImportantContent}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t.about.purpose}</h3>
            <p className="text-lg">
              {t.about.purposeContent}
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Students studying together"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{t.about.scope}</h3>
                <p className="text-lg">
                  {t.about.scopeContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
