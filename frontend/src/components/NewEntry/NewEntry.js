import Button from "../Button/Button";
import "./NewEntry.css";


const NewEntry = () => {
  return(
    <form className="new-entry">

        <div className="entry-date">
            <h2>Today</h2> <Button btnClass="btn-dark icon-edit-icon"/>
        </div>

        <div className="morning">
            <div className="affirmations">
                <label htmlFor="text"> Affirmations For The Day </label>
                <input type="text" name="affirmations" id="affirmations"/>
            </div>
            <div className="focus">
                <label htmlFor="text"> Today I Will Focus On.. </label>
                <input type="text" name="focus" id="focus"/>
            </div>
        </div>

        <div className="evening">
            <div className="journal-input">
                <label htmlFor="text"> Journal Entry </label>
                <input type="text" name="journal-input" id="journal-input"/>
            </div>
            <div className="mood">
                <label htmlFor="text"> My Mood </label>
                    <div className="mood-picker">
                    <Button btnClass="btn-dark icon-edit-icon"/>
                    <Button btnClass="btn-dark icon-edit-icon"/>
                    <Button btnClass="btn-dark icon-edit-icon"/>
                    <Button btnClass="btn-dark icon-edit-icon"/>
                    </div>
            </div>
        </div>
    </form>
  )
};

export default NewEntry;
