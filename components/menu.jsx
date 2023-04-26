import React, { useState, useEffect } from 'react';
import {IoHomeOutline, IoBalloonOutline} from 'react-icons/io5'

const Items = [
    {nombre: "Tutoriales", icon: IoHomeOutline, dis: "translate-x-0", ruta: "/"},
    {nombre: "UseRef", icon: IoBalloonOutline, dis: "translate-x-16", ruta: "/noticias"},
    {nombre: "Masonic", icon: IoBalloonOutline, dis: "translate-x-32", ruta: "/Masonic"}
];

const Menu = ({cambiarPagina, PaginaActual}) => {

    useEffect(() => {
        console.log("Efecto del MENU")
    });

    const cambiar = (i) => {
        cambiarPagina(i)
    }
    return (<>
            <div className="mb-2 w-full flex justify-center items-end h-[90px] bg-transparent">
                <div className="bg-[rgb(15,23,42)] max-h-[4.5rem] px-6 rounded-t-xl w-full mx-1">
                <ul className="flex relative">
                    <span className={`bg-rose-600 border-4 border-Fondo h-16 w-16 absolute -top-5 rounded-full ${Items[PaginaActual].dis} duration-500`}>
                        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
                        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
                    </span>
                    {Items.map((_items, i) => {
                        return(
                        <li key={i} className="w-16">
                            <div className="flex flex-col text-center pt-6 items-center h-[75px]" onClick={() => cambiar(i)}>
                                <span className={`text-xl cursor-pointer duration-500 text-white ${i === PaginaActual && "-mt-6 text-white absolute"}`}>
                                    <_items.icon/>
                                </span>
                                <span className={` text-white m-1 text-xl ${ PaginaActual === i ? "translate-y-4 duration-700 opacity-100" : "opacity-0 translate-y-10"}`}>{_items.nombre}</span>
                            </div>
                        </li>
                        )
                    })}
                </ul>
                </div>
            </div>


        </>
    );
}

export default React.memo(Menu);
