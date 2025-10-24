import { GraduationCap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-12 fade-in-up">
          <GraduationCap className="text-orange-500 mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">研究動機與目的</h2>
        </div>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-200 fade-in-up">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="People on phones"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">為什麼這個議題重要？</h3>
                <p className="text-lg">
                  現代科技的發展帶來了前所未有的便利，但同時也在不知不覺中改變了我們與他人互動的方式。
                  當我們坐在一起，卻各自低頭滑手機；當重要的對話透過訊息進行，而非面對面溝通；
                  當社群媒體上的「讚」取代了真實的情感交流——我們開始意識到，科技帶來的可能不只是連結，還有一種新型態的疏離。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-200 fade-in-up">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">研究目的</h3>
            <p className="text-lg">
              本專題旨在探討同儕之間因科技使用而產生的「冷漠現象」。我們希望透過觀察與分析，
              了解科技如何影響年輕世代的人際關係，包括溝通模式的轉變、情感表達的差異，
              以及面對面互動減少所帶來的影響。更重要的是，我們期望能提出實際可行的改善方案，
              讓科技成為促進真實連結的工具，而非阻礙。
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-200 fade-in-up">
            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Students studying together"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">研究範圍</h3>
                <p className="text-lg">
                  我們特別關注校園環境中的同儕互動，包括課堂討論、休息時間的社交、
                  以及數位通訊工具（如即時通訊軟體、社群媒體）對人際關係品質的影響。
                  透過實際案例與現象觀察，我們希望能喚起大家對這個議題的重視，
                  並共同思考如何在享受科技便利的同時，保持人際互動的溫度與深度。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
