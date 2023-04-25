import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const font = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          <div className="divide-y divide-zinc-600">
            <Navigation />
            <div className="pt-12">
              <Component {...pageProps} />
            </div>
          </div>
        </main>
      </div>
      <Analytics />
    </>
  );
}
