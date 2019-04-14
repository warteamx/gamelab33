import React from 'react';

export default function Card(props) {
    return(
        <div className="card" style={{background: props.background}}>
        <img src={props.src} alt="" style={{maxHeight: "100px"}} ></img>
        <h3>{props.title}</h3>
        <p> {props.text}</p>

        </div>
    ) 
}


