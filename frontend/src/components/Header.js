import Button from "./Button/Button"
import { Link } from "react-router-dom";

const Header = () => {
  return (

     <div className="header">

        <Link to="/"><h1 className="daily-h1">DAILY</h1></Link>
        <div className="btns">
        
        <Button btnClass="btn-dark btn-entry icon-plus-icon" text="New Entry" />
        
        <Button btnClass="btn-light icon-logout-icon" text="Log Out" />
        </div>
      </div>  
  );
};

export default Header; 