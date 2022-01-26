import "./Entry.css";

const Entry = ({ entry }) => {
  return (
    <div className="entry">
      <div className="entry__date">
        <div>{entry.date}</div>
      </div>
      <div className="entry__content">
        <div className="entry__title">{entry.title}</div>
        <div className="entry__text">{entry.text}</div>
      </div>
    </div>
  );
};

export default Entry;
