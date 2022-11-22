import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;500;700&display=swap" rel="stylesheet" />
		    <meta name="description" content="A simple Kana quiz" />
		    <meta name="robots" content="all" />
		    <meta name="author" content="Nano Carvalho" />
		    <meta name="keywords" content="hiragana, katakana, japanese" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}