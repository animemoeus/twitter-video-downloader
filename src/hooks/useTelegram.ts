import { useEffect, useState } from 'react';

const useTelegramWebApp = () => {
  const [telegramWebApp, setTelegramWebApp] = useState(null);

  useEffect(() => {
    const checkTelegramWebApp = async () => {
      while (!window.Telegram || !window.Telegram.WebApp) {
        await new Promise(resolve => setTimeout(resolve, 5000));
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