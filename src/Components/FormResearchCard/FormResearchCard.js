import React, { useState, useEffect } from 'react'
import './FormResearchCard.scss';
import fire from '../../fire'

export default function FormResearchCard() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  let data = { title, description, link };

  function sendData(e) {
    e.preventDefault();
    console.log(data);
    fire.collection('card-research').add({
      title: data.title,
      description: data.description,
      link: data.link
    }).then(
      function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert( `You added a new card:
        title: ${data.title } 
        description: ${data.link}
        link: ${data.link}
        `)
        setTitle("");
        setDescription("");
        setLink("");

      }
    ).catch(
      function (error) {
        console.error("Error adding document: ", error);
      }
    );
  }

  return (
    <form onSubmit={(e) => { sendData(e) }}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => {
        e.preventDefault();
        setTitle(e.target.value)
      }
      } />
      <input type="text" placeholder="Description" value={description} onChange={(e) => {
        e.preventDefault();
        setDescription(e.target.value)
      }} />
      <input type="text" placeholder="Link" value={link} onChange={(e) => {
        e.preventDefault();
        setLink(e.target.value)
      }} />
      <button type="submit" className="submit"> Submit Card </button>
    </form>

  )
}