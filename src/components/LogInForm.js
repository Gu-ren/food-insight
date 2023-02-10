import React, { useState } from "react";
import "./LogInForm.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        swal("You are logged in.", {
          buttons: false,
          icon: "success",
          timer: 2000,
        }).then(() => {
          navigate("/");
        });
      }
    });
  };
  return (
    <div className="back">
      <div className="login-box">
        <p>Login</p>
        <form>
          <p
            style={{
              fontSize: `12px`,
              textAllign: `center`,
              margin: `5px 0 40px 0px`,
              color: ` rgb(255, 0, 0)`,
              fontWeight: `600`,
            }}
          >
            {loginStatus}
          </p>
          <div className="user-box">
            <input
              required=""
              name="email"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label>User Name</label>
          </div>
          <div className="user-box">
            <input
              required=""
              name="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>
          <a onClick={login}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            submit
          </a>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="a2">
            Sign up!
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogInForm;
