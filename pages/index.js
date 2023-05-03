import Head from "next/head"
import Menu from "../components/menu"
import React, { useState, Suspense, useEffect, useRef } from "react"
// import _UseRef from '../components/home/useRef'

const Home = () => {

  const [pagina, setPagina] = useState(0);

  /*[cargar componentes dinamicamente]*/
  const Comic = React.lazy(
    () => import('../components/LinkPage/Comic')
  )
    const Noticia = React.lazy(
    () => import('../components/LinkPage/Noticias')
  )
  // const UseRef = React.lazy(
  //   () => import('../components/home/useRef')
  // )
  // const Masonic = React.lazy(
  //   () => import('../components/home/Masonic')
  // )

  useEffect(() => {
    console.log("Efecto del pagina Home, Pagina: "+ pagina)
  });

  return (
    <>
      <Head>
          <title>{"Home"}</title>
          <meta name="description" content="Aprendiendo next js dede 0" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-[auto]">
        <div className="m-3 rounded-t">

          <div className="">
            <Menu cambiarPagina={setPagina} PaginaActual={pagina} />
          </div>

          <div className="bg-[rgb(15,23,42)] h-full px-6 rounded-t-xl mx-1 flex flex-col items-center">
            
            <Suspense fallback={null}>
              {pagina == 0 && <Comic/>}
              {pagina == 1 && <Noticia/>}
              {/* {pagina == 1 && <UseRef/>} */}
              {/* {pagina == 2 && <Masonic/>} */}
            </Suspense>
          </div>
          

        </div>
      </div>
      
    </>  
  )
    
}

export default React.memo(Home);


{/* Cunado hago una render condicional del componenete se ejecuta dos veces el efecto del componente */}
/*eliminar el <React.StrictMode> de index.js.
Como indica Federico Meza en los comentarios, 
el StrictMode de React renderiza ods veces los componentes 
(de forman intencional) para ayudarte a detectar efectos secundarios de la renderización.
Sólo ocurre durante el desarrollo.*/

/* traduccion  i18n en el 6:20 con context */
/* Variables de entorno y deploy 8:00  */