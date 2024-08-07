export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}
