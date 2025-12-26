import { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Person {
  id: number;
  name: string;
  isPhoneActive: boolean;
  showDialog: boolean;
  dialogText: string;
}

const dialoguesMap = {
  'zh-TW': [
    '嘿！今天過得如何？',
    '最近在忙什麼呢？',
    '我很在乎你喔！',
    '一起聊聊天吧！',
    '你過得好嗎？',
    '我想聽聽你的想法',
    '我很開心能和你在一起',
    '讓我們好好談心'
  ],
  'zh-CN': [
    '嘿！今天过得如何？',
    '最近在忙什么呢？',
    '我很在乎你哦！',
    '一起聊聊天吧！',
    '你过得好吗？',
    '我想听听你的想法',
    '我很开心能和你在一起',
    '让我们好好谈心'
  ],
  'en': [
    'Hey! How was your day?',
    'What have you been busy with lately?',
    'I really care about you!',
    'Let\'s chat!',
    'How are you doing?',
    'I\'d like to hear your thoughts',
    'I\'m happy to be with you',
    'Let\'s have a real talk'
  ],
  'ja': [
    'やあ！今日はどうだった？',
    '最近何してるの？',
    'あなたのことが心配です！',
    'チャットしましょう！',
    'お元気ですか？',
    'あなたの考えを聞きたい',
    'あなたと一緒にいて嬉しい',
    'ちゃんと話そう'
  ],
  'ko': [
    '안녕! 오늘 어땠어?',
    '최근에 뭐 바빴어?',
    '나는 너를 정말 신경 써!',
    '얘기해보자!',
    '잘 지내고 있어?',
    '너의 생각을 듣고 싶어',
    '너와 함께 있어서 행복해',
    '진심으로 얘기하자'
  ]
};

export default function TechAlienationGame() {
  const { language } = useLanguage();
  const dialogues = dialoguesMap[language as keyof typeof dialoguesMap] || dialoguesMap['zh-TW'];
  const [people, setPeople] = useState<Person[]>([
    { id: 1, name: '小王', isPhoneActive: false, showDialog: false, dialogText: '' },
    { id: 2, name: '小李', isPhoneActive: false, showDialog: false, dialogText: '' },
    { id: 3, name: '小張', isPhoneActive: false, showDialog: false, dialogText: '' },
    { id: 4, name: '小林', isPhoneActive: false, showDialog: false, dialogText: '' },
    { id: 5, name: '小陳', isPhoneActive: false, showDialog: false, dialogText: '' }
  ]);

  const handlePhoneClick = (id: number) => {
    setPeople(people.map(p =>
      p.id === id
        ? { ...p, isPhoneActive: !p.isPhoneActive, showDialog: false }
        : p
    ));
  };

  const handlePersonClick = (id: number) => {
    const randomDialog = dialogues[Math.floor(Math.random() * dialogues.length)];
    setPeople(people.map(p =>
      p.id === id
        ? { ...p, showDialog: !p.showDialog, dialogText: randomDialog, isPhoneActive: false }
        : p
    ));
  };

  const phoneCount = people.filter(p => p.isPhoneActive).length;
  const isAlienated = phoneCount >= 3;

  const colors = [
    'from-blue-400 to-blue-600',
    'from-pink-400 to-pink-600',
    'from-yellow-400 to-yellow-600',
    'from-green-400 to-green-600',
    'from-purple-400 to-purple-600'
  ];

  return (
    <section id="game" style={{ backgroundColor: 'var(--bg-primary)' }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {language === 'zh-TW' && '科技冷漠互動遊戲'}
            {language === 'zh-CN' && '科技冷漠互动游戏'}
            {language === 'en' && 'Tech Alienation Interactive Game'}
            {language === 'ja' && 'テクノロジー無関心インタラクティブゲーム'}
            {language === 'ko' && '기술 소외 인터랙티브 게임'}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {language === 'zh-TW' && '點擊「手機」讓人物低頭滑手機，點擊「人物」進行面對面對話'}
            {language === 'zh-CN' && '点击「手机」让人物低头滑手机，点击「人物」进行面对面对话'}
            {language === 'en' && 'Click "Phone" to make people look down at their phones, click "Person" for face-to-face conversation'}
            {language === 'ja' && '「携帯電話」をクリックして人を下向きにさせ、「人」をクリックして対面で会話します'}
            {language === 'ko' && '\"휴대폰\"을 클릭하여 사람들이 휴대폰을 내려다보게 하고, \"사람\"을 클릭하여 대면 대화를 진행하세요'}
          </p>
        </div>

        {/* 遊戲區域 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8" style={{ borderColor: 'var(--border-color)', border: '2px solid' }}>
          {/* 人物排排坐 */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {people.map((person, index) => (
              <div key={person.id} className="relative">
                {/* 人物卡片 */}
                <div
                  className={`w-24 h-32 rounded-xl bg-gradient-to-br ${colors[index]} shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 flex flex-col items-center justify-center relative overflow-hidden`}
                  onClick={() => handlePersonClick(person.id)}
                >
                  {/* 人物圖示 */}
                  <div className="text-5xl mb-2 transition-all duration-300" style={{
                    transform: person.isPhoneActive ? 'rotateX(90deg)' : 'rotateX(0deg)'
                  }}>
                    👤
                  </div>

                  {/* 低頭效果 */}
                  {person.isPhoneActive && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <p className="text-white text-xs font-bold text-center">
                        {language === 'zh-TW' && '滑手機中…'}
                        {language === 'zh-CN' && '滑手机中…'}
                        {language === 'en' && 'Scrolling...'}
                        {language === 'ja' && 'スクロール中…'}
                        {language === 'ko' && '스크롤 중…'}
                      </p>
                    </div>
                  )}

                  {/* 名字 */}
                  <p className="text-white font-bold text-sm mt-2">{person.name}</p>
                </div>

                {/* 手機圖示 */}
                <button
                  onClick={() => handlePhoneClick(person.id)}
                  className={`absolute -bottom-4 -right-4 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
                    person.isPhoneActive
                      ? 'bg-red-500 ring-4 ring-red-300'
                      : 'bg-slate-400 hover:bg-slate-500'
                  }`}
                  title="點擊切換滑手機狀態"
                >
                  <Smartphone size={20} className="text-white" />
                </button>

                {/* 對話氣泡 */}
                {person.showDialog && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-3 bg-white rounded-lg shadow-lg p-3 w-32 z-10 animate-bounce">
                    <div className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                      {person.dialogText}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 狀態提示 */}
          <div className="text-center mb-6">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {language === 'zh-TW' && `目前有 `}
              {language === 'zh-CN' && `目前有 `}
              {language === 'en' && `Currently `}
              {language === 'ja' && `現在 `}
              {language === 'ko' && `현재 `}
              <span className="font-bold" style={{ color: isAlienated ? '#ef4444' : 'var(--accent-color)' }}>{phoneCount}</span>
              {language === 'zh-TW' && ` 人正在滑手機`}
              {language === 'zh-CN' && ` 人正在滑手机`}
              {language === 'en' && ` people are scrolling`}
              {language === 'ja' && ` 人がスクロール中`}
              {language === 'ko' && ` 명이 스크롤 중`}
            </p>
          </div>

          {/* 冷漠警告 */}
          {isAlienated && (
            <div className="bg-gradient-to-r from-red-100 to-red-50 border-2 border-red-300 rounded-xl p-6 text-center animate-pulse">
              <p className="text-lg font-bold text-red-600 mb-2">
                {language === 'zh-TW' && '⚠️ 科技冷漠警告'}
                {language === 'zh-CN' && '⚠️ 科技冷漠警告'}
                {language === 'en' && '⚠️ Tech Alienation Alert'}
                {language === 'ja' && '⚠️ テクノロジー無関心警告'}
                {language === 'ko' && '⚠️ 기술 소외 경고'}
              </p>
              <p className="text-red-600 text-base">
                {language === 'zh-TW' && '「大家都在，但大家的心卻不在」'}
                {language === 'zh-CN' && '「大家都在，但大家的心却不在」'}
                {language === 'en' && '"Everyone is here, but no one\'s heart is"'}
                {language === 'ja' && '「みんながここにいるが、誰の心もここにない」'}
                {language === 'ko' && '\"모두가 여기 있지만 누구의 마음도 여기에 없다\"'}
              </p>
              <p className="text-red-500 text-sm mt-2">
                {language === 'zh-TW' && '當有 3 人以上低頭滑手機時，即使大家坐在一起，真實的互動也消失了...'}
                {language === 'zh-CN' && '当有 3 人以上低头滑手机时，即使大家坐在一起，真实的互动也消失了...'}
                {language === 'en' && 'When 3 or more people are scrolling, real interaction disappears even though everyone is together...'}
                {language === 'ja' && '3人以上がスクロールしているとき、みんなが一緒にいてもリアルな対話は消えてしまいます...'}
                {language === 'ko' && '3명 이상이 스크롤할 때 모두가 함께 있어도 실제 상호작용은 사라집니다...'}
              </p>
            </div>
          )}
        </div>

        {/* 遊戲說明 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="rounded-lg p-6 border">
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              📱 {language === 'zh-TW' && '如何玩'}
              {language === 'zh-CN' && '如何玩'}
              {language === 'en' && 'How to Play'}
              {language === 'ja' && 'あそび方'}
              {language === 'ko' && '놀이 방법'}
            </h3>
            <ul className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="flex gap-2">
                <span>1.</span>
                <span>
                  {language === 'zh-TW' && '點擊「手機圖示」讓人物低頭滑手機'}
                  {language === 'zh-CN' && '点击「手机图示」让人物低头滑手机'}
                  {language === 'en' && 'Click "Phone" to make people look down'}
                  {language === 'ja' && '「携帯電話」をクリックして人を下向きにさせます'}
                  {language === 'ko' && '\"휴대폰\"을 클릭하여 사람이 내려다보게 합니다'}
                </span>
              </li>
              <li className="flex gap-2">
                <span>2.</span>
                <span>
                  {language === 'zh-TW' && '點擊「人物」進行面對面的對話'}
                  {language === 'zh-CN' && '点击「人物」进行面对面的对话'}
                  {language === 'en' && 'Click "Person" for face-to-face conversation'}
                  {language === 'ja' && '「人物」をクリックして対面で会話します'}
                  {language === 'ko' && '\"사람\"을 클릭하여 대면 대화를 나눕니다'}
                </span>
              </li>
              <li className="flex gap-2">
                <span>3.</span>
                <span>
                  {language === 'zh-TW' && '觀察當 3+ 人滑手機時會發生什麼'}
                  {language === 'zh-CN' && '观察当 3+ 人滑手机时会发生什么'}
                  {language === 'en' && 'Observe what happens when 3+ people scroll'}
                  {language === 'ja' && '3人以上がスクロールするときに何が起こるかを観察します'}
                  {language === 'ko' && '3명 이상이 스크롤할 때 어떤 일이 일어나는지 관찰하세요'}
                </span>
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="rounded-lg p-6 border">
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              💡 {language === 'zh-TW' && '思考'}
              {language === 'zh-CN' && '思考'}
              {language === 'en' && 'Reflection'}
              {language === 'ja' && '熟考'}
              {language === 'ko' && '성찰'}
            </h3>
            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
              {language === 'zh-TW' && '這個遊戲象徵著我們日常的選擇。當每個人都專注於手機而不是彼此時，即使我們在同一個空間，也無法建立真實的連結。真正的互動來自於放下手機，用心傾聽彼此的聲音。'}
              {language === 'zh-CN' && '这个游戏象征着我们日常的选择。当每个人都专注于手机而不是彼此时，即使我们在同一个空间，也无法建立真实的连结。真正的互动来自于放下手机，用心倾听彼此的声音。'}
              {language === 'en' && 'This game symbolizes our daily choices. When everyone focuses on their phones instead of each other, even if we are in the same space, we cannot build genuine connections. True interaction comes from putting down phones and listening to each other\'s voices with our hearts.'}
              {language === 'ja' && 'このゲームは私たちの日常的な選択を象徴しています。誰もが互いの代わりに携帯電話に焦点を当てているとき、たとえ私たちが同じ空間にいても、本当のつながりを築くことはできません。真の対話は携帯電話を手放し、心から互いの声に耳を傾けることから生まれます。'}
              {language === 'ko' && '이 게임은 우리의 일상적인 선택을 상징합니다. 모두가 서로가 아닌 휴대폰에 집중할 때, 우리가 같은 공간에 있더라도 진정한 연결을 만들 수 없습니다. 진정한 상호작용은 휴대폰을 내려놓고 마음으로 서로의 목소리에 귀를 기울일 때 생겨납니다.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
