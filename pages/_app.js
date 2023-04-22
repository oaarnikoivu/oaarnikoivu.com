import Navigation from "@/components/Navigation/Navigation";
import "@/styles/globals.css";
import { Inter, Kaisei_Decol } from "next/font/google";

const fontBold = Kaisei_Decol({ subsets: ["latin"], weight: "700" });
const font = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        h1 {
          font-family: ${font.style.fontFamily};
          font-weight: 700;
        }

        p {
          font-family: ${font.style.fontFamily};
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        a {
          transition: all 0.2s ease-in-out;
        }

        div {
          animation: fadeInAnimation ease 1s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }

        @keyframes fadeInAnimation {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
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
    </>
  );
}
