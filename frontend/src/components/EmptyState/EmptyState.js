import "./EmptyState.css";
import { ReactComponent as EmptyImg } from "../../svg/empty-state.svg";

const EmptyState = ({ userName }) => {
  return (
    <div className="empty-state">
        <div className="empty-headline">
          <p className="empty-h2"> Hey {userName},</p>
            <h1 className="empty-h1">  No Journal Entries Yet</h1>
            <p className="empty-h2">Create Your First Memory Today!</p>
        </div>
        <EmptyImg className="empty-svg" />
    </div>
  );
};



export default EmptyState;
