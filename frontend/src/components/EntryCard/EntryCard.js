import axios from "axios";
import { useRef, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import Button from "../Button/Button";
import "./EntryCard.css";

const EntryCard = ({ entry }) => {
    const [content, setContent] = useState(entry .content);
    const [editing, setEditing] = useState(false);
    const input = useRef(null);
    const { removeEntry, updateEntry } = useGlobalContext();

    const onEdit = (e) => {
        e.preventDefault();
        setEditing(true)
        input.current.focus()
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
    
        if (window.confirm("Are you sure you want to delete this Entry?")) {
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

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

    return (
        
        <div className="entry">
            <div class="entry__date">
                <p className="date" >{(new Date(entry.createdAt).getDate() < 10 ? '0' : " ") + (new Date(entry.createdAt).getDate())}</p>
                <p className="monthname">{months[new Date(entry.createdAt).getMonth()]}</p>
            </div>

            <div className="entry__content">
                <textarea
                className="entry-text"
                    ref={input}
                    value={content}
                    readOnly={!editing}
                    onChange={(e) => setContent(e.target.value)}
                />  
        
                <div className="entry__controls">
                    {!editing ? (
                         <>
                         <Button text="Edit" onClick={onEdit} />
                         <Button text="Delete" onClick={deleteEntry} />
                       </>
                     ) : (
                       <>
                         <Button text="Save" onClick={editEntry} />
                         <Button text="Cancel" onClick={stopEditing} />
                       </>
                    )}
                </div>
            </div>
    
      </div>
   
  );
};

export default EntryCard;
