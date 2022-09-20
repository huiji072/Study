import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Login.css';
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

function Login() {

  function sendLoginRequest() {
    // console.log("Im sending a request")
  }

  const [ testStr, setTestStr ] = useState('');
  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  function login(e){
    e.preventDefault();
  }


  const [email, setEmail] = useState("vmvm@naver.com");
  const [password, setPassword] = useState("bothboth");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const loginData = {
    email: "testtest"
  }

  const jsonData = JSON.stringify(loginData)

    useEffect(
        () => {
          login()
        }, []
    );

console.log(jsonData);

const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');

function login(e) {
  axios({
      url: '/members/login',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: jsonData
    //   headers: { xsrfCookieName: 'XSRF-TOKEN',
    //               xsrfHeaderName: 'X-XSRF-TOKEN',
    //               "X-XSRF-TOKEN": csrfToken,
    //               "Content-Type": "application/x-www-form-urlencoded" 
    // }
      
  }).then((res) => {
      callback(res.data);
      console.log(res.data);
  }).catch((error) => {
    console.log(error)
  })
}

  return(
    <div class="loginContainer">
    <h2 class="mb-4">로그인</h2>
         <form class="loginForm" onSubmit={login}>
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
              <button className="btn btn-primary" type='submit'
              onClick={() => sendLoginRequest()}>
                Submit
              </button>
            </div>

            <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken}/>

          </form>
  </div>
);      
}

export default Login;