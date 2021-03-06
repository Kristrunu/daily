import Button from "../Button/Button"
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext.js";
import './Header.css';

const Header = () => {
  const { user, logout } = useGlobalContext();
  const { pathname } = useLocation();
  return (

    <header>
      <div className="header__logo">
        {user ? (<h1 className="daily-h1">DAILY</h1>) : ('')}
      </div>
      

      <div className="btns">
        {user ? (
          <div className="btns__logged-in">
            <div className="user icon-user-icon">{user.name}</div>
            <Button 
              btnClass="btn-light icon-logout-icon" 
              text="Log Out" onClick={ logout } 
            />
          </div>
        ) : pathname === "/" ? (
          <Link to="/register" className="btn">Sign Up</Link>
        ) : (
          <Link to="/" className="btn">Log In</Link>
        )}
      </div>
    </header>  
  );
};

export default Header;