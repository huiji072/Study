import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

class Login extends Component {
    render() {
        return(
            <div className="Login">
            {/* <FormControlLabel 
              control={<Checkbox value="기부자"/>}
              label="기부자"
            />
            <FormControlLabel 
              control={<Checkbox value="일반회원"/>}
              label="일반회원"
            /> */}
            <br></br>
            <TextField 
              label="Email Address" 
              required 
              name="email"
              autoComplete="email"
              autoFocus
            /> 
            <br></br>
            <TextField 
              label="Password" 
              type="password" 
              required
              name="password"
              autoComplete="current-password"
            />
            <br></br>
            {/* <FormControlLabel 
              control={<Checkbox value="remember"/>}
              label="remember"
            /> */}
            <Button type='submit' variant="contained" sx={{ mt: 3, ml: 1, mr:1, mb: 2 }} >로그인</Button>
            <Button type='submit' variant="contained" sx={{ mt: 3, ml: 1, mr:1, mb: 2 }} >회원가입</Button>
          </div>
        );
    }
}

export default Login;