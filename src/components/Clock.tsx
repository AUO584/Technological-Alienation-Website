import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-TW', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short'
    });
  };

  return (
    <div className="text-white text-sm font-mono bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
      <div className="text-lg font-bold">{formatTime(time)}</div>
      <div className="text-xs opacity-80">{formatDate(time)}</div>
    </div>
  );
}
