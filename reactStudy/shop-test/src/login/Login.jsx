import React, { Component } from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

class Login extends Component {
    render() {
        return(
            <div class="loginContainer">
            <h2 class="mb-4">로그인</h2>
                 <form class="loginForm">
                    <div className="mb-3">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="mb-3">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
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
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
          </div>
        );
    }
}

export default Login;