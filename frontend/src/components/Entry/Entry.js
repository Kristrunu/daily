import "./Entry.css";

const Entry = ({ entry }) => {
  return (
    <div className="entry">
      <div className="entry__date">
        <h1>{entry.date}</h1>
      </div>
      <div className="entry__content">
        <div className="entry__title">{entry.title}</div>
        <div className="entry__text">{entry.text}</div>
      </div>
    </div>
  );
};

export default Entry;
