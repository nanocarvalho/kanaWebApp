import '../styles/globals.css'
import Head from 'next/head'

function KanaWebApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kana quiz</title>    
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default KanaWebApp
