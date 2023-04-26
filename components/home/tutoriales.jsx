import React, {useEffect} from 'react';
import Image from "next/image";

const Tutoriales = () => {

    useEffect(() => {
        console.log("Efecto del Componenete Tutoriales ")
    });
    return (
        <div className="min-h-[100vh] w-full my-5">
            <ul>
                <li>
                    <a className="text-white text-2xl" href="https://www.youtube.com/watch?v=D2ElJVzriCk">1- UseRef</a>
                </li>
                <li>
                    <a className="text-white text-2xl" href="https://www.youtube.com/watch?v=pFT8wD2uRSE">2- Aplicacion de Comics</a>
                </li>
            </ul>
        </div>
    );
}

export default React.memo(Tutoriales);
