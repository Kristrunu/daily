import Button from "../Button/Button";
import "./NewEntry.css";


const NewEntry = () => {
  return(
    <form className="new-entry">

        <div className="headline-container">
            <h2 className="entry-headline">New Entry</h2>
        </div>
        <div className="all-input">
            <div className="morning">
            <div className="icon-sun-icon sun-svg"></div>
                <div className="focus">
                    <label className="entry-label" htmlFor="focus"> Today I Will Focus On.. </label>
                    <textarea className="entry-input" name="focus" id="focus" cols="30" rows="7"/>
                </div>
                
                <div className="tasks-section">
                    <div className="tasks">
                        <label className="entry-label" htmlFor="tasks"> Tasks For The Day </label>
                        <input className="input-small" type="text" name="tasks" id="tasks"/>
                    </div>
                        <Button btnClass="btn-dark icon-plus-icon add-task-btn"/>
                </div>
        </div>

        <div className="evening">
        <div className="icon-moon-icon moon-svg"></div>
            <div className="journal-input">
                <label className="entry-label" htmlFor="journalEntry"> Journal Entry </label>
                <textarea className="entry-input" name="journalEntry" id="journalEntry" cols="30" rows="7"/>
            </div>

            <div className="mood">
                <label className="entry-label" htmlFor="mood-picker"> My Mood </label>
                    <div className="mood-picker">
                    <Button btnClass="btn-icon icon-happiest-emoji"/>
                    <Button btnClass="btn-icon icon-happy-emoji"/>
                    <Button btnClass="btn-icon icon-sad-emoji"/>
                    <Button btnClass="btn-icon icon-saddest-emoji"/>
                    </div>
            </div>
            <Button btnClass="btn-dark add-img" text="Add Images From The Day"/>
            <div className="c-s-buttons">
                    <Button btnClass="btn-dark cancel icon-x-icon" text="Cancel"/>
                    <Button btnClass="btn-light save icon-save-icon" text="Save Entry"/>
            </div>
        </div>
</div>
    </form>
  )
};

export default NewEntry;
