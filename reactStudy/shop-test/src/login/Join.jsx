import React, { Component } from 'react';
import './Join.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';


class Join extends Component {
    render() {
        return(
            <div>
                <form class="loginForm">
                    <h3>Join</h3>

                    <div class="form-group">
                    <input type="checkbox" id="chkseller" name="chkseller" className="custom-control-input"/>
                    <label className="custom-control-label">기부자</label>
                    <br/>
                    <input type="checkbox" id="chkbuyer" name="chkbuyer" className="custom-control-input"/>
                    <label className="custom-control-label">일반회원</label>
                    </div>

                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                      />
                    </div>
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
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                      />
                    </div>
                    <div className="mb-3">
                      {/* <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          Remember me
                        </label>
                      </div> */}
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

export default Join;