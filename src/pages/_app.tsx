import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

import {
  library as FaLibrary,
  config as FaConfig
} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

FaLibrary.add(fab, fas)
FaConfig.autoAddCss = false

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rodrigo R. Almeida - Front-end Engineer</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#171717" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
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
