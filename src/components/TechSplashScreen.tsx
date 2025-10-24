import { useState, useEffect } from 'react';

export default function TechSplashScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const steps = [
    {
      icon: '⚡',
      title: "TECH",
      subtitle: "科技疏離研究",
      description: "探索數位時代的人際關係變化"
    },
    {
      icon: '🔬',
      title: "ANALYSIS",
      subtitle: "深度分析",
      description: "數據驅動的社會現象研究"
    },
    {
      icon: '🤖',
      title: "DIGITAL",
      subtitle: "數位時代",
      description: "科技如何重塑人類互動模式"
    },
    {
      icon: '🚀',
      title: "FUTURE",
      subtitle: "未來展望",
      description: "重新定義科技與人性的平衡"
    }
  ];

  useEffect(() => {
    // 載入進度動畫
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // 步驟切換動畫
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* 科技背景網格 */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div
              key={i}
              className="border border-cyan-400/30"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                animation: 'pulse 2s infinite'
              }}
            />
          ))}
        </div>
      </div>

      {/* 動態線條 */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: '0%',
              width: '100%',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* 主要內容 */}
      <div className="relative z-10 text-center text-white">
        {/* 科技圖標 */}
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-pulse">
            {steps[currentStep].icon}
          </div>
          <div className="w-16 h-16 border-2 border-cyan-400 rounded-full mx-auto animate-spin">
            <div className="w-full h-full border-t-2 border-cyan-400 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* 標題區域 */}
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            {steps[currentStep].title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-mono text-cyan-400">
            {steps[currentStep].subtitle}
          </h2>
          <p className="text-lg text-gray-300 max-w-md mx-auto font-mono">
            {steps[currentStep].description}
          </p>
        </div>

        {/* 進度條 */}
        <div className="w-80 mx-auto mb-8">
          <div className="flex justify-between text-sm text-cyan-400 mb-2">
            <span>LOADING</span>
            <span>{loadingProgress}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* 進度指示器 */}
        <div className="flex justify-center gap-3 mb-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index <= currentStep
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* 科技元素 */}
        <div className="flex justify-center gap-4 text-cyan-400">
          <div className="animate-pulse">◉</div>
          <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>◉</div>
          <div className="animate-pulse" style={{ animationDelay: '1s' }}>◉</div>
        </div>
      </div>

      {/* 角落裝飾 */}
      <div className="absolute top-4 left-4 text-cyan-400 font-mono text-sm animate-pulse">
        SYSTEM_INIT
      </div>
      <div className="absolute top-4 right-4 text-cyan-400 font-mono text-sm animate-pulse">
        TECH_ANALYSIS
      </div>
      <div className="absolute bottom-4 left-4 text-cyan-400 font-mono text-sm animate-pulse">
        DATA_PROCESSING
      </div>
      <div className="absolute bottom-4 right-4 text-cyan-400 font-mono text-sm animate-pulse">
        READY
      </div>

      {/* 掃描線效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
    </div>
  );
}

