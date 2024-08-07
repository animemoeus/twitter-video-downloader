"use client";

import { useEffect, useState } from "react";
import { useTelegramWebApp } from "@/hooks/useTelegram";

export default function Home() {
  const telegramWebApp = useTelegramWebApp();
  if (!telegramWebApp) {
    return <p>✪ ω ✪</p>;
  }
  const handleClick = () => {
    console.log("hello");
  };

  console.log("arter");
  console.log(telegramWebApp);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div>Hello World!</div>
      <button onClick={handleClick}>Test`</button>
    </div>
  );
}
