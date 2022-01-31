import { useRef, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import './ToDoCard.css';

const ToDoCard = ({ toDo }) => {
    const [content, setContent] = useState(toDo.content);
    const [editing, setEditing] = useState(false);
    const input = useRef(null);
    const { toDoComplete, toDoIncomplete } = useGlobalContext();

    const onEdit = e => {
        e.preventDefault();

        setEditing(true);
        input.current.focus();
    }

    const stopEditing = e => {
        if(e) {
            e.preventDefault();
        }

        setEditing(false);
        setContent(toDo.content);
    }

    const markAsComplete = (e) => {
        e.preventDefault();
    
        axios.put(`/api/entry/${toDo._id}/complete`).then((res) => {
          toDoComplete(res.data);
        });
      };

      const markAsIncomplete = (e) => {
        e.preventDefault();
    
        axios.put(`/api/entry/${toDo._id}/incomplete`).then((res) => {
          toDoIncomplete(res.data);
        });
      };

    return (
        <div className={`todo ${toDo.complete ? 'todo--complete' : ''}`}>
            <input 
                type="checkbox" 
                checked={toDo.complete} 
                onChange={toDo.complete ? markAsIncomplete : markAsComplete}
            />
            <input 
                type="text" 
                value={content} 
                ref={input} 
                readOnly={!editing} 
                onChange={(e) => setContent(e.target.value)}
            />

            <div className="todo__controls">
                {!editing ? (
                    <>
                        {!toDo.complete && (
                            <button onClick={onEdit}>Edit</button>
                        )}
                        <button>Delete</button>
                    </>
                ) : (
                    <>
                        <button onClick={stopEditing}>Cancel</button>
                        <button>Save</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ToDoCard;
