"use client";

// import { useEffect, useState } from "react";
import { useTelegramWebApp } from "@/hooks/useTelegram";

export default function Home() {
  const telegramWebApp = useTelegramWebApp();
  if (!telegramWebApp) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <h3>✪ ω ✪</h3>
      </div>
    );
  }

  console.log(telegramWebApp);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div>Hello World!</div>
      <div>
        <button onClick={() => telegramWebApp.close()}>Close Mini App</button>
      </div>
    </div>
  );
}
