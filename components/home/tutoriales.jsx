import React, {useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';

const Tutoriales = () => {

    useEffect(() => {
        console.log("Efecto del Componenete Tutoriales ")
    });
    return (
        <div className="w-full my-5 grid grid-cols-2">

            <Link href={"/Comic"} className="">
                <div className="group relative block bg-black">
                    <img
                        alt="Developer"
                        src="/Com.jpg"
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div class="relative p-4 sm:p-6 lg:p-8">
                        <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                        Aplicacion
                        </p>

                        <p class="text-xl font-bold text-white sm:text-2xl">Comics</p>

                        <div class="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p class="text-sm text-white">
                                Aplicacion diseñada para mostrar comics extaidos desde una pagina y almacenados en una carpeta del sistema.
                                Usando getStaticProps para generar paginas estaticas.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </Link>

            <a href="#" class="group relative block bg-black">
            <img
                alt="Developer"
                src="/Not.jpg"
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Aplicacion
                </p>

                <p class="text-xl font-bold text-white sm:text-2xl">Noticias</p>

                <div class="mt-32 sm:mt-48 lg:mt-64">
                <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <p class="text-sm text-white">
                    Aplicacion que consume una api de noticias.
                    </p>
                </div>
                </div>
            </div>
            </a>
        </div>
    );
}

export default React.memo(Tutoriales);
