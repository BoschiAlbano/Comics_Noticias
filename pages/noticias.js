import Image from "next/image";
import Head from "next/head";
import { Masonry } from "masonic";

export default function Noticias({noticias}) {

    return (
      <>
          <Head>
              <title>{"Noticias"}</title>
              <meta name="description" content="Aprendiendo next js dede 0" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={"gap-[10px] bg-[rgb(15,23,42)] p-6 rounded-t-xl mx-1 items-center"}>
              
            {noticias.length == 0 && <p>No hay noticias</p>}
            {noticias.length > 0 && <Masonry items={noticias} render={MasonryCard}/>}

          </div>
      </>
      )
}

const MasonryCard = ({ index, data: { title, description, urlToImage }}) => {
    return(
      <div key={index} className={"break-inside-avoid border-[1px] m-1 rounded-[10px] overflow-hidden hover:bg-slate-800"}>
        <Image
          alt={`Descripcion de imagen ${title}`} 
          src={urlToImage}
          width={450}
          height={300}
          quality={70}
          layout='responsive'
          priority={index < 2}
          placeholder='empty'// imagenes importadas
          //blurDataURL={imgenBase64}
        />
        <h2 className="font-bold text-1xl p-1 text-blue-400">{title}</h2>
        <p className="text-blue-200 font-serif text-[15px] p-1">{description}</p>
      </div>
    )
}

/* Formas de hacer pre rendering en next js*/

// no siempre se ejecuta en el servidor, ej. cuando navegamos entre paginas.
// aqui se peude conectar a la base de datos tambien.
// o hacer post delete put get de apis rest

// N requests --> se ejecuta n veces
// para datos que necesitan que sean muy live
// tiene demasiados datos dinamicos
// export async function getServerSideProps(context){

//   const Api = `https://newsapi.org/v2/everything?q=apple&from=2022-10-11&to=2022-10-11&sortBy=popularity&apiKey=090a1e6910e6464abd4b2f348ed0f486`

//   const res = await fetch(Api);

//   const {articles} = await res.json();

//   return{
//     props:{
//       noticias: articles
//     }
//   }
// }

// N requests --> se ejecuta 1 vez en build time (o para refrescar la pagina)
// al hacer la buid genera una pagina statica

export async function getStaticProps(){

    const Api = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=090a1e6910e6464abd4b2f348ed0f486`
  
    const res = await fetch(Api);
  
    const {articles} = await res.json();
  
    return{
      props:{
        noticias: articles
      }
    }
  }