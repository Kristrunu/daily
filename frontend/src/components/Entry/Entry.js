import React from "react";
import "./Entry.css";

const Entry = ({ entry }) => {
  const[focusEntry, setFocusEntry] = React.useState("");
  const[eveningEntry, setEveningEntry] = React.useState("");
  return (
    <div className="entry">
      <div className="entry__date">
        <h1>{entry.date}</h1>
      </div>

      <div className="entry__content">
        <div className="entry__text">
          <label>Today I will focus on.. </label>
          <input
          type="text"
          value={focusEntry}
          onChange={(e) => setFocusEntry(e.target.value)} />
           </div>

        <div className="entry__text">
          <label>Evening thoughts</label>
          <input
          type="text"
          value={eveningEntry}
          onChange={(e) => setEveningEntry(e.target.value)} />
        </div>
      </div>

    </div>
  );
};

export default Entry;
