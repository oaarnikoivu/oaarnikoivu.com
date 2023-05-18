import Navigation from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Oliver Aarnikoivu",
    template: "Oliver Aarnikoivu - %s",
  },
  description: "Portfolio of Oliver Aarnikoivu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          <div className="divide-y divide-zinc-600">
            <Navigation />
            <div className="pt-12">{children}</div>
          </div>
        </main>
      </body>
      <Analytics />
    </html>
  );
}
