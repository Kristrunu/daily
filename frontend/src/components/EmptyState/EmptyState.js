import "./EmptyState.css";
import { ReactComponent as EmptyImg } from "../../svg/empty-state.svg";

const EmptyState = ({ userName }) => {
  return (
    <div className="empty-state">
        <div className="empty-headline">
            <h1 className="empty-h1">Hey {userName},<br/> No Journal Entries Yet</h1>
            <p className="empty-h2">Create Your First Memory Today!</p>
        </div>
        <EmptyImg className="empty-svg" />
    </div>
  );
};



export default EmptyState;
