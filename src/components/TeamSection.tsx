import { useLanguage } from '../contexts/LanguageContext';
import { teamMembers, Language } from '../data/teamMembers';

export default function TeamSection() {
  const { t, language } = useLanguage();
  const lang = language as Language;

  return (
    <section id="team" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-12">
          {t.team.title}
        </h2>

        <div className="space-y-6 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.row1.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow">
                  <img
                    src={member.image}
                    alt={`${member.name} 頭像`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-orange-500 text-center mb-4">
                  {member.role[lang]}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  「{member.reflection[lang]}」
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamMembers.row2.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow">
                  <img
                    src={member.image}
                    alt={`${member.name} 頭像`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-orange-500 text-center mb-4">
                  {member.role[lang]}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  「{member.reflection[lang]}」
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">
            {t.team.teamReflection}
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Team collaboration"
              className="w-full md:w-64 h-48 object-cover rounded-lg"
            />
            <p className="text-slate-700 leading-relaxed text-center md:text-left flex-1">
              {t.team.teamReflectionContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
