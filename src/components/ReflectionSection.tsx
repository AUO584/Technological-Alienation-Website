import { Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ReflectionSection() {
  const { t } = useLanguage();

  return (
    <section id="reflection" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Users className="text-orange-500 mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            {t.reflection.title}
          </h2>
        </div>

        <div className="text-center mb-12">
          <blockquote className="text-2xl md:text-3xl font-light text-slate-700 italic">
            「{t.reflection.quote}」
          </blockquote>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src="https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="People connecting"
            className="w-full max-w-2xl h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg shadow-md border border-orange-200">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">個</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              {t.reflection.personal}
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span>{t.reflection.personalItem1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span>{t.reflection.personalItem2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span>{t.reflection.personalItem3}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">團</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              {t.reflection.group}
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>{t.reflection.groupItem1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>{t.reflection.groupItem2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>{t.reflection.groupItem3}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg shadow-md border border-green-200">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">社</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              {t.reflection.social}
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>{t.reflection.socialItem1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>{t.reflection.socialItem2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>{t.reflection.socialItem3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>{t.reflection.socialItem4}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
