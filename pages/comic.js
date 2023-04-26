import React from 'react';
import { useState, useEffect } from 'react';
import fs from 'fs/promises';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Masonry } from 'masonic';
import Menu from '../components/comic/menu';

const Prueba = ({comics}) => {

    const [datos, setdatos] = useState(false);

    useEffect(() => {
        setdatos(true)
    }, []);

    return (
        <Menu>
            <Head>
              <title>{"Noticias"}</title>
              <meta name="description" content="Aprendiendo next js dede 0" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="">
                {datos == false && <h1>Cargando...</h1>}
                {datos == true && <Masonry items={comics} render={MasonryCard}/>}
                {/* {comics.length <= 0 && <h1>Cargando...</h1>}
                {comics.length > 0 && <Masonry items={comics} render={MasonryCard}/>} */}
            </section>
        </Menu>
    );

}

const MasonryCard = ({ index, data: { id, width, height, img, alt }}) => {
    return(

        <Link className="relative" href={`/comic/${id}`} key={index}>
            <a>
                <Image layout="responsive" width={width} height={height} src={img} alt={alt}/>
            </a>
        </Link>
        
    )
}

export default Prueba;

export async function getStaticProps(context){

    const files = await fs.readdir('./comics')
    const UltimosComics = files.slice(-30, files.length);

    const promesasLeerFiles = UltimosComics.map(async (files) => {
        const content = await fs.readFile(`./comics/${files}`, 'utf-8')
        return await JSON.parse(content)
    })

    const comics = await Promise.all(promesasLeerFiles)

    return{
        props: {
            comics
        }
    }
}