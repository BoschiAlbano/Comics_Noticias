import React, {useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';

const Tutoriales = () => {

    useEffect(() => {
        console.log("Efecto del Componenete Tutoriales ")
    });
    return (
        <div className="w-full my-5 place-content-center gap-5 h-screen">
            <h1>Pagina de HOme</h1>
        </div>
    );
}

export default React.memo(Tutoriales);
