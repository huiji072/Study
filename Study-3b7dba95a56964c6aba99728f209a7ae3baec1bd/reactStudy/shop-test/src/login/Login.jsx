import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Login.css';

function Login() {

  let formData = new FormData();

  const [ testStr, setTestStr ] = useState('');
  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  const signInForm = (e) => {
    e.preventDefault();
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginName, setLoginName] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  formData.append("email", email);
  formData.append("password", password);

const sendLoginRequest = () => {

    console.log("email: ", email);

      axios({
        url: '/members/login',
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        data: formData
      }).then((res) => {
        console.log("/members/login res : ", res.data);
        window.location.href = "/";
      }).catch((error) => {
        console.log(error);
      })

      axios({
        url: '/members/login/session',
        method: "get",
        headers: {'Content-Type': 'application/json'},
        params: {
          "email": email
        }
      }).then((res) => {
        callback(res.data);
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })



}

  return(
    <div className="loginContainer">
    <h2 className="mb-4">로그인</h2>
    {/* <h3>{testStr.loginInfo[0].loginName}</h3> */}
         <form className="loginForm" onSubmit={signInForm}>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary" id='siginBtn'
              onClick={sendLoginRequest}>
                Sign in
              </button>
            </div>

          </form>
  </div>
);      
}

export default Login;