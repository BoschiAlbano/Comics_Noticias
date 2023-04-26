import React, {useState} from 'react';
import Card from './card';

const Loading = () => {
    
    const [show, setShow] = useState(false);
    return (<>
        <h1 className="text-white">5_ Desmontar un componente mientras se espera una respuesta de otro componente</h1>
        <h1 className="text-rose-300">En React 18 no pasa este error</h1>
        <div className="w-full bg-slate-500 p-5">
            <button className="border p-2 rounded-full cursor-pointer mb-2 bg-slate-200 hover:bg-slate-500" onClick={() => setShow(!show)}>Mostrar Consulta</button>
            {show && <Card/>}
        </div>
        </>
    );
}

export default Loading;
