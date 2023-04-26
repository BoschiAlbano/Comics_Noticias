import '../styles/globals.css'
//import '../styles/normalize.css'
import MenuPaginas from '../components/menuPaginas'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (<>
    <Head>
        <title>{"Mi App"}</title>
        <meta name="description" content="Aprendiendo next js dede 0" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <MenuPaginas>
      <Component {...pageProps} />
    </MenuPaginas>
    </>
  )
}

export default MyApp
