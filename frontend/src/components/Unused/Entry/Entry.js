import { useState } from "react";
import "./Entry.css";

const Entry = ({ entry }) => {
  const [focusEntry, setFocusEntry] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  return (
    <div className="entry">
      <div className="entry__date">
        <h1>{entry.date}</h1>
      </div>

      <form onSubmit={onSubmit}>
        <div className="entry__content">
          <div className="entry__text">
            <label>Today I will focus on.. </label>
            <input
              type="text"
              value={focusEntry}
              onChange={(e) => setFocusEntry(e.target.value)}
            />
          </div>

          <div className="entry__text">
            <label>Evening thoughts</label>
            <input
              type="text"
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Entry;
