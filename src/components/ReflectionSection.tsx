import { Users } from 'lucide-react';

export default function ReflectionSection() {
  return (
    <section id="reflection" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Users className="text-orange-500 mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            反思與改善建議
          </h2>
        </div>

        <div className="text-center mb-12">
          <blockquote className="text-2xl md:text-3xl font-light text-slate-700 italic">
            「讓科技成為橋樑，而不是牆。」
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
          {/* Personal Level */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg shadow-md border border-orange-200">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">個</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              個人層面
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span>
                  為自己設定一個使用手機的規則，ex:設定「無手機時段」，如用餐或與朋友見面時不滑手機
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span>
                  減少無意識滑手機，練習專注傾聽，與他人對話時保持眼神與表情互動
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span>定期檢視社群使用時間，培養自我覺察與平衡習慣</span>
              </li>
            </ul>
          </div>

          {/* Group Level */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">團</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              團體層面
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>教師融入課程，引導學生討論</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>好友間共同立規則，例如: 第一個看手機的請客</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  聊天的話題以對方為中心、需要讓對方放下手機思考的為主
                </span>
              </li>
            </ul>
          </div>

          {/* Social Level */}
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg shadow-md border border-green-200">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">社</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              整體社會層面
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>學校推廣人際溝通與情感教育課程，強化互動能力</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>提倡數位素養與媒體平衡使用，避免過度依賴科技</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>設立更多鼓勵真實互動的公共空間與活動</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>社群平台倡導理性互動與正向使用習慣</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
