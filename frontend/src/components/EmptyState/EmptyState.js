import "./EmptyState.css";
import Button from "../Button/Button";
import { ReactComponent as EmptyImg } from "../../svg/empty-state.svg";

const EmptyState = () => {
  return (
    <div className="empty-state">
        <div className="empty-headline">
            <h1 className="empty-h1">No Journal Entries Yet</h1>
            <p className="empty-h2">Create Your First Memory Today!</p>
            <Button
            btnClass="btn-dark btn-large icon-plus-icon"
            text="New Entry"/>
        </div>
        <EmptyImg className="empty-svg" />
    </div>
  );
};

export default EmptyState;
