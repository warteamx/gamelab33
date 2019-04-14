import React, { useState, useEffect } from 'react';
import './GeneralSytleButton.scss';

export default function GeneralStyleButton() {

    const [style, setStyle] = useState("Space");

    const handleLight = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setStyle(e.target.value);
    } 


    return (
        <div className="GeneralStyleButton">
            <button value="light" onClick={handleLight}>Light</button>
            <button value="dark" onClick={handleLight} >Dark</button>
            <button value="space" onClick={handleLight} >Space</button>
        </div>
    )
}