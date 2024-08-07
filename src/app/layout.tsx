import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Video Downloader",
  description: "Twitter Video Downloader App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://telegram.org/js/telegram-web-app.js" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
