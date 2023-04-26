import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { readFile, stat, readdir} from 'fs/promises'
import { basename } from 'path';
import Link from 'next/link';
import Menu from '../../components/comic/menu';


// soberania
const comic = ({id, img, alt, title, width, height, Anterior, Siguiente, PrevId, NextId,}) => {
    return (
        <Menu>
            <Head>
              <title>{"Noticias"}</title>
              <meta name="description" content="Aprendiendo next js dede 0" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section className="max-w-lg p-2 m-auto ">
                    
                    <h1 className="text-center font-bold mb-3">{title}</h1>

                    <div className="flex justify-center">
                        <Image className="max-w-[300px]" alt={alt} width={width} height={height} src={img}/>
                    </div>
                    <p className="mt-3">{alt}</p>

                    <div className="flex justify-between m-5">
                        {Anterior && <Link className="m-4" href={`/comic/${PrevId}`}>Anterior</Link>}    
                        {Siguiente && <Link className="m-4" href={`/comic/${NextId}`}>Siguiente</Link>} 
                    </div>
                </section>
            </main>
        </Menu>
    );
}

export default comic;


export async function getStaticPaths(){

    //const files = await readdir('../noticias-app/comics')
    const files = await readdir('./comics')

    const paths = files.map(file => {
        const nombre = basename(file, '.json') // quitar extension de archivo y obtener el nombre
        return { params: {id: nombre}}
    })

    // permite creat paginas staticas dependiendo del id que se le pase, en este caso todos
    return{
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}){
    const { id } = params

    const content = await readFile(`./comics/${id}.json`, 'utf-8')
    const comic = JSON.parse(content)

    const idNumber = +id
    const PrevId = idNumber - 1
    const NextId = idNumber + 1
    
    // Promise AllSeter => puede fallar uno y el otro no
    const [prevResult, nextResult] = await Promise.allSettled([
        stat(`./comics/${PrevId}.json`),
        stat(`./comics/${NextId}.json`),
    ])

    const Anterior = prevResult.status == 'fulfilled'
    const Siguiente = nextResult.status == 'fulfilled'

    return{
        props: {
            ...comic,
            Anterior,
            Siguiente,
            PrevId,
            NextId,
        }
    }
}