import { Smartphone, MessageCircle, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FindingsSection() {
  const { t } = useLanguage();

  return (
    <section id="findings" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Lightbulb className="text-orange-500 mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            {t.findings.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
            <Smartphone className="text-orange-500 mb-4" size={36} />
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              {t.findings.ourObservation}
            </h3>
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Phone addiction"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-slate-700 leading-relaxed mb-4">
              {t.findings.ourObservationContent}
            </p>
            <div className="bg-slate-50 p-4 rounded-md">
              <p className="text-sm text-slate-600 font-medium mb-2">
                {t.findings.commonScenarios}
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                <li>{t.findings.scenario1}</li>
                <li>{t.findings.scenario2}</li>
                <li>{t.findings.scenario3}</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
            <MessageCircle className="text-orange-500 mb-4" size={36} />
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              {t.findings.peerExperience}
            </h3>
            <img
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Communication"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-slate-700 leading-relaxed mb-4">
              {t.findings.peerExperienceContent}
            </p>
            <div className="bg-slate-50 p-4 rounded-md">
              <p className="text-sm text-slate-600 font-medium mb-3">
                {t.findings.commonObservations}
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                <li>{t.findings.observation1}</li>
                <li>{t.findings.observation2}</li>
                <li>{t.findings.observation3}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500 mb-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            {t.findings.caseStudyTitle1}
          </h3>
          <div className="bg-slate-50 p-6 rounded-lg mb-4">
            <p className="text-slate-700 leading-relaxed italic">
              {t.findings.caseStudy1}
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {t.findings.caseStudy1Reflection}
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            {t.findings.caseStudyTitle2}
          </h3>
          <div className="bg-slate-50 p-6 rounded-lg mb-4">
            <img
              src="/images/messenger-breakup.png"
              alt="Messenger 分手訊息截圖"
              className="mx-auto w-3/4 md:w-1/2 rounded-lg shadow mb-4"
            />
            <p className="text-slate-700 leading-relaxed italic">
              {t.findings.caseStudy2}
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {t.findings.caseStudy2Reflection}
          </p>
        </div>
      </div>
    </section>
  );
}
