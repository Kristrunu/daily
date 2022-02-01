import axios from "axios";
import { useRef, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import './ToDoCard.css';

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

    return (
        <div className={`todo`}>
            
            <input
                type="text"
                ref={input}
                value={content}
                readOnly={!editing}
                onChange={(e) => setContent(e.target.value)}
            />

            <div className="todo__controls">
                {!editing ? (
                    <>
                        <button onClick={onEdit}>Edit</button>
                        <button onClick={deleteToDo}>Delete</button>
                    </>
                ) : (
                    <>
                        <button onClick={stopEditing}>Cancel</button>
                        <button onClick={editToDo}>Save</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ToDoCard;
