import Button from "../Button/Button"
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import './Header.css';

const Header = () => {
  const { user, logout } = useGlobalContext();
  const { pathname } = useLocation();
  //console.log(logout)
  return (

    <header>
      <Link to="/">
        <h1 className="daily-h1">DAILY</h1>
      </Link>
      <div className="btns">
        {user ? (
          <Button 
            btnClass="btn-light icon-logout-icon" 
            text="Log Out" 
            onClick={logout} 
          />
        ) : pathname === "/" ? (
          <Link to="/register" className="btn">Signup</Link>
        ) : (
          <Link to="/" className="btn">Login</Link>
        )}
      </div>
    </header>  
  );
};

export default Header;