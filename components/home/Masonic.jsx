import React from 'react';
import { Masonry, List } from 'masonic';
import { useEffect, useState } from 'react';
import Image from 'next/image';

let i = 0;
const items = Array.from(Array(30), () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }

    return(
        { id: i++, texto: `Texto  ${i}`, alto: getRandomIntInclusive(100, 200)}
    )
});

const Masonic = () => {

    return (

        <Masonry items={items} render={MasonryCard}/>
        
    );
}

const MasonryCard = ({ index, data: { id, texto, alto }}) => {

    return (
    
        <div className="relative  bg-slate-50 overflow-hidden m-1 p-0">
            <h1 className="absolute bg-[#ffffff4f] z-50 text-white">{texto}: {alto}px</h1>
            <Image objectFit={'fill'} layout={'responsive'} alt={"Imagen de Prueba"} src={'https://i.pinimg.com/736x/8c/90/d8/8c90d8880e44c1132e7f744fb6a86b18.jpg'} height={alto} width={300}/>
        </div>
      );
}


export default Masonic
