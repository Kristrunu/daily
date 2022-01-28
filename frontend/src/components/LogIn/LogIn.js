import "./LogIn.css";
import Button from "../Button/Button";
import React from 'react'

function LogIn() {
  return (
    <form className="login-form">
        <h2 className="login-title">Log in</h2>
       
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
          <Button btnClass="btn-dark" text="Log In" />
        </div>

    </form>
  )
}

export default LogIn;






/* setti í vitlausan file, en veit 
import React, {useState} from 'react';

const LogIn = () => {
  const adminUser = {
    email: "user@user.com"
    password: "1234"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details =>  {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className="LogIn">
      {(user.email !="") ? (
        <div classNamer="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ): (
        <LoginForm
      )}
    </div>
  );
};

export default LogIn;
*/
