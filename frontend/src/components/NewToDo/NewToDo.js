import axios from 'axios';
import { useState } from 'react';
import { useGlobalContext } from "../../context/GlobalContext";
import './NewToDo.css'

const NewToDo = () => {
    const [content, setContent] = useState('');
    const { addToDo } = useGlobalContext();

    const onSubmit = e => {
        e.preventDefault();

        axios.post('/api/entry/new', {content}).then(res => {
            setContent('');
            addToDo(res.data);
        })
    }

    return (
        <form className="new" onSubmit={onSubmit}>
            <textarea className="new-input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="btn-dark btn-large icon-plus-icon" type="submit" disabled={content.length === 0}>
                Add
            </button>
        </form>
    );
};

export default NewToDo;
