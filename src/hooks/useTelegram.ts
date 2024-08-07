import { useEffect, useState } from 'react';
import { TelegramWebApp } from '@/types/telegramWebApp';

const useTelegramWebApp = () => {
  const [telegramWebApp, setTelegramWebApp] = useState<TelegramWebApp | null>(null);

  useEffect(() => {
    const checkTelegramWebApp = async () => {
      while (!window.Telegram || !window.Telegram.WebApp) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      setTelegramWebApp(window.Telegram.WebApp);
    };

    checkTelegramWebApp();

    return () => {
      setTelegramWebApp(null);
    };
  }, []);


  return telegramWebApp;
};

export {useTelegramWebApp};