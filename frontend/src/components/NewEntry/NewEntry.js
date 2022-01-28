import Button from "../Button/Button";
import "./NewEntry.css";


const NewEntry = () => {
  return(
    <form className="new-entry">

        <div className="entry-date">
            <h2>Today</h2> <Button btnClass="btn-icon icon-edit-icon"/>
        </div>
<div className="all-input">
        <div className="morning">
        <div className="icon-sun-icon sun-svg"></div>
            <div className="affirmations">
                <label className="entry-label" htmlFor="text"> Affirmations For The Day </label>
                <input className="entry-input" type="text" name="affirmations" id="affirmations"/>
            </div>
            <div className="focus">
                <label className="entry-label" htmlFor="text"> Today I Will Focus On.. </label>
                <input className="entry-input" type="text" name="focus" id="focus"/>
            </div>
        </div>

        <div className="evening">
        <div className="icon-moon-icon moon-svg"></div>
            <div className="journal-input">
                <label className="entry-label" htmlFor="text"> Journal Entry </label>
                <input className="entry-input" type="text" name="journal-input" id="journal-input"/>
            </div>
            <div className="mood">
                <label className="entry-label" htmlFor="text"> My Mood </label>
                    <div className="mood-picker">
                    <Button btnClass="btn-icon icon-happiest-emoji"/>
                    <Button btnClass="btn-icon icon-happy-emoji"/>
                    <Button btnClass="btn-icon icon-sad-emoji"/>
                    <Button btnClass="btn-icon icon-saddest-emoji"/>
                    </div>
            </div>
            <a className="add-img" href="#">Add Images From The Day</a>
            <div className="c-s-buttons">
                    <Button btnClass="btn-dark cancel" text="Cancel"/>
                    <Button btnClass="btn-light save" text="Save Entry"/>
            </div>
        </div>
</div>
    </form>
  )
};

export default NewEntry;
