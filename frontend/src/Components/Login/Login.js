import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Api/hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { email, password, changeEmail, changePassword, authentifacte,auth } =
    useAuth();
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      authentifacte({ email: email, password: password });
     
    };
  return (
    <form name="normal_login" className="login-form">
      <h2>Welcome Back!</h2>
      <fieldset>
        <legend>Log In</legend>
        <ul>
          <li>
            <label for="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={changeEmail}
              required
            />
          </li>
          <li>
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={changePassword}
              required
            />
          </li>
          <li>
            <i />
           
          </li>
        </ul>
      </fieldset>
      <button
        onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
