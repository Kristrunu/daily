import "./Entry.css";

const Entry = ({ entry }) => {
  return (
    <div className="entry">
      <div className="entry__date">{entry.date}</div>
      <div className="entry__title">{entry.title}</div>
      <div className="entry__text">{entry.text}</div>
    </div>
  );
};

export default Entry;
