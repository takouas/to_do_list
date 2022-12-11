import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Modal, Button, Select, Input, Form, Upload, Pagination } from "antd";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import useAuth from "../Api/hooks/useAuth";

const EntryPage = () => {
  const [currentView, setCurrentView] = useState("logIn");
const {forgetPassword,email,changeEmail }=useAuth()
  const changeView = (view) => {
    setCurrentView(view);
  };

  const ChangecurrentView = () => {
    switch (currentView) {
      case "signUp":
        return (
          <>
            <SignUp />

            <button
              type="button"
              style={{
                borderColor: "transparent",
                backgroundColor: "transparent",
                position: "relative",
                top: "560px",
                left: "480px",
              }}
              onClick={() => changeView("logIn")}
            >
             
              <b>
                
                <h3>
                
                  <u>
                   
                    <RightOutlined />
                    Have an Account?{" "}
                  </u>
                </h3>{" "}
              </b>
            </button>
          </>
        );
        break;
      case "logIn":
        return (
          <>
            <Login />
            <a style={{
                borderColor: "transparent",
                backgroundColor: "transparent",
                position: "relative",
                top: "500px",
                left: "550px",
              }} onClick={()=>changeView("PWReset")} href="#">
              Forgot Password?
            </a>
            <button
              type="button"
              style={{
                borderColor: "transparent",
                backgroundColor: "transparent",
                position: "relative",
                top: "480px",
                left: "200px",
              }}
              onClick={() => changeView("signUp")}
            >
              {" "}
              <b>
                {" "}
                <h3>
                  <u>
                    <RightOutlined />
                    Create an Account{" "}
                  </u>
                </h3>
              </b>
            </button>
          </>
        );

        break;
      case "PWReset":
        return (
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input  
                    value ={email}
                    onChange={changeEmail}
              required type="email" id="email"  />
                </li>
              </ul>
            </fieldset>
            <button  onClick={()=>forgetPassword({email:email})}>Send Reset Link</button>
            <button type="button" onClick={() => changeView("logIn")}>
              Go Back
            </button>
          </form>
        );

      default:
        break;
    }
  };
  return <section id="entry-page">{ChangecurrentView()}</section>;
};

export default EntryPage;
