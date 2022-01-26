import "./EntryList.css";
import Entry from "../Entry/Entry";
import Button from "../Button/Button";


const EntryList = ({ entryList }) => {
  return (
      <>
      <h1 className="logo">DAILY</h1>
      <Button btnClass="btn btn-dark plus-icon" text="New Entry" />
      <Button btnClass="btn btn-light user-icon" text="Username" />
      <div className="entry-list">
        {entryList.map((entryItem, index) => {
          return <Entry entry={entryItem} key={index} />;
        })}
      </div>
      </>
  );
};

export default EntryList;
