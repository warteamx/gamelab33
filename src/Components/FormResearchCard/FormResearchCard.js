import React, { useState, useEffect } from 'react'
import './FormResearchCard.scss';
import {fire} from '../../fire';

export default function FormResearchCard() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [branch, setBranch] = useState("");
  const [type, setType] = useState("");

  let data = { title, description, link, branch, type };

  function sendData(e) {
    e.preventDefault();
    console.log(data);
    fire.collection('card').add({
      title: data.title,
      description: data.description,
      link: data.link,
      branch: data.branch,
      type: data.type
    }).then(
      function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert(`You added a new card:
        title: ${data.title} 
        description: ${data.link}
        link: ${data.link}
        branch: ${data.branch}
        type: ${data.type}
        `)
        setTitle("");
        setDescription("");
        setLink("");
        setBranch("");
        setType("");

      }
    ).catch(
      function (error) {
        console.error("Error adding document: ", error);
      }
    );
  }

  return (
    <form onSubmit={(e) => { sendData(e) }}>
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



      <hr />
      <p className="paragraph"> Branch of Knowledge: </p>
      <label>
        <input className="inputRadio" type="radio" name="branch" value="business" checked={branch === "business"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Business
      </label>
      <label>
        <input className="inputRadio" type="radio" name="branch" value="tech" checked={branch === "tech"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Tech
      </label>
      <label>
        <input className="inputRadio" type="radio" name="branch" value="health" checked={branch === "health"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Health
</label>



<p className="paragraph"> Type of Card: </p>
      <label>
        <input className="inputRadio" type="radio" name="type" value="article" checked={type === "article"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Article
      </label>
      <label>
        <input className="inputRadio" type="radio" name="type" value="book" checked={type === "book"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Book
      </label>
      <label>
        <input className="inputRadio" type="radio" name="type" value="website" checked={type === "website"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Website
      </label>
      <label>
        <input className="inputRadio" type="radio" name="type" value="repository" checked={type === "repository"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Git Repository
      </label>
      <label>
        <input className="inputRadio" type="radio" name="type" value="other" checked={type === "other"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Others...
      </label>



      <button type="submit" className="submit"> Submit Card </button>
    </form>

  )
}