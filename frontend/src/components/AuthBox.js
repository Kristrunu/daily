import Button from './Button/Button';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as LogoBackground } from '../svg/login-bg.svg';


const AuthBox = () => { 
  return (
    <div className="container">
      <div className="left-side">
        
        <h2 className="login-title">Log in</h2>

        <form className="login-form">
          <div className="input-form">
            <label htmlFor="email"> Email Address </label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="input-form">
            <label htmlFor="password"> Password </label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </form>


        <div className="info-link">
          <a href="/" className="forgot-pass">
            Forgot Password
          </a>
          <a href="/" className="sign-up">
            No account? Sign up here!
          </a>
        </div>

        <div className="login-btn">
          <Button
            btnClass="btn-dark log-in-btn icon-login-icon"
            text="Log In"
          />
        </div>
      </div>
      <div className="right-side">
        <Logo className="logo" />
        <LogoBackground className="logo-bg" />
      </div>
    </div>
  );
};

export default AuthBox;