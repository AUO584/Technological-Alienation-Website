import { useState, useEffect } from 'react';

export default function SimpleSplashScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      icon: '✨',
      title: "歡迎來到",
      subtitle: "科技疏離專題網站",
      description: "探索科技如何影響人際關係"
    },
    {
      icon: '💬',
      title: "分享您的想法",
      subtitle: "與我們互動",
      description: "在留言區分享您的感受與想法"
    },
    {
      icon: '👥',
      title: "團隊合作",
      subtitle: "學術專題",
      description: "由溝通與表達課程團隊精心製作"
    },
    {
      icon: '💡',
      title: "深度思考",
      subtitle: "科技與人性",
      description: "讓我們一起思考科技對生活的影響"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* 背景動畫粒子 */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* 主要內容 */}
      <div className="relative z-10 text-center text-white">
        <div className="mb-8">
          <div className="animate-bounce text-8xl">
            {steps[currentStep].icon}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            {steps[currentStep].title}
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {steps[currentStep].subtitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-md mx-auto">
            {steps[currentStep].description}
          </p>
        </div>

        {/* 進度指示器 */}
        <div className="flex justify-center gap-2 mt-12">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index <= currentStep
                  ? 'bg-gradient-to-r from-yellow-400 to-pink-500'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* 載入動畫 */}
        <div className="mt-8">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>

      {/* 裝飾性元素 */}
      <div className="absolute top-10 left-10 animate-pulse text-4xl">❤️</div>
      <div className="absolute top-20 right-20 animate-bounce text-3xl">✨</div>
      <div className="absolute bottom-20 left-20 animate-pulse text-3xl">💬</div>
      <div className="absolute bottom-10 right-10 animate-bounce text-4xl">👥</div>

      {/* 漸變邊框效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
    </div>
  );
}

