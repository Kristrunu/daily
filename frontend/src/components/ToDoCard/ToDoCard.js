import { useRef, useState } from "react";
import './ToDoCard.css';

const ToDoCard = ({ toDo }) => {
    const [content, setContent] = useState(toDo.content);
    const [editing, setEditing] = useState(false);
    const input = useRef(null);

    const onEdit = e => {
        e.preventDefault();

        setEditing(true);
        input.current.focus();
    }

    return (
        <div className={`todo ${toDo.complete ? 'todo--complete' : ''}`}>
            <input type="checkbox" />
            <input 
                type="text" 
                value={content} 
                ref={input} 
                readOnly={!editing} 
                onChange={(e) => setContent(e.target.value)}
            />

            <div className="todo__controls">
                {!toDo.complete && (<button onClick={onEdit}>Edit</button>)}
                <button>Delete</button>
            </div>
        </div>
    );
};

export default ToDoCard;
