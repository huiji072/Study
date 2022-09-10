import React, { Component } from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

class Login extends Component {
    render() {
        return(
            <div>
                <form role="form" method="post" action="/members/login" class="loginForm">
                  <div class="form-group">
                    <label >이메일주소</label>
                    <input type="email" name="email" class="form-control" placeholder="이메일을 입력해주세요"/>
                  </div>
                  <div class="form-group">
                    <label>비밀번호</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="비밀번호 입력"/>
                  </div>
                  <p class="error"></p>
                  <button class="btn btn-primary">로그인</button>
                  <button type="button" class="btn btn-primary" onClick="location.href='/members/new'">회원가입</button>
                  <input type="hidden" />
              </form>
          </div>
        );
    }
}

export default Login;