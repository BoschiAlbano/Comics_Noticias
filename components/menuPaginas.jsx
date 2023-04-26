
import Link from 'next/link'
import { IoMenuSharp, IoHomeOutline, IoNewspaperOutline, IoBulbOutline } from 'react-icons/io5'
import React,{useState, useRef, useEffect } from 'react';

const MenuPaginas = ({children}) => {

    const [open, setopen] = useState(false);
    const [background, setbackground] = useState('bg-[rgb(15,23,42)]');
    const MenuRef = useRef()

    /*[Esconder el menu al presionar el boton menu]*/
    const EsconderMenu = () => {
        setopen((v) => !v);
    }

    /*[Esconder Menu al Presionar en la pantalla]*/
    const EsconderMenu2 = () => {
        open == true && setopen(false);
    }

    /*[Agregar el evento scroll al la referencia del contenedor]*/
    useEffect(() => {
        
        const EventoMenu = () => {
            const _menu = MenuRef.current
            const { y } = _menu.getBoundingClientRect();
        
            const _background = y >= 60 ? 'bg-[rgb(15,23,42)]' : 'bg-[rgba(15,23,42,0.9)]'
            setbackground(_background)
        }

        window.addEventListener('scroll', EventoMenu)
        return () => {
            window.removeEventListener('scroll', EventoMenu)
        };

    }, []);

    /*[Items del menu horizontal]*/
    const datos = [
        {ruta: "/", nombre: "Home", icono: IoHomeOutline},
        {ruta: "/noticias", nombre: "Noticias", icono: IoNewspaperOutline},
        {ruta: "/comic", nombre: "Comics", icono: IoBulbOutline},
    ]

    return(
        <>
            <div className="fixed z-[100] w-full top-0 left-0 bg-[rgba(51,65,85,0.24)]" onClick={EsconderMenu2}>
                {/* Encabezado */}
                <div className={`h-[60px] w-full ${background} duration-500 flex justify-center items-center relative`}>
                
                    <div className="w-[50px] mx-2 text-4xl text-white font-bold cursor-pointer p-1 absolute left-0 transition-all duration-300 hover:bg-slate-600 rounded" onClick={() => EsconderMenu()}><IoMenuSharp/></div>
                    <h1 className="text-3xl font-bold text-white "> Aprendiendo Next js - Css con Tailwind</h1>

                </div>
                {/* Menu Horizontal */}
                <div className={open ? `min-w-[250px] w-[20%] h-screen ${background} duration-500 rounded-r border-slate-700 border-r items-center overflow-y-auto` : "hidden"}>

                    <ul className="">
                        {
                            datos.map((_item, i) => {

                                return(
                                    <li key={i}>
                                        <Link href={_item.ruta}>
                                            <div className="flex items-center cursor-pointer transition-all duration-300 hover:bg-slate-600 rounded" onClick={() => EsconderMenu()}>
                                                <_item.icono className=" text-4xl mx-2 my-4 text-white p-1"/>
                                                <h1 className="text-xl px-1 text-white">{_item.nombre}</h1>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>

                </div>
                
            </div>

            {/* Contenedor */}
            <main ref={MenuRef} className="mt-[70px] relative z-[90]">
                {children}  
            </main>
        </>
    )
}

export default React.memo(MenuPaginas)