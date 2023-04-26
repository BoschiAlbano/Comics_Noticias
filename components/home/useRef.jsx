import React, {useEffect} from 'react';
import Image from 'next/image';

import Focus from './useRef/focus';
import Copy from './useRef/copy';
import MediaPlayer from './useRef/mediaPlayer';
import Renders from './useRef/renders';
import Loading from './useRef/loading/loading';

const UseRef = () => {

  useEffect(() => {
    console.log("Efecto del Componente UseRef")
  });

    return (
        <>
          <h1 className="text-xl text-white font-bold">UseRef</h1>
          <ul>
            <li className="text-white font-normal">1- Interaccion con el DOM</li>
            <li className="text-white font-normal">2- Variable que mantiene su estado entre renderizaciones</li>
            <li className="text-white font-normal">3- Cunado cambie su estado no genera un nuevo render</li>
          </ul>

          <div className="w-full mt-2 rounded-[10px] p-5 mb-5 bg-[rgba(51,65,85,0.75)]">
            <ul>
              <li className="my-2"><Focus/></li>
              <li className="my-2"><Copy/></li>
              <li className="my-2"><MediaPlayer/></li>
              <li className="my-2"><Renders/></li>
              <li className="my-2"><Loading/></li>
            </ul>

          </div>
        </>
    );
}

export default React.memo(UseRef);
