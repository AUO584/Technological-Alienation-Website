export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-12 fade-in-up">
          組員與心得
        </h2>

        <div className="space-y-6 mb-12">
          {/* First Row - 3 members */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: '王博是',
                image: '/term/王博是.png',
                role: '主題發想、查詢資料、上台報告、貢獻度92',
                reflection:
                  '在做簡報的過程中，科技冷漠的行為讓我想到了著名的25號宇宙"的心理學實驗，雖然實驗的對象是老鼠，但也象徵的一個種族的社會群體發展到某個階段時，個體可能逐漸封閉自己，與他人疏離。在實驗中，這種現象被稱為"行為沉淪"，象徵過度依賴環境或科技下產生的社交退縮與冷漠，如果此現象設法不改善，人類可能會和該實驗的結局一樣步上老鼠的後塵。',
              },
              {
                name: '黃品萱',
                image: '/term/黃品萱.png',
                role: '資料整理、製作簡報、上台報告、貢獻度93',
                reflection:
                  '我覺得現在的聊天，變得有點習慣、也有點機械。每天都在傳訊息，但說的內容常常差不多，有時甚至只是已讀不回，或簡單回個貼圖。漸漸地，聊天變成一種「例行公事」，好像只是為了「保持聯絡」，而不是在真正交流。透過這次報告我覺得我們可以試著放下手機，多一點面對面的互動，認真聽聽看對方在說什麼，讓聊天重新變得有溫度，也更有意義，不要讓訊息代替關心。',
              },
              {
                name: '陳聖澔',
                image: '/term/陳聖澔.png',
                role: '製作簡報、上台報告、簡報美編、貢獻度90',
                reflection:
                  '今天完成了「社會溝通與表達」課程中有關「同儕之間的科技冷漠」報告，讓我對現代人彼此之間的互動方式有更深的反思。透過這次報告，我發現科技雖然讓溝通變得更方便，但也在無形中拉開了人與人之間的距離。許多人習慣用訊息或社群媒體聯繫，卻忽略了面對面交流的重要性，情感連結因此變得薄弱。準備報告的過程中，我和組員也討論到自己在生活中常常被手機吸引，錯過了與朋友真實互動的時刻。這次學習讓我意識到，科技應該是幫助人溝通的工具，而不是取代人際關係的牆。未來我會更重視真誠的交流，學會在科技與人情之間找到平衡。',
              },
            ].map((member, index) => (
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
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  「{member.reflection}」
                </p>
              </div>
            ))}
          </div>

          {/* Second Row - 2 members */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: '李宜甄',
                image: '/term/李宜甄.png',
                role: '主題發想、查詢資料、上台報告、貢獻度91',
                reflection:
                  '科技雖然方便，但也讓我們容易忽略身邊的人。有時候和朋友聚在一起，我自己也會低頭滑手機，忽略朋友的存在。正好透過這次報告，讓我學到主動關心朋友、面對面交流不只是聊天，更是一種尊重，代表你願意給對方時間與關注。因此，我希望自己能從日常小習慣開始改變，主動問候朋友、傾聽他的生活，並且表達關心與回應。這樣不只讓友情更有溫度，也能讓同學感受到彼此的尊重。',
              },
              {
                name: '林家蓉',
                image: '/term/林家蓉.png',
                role: '資料整理、製作簡報、上台報告、貢獻度92',
                reflection:
                  '透過這次做報告讓我發現，科技雖然讓溝通更方便，但也可能降低我們面對面交流的頻率。在日常生活中，我也會注意到自己和朋友相處時，大家常低頭滑手機，即使在同一個空間，也不一定真正互動。我認為科技冷漠不只是別人的問題，也可能影響我們的共感能力與心理健康。做完報告後，我希望自己能多安排面對面交流，真正關心朋友的感受，而不只是透過螢幕連線。',
              },
            ].map((member, index) => (
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
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  「{member.reflection}」
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500 fade-in-up">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">
            團隊共同心得
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Team collaboration"
              className="w-full md:w-64 h-48 object-cover rounded-lg"
            />
            <p className="text-slate-700 leading-relaxed text-center md:text-left flex-1">
              這個專題不只是一份作業，更是一面鏡子，讓我們看見自己與同儕之間的互動模式。
              我們希望透過這次討論與呈現，喚起更多人對「科技冷漠」的重視，並在日常生活中實踐改變，
              讓科技真正成為促進人際連結的橋樑，而非阻礙。感謝老師給予我們這個機會，讓我們能深入探討這個與每個人息息相關的議題。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
