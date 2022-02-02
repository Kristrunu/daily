import "./EntryList.css";
import Entry from "../Entry/Entry";
import Button from "../../Button/Button";

const EntryList = ({ entryList }) => {
  return (
    <>
      <div className="header">
        <h1 className="daily-h1">DAILY</h1>
        <div className="btns">
          <Button
            btnClass="btn-dark btn-entry icon-plus-icon"
            text="New Entry"
          />
          <Button btnClass="btn-light icon-logout-icon" text="Log Out" />
        </div>
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
