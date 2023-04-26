import React from 'react';
import { useState, useRef } from 'react';

const Focus = () => {

    const[text, settext] = useState()
    const inputRef = useRef()

    const handlechange = (e) => {
        settext(e.target.value)
    }

    const handleClick = () => {
        console.log(text)
        settext('')
        inputRef.current.focus()
    }

    return (
        <div>
            <h1 className="text-white">1_ Focus</h1>

            <input ref={inputRef} className="bg-slate-300 border-[1px] border-[rgb(45,155,122)] rounded-[5px]" type='text' value={text} onChange={(e) => handlechange(e)}/>

            <button className="ml-2 p-1 rounded-full bg-[rgba(45,155,122,0.77)] cursor-pointer hover:bg-[rgba(45,139,155,0.77)]" onClick={handleClick}>Focus</button>
        </div>
    );
}

export default Focus;
