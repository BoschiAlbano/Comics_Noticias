import react from 'react';
import React, { useRef, useState, useEffect } from 'react';


const Renders = () => {    
    const [texto, setText] = useState("");
    const RendersRef = useRef(0);// #1 - ref=1

    useEffect(() => {
        // Me ejecuta dos veces el efecto de entrada nose porq? en react modedo desalloro pasa eso StrictMode
        //console.log("Efecto del Render")
        RendersRef.current++;// #3 ref=2
    });// Con [] se ejetua el efecto solo una vez

    const handleContador = (e) => 
    {
        setText(e.target.value)
    }

    return (
        <div>

            <h1 className="text-white">4_ Contador de Renderizados</h1>

            <input className="" type={'text'} value={texto} onChange={(e) => handleContador(e)}></input>

            {/* // #2 - ref=1 */}
            <h1 className="text-white">{"Contador de Renders: "+ RendersRef.current}</h1>

        </div>
    );
}

export default Renders
