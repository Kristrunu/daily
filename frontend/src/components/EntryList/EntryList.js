import "./EntryList.css";
import Entry from "../Entry/Entry";
import Button from "../Button/Button";

const EntryList = ({ entryList }) => {
  return (
      <>
      <h1 className="logo">DAILY</h1>
      <div className="btns">
      <Button btnClass="btn-dark plus-icon" text="New Entry" />
      <Button btnClass="btn-light user-icon" text="Log Out" />
      </div>
      <div className="entry-list">
        {entryList.map((entryItem, index) => {
          return <Entry entry={entryItem} key={index} />;
        })}
      </div>
      </>
  );
};

export default EntryList;
