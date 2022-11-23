import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
		    <meta name="description" content="A simple Kana quiz" />
		    <meta name="robots" content="all" />
		    <meta name="author" content="Nano Carvalho" />
		    <meta name="keywords" content="hiragana, katakana, japanese" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/ios/192.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}