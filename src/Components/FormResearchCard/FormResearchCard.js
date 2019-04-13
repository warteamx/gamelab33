import React, { useState, useEffect } from 'react'
import './FormResearchCard.scss';
import fire from '../../fire'

export default function FormResearchCard() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [branch, setBranch] = useState("")

  let data = { title, description, link, branch };

  function sendData(e) {
    e.preventDefault();
    console.log(data);
    fire.collection('card-research').add({
      title: data.title,
      description: data.description,
      link: data.link,
      branch: data.branch
    }).then(
      function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert(`You added a new card:
        title: ${data.title} 
        description: ${data.link}
        link: ${data.link}
        branch: ${data.branch}
        `)
        setTitle("");
        setDescription("");
        setLink("");
        setBranch("");

      }
    ).catch(
      function (error) {
        console.error("Error adding document: ", error);
      }
    );
  }

  return (
    <form  onSubmit={(e) => { sendData(e) }}>
      <input className="inputForm" type="text" placeholder="Title" required minLength="3" maxLength="140"
        value={title} onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value)
        }
        } />
      <input className="inputForm" type="text" placeholder="Description" required minLength="30" maxLength="300"
        value={description} onChange={(e) => {
          e.preventDefault();
          setDescription(e.target.value)
        }} />
      <input className="inputForm" type="url" placeholder="https://example.com" required pattern="https?://.+"
        value={link} onChange={(e) => {
          e.preventDefault();
          setLink(e.target.value)
        }} />


      <label>
        <input  className="inputRadio" type="radio" value="business" checked={branch === "business"}
          onChange={(e) => {
            setBranch(e.target.value);
           
          }} /> Business
      </label>
      <label>
        <input className="inputRadio" type="radio" value="tech" checked={branch === "tech"}
          onChange={(e) => {
            setBranch(e.target.value);
            
          }} /> Tech
      </label>
      <label>
        <input className="inputRadio" type="radio" value="health" checked={branch === "health"}
          onChange={(e) => {
            setBranch(e.target.value);
            
          }} /> Health
</label>


      <button type="submit" className="submit"> Submit Card </button>
    </form>

  )
}