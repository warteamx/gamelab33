import React from 'react';
import { useStateValue } from '../State/State';
import './GeneralSytleButton.scss';

export default function GeneralStyleButton() {

    const [{ theme }, dispatch] = useStateValue();
    
    return (
        <>  
        <div className="GeneralStyleButton">
            <button style={{ color: "black", background:"white" }} value="light"
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme: { primary: 'black', background: "rgba(255,255,255,0.8)" }
                })}>Light</button>
            <button style={{ color: "white", background: "black"  }} value="dark"
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme: { primary: 'white',  background: "rgba(0,0,0,0.8)" }
                })}>Dark</button>
            <button sstyle={{ color: "black", background:"transparent" }} value="space"
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme: { primary: 'white', background: "rgba(0,0,0,0)"  }
                })}>Space</button>
        </div>
        </>
    )
}