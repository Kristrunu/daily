import axios from "axios";
import { useRef, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import './ToDoCard.css';
import '../Button/Button.css';

const EntryCard = ({ entry }) => {
    const [content, setContent] = useState(entry .content);
    const [editing, setEditing] = useState(false);
    const input = useRef(null);
    const { removeEntry, updateEntry } = useGlobalContext();

    const onEdit = (e) => {
        e.preventDefault();
    
        setEditing(true);
        input.current.focus();
    };

    const stopEditing = (e) => {
        if (e) {
            e.preventDefault();
        }
    
        setEditing(false);
        setContent(entry.content);
    };

    const deleteEntry = (e) => {
        e.preventDefault();
    
        if (window.confirm("Are you sure you want to delete this ToDo?")) {
            axios.delete(`/api/entry/${entry._id}`).then(() => {
                removeEntry(entry);
            });
        }
    };

    const editEntry = (e) => {
        e.preventDefault();
    
        axios
            .put(`/api/entry/${entry._id}`, { content })
            .then((res) => {
                updateEntry(res.data);
                setEditing(false);
            })
            .catch(() => {
                stopEditing();
            });
    };

    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

    return (
        
        <div className="entry">
            <div class="entry__date">
                <p className="monthname">{months[new Date(entry.createdAt).getMonth()]}</p>
                <p className="date" >{(new Date(entry.createdAt).getDate() < 10 ? '0' : " ") + (new Date(entry.createdAt).getDate())}</p>
            </div>

            <div className="entry__content">
                <input
                    type="text"
                    ref={input}
                    value={content}
                    readOnly={!editing}
                    onChange={(e) => setContent(e.target.value)}
                />  
        
                <div className="entry__controls">
                    {!editing ? (
                        <>
                            <button className="btn" onClick={onEdit}>Edit</button>
                            <button className="btn" onClick={deleteEntry}>Delete</button>
                        </>
                    ) : (
                        <>
                            <button className="btn" onClick={stopEditing}>Cancel</button>
                            <button className="btn" onClick={editEntry}>Save</button>
                        </>
                    )}
                </div>
            </div>
        </div>
       
    );
};

export default EntryCard;
