import "./EntryList.css";
import Entry from "../Entry/Entry";



const EntryList = ({ entryList }) => {
  return (
      <div className="entry-list">
        {entryList.map((entryItem, index) => {
          return <Entry entry={entryItem} key={index} />;
        })}
      </div>
  );
};

export default EntryList;
