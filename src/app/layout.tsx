import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientProviders from "./components/ClientProviders";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["900"], // 900 = Black
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ЕКХ Бургер | Алушта",
  description: "Бургеры с доставкой в Алуште",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8EC63F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ЕКХ Бургер" />
        <link rel="apple-touch-icon" href="/logo/лого большое.png" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
