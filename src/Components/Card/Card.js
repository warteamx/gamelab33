import React from 'react';
import './Card.scss';

function Card(props) {
    return(
        <div className="card">
        <img src={props.src} alt=""></img>
        <h3>{props.title}</h3>
        <p> {props.text}</p>

        </div>
    ) 
}


export default Card;