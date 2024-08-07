"use client";

// import { useEffect, useState } from "react";
import { useTelegramWebApp } from "@/hooks/useTelegram";
import { redirect } from "next/navigation";

export default function Home() {
  const telegramWebApp = useTelegramWebApp();
  if (!telegramWebApp) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <h3>✪ ω ✪</h3>
      </div>
    );
  }

  if (telegramWebApp && !telegramWebApp.initData) {
    redirect("https://t.me/twitter_video_downloader_bot");
  }

  console.log(!telegramWebApp.initData);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div>Hello World!</div>
      <div>
        <button onClick={() => telegramWebApp.close()}>Close Mini App</button>
      </div>
    </div>
  );
}
