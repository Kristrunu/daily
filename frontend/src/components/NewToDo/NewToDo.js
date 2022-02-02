import axios from 'axios';
import { useState } from 'react';
import { useGlobalContext } from "../../context/GlobalContext";
import './NewToDo.css'
import Button from '../Button/Button';

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
        <form className="new-entry" onSubmit={onSubmit}>
            <div className="all-input-field">
                <label className="entry-title">New Journal Entry</label>
                <textarea className="new-entry__input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
                <div className="add-btn">
                <Button btnClass="btn-light btn-large icon-plus-icon" text="Add" type="submit" disabled={content.length === 0}/>
                </div>
            </div>
        </form>
    );
};

export default NewToDo;
