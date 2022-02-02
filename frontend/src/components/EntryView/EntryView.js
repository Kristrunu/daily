import "./EntryView.css";
import Button from "../Button/Button";

const EntryView = () => {
  return (
    <div className="entryview__container">
      <div className="focus-entry">
        <div className="leftside__date">
          <h1 className="entry-date">07</h1>
        </div>

        <div className="left__container">
          <div className="focus__title">Today I will focus on ..</div>
          <div className="focus__text">
            Dui sit morbi amet ac tellus faucibus elit gravida iaculis. Semper
            fermentum ipsum tortor vel donec duis. Accumsan, facilisi etiam
            viverra in egestas. Euismod orci arcu neque turpis sit metus. In vel
            egestas interdum accumsan.
          </div>

          <div className="task__lists">
            <div className="task__title">My Tasks For The Day</div>
            <div className="task__list">
              <li></li>
              <li></li>
              <li></li>
            </div>

            <div className="task__title">My Tasks For The Day</div>
            <div className="task__list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </div>
          </div>
        </div>

        <div className="right__container">
          <div className="journal__title">Journal Entry</div>
          <div className="journal__text">
            Dui sit morbi amet ac tellus faucibus elit gravida iaculis. Semper
            fermentum ipsum tortor vel donec duis. Accumsan, facilisi etiam
            viverra in egestas. Euismod orci arcu neque turpis sit metus. In vel
            egestas interdum accumsan. Dui sit morbi amet ac tellus faucibus
            elit gravida iaculis. Semper fermentum ipsum tortor vel donec duis.
            Accumsan, facilisi etiam viverra in egestas.
          </div>

          <div className="mood">
            <label className="mood__title" htmlFor="mood-picker">
              {" "}
              My Mood{" "}
            </label>
            <div className="happymood-picker">
              <Button btnClass="btn-light chosen-emoji icon-happiest-emoji" />
            </div>
          </div>

          <div className="e-b-buttons">
            <Button
              btnClass="btn-dark edit-button icon-edit-icon"
              text="Edit Entry"
            />
            <Button btnClass="btn-light back-button icon-x-icon" text="Back" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryView;
