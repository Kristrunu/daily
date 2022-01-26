import "./LogIn.css";

import React from 'react'

function LogIn() {
  return (
    <form>
        <h2>Login</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" id="email"/>
        </div>
        <div className="form-group">
        <label htmlFor="password"> Password </label>
        <input type="password" name="password" id="password"/>
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
