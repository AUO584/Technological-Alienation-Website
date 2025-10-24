import { Smartphone, MessageCircle, Lightbulb } from 'lucide-react';

export default function FindingsSection() {
  return (
    <section id="findings" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Lightbulb className="text-orange-500 mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            觀察與發現
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
            <Smartphone className="text-orange-500 mb-4" size={36} />
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              我們的生活觀察
            </h3>
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Phone addiction"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-slate-700 leading-relaxed mb-4">
              我們注意到，許多同學在一起時，仍常專注於手機畫面，
              即使身邊有人，卻很少真正對話。許多人也提到，
              有時想說的話會改成訊息傳送，導致情感表達變得冷淡或誤會增加。
            </p>
            <div className="bg-slate-50 p-4 rounded-md">
              <p className="text-sm text-slate-600 font-medium mb-2">
                常見的情境
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                <li>午休時間大家都在滑手機而非聊天</li>
                <li>群組裡活躍，但面對面卻很安靜</li>
                <li>用貼圖或表情符號代替真實回應</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
            <MessageCircle className="text-orange-500 mb-4" size={36} />
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              同儕經驗與感受
            </h3>
            <img
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Communication"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-slate-700 leading-relaxed mb-4">
              在討論中，我們發現不少人覺得「線上聯絡更方便但更疏遠」，
              有些人甚至覺得面對面互動會變得尷尬，久而久之就更依賴訊息溝通。
              大家都意識到，科技的便利有時也讓情感變得薄弱。
            </p>
            <div className="bg-slate-50 p-4 rounded-md">
              <p className="text-sm text-slate-600 font-medium mb-3">
                我們的共通觀察
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                <li>習慣用訊息處理情緒或誤會</li>
                <li>面對面聊天時間明顯減少</li>
                <li>容易產生「大家都在線上，卻都很遠」的感覺</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 實際案例分享 */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            實際案例：校園互動中的科技冷漠
          </h3>
          <div className="bg-slate-50 p-6 rounded-lg mb-4">
            <p className="text-slate-700 leading-relaxed italic">
              「我們在組員的經驗中了解到，某堂通識課小組討論上，
              同一組的五位同學在假日時約時間在線上製作簡報，
              在有開群組通話的同時，所有人寧願用打字來傳遞訊息也不願意開口說話。
              一位組員表示：『群組通話有開跟沒開一樣www』、『用文字取代通話算不算一種科技冷漠www』
              這種情況看似方便，卻也讓原本應該活躍的討論變得冷清。」
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            這個案例反映出「科技冷漠」在校園中並不罕見。當同儕之間越來越依賴文字互動，
            面對面交流的機會逐漸減少，彼此理解與情感連結也因此被削弱。
            我們開始思考：科技究竟是幫助我們靠近，還是悄悄地拉開了距離？
          </p>
        </div>

        {/* 實際案例分享 */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            實際案例：Messenger 分手訊息
          </h3>
          <div className="bg-slate-50 p-6 rounded-lg mb-4">
            {/* 圖片區塊 */}
            <img
              src="/images/messenger-breakup.png"
              alt="Messenger 分手訊息截圖"
              className="mx-auto w-3/4 md:w-1/2 rounded-lg shadow"
            />
            {/* 文字區塊 */}
            <p className="text-slate-700 leading-relaxed italic">
              「我們在一個組員的朋友經驗發現，一位學生的另一伴選擇透過 Messenger
              結束一段長達兩年的感情關係。
              當被問及原因時，對方表示『我覺得你在現實跟網路對我的態度差太多了。』。
              這個案例凸顯了一個令人擔憂的趨勢：年輕人越來越習慣透過螢幕處理情感問題，
              而逃避真實的情感交流與衝突處理，且許多人在網路上和現實生活的處世方式判若兩人。」
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            這種情感距離的產生，不僅影響當事人的情感發展，也反映出科技如何改變我們處理人際關係的方式。
            當螢幕成為情感的緩衝區，我們失去的不只是溝通的深度，還有面對困難對話的勇氣與能力。
          </p>
        </div>
      </div>
    </section>
  );
}
