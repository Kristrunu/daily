import "./SignUp.css";
import Button from "../Button/Button";

const SignUp = () => {
  return (
    <div className="container">
      <form className="signup-form">
        <h2 className="signup-title">Sign Up</h2>

        <div className="input-form">
          <label htmlFor="email"> Full Name </label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
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

        <div className="info-links">
          <p>Already a member?</p>
          <a href="#" className="log-in-link">
            Log In Here
          </a>
        </div>

        <div className="signup-btn">
          <Button btnClass="btn-dark" text="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
