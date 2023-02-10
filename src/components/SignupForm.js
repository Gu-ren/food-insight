import React, { useState } from "react";
import "./SignupForm.css";
import Axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/signup", {
      email: email,
      username: username,
      password: password,
    });
    swal("You have been registered", {
      buttons: false,
      icon: "success",
      timer: 3000,
    }).then((response, err) => {
      navigate("/login");

      // if (response.data.message) {
      //   setRegisterStatus(response.data.message);
      // } else {
      //   setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      // }
      // console.log(err);
    });
  };

  return (
    <div>
      <div className="signup-box">
        <p>REGISTER</p>
        <form>
          {" "}
          <p
            style={{
              fontSize: `12px`,
              textAllign: `center`,
              margin: `5px 0 40px 0px`,
              color: `#28df99`,
              fontWeight: `600`,
            }}
          >
            {registerStatus}
          </p>
          <div className="user-box">
            <input
              required=""
              type="text"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label>User Name</label>
          </div>
          <div className="user-box">
            <input
              required=""
              name="email"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Email</label>
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
          <a className="btn1" onClick={register}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            submit
          </a>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/login" className="a2">
            Login!
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
