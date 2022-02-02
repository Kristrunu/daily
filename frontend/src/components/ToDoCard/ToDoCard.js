import axios from "axios";
import { useRef, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import './ToDoCard.css';
import '../Button/Button.css';

const ToDoCard = ({ toDo }) => {
    const [content, setContent] = useState(toDo.content);
    const [editing, setEditing] = useState(false);
    const input = useRef(null);
    const { removeToDo, updateToDo } = useGlobalContext();

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
        setContent(toDo.content);
    };

    const deleteToDo = (e) => {
        e.preventDefault();
    
        if (window.confirm("Are you sure you want to delete this ToDo?")) {
            axios.delete(`/api/entry/${toDo._id}`).then(() => {
                removeToDo(toDo);
            });
        }
    };

    const editToDo = (e) => {
        e.preventDefault();
    
        axios
            .put(`/api/entry/${toDo._id}`, { content })
            .then((res) => {
                updateToDo(res.data);
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
                <p class="monthname">{months[new Date(toDo.createdAt).getMonth()]}</p>
                <p class="date" >{(new Date(toDo.createdAt).getDate() < 10 ? '0' : " ") + (new Date(toDo.createdAt).getDate())}</p>
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
                            <button className="btn" onClick={deleteToDo}>Delete</button>
                        </>
                    ) : (
                        <>
                            <button className="btn" onClick={stopEditing}>Cancel</button>
                            <button className="btn" onClick={editToDo}>Save</button>
                        </>
                    )}
                </div>
            </div>
        </div>
       
    );
};

export default ToDoCard;
