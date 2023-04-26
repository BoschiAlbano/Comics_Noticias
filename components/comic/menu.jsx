import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {IoSearch} from 'react-icons/io5'
import { useState, useRef } from 'react';

const _App_ID = process.env.NEXT_PUBLIC_HOST 

const Menu = ({children}) => {
    
    const [Comics, setComics] = useState([]);
    const texto = useRef()

    const SearchComics = async (e) => {
        texto.current = e.target.value

        if(e.target.value === ''){
            setComics([])
            return
        };

        const Consulta = await fetch(`${_App_ID}${e.target.value}`)
        const Resultado = await Consulta.json()

        setComics(Resultado)
    }

    return (
        <div className="w-[80%] ml-[10%]">
            <div className="bg-white w-full rounded-xl h-[70px] flex flex-row justify-between items-center mb-3">
                
                <div className="flex mx-2">
                    <Link href={'/comic'}>
                        <a>
                            <Image width={'110px'} height={'50px'} src={'/XKCD.png'} alt={"Logo de Pagina XKCD"}/>
                        </a>
                    </Link>
                </div>

                <div className="relative">
                    <div className="flex flex-row text-center items-center">
                        <input onChange={(e) => SearchComics(e)} className="bg-slate-600 rounded-xl h-[30px] px-3 mr-1 text-white font-bold" type={'search'}></input>
                        <IoSearch onClick={() => console.log(Comics)} className="text-[30px] text-[rgb(15,23,42)] mr-3 cursor-pointer"/>
                    </div>
                    <div className={`absolute mt-1 bg-[#dddbdbc5] shadow-xls w-[85%] rounded-md z-50 ${Comics.length != 0 ? 'overflow-hidden' : 'overflow-visible'}`}>
                        {
                            Comics.length != 0 && <ul>
                                <li className="px-2 py-1 bg-[rgba(71,85,105,0.71)] hover:bg-transparent">
                                    <Link href={`/comic/results?q=${texto.current}`}>
                                        <a>
                                            <h6 className="font-normal text-rose-500">Ver {Comics.length} Resultados de {texto.current} </h6>
                                        </a>
                                    </Link>
                                 </li>
                            </ul>
                        }
                        <ul>
                            {Comics.length != 0 && Comics.map((comic, index) => {
                                return(
                                    <li key={index} className="px-2 py-1 hover:bg-[rgba(71,85,105,0.71)]">
                                        <Link href={`/comic/${comic.id}`}>
                                            <a>
                                                <h6 className="font-semibold">{comic.title}</h6>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
}

// export async function getServerSideProps(){

//     return{
//         props: {
//             _App_ID
//         }
//     }
// }

export default Menu;
