import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from '../../components/comic/menu';
import search from '../../services/search';
import Head from 'next/head';

const Results = ({datos}) => {
    return (
        <Menu>
            <Head>
              <title>{"Busqueda"}</title>
              <meta name="description" content="Aprendiendo next js dede 0" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-slate-400 w-full">

                {datos.map((comic, index) => {
                    return(
                        <Link key={index} href={`/comic/${comic.id}`}>
                            <a className="flex text-center justify-start content-center hover:bg-slate-300">
                                
                                <div className="mx-3 my-1">
                                    <Image className="rounded-full gap-5" src={comic.img} width={75} height={75} alt={comic.title}/>
                                </div>
                                <div className="mx-3 flex w-full items-center">
                                    <h1>{comic.title}</h1>
                                </div>
                            </a>
                        </Link>
                    )
                })}

            </div>
        </Menu>
    );
}

export default Results;

export async function getServerSideProps(context){
    const {query} = context
    const {q = ''} = query

    const resultado = await search(q)

    return{
        props: {
            datos: resultado.results
        }
    }
}