import React, {useState, setState} from 'react'
import './FormResearchCard.scss';

export default function FormResearchCard() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [courseLink, setCourseLink] = useState("");

    console.log(title);

    return(
        <>
<form>
    <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Course Title" name="title" />
    <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Course Description" name="description" />
    <input value={courseLink} onChange={e => setCourseLink(e.target.value)} type="text" placeholder="Course Title" name="title" />
</form>
<button type="submit"> Submit </button>
</>
    )
}