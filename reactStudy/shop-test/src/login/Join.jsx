import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';


class Join extends Component {
    render() {
        return(
            <div className="Join">
                <FormControlLabel 
                control={<Checkbox value="기부자"/>}
                label="기부자"
                />
                <br></br>
                <FormControlLabel 
                control={<Checkbox value="일반회원"/>}
                label="일반회원"
                />
                <br></br>
                <label>이름</label>
                <br></br>
                <TextField 
                label="이름을 입력해주세요" 
                required 
                name="name"
                autoComplete="name"
                autoFocus
                /> 
                <br></br>
                <label>이메일주소</label>
                <br></br>
                <TextField 
                label="이메일 주소를 입력해주세요" 
                required 
                name="email"
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
                <label>주소</label>
                <br></br>
                <TextField 
                label="주소를 입력해주세요" 
                required 
                name="address"
                /> 
                <br></br>

                <Button type='submit' variant="contained" sx={{ mt: 3, ml: 1, mr:1, mb: 2 }} >회원가입</Button>
            </div>
        );
    }
}

export default Join;