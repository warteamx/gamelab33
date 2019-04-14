import React from 'react';
import branchImage from '../../img/branch.svg';
export default function CardResearch(props) {
    return(
        <div className="card">
        <img src={props.src} alt=""></img>
        <h3>{props.title}</h3>
        <p> {props.description}</p>
        <p> {props.duration}</p>
        <p> <span className="icon icon-branch"/>  {props.branch}</p>   
        <p> <span className="icon icon-type"/> {props.type}</p>
        <p> {props.author}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer" > Link </a>

        </div>
    ) 
}