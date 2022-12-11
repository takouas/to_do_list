import React from 'react'
import { useNavigate } from "react-router-dom";
import useAuth from "../../Api/hooks/useAuth";
const SignUp = () => {
  const {firstName,changeFirstName,lastName,changeLastName, phone,changePhone, email, password, changeEmail, changePassword, register,auth } =
  useAuth();

  return (
    <>
    <form name="normal_login" className="login-form">
      <h2>Sign Up!</h2>
      <fieldset>
        <legend>Create Account</legend>
        <ul>
          <li>
            <label for="firstname">First name:</label>
            <input
              type="text"
              id="firstname"
            value={firstName}
            onChange={changeFirstName}
              required
            />
          </li>
          <li>
            <label for="lastname">Last name:</label>
            <input
              type="text"
              id="lastname"
            value={lastName}
            onChange={changeLastName}
              required
            />
          </li>
          <li>
            <label for="phone">Phone:</label>
            <input
              type="text"
              id="phone"
            value={phone}
            onChange={changePhone}
              required
            />
          </li>
          <li>
            <label for="email">Email:</label>
            <input
              type="email"
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
        </ul>
      </fieldset>

      <button
        onClick={ () =>register({ email: email, password: password ,firstName:firstName,lastName:lastName,phone:phone})}
   
      >
        Submit
      </button>
    
    </form>
  </>
  )
}

export default SignUp