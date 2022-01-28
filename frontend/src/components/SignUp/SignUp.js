import "./SignUp.css";
import Button from "../Button/Button";

const SignUp = () => {
  return (
    <form className="signup-form">
        <h2 className="signup-title">Sign Up</h2>
        
         <div className="input-form">
          <label htmlFor="email"> Email Address </label>
          <input type="email" name="email" id="email"/>
        </div>

        <div className="input-form">
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" id="password"/>
        </div>

        <div className="info-links">
          <a href="#" className="forgot-pass">Forgot Password</a>
          <a href="#" className="sign-up">No account? Sign up here!</a>
        </div>
        
        <div className="login-btn">
          <Button btnClass="btn-dark" text="Sign Up" />
        </div>

    </form>
  )
};

export default SignUp;
