import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Noticias = () => {
    return (
        <div className="w-full my-5 place-content-center gap-5 h-screen">
        <Link href={"/comic"} className="">
        <div className="group relative block bg-black h-full rounded-2xl overflow-hidden">
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

                <div class="mt-2 sm:mt-2 lg:mt-2">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p class="text-2xl text-white font-bold">
                            Aplicacion diseñada para mostrar comics extaidos desde una pagina y almacenados en una carpeta del sistema.
                            Usando getStaticProps para generar paginas estaticas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Link>
    </div>
    );
}

export default Noticias;
