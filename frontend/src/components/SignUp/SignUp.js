import "./SignUp.css";
import Button from "../Button/Button";
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as LogoBackground } from '../../svg/login-bg.svg';

const SignUp = () => {
  return (
    <div className="container">
      <div className="left-side">
        <h2 className="signup-title">Sign Up</h2>

      <form className="signup-form">
        <div className="input-form">
          <label htmlFor="email"> Full Name </label>
          <input
            className="input"
            type="name"
            name="name"
            id="name"
            placeholder="Full Name"
          />
        </div>

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

        <div className="input-form">
          <label htmlFor="password"> Confirm Password </label>
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
          />
        </div>

        <div className="links">
          <p>Already a member?</p>
          <a href="/" className="log-in-link">
            Log In Here
          </a>
        </div>

        <div className="signup-btn">
          <Button btnClass="btn-dark icon-login-icon" text="Sign Up" />
        </div>
      </form>
      </div>

      <div className="right-side">
        <Logo className="logo" />
        <LogoBackground className="logo-bg" />
      </div>

    </div>
  );
};

export default SignUp;
