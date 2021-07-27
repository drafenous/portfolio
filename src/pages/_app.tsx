import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rodrigo R. Almeida - Front-end Engineer</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="A sample portfolio to list my contact and main technologies"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
