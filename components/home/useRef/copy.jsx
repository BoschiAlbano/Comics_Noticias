import React, { useRef, useState } from 'react';

const Copy = () => {

    const [text, setText] = useState("");
    const inputRef = useRef();

    const [copy, setCopy] = useState(false)

    const HandleClick = () => {
        const _select = inputRef.current.select();
        document.execCommand('copy');

        setCopy(true);
        setTimeout(() => {
           setCopy(false) 
        }, 2000);
    }

    return (
        <div>
            <h1 className="text-white">2_Copy</h1>
            
            <input ref={inputRef} type='text' value={text} onChange={(e) => setText(e.target.value)}/>

            <button onClick={HandleClick}>Copy</button>

            {copy && <h1 className="text-[rgba(30,214,76,0.8)]"> Tecto Copiado </h1>}

        </div>
    );
}

export default Copy;
