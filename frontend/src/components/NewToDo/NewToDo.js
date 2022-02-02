import axios from 'axios';
import { useState } from 'react';
import { useGlobalContext } from "../../context/GlobalContext";
import './NewToDo.css'

const NewEntry = () => {
    const [content, setContent] = useState('');
    const { addEntry } = useGlobalContext();

    const onSubmit = e => {
        e.preventDefault();

        axios.post('/api/entry/new', {content}).then(res => {
            setContent('');
            addEntry(res.data);
        })
    }

    return (
        <form className="new-entry" onSubmit={onSubmit}>
            <textarea className="new-entry__input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="btn-dark btn-large icon-plus-icon" type="submit" disabled={content.length === 0}>
                Add
            </button>
        </form>
    );
};

export default NewEntry;
