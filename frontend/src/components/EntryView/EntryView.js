import "./EntryView.css";
import Button from "../Button/Button";

const EntryView = () => {
  return (

    <div className="entryview__container">
        <div className="focus-entry">
            <div className="leftside__date">
                <h1>07</h1>
            </div>
      
    <div className="left__container">
        <div className="focus__title">
            Today I will focus on
        </div>
        <div className="focus__text">
            Dui sit morbi amet ac tellus faucibus elit gravida iaculis. 
            Semper fermentum ipsum tortor vel donec duis. 
            Accumsan, facilisi etiam viverra in egestas. 
            Euismod orci arcu neque turpis sit metus. 
            In vel egestas interdum accumsan.
        </div>
      

    <div className="task__lists">
        <div className="task__title"> 
            My Tasks For The Day
        </div>
        <div className="task__list">
            <li></li> 
            <li></li>
            <li></li>
        </div>
      
        <div className="task__title">
            My Tasks For The Day
        </div>
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
        <div className="journal__title">
            Journal Entry
        </div>
        <div className="journal__text">
            Dui sit morbi amet ac tellus faucibus elit gravida iaculis. 
            Semper fermentum ipsum tortor vel donec duis. Accumsan, facilisi etiam viverra in egestas. 
            Euismod orci arcu neque turpis sit metus. In vel egestas interdum accumsan. 
            Dui sit morbi amet ac tellus faucibus elit gravida iaculis. 
            Semper fermentum ipsum tortor vel donec duis. Accumsan, 
            facilisi etiam viverra in egestas. 
        </div>

        <div className="mood">
            <label className="mood__title" htmlFor="mood-picker"> My Mood </label>
            <div className="happymood-picker">
                <Button btnClass="btn-icon icon-happiest-emoji"/>
            </div>
        </div>

        <div className="b-e-d-buttons">
            <Button btnClass="btn-light save icon-save-icon" text="Save Entry"/>
            <Button btnClass="btn-dark cancel icon-x-icon" text="Cancel"/>
            <Button btnClass="btn-light save icon-save-icon" text="Save Entry"/>
        </div>
    
    </div>

    </div>
    </div>
    

  );
};

export default EntryView;