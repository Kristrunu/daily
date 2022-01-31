import "./EntryView.css";

const EntryView = () => {
  return (
    <div className="entry">
      <div className="entry__date">
        <h1>07</h1>
      </div>
      
      <div className="entry__content">
        <div className="entry__title">
            Today I will focus on
        </div>
        <div className="entry__text">
            Dui sit morbi amet ac tellus faucibus elit gravida iaculis. 
            Semper fermentum ipsum tortor vel donec duis. 
            Accumsan, facilisi etiam viverra in egestas. 
            Euismod orci arcu neque turpis sit metus. 
            In vel egestas interdum accumsan.</div>
      </div>
    </div>

  );
};

export default EntryView;