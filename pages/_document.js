import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Portfolio of Oliver Aarnikoivu" />
        <meta
          name="keywords"
          content="oliver, aarnikoivu, oliver aarnikoivu, fullstack, full stack, software, engineer, design, artificial intelligence, luxembourg, finland, next gate tech"
        />
        <meta name="robots" content="all" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
